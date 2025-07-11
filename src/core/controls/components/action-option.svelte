<script lang="ts">
  import type { ActionInstance, ActionOption } from '@/main.ts';
  import log from 'loglevel';
  import { onMount } from 'svelte';

  const { actionInstance, actionOption }: {
    actionInstance: ActionInstance | null,
    actionOption: ActionOption | null,
  } = $props();

  let selectedValue: string | number | boolean = $state('');

  onMount(() => {
    if (actionOption) {
      if (actionOption.type === 'select') {
        selectedValue = actionOption.value.value;
      } else if (actionOption.type === 'toggle') {
        selectedValue = actionOption.value;
      }
    }
  });

  const handleOptionChange = (event: Event) => {
    if (!actionInstance || !actionOption) {
      log.error('Can\'t apply option value', actionInstance, actionOption);
      return;
    }

    if (actionOption?.type === 'toggle') {
      const target = event.target as HTMLInputElement;
      selectedValue = target.checked;
    } else if (actionOption?.type === 'select') {
      const target = event.target as HTMLSelectElement;
      selectedValue = target.value;
    }

    actionInstance.applyOptionValue(actionOption.name, selectedValue);
  };
</script>

{#if actionOption}
  <div class="action-option">
    {#if actionOption.type === 'select'}
      <label for={actionOption.name}>{actionOption.label}</label>
      <select
        id={actionOption.name}
        bind:value={selectedValue}
        onchange={handleOptionChange}>
        {#each actionOption.choices as choiceItem}
          <option value={choiceItem.value}>{choiceItem.title}</option>
        {/each}
      </select>
    {:else if actionOption.type === 'toggle' && typeof selectedValue === 'boolean'}
      <label for={actionOption.name}>
        <input
          type="checkbox"
          id={String(actionOption.name)}
          bind:checked={selectedValue}
          onchange={handleOptionChange} />
        {actionOption.label}
      </label>
    {:else}
      <span>Unknown type</span>
    {/if}
  </div>
{/if}

<style lang="scss">
  .action-option {
    display: flex;
    align-items: center;
    padding: 0.2rem;

    label {
      margin-right: 0.5rem;
      white-space: nowrap;
      cursor: pointer;
    }

    select, input[type="checkbox"] {
      cursor: pointer;
    }
  }
</style>
