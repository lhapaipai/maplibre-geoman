import { EventBus } from '@/core/events/bus.ts';
import { BaseEventListener, gmPrefix } from '@/core/events/listeners/base.ts';
import type { ActionInstanceKey, Geoman, GMDrawEvent, GMEvent, MapEventHandlers } from '@/main.ts';
import { BaseDraw } from '@/modes/draw/base.ts';
import { isGmDrawEvent } from '@/utils/guards/modes.ts';
import log from 'loglevel';


export class DrawEventListener extends BaseEventListener {
  mapEventHandlers: MapEventHandlers = {
    [`${gmPrefix}:draw`]: this.handleDrawEvent.bind(this),
  };

  constructor(gm: Geoman, bus: EventBus) {
    super(gm);
    bus.attachEvents(this.mapEventHandlers);
  }

  handleDrawEvent(payload: GMEvent) {
    if (!isGmDrawEvent(payload)) {
      return { next: true };
    }

    const actionInstanceKey: ActionInstanceKey = `${payload.type}__${payload.mode}`;

    if (payload.action === 'mode_start') {
      this.trackExclusiveModes(payload);
      this.start(actionInstanceKey, payload);
      this.trackRelatedModes(payload);
    } else if (payload.action === 'mode_end') {
      this.trackRelatedModes(payload);
      this.end(actionInstanceKey);
    }

    return { next: true };
  }

  start(actionInstanceKey: ActionInstanceKey, payload: GMDrawEvent) {
    const actionInstance = this.gm.createDrawInstance(payload.mode);
    if (!actionInstance) {
      return;
    }

    if (actionInstanceKey in this.gm.actionInstances) {
      log.error(`Action instance "${actionInstanceKey}" already exists`);
    }

    this.gm.actionInstances[actionInstanceKey] = actionInstance;
    actionInstance.startAction();
  }

  end(actionInstanceKey: ActionInstanceKey) {
    const actionInstance = this.gm.actionInstances[actionInstanceKey];
    if (actionInstance instanceof BaseDraw) {
      actionInstance.endAction();
      delete this.gm.actionInstances[actionInstanceKey];
    } else {
      console.error(
        `Wrong action instance for draw event "${actionInstanceKey}":`,
        actionInstance,
      );
    }
  }
}
