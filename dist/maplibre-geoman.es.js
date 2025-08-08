var Tp = Object.defineProperty;
var Np = (n, r, e) => r in n ? Tp(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e;
var O = (n, r, e) => Np(n, typeof r != "symbol" ? r + "" : r, e);
import wu from "maplibre-gl";
const ff = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mLYpUHOwgopChOtlFRRxrFYpQIdQKrTqYXPoHTRqSFBdHwbXg4M9i1cHFWVcHV0EQ/AFxdnBSdJESv0sKLWK847iH97735e47QGhWmWaFEoCm22YmlRRz+VWx5xUhmmGMIi4zy5iTpDR8x9c9Any/i/Ms/7o/R79asBgQEIkTzDBt4g3imU3b4LxPHGVlWSU+J54w6YLEj1xXPH7jXHJZ4JlRM5uZJ44Si6UuVrqYlU2NeJo4pmo65Qs5j1XOW5y1ap2178lfGCnoK8tcpzWCFBaxBAkiFNRRQRU24rTrpFjI0HnSxz/s+iVyKeSqgJFjATVokF0/+B/87q1VnJr0kiJJIPziOB9jQM8u0Go4zvex47ROgOAzcKV3/LUmMPtJeqOjxY6AgW3g4rqjKXvA5Q4w9GTIpuxKQVpCsQi8n9E35YHBW6Bvzetb+xynD0CWepW+AQ4OgfESZa/7vLu3u2//1rT79wN2rHKoBaSKHQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB+gEBAUlKJesuC4AABWbSURBVHja7Z3fcxTHEce/t1ohYekA2QaBDBgocGLHNmW7Kg4pV9l5SeUleci/4b9H/0aeU3mJXXEF5yEmEOw4hgKFH7JBtpEQwhLS3eVhunV9w+7tHWh3e2Z7q64OyZJ18+Mz3+7pme4W7Bn6tBdXWwD4lYj3FMA0gCkAswCOAJihrw8AOAfgdwDOAmgDmKDf3YunB6ADYB3AdQB/BnANwEMAWwA2ANwH8Ii+3gSwA6BLv8vvvfWPD/VslPOflnVBLhQQYKQCiEl6zQCYB/AigGMA3gBwGMB+guQQgFfpfZKg2sunC2AbwCqA/9H7FoCfAKwA+ArAtwB+BHCPoNmmFwOzw6AAgMFigIyrFhMChgMERJu+PkJQHCNI5un7qfi9F+i9VUJf88TeBvCY3js06TcIih8Jkq9IUTZIde6R2myI3zNVMUBGAiOlST1NrwMAjgM4BeAtAUKbIJklxZim35WAJSXB4UPSlROcINkkRXlEcKwLcP4NYAnAHQJlk17bUlUMlIYDkgHGPpr8BwEcJWVYAPA2AXKcwGAza0ooRiL6s1Vx//Yy3rtCUbaEebVOYCwBuAJgmZTmOwBrBNETA6XBgAwBYw7ACYLhbYLjRYLlIP3MpOest2oAYhxgep5zvk0QrBEUPxIkVwia2wAeGCgNBGQEME4DeIcAOUHm1bRwztMaVWIv1WVHOOubZGbdJkAuAbhpoDQIELErlRSAcZq+nhNqMeEpReh91vOUpSNU5QGBcbMAlG5Tdr1aDYGjRROdYxZFYOzzHO4Y+8o3w3YIgCJQOLbSaYKatBoAR0JKsB/Ay2Q+nRkRjKaYoL0RQblBZtj3cPGWbQDdmCFpRQyGVI0DcFuybwL4FVx0+6SBMRYot+Ci9p8DuAq3dfwwdjVpRQxHCheoO0xKcY7geJNgaRsYY4GyTlBcJUiukbKswAUqd2KEpBUhHBM06WfgotznAVwgQE6TmbWffiYxMEYCpUsA/ETm1U0C5CKAy3DR+g36mU5MkLQiAsM3qeYJjg/pfZ6+P4X+wUEDYzxQOmRSPYSLyF8G8Cm934vR5GpFBEeWSXWB4DiGwXNSMDieCRJg8LzXtwTHxVhNrlZEcMzCRb59k+owgZOaauypmuwQCCsZJtcy3HZw8JCkEcHxCoB3AXxkJlUli2oqVHmGFqIZsRDdZUjai6vBBhXTwOHgo+gMx2/ofcEzqQyMvYfEP7YzhcGjOCBINgBshwpJGigciYBjwYPjFQFHYnCUDgovQKzi/rMsIAkuqJgGCscU+kfSz5NZxXDMmr9ROSS8YPmQsLrwUfqt0CBpBQrHS+SE/xzArwmSBYNDjfP+iJTjMoC/A/ianPgf4LaBg4GkFRAcLbjI9xyA1wH8Fu6G31m4yLjtVOmC5DFc5P063A3GvwD4D9yxlScIZHcrCQgO9jmOknK8Re9Hvd0Tg6N+5z0tGKtJAC1xDcEAeU44UuGQnyez6iz6x0ZsG1cfJBPon6A+65nCuwuadkiSQODIinMcMTiCgeTIsM0UzZCkyjvZh0PGOV4wOILwbydorBbQP67Cz24wMeO/GSAF6iE71o9z2G5VWJDIhc536u8A2Ggvrqp02lPFcEzBHV+wOEeckPBu1xYrSHtxVd1R+UQhHGxaHYA7bHghy7kzOIL0SfzNlgs0xge0+iOpwo7kTpyHCwaew2BaT4MjfCXxx3eFlKSrzR9RoyCe33EsZ4Wxs1XhQ5LkWAjHeONFk4okiuBIPL+DbwIexuCRdXvCh2SiYKwTLZAkSuDgSHnuqmJwRAlJnrWgJtKuxcSSAaU8v8Oe+CDJ8kdkALjZCuKZVi+jn7dqYGcDcWY19EsX5L3kz8YGiL9jyWmZXtZiaqVKVpFZuIyHfgfFYlrllSfojdFPdZZXqMIf4QVyDS5Dyjr6JRt6jQMk4wj7GfSPrquR2D2Cwi9BwAEyruxUpPI8ieROntbSC89rYp+luXAHlGurvbjaqiuAmNa8erANegIuV+5JuIyHIZtWWdnT/SI2G/DS4xT0Eacz4qPiecV7QuwzGR9p0xx4By5TCt8dqU1FagEkQz1O02uOvhdivMNP18n1N7LKoN2HuzwkA2S9HLOKt0NfR7+Sblb5t0mEm0aV2+rPh9t1q0haY4f46nEi0F2rvITPsoJTViHNFfTTdfZG6KcryC8gKitghZpvOGtO1K4ilQMygnqEMqhFJQOWMFgD0C/FvAWvDPOQnZ4HBJQsQX0VT9dQDLmUQ968qFVFUiUrRWjqIZ3tvFoaS/S1rCK74znrow42A8WmyAO4JNJchfc6ATKs5kkSCCSqVKRSQCJQDz+J8yMUly3z65Dv7nCNuhpSv3VF32yLv79GCnWL/nZW1Sz2VbRfMFOnIqmCFSIU9cjKSbsEV3WpsPDlOED4j/i9ngcM1xfMUjEG5Qypi8xRDOWQqFGRyjpJRM33w12a+RDAH+HO4cyhX15Zs0nVwWDOp4tk3txCTRVhCyr3noSLK8g7NbN4uq67tofLVT+gfv4TXJmFu3A1SirLq1W1giRkNx8lxzIE9fDriy8D+ALAJzR4XIqsllLJ9Hd6BMq25xc9FDtn/Nn44tmkYkh8FXkbwH8hEs/FaGLxsYJpsfuye3JT6UCxv8G1xLlozCcEyTKZW9vsY9QV8c0AhQOUm56pt4N+5vtp6DzO45/wXqA5M00K3qnKzKoEkIwj7bLBE8rh4AyBN5BdA6MDRak0BShyQ+GugGMD7tTsGfQzUmqFJGtBXYNLhF2Js55W2FiWzOMkmUep8YlSOLq0+t4H8E8AnwH4BoFUUVr/+FCvvbjKO2eP4M42bdFnfw3ABwDeo3HYr9Tc8k3ya7RjV5mzXvrkzEjEcIpeB5WaV9LneEjK8RmAfwD4EoMFK1Xnl2U1wWDJtC+pLZ9R2x5KE1GpmXVQzJtKEzykFa8E83B5Wo8rdc6lWbJBPsc1Uo5lAKu0CgdTyTXD5OLP/Q21ja+5tqHvZLBvebwFd4btB1KRbhUTt8qVoE2QtBWrh5++/yKZVWuhwZEBCgc416hNmTUFlapILXOnKvtfVoSSW4xanXJ/K3clZDhyIFlB9o5cB/puL9Y2f0r9IxnZ2Y8oVQ/2O4ZOnBjqfgtIhi0EmvwRX0WOoMLs8GlFELL/8QY1cEqZgkjTaikA02OvTcmsBWxS0QLG92L4mP9VuMOapQcNkwro5+uiL8LdX9CWW5cd1ydwRxtuwB0fuS9NjhjUI2N3S8Z5rlPbdytAKVkU/DIYfAemkpwFpQGSUd+j0oY9w2q6AXfQ7xLc2ard7c+Y4PAgkdvZt6jtuydnlZlZuQttmWZW2QriS+M8dAUHffW4icGTo1HCkQFJXvs1pRuqxVSvwsRi+/Yw9CWgzlIPjSto0/ugVTCXggSEG8WX8aehKzBYpB69mNUjwx8JQUUYkmkMJvcI1sSqvEGmHtGrSKULbimAZMQ/KpPEMdVjGy6qvESvRqnHEBXh/lhD/1CgFkgy51RZjnpSMnwyp9Nh6Ip/8Gnd7+CyjzRVPfJU5Ar1zSYqvKCkbU6V7YNwinttDro8cvEjXLCMt3UbpR4ZKsLbvpyuiFOk1t0nWVZJ6XdZkhIbw///FP00mZrMK44kf0sTYRM6zyHVsXBsop/wTp4k0GRmyVzFKGtuVXWaV5NzzubVFlwE+Su4Y+2aTAkNpuc99LNBbinqmxaeznYflpM+RFG0rJJsSqzDS2rQRPMqw8xiX4TzCWty1CudU0lD54LMUsLJ3Uw9rH8aD0hIK6RKhW1aHzVRQeS9D78EgT3WR40HRB7zXjH/o9AP4Qwujdzha6KJxSskV31qamBwlL6SfdT1+tAAacAE6JrvUeiLdJvcP4lNAnusjwwQe+wxQOyxxwCxp+qnZYDY4NuT3TeVnXkyQHROAG2HKLX1T2WnZg0QXYqh8Ri+iifnNqjWGiIGSEmQZF7kqiKdfkDzQvNtUAPEBl+FeaU1XVN0gGhLhKw9mbYW51xjuqZK51RSUUO0HekIoRyDBgXRmq6psiMwScl0azwUWGs6/QAddG2VwCo9RJmU3JDMY+UKQNGeM7juvtFYrqKWY/hlNlrrpZu8rPOaS1JX2Tey9LK2chWVz6lSAMm5dKMtjaVMp881uCebamYNqWWvqVxF7pwq67JbUlGDNtGvSqrFWfdrcJ+Azsq7VTvmM9QX2mrZS+f8Cc2p0hfcJLYGPYOjLmtwz9GuTaNURKjHPuoD7g9ttewrX3CrUpANhY66v2K+02AV0d4XtZnsZQOiOTuGv2qeplejVCRDPZ7qByWLRS1zqTRAAsnSZyoSRh/Ulg0zqYh8rVn6ilbPJGYVobYlAahHbfMoqZN8xSpyEv1t3yghEXDwtu5J5epRiyVSlYJoztLnq8gZAGfhIsi79yBigkT4HXzs/wi1+Yxi9ahlDpUKSEDZwmVk/RSACwDOwwXLZiP0R2R7F6itF6jt2tpbazb+pMIVQHO2cDY3+J7IeQAfAXiXJtALACZiUBFqAyvHArXxI2qzvBujqa21zZ+0xhVgjuzfnpLB8CeOVL/d08jtxdVOqDl8BRxDFwKF6lGbBVKlgoRQ0SnP9DgNF1WeClVJPDgOUptCMCVrrXhVuoKsf3yo115czasJOKtsxeLPMUE7OfMAzgF4Da48MuBKI2+1F1c7CCAjvOeQMxwL1KZz1MYZMQ7aqoHl1kysou+TihuaWVUW+kp7ye3PMwA+APA+gF/AHQEP4oJVxgWoY9SG96lNZyC2s6G3VF5tVXerPKXp1yW/A711yRmSabgt0PcA/B7AHwD8EsBxYZKojJOIOAebjMfps/+B2vIetW0aOpPDSd/jDmqq216Fky7NrG0yUZbo9aqYaD1lgySd9qPIrve+DHerbbu9uNrVYHIJ1WAVzNqtmifl0HpJTKqHnC9rqLiWfVrzivAzAC9Bb9odhmQ/nk40x6bLfTIBngDYoYWgclAEGPy59hEERzJ2q2aUmlXqLI7KAPFURNqUGp31PJ+kDeAVz66/DuAWOfEbVYOSA8YM3Db6SbgIub9bNaEcDt85H/BZq1x80pobzrsSh6ArJpIHSUvY85z04QaASwBuAridBwovEnsIBYaAcQJuG/cdcsRPoZ9CVHsCuDznfBM11ElMa+gAua/9Je2qvAz92Q1bos/YD2kTLKcJkCxQtmlguwQLxgXGA0ICO4F+fi8fjNP09RxBLe+Wa47jqHDOawEksJhIHiS+E+xPTgZliUB5SO3jK8d8TVQCM46C8c7UNL0O0N8+lQHGDClLijDKGKhxzutUkDz78qByMyvPL8kzb5Zo9WMT4Z5QlG0MJtPrFQDJGwSTAsp59DOyvE2AZIHRQlhpVVWFA1IlnXCWBnsf+kkCEAAkLRq0LFBepV069rX4mMQG3HmiUe5V+1kO2+jnFH4D/ZxeR2mBCRkMVc55bYAMiYmcFLZ9L6CBzQNlFm4Le4vMybcIDD50599r6OWolMxEz2lSOWUq+xbT4m+HCIY657xuBZGO2G2y2eVVz8kABzgLlCka3IO0EcHm1QaZRY9HVBAZpGQzi2Mycss25Az1/pyo1TmvFRChIk9ot+cmvU4EqiJ5oMidpin084TN0YTvjDD4/P+Y8pxtP+N6yHdVWD14PtTunNetILGqiA8KPFh4kCUw4+5iIRIoiubCbSg4q1db3EFcx/VV5AF9T9sp371QlUS8UmGKDXtNCuVIEF/h0cJ5UOf5tlThyhGTihSpC2BVrdSqR60K0kAVsScw9agdkBBWEHuaPfa1A2IqYuqhVT20KIipiKmH2jFXAYipiKmHRvXQpCCmIqYeKsdaDSCmIqYe2tRDm4KYiph6qBtjVYCMoCJdgyR4OLqhqIdGBclbYW7BHRXXVFfEnmczrXZoLG+FYCGoAyRDRW7AZQ65D+AnuBOw9oT5dGgM79OY3tCsHkD9Z7GKVOQR3LHnz9G/Mcf5nEK4Y23PoGm1BeB7AFdpTJcgcu1q/OAqs4jQShJkh9oz8oJ3lcZ2C0BXaxLwRHnHDpNkc9jDdMyDMpnVAuKVb5NOnTns4TvmA2OouYSEagURppY57HE65l3t9VXSADrYHHZzzE1BnsFhvwm9RXjsCdgxDwqQHKm+Ri8ztcwxN0CEw85JxW5mrUimIuaYN1ZBLDZijrkBsgedb5DUrh6dmBaxoAApiI2Yw67HtMo1g0NSjyAVpCA2UpTr1p5yAeFT2Pdi2UhJAx8M3kK8iH5cZIL+HVP2wVBMq8dwpR4u05gMbMWHph6h+iC+w75CA/IpvQ8rKWBPOXAUjkWIcAQLiICkcNUySCrxO+T2+0Uai29pbDqhwhE0IDHbvYE9WQFcLjcXvD8YNCDerpYFEOszrbKOAAUVEIxVQaSpZWe16jWt/IWpEzocUQBSIPVmall/GyAjntWqrRBkhOpRqNgxqEdUCjLCsXi7gbh3plVU0fJhTxrhIGZJ/2G4moBc+swCiM8OSKN2DWPyQfJMraf25U1Fnsu0ii5a3hhAMkytvMiuQfLsfkd00fJGASIgGbbamT/yfH5HVNHypvkgRfay+SN704/RRMsbpyCeP7Jj/khpfkcU0fJGAuKZWuaPlON3dGKGI3pAzB8xv8N8EPNHzO8wBTF/xPwOA8T8EfM7DJAA/JGm3h/hAGvj/Y7GAjKifd1poNPeE+rReL+j0YAU+CPLaGaWRpklZrnpfkfTFSTPH/kEwBc0QZrktEuzc5n64JMm+x3ySdHQZ/3jQ7324qqcGJxHK4Xb+uVt3wnEu/070kLRVDgaDUiOaZHCJZ07TO8MSYwFeoY55U01Nc3EyvFHRnFOe5HBMdJmRZPVo/GACEiGraSxQeLDkeeUd5sOhwEymtN+NzJzQ5qVd80pNx/keZx2floAjiP8pNhZO1Z/NafcAHnW1ZXhiGFnq0kqaSZWyU57oX0e2EQa2c8y9TBAxoUk9J2tkdtjcBgg40ASw86W7VgZIKVCMqrN3lMOh+1YmZNeDiRDdrYA4BUAs6IfW8rhsB0rA6SUyebvbOVB0lL6mSUctmNlgOy5imAIJNpiJMNiHQNwmHoYIGVDoi1GMrLfZHCYk16G0645RmKxDgNEHSRaYiQW6zBAVEGiKUZisQ4DRCUkGmIkFuswJ121415njMRiHQaI+mecGMleQlIEh8U6DBA1KoKKIRkLDlMPA6RJkBgcBohBYnAYIAbJeJAYHAaIQWJwGCAGyXiQGBwGiEGSA4nBYYAYJDmQGBwGiEGSAwkMDgPEIBkOicFhgBgkGZDM0L83DA4DxCDpP1xi4Sh9/R2ASwaHAdJkSPjuRgJgEv167QBwFcDfAPwLdhuw1sfug9QAiXDCH8Pd+Psa7v7GHXpdpu/do58xOGp6/g9eQPkxBqxc0wAAAABJRU5ErkJggg==", gf = {
  draw: {
    marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "marker",
      settings: {
        exclusive: !0
      }
    },
    circle_marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "circle_marker",
      settings: {
        exclusive: !0
      }
    },
    text_marker: {
      type: "draw",
      eventType: "toggle",
      targetMode: "text_marker",
      settings: {
        exclusive: !0
      }
    },
    circle: {
      type: "draw",
      eventType: "toggle",
      targetMode: "circle",
      settings: {
        exclusive: !0
      }
    },
    ellipse: {
      type: "draw",
      eventType: "toggle",
      targetMode: "ellipse",
      settings: {
        exclusive: !0
      }
    },
    line: {
      type: "draw",
      eventType: "toggle",
      targetMode: "line",
      settings: {
        exclusive: !0
      }
    },
    rectangle: {
      type: "draw",
      eventType: "toggle",
      targetMode: "rectangle",
      settings: {
        exclusive: !0
      }
    },
    polygon: {
      type: "draw",
      eventType: "toggle",
      targetMode: "polygon",
      settings: {
        exclusive: !0
      }
    },
    freehand: {
      type: "draw",
      eventType: "toggle",
      targetMode: "freehand",
      settings: {
        exclusive: !0
      }
    },
    custom_shape: {
      type: "draw",
      eventType: "toggle",
      targetMode: "custom_shape",
      settings: {
        exclusive: !0
      }
    }
  },
  edit: {
    drag: {
      type: "edit",
      eventType: "toggle",
      targetMode: "drag",
      settings: {
        exclusive: !0
      }
    },
    change: {
      type: "edit",
      eventType: "toggle",
      targetMode: "change",
      settings: {
        exclusive: !0
      }
    },
    rotate: {
      type: "edit",
      eventType: "toggle",
      targetMode: "rotate",
      settings: {
        exclusive: !0
      }
    },
    scale: {
      type: "edit",
      eventType: "toggle",
      targetMode: "scale",
      settings: {
        exclusive: !0
      }
    },
    copy: {
      type: "edit",
      eventType: "toggle",
      targetMode: "copy",
      settings: {
        exclusive: !0
      }
    },
    cut: {
      type: "edit",
      eventType: "toggle",
      targetMode: "cut",
      settings: {
        exclusive: !0
      }
    },
    split: {
      type: "edit",
      eventType: "toggle",
      targetMode: "split",
      settings: {
        exclusive: !0
      }
    },
    union: {
      type: "edit",
      eventType: "toggle",
      targetMode: "union",
      settings: {
        exclusive: !0
      }
    },
    difference: {
      type: "edit",
      eventType: "toggle",
      targetMode: "difference",
      settings: {
        exclusive: !0
      }
    },
    line_simplification: {
      type: "edit",
      eventType: "toggle",
      targetMode: "line_simplification",
      settings: {
        exclusive: !0
      }
    },
    lasso: {
      type: "edit",
      eventType: "toggle",
      targetMode: "lasso",
      settings: {
        exclusive: !0
      }
    },
    delete: {
      type: "edit",
      eventType: "toggle",
      targetMode: "delete",
      settings: {
        exclusive: !0
      }
    }
  },
  helper: {
    shape_markers: {
      type: "helper",
      eventType: "toggle",
      targetMode: "shape_markers",
      settings: {
        exclusive: !1,
        enabledBy: [
          "drag",
          "change",
          "rotate",
          "scale",
          "line_simplification"
        ]
      }
    },
    snapping: {
      type: "helper",
      eventType: "toggle",
      targetMode: "snapping",
      settings: {
        exclusive: !1
      }
    },
    pin: {
      type: "helper",
      eventType: "toggle",
      targetMode: "pin",
      settings: {
        exclusive: !1
      }
    },
    snap_guides: {
      type: "helper",
      eventType: "toggle",
      targetMode: "snap_guides",
      settings: {
        exclusive: !1
      }
    },
    measurements: {
      type: "helper",
      eventType: "toggle",
      targetMode: "measurements",
      settings: {
        exclusive: !1
      }
    },
    auto_trace: {
      type: "helper",
      eventType: "toggle",
      targetMode: "auto_trace",
      settings: {
        exclusive: !1
      }
    },
    geofencing: {
      type: "helper",
      eventType: "toggle",
      targetMode: "geofencing",
      settings: {
        exclusive: !1
      }
    },
    zoom_to_features: {
      type: "helper",
      eventType: "click",
      targetMode: "zoom_to_features",
      settings: {
        exclusive: !1
      }
    },
    click_to_edit: {
      type: "helper",
      eventType: "toggle",
      targetMode: "click_to_edit",
      settings: {
        exclusive: !1
      }
    }
  }
}, Pp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="m22.775 29.562 6.75-6.75-5.625-5.625-3.6 3.6-3.15-3.15 3.6-3.6-5.626-5.55-6.75 6.75zm25.95 26.101 6.75-6.825-5.624-5.625-3.6 3.6-3.15-3.15 3.6-3.6-5.55-5.55-6.75 6.75zm.6-46.126 5.25 5.25ZM16.7 59.039H5v-11.7l14.55-14.551L2 15.237l13.05-13.2 17.7 17.624L46.1 6.312q.676-.676 1.5-.976.826-.3 1.65-.3.826 0 1.65.3.826.3 1.5.976l5.326 5.325q.675.675.975 1.5.3.825.3 1.65t-.3 1.65q-.3.825-.975 1.5l-13.35 13.35L62 48.913l-13.125 13.05-17.551-17.55Zm-7.2-4.5h5.25l29.476-29.552-5.25-5.25L9.5 49.288Zm32.1-32.178-2.625-2.625 5.25 5.25Z"/>
</svg>`, df = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <circle cx="32" cy="32" r="26" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="7"/>
    <circle cx="32" cy="32" r="5" fill="currentColor"/>
</svg>`, Op = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <circle cx="32" cy="32" r="26" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="7"/>
    <path stroke="currentColor" stroke-dasharray="3" stroke-width="4" d="M6 32h52M32 6v52"/>
</svg>`, Rp = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   viewBox="0 0 64 64"
   version="1.1"
   id="svg2"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs2" />
  <path
     fill="none"
     d="M 0,0 H 24 V 24 H 0 Z"
     id="path1"
     style="display:inline" />
  <ellipse
     cx="32"
     cy="32"
     fill="currentColor"
     fill-opacity="0.15"
     stroke="currentColor"
     stroke-width="7"
     id="circle1"
     rx="26.787416"
     ry="15.158148" />
  <path
     stroke="currentColor"
     stroke-dasharray="3"
     stroke-width="4"
     d="M 6.4966994,32 H 58 M 32,18.552705 v 30.15073"
     id="path2"
     style="stroke-width:3;stroke-dasharray:3;stroke-dashoffset:0" />
</svg>
`, Dp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path
            fill="currentColor"
            d="M32 61.4 19.85 49.42l3.28-3.235 6.634 6.542V34.205H10.98l6.26 6.174-3.279 3.234L2.185 32l11.852-11.686 3.28 3.234-6.336 6.247h18.783V11.273l-6.261 6.174-3.28-3.234L32 2.6l11.777 11.613-3.28 3.234-6.26-6.174v18.522h18.782l-6.26-6.174 3.279-3.234L61.815 32 50.038 43.613l-3.28-3.234 6.261-6.174H34.236v18.522l6.634-6.542 3.28 3.234z"
    />
</svg>
`, Fp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <line x1="8" y1="50" x2="24" y2="20" stroke="currentColor" stroke-width="8"/>
    <line x1="24" y1="20" x2="40" y2="54" stroke="currentColor" stroke-width="8"/>
    <line x1="40" y1="54" x2="54" y2="10" stroke="currentColor" stroke-width="8"/>
    <circle cx="8" cy="50" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="24" cy="20" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="40" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Gp = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M32 62.81s23.107-21.898 23.107-38.512a23.107 23.107 0 0 0-46.214 0C8.893 40.912 32 62.809 32 62.809m0-26.958a11.554 11.554 0 1 1 0-23.107 11.554 11.554 0 0 1 0 23.107"/>
</svg>
`, Bp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <!-- Polygon -->
    <polygon points="8,28 40,6 55,35 51,55 18,54" fill="none" stroke="currentColor" stroke-width="8"/>

    <!-- Vertex Circles -->
    <circle cx="9" cy="28" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="40" cy="8" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="55" cy="35" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="50" cy="55" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="18" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, Up = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <!-- Rectangle -->
    <polygon points="10,10 54,10 54,54 10,54" fill="none" stroke="currentColor" stroke-width="8"/>

    <!-- Vertex Circles -->
    <circle cx="10" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="10" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="54" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
    <circle cx="10" cy="54" r="6" fill="white" stroke="currentColor" stroke-width="4.5"/>
</svg>
`, zp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M39.063 42.14 22.288 28.12 7.96 44.603l11.338 9.854h9.059zm-3.498 12.317h25.941v5.465h-44.25L4.377 48.726a5.465 5.465 0 0 1-.542-7.711L34.311 5.958a5.465 5.465 0 0 1 7.712-.538l16.496 14.343a5.465 5.465 0 0 1 .541 7.709z"/>
</svg>`, qp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M58.709 17.724c-.3-.6-.601-.901-.902-1.502l-.3-.601c-.301-.601-.602-.902-.902-1.503l-.3-.601c-.301-.601-.602-.902-1.203-1.503l-.6-.901 8.414-9.317-13.825.3-13.824.301 1.502 13.524 1.503 13.524 9.617-10.819v.3l.3.602c.301.3.301.6.602.6l.3.602c0 .6 0 .901.3 1.202.903 2.104 1.804 4.208 2.105 6.311.6 4.208 0 8.716-1.804 12.623l-.6 1.202-.301.3-.902 1.503-.3.601c-.601.601-1.202 1.503-1.804 2.104-1.502 1.503-3.305 3.005-5.109 3.907-1.803 1.202-3.907 1.803-6.311 2.404-2.104.301-4.508.601-6.612.301-2.404-.3-4.508-.902-6.612-1.503-2.103-.901-3.907-2.104-5.71-3.606l-1.202-1.202-.601-.902-.601-.601c-.3-.3-.601-.601-.601-.902l-.902-1.202-.3-.3-.602-1.203c0-.3-.3-.3-.3-.6l-.902-1.503-.3-.601-.902-2.705q-.901-3.607-.901-7.213V27.04c0-.601 0-.901.3-1.202l.3-1.803.602-1.803c.901-2.405 2.103-4.509 3.606-6.612q2.254-3.156 5.41-5.41c.6-.3.901-1.202.3-1.803-.3-.3-.6-.601-.901-.601h-.601l-.3.3c-2.706 1.202-4.81 3.006-6.913 4.809-2.104 2.104-3.607 4.508-5.11 7.213-2.704 5.41-3.606 11.42-2.404 17.431.3 1.503.601 2.705.902 4.207l.902 2.405c.3.3.6.6.6 1.202l.602 1.202c0 .3.3.601.3.601l.902 1.503c.3.601.6.901.901 1.503l.301.6c.3.301.601.902.902 1.203l2.103 1.803c2.104 2.104 4.809 3.907 7.514 5.41q4.057 2.254 9.016 2.705c1.503.3 3.005.3 4.508.3 1.803 0 3.306 0 4.809-.3 3.005-.602 6.311-1.503 9.016-3.006l.6-.3c.602-.3.903-.601 1.504-.902l2.103-1.202c.601-.3.902-.601 1.203-.902l.6-.6a3.622 3.622 0 0 0 1.503-1.504l.3-.3c.902-.902 2.105-2.104 2.706-3.005l1.803-2.705 1.202-1.804c3.005-5.71 4.208-12.322 3.306-18.633-.601-3.306-1.503-6.612-3.005-9.317z"/>
</svg>
`, Yp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path stroke="currentColor"
          stroke-width="3.8"
          d="m2.155 32.345 42.35-29.82M18.963 60.919l42.35-29.82M31.443 2.332l29.82 42.35M2.207 19.515l29.82 42.35"/>
</svg>
`, Hp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="none" d="M0 0h24v24H0Z"/>
    <path fill="currentColor"
          d="M6.962 3.385h50.076a3.577 3.577 0 0 1 3.577 3.577v50.076a3.577 3.577 0 0 1-3.577 3.577H6.962a3.577 3.577 0 0 1-3.577-3.577V6.962a3.577 3.577 0 0 1 3.577-3.577Zm3.577 7.154v42.922h42.922V10.539Zm7.154 7.154h28.614v7.153H17.693Zm0 14.307h28.614v7.154H17.693Z"/>
</svg>
`, Jp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M16.862 2.13 7.297 21.17a2.091 2.091 0 0 0-.193 1.288l4.107 24.166-7.618 13.15 3.619 2.096 7.997-13.804a2.091 2.091 0 0 0 .252-1.397l-4.119-24.235 9.256-18.428Zm40.876.255-1.25 2.49 2.668 1.341 1.25-2.49zm-2.593 5.16-2.68 5.337 2.668 1.341 2.682-5.338zm-4.022 8.007-2.682 5.338 2.67 1.34 2.681-5.337zm-18.67 5.83.055 6.984-11.118.087.056 7.242 11.12-.088.054 6.985 10.521-10.688zm18.927 2.817-2.945.5 1.001 5.89 2.945-.5zm1.502 8.835-2.945.5 1.001 5.89 2.945-.5zm1.502 8.834-2.945.5.74 4.355-.24.413 2.585 1.499.51-.881a1.494 1.494 0 0 0 .18-1zm-3.943 7.854-2.994 5.17 2.584 1.496 2.994-5.169zm-4.492 7.754-1.497 2.584 2.584 1.497 1.498-2.584z"/>
</svg>
`, Vp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M41.687.926a2.173 2.173 0 0 0-.433.045c-4.075.232-7.358 3.618-7.358 7.747 0 .084.01.164.012.246l-12.987 4.261a7.842 7.842 0 0 0-6.126-3.563 2.173 2.173 0 0 0-.424-.043 2.173 2.173 0 0 0-.435.044c-4.073.232-7.358 3.618-7.358 7.747 0 3.143 1.901 5.869 4.604 7.097L8.377 35.11a2.173 2.173 0 0 0-.028.007C4.274 35.35.99 38.736.99 42.865c0 4.277 3.514 7.791 7.791 7.791 2.497 0 4.727-1.201 6.157-3.048l12.887 6.235a7.67 7.67 0 0 0-.139 1.44c0 4.277 3.515 7.791 7.792 7.791 4.278 0 7.793-3.514 7.793-7.792a7.67 7.67 0 0 0-1.885-5.027l.508-1.05-3.263-1.579 4.505-29.969.888-.29-.368-1.122a7.78 7.78 0 0 0 2.28-1.018l.447 1.364 4.72-1.547-.774-2.359-2.522.826a7.73 7.73 0 0 0 1.672-4.793c0-4.132-3.288-7.52-7.368-7.748a2.173 2.173 0 0 0-.424-.044zm0 4.346a3.414 3.414 0 0 1 3.447 3.446 3.415 3.415 0 0 1-3.446 3.447 3.414 3.414 0 0 1-3.446-3.447 3.414 3.414 0 0 1 3.445-3.446zm20.076 3.725a1.242 1.242 0 0 0-.382.062l-1.612.528.578 1.76-.293 1.94 2.456.37.486-3.234a1.242 1.242 0 0 0-1.233-1.426Zm-4.354 1.364-4.72 1.548.775 2.36 4.719-1.548-.774-2.36zm-22.153 2.732a7.877 7.877 0 0 0 3.735 2.922l-.062.408-.397.13.26.793-4.255 28.298-3.818-1.847-1.082 2.235 3.718 1.798a7.841 7.841 0 0 0-3.543 2.147l-13.272-6.42c.02-.23.035-.458.035-.692 0-2.888-1.609-5.408-3.969-6.745l2.912-11.012c3.74-.562 6.645-3.81 6.645-7.698l-.001-.02 13.094-4.297zm-20.885.87a3.414 3.414 0 0 1 3.445 3.447 3.414 3.414 0 0 1-3.445 3.447 3.414 3.414 0 0 1-3.447-3.447 3.414 3.414 0 0 1 3.446-3.446zm45.314 1.78-.738 4.912 2.456.37.738-4.912zM36.172 17.33l-1.793.588a1.242 1.242 0 0 0-.813.862l-.788 2.978 2.401.634.615-2.325 1.15-.377-.773-2.36zm22.405 5.781-.737 4.913 2.455.368.739-4.91zm-26.432 1.048-1.27 4.802 2.401.634 1.27-4.802zm25.325 6.32-.739 4.913 2.457.368.738-4.911-2.456-.37zm-27.23.882-1.27 4.802 2.402.634 1.27-4.801zm26.124 6.486-.739 4.91 2.455.37.74-4.912-2.457-.368zm-28.027.717-1.27 4.803 2.4.634 1.27-4.802-2.401-.634zm-19.555.856a3.414 3.414 0 0 1 3.446 3.446 3.414 3.414 0 0 1-3.446 3.447 3.414 3.414 0 0 1-3.445-3.447 3.414 3.414 0 0 1 3.445-3.446zm46.473 5.795-.739 4.91 2.456.37.74-4.911zm-11.124 5.072-1.082 2.236 4.47 2.164 1.083-2.237zm-8.651 1.55a3.414 3.414 0 0 1 3.445 3.446 3.414 3.414 0 0 1-3.445 3.447 3.414 3.414 0 0 1-3.447-3.447 3.414 3.414 0 0 1 3.446-3.446zm18.669.745-.358 2.378-2.953-1.428-1.083 2.236 4.472 2.163.541-1.117 1.228.183.608-4.046-2.455-.37z"/>
</svg>
`, Xp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <circle cx="49.754" cy="50.219" r="10.098" fill="none" stroke="currentColor" stroke-width="5.1"/>
    <path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4.491"
          d="M44.516 26.657H17.842l6.669-11.55 6.668-11.55 6.669 11.55Z"/>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="6"
          stroke-width="4.683" d="M4.481 40.605h20.761v19.093H4.481z"/>
</svg>
`, Wp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path stroke="currentColor" fill="currentColor" stroke-width="2"
          d="M44.095 2.247a2.285 2.285 0 0 0-.135.04L12.025 12.762a2.285 2.285 0 0 0-1.497 1.588l-7.772 29.4a2.285 2.285 0 0 0 1.213 2.641L35.397 61.6a2.285 2.285 0 0 0 2.873-.754l22.64-32.582a2.285 2.285 0 0 0 .05-2.534L46.6 3.23a2.285 2.285 0 0 0-2.504-.982ZM43.7 7.182l12.203 19.12-5.167 1.76 1.052 3.09 2.031-.693L38.07 53.122l.01-1.375-3.262-.023-.034 4.5-27.13-13.127 6.975-26.38Zm3.946 21.932-6.18 2.105 1.052 3.09 6.18-2.105zm-9.27 3.157-2.329.793a1.632 1.632 0 0 0-1.105 1.534l-.03 4.068 3.265.024.02-2.91 1.232-.419zm-3.488 9.66-.047 6.529 3.264.023.048-6.528z"/>
</svg>
`, Zp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="m41.478 7.967-.033 3.069c1.887.02 3.772.337 5.561.933l.97-2.913a21.337 21.337 0 0 0-6.498-1.09Zm-3.294.215a21.567 21.567 0 0 0-6.298 1.915l1.332 2.766a18.518 18.518 0 0 1 5.401-1.641zm12.836 2.155-1.402 2.73a18.497 18.497 0 0 1 4.572 3.312l2.16-2.179a21.548 21.548 0 0 0-5.331-3.863ZM22.783 13.06c-11.848 0-21.486 9.638-21.486 21.486 0 11.849 9.638 21.486 21.486 21.486a21.37 21.37 0 0 0 14.288-5.466c.003 0 .006 0 .009.002.04-.036.078-.075.117-.11l.077-.072a21.285 21.285 0 0 0 1.51-1.532 22.128 22.128 0 0 0 .867-1.025 19.557 19.557 0 0 1-.88-.095c-.196-.025-.389-.058-.582-.09-.097-.015-.194-.028-.29-.045a18.378 18.378 0 0 1-1.576-.359l-.118-.03c-7.753-2.172-13.422-9.271-13.422-17.728a18.34 18.34 0 0 1 5.867-13.478c.1-.093.199-.185.3-.276.153-.136.31-.268.467-.4.097-.08.193-.163.291-.242.255-.203.514-.402.78-.592a21.534 21.534 0 0 0-1.76-.592l-.018-.005c-.176-.05-.355-.095-.533-.141-.132-.035-.263-.073-.397-.105-.213-.051-.43-.095-.646-.14-.077-.016-.153-.035-.231-.05H26.9a21.37 21.37 0 0 0-4.118-.4Zm35.728 3.64-2.472 1.82a18.424 18.424 0 0 1 2.61 5.004l2.907-.986a21.474 21.474 0 0 0-3.045-5.839Zm3.864 9.034-3.022.534c.328 1.86.37 3.772.118 5.642l3.042.409a21.448 21.448 0 0 0-.138-6.585zm-3.496 8.943a18.539 18.539 0 0 1-2.416 5.104l2.543 1.72a21.586 21.586 0 0 0 2.815-5.952zM54.703 42a18.288 18.288 0 0 1-4.428 3.492l1.505 2.675a21.348 21.348 0 0 0 5.173-4.08zm-6.995 4.69a18.512 18.512 0 0 1-5.526 1.158l.163 3.065a21.56 21.56 0 0 0 6.444-1.35z"/>
</svg>
`, jp = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M44.698 2.661a1.644 1.644 0 0 1 2.328 0l9.866 9.866a1.644 1.644 0 0 1 0 2.329L24.004 47.744a1.644 1.644 0 0 1-.552.362L7.008 54.683a1.644 1.644 0 0 1-2.138-2.138l6.578-16.444a1.644 1.644 0 0 1 .362-.552zm-3.089 7.742 7.542 7.541 4.252-4.252-7.541-7.541zm5.216 9.866-7.54-7.54-21.378 21.376v.964h1.644a1.644 1.644 0 0 1 1.645 1.644v1.645h1.644a1.644 1.644 0 0 1 1.645 1.644v1.644h.963zM14.724 37.29l-.35.348L9.35 50.204l12.566-5.025.349-.35a1.644 1.644 0 0 1-1.07-1.538v-1.645h-1.644a1.644 1.644 0 0 1-1.644-1.644v-1.644h-1.644a1.644 1.644 0 0 1-1.54-1.07"/>
    <path stroke="currentColor" stroke-width="5.107"
          d="M6.298 59.53c3.44-1.692 6.88-3.384 10.558-4.319s7.594-1.111 11.719-.298c4.125.814 8.459 2.617 13.483 2.655 5.023.038 10.737-1.689 16.45-3.415"/>
</svg>
`, $p = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M31.226 17.87c-4.69 0-8.532 3.832-8.532 8.508 0 1.812.58 3.495 1.558 4.88l5.932 10.255c.831 1.085 1.383.879 2.074-.058l6.543-11.135c.132-.24.236-.493.327-.753a8.396 8.396 0 0 0 .628-3.19c0-4.675-3.841-8.506-8.53-8.506zm0 3.987a4.5 4.5 0 0 1 4.532 4.52 4.5 4.5 0 0 1-4.532 4.521 4.5 4.5 0 0 1-4.534-4.52 4.5 4.5 0 0 1 4.533-4.52z"/>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="6"
          stroke-width="5" d="M8.97 53.509 4.423 19.145 35.698 4.199l23.88 25.127L43.06 59.801Z"/>
</svg>
`, Kp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <ellipse cx="4.907" cy="-32.051" fill="none" stroke="currentColor" stroke-dasharray="13.7543, 6.87718"
             stroke-width="5.489" rx="20.4" ry="13.713" transform="matrix(-.71127 .70292 -.86047 -.5095 0 0)"/>
    <path fill="currentColor"
          d="M34.597 25.275a1.934 1.934 0 0 0-2.04 2.165l2.922 31.37c.188 1.523 1.989 2.235 3.165 1.249l6.169-5.004 2.765 4.79c1.59 2.756 4.115 3.431 6.87 1.841 2.756-1.59 3.433-4.114 1.841-6.87l-2.755-4.773 7.31-2.803c1.443-.525 1.728-2.44.503-3.365L35.64 25.66a1.93 1.93 0 0 0-1.042-.383z"/>
</svg>
`, Qp = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.947 25.554c-2.176 3.77-.867 8.656 2.903 10.832 2.126 1.229 4.607 1.346 6.757.539l8.252 12.152a7.79 7.79 0 0 0-.701 1.005c-2.176 3.77-.867 8.656 2.903 10.833 3.77 2.177 8.655.867 10.832-2.903 2.1-3.64.93-8.294-2.543-10.572a2.211 2.211 0 0 0-.36-.26 2.211 2.211 0 0 0-.404-.181 7.955 7.955 0 0 0-6.086-.432l-8.348-12.292c.19-.252.369-.512.53-.79 1.457-2.526 1.339-5.537-.03-7.907l8.202-8.256c3.494 1.335 7.562.025 9.575-3.229l13.899 2.913c.266 2.435 1.634 4.721 3.899 6.03 3.77 2.176 8.655.866 10.832-2.904 2.101-3.64.93-8.294-2.543-10.572a2.211 2.211 0 0 0-.36-.26 2.211 2.211 0 0 0-.403-.181c-3.71-1.87-8.328-.556-10.429 3.083-.084.147-.155.297-.228.446l-13.5-2.83c-.053-2.55-1.329-5.023-3.58-6.499a2.211 2.211 0 0 0-.358-.259 2.211 2.211 0 0 0-.405-.181c-3.708-1.87-8.326-.556-10.428 3.083-1.61 2.79-1.307 6.19.486 8.652l-7.84 7.892a2.211 2.211 0 0 0-.094-.036c-3.71-1.87-8.328-.556-10.429 3.084zm3.83 2.211a3.473 3.473 0 0 1 4.79-1.282 3.472 3.472 0 0 1 1.284 4.789 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.79ZM23.656 8.173a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.789 1.284 3.475 3.475 0 0 1-1.284-4.791zm-.666 44.12a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.791zm29.166-37.88a3.474 3.474 0 0 1 4.79-1.283 3.472 3.472 0 0 1 1.283 4.79 3.473 3.473 0 0 1-4.79 1.284 3.475 3.475 0 0 1-1.283-4.791z"/>
    <path fill="currentColor"
          d="M12.9 13.516c-.63.177-.685.37-.88.95l-1.069 3.18 2.995 1.006.844-2.506 2.074-.882-1.236-2.908zm19.209 5.25 4.378 4.554 2.277-2.19-4.379-4.554zm8.132 3.106 1.441 2.812 5.623-2.882-1.441-2.812zM5.448 46.082l3.144.304.608-6.29-3.145-.303zm4.623 3.728 5.762 2.592 1.297-2.88-5.762-2.593z"/>
</svg>
`, em = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.717 38.645a2.675 2.668 79.7 0 0-.307 3.769L16.754 60.55a2.675 2.668 79.7 0 0 3.76.312l41.769-35.508a2.675 2.668 79.7 0 0 .307-3.769L47.246 3.45a2.675 2.668 79.7 0 0-3.76-.312zm5.486 2.352 37.702-32.05 11.892 14.056-2.717 2.31-4.458-5.269-2.033 1.729 4.457 5.269-3.11 2.643-4.457-5.268-2.034 1.728 4.458 5.27-3.106 2.64-4.458-5.27-2.033 1.73 4.457 5.268-3.11 2.644-6.194-7.32-2.033 1.728 6.193 7.32-3.11 2.645-4.457-5.269-2.034 1.729 4.458 5.268-3.106 2.64-4.458-5.268-2.033 1.73 4.457 5.268-3.11 2.643-4.457-5.268-2.034 1.729 4.458 5.268-2.098 1.783z"/>
</svg>
`, tm = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 64 64">
    <path d="M7.839 34.833c-7.104-9.763-5.332-23.33 4.2-30.266C21.572-2.369 35.03.123 42.13 9.882L56.166 29.17c7.098 9.755 5.329 23.325-4.204 30.262-9.533 6.936-22.989 4.444-30.09-5.315L7.841 34.836Zm5.063-25.476c-6.079 5.766-7.006 15.598-1.634 22.98l.778 1.07 12.002-8.732zm3.43-2.495L27.476 22.18l12.002-8.733-.781-1.073c-5.37-7.38-15.01-9.522-22.367-5.512m25.643 10.014L14.54 36.836l10.762 14.79c5.818 7.997 16.653 9.842 24.163 4.378 7.51-5.465 9.088-16.342 3.267-24.342z"/>
</svg>
`, nm = `\uFEFF<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M42.012 2.106a4.092 4.092 0 0 0-5.741.735 4.092 4.092 0 0 0 .572 5.607L23.964 23.45a8.185 8.185 0 0 0-10.458 2.142l5.18 4.005 5.454 4.218L7.87 59.22a1.124 7.304 37.712 0 0 1.54 1.19l20.494-22.138 5.454 4.217 5.18 4.005a8.185 8.185 0 0 0-.558-10.66l11.277-16.24a4.092 4.092 0 0 0 5.572-.858 4.092 4.092 0 0 0-.735-5.74z"/>
</svg>
`, rm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="currentColor" stroke="currentColor">
        <path d="m37.62 5.028-.337.284-4.039 4.068 3.547 3.523L39.875 9.8l2.846.596 1.025-4.893-4.176-.877Zm9.995 6.393 9.787 2.053 1.026-4.895-9.787-2.05zm14.68 3.078 9.787 2.05 1.025-4.892-9.787-2.053zm-39.623 5.522 3.547 3.523 7.049-7.094-3.547-3.523zm-10.57 10.642 3.546 3.524 7.047-7.094-3.547-3.524zM1.529 41.306l3.55 3.523 7.046-7.096-3.547-3.523Zm70.977 4.027 3.91 3.115 3.44-4.387-1.118-6.55zM.947 48.319l5.617 8.274 4.137-2.809-5.617-8.273Zm62.211 8.744 3.91 3.116 6.233-7.82-3.91-3.116zM9.373 60.73l5.62 8.272 4.134-2.809-5.617-8.271zm44.438 8.067 3.91 3.115 6.232-7.82-3.91-3.117zM17.8 73.138l5.617 8.273 4.137-2.808-5.617-8.274zm26.662 7.388 3.91 3.116 6.232-7.82-3.91-3.116zm-18.236 5.022 5.617 8.273 4.136-2.81-5.617-8.272zm8.888 6.709 3.91 3.117 6.233-7.822-3.91-3.115z"
              stroke-width="3"
              transform="translate(2.517 1.586) scale(.60827)"/>
        <path d="M22.672 20.02a3.5 3.5 0 0 0-2.506 1.034L-.514 41.872a3.5 3.5 0 0 0-.412 4.434L18 74.176a3.5 3.5 0 0 0 5.633.216l33.494-42.038a3.5 3.5 0 0 0-2.018-5.605l-31.742-6.654a3.5 3.5 0 0 0-.695-.074zm1.121 7.317 24.32 5.098-26.992 33.877L6.484 44.759Z"
              stroke-width="3"
              transform="translate(2.517 1.586) scale(.60827)"/>
        <path d="m78.734 7.668 2.61 11.396-18.145 4.154 2.705 11.816L84.05 30.88l2.609 11.396L100 21.011Z"
              stroke-width="3"
              transform="translate(1.586 1.586) scale(.60827)"/>
    </g>
</svg>
`, im = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor" fill-rule="evenodd"
          d="M19.435 3.417c-4.478 0-8.96 1.693-12.343 5.076-6.766 6.766-6.766 17.913 0 24.679h.006c2.754 2.749 5.563 5.561 8.357 8.357 1.857 1.859 3.696 3.696 5.553 5.553l.949.949 1.892 1.898 9.496-9.49-1.898-1.898-6.502-6.502c-2.796-2.797-5.6-5.606-8.363-8.362-1.65-1.653-1.652-4.042 0-5.694 1.653-1.653 4.047-1.653 5.7 0l8.357 8.362 6.502 6.502 1.898 1.893 9.49-9.49-1.893-1.893-6.507-6.502-8.357-8.362c-3.384-3.383-7.86-5.076-12.337-5.076Zm0 2.68c3.789 0 7.577 1.432 10.439 4.294l8.357 8.362-5.694 5.694-8.357-8.362a6.7 6.7 0 0 0-9.496 0 6.697 6.697 0 0 0 0 9.49c2.76 2.755 5.566 5.564 8.363 8.362l-5.694 5.694c-2.795-2.796-5.601-5.607-8.357-8.357H8.99c-5.724-5.724-5.724-15.16 0-20.883 2.861-2.862 6.655-4.294 10.444-4.294ZM57.709 29.03a4.266 4.266 0 0 0-4.268 4.268c0 1.594.881 2.973 2.176 3.707-.714 4.997-1.424 10.107-2.176 15.037-.934 0-1.792.309-2.495.818l-7.115-5.07a4.25 4.25 0 0 0 .115-.965 4.27 4.27 0 1 0-4.268 4.268 4.23 4.23 0 0 0 2.732-1.012l6.973 4.965a4.22 4.22 0 0 0-.215 1.269 4.27 4.27 0 0 0 4.273 4.268 4.266 4.266 0 0 0 4.268-4.268 4.247 4.247 0 0 0-1.657-3.356l2.208-15.446c2.095-.273 3.722-2.045 3.722-4.215a4.27 4.27 0 0 0-4.273-4.268z"
    />
</svg>
`, sm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <g fill="currentColor">
        <path d="m4.879 2.684-2.832 2.8L7.65 11.15l2.832-2.801Zm8.403 8.495-2.832 2.802 5.603 5.662 2.831-2.802zm8.404 8.494-2.832 2.8 5.602 5.664 2.832-2.802z"
        />
        <path d="M27.814 7.408a3.576 3.576 0 0 0-1.161-.176 3.2 3.2 0 0 0-.878.138l7.963 26.068L7.18 27.3c-.543 2.352 1.67 6.055 4.962 6.816l23.054 5.297 2.326 6.42c-2.27-.175-4.279 1.912-4.908 3.805-.535 1.698-.512 3.656.085 5.61.597 1.954 1.671 3.59 3.064 4.7 1.393 1.11 3.238 1.71 5.023 1.164 8.064-3.039 2.135-15.793.467-20.58 5.917 1.023 18.77 5.88 20.578-1.979.42-1.819-.306-3.616-1.509-4.929-1.203-1.313-2.909-2.27-4.9-2.73-1.99-.46-3.866-.547-5.602.303-1.737.849-3.768 2.642-3.468 4.73a6.17 6.17 0 0 0 .012.43l-6.563-1.794-6.88-22.632c-.702-2.297-3.445-3.99-5.108-4.523Zm26.824 26.88c1.36.315 2.472.99 3.116 1.692.644.703.795 1.307.684 1.79-.112.482-.511.956-1.399 1.305-.887.348-2.182.467-3.542.152-1.361-.314-2.472-.99-3.116-1.693-.644-.703-.797-1.304-.686-1.787.112-.482.513-.956 1.4-1.305a5.198 5.198 0 0 1 1.594-.327 6.98 6.98 0 0 1 1.949.173zM37.846 49.174c.333.069.71.25 1.13.585.746.594 1.497 1.654 1.905 2.99.408 1.335.379 2.635.092 3.545-.287.91-.731 1.34-1.205 1.484-.473.145-1.085.036-1.831-.558-.746-.594-1.496-1.655-1.904-2.99-.407-1.336-.378-2.637-.092-3.546.287-.91.732-1.342 1.206-1.486.118-.036.245-.057.38-.058.102 0 .207.011.319.034z"
        />
    </g>
</svg>
`, am = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M41.233 7.917c-5.5 0-10.519 2.077-14.328 5.482a21.443 21.443 0 0 0-4.138-.404c-11.88 0-21.544 9.664-21.544 21.544s9.664 21.544 21.544 21.544c5.5 0 10.519-2.077 14.328-5.482 1.34.263 2.722.404 4.138.404 11.88 0 21.544-9.664 21.544-21.544S53.113 7.917 41.233 7.917zm-9.969 6.791a21.61 21.61 0 0 1 5.598 3.499l-2.01 2.33a18.557 18.557 0 0 0-4.8-2.999Zm-7.927 2.765 2.557 1.714a18.558 18.558 0 0 0-2.396 5.128l-2.955-.86a21.614 21.614 0 0 1 2.794-5.982zm15.86 3.08a21.413 21.413 0 0 1 3.46 5.628l-2.839 1.188a18.357 18.357 0 0 0-2.963-4.817zm-19.334 6.142 3.053.399a18.348 18.348 0 0 0 .144 5.654l-3.027.552a21.407 21.407 0 0 1-.17-6.605Zm23.834 2.63a21.81 21.81 0 0 1 .548 3.263c.1 1.1.115 2.207.044 3.31l-3.07-.195c.12-1.888-.056-3.8-.511-5.64zm-19.918 6.172a18.37 18.37 0 0 0 2.64 5.003l-2.466 1.84a21.427 21.427 0 0 1-3.083-5.84Zm17.042 3.016 3.004.666a21.486 21.486 0 0 1-2.404 6.15l-2.66-1.547a18.434 18.434 0 0 0 2.06-5.27zm-12.535 4.124a18.554 18.554 0 0 0 4.6 3.302l-1.392 2.744a21.611 21.611 0 0 1-5.363-3.85Z"/>
</svg>
`, om = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <path fill="currentColor"
          d="M1.585 1.585V13.75h5.17v1.52H8.58v-1.52h5.17V1.585Zm3.041 3.041h6.083v6.083H4.626Zm9.429 2.13V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.474 0V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.475 0V8.58h3.65V6.755Zm5.475 0v1.597a1.521 1.521 0 0 0-.325.152l-15.686 9.758a1.52 1.52 0 0 0-.199 2.437l23.512 20.553a1.52 1.52 0 0 0 2.477-.78l4.212-17.037v.352h1.825v-3.65H55.42v1.524a1.52 1.52 0 0 0-.222-.296L43.002 8.741a1.521 1.521 0 0 0-.182-.16h2.259V6.754Zm5.475 0V8.58h3.65V6.755Zm5.474 0V8.58h3.65V6.755Zm3.042 2.432v3.65h1.825v-3.65Zm-13.752 2.549 10.757 11.137-3.57 14.446-20.087-17.559Zm13.752 2.926v3.65h1.825v-3.65ZM6.755 17.096v3.65H8.58v-3.65zm0 5.475v3.65h1.628a1.52 1.52 0 0 0 1.02.909l12.683 3.406 7.905 12.694c.168.27.417.481.712.602l13.39 4.576a1.52 1.52 0 0 0 1.157-2.814l-12.936-4.389L24.35 28.42a1.52 1.52 0 0 0-.896-.664L10.19 24.193a1.52 1.52 0 0 0-1.61.557v-2.178zm48.665 3.042v3.65h1.825v-3.65ZM6.755 28.046v3.65H8.58v-3.65zm48.665 3.042v3.65h1.825v-3.65ZM6.755 33.52v3.65H8.58v-3.65zm48.665 3.041v3.65h1.825v-3.65ZM6.755 38.996v3.65H8.58v-3.65zm48.665 3.041v3.65h1.825v-3.65zm-35.382.913c-3.454 0-6.287 2.833-6.287 6.287 0 3.076 2.248 5.654 5.179 6.183h-1.225v1.825h3.65V55.42h-.206c2.712-.5 4.777-2.796 5.055-5.59l.002-.002a1.52 1.52 0 0 0 0-1.18c-.314-3.168-2.922-5.698-6.168-5.698zM6.755 44.47v3.65H8.58v-3.65zm13.283 1.521a3.223 3.223 0 0 1 3.246 3.246 3.223 3.223 0 0 1-3.246 3.246 3.223 3.223 0 0 1-3.246-3.246 3.223 3.223 0 0 1 3.246-3.246zm35.382 1.52v2.738h-5.17v12.166h12.165V50.25h-5.17v-2.737ZM6.755 49.946v3.65H8.58v-3.65zm46.536 3.346h6.083v6.083H53.29ZM6.755 55.42v1.825h3.65V55.42H7.668Zm5.475 0v1.825h3.65V55.42zm10.95 0v1.825h3.65V55.42zm5.474 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42zm5.475 0v1.825h3.65V55.42z"/>
</svg>
`, dt = {
  marker: Gp,
  circle: Op,
  ellipse: Rp,
  circle_marker: df,
  text_marker: Hp,
  line: Fp,
  rectangle: Up,
  polygon: Bp,
  freehand: jp,
  custom_shape: Xp,
  drag: Dp,
  change: Pp,
  rotate: qp,
  scale: rm,
  copy: Vp,
  cut: Wp,
  split: sm,
  delete: zp,
  union: am,
  difference: Zp,
  line_simplification: Qp,
  lasso: Kp,
  shape_markers: null,
  snapping: im,
  pin: nm,
  snap_guides: Yp,
  measurements: em,
  auto_trace: Jp,
  geofencing: $p,
  zoom_to_features: om,
  click_to_edit: tm
}, um = [
  "mode_start",
  "mode_started",
  "mode_end",
  "mode_ended"
], ft = (n) => Object.keys(n), ji = (n) => Object.values(n), Ir = (n, r) => r.includes(n);
function pf(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var js = { exports: {} }, lm = js.exports, ec;
function cm() {
  return ec || (ec = 1, function(n) {
    (function(r, e) {
      n.exports ? n.exports = e() : r.log = e();
    })(lm, function() {
      var r = function() {
      }, e = "undefined", s = typeof window !== e && typeof window.navigator !== e && /Trident\/|MSIE /.test(window.navigator.userAgent), u = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
      ], l = {}, f = null;
      function h(D, U) {
        var G = D[U];
        if (typeof G.bind == "function")
          return G.bind(D);
        try {
          return Function.prototype.bind.call(G, D);
        } catch {
          return function() {
            return Function.prototype.apply.apply(G, [D, arguments]);
          };
        }
      }
      function m() {
        console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
      }
      function d(D) {
        return D === "debug" && (D = "log"), typeof console === e ? !1 : D === "trace" && s ? m : console[D] !== void 0 ? h(console, D) : console.log !== void 0 ? h(console, "log") : r;
      }
      function v() {
        for (var D = this.getLevel(), U = 0; U < u.length; U++) {
          var G = u[U];
          this[G] = U < D ? r : this.methodFactory(G, D, this.name);
        }
        if (this.log = this.debug, typeof console === e && D < this.levels.SILENT)
          return "No console available for logging";
      }
      function y(D) {
        return function() {
          typeof console !== e && (v.call(this), this[D].apply(this, arguments));
        };
      }
      function E(D, U, G) {
        return d(D) || y.apply(this, arguments);
      }
      function S(D, U) {
        var G = this, I, H, J, X = "loglevel";
        typeof D == "string" ? X += ":" + D : typeof D == "symbol" && (X = void 0);
        function W(A) {
          var T = (u[A] || "silent").toUpperCase();
          if (!(typeof window === e || !X)) {
            try {
              window.localStorage[X] = T;
              return;
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(X) + "=" + T + ";";
            } catch {
            }
          }
        }
        function $() {
          var A;
          if (!(typeof window === e || !X)) {
            try {
              A = window.localStorage[X];
            } catch {
            }
            if (typeof A === e)
              try {
                var T = window.document.cookie, F = encodeURIComponent(X), P = T.indexOf(F + "=");
                P !== -1 && (A = /^([^;]+)/.exec(
                  T.slice(P + F.length + 1)
                )[1]);
              } catch {
              }
            return G.levels[A] === void 0 && (A = void 0), A;
          }
        }
        function x() {
          if (!(typeof window === e || !X)) {
            try {
              window.localStorage.removeItem(X);
            } catch {
            }
            try {
              window.document.cookie = encodeURIComponent(X) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
            } catch {
            }
          }
        }
        function k(A) {
          var T = A;
          if (typeof T == "string" && G.levels[T.toUpperCase()] !== void 0 && (T = G.levels[T.toUpperCase()]), typeof T == "number" && T >= 0 && T <= G.levels.SILENT)
            return T;
          throw new TypeError("log.setLevel() called with invalid level: " + A);
        }
        G.name = D, G.levels = {
          TRACE: 0,
          DEBUG: 1,
          INFO: 2,
          WARN: 3,
          ERROR: 4,
          SILENT: 5
        }, G.methodFactory = U || E, G.getLevel = function() {
          return J ?? H ?? I;
        }, G.setLevel = function(A, T) {
          return J = k(A), T !== !1 && W(J), v.call(G);
        }, G.setDefaultLevel = function(A) {
          H = k(A), $() || G.setLevel(A, !1);
        }, G.resetLevel = function() {
          J = null, x(), v.call(G);
        }, G.enableAll = function(A) {
          G.setLevel(G.levels.TRACE, A);
        }, G.disableAll = function(A) {
          G.setLevel(G.levels.SILENT, A);
        }, G.rebuild = function() {
          if (f !== G && (I = k(f.getLevel())), v.call(G), f === G)
            for (var A in l)
              l[A].rebuild();
        }, I = k(
          f ? f.getLevel() : "WARN"
        );
        var b = $();
        b != null && (J = k(b)), v.call(G);
      }
      f = new S(), f.getLogger = function(U) {
        if (typeof U != "symbol" && typeof U != "string" || U === "")
          throw new TypeError("You must supply a name when creating a logger.");
        var G = l[U];
        return G || (G = l[U] = new S(
          U,
          f.methodFactory
        )), G;
      };
      var M = typeof window !== e ? window.log : void 0;
      return f.noConflict = function() {
        return typeof window !== e && window.log === f && (window.log = M), f;
      }, f.getLoggers = function() {
        return l;
      }, f.default = f, f;
    });
  }(js)), js.exports;
}
var hm = cm();
const re = /* @__PURE__ */ pf(hm);
class ku {
  isMarkerInstanceAvailable() {
    return this.markerInstance ? !0 : (re.error("Marker instance is not available"), !1);
  }
}
var rt = 63710088e-1, mf = {
  centimeters: rt * 100,
  centimetres: rt * 100,
  degrees: 360 / (2 * Math.PI),
  feet: rt * 3.28084,
  inches: rt * 39.37,
  kilometers: rt / 1e3,
  kilometres: rt / 1e3,
  meters: rt,
  metres: rt,
  miles: rt / 1609.344,
  millimeters: rt * 1e3,
  millimetres: rt * 1e3,
  nauticalmiles: rt / 1852,
  radians: 1,
  yards: rt * 1.0936
};
function cn(n, r, e = {}) {
  const s = { type: "Feature" };
  return (e.id === 0 || e.id) && (s.id = e.id), e.bbox && (s.bbox = e.bbox), s.properties = r || {}, s.geometry = n, s;
}
function Sn(n, r, e = {}) {
  if (!n)
    throw new Error("coordinates is required");
  if (!Array.isArray(n))
    throw new Error("coordinates must be an Array");
  if (n.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!ca(n[0]) || !ca(n[1]))
    throw new Error("coordinates must contain numbers");
  return cn({
    type: "Point",
    coordinates: n
  }, r, e);
}
function Yn(n, r, e = {}) {
  for (const u of n) {
    if (u.length < 4)
      throw new Error(
        "Each LinearRing of a Polygon must have 4 or more Positions."
      );
    if (u[u.length - 1].length !== u[0].length)
      throw new Error("First and last Position are not equivalent.");
    for (let l = 0; l < u[u.length - 1].length; l++)
      if (u[u.length - 1][l] !== u[0][l])
        throw new Error("First and last Position are not equivalent.");
  }
  return cn({
    type: "Polygon",
    coordinates: n
  }, r, e);
}
function ui(n, r, e = {}) {
  if (n.length < 2)
    throw new Error("coordinates must be an array of two or more positions");
  return cn({
    type: "LineString",
    coordinates: n
  }, r, e);
}
function $e(n, r = {}) {
  const e = { type: "FeatureCollection" };
  return r.id && (e.id = r.id), r.bbox && (e.bbox = r.bbox), e.features = n, e;
}
function fm(n, r, e = {}) {
  return cn({
    type: "MultiLineString",
    coordinates: n
  }, r, e);
}
function Su(n, r, e = {}) {
  return cn({
    type: "MultiPolygon",
    coordinates: n
  }, r, e);
}
function Mu(n, r = "kilometers") {
  const e = mf[r];
  if (!e)
    throw new Error(r + " units is invalid");
  return n * e;
}
function Iu(n, r = "kilometers") {
  const e = mf[r];
  if (!e)
    throw new Error(r + " units is invalid");
  return n / e;
}
function Ar(n) {
  return n % (2 * Math.PI) * 180 / Math.PI;
}
function it(n) {
  return n % 360 * Math.PI / 180;
}
function vf(n, r = "kilometers", e = "kilometers") {
  if (!(n >= 0))
    throw new Error("length must be a positive number");
  return Mu(Iu(n, r), e);
}
function ca(n) {
  return !isNaN(n) && n !== null && !Array.isArray(n);
}
function Da(n) {
  return n !== null && typeof n == "object" && !Array.isArray(n);
}
function fr(n, r, e) {
  if (n !== null)
    for (var s, u, l, f, h, m, d, v = 0, y = 0, E, S = n.type, M = S === "FeatureCollection", D = S === "Feature", U = M ? n.features.length : 1, G = 0; G < U; G++) {
      d = M ? n.features[G].geometry : D ? n.geometry : n, E = d ? d.type === "GeometryCollection" : !1, h = E ? d.geometries.length : 1;
      for (var I = 0; I < h; I++) {
        var H = 0, J = 0;
        if (f = E ? d.geometries[I] : d, f !== null) {
          m = f.coordinates;
          var X = f.type;
          switch (v = e && (X === "Polygon" || X === "MultiPolygon") ? 1 : 0, X) {
            case null:
              break;
            case "Point":
              if (r(
                m,
                y,
                G,
                H,
                J
              ) === !1)
                return !1;
              y++, H++;
              break;
            case "LineString":
            case "MultiPoint":
              for (s = 0; s < m.length; s++) {
                if (r(
                  m[s],
                  y,
                  G,
                  H,
                  J
                ) === !1)
                  return !1;
                y++, X === "MultiPoint" && H++;
              }
              X === "LineString" && H++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (s = 0; s < m.length; s++) {
                for (u = 0; u < m[s].length - v; u++) {
                  if (r(
                    m[s][u],
                    y,
                    G,
                    H,
                    J
                  ) === !1)
                    return !1;
                  y++;
                }
                X === "MultiLineString" && H++, X === "Polygon" && J++;
              }
              X === "Polygon" && H++;
              break;
            case "MultiPolygon":
              for (s = 0; s < m.length; s++) {
                for (J = 0, u = 0; u < m[s].length; u++) {
                  for (l = 0; l < m[s][u].length - v; l++) {
                    if (r(
                      m[s][u][l],
                      y,
                      G,
                      H,
                      J
                    ) === !1)
                      return !1;
                    y++;
                  }
                  J++;
                }
                H++;
              }
              break;
            case "GeometryCollection":
              for (s = 0; s < f.geometries.length; s++)
                if (fr(f.geometries[s], r, e) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function An(n, r) {
  if (n.type === "Feature")
    r(n, 0);
  else if (n.type === "FeatureCollection")
    for (var e = 0; e < n.features.length && r(n.features[e], e) !== !1; e++)
      ;
}
function gm(n, r, e) {
  var s = e;
  return An(n, function(u, l) {
    l === 0 && e === void 0 ? s = u : s = r(s, u, l);
  }), s;
}
function gr(n, r) {
  var e, s, u, l, f, h, m, d, v, y, E = 0, S = n.type === "FeatureCollection", M = n.type === "Feature", D = S ? n.features.length : 1;
  for (e = 0; e < D; e++) {
    for (h = S ? n.features[e].geometry : M ? n.geometry : n, d = S ? n.features[e].properties : M ? n.properties : {}, v = S ? n.features[e].bbox : M ? n.bbox : void 0, y = S ? n.features[e].id : M ? n.id : void 0, m = h ? h.type === "GeometryCollection" : !1, f = m ? h.geometries.length : 1, u = 0; u < f; u++) {
      if (l = m ? h.geometries[u] : h, l === null) {
        if (r(
          null,
          E,
          d,
          v,
          y
        ) === !1)
          return !1;
        continue;
      }
      switch (l.type) {
        case "Point":
        case "LineString":
        case "MultiPoint":
        case "Polygon":
        case "MultiLineString":
        case "MultiPolygon": {
          if (r(
            l,
            E,
            d,
            v,
            y
          ) === !1)
            return !1;
          break;
        }
        case "GeometryCollection": {
          for (s = 0; s < l.geometries.length; s++)
            if (r(
              l.geometries[s],
              E,
              d,
              v,
              y
            ) === !1)
              return !1;
          break;
        }
        default:
          throw new Error("Unknown Geometry Type");
      }
    }
    E++;
  }
}
function dm(n, r, e) {
  var s = e;
  return gr(
    n,
    function(u, l, f, h, m) {
      s = r(
        s,
        u,
        l,
        f,
        h,
        m
      );
    }
  ), s;
}
function ur(n, r) {
  gr(n, function(e, s, u, l, f) {
    var h = e === null ? null : e.type;
    switch (h) {
      case null:
      case "Point":
      case "LineString":
      case "Polygon":
        return r(
          cn(e, u, { bbox: l, id: f }),
          s,
          0
        ) === !1 ? !1 : void 0;
    }
    var m;
    switch (h) {
      case "MultiPoint":
        m = "Point";
        break;
      case "MultiLineString":
        m = "LineString";
        break;
      case "MultiPolygon":
        m = "Polygon";
        break;
    }
    for (var d = 0; d < e.coordinates.length; d++) {
      var v = e.coordinates[d], y = {
        type: m,
        coordinates: v
      };
      if (r(cn(y, u), s, d) === !1)
        return !1;
    }
  });
}
function wn(n, r = {}) {
  if (n.bbox != null && r.recompute !== !0)
    return n.bbox;
  const e = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return fr(n, (s) => {
    e[0] > s[0] && (e[0] = s[0]), e[1] > s[1] && (e[1] = s[1]), e[2] < s[0] && (e[2] = s[0]), e[3] < s[1] && (e[3] = s[1]);
  }), e;
}
var yf = wn;
function We(n) {
  if (!n)
    throw new Error("coord is required");
  if (!Array.isArray(n)) {
    if (n.type === "Feature" && n.geometry !== null && n.geometry.type === "Point")
      return [...n.geometry.coordinates];
    if (n.type === "Point")
      return [...n.coordinates];
  }
  if (Array.isArray(n) && n.length >= 2 && !Array.isArray(n[0]) && !Array.isArray(n[1]))
    return [...n];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function Rt(n) {
  if (Array.isArray(n))
    return n;
  if (n.type === "Feature") {
    if (n.geometry !== null)
      return n.geometry.coordinates;
  } else if (n.coordinates)
    return n.coordinates;
  throw new Error(
    "coords must be GeoJSON Feature, Geometry Object or an Array"
  );
}
function ys(n) {
  return n.type === "Feature" ? n.geometry : n;
}
function tc(n, r) {
  return n.type === "FeatureCollection" ? "FeatureCollection" : n.type === "GeometryCollection" ? "GeometryCollection" : n.type === "Feature" && n.geometry !== null ? n.geometry.type : n.type;
}
function _f(n, r, e, s = {}) {
  const u = We(n), l = it(u[0]), f = it(u[1]), h = it(e), m = Iu(r, s.units), d = Math.asin(
    Math.sin(f) * Math.cos(m) + Math.cos(f) * Math.sin(m) * Math.cos(h)
  ), v = l + Math.atan2(
    Math.sin(h) * Math.sin(m) * Math.cos(f),
    Math.cos(m) - Math.sin(f) * Math.sin(d)
  ), y = Ar(v), E = Ar(d);
  return Sn([y, E], s.properties);
}
function pm(n, r, e = {}) {
  const s = e.steps || 64, u = e.properties ? e.properties : !Array.isArray(n) && n.type === "Feature" && n.properties ? n.properties : {}, l = [];
  for (let f = 0; f < s; f++)
    l.push(
      _f(n, r, f * -360 / s, e).geometry.coordinates
    );
  return l.push(l[0]), Yn([l], u);
}
var mm = pm;
function Ef(n, r = {}) {
  let e = 0, s = 0, u = 0;
  return fr(
    n,
    function(l) {
      e += l[0], s += l[1], u++;
    },
    !0
  ), Sn([e / u, s / u], r.properties);
}
var xf = Ef;
function vm(n, r, e = {}) {
  let s;
  return e.final ? s = nc(We(r), We(n)) : s = nc(We(n), We(r)), s > 180 ? -(360 - s) : s;
}
function nc(n, r) {
  const e = it(n[1]), s = it(r[1]);
  let u = it(r[0] - n[0]);
  u > Math.PI && (u -= 2 * Math.PI), u < -Math.PI && (u += 2 * Math.PI);
  const l = Math.log(
    Math.tan(s / 2 + Math.PI / 4) / Math.tan(e / 2 + Math.PI / 4)
  ), f = Math.atan2(u, l);
  return (Ar(f) + 360) % 360;
}
function ym(n, r, e = {}) {
  const s = We(n), u = We(r);
  u[0] += u[0] - s[0] > 180 ? -360 : s[0] - u[0] > 180 ? 360 : 0;
  const l = _m(s, u);
  return vf(l, "meters", e.units);
}
function _m(n, r, e) {
  e = e === void 0 ? rt : Number(e);
  const s = e, u = n[1] * Math.PI / 180, l = r[1] * Math.PI / 180, f = l - u;
  let h = Math.abs(r[0] - n[0]) * Math.PI / 180;
  h > Math.PI && (h -= 2 * Math.PI);
  const m = Math.log(
    Math.tan(l / 2 + Math.PI / 4) / Math.tan(u / 2 + Math.PI / 4)
  ), d = Math.abs(m) > 1e-11 ? f / m : Math.cos(u);
  return Math.sqrt(
    f * f + d * d * h * h
  ) * s;
}
function Em(n, r, e, s = {}) {
  const u = r < 0;
  let l = vf(
    Math.abs(r),
    s.units,
    "meters"
  );
  u && (l = -Math.abs(l));
  const f = We(n), h = xm(
    f,
    l,
    e
  );
  return h[0] += h[0] - f[0] > 180 ? -360 : f[0] - h[0] > 180 ? 360 : 0, Sn(h, s.properties);
}
function xm(n, r, e, s) {
  s = s === void 0 ? rt : Number(s);
  const u = r / s, l = n[0] * Math.PI / 180, f = it(n[1]), h = it(e), m = u * Math.cos(h);
  let d = f + m;
  Math.abs(d) > Math.PI / 2 && (d = d > 0 ? Math.PI - d : -Math.PI - d);
  const v = Math.log(
    Math.tan(d / 2 + Math.PI / 4) / Math.tan(f / 2 + Math.PI / 4)
  ), y = Math.abs(v) > 1e-11 ? m / v : Math.cos(f), E = u * Math.sin(h) / y;
  return [
    ((l + E) * 180 / Math.PI + 540) % 360 - 180,
    d * 180 / Math.PI
  ];
}
function Fa(n) {
  if (!n)
    throw new Error("geojson is required");
  switch (n.type) {
    case "Feature":
      return wf(n);
    case "FeatureCollection":
      return wm(n);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Lu(n);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function wf(n) {
  const r = { type: "Feature" };
  return Object.keys(n).forEach((e) => {
    switch (e) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        r[e] = n[e];
    }
  }), r.properties = kf(n.properties), n.geometry == null ? r.geometry = null : r.geometry = Lu(n.geometry), r;
}
function kf(n) {
  const r = {};
  return n && Object.keys(n).forEach((e) => {
    const s = n[e];
    typeof s == "object" ? s === null ? r[e] = null : Array.isArray(s) ? r[e] = s.map((u) => u) : r[e] = kf(s) : r[e] = s;
  }), r;
}
function wm(n) {
  const r = { type: "FeatureCollection" };
  return Object.keys(n).forEach((e) => {
    switch (e) {
      case "type":
      case "features":
        return;
      default:
        r[e] = n[e];
    }
  }), r.features = n.features.map((e) => wf(e)), r;
}
function Lu(n) {
  const r = { type: n.type };
  return n.bbox && (r.bbox = n.bbox), n.type === "GeometryCollection" ? (r.geometries = n.geometries.map((e) => Lu(e)), r) : (r.coordinates = Sf(n.coordinates), r);
}
function Sf(n) {
  const r = n;
  return typeof r[0] != "object" ? r.slice() : r.map((e) => Sf(e));
}
var Mf = Fa;
function If(n, r, e) {
  if (e = e || {}, !Da(e)) throw new Error("options is invalid");
  const s = e.pivot, u = e.mutate;
  if (!n) throw new Error("geojson is required");
  if (r == null || isNaN(r))
    throw new Error("angle is required");
  if (r === 0) return n;
  const l = s ?? Ef(n);
  return (u === !1 || u === void 0) && (n = Fa(n)), fr(n, function(f) {
    const m = vm(l, f) + r, d = ym(l, f), v = Rt(
      Em(l, d, m)
    );
    f[0] = v[0], f[1] = v[1];
  }), n;
}
var km = If;
function rc(n, r, e, s) {
  s = s || {};
  let u = s.steps || 64;
  const l = s.units || "kilometers";
  let f = s.angle || 0;
  const h = s.pivot || n, m = s.properties || {};
  if (!n) throw new Error("center is required");
  if (!r) throw new Error("xSemiAxis is required");
  if (!e) throw new Error("ySemiAxis is required");
  if (!Da(s)) throw new Error("options must be an object");
  if (!ca(u)) throw new Error("steps must be a number");
  if (!ca(f)) throw new Error("angle must be a number");
  const d = We(If(Sn(We(n)), f, { pivot: h }));
  f = -90 + f, u = Math.ceil(u / 4);
  const v = [], y = [], E = r, S = e, M = S, D = (E - S) / (Math.PI / 2), U = (E + S) * Math.PI / 4, G = 0.5, I = u;
  let H = 0, J = 0;
  for (let W = 0; W < u; W++)
    J += H, D === 0 ? H = U / I / M : H = (-(D * J + M) + Math.sqrt(Math.pow(D * J + M, 2) - 4 * (G * D) * -(U / I))) / (2 * (G * D)), J != 0 && v.push(J);
  y.push(0);
  for (let W = 0; W < v.length; W++)
    y.push(v[W]);
  y.push(Math.PI / 2);
  for (let W = 0; W < v.length; W++)
    y.push(Math.PI - v[v.length - W - 1]);
  y.push(Math.PI);
  for (let W = 0; W < v.length; W++)
    y.push(Math.PI + v[W]);
  y.push(3 * Math.PI / 2);
  for (let W = 0; W < v.length; W++)
    y.push(2 * Math.PI - v[v.length - W - 1]);
  y.push(0);
  const X = [];
  for (const W of y) {
    const $ = Math.atan2(S * Math.sin(W), E * Math.cos(W)), x = Math.sqrt(
      Math.pow(E, 2) * Math.pow(S, 2) / (Math.pow(E * Math.sin($), 2) + Math.pow(S * Math.cos($), 2))
    );
    X.push(
      _f(d, x, f + Ar($), {
        units: l
      }).geometry.coordinates
    );
  }
  return Yn([X], m);
}
function Lf(n, r, e = {}) {
  if (e.final === !0)
    return Sm(n, r);
  const s = We(n), u = We(r), l = it(s[0]), f = it(u[0]), h = it(s[1]), m = it(u[1]), d = Math.sin(f - l) * Math.cos(m), v = Math.cos(h) * Math.sin(m) - Math.sin(h) * Math.cos(m) * Math.cos(f - l);
  return Ar(Math.atan2(d, v));
}
function Sm(n, r) {
  let e = Lf(r, n);
  return e = (e + 180) % 360, e;
}
var ha = Lf;
function Ot(n, r, e = {}) {
  var s = We(n), u = We(r), l = it(u[1] - s[1]), f = it(u[0] - s[0]), h = it(s[1]), m = it(u[1]), d = Math.pow(Math.sin(l / 2), 2) + Math.pow(Math.sin(f / 2), 2) * Math.cos(h) * Math.cos(m);
  return Mu(
    2 * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d)),
    e.units
  );
}
var bf = Ot;
function Yo(n, r = {}) {
  const e = ys(n);
  switch (!r.properties && n.type === "Feature" && (r.properties = n.properties), e.type) {
    case "Polygon":
      return Af(e, r);
    case "MultiPolygon":
      return Cf(e, r);
    default:
      throw new Error("invalid poly");
  }
}
function Af(n, r = {}) {
  const s = ys(n).coordinates, u = r.properties ? r.properties : n.type === "Feature" ? n.properties : {};
  return Tf(s, u);
}
function Cf(n, r = {}) {
  const s = ys(n).coordinates, u = r.properties ? r.properties : n.type === "Feature" ? n.properties : {}, l = [];
  return s.forEach((f) => {
    l.push(Tf(f, u));
  }), $e(l);
}
function Tf(n, r) {
  return n.length > 1 ? fm(n, r) : ui(n[0], r);
}
var Nf = typeof global == "object" && global && global.Object === Object && global, Mm = typeof self == "object" && self && self.Object === Object && self, gn = Nf || Mm || Function("return this")(), jt = gn.Symbol, Pf = Object.prototype, Im = Pf.hasOwnProperty, Lm = Pf.toString, zi = jt ? jt.toStringTag : void 0;
function bm(n) {
  var r = Im.call(n, zi), e = n[zi];
  try {
    n[zi] = void 0;
    var s = !0;
  } catch {
  }
  var u = Lm.call(n);
  return s && (r ? n[zi] = e : delete n[zi]), u;
}
var Am = Object.prototype, Cm = Am.toString;
function Tm(n) {
  return Cm.call(n);
}
var Nm = "[object Null]", Pm = "[object Undefined]", ic = jt ? jt.toStringTag : void 0;
function Pr(n) {
  return n == null ? n === void 0 ? Pm : Nm : ic && ic in Object(n) ? bm(n) : Tm(n);
}
function Cn(n) {
  return n != null && typeof n == "object";
}
var Om = "[object Symbol]";
function li(n) {
  return typeof n == "symbol" || Cn(n) && Pr(n) == Om;
}
function ii(n, r) {
  for (var e = -1, s = n == null ? 0 : n.length, u = Array(s); ++e < s; )
    u[e] = r(n[e], e, n);
  return u;
}
var yt = Array.isArray, sc = jt ? jt.prototype : void 0, ac = sc ? sc.toString : void 0;
function Of(n) {
  if (typeof n == "string")
    return n;
  if (yt(n))
    return ii(n, Of) + "";
  if (li(n))
    return ac ? ac.call(n) : "";
  var r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
var Rm = /\s/;
function Dm(n) {
  for (var r = n.length; r-- && Rm.test(n.charAt(r)); )
    ;
  return r;
}
var Fm = /^\s+/;
function Gm(n) {
  return n && n.slice(0, Dm(n) + 1).replace(Fm, "");
}
function Dt(n) {
  var r = typeof n;
  return n != null && (r == "object" || r == "function");
}
var oc = NaN, Bm = /^[-+]0x[0-9a-f]+$/i, Um = /^0b[01]+$/i, zm = /^0o[0-7]+$/i, qm = parseInt;
function uc(n) {
  if (typeof n == "number")
    return n;
  if (li(n))
    return oc;
  if (Dt(n)) {
    var r = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = Dt(r) ? r + "" : r;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = Gm(n);
  var e = Um.test(n);
  return e || zm.test(n) ? qm(n.slice(2), e ? 2 : 8) : Bm.test(n) ? oc : +n;
}
function Ga(n) {
  return n;
}
var Ym = "[object AsyncFunction]", Hm = "[object Function]", Jm = "[object GeneratorFunction]", Vm = "[object Proxy]";
function bu(n) {
  if (!Dt(n))
    return !1;
  var r = Pr(n);
  return r == Hm || r == Jm || r == Ym || r == Vm;
}
var Eo = gn["__core-js_shared__"], lc = function() {
  var n = /[^.]+$/.exec(Eo && Eo.keys && Eo.keys.IE_PROTO || "");
  return n ? "Symbol(src)_1." + n : "";
}();
function Xm(n) {
  return !!lc && lc in n;
}
var Wm = Function.prototype, Zm = Wm.toString;
function Or(n) {
  if (n != null) {
    try {
      return Zm.call(n);
    } catch {
    }
    try {
      return n + "";
    } catch {
    }
  }
  return "";
}
var jm = /[\\^$.*+?()[\]{}|]/g, $m = /^\[object .+?Constructor\]$/, Km = Function.prototype, Qm = Object.prototype, ev = Km.toString, tv = Qm.hasOwnProperty, nv = RegExp(
  "^" + ev.call(tv).replace(jm, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rv(n) {
  if (!Dt(n) || Xm(n))
    return !1;
  var r = bu(n) ? nv : $m;
  return r.test(Or(n));
}
function iv(n, r) {
  return n == null ? void 0 : n[r];
}
function Rr(n, r) {
  var e = iv(n, r);
  return rv(e) ? e : void 0;
}
var Ho = Rr(gn, "WeakMap"), cc = Object.create, sv = /* @__PURE__ */ function() {
  function n() {
  }
  return function(r) {
    if (!Dt(r))
      return {};
    if (cc)
      return cc(r);
    n.prototype = r;
    var e = new n();
    return n.prototype = void 0, e;
  };
}();
function av(n, r, e) {
  switch (e.length) {
    case 0:
      return n.call(r);
    case 1:
      return n.call(r, e[0]);
    case 2:
      return n.call(r, e[0], e[1]);
    case 3:
      return n.call(r, e[0], e[1], e[2]);
  }
  return n.apply(r, e);
}
function ov() {
}
function uv(n, r) {
  var e = -1, s = n.length;
  for (r || (r = Array(s)); ++e < s; )
    r[e] = n[e];
  return r;
}
var lv = 800, cv = 16, hv = Date.now;
function fv(n) {
  var r = 0, e = 0;
  return function() {
    var s = hv(), u = cv - (s - e);
    if (e = s, u > 0) {
      if (++r >= lv)
        return arguments[0];
    } else
      r = 0;
    return n.apply(void 0, arguments);
  };
}
function gv(n) {
  return function() {
    return n;
  };
}
var fa = function() {
  try {
    var n = Rr(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}(), dv = fa ? function(n, r) {
  return fa(n, "toString", {
    configurable: !0,
    enumerable: !1,
    value: gv(r),
    writable: !0
  });
} : Ga, pv = fv(dv);
function mv(n, r) {
  for (var e = -1, s = n == null ? 0 : n.length; ++e < s && r(n[e], e, n) !== !1; )
    ;
  return n;
}
function vv(n, r, e, s) {
  for (var u = n.length, l = e + -1; ++l < u; )
    if (r(n[l], l, n))
      return l;
  return -1;
}
function yv(n) {
  return n !== n;
}
function _v(n, r, e) {
  for (var s = e - 1, u = n.length; ++s < u; )
    if (n[s] === r)
      return s;
  return -1;
}
function Ev(n, r, e) {
  return r === r ? _v(n, r, e) : vv(n, yv, e);
}
function Rf(n, r) {
  var e = n == null ? 0 : n.length;
  return !!e && Ev(n, r, 0) > -1;
}
var xv = 9007199254740991, wv = /^(?:0|[1-9]\d*)$/;
function Au(n, r) {
  var e = typeof n;
  return r = r ?? xv, !!r && (e == "number" || e != "symbol" && wv.test(n)) && n > -1 && n % 1 == 0 && n < r;
}
function Ba(n, r, e) {
  r == "__proto__" && fa ? fa(n, r, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : n[r] = e;
}
function _s(n, r) {
  return n === r || n !== n && r !== r;
}
var kv = Object.prototype, Sv = kv.hasOwnProperty;
function Df(n, r, e) {
  var s = n[r];
  (!(Sv.call(n, r) && _s(s, e)) || e === void 0 && !(r in n)) && Ba(n, r, e);
}
function Mv(n, r, e, s) {
  var u = !e;
  e || (e = {});
  for (var l = -1, f = r.length; ++l < f; ) {
    var h = r[l], m = void 0;
    m === void 0 && (m = n[h]), u ? Ba(e, h, m) : Df(e, h, m);
  }
  return e;
}
var hc = Math.max;
function Iv(n, r, e) {
  return r = hc(r === void 0 ? n.length - 1 : r, 0), function() {
    for (var s = arguments, u = -1, l = hc(s.length - r, 0), f = Array(l); ++u < l; )
      f[u] = s[r + u];
    u = -1;
    for (var h = Array(r + 1); ++u < r; )
      h[u] = s[u];
    return h[r] = e(f), av(n, this, h);
  };
}
function Cu(n, r) {
  return pv(Iv(n, r, Ga), n + "");
}
var Lv = 9007199254740991;
function Tu(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Lv;
}
function yi(n) {
  return n != null && Tu(n.length) && !bu(n);
}
function Jo(n, r, e) {
  if (!Dt(e))
    return !1;
  var s = typeof r;
  return (s == "number" ? yi(e) && Au(r, e.length) : s == "string" && r in e) ? _s(e[r], n) : !1;
}
function Ff(n) {
  return Cu(function(r, e) {
    var s = -1, u = e.length, l = u > 1 ? e[u - 1] : void 0, f = u > 2 ? e[2] : void 0;
    for (l = n.length > 3 && typeof l == "function" ? (u--, l) : void 0, f && Jo(e[0], e[1], f) && (l = u < 3 ? void 0 : l, u = 1), r = Object(r); ++s < u; ) {
      var h = e[s];
      h && n(r, h, s, l);
    }
    return r;
  });
}
var bv = Object.prototype;
function Nu(n) {
  var r = n && n.constructor, e = typeof r == "function" && r.prototype || bv;
  return n === e;
}
function Av(n, r) {
  for (var e = -1, s = Array(n); ++e < n; )
    s[e] = r(e);
  return s;
}
var Cv = "[object Arguments]";
function fc(n) {
  return Cn(n) && Pr(n) == Cv;
}
var Gf = Object.prototype, Tv = Gf.hasOwnProperty, Nv = Gf.propertyIsEnumerable, ls = fc(/* @__PURE__ */ function() {
  return arguments;
}()) ? fc : function(n) {
  return Cn(n) && Tv.call(n, "callee") && !Nv.call(n, "callee");
};
function Pv() {
  return !1;
}
var Bf = typeof exports == "object" && exports && !exports.nodeType && exports, gc = Bf && typeof module == "object" && module && !module.nodeType && module, Ov = gc && gc.exports === Bf, dc = Ov ? gn.Buffer : void 0, Rv = dc ? dc.isBuffer : void 0, cs = Rv || Pv, Dv = "[object Arguments]", Fv = "[object Array]", Gv = "[object Boolean]", Bv = "[object Date]", Uv = "[object Error]", zv = "[object Function]", qv = "[object Map]", Yv = "[object Number]", Hv = "[object Object]", Jv = "[object RegExp]", Vv = "[object Set]", Xv = "[object String]", Wv = "[object WeakMap]", Zv = "[object ArrayBuffer]", jv = "[object DataView]", $v = "[object Float32Array]", Kv = "[object Float64Array]", Qv = "[object Int8Array]", ey = "[object Int16Array]", ty = "[object Int32Array]", ny = "[object Uint8Array]", ry = "[object Uint8ClampedArray]", iy = "[object Uint16Array]", sy = "[object Uint32Array]", ze = {};
ze[$v] = ze[Kv] = ze[Qv] = ze[ey] = ze[ty] = ze[ny] = ze[ry] = ze[iy] = ze[sy] = !0;
ze[Dv] = ze[Fv] = ze[Zv] = ze[Gv] = ze[jv] = ze[Bv] = ze[Uv] = ze[zv] = ze[qv] = ze[Yv] = ze[Hv] = ze[Jv] = ze[Vv] = ze[Xv] = ze[Wv] = !1;
function ay(n) {
  return Cn(n) && Tu(n.length) && !!ze[Pr(n)];
}
function Ua(n) {
  return function(r) {
    return n(r);
  };
}
var Uf = typeof exports == "object" && exports && !exports.nodeType && exports, is = Uf && typeof module == "object" && module && !module.nodeType && module, oy = is && is.exports === Uf, xo = oy && Nf.process, ci = function() {
  try {
    var n = is && is.require && is.require("util").types;
    return n || xo && xo.binding && xo.binding("util");
  } catch {
  }
}(), pc = ci && ci.isTypedArray, Pu = pc ? Ua(pc) : ay, uy = Object.prototype, ly = uy.hasOwnProperty;
function zf(n, r) {
  var e = yt(n), s = !e && ls(n), u = !e && !s && cs(n), l = !e && !s && !u && Pu(n), f = e || s || u || l, h = f ? Av(n.length, String) : [], m = h.length;
  for (var d in n)
    (r || ly.call(n, d)) && !(f && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    u && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    l && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Au(d, m))) && h.push(d);
  return h;
}
function qf(n, r) {
  return function(e) {
    return n(r(e));
  };
}
var cy = qf(Object.keys, Object), hy = Object.prototype, fy = hy.hasOwnProperty;
function gy(n) {
  if (!Nu(n))
    return cy(n);
  var r = [];
  for (var e in Object(n))
    fy.call(n, e) && e != "constructor" && r.push(e);
  return r;
}
function za(n) {
  return yi(n) ? zf(n) : gy(n);
}
function dy(n) {
  var r = [];
  if (n != null)
    for (var e in Object(n))
      r.push(e);
  return r;
}
var py = Object.prototype, my = py.hasOwnProperty;
function vy(n) {
  if (!Dt(n))
    return dy(n);
  var r = Nu(n), e = [];
  for (var s in n)
    s == "constructor" && (r || !my.call(n, s)) || e.push(s);
  return e;
}
function Yf(n) {
  return yi(n) ? zf(n, !0) : vy(n);
}
var yy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, _y = /^\w*$/;
function Ou(n, r) {
  if (yt(n))
    return !1;
  var e = typeof n;
  return e == "number" || e == "symbol" || e == "boolean" || n == null || li(n) ? !0 : _y.test(n) || !yy.test(n) || r != null && n in Object(r);
}
var hs = Rr(Object, "create");
function Ey() {
  this.__data__ = hs ? hs(null) : {}, this.size = 0;
}
function xy(n) {
  var r = this.has(n) && delete this.__data__[n];
  return this.size -= r ? 1 : 0, r;
}
var wy = "__lodash_hash_undefined__", ky = Object.prototype, Sy = ky.hasOwnProperty;
function My(n) {
  var r = this.__data__;
  if (hs) {
    var e = r[n];
    return e === wy ? void 0 : e;
  }
  return Sy.call(r, n) ? r[n] : void 0;
}
var Iy = Object.prototype, Ly = Iy.hasOwnProperty;
function by(n) {
  var r = this.__data__;
  return hs ? r[n] !== void 0 : Ly.call(r, n);
}
var Ay = "__lodash_hash_undefined__";
function Cy(n, r) {
  var e = this.__data__;
  return this.size += this.has(n) ? 0 : 1, e[n] = hs && r === void 0 ? Ay : r, this;
}
function Cr(n) {
  var r = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++r < e; ) {
    var s = n[r];
    this.set(s[0], s[1]);
  }
}
Cr.prototype.clear = Ey;
Cr.prototype.delete = xy;
Cr.prototype.get = My;
Cr.prototype.has = by;
Cr.prototype.set = Cy;
function Ty() {
  this.__data__ = [], this.size = 0;
}
function qa(n, r) {
  for (var e = n.length; e--; )
    if (_s(n[e][0], r))
      return e;
  return -1;
}
var Ny = Array.prototype, Py = Ny.splice;
function Oy(n) {
  var r = this.__data__, e = qa(r, n);
  if (e < 0)
    return !1;
  var s = r.length - 1;
  return e == s ? r.pop() : Py.call(r, e, 1), --this.size, !0;
}
function Ry(n) {
  var r = this.__data__, e = qa(r, n);
  return e < 0 ? void 0 : r[e][1];
}
function Dy(n) {
  return qa(this.__data__, n) > -1;
}
function Fy(n, r) {
  var e = this.__data__, s = qa(e, n);
  return s < 0 ? (++this.size, e.push([n, r])) : e[s][1] = r, this;
}
function Vn(n) {
  var r = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++r < e; ) {
    var s = n[r];
    this.set(s[0], s[1]);
  }
}
Vn.prototype.clear = Ty;
Vn.prototype.delete = Oy;
Vn.prototype.get = Ry;
Vn.prototype.has = Dy;
Vn.prototype.set = Fy;
var fs = Rr(gn, "Map");
function Gy() {
  this.size = 0, this.__data__ = {
    hash: new Cr(),
    map: new (fs || Vn)(),
    string: new Cr()
  };
}
function By(n) {
  var r = typeof n;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? n !== "__proto__" : n === null;
}
function Ya(n, r) {
  var e = n.__data__;
  return By(r) ? e[typeof r == "string" ? "string" : "hash"] : e.map;
}
function Uy(n) {
  var r = Ya(this, n).delete(n);
  return this.size -= r ? 1 : 0, r;
}
function zy(n) {
  return Ya(this, n).get(n);
}
function qy(n) {
  return Ya(this, n).has(n);
}
function Yy(n, r) {
  var e = Ya(this, n), s = e.size;
  return e.set(n, r), this.size += e.size == s ? 0 : 1, this;
}
function Xn(n) {
  var r = -1, e = n == null ? 0 : n.length;
  for (this.clear(); ++r < e; ) {
    var s = n[r];
    this.set(s[0], s[1]);
  }
}
Xn.prototype.clear = Gy;
Xn.prototype.delete = Uy;
Xn.prototype.get = zy;
Xn.prototype.has = qy;
Xn.prototype.set = Yy;
var Hy = "Expected a function";
function Ru(n, r) {
  if (typeof n != "function" || r != null && typeof r != "function")
    throw new TypeError(Hy);
  var e = function() {
    var s = arguments, u = r ? r.apply(this, s) : s[0], l = e.cache;
    if (l.has(u))
      return l.get(u);
    var f = n.apply(this, s);
    return e.cache = l.set(u, f) || l, f;
  };
  return e.cache = new (Ru.Cache || Xn)(), e;
}
Ru.Cache = Xn;
var Jy = 500;
function Vy(n) {
  var r = Ru(n, function(s) {
    return e.size === Jy && e.clear(), s;
  }), e = r.cache;
  return r;
}
var Xy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Wy = /\\(\\)?/g, Zy = Vy(function(n) {
  var r = [];
  return n.charCodeAt(0) === 46 && r.push(""), n.replace(Xy, function(e, s, u, l) {
    r.push(u ? l.replace(Wy, "$1") : s || e);
  }), r;
});
function jy(n) {
  return n == null ? "" : Of(n);
}
function Hf(n, r) {
  return yt(n) ? n : Ou(n, r) ? [n] : Zy(jy(n));
}
function Ha(n) {
  if (typeof n == "string" || li(n))
    return n;
  var r = n + "";
  return r == "0" && 1 / n == -1 / 0 ? "-0" : r;
}
function Du(n, r) {
  r = Hf(r, n);
  for (var e = 0, s = r.length; n != null && e < s; )
    n = n[Ha(r[e++])];
  return e && e == s ? n : void 0;
}
function hi(n, r, e) {
  var s = n == null ? void 0 : Du(n, r);
  return s === void 0 ? e : s;
}
function Jf(n, r) {
  for (var e = -1, s = r.length, u = n.length; ++e < s; )
    n[u + e] = r[e];
  return n;
}
var mc = jt ? jt.isConcatSpreadable : void 0;
function $y(n) {
  return yt(n) || ls(n) || !!(mc && n && n[mc]);
}
function Ky(n, r, e, s, u) {
  var l = -1, f = n.length;
  for (e || (e = $y), u || (u = []); ++l < f; ) {
    var h = n[l];
    e(h) ? Jf(u, h) : u[u.length] = h;
  }
  return u;
}
var Vf = qf(Object.getPrototypeOf, Object), Qy = "[object Object]", e0 = Function.prototype, t0 = Object.prototype, Xf = e0.toString, n0 = t0.hasOwnProperty, r0 = Xf.call(Object);
function i0(n) {
  if (!Cn(n) || Pr(n) != Qy)
    return !1;
  var r = Vf(n);
  if (r === null)
    return !0;
  var e = n0.call(r, "constructor") && r.constructor;
  return typeof e == "function" && e instanceof e && Xf.call(e) == r0;
}
function s0() {
  this.__data__ = new Vn(), this.size = 0;
}
function a0(n) {
  var r = this.__data__, e = r.delete(n);
  return this.size = r.size, e;
}
function o0(n) {
  return this.__data__.get(n);
}
function u0(n) {
  return this.__data__.has(n);
}
var l0 = 200;
function c0(n, r) {
  var e = this.__data__;
  if (e instanceof Vn) {
    var s = e.__data__;
    if (!fs || s.length < l0 - 1)
      return s.push([n, r]), this.size = ++e.size, this;
    e = this.__data__ = new Xn(s);
  }
  return e.set(n, r), this.size = e.size, this;
}
function ln(n) {
  var r = this.__data__ = new Vn(n);
  this.size = r.size;
}
ln.prototype.clear = s0;
ln.prototype.delete = a0;
ln.prototype.get = o0;
ln.prototype.has = u0;
ln.prototype.set = c0;
var Wf = typeof exports == "object" && exports && !exports.nodeType && exports, vc = Wf && typeof module == "object" && module && !module.nodeType && module, h0 = vc && vc.exports === Wf, yc = h0 ? gn.Buffer : void 0, _c = yc ? yc.allocUnsafe : void 0;
function Zf(n, r) {
  if (r)
    return n.slice();
  var e = n.length, s = _c ? _c(e) : new n.constructor(e);
  return n.copy(s), s;
}
function f0(n, r) {
  for (var e = -1, s = n == null ? 0 : n.length, u = 0, l = []; ++e < s; ) {
    var f = n[e];
    r(f, e, n) && (l[u++] = f);
  }
  return l;
}
function g0() {
  return [];
}
var d0 = Object.prototype, p0 = d0.propertyIsEnumerable, Ec = Object.getOwnPropertySymbols, m0 = Ec ? function(n) {
  return n == null ? [] : (n = Object(n), f0(Ec(n), function(r) {
    return p0.call(n, r);
  }));
} : g0;
function v0(n, r, e) {
  var s = r(n);
  return yt(n) ? s : Jf(s, e(n));
}
function Vo(n) {
  return v0(n, za, m0);
}
var Xo = Rr(gn, "DataView"), Wo = Rr(gn, "Promise"), si = Rr(gn, "Set"), xc = "[object Map]", y0 = "[object Object]", wc = "[object Promise]", kc = "[object Set]", Sc = "[object WeakMap]", Mc = "[object DataView]", _0 = Or(Xo), E0 = Or(fs), x0 = Or(Wo), w0 = Or(si), k0 = Or(Ho), on = Pr;
(Xo && on(new Xo(new ArrayBuffer(1))) != Mc || fs && on(new fs()) != xc || Wo && on(Wo.resolve()) != wc || si && on(new si()) != kc || Ho && on(new Ho()) != Sc) && (on = function(n) {
  var r = Pr(n), e = r == y0 ? n.constructor : void 0, s = e ? Or(e) : "";
  if (s)
    switch (s) {
      case _0:
        return Mc;
      case E0:
        return xc;
      case x0:
        return wc;
      case w0:
        return kc;
      case k0:
        return Sc;
    }
  return r;
});
var S0 = Object.prototype, M0 = S0.hasOwnProperty;
function I0(n) {
  var r = n.length, e = new n.constructor(r);
  return r && typeof n[0] == "string" && M0.call(n, "index") && (e.index = n.index, e.input = n.input), e;
}
var ga = gn.Uint8Array;
function Fu(n) {
  var r = new n.constructor(n.byteLength);
  return new ga(r).set(new ga(n)), r;
}
function L0(n, r) {
  var e = Fu(n.buffer);
  return new n.constructor(e, n.byteOffset, n.byteLength);
}
var b0 = /\w*$/;
function A0(n) {
  var r = new n.constructor(n.source, b0.exec(n));
  return r.lastIndex = n.lastIndex, r;
}
var Ic = jt ? jt.prototype : void 0, Lc = Ic ? Ic.valueOf : void 0;
function C0(n) {
  return Lc ? Object(Lc.call(n)) : {};
}
function jf(n, r) {
  var e = r ? Fu(n.buffer) : n.buffer;
  return new n.constructor(e, n.byteOffset, n.length);
}
var T0 = "[object Boolean]", N0 = "[object Date]", P0 = "[object Map]", O0 = "[object Number]", R0 = "[object RegExp]", D0 = "[object Set]", F0 = "[object String]", G0 = "[object Symbol]", B0 = "[object ArrayBuffer]", U0 = "[object DataView]", z0 = "[object Float32Array]", q0 = "[object Float64Array]", Y0 = "[object Int8Array]", H0 = "[object Int16Array]", J0 = "[object Int32Array]", V0 = "[object Uint8Array]", X0 = "[object Uint8ClampedArray]", W0 = "[object Uint16Array]", Z0 = "[object Uint32Array]";
function j0(n, r, e) {
  var s = n.constructor;
  switch (r) {
    case B0:
      return Fu(n);
    case T0:
    case N0:
      return new s(+n);
    case U0:
      return L0(n);
    case z0:
    case q0:
    case Y0:
    case H0:
    case J0:
    case V0:
    case X0:
    case W0:
    case Z0:
      return jf(n, e);
    case P0:
      return new s();
    case O0:
    case F0:
      return new s(n);
    case R0:
      return A0(n);
    case D0:
      return new s();
    case G0:
      return C0(n);
  }
}
function $f(n) {
  return typeof n.constructor == "function" && !Nu(n) ? sv(Vf(n)) : {};
}
var $0 = "[object Map]";
function K0(n) {
  return Cn(n) && on(n) == $0;
}
var bc = ci && ci.isMap, Q0 = bc ? Ua(bc) : K0, e1 = "[object Set]";
function t1(n) {
  return Cn(n) && on(n) == e1;
}
var Ac = ci && ci.isSet, n1 = Ac ? Ua(Ac) : t1, r1 = 1, Kf = "[object Arguments]", i1 = "[object Array]", s1 = "[object Boolean]", a1 = "[object Date]", o1 = "[object Error]", Qf = "[object Function]", u1 = "[object GeneratorFunction]", l1 = "[object Map]", c1 = "[object Number]", eg = "[object Object]", h1 = "[object RegExp]", f1 = "[object Set]", g1 = "[object String]", d1 = "[object Symbol]", p1 = "[object WeakMap]", m1 = "[object ArrayBuffer]", v1 = "[object DataView]", y1 = "[object Float32Array]", _1 = "[object Float64Array]", E1 = "[object Int8Array]", x1 = "[object Int16Array]", w1 = "[object Int32Array]", k1 = "[object Uint8Array]", S1 = "[object Uint8ClampedArray]", M1 = "[object Uint16Array]", I1 = "[object Uint32Array]", Ue = {};
Ue[Kf] = Ue[i1] = Ue[m1] = Ue[v1] = Ue[s1] = Ue[a1] = Ue[y1] = Ue[_1] = Ue[E1] = Ue[x1] = Ue[w1] = Ue[l1] = Ue[c1] = Ue[eg] = Ue[h1] = Ue[f1] = Ue[g1] = Ue[d1] = Ue[k1] = Ue[S1] = Ue[M1] = Ue[I1] = !0;
Ue[o1] = Ue[Qf] = Ue[p1] = !1;
function $s(n, r, e, s, u, l) {
  var f, h = r & r1;
  if (f !== void 0)
    return f;
  if (!Dt(n))
    return n;
  var m = yt(n);
  if (m)
    f = I0(n);
  else {
    var d = on(n), v = d == Qf || d == u1;
    if (cs(n))
      return Zf(n, h);
    if (d == eg || d == Kf || v && !u)
      f = v ? {} : $f(n);
    else {
      if (!Ue[d])
        return u ? n : {};
      f = j0(n, d, h);
    }
  }
  l || (l = new ln());
  var y = l.get(n);
  if (y)
    return y;
  l.set(n, f), n1(n) ? n.forEach(function(M) {
    f.add($s(M, r, e, M, n, l));
  }) : Q0(n) && n.forEach(function(M, D) {
    f.set(D, $s(M, r, e, D, n, l));
  });
  var E = Vo, S = m ? void 0 : E(n);
  return mv(S || n, function(M, D) {
    S && (D = M, M = n[D]), Df(f, D, $s(M, r, e, D, n, l));
  }), f;
}
var L1 = 1, b1 = 4;
function hn(n) {
  return $s(n, L1 | b1);
}
var A1 = "__lodash_hash_undefined__";
function C1(n) {
  return this.__data__.set(n, A1), this;
}
function T1(n) {
  return this.__data__.has(n);
}
function fi(n) {
  var r = -1, e = n == null ? 0 : n.length;
  for (this.__data__ = new Xn(); ++r < e; )
    this.add(n[r]);
}
fi.prototype.add = fi.prototype.push = C1;
fi.prototype.has = T1;
function N1(n, r) {
  for (var e = -1, s = n == null ? 0 : n.length; ++e < s; )
    if (r(n[e], e, n))
      return !0;
  return !1;
}
function da(n, r) {
  return n.has(r);
}
var P1 = 1, O1 = 2;
function tg(n, r, e, s, u, l) {
  var f = e & P1, h = n.length, m = r.length;
  if (h != m && !(f && m > h))
    return !1;
  var d = l.get(n), v = l.get(r);
  if (d && v)
    return d == r && v == n;
  var y = -1, E = !0, S = e & O1 ? new fi() : void 0;
  for (l.set(n, r), l.set(r, n); ++y < h; ) {
    var M = n[y], D = r[y];
    if (s)
      var U = f ? s(D, M, y, r, n, l) : s(M, D, y, n, r, l);
    if (U !== void 0) {
      if (U)
        continue;
      E = !1;
      break;
    }
    if (S) {
      if (!N1(r, function(G, I) {
        if (!da(S, I) && (M === G || u(M, G, e, s, l)))
          return S.push(I);
      })) {
        E = !1;
        break;
      }
    } else if (!(M === D || u(M, D, e, s, l))) {
      E = !1;
      break;
    }
  }
  return l.delete(n), l.delete(r), E;
}
function R1(n) {
  var r = -1, e = Array(n.size);
  return n.forEach(function(s, u) {
    e[++r] = [u, s];
  }), e;
}
function Gu(n) {
  var r = -1, e = Array(n.size);
  return n.forEach(function(s) {
    e[++r] = s;
  }), e;
}
var D1 = 1, F1 = 2, G1 = "[object Boolean]", B1 = "[object Date]", U1 = "[object Error]", z1 = "[object Map]", q1 = "[object Number]", Y1 = "[object RegExp]", H1 = "[object Set]", J1 = "[object String]", V1 = "[object Symbol]", X1 = "[object ArrayBuffer]", W1 = "[object DataView]", Cc = jt ? jt.prototype : void 0, wo = Cc ? Cc.valueOf : void 0;
function Z1(n, r, e, s, u, l, f) {
  switch (e) {
    case W1:
      if (n.byteLength != r.byteLength || n.byteOffset != r.byteOffset)
        return !1;
      n = n.buffer, r = r.buffer;
    case X1:
      return !(n.byteLength != r.byteLength || !l(new ga(n), new ga(r)));
    case G1:
    case B1:
    case q1:
      return _s(+n, +r);
    case U1:
      return n.name == r.name && n.message == r.message;
    case Y1:
    case J1:
      return n == r + "";
    case z1:
      var h = R1;
    case H1:
      var m = s & D1;
      if (h || (h = Gu), n.size != r.size && !m)
        return !1;
      var d = f.get(n);
      if (d)
        return d == r;
      s |= F1, f.set(n, r);
      var v = tg(h(n), h(r), s, u, l, f);
      return f.delete(n), v;
    case V1:
      if (wo)
        return wo.call(n) == wo.call(r);
  }
  return !1;
}
var j1 = 1, $1 = Object.prototype, K1 = $1.hasOwnProperty;
function Q1(n, r, e, s, u, l) {
  var f = e & j1, h = Vo(n), m = h.length, d = Vo(r), v = d.length;
  if (m != v && !f)
    return !1;
  for (var y = m; y--; ) {
    var E = h[y];
    if (!(f ? E in r : K1.call(r, E)))
      return !1;
  }
  var S = l.get(n), M = l.get(r);
  if (S && M)
    return S == r && M == n;
  var D = !0;
  l.set(n, r), l.set(r, n);
  for (var U = f; ++y < m; ) {
    E = h[y];
    var G = n[E], I = r[E];
    if (s)
      var H = f ? s(I, G, E, r, n, l) : s(G, I, E, n, r, l);
    if (!(H === void 0 ? G === I || u(G, I, e, s, l) : H)) {
      D = !1;
      break;
    }
    U || (U = E == "constructor");
  }
  if (D && !U) {
    var J = n.constructor, X = r.constructor;
    J != X && "constructor" in n && "constructor" in r && !(typeof J == "function" && J instanceof J && typeof X == "function" && X instanceof X) && (D = !1);
  }
  return l.delete(n), l.delete(r), D;
}
var e_ = 1, Tc = "[object Arguments]", Nc = "[object Array]", Ns = "[object Object]", t_ = Object.prototype, Pc = t_.hasOwnProperty;
function n_(n, r, e, s, u, l) {
  var f = yt(n), h = yt(r), m = f ? Nc : on(n), d = h ? Nc : on(r);
  m = m == Tc ? Ns : m, d = d == Tc ? Ns : d;
  var v = m == Ns, y = d == Ns, E = m == d;
  if (E && cs(n)) {
    if (!cs(r))
      return !1;
    f = !0, v = !1;
  }
  if (E && !v)
    return l || (l = new ln()), f || Pu(n) ? tg(n, r, e, s, u, l) : Z1(n, r, m, e, s, u, l);
  if (!(e & e_)) {
    var S = v && Pc.call(n, "__wrapped__"), M = y && Pc.call(r, "__wrapped__");
    if (S || M) {
      var D = S ? n.value() : n, U = M ? r.value() : r;
      return l || (l = new ln()), u(D, U, e, s, l);
    }
  }
  return E ? (l || (l = new ln()), Q1(n, r, e, s, u, l)) : !1;
}
function Ja(n, r, e, s, u) {
  return n === r ? !0 : n == null || r == null || !Cn(n) && !Cn(r) ? n !== n && r !== r : n_(n, r, e, s, Ja, u);
}
var r_ = 1, i_ = 2;
function s_(n, r, e, s) {
  var u = e.length, l = u;
  if (n == null)
    return !l;
  for (n = Object(n); u--; ) {
    var f = e[u];
    if (f[2] ? f[1] !== n[f[0]] : !(f[0] in n))
      return !1;
  }
  for (; ++u < l; ) {
    f = e[u];
    var h = f[0], m = n[h], d = f[1];
    if (f[2]) {
      if (m === void 0 && !(h in n))
        return !1;
    } else {
      var v = new ln(), y;
      if (!(y === void 0 ? Ja(d, m, r_ | i_, s, v) : y))
        return !1;
    }
  }
  return !0;
}
function ng(n) {
  return n === n && !Dt(n);
}
function a_(n) {
  for (var r = za(n), e = r.length; e--; ) {
    var s = r[e], u = n[s];
    r[e] = [s, u, ng(u)];
  }
  return r;
}
function rg(n, r) {
  return function(e) {
    return e == null ? !1 : e[n] === r && (r !== void 0 || n in Object(e));
  };
}
function o_(n) {
  var r = a_(n);
  return r.length == 1 && r[0][2] ? rg(r[0][0], r[0][1]) : function(e) {
    return e === n || s_(e, n, r);
  };
}
function u_(n, r) {
  return n != null && r in Object(n);
}
function l_(n, r, e) {
  r = Hf(r, n);
  for (var s = -1, u = r.length, l = !1; ++s < u; ) {
    var f = Ha(r[s]);
    if (!(l = n != null && e(n, f)))
      break;
    n = n[f];
  }
  return l || ++s != u ? l : (u = n == null ? 0 : n.length, !!u && Tu(u) && Au(f, u) && (yt(n) || ls(n)));
}
function c_(n, r) {
  return n != null && l_(n, r, u_);
}
var h_ = 1, f_ = 2;
function g_(n, r) {
  return Ou(n) && ng(r) ? rg(Ha(n), r) : function(e) {
    var s = hi(e, n);
    return s === void 0 && s === r ? c_(e, n) : Ja(r, s, h_ | f_);
  };
}
function d_(n) {
  return function(r) {
    return r == null ? void 0 : r[n];
  };
}
function p_(n) {
  return function(r) {
    return Du(r, n);
  };
}
function m_(n) {
  return Ou(n) ? d_(Ha(n)) : p_(n);
}
function ig(n) {
  return typeof n == "function" ? n : n == null ? Ga : typeof n == "object" ? yt(n) ? g_(n[0], n[1]) : o_(n) : m_(n);
}
function v_(n, r, e, s) {
  for (var u = -1, l = n == null ? 0 : n.length; ++u < l; ) {
    var f = n[u];
    r(s, f, e(f), n);
  }
  return s;
}
function y_(n) {
  return function(r, e, s) {
    for (var u = -1, l = Object(r), f = s(r), h = f.length; h--; ) {
      var m = f[++u];
      if (e(l[m], m, l) === !1)
        break;
    }
    return r;
  };
}
var sg = y_();
function __(n, r) {
  return n && sg(n, r, za);
}
function E_(n, r) {
  return function(e, s) {
    if (e == null)
      return e;
    if (!yi(e))
      return n(e, s);
    for (var u = e.length, l = -1, f = Object(e); ++l < u && s(f[l], l, f) !== !1; )
      ;
    return e;
  };
}
var ag = E_(__);
function x_(n, r, e, s) {
  return ag(n, function(u, l, f) {
    r(s, u, e(u), f);
  }), s;
}
function w_(n, r) {
  return function(e, s) {
    var u = yt(e) ? v_ : x_, l = r ? r() : {};
    return u(e, n, ig(s), l);
  };
}
var ko = function() {
  return gn.Date.now();
}, k_ = "Expected a function", S_ = Math.max, M_ = Math.min;
function Bu(n, r, e) {
  var s, u, l, f, h, m, d = 0, v = !1, y = !1, E = !0;
  if (typeof n != "function")
    throw new TypeError(k_);
  r = uc(r) || 0, Dt(e) && (v = !!e.leading, y = "maxWait" in e, l = y ? S_(uc(e.maxWait) || 0, r) : l, E = "trailing" in e ? !!e.trailing : E);
  function S(W) {
    var $ = s, x = u;
    return s = u = void 0, d = W, f = n.apply(x, $), f;
  }
  function M(W) {
    return d = W, h = setTimeout(G, r), v ? S(W) : f;
  }
  function D(W) {
    var $ = W - m, x = W - d, k = r - $;
    return y ? M_(k, l - x) : k;
  }
  function U(W) {
    var $ = W - m, x = W - d;
    return m === void 0 || $ >= r || $ < 0 || y && x >= l;
  }
  function G() {
    var W = ko();
    if (U(W))
      return I(W);
    h = setTimeout(G, D(W));
  }
  function I(W) {
    return h = void 0, E && s ? S(W) : (s = u = void 0, f);
  }
  function H() {
    h !== void 0 && clearTimeout(h), d = 0, s = m = u = h = void 0;
  }
  function J() {
    return h === void 0 ? f : I(ko());
  }
  function X() {
    var W = ko(), $ = U(W);
    if (s = arguments, u = this, m = W, $) {
      if (h === void 0)
        return M(m);
      if (y)
        return clearTimeout(h), h = setTimeout(G, r), S(m);
    }
    return h === void 0 && (h = setTimeout(G, r)), f;
  }
  return X.cancel = H, X.flush = J, X;
}
function Zo(n, r, e) {
  (e !== void 0 && !_s(n[r], e) || e === void 0 && !(r in n)) && Ba(n, r, e);
}
function og(n) {
  return Cn(n) && yi(n);
}
function jo(n, r) {
  if (!(r === "constructor" && typeof n[r] == "function") && r != "__proto__")
    return n[r];
}
function I_(n) {
  return Mv(n, Yf(n));
}
function L_(n, r, e, s, u, l, f) {
  var h = jo(n, e), m = jo(r, e), d = f.get(m);
  if (d) {
    Zo(n, e, d);
    return;
  }
  var v = l ? l(h, m, e + "", n, r, f) : void 0, y = v === void 0;
  if (y) {
    var E = yt(m), S = !E && cs(m), M = !E && !S && Pu(m);
    v = m, E || S || M ? yt(h) ? v = h : og(h) ? v = uv(h) : S ? (y = !1, v = Zf(m, !0)) : M ? (y = !1, v = jf(m, !0)) : v = [] : i0(m) || ls(m) ? (v = h, ls(h) ? v = I_(h) : (!Dt(h) || bu(h)) && (v = $f(m))) : y = !1;
  }
  y && (f.set(m, v), u(v, m, s, l, f), f.delete(m)), Zo(n, e, v);
}
function Uu(n, r, e, s, u) {
  n !== r && sg(r, function(l, f) {
    if (u || (u = new ln()), Dt(l))
      L_(n, r, f, e, Uu, s, u);
    else {
      var h = s ? s(jo(n, f), l, f + "", n, r, u) : void 0;
      h === void 0 && (h = l), Zo(n, f, h);
    }
  }, Yf);
}
var b_ = Ff(function(n, r, e, s) {
  Uu(n, r, e, s);
});
function A_(n, r, e) {
  for (var s = -1, u = n == null ? 0 : n.length; ++s < u; )
    if (e(r, n[s]))
      return !0;
  return !1;
}
function C_(n, r) {
  var e = -1, s = yi(n) ? Array(n.length) : [];
  return ag(n, function(u, l, f) {
    s[++e] = r(u, l, f);
  }), s;
}
function T_(n, r) {
  return ii(r, function(e) {
    return n[e];
  });
}
function N_(n) {
  return n == null ? [] : T_(n, za(n));
}
var P_ = Math.min;
function O_(n, r, e) {
  for (var s = Rf, u = n[0].length, l = n.length, f = l, h = Array(l), m = 1 / 0, d = []; f--; ) {
    var v = n[f];
    m = P_(v.length, m), h[f] = u >= 120 && v.length >= 120 ? new fi(f && v) : void 0;
  }
  v = n[0];
  var y = -1, E = h[0];
  e:
    for (; ++y < u && d.length < m; ) {
      var S = v[y], M = S;
      if (S = S !== 0 ? S : 0, !(E ? da(E, M) : s(d, M))) {
        for (f = l; --f; ) {
          var D = h[f];
          if (!(D ? da(D, M) : s(n[f], M)))
            continue e;
        }
        E && E.push(M), d.push(S);
      }
    }
  return d;
}
function R_(n) {
  return og(n) ? n : [];
}
var D_ = Cu(function(n) {
  var r = ii(n, R_);
  return r.length && r[0] === n[0] ? O_(r) : [];
});
function Va(n, r) {
  return Ja(n, r);
}
var F_ = w_(function(n, r, e) {
  Ba(n, e, r);
}), G_ = Ff(function(n, r, e) {
  Uu(n, r, e);
});
function B_(n, r) {
  var e = n.length;
  for (n.sort(r); e--; )
    n[e] = n[e].value;
  return n;
}
function U_(n, r) {
  if (n !== r) {
    var e = n !== void 0, s = n === null, u = n === n, l = li(n), f = r !== void 0, h = r === null, m = r === r, d = li(r);
    if (!h && !d && !l && n > r || l && f && m && !h && !d || s && f && m || !e && m || !u)
      return 1;
    if (!s && !l && !d && n < r || d && e && u && !s && !l || h && e && u || !f && u || !m)
      return -1;
  }
  return 0;
}
function z_(n, r, e) {
  for (var s = -1, u = n.criteria, l = r.criteria, f = u.length, h = e.length; ++s < f; ) {
    var m = U_(u[s], l[s]);
    if (m) {
      if (s >= h)
        return m;
      var d = e[s];
      return m * (d == "desc" ? -1 : 1);
    }
  }
  return n.index - r.index;
}
function q_(n, r, e) {
  r.length ? r = ii(r, function(l) {
    return yt(l) ? function(f) {
      return Du(f, l.length === 1 ? l[0] : l);
    } : l;
  }) : r = [Ga];
  var s = -1;
  r = ii(r, Ua(ig));
  var u = C_(n, function(l, f, h) {
    var m = ii(r, function(d) {
      return d(l);
    });
    return { criteria: m, index: ++s, value: l };
  });
  return B_(u, function(l, f) {
    return z_(l, f, e);
  });
}
var Oc = Cu(function(n, r) {
  if (n == null)
    return [];
  var e = r.length;
  return e > 1 && Jo(n, r[0], r[1]) ? r = [] : e > 2 && Jo(r[0], r[1], r[2]) && (r = [r[0]]), q_(n, Ky(r), []);
}), Y_ = "Expected a function";
function ug(n, r, e) {
  var s = !0, u = !0;
  if (typeof n != "function")
    throw new TypeError(Y_);
  return Dt(e) && (s = "leading" in e ? !!e.leading : s, u = "trailing" in e ? !!e.trailing : u), Bu(n, r, {
    leading: s,
    maxWait: r,
    trailing: u
  });
}
var H_ = 1 / 0, J_ = si && 1 / Gu(new si([, -0]))[1] == H_ ? function(n) {
  return new si(n);
} : ov, V_ = 200;
function X_(n, r, e) {
  var s = -1, u = Rf, l = n.length, f = !0, h = [], m = h;
  if (e)
    f = !1, u = A_;
  else if (l >= V_) {
    var d = J_(n);
    if (d)
      return Gu(d);
    f = !1, u = da, m = new fi();
  } else
    m = h;
  e:
    for (; ++s < l; ) {
      var v = n[s], y = v;
      if (v = e || v !== 0 ? v : 0, f && y === y) {
        for (var E = m.length; E--; )
          if (m[E] === y)
            continue e;
        h.push(v);
      } else u(m, y, e) || (m !== h && m.push(y), h.push(v));
    }
  return h;
}
function Rc(n, r) {
  return r = typeof r == "function" ? r : void 0, n && n.length ? X_(n, void 0, r) : [];
}
const Dc = (n, r) => n[0] === r[0] && n[1] === r[1], ss = (n) => n.type === "Feature" && n.geometry.type === "LineString", Fc = (n) => n.type === "Feature" && n.geometry.type === "MultiLineString", zu = (n) => n.type === "Feature" && n.geometry.type === "Polygon", qu = (n) => n.type === "Feature" && n.geometry.type === "MultiPolygon", Gc = (n) => ({
  type: "FeatureCollection",
  features: n.geometry.coordinates.map((r) => ({
    type: "Feature",
    properties: n.properties,
    geometry: {
      type: "LineString",
      coordinates: r
    }
  }))
}), So = (n, r) => ({
  lng: r[0] - n[0],
  lat: r[1] - n[1]
}), pa = (n) => Array.isArray(n) && n.length >= 2 && n.length <= 3 && n.every((r) => typeof r == "number"), Es = (n, r, e = !1) => {
  let s = 0;
  const u = ["features", "geometries", "geometry", "coordinates"], l = (f, h, m = !1) => {
    pa(f) ? (r({ coordinate: f, path: h }, s), s += 1) : Array.isArray(f) ? f.forEach((d, v) => {
      m && e && v === f.length - 1 && pa(d) || l(d, [...h, v], m);
    }) : typeof f == "object" && f !== null && ft(f).forEach((d) => {
      const v = f[d];
      if (u.includes(d) && v) {
        const y = "type" in f && f.type, E = y === "Polygon" || y === "MultiPolygon";
        l(v, [...h, d], E);
      }
    });
  };
  l(n, []);
}, W_ = (n, r) => {
  let e = { coordinate: [0, 0], path: [] }, s = -1;
  try {
    Es(n, (u, l) => {
      if (r[0] === u.coordinate[0] && r[1] === u.coordinate[1])
        throw s = l, e = u, new Error("stop");
    });
  } catch {
    if (e)
      return {
        index: s,
        coordinate: e.coordinate,
        path: e.path
      };
  }
  return null;
}, Yu = (n, r) => {
  let e = 0;
  const s = ["features", "geometries", "geometry", "coordinates"], u = (l, f, h, m) => {
    pa(l) && pa(f) ? (r(
      {
        start: { coordinate: [...l], path: h },
        end: { coordinate: [...f], path: m }
      },
      e
    ), e += 1) : Array.isArray(l) ? l.forEach((d, v) => {
      u(
        d,
        l[v + 1],
        [...h, v],
        [...h, v + 1]
      );
    }) : typeof l == "object" && l !== null && ft(l).forEach((d) => {
      const v = l[d];
      s.includes(d) && v && u(v, void 0, [...h, d], []);
    });
  };
  u(n, void 0, [], []);
}, Xa = (n, r) => {
  let e = {
    absCoordIndex: -1,
    featureIndex: -1,
    multiFeatureIndex: -1,
    geometryIndex: -1
  };
  try {
    fr(
      n,
      (s, u, l, f, h) => {
        if (s[0] === r[0] && s[1] === r[1])
          throw e = { absCoordIndex: u, featureIndex: l, multiFeatureIndex: f, geometryIndex: h }, new Error("found");
      }
    );
  } catch {
  }
  return e;
}, WS = (n, r, e = {}) => ({
  type: "Feature",
  properties: e,
  geometry: {
    type: "LineString",
    coordinates: [n, r]
  }
}), ti = (n, r) => {
  const [e, s] = n, [u, l] = r, f = Math.min(e, u), h = Math.min(s, l), m = Math.max(e, u), d = Math.max(s, l);
  return [f, h, m, d];
}, $o = (n, r) => {
  const e = ti(n, r), s = [e[0], e[1]], u = [e[2], e[3]], l = s[0], f = s[1], h = u[0], m = u[1];
  return {
    type: "Feature",
    properties: {
      shape: "rectangle"
    },
    geometry: {
      type: "Polygon",
      coordinates: [[
        [l, f],
        [h, f],
        [h, m],
        [l, m],
        [l, f]
      ]]
    }
  };
}, lg = (n) => [
  n.geometry.coordinates[0],
  n.geometry.coordinates[1]
], Hu = (n) => {
  const r = yf(n);
  return [
    [r[0], r[1]],
    // South-West (min-x, min-y)
    [r[2], r[3]]
    // North-East (max-x, max-y)
  ];
}, Z_ = (n) => [
  n[0][0],
  n[0][1],
  n[1][0],
  n[1][1]
], j_ = (n, r) => {
  const [e, s, u, l] = n, [f, h] = r;
  return f >= e && f <= u && h >= s && h <= l;
}, ZS = (n, r) => {
  const e = Z_(n);
  return j_(e, r);
}, Mo = (n) => {
  let r = 0;
  return fr(n, () => {
    r += 1;
  }, !0), r;
}, $_ = (n) => {
  const r = [];
  return fr(n, (e) => {
    r.push([e[0], e[1]]);
  }, !0), r;
}, Ju = (n) => {
  const r = $_(n);
  return r.some((e) => !Va(r[0], e));
}, cg = (n) => {
  let r = null;
  try {
    Es(n, (e) => {
      throw r = e.coordinate, new Error("found");
    });
  } catch {
    return r;
  }
  return null;
}, Ks = (n, r) => Math.sqrt(
  (n[0] - r[0]) ** 2 + (n[1] - r[1]) ** 2
), K_ = (n, r, e) => {
  const [s, u] = [n[0], n[1]], [l, f] = [r[0], r[1]], [h, m] = [e[0], e[1]], d = l - s, v = f - u, y = h - s, E = m - u, S = y * d + E * v, M = d * d + v * v;
  let D = S / M;
  return D = Math.max(0, Math.min(1, D)), [
    s + D * d,
    u + D * v
  ];
}, Q_ = (n, r) => {
  const { absCoordIndex: e } = Xa(n, r);
  return e !== -1 ? (n.geometry.coordinates.splice(e, 1), !0) : !1;
}, eE = (n, r) => {
  const e = Xa(n, r);
  if (e.absCoordIndex !== -1) {
    const s = [e.geometryIndex], u = hi(n.geometry.coordinates, s), l = u.findIndex((f) => Va(f, r));
    return u.length <= 4 ? (n.geometry.coordinates.splice(e.geometryIndex, 1), !0) : (u.splice(l, 1), l === 0 && (u[u.length - 1] = [...u[0]]), !0);
  }
  return !1;
}, tE = (n, r) => {
  const e = Xa(n, r);
  if (e.absCoordIndex !== -1) {
    const s = [
      e.multiFeatureIndex,
      e.geometryIndex
    ], u = hi(n.geometry.coordinates, s), l = u.findIndex((f) => Va(f, r));
    if (u.length <= 4) {
      s.pop();
      const f = hi(
        n.geometry.coordinates,
        e.multiFeatureIndex
      );
      return f.splice(e.geometryIndex, 1), f.length === 0 && n.geometry.coordinates.splice(e.multiFeatureIndex, 1), !0;
    }
    return u.splice(l, 1), l === 0 && (u[u.length - 1] = [...u[0]]), !0;
  }
  return !1;
}, nE = (n, r) => ss(n) ? Q_(n, r) : zu(n) ? eE(n, r) : qu(n) ? tE(n, r) : !1, jS = (n) => {
  let r = 0;
  return Yu(n, (e) => {
    r += Ot(
      e.start.coordinate,
      e.end.coordinate,
      { units: "meters" }
    );
  }), r;
}, $S = (n) => {
  const r = {
    type: "FeatureCollection",
    features: []
  };
  return n.features.forEach((e) => {
    if (ss(e))
      r.features.push(e);
    else if (zu(e)) {
      const s = Af(e);
      ss(s) ? r.features.push(s) : Fc(s) && Gc(s).features.forEach((l) => {
        r.features.push(l);
      });
    } else qu(e) ? Cf(e).features.forEach((u) => {
      ss(u) ? r.features.push(u) : Fc(u) && Gc(u).features.forEach((f) => {
        r.features.push(f);
      });
    }) : re.warn(
      "AutoTraceHelper.getFeaturesGeoJsonAsLines: Feature is not supported",
      e
    );
  }), r;
}, rE = (n, r = "marker") => ({
  type: "Feature",
  properties: {
    shape: r
  },
  geometry: {
    type: "Point",
    coordinates: n
  }
}), Vu = ({ center: n, radius: r, steps: e = 80 }) => {
  const s = mm(
    n,
    r,
    {
      steps: e,
      units: "meters"
    }
  );
  return s.geometry.coordinates[0][0] = [
    ...s.geometry.coordinates[0][0]
  ], s;
}, Bc = ({
  center: n,
  xSemiAxisLngLat: r,
  rimLngLat: e
}) => {
  let s = Ot(n, r, { units: "meters" });
  s === 0 && (s = 1);
  const u = ha(n, r) - 90;
  let l = 0;
  if (e) {
    const h = -u * Math.PI / 180, d = -(ha(n, e) - 90) * Math.PI / 180, v = Ot(n, e, { units: "meters" }), y = v * Math.cos(d), E = v * Math.sin(d), S = y * Math.cos(h) + E * Math.sin(h), M = y * -Math.sin(h) + E * Math.cos(h), D = S * S / (s * s);
    l = Math.abs(M) / Math.sqrt(1 - D), isNaN(l) && (l = 0);
  }
  return {
    xSemiAxis: s,
    ySemiAxis: l,
    angle: u
  };
}, hg = 80, Wa = ({
  center: n,
  xSemiAxis: r,
  ySemiAxis: e,
  angle: s,
  properties: u = {}
}) => {
  const l = {
    steps: hg,
    angle: s,
    units: "meters"
  };
  if (e === void 0 || e === 0) {
    const h = rc(n, r, 1, l);
    return ui(h.geometry.coordinates[0].slice(0, 41), {
      shape: "line"
    });
  }
  const f = rc(
    n,
    r,
    e,
    {
      ...l,
      properties: {
        shape: "ellipse",
        _gm_shape_center: n,
        _gm_shape_xSemiAxis: r,
        _gm_shape_ySemiAxis: e,
        _gm_shape_angle: s,
        ...u
      }
    }
  );
  return f.geometry.coordinates[0][0] = [...f.geometry.coordinates[0][0]], f;
}, zn = 11102230246251565e-32, ht = 134217729, iE = (3 + 8 * zn) * zn;
function Io(n, r, e, s, u) {
  let l, f, h, m, d = r[0], v = s[0], y = 0, E = 0;
  v > d == v > -d ? (l = d, d = r[++y]) : (l = v, v = s[++E]);
  let S = 0;
  if (y < n && E < e)
    for (v > d == v > -d ? (f = d + l, h = l - (f - d), d = r[++y]) : (f = v + l, h = l - (f - v), v = s[++E]), l = f, h !== 0 && (u[S++] = h); y < n && E < e; )
      v > d == v > -d ? (f = l + d, m = f - l, h = l - (f - m) + (d - m), d = r[++y]) : (f = l + v, m = f - l, h = l - (f - m) + (v - m), v = s[++E]), l = f, h !== 0 && (u[S++] = h);
  for (; y < n; )
    f = l + d, m = f - l, h = l - (f - m) + (d - m), d = r[++y], l = f, h !== 0 && (u[S++] = h);
  for (; E < e; )
    f = l + v, m = f - l, h = l - (f - m) + (v - m), v = s[++E], l = f, h !== 0 && (u[S++] = h);
  return (l !== 0 || S === 0) && (u[S++] = l), S;
}
function sE(n, r) {
  let e = r[0];
  for (let s = 1; s < n; s++) e += r[s];
  return e;
}
function xs(n) {
  return new Float64Array(n);
}
const aE = (3 + 16 * zn) * zn, oE = (2 + 12 * zn) * zn, uE = (9 + 64 * zn) * zn * zn, $r = xs(4), Uc = xs(8), zc = xs(12), qc = xs(16), pt = xs(4);
function lE(n, r, e, s, u, l, f) {
  let h, m, d, v, y, E, S, M, D, U, G, I, H, J, X, W, $, x;
  const k = n - u, b = e - u, A = r - l, T = s - l;
  J = k * T, E = ht * k, S = E - (E - k), M = k - S, E = ht * T, D = E - (E - T), U = T - D, X = M * U - (J - S * D - M * D - S * U), W = A * b, E = ht * A, S = E - (E - A), M = A - S, E = ht * b, D = E - (E - b), U = b - D, $ = M * U - (W - S * D - M * D - S * U), G = X - $, y = X - G, $r[0] = X - (G + y) + (y - $), I = J + G, y = I - J, H = J - (I - y) + (G - y), G = H - W, y = H - G, $r[1] = H - (G + y) + (y - W), x = I + G, y = x - I, $r[2] = I - (x - y) + (G - y), $r[3] = x;
  let F = sE(4, $r), P = oE * f;
  if (F >= P || -F >= P || (y = n - k, h = n - (k + y) + (y - u), y = e - b, d = e - (b + y) + (y - u), y = r - A, m = r - (A + y) + (y - l), y = s - T, v = s - (T + y) + (y - l), h === 0 && m === 0 && d === 0 && v === 0) || (P = uE * f + iE * Math.abs(F), F += k * v + T * h - (A * d + b * m), F >= P || -F >= P)) return F;
  J = h * T, E = ht * h, S = E - (E - h), M = h - S, E = ht * T, D = E - (E - T), U = T - D, X = M * U - (J - S * D - M * D - S * U), W = m * b, E = ht * m, S = E - (E - m), M = m - S, E = ht * b, D = E - (E - b), U = b - D, $ = M * U - (W - S * D - M * D - S * U), G = X - $, y = X - G, pt[0] = X - (G + y) + (y - $), I = J + G, y = I - J, H = J - (I - y) + (G - y), G = H - W, y = H - G, pt[1] = H - (G + y) + (y - W), x = I + G, y = x - I, pt[2] = I - (x - y) + (G - y), pt[3] = x;
  const N = Io(4, $r, 4, pt, Uc);
  J = k * v, E = ht * k, S = E - (E - k), M = k - S, E = ht * v, D = E - (E - v), U = v - D, X = M * U - (J - S * D - M * D - S * U), W = A * d, E = ht * A, S = E - (E - A), M = A - S, E = ht * d, D = E - (E - d), U = d - D, $ = M * U - (W - S * D - M * D - S * U), G = X - $, y = X - G, pt[0] = X - (G + y) + (y - $), I = J + G, y = I - J, H = J - (I - y) + (G - y), G = H - W, y = H - G, pt[1] = H - (G + y) + (y - W), x = I + G, y = x - I, pt[2] = I - (x - y) + (G - y), pt[3] = x;
  const R = Io(N, Uc, 4, pt, zc);
  J = h * v, E = ht * h, S = E - (E - h), M = h - S, E = ht * v, D = E - (E - v), U = v - D, X = M * U - (J - S * D - M * D - S * U), W = m * d, E = ht * m, S = E - (E - m), M = m - S, E = ht * d, D = E - (E - d), U = d - D, $ = M * U - (W - S * D - M * D - S * U), G = X - $, y = X - G, pt[0] = X - (G + y) + (y - $), I = J + G, y = I - J, H = J - (I - y) + (G - y), G = H - W, y = H - G, pt[1] = H - (G + y) + (y - W), x = I + G, y = x - I, pt[2] = I - (x - y) + (G - y), pt[3] = x;
  const Y = Io(R, zc, 4, pt, qc);
  return qc[Y - 1];
}
function cE(n, r, e, s, u, l) {
  const f = (r - l) * (e - u), h = (n - u) * (s - l), m = f - h, d = Math.abs(f + h);
  return Math.abs(m) >= aE * d ? m : -lE(n, r, e, s, u, l, d);
}
function hE(n, r) {
  var e, s, u = 0, l, f, h, m, d, v, y, E = n[0], S = n[1], M = r.length;
  for (e = 0; e < M; e++) {
    s = 0;
    var D = r[e], U = D.length - 1;
    if (v = D[0], v[0] !== D[U][0] && v[1] !== D[U][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (f = v[0] - E, h = v[1] - S, s; s < U; s++) {
      if (y = D[s + 1], m = y[0] - E, d = y[1] - S, h === 0 && d === 0) {
        if (m <= 0 && f >= 0 || f <= 0 && m >= 0)
          return 0;
      } else if (d >= 0 && h <= 0 || d <= 0 && h >= 0) {
        if (l = cE(f, m, h, d, 0, 0), l === 0)
          return 0;
        (l > 0 && d > 0 && h <= 0 || l < 0 && d <= 0 && h > 0) && u++;
      }
      v = y, h = d, f = m;
    }
  }
  return u % 2 !== 0;
}
function Tr(n, r, e = {}) {
  if (!n)
    throw new Error("point is required");
  if (!r)
    throw new Error("polygon is required");
  const s = We(n), u = ys(r), l = u.type, f = r.bbox;
  let h = u.coordinates;
  if (f && fE(s, f) === !1)
    return !1;
  l === "Polygon" && (h = [h]);
  let m = !1;
  for (var d = 0; d < h.length; ++d) {
    const v = hE(s, h[d]);
    if (v === 0) return !e.ignoreBoundary;
    v && (m = !0);
  }
  return m;
}
function fE(n, r) {
  return r[0] <= n[0] && r[1] <= n[1] && r[2] >= n[0] && r[3] >= n[1];
}
class fg {
  constructor(r = [], e = gE) {
    if (this.data = r, this.length = this.data.length, this.compare = e, this.length > 0)
      for (let s = (this.length >> 1) - 1; s >= 0; s--) this._down(s);
  }
  push(r) {
    this.data.push(r), this.length++, this._up(this.length - 1);
  }
  pop() {
    if (this.length === 0) return;
    const r = this.data[0], e = this.data.pop();
    return this.length--, this.length > 0 && (this.data[0] = e, this._down(0)), r;
  }
  peek() {
    return this.data[0];
  }
  _up(r) {
    const { data: e, compare: s } = this, u = e[r];
    for (; r > 0; ) {
      const l = r - 1 >> 1, f = e[l];
      if (s(u, f) >= 0) break;
      e[r] = f, r = l;
    }
    e[r] = u;
  }
  _down(r) {
    const { data: e, compare: s } = this, u = this.length >> 1, l = e[r];
    for (; r < u; ) {
      let f = (r << 1) + 1, h = e[f];
      const m = f + 1;
      if (m < this.length && s(e[m], h) < 0 && (f = m, h = e[m]), s(h, l) >= 0) break;
      e[r] = h, r = f;
    }
    e[r] = l;
  }
}
function gE(n, r) {
  return n < r ? -1 : n > r ? 1 : 0;
}
function gg(n, r) {
  return n.p.x > r.p.x ? 1 : n.p.x < r.p.x ? -1 : n.p.y !== r.p.y ? n.p.y > r.p.y ? 1 : -1 : 1;
}
function dE(n, r) {
  return n.rightSweepEvent.p.x > r.rightSweepEvent.p.x ? 1 : n.rightSweepEvent.p.x < r.rightSweepEvent.p.x ? -1 : n.rightSweepEvent.p.y !== r.rightSweepEvent.p.y ? n.rightSweepEvent.p.y < r.rightSweepEvent.p.y ? 1 : -1 : 1;
}
class Yc {
  constructor(r, e, s, u) {
    this.p = {
      x: r[0],
      y: r[1]
    }, this.featureId = e, this.ringId = s, this.eventId = u, this.otherEvent = null, this.isLeftEndpoint = null;
  }
  isSamePoint(r) {
    return this.p.x === r.p.x && this.p.y === r.p.y;
  }
}
function pE(n, r) {
  if (n.type === "FeatureCollection") {
    const e = n.features;
    for (let s = 0; s < e.length; s++)
      Hc(e[s], r);
  } else
    Hc(n, r);
}
let Ps = 0, Os = 0, Rs = 0;
function Hc(n, r) {
  const e = n.type === "Feature" ? n.geometry : n;
  let s = e.coordinates;
  (e.type === "Polygon" || e.type === "MultiLineString") && (s = [s]), e.type === "LineString" && (s = [[s]]);
  for (let u = 0; u < s.length; u++)
    for (let l = 0; l < s[u].length; l++) {
      let f = s[u][l][0], h = null;
      Os = Os + 1;
      for (let m = 0; m < s[u][l].length - 1; m++) {
        h = s[u][l][m + 1];
        const d = new Yc(f, Ps, Os, Rs), v = new Yc(h, Ps, Os, Rs + 1);
        d.otherEvent = v, v.otherEvent = d, gg(d, v) > 0 ? (v.isLeftEndpoint = !0, d.isLeftEndpoint = !1) : (d.isLeftEndpoint = !0, v.isLeftEndpoint = !1), r.push(d), r.push(v), f = h, Rs = Rs + 1;
      }
    }
  Ps = Ps + 1;
}
let mE = class {
  constructor(r) {
    this.leftSweepEvent = r, this.rightSweepEvent = r.otherEvent;
  }
};
function vE(n, r) {
  if (n === null || r === null || n.leftSweepEvent.ringId === r.leftSweepEvent.ringId && (n.rightSweepEvent.isSamePoint(r.leftSweepEvent) || n.rightSweepEvent.isSamePoint(r.leftSweepEvent) || n.rightSweepEvent.isSamePoint(r.rightSweepEvent) || n.leftSweepEvent.isSamePoint(r.leftSweepEvent) || n.leftSweepEvent.isSamePoint(r.rightSweepEvent))) return !1;
  const e = n.leftSweepEvent.p.x, s = n.leftSweepEvent.p.y, u = n.rightSweepEvent.p.x, l = n.rightSweepEvent.p.y, f = r.leftSweepEvent.p.x, h = r.leftSweepEvent.p.y, m = r.rightSweepEvent.p.x, d = r.rightSweepEvent.p.y, v = (d - h) * (u - e) - (m - f) * (l - s), y = (m - f) * (s - h) - (d - h) * (e - f), E = (u - e) * (s - h) - (l - s) * (e - f);
  if (v === 0)
    return !1;
  const S = y / v, M = E / v;
  if (S >= 0 && S <= 1 && M >= 0 && M <= 1) {
    const D = e + S * (u - e), U = s + S * (l - s);
    return [D, U];
  }
  return !1;
}
function yE(n, r) {
  r = r || !1;
  const e = [], s = new fg([], dE);
  for (; n.length; ) {
    const u = n.pop();
    if (u.isLeftEndpoint) {
      const l = new mE(u);
      for (let f = 0; f < s.data.length; f++) {
        const h = s.data[f];
        if (r && h.leftSweepEvent.featureId === u.featureId)
          continue;
        const m = vE(l, h);
        m !== !1 && e.push(m);
      }
      s.push(l);
    } else u.isLeftEndpoint === !1 && s.pop();
  }
  return e;
}
function _E(n, r) {
  const e = new fg([], gg);
  return pE(n, e), yE(e, r);
}
var EE = _E;
function ws(n, r, e = {}) {
  const { removeDuplicates: s = !0, ignoreSelfIntersections: u = !0 } = e;
  let l = [];
  n.type === "FeatureCollection" ? l = l.concat(n.features) : n.type === "Feature" ? l.push(n) : (n.type === "LineString" || n.type === "Polygon" || n.type === "MultiLineString" || n.type === "MultiPolygon") && l.push(cn(n)), r.type === "FeatureCollection" ? l = l.concat(r.features) : r.type === "Feature" ? l.push(r) : (r.type === "LineString" || r.type === "Polygon" || r.type === "MultiLineString" || r.type === "MultiPolygon") && l.push(cn(r));
  const f = EE(
    $e(l),
    u
  );
  let h = [];
  if (s) {
    const m = {};
    f.forEach((d) => {
      const v = d.join(",");
      m[v] || (m[v] = !0, h.push(d));
    });
  } else
    h = f;
  return $e(h.map((m) => Sn(m)));
}
var xE = ws;
function Ko(n) {
  const r = Rt(n);
  let e = 0, s = 1, u, l;
  for (; s < r.length; )
    u = l || r[0], l = r[s], e += (l[0] - u[0]) * (l[1] + u[1]), s++;
  return e > 0;
}
function wE(n, r = {}) {
  var e, s;
  if (r = r || {}, !Da(r)) throw new Error("options is invalid");
  const u = (e = r.mutate) != null ? e : !1, l = (s = r.reverse) != null ? s : !1;
  if (!n) throw new Error("<geojson> is required");
  if (typeof l != "boolean")
    throw new Error("<reverse> must be a boolean");
  if (typeof u != "boolean")
    throw new Error("<mutate> must be a boolean");
  !u && n.type !== "Point" && n.type !== "MultiPoint" && (n = Fa(n));
  const f = [];
  switch (n.type) {
    case "GeometryCollection":
      return gr(n, function(h) {
        Qs(h, l);
      }), n;
    case "FeatureCollection":
      return An(n, function(h) {
        const m = Qs(h, l);
        An(m, function(d) {
          f.push(d);
        });
      }), $e(f);
  }
  return Qs(n, l);
}
function Qs(n, r) {
  switch (n.type === "Feature" ? n.geometry.type : n.type) {
    case "GeometryCollection":
      return gr(n, function(s) {
        Qs(s, r);
      }), n;
    case "LineString":
      return Jc(Rt(n), r), n;
    case "Polygon":
      return Vc(Rt(n), r), n;
    case "MultiLineString":
      return Rt(n).forEach(function(s) {
        Jc(s, r);
      }), n;
    case "MultiPolygon":
      return Rt(n).forEach(function(s) {
        Vc(s, r);
      }), n;
    case "Point":
    case "MultiPoint":
      return n;
  }
}
function Jc(n, r) {
  Ko(n) === r && n.reverse();
}
function Vc(n, r) {
  Ko(n[0]) !== r && n[0].reverse();
  for (let e = 1; e < n.length; e++)
    Ko(n[e]) === r && n[e].reverse();
}
var kE = wE;
const SE = ["Point", "MultiPoint"], ME = [
  "LineString",
  "MultiLineString",
  "Polygon",
  "MultiPolygon"
], dg = (n) => SE.includes(n.geometry.type), Qo = (n) => ME.includes(n.geometry.type);
function IE(n, r = {}) {
  const e = wn(n), s = (e[0] + e[2]) / 2, u = (e[1] + e[3]) / 2;
  return Sn([s, u], r.properties, r);
}
var ea = { exports: {} }, LE = ea.exports, Xc;
function bE() {
  return Xc || (Xc = 1, function(n, r) {
    (function(e, s) {
      n.exports = s();
    })(LE, function() {
      function e(o, t) {
        (t == null || t > o.length) && (t = o.length);
        for (var i = 0, a = Array(t); i < t; i++) a[i] = o[i];
        return a;
      }
      function s(o, t, i) {
        return t = v(t), function(a, c) {
          if (c && (typeof c == "object" || typeof c == "function")) return c;
          if (c !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return function(g) {
            if (g === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g;
          }(a);
        }(o, E() ? Reflect.construct(t, i || [], v(o).constructor) : t.apply(o, i));
      }
      function u(o, t) {
        if (!(o instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function l(o, t, i) {
        if (E()) return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, t);
        var c = new (o.bind.apply(o, a))();
        return i && S(c, i.prototype), c;
      }
      function f(o, t) {
        for (var i = 0; i < t.length; i++) {
          var a = t[i];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(o, U(a.key), a);
        }
      }
      function h(o, t, i) {
        return t && f(o.prototype, t), i && f(o, i), Object.defineProperty(o, "prototype", { writable: !1 }), o;
      }
      function m(o, t) {
        var i = typeof Symbol < "u" && o[Symbol.iterator] || o["@@iterator"];
        if (!i) {
          if (Array.isArray(o) || (i = G(o)) || t) {
            i && (o = i);
            var a = 0, c = function() {
            };
            return { s: c, n: function() {
              return a >= o.length ? { done: !0 } : { done: !1, value: o[a++] };
            }, e: function(w) {
              throw w;
            }, f: c };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var g, p = !0, _ = !1;
        return { s: function() {
          i = i.call(o);
        }, n: function() {
          var w = i.next();
          return p = w.done, w;
        }, e: function(w) {
          _ = !0, g = w;
        }, f: function() {
          try {
            p || i.return == null || i.return();
          } finally {
            if (_) throw g;
          }
        } };
      }
      function d() {
        return d = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(o, t, i) {
          var a = function(g, p) {
            for (; !{}.hasOwnProperty.call(g, p) && (g = v(g)) !== null; ) ;
            return g;
          }(o, t);
          if (a) {
            var c = Object.getOwnPropertyDescriptor(a, t);
            return c.get ? c.get.call(arguments.length < 3 ? o : i) : c.value;
          }
        }, d.apply(null, arguments);
      }
      function v(o) {
        return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, v(o);
      }
      function y(o, t) {
        if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
        o.prototype = Object.create(t && t.prototype, { constructor: { value: o, writable: !0, configurable: !0 } }), Object.defineProperty(o, "prototype", { writable: !1 }), t && S(o, t);
      }
      function E() {
        try {
          var o = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch {
        }
        return (E = function() {
          return !!o;
        })();
      }
      function S(o, t) {
        return S = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
          return i.__proto__ = a, i;
        }, S(o, t);
      }
      function M(o, t, i, a) {
        var c = d(v(1 & a ? o.prototype : o), t, i);
        return 2 & a && typeof c == "function" ? function(g) {
          return c.apply(i, g);
        } : c;
      }
      function D(o) {
        return function(t) {
          if (Array.isArray(t)) return e(t);
        }(o) || function(t) {
          if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
        }(o) || G(o) || function() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }();
      }
      function U(o) {
        var t = function(i, a) {
          if (typeof i != "object" || !i) return i;
          var c = i[Symbol.toPrimitive];
          if (c !== void 0) {
            var g = c.call(i, a);
            if (typeof g != "object") return g;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(i);
        }(o, "string");
        return typeof t == "symbol" ? t : t + "";
      }
      function G(o, t) {
        if (o) {
          if (typeof o == "string") return e(o, t);
          var i = {}.toString.call(o).slice(8, -1);
          return i === "Object" && o.constructor && (i = o.constructor.name), i === "Map" || i === "Set" ? Array.from(o) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? e(o, t) : void 0;
        }
      }
      function I(o) {
        var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
        return I = function(i) {
          if (i === null || !function(c) {
            try {
              return Function.toString.call(c).indexOf("[native code]") !== -1;
            } catch {
              return typeof c == "function";
            }
          }(i)) return i;
          if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
          if (t !== void 0) {
            if (t.has(i)) return t.get(i);
            t.set(i, a);
          }
          function a() {
            return l(i, arguments, v(this).constructor);
          }
          return a.prototype = Object.create(i.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), S(a, i);
        }, I(o);
      }
      var H = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getEndCapStyle", value: function() {
          return this._endCapStyle;
        } }, { key: "isSingleSided", value: function() {
          return this._isSingleSided;
        } }, { key: "setQuadrantSegments", value: function(t) {
          this._quadrantSegments = t, this._quadrantSegments === 0 && (this._joinStyle = o.JOIN_BEVEL), this._quadrantSegments < 0 && (this._joinStyle = o.JOIN_MITRE, this._mitreLimit = Math.abs(this._quadrantSegments)), t <= 0 && (this._quadrantSegments = 1), this._joinStyle !== o.JOIN_ROUND && (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS);
        } }, { key: "getJoinStyle", value: function() {
          return this._joinStyle;
        } }, { key: "setJoinStyle", value: function(t) {
          this._joinStyle = t;
        } }, { key: "setSimplifyFactor", value: function(t) {
          this._simplifyFactor = t < 0 ? 0 : t;
        } }, { key: "getSimplifyFactor", value: function() {
          return this._simplifyFactor;
        } }, { key: "getQuadrantSegments", value: function() {
          return this._quadrantSegments;
        } }, { key: "setEndCapStyle", value: function(t) {
          this._endCapStyle = t;
        } }, { key: "getMitreLimit", value: function() {
          return this._mitreLimit;
        } }, { key: "setMitreLimit", value: function(t) {
          this._mitreLimit = t;
        } }, { key: "setSingleSided", value: function(t) {
          this._isSingleSided = t;
        } }], [{ key: "constructor_", value: function() {
          if (this._quadrantSegments = o.DEFAULT_QUADRANT_SEGMENTS, this._endCapStyle = o.CAP_ROUND, this._joinStyle = o.JOIN_ROUND, this._mitreLimit = o.DEFAULT_MITRE_LIMIT, this._isSingleSided = !1, this._simplifyFactor = o.DEFAULT_SIMPLIFY_FACTOR, arguments.length !== 0) {
            if (arguments.length === 1) {
              var t = arguments[0];
              this.setQuadrantSegments(t);
            } else if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              this.setQuadrantSegments(i), this.setEndCapStyle(a);
            } else if (arguments.length === 4) {
              var c = arguments[0], g = arguments[1], p = arguments[2], _ = arguments[3];
              this.setQuadrantSegments(c), this.setEndCapStyle(g), this.setJoinStyle(p), this.setMitreLimit(_);
            }
          }
        } }, { key: "bufferDistanceError", value: function(t) {
          var i = Math.PI / 2 / t;
          return 1 - Math.cos(i / 2);
        } }]);
      }();
      H.CAP_ROUND = 1, H.CAP_FLAT = 2, H.CAP_SQUARE = 3, H.JOIN_ROUND = 1, H.JOIN_MITRE = 2, H.JOIN_BEVEL = 3, H.DEFAULT_QUADRANT_SEGMENTS = 8, H.DEFAULT_MITRE_LIMIT = 5, H.DEFAULT_SIMPLIFY_FACTOR = 0.01;
      var J = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t, [i])).name = Object.keys({ Exception: t })[0], a;
        }
        return y(t, o), h(t, [{ key: "toString", value: function() {
          return this.message;
        } }]);
      }(I(Error)), X = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t, [i])).name = Object.keys({ IllegalArgumentException: t })[0], a;
        }
        return y(t, o), h(t);
      }(J), W = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "filter", value: function(o) {
        } }]);
      }();
      function $() {
      }
      function x() {
      }
      function k() {
      }
      var b, A, T, F, P, N, R, Y, z = function() {
        return h(function o() {
          u(this, o);
        }, null, [{ key: "equalsWithTolerance", value: function(o, t, i) {
          return Math.abs(o - t) <= i;
        } }]);
      }(), j = function() {
        return h(function o(t, i) {
          u(this, o), this.low = i || 0, this.high = t || 0;
        }, null, [{ key: "toBinaryString", value: function(o) {
          var t, i = "";
          for (t = 2147483648; t > 0; t >>>= 1) i += (o.high & t) === t ? "1" : "0";
          for (t = 2147483648; t > 0; t >>>= 1) i += (o.low & t) === t ? "1" : "0";
          return i;
        } }]);
      }();
      function K() {
      }
      function ne() {
      }
      K.NaN = NaN, K.isNaN = function(o) {
        return Number.isNaN(o);
      }, K.isInfinite = function(o) {
        return !Number.isFinite(o);
      }, K.MAX_VALUE = Number.MAX_VALUE, K.POSITIVE_INFINITY = Number.POSITIVE_INFINITY, K.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY, typeof Float64Array == "function" && typeof Int32Array == "function" ? (N = 2146435072, R = new Float64Array(1), Y = new Int32Array(R.buffer), K.doubleToLongBits = function(o) {
        R[0] = o;
        var t = 0 | Y[0], i = 0 | Y[1];
        return (i & N) === N && 1048575 & i && t !== 0 && (t = 0, i = 2146959360), new j(i, t);
      }, K.longBitsToDouble = function(o) {
        return Y[0] = o.low, Y[1] = o.high, R[0];
      }) : (b = 1023, A = Math.log2, T = Math.floor, F = Math.pow, P = function() {
        for (var o = 53; o > 0; o--) {
          var t = F(2, o) - 1;
          if (T(A(t)) + 1 === o) return t;
        }
        return 0;
      }(), K.doubleToLongBits = function(o) {
        var t, i, a, c, g, p, _, w, L;
        if (o < 0 || 1 / o === Number.NEGATIVE_INFINITY ? (p = 1 << 31, o = -o) : p = 0, o === 0) return new j(w = p, L = 0);
        if (o === 1 / 0) return new j(w = 2146435072 | p, L = 0);
        if (o != o) return new j(w = 2146959360, L = 0);
        if (c = 0, L = 0, (t = T(o)) > 1) if (t <= P) (c = T(A(t))) <= 20 ? (L = 0, w = t << 20 - c & 1048575) : (L = t % (i = F(2, a = c - 20)) << 32 - a, w = t / i & 1048575);
        else for (a = t, L = 0; (a = T(i = a / 2)) !== 0; ) c++, L >>>= 1, L |= (1 & w) << 31, w >>>= 1, i !== a && (w |= 524288);
        if (_ = c + b, g = t === 0, t = o - t, c < 52 && t !== 0) for (a = 0; ; ) {
          if ((i = 2 * t) >= 1 ? (t = i - 1, g ? (_--, g = !1) : (a <<= 1, a |= 1, c++)) : (t = i, g ? --_ == 0 && (c++, g = !1) : (a <<= 1, c++)), c === 20) w |= a, a = 0;
          else if (c === 52) {
            L |= a;
            break;
          }
          if (i === 1) {
            c < 20 ? w |= a << 20 - c : c < 52 && (L |= a << 52 - c);
            break;
          }
        }
        return w |= _ << 20, new j(w |= p, L);
      }, K.longBitsToDouble = function(o) {
        var t, i, a, c, g = o.high, p = o.low, _ = g & 1 << 31 ? -1 : 1;
        for (a = ((2146435072 & g) >> 20) - b, c = 0, i = 1 << 19, t = 1; t <= 20; t++) g & i && (c += F(2, -t)), i >>>= 1;
        for (i = 1 << 31, t = 21; t <= 52; t++) p & i && (c += F(2, -t)), i >>>= 1;
        if (a === -1023) {
          if (c === 0) return 0 * _;
          a = -1022;
        } else {
          if (a === 1024) return c === 0 ? _ / 0 : NaN;
          c += 1;
        }
        return _ * c * F(2, a);
      });
      var de = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t, [i])).name = Object.keys({ RuntimeException: t })[0], a;
        }
        return y(t, o), h(t);
      }(J), ce = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, null, [{ key: "constructor_", value: function() {
          if (arguments.length === 0) de.constructor_.call(this);
          else if (arguments.length === 1) {
            var i = arguments[0];
            de.constructor_.call(this, i);
          }
        } }]);
      }(de), ae = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "shouldNeverReachHere", value: function() {
          if (arguments.length === 0) o.shouldNeverReachHere(null);
          else if (arguments.length === 1) {
            var t = arguments[0];
            throw new ce("Should never reach here" + (t !== null ? ": " + t : ""));
          }
        } }, { key: "isTrue", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            o.isTrue(t, null);
          } else if (arguments.length === 2) {
            var i = arguments[1];
            if (!arguments[0]) throw i === null ? new ce() : new ce(i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var t = arguments[0], i = arguments[1];
            o.equals(t, i, null);
          } else if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2];
            if (!c.equals(a)) throw new ce("Expected " + a + " but encountered " + c + (g !== null ? ": " + g : ""));
          }
        } }]);
      }(), ue = new ArrayBuffer(8), xe = new Float64Array(ue), Ae = new Int32Array(ue), V = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getM", value: function() {
          return K.NaN;
        } }, { key: "setOrdinate", value: function(t, i) {
          switch (t) {
            case o.X:
              this.x = i;
              break;
            case o.Y:
              this.y = i;
              break;
            case o.Z:
              this.setZ(i);
              break;
            default:
              throw new X("Invalid ordinate index: " + t);
          }
        } }, { key: "equals2D", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            return this.x === t.x && this.y === t.y;
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return !!z.equalsWithTolerance(this.x, i.x, a) && !!z.equalsWithTolerance(this.y, i.y, a);
          }
        } }, { key: "setM", value: function(t) {
          throw new X("Invalid ordinate index: " + o.M);
        } }, { key: "getZ", value: function() {
          return this.z;
        } }, { key: "getOrdinate", value: function(t) {
          switch (t) {
            case o.X:
              return this.x;
            case o.Y:
              return this.y;
            case o.Z:
              return this.getZ();
          }
          throw new X("Invalid ordinate index: " + t);
        } }, { key: "equals3D", value: function(t) {
          return this.x === t.x && this.y === t.y && (this.getZ() === t.getZ() || K.isNaN(this.getZ()) && K.isNaN(t.getZ()));
        } }, { key: "equals", value: function(t) {
          return t instanceof o && this.equals2D(t);
        } }, { key: "equalInZ", value: function(t, i) {
          return z.equalsWithTolerance(this.getZ(), t.getZ(), i);
        } }, { key: "setX", value: function(t) {
          this.x = t;
        } }, { key: "compareTo", value: function(t) {
          var i = t;
          return this.x < i.x ? -1 : this.x > i.x ? 1 : this.y < i.y ? -1 : this.y > i.y ? 1 : 0;
        } }, { key: "getX", value: function() {
          return this.x;
        } }, { key: "setZ", value: function(t) {
          this.z = t;
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (t) {
            if (t instanceof CloneNotSupportedException) return ae.shouldNeverReachHere("this shouldn't happen because this class is Cloneable"), null;
            throw t;
          }
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + ")";
        } }, { key: "distance3D", value: function(t) {
          var i = this.x - t.x, a = this.y - t.y, c = this.getZ() - t.getZ();
          return Math.sqrt(i * i + a * a + c * c);
        } }, { key: "getY", value: function() {
          return this.y;
        } }, { key: "setY", value: function(t) {
          this.y = t;
        } }, { key: "distance", value: function(t) {
          var i = this.x - t.x, a = this.y - t.y;
          return Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var t = 17;
          return t = 37 * (t = 37 * t + o.hashCode(this.x)) + o.hashCode(this.y);
        } }, { key: "setCoordinate", value: function(t) {
          this.x = t.x, this.y = t.y, this.z = t.getZ();
        } }, { key: "interfaces_", get: function() {
          return [$, x, k];
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.z = null, arguments.length === 0) o.constructor_.call(this, 0, 0);
          else if (arguments.length === 1) {
            var t = arguments[0];
            o.constructor_.call(this, t.x, t.y, t.getZ());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            o.constructor_.call(this, i, a, o.NULL_ORDINATE);
          } else if (arguments.length === 3) {
            var c = arguments[0], g = arguments[1], p = arguments[2];
            this.x = c, this.y = g, this.z = p;
          }
        } }, { key: "hashCode", value: function(t) {
          return xe[0] = t, Ae[0] ^ Ae[1];
        } }]);
      }(), Qt = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compare", value: function(t, i) {
          var a = o.compare(t.x, i.x);
          if (a !== 0) return a;
          var c = o.compare(t.y, i.y);
          return c !== 0 ? c : this._dimensionsToTest <= 2 ? 0 : o.compare(t.getZ(), i.getZ());
        } }, { key: "interfaces_", get: function() {
          return [ne];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimensionsToTest = 2, arguments.length === 0) o.constructor_.call(this, 2);
          else if (arguments.length === 1) {
            var t = arguments[0];
            if (t !== 2 && t !== 3) throw new X("only 2 or 3 dimensions may be specified");
            this._dimensionsToTest = t;
          }
        } }, { key: "compare", value: function(t, i) {
          return t < i ? -1 : t > i ? 1 : K.isNaN(t) ? K.isNaN(i) ? 0 : -1 : K.isNaN(i) ? 1 : 0;
        } }]);
      }();
      V.DimensionalComparator = Qt, V.NULL_ORDINATE = K.NaN, V.X = 0, V.Y = 1, V.Z = 2, V.M = 3;
      var Le = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getArea", value: function() {
          return this.getWidth() * this.getHeight();
        } }, { key: "equals", value: function(t) {
          if (!(t instanceof o)) return !1;
          var i = t;
          return this.isNull() ? i.isNull() : this._maxx === i.getMaxX() && this._maxy === i.getMaxY() && this._minx === i.getMinX() && this._miny === i.getMinY();
        } }, { key: "intersection", value: function(t) {
          if (this.isNull() || t.isNull() || !this.intersects(t)) return new o();
          var i = this._minx > t._minx ? this._minx : t._minx, a = this._miny > t._miny ? this._miny : t._miny;
          return new o(i, this._maxx < t._maxx ? this._maxx : t._maxx, a, this._maxy < t._maxy ? this._maxy : t._maxy);
        } }, { key: "isNull", value: function() {
          return this._maxx < this._minx;
        } }, { key: "getMaxX", value: function() {
          return this._maxx;
        } }, { key: "covers", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var t = arguments[0];
              return this.covers(t.x, t.y);
            }
            if (arguments[0] instanceof o) {
              var i = arguments[0];
              return !this.isNull() && !i.isNull() && i.getMinX() >= this._minx && i.getMaxX() <= this._maxx && i.getMinY() >= this._miny && i.getMaxY() <= this._maxy;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            return !this.isNull() && a >= this._minx && a <= this._maxx && c >= this._miny && c <= this._maxy;
          }
        } }, { key: "intersects", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var t = arguments[0];
              return !this.isNull() && !t.isNull() && !(t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny);
            }
            if (arguments[0] instanceof V) {
              var i = arguments[0];
              return this.intersects(i.x, i.y);
            }
          } else if (arguments.length === 2) {
            if (arguments[0] instanceof V && arguments[1] instanceof V) {
              var a = arguments[0], c = arguments[1];
              return !this.isNull() && !((a.x < c.x ? a.x : c.x) > this._maxx) && !((a.x > c.x ? a.x : c.x) < this._minx) && !((a.y < c.y ? a.y : c.y) > this._maxy) && !((a.y > c.y ? a.y : c.y) < this._miny);
            }
            if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
              var g = arguments[0], p = arguments[1];
              return !this.isNull() && !(g > this._maxx || g < this._minx || p > this._maxy || p < this._miny);
            }
          }
        } }, { key: "getMinY", value: function() {
          return this._miny;
        } }, { key: "getDiameter", value: function() {
          if (this.isNull()) return 0;
          var t = this.getWidth(), i = this.getHeight();
          return Math.sqrt(t * t + i * i);
        } }, { key: "getMinX", value: function() {
          return this._minx;
        } }, { key: "expandToInclude", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var t = arguments[0];
              this.expandToInclude(t.x, t.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              if (i.isNull()) return null;
              this.isNull() ? (this._minx = i.getMinX(), this._maxx = i.getMaxX(), this._miny = i.getMinY(), this._maxy = i.getMaxY()) : (i._minx < this._minx && (this._minx = i._minx), i._maxx > this._maxx && (this._maxx = i._maxx), i._miny < this._miny && (this._miny = i._miny), i._maxy > this._maxy && (this._maxy = i._maxy));
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.isNull() ? (this._minx = a, this._maxx = a, this._miny = c, this._maxy = c) : (a < this._minx && (this._minx = a), a > this._maxx && (this._maxx = a), c < this._miny && (this._miny = c), c > this._maxy && (this._maxy = c));
          }
        } }, { key: "minExtent", value: function() {
          if (this.isNull()) return 0;
          var t = this.getWidth(), i = this.getHeight();
          return t < i ? t : i;
        } }, { key: "getWidth", value: function() {
          return this.isNull() ? 0 : this._maxx - this._minx;
        } }, { key: "compareTo", value: function(t) {
          var i = t;
          return this.isNull() ? i.isNull() ? 0 : -1 : i.isNull() ? 1 : this._minx < i._minx ? -1 : this._minx > i._minx ? 1 : this._miny < i._miny ? -1 : this._miny > i._miny ? 1 : this._maxx < i._maxx ? -1 : this._maxx > i._maxx ? 1 : this._maxy < i._maxy ? -1 : this._maxy > i._maxy ? 1 : 0;
        } }, { key: "translate", value: function(t, i) {
          if (this.isNull()) return null;
          this.init(this.getMinX() + t, this.getMaxX() + t, this.getMinY() + i, this.getMaxY() + i);
        } }, { key: "copy", value: function() {
          return new o(this);
        } }, { key: "toString", value: function() {
          return "Env[" + this._minx + " : " + this._maxx + ", " + this._miny + " : " + this._maxy + "]";
        } }, { key: "setToNull", value: function() {
          this._minx = 0, this._maxx = -1, this._miny = 0, this._maxy = -1;
        } }, { key: "disjoint", value: function(t) {
          return !(!this.isNull() && !t.isNull()) || t._minx > this._maxx || t._maxx < this._minx || t._miny > this._maxy || t._maxy < this._miny;
        } }, { key: "getHeight", value: function() {
          return this.isNull() ? 0 : this._maxy - this._miny;
        } }, { key: "maxExtent", value: function() {
          if (this.isNull()) return 0;
          var t = this.getWidth(), i = this.getHeight();
          return t > i ? t : i;
        } }, { key: "expandBy", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.expandBy(t, t);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            if (this.isNull()) return null;
            this._minx -= i, this._maxx += i, this._miny -= a, this._maxy += a, (this._minx > this._maxx || this._miny > this._maxy) && this.setToNull();
          }
        } }, { key: "contains", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var t = arguments[0];
              return this.covers(t);
            }
            if (arguments[0] instanceof V) {
              var i = arguments[0];
              return this.covers(i);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            return this.covers(a, c);
          }
        } }, { key: "centre", value: function() {
          return this.isNull() ? null : new V((this.getMinX() + this.getMaxX()) / 2, (this.getMinY() + this.getMaxY()) / 2);
        } }, { key: "init", value: function() {
          if (arguments.length === 0) this.setToNull();
          else if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var t = arguments[0];
              this.init(t.x, t.x, t.y, t.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this._minx = i._minx, this._maxx = i._maxx, this._miny = i._miny, this._maxy = i._maxy;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.init(a.x, c.x, a.y, c.y);
          } else if (arguments.length === 4) {
            var g = arguments[0], p = arguments[1], _ = arguments[2], w = arguments[3];
            g < p ? (this._minx = g, this._maxx = p) : (this._minx = p, this._maxx = g), _ < w ? (this._miny = _, this._maxy = w) : (this._miny = w, this._maxy = _);
          }
        } }, { key: "getMaxY", value: function() {
          return this._maxy;
        } }, { key: "distance", value: function(t) {
          if (this.intersects(t)) return 0;
          var i = 0;
          this._maxx < t._minx ? i = t._minx - this._maxx : this._minx > t._maxx && (i = this._minx - t._maxx);
          var a = 0;
          return this._maxy < t._miny ? a = t._miny - this._maxy : this._miny > t._maxy && (a = this._miny - t._maxy), i === 0 ? a : a === 0 ? i : Math.sqrt(i * i + a * a);
        } }, { key: "hashCode", value: function() {
          var t = 17;
          return t = 37 * (t = 37 * (t = 37 * (t = 37 * t + V.hashCode(this._minx)) + V.hashCode(this._maxx)) + V.hashCode(this._miny)) + V.hashCode(this._maxy);
        } }, { key: "interfaces_", get: function() {
          return [$, k];
        } }], [{ key: "constructor_", value: function() {
          if (this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, arguments.length === 0) this.init();
          else if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var t = arguments[0];
              this.init(t.x, t.x, t.y, t.y);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.init(i);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.init(a.x, c.x, a.y, c.y);
          } else if (arguments.length === 4) {
            var g = arguments[0], p = arguments[1], _ = arguments[2], w = arguments[3];
            this.init(g, p, _, w);
          }
        } }, { key: "intersects", value: function() {
          if (arguments.length === 3) {
            var t = arguments[0], i = arguments[1], a = arguments[2];
            return a.x >= (t.x < i.x ? t.x : i.x) && a.x <= (t.x > i.x ? t.x : i.x) && a.y >= (t.y < i.y ? t.y : i.y) && a.y <= (t.y > i.y ? t.y : i.y);
          }
          if (arguments.length === 4) {
            var c = arguments[0], g = arguments[1], p = arguments[2], _ = arguments[3], w = Math.min(p.x, _.x), L = Math.max(p.x, _.x), q = Math.min(c.x, g.x), Z = Math.max(c.x, g.x);
            return !(q > L) && !(Z < w) && (w = Math.min(p.y, _.y), L = Math.max(p.y, _.y), q = Math.min(c.y, g.y), Z = Math.max(c.y, g.y), !(q > L) && !(Z < w));
          }
        } }]);
      }(), he = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isGeometryCollection", value: function() {
          return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getFactory", value: function() {
          return this._factory;
        } }, { key: "getGeometryN", value: function(t) {
          return this;
        } }, { key: "getArea", value: function() {
          return 0;
        } }, { key: "isRectangle", value: function() {
          return !1;
        } }, { key: "equalsExact", value: function(t) {
          return this === t || this.equalsExact(t, 0);
        } }, { key: "geometryChanged", value: function() {
          this.apply(o.geometryChangedFilter);
        } }, { key: "geometryChangedAction", value: function() {
          this._envelope = null;
        } }, { key: "equalsNorm", value: function(t) {
          return t !== null && this.norm().equalsExact(t.norm());
        } }, { key: "getLength", value: function() {
          return 0;
        } }, { key: "getNumGeometries", value: function() {
          return 1;
        } }, { key: "compareTo", value: function() {
          var t;
          if (arguments.length === 1) {
            var i = arguments[0];
            return t = i, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            return t = a, this.getTypeCode() !== t.getTypeCode() ? this.getTypeCode() - t.getTypeCode() : this.isEmpty() && t.isEmpty() ? 0 : this.isEmpty() ? -1 : t.isEmpty() ? 1 : this.compareToSameClass(a, c);
          }
        } }, { key: "getUserData", value: function() {
          return this._userData;
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "getEnvelope", value: function() {
          return this.getFactory().toGeometry(this.getEnvelopeInternal());
        } }, { key: "checkNotGeometryCollection", value: function(t) {
          if (t.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION) throw new X("This method does not support GeometryCollection arguments");
        } }, { key: "equal", value: function(t, i, a) {
          return a === 0 ? t.equals(i) : t.distance(i) <= a;
        } }, { key: "norm", value: function() {
          var t = this.copy();
          return t.normalize(), t;
        } }, { key: "reverse", value: function() {
          var t = this.reverseInternal();
          return this.envelope != null && (t.envelope = this.envelope.copy()), t.setSRID(this.getSRID()), t;
        } }, { key: "copy", value: function() {
          var t = this.copyInternal();
          return t.envelope = this._envelope == null ? null : this._envelope.copy(), t._SRID = this._SRID, t._userData = this._userData, t;
        } }, { key: "getPrecisionModel", value: function() {
          return this._factory.getPrecisionModel();
        } }, { key: "getEnvelopeInternal", value: function() {
          return this._envelope === null && (this._envelope = this.computeEnvelopeInternal()), new Le(this._envelope);
        } }, { key: "setSRID", value: function(t) {
          this._SRID = t;
        } }, { key: "setUserData", value: function(t) {
          this._userData = t;
        } }, { key: "compare", value: function(t, i) {
          for (var a = t.iterator(), c = i.iterator(); a.hasNext() && c.hasNext(); ) {
            var g = a.next(), p = c.next(), _ = g.compareTo(p);
            if (_ !== 0) return _;
          }
          return a.hasNext() ? 1 : c.hasNext() ? -1 : 0;
        } }, { key: "hashCode", value: function() {
          return this.getEnvelopeInternal().hashCode();
        } }, { key: "isEquivalentClass", value: function(t) {
          return this.getClass() === t.getClass();
        } }, { key: "isGeometryCollectionOrDerived", value: function() {
          return this.getTypeCode() === o.TYPECODE_GEOMETRYCOLLECTION || this.getTypeCode() === o.TYPECODE_MULTIPOINT || this.getTypeCode() === o.TYPECODE_MULTILINESTRING || this.getTypeCode() === o.TYPECODE_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [x, $, k];
        } }, { key: "getClass", value: function() {
          return o;
        } }], [{ key: "hasNonEmptyElements", value: function(t) {
          for (var i = 0; i < t.length; i++) if (!t[i].isEmpty()) return !0;
          return !1;
        } }, { key: "hasNullElements", value: function(t) {
          for (var i = 0; i < t.length; i++) if (t[i] === null) return !0;
          return !1;
        } }]);
      }();
      he.constructor_ = function(o) {
        o && (this._envelope = null, this._userData = null, this._factory = o, this._SRID = o.getSRID());
      }, he.TYPECODE_POINT = 0, he.TYPECODE_MULTIPOINT = 1, he.TYPECODE_LINESTRING = 2, he.TYPECODE_LINEARRING = 3, he.TYPECODE_MULTILINESTRING = 4, he.TYPECODE_POLYGON = 5, he.TYPECODE_MULTIPOLYGON = 6, he.TYPECODE_GEOMETRYCOLLECTION = 7, he.TYPENAME_POINT = "Point", he.TYPENAME_MULTIPOINT = "MultiPoint", he.TYPENAME_LINESTRING = "LineString", he.TYPENAME_LINEARRING = "LinearRing", he.TYPENAME_MULTILINESTRING = "MultiLineString", he.TYPENAME_POLYGON = "Polygon", he.TYPENAME_MULTIPOLYGON = "MultiPolygon", he.TYPENAME_GEOMETRYCOLLECTION = "GeometryCollection", he.geometryChangedFilter = { get interfaces_() {
        return [W];
      }, filter: function(o) {
        o.geometryChangedAction();
      } };
      var C = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toLocationSymbol", value: function(t) {
          switch (t) {
            case o.EXTERIOR:
              return "e";
            case o.BOUNDARY:
              return "b";
            case o.INTERIOR:
              return "i";
            case o.NONE:
              return "-";
          }
          throw new X("Unknown location value: " + t);
        } }]);
      }();
      C.INTERIOR = 0, C.BOUNDARY = 1, C.EXTERIOR = 2, C.NONE = -1;
      var Oe = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "add", value: function() {
        } }, { key: "addAll", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }, { key: "iterator", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "toArray", value: function() {
        } }, { key: "remove", value: function() {
        } }]);
      }(), Pe = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t, [i])).name = Object.keys({ NoSuchElementException: t })[0], a;
        }
        return y(t, o), h(t);
      }(J), Se = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t, [i])).name = Object.keys({ UnsupportedOperationException: t })[0], a;
        }
        return y(t, o), h(t);
      }(J), Fr = function(o) {
        function t() {
          return u(this, t), s(this, t, arguments);
        }
        return y(t, o), h(t, [{ key: "contains", value: function() {
        } }]);
      }(Oe), pn = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t)).map = /* @__PURE__ */ new Map(), i instanceof Oe && a.addAll(i), a;
        }
        return y(t, o), h(t, [{ key: "contains", value: function(i) {
          var a = i.hashCode ? i.hashCode() : i;
          return !!this.map.has(a);
        } }, { key: "add", value: function(i) {
          var a = i.hashCode ? i.hashCode() : i;
          return !this.map.has(a) && !!this.map.set(a, i);
        } }, { key: "addAll", value: function(i) {
          var a, c = m(i);
          try {
            for (c.s(); !(a = c.n()).done; ) {
              var g = a.value;
              this.add(g);
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
          return !0;
        } }, { key: "remove", value: function() {
          throw new Se();
        } }, { key: "size", value: function() {
          return this.map.size;
        } }, { key: "isEmpty", value: function() {
          return this.map.size === 0;
        } }, { key: "toArray", value: function() {
          return Array.from(this.map.values());
        } }, { key: "iterator", value: function() {
          return new Gr(this.map);
        } }, { key: Symbol.iterator, value: function() {
          return this.map;
        } }]);
      }(Fr), Gr = function() {
        return h(function o(t) {
          u(this, o), this.iterator = t.values();
          var i = this.iterator.next(), a = i.done, c = i.value;
          this.done = a, this.value = c;
        }, [{ key: "next", value: function() {
          if (this.done) throw new Pe();
          var o = this.value, t = this.iterator.next(), i = t.done, a = t.value;
          return this.done = i, this.value = a, o;
        } }, { key: "hasNext", value: function() {
          return !this.done;
        } }, { key: "remove", value: function() {
          throw new Se();
        } }]);
      }(), te = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "opposite", value: function(t) {
          return t === o.LEFT ? o.RIGHT : t === o.RIGHT ? o.LEFT : t;
        } }]);
      }();
      te.ON = 0, te.LEFT = 1, te.RIGHT = 2;
      var Ii = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t, [i])).name = Object.keys({ EmptyStackException: t })[0], a;
        }
        return y(t, o), h(t);
      }(J), Li = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t, [i])).name = Object.keys({ IndexOutOfBoundsException: t })[0], a;
        }
        return y(t, o), h(t);
      }(J), Pn = function(o) {
        function t() {
          return u(this, t), s(this, t, arguments);
        }
        return y(t, o), h(t, [{ key: "get", value: function() {
        } }, { key: "set", value: function() {
        } }, { key: "isEmpty", value: function() {
        } }]);
      }(Oe), bi = function(o) {
        function t() {
          var i;
          return u(this, t), (i = s(this, t)).array = [], i;
        }
        return y(t, o), h(t, [{ key: "add", value: function(i) {
          return this.array.push(i), !0;
        } }, { key: "get", value: function(i) {
          if (i < 0 || i >= this.size()) throw new Li();
          return this.array[i];
        } }, { key: "push", value: function(i) {
          return this.array.push(i), i;
        } }, { key: "pop", value: function() {
          if (this.array.length === 0) throw new Ii();
          return this.array.pop();
        } }, { key: "peek", value: function() {
          if (this.array.length === 0) throw new Ii();
          return this.array[this.array.length - 1];
        } }, { key: "empty", value: function() {
          return this.array.length === 0;
        } }, { key: "isEmpty", value: function() {
          return this.empty();
        } }, { key: "search", value: function(i) {
          return this.array.indexOf(i);
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }]);
      }(Pn);
      function Ee(o, t) {
        return o.interfaces_ && o.interfaces_.indexOf(t) > -1;
      }
      var Ft = function() {
        return h(function o(t) {
          u(this, o), this.str = t;
        }, [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, t) {
          this.str = this.str.substr(0, o) + t + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      }(), en = function() {
        function o(t) {
          u(this, o), this.value = t;
        }
        return h(o, [{ key: "intValue", value: function() {
          return this.value;
        } }, { key: "compareTo", value: function(t) {
          return this.value < t ? -1 : this.value > t ? 1 : 0;
        } }], [{ key: "compare", value: function(t, i) {
          return t < i ? -1 : t > i ? 1 : 0;
        } }, { key: "isNan", value: function(t) {
          return Number.isNaN(t);
        } }, { key: "valueOf", value: function(t) {
          return new o(t);
        } }]);
      }(), Br = function() {
        return h(function o() {
          u(this, o);
        }, null, [{ key: "isWhitespace", value: function(o) {
          return o <= 32 && o >= 0 || o === 127;
        } }, { key: "toUpperCase", value: function(o) {
          return o.toUpperCase();
        } }]);
      }(), ye = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "le", value: function(t) {
          return this._hi < t._hi || this._hi === t._hi && this._lo <= t._lo;
        } }, { key: "extractSignificantDigits", value: function(t, i) {
          var a = this.abs(), c = o.magnitude(a._hi), g = o.TEN.pow(c);
          (a = a.divide(g)).gt(o.TEN) ? (a = a.divide(o.TEN), c += 1) : a.lt(o.ONE) && (a = a.multiply(o.TEN), c -= 1);
          for (var p = c + 1, _ = new Ft(), w = o.MAX_PRINT_DIGITS - 1, L = 0; L <= w; L++) {
            t && L === p && _.append(".");
            var q = Math.trunc(a._hi);
            if (q < 0) break;
            var Z = !1, Q = 0;
            q > 9 ? (Z = !0, Q = "9") : Q = "0" + q, _.append(Q), a = a.subtract(o.valueOf(q)).multiply(o.TEN), Z && a.selfAdd(o.TEN);
            var le = !0, fe = o.magnitude(a._hi);
            if (fe < 0 && Math.abs(fe) >= w - L && (le = !1), !le) break;
          }
          return i[0] = c, _.toString();
        } }, { key: "sqr", value: function() {
          return this.multiply(this);
        } }, { key: "doubleValue", value: function() {
          return this._hi + this._lo;
        } }, { key: "subtract", value: function() {
          if (arguments[0] instanceof o) {
            var t = arguments[0];
            return this.add(t.negate());
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.add(-i);
          }
        } }, { key: "equals", value: function() {
          if (arguments.length === 1 && arguments[0] instanceof o) {
            var t = arguments[0];
            return this._hi === t._hi && this._lo === t._lo;
          }
        } }, { key: "isZero", value: function() {
          return this._hi === 0 && this._lo === 0;
        } }, { key: "selfSubtract", value: function() {
          if (arguments[0] instanceof o) {
            var t = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-t._hi, -t._lo);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.isNaN() ? this : this.selfAdd(-i, 0);
          }
        } }, { key: "getSpecialNumberString", value: function() {
          return this.isZero() ? "0.0" : this.isNaN() ? "NaN " : null;
        } }, { key: "min", value: function(t) {
          return this.le(t) ? this : t;
        } }, { key: "selfDivide", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var t = arguments[0];
              return this.selfDivide(t._hi, t._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfDivide(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, c, g, p, _ = arguments[0], w = arguments[1], L = null, q = null, Z = null, Q = null;
            return g = this._hi / _, Q = (L = (Z = o.SPLIT * g) - (L = Z - g)) * (q = (Q = o.SPLIT * _) - (q = Q - _)) - (p = g * _) + L * (c = _ - q) + (a = g - L) * q + a * c, Q = g + (Z = (this._hi - p - Q + this._lo - g * w) / _), this._hi = Q, this._lo = g - Q + Z, this;
          }
        } }, { key: "dump", value: function() {
          return "DD<" + this._hi + ", " + this._lo + ">";
        } }, { key: "divide", value: function() {
          if (arguments[0] instanceof o) {
            var t, i, a, c, g = arguments[0], p = null, _ = null, w = null, L = null;
            return t = (a = this._hi / g._hi) - (p = (w = o.SPLIT * a) - (p = w - a)), L = p * (_ = (L = o.SPLIT * g._hi) - (_ = L - g._hi)) - (c = a * g._hi) + p * (i = g._hi - _) + t * _ + t * i, new o(L = a + (w = (this._hi - c - L + this._lo - a * g._lo) / g._hi), a - L + w);
          }
          if (typeof arguments[0] == "number") {
            var q = arguments[0];
            return K.isNaN(q) ? o.createNaN() : o.copy(this).selfDivide(q, 0);
          }
        } }, { key: "ge", value: function(t) {
          return this._hi > t._hi || this._hi === t._hi && this._lo >= t._lo;
        } }, { key: "pow", value: function(t) {
          if (t === 0) return o.valueOf(1);
          var i = new o(this), a = o.valueOf(1), c = Math.abs(t);
          if (c > 1) for (; c > 0; ) c % 2 == 1 && a.selfMultiply(i), (c /= 2) > 0 && (i = i.sqr());
          else a = i;
          return t < 0 ? a.reciprocal() : a;
        } }, { key: "ceil", value: function() {
          if (this.isNaN()) return o.NaN;
          var t = Math.ceil(this._hi), i = 0;
          return t === this._hi && (i = Math.ceil(this._lo)), new o(t, i);
        } }, { key: "compareTo", value: function(t) {
          var i = t;
          return this._hi < i._hi ? -1 : this._hi > i._hi ? 1 : this._lo < i._lo ? -1 : this._lo > i._lo ? 1 : 0;
        } }, { key: "rint", value: function() {
          return this.isNaN() ? this : this.add(0.5).floor();
        } }, { key: "setValue", value: function() {
          if (arguments[0] instanceof o) {
            var t = arguments[0];
            return this.init(t), this;
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return this.init(i), this;
          }
        } }, { key: "max", value: function(t) {
          return this.ge(t) ? this : t;
        } }, { key: "sqrt", value: function() {
          if (this.isZero()) return o.valueOf(0);
          if (this.isNegative()) return o.NaN;
          var t = 1 / Math.sqrt(this._hi), i = this._hi * t, a = o.valueOf(i), c = this.subtract(a.sqr())._hi * (0.5 * t);
          return a.add(c);
        } }, { key: "selfAdd", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var t = arguments[0];
              return this.selfAdd(t._hi, t._lo);
            }
            if (typeof arguments[0] == "number") {
              var i, a, c, g, p, _ = arguments[0], w = null;
              return w = (c = this._hi + _) - (g = c - this._hi), a = (p = (w = _ - g + (this._hi - w)) + this._lo) + (c - (i = c + p)), this._hi = i + a, this._lo = a + (i - this._hi), this;
            }
          } else if (arguments.length === 2) {
            var L, q, Z, Q, le = arguments[0], fe = arguments[1], ve = null, be = null, Ie = null;
            Z = this._hi + le, q = this._lo + fe, be = Z - (Ie = Z - this._hi), ve = q - (Q = q - this._lo);
            var Fe = (L = Z + (Ie = (be = le - Ie + (this._hi - be)) + q)) + (Ie = (ve = fe - Q + (this._lo - ve)) + (Ie + (Z - L))), ot = Ie + (L - Fe);
            return this._hi = Fe, this._lo = ot, this;
          }
        } }, { key: "selfMultiply", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof o) {
              var t = arguments[0];
              return this.selfMultiply(t._hi, t._lo);
            }
            if (typeof arguments[0] == "number") {
              var i = arguments[0];
              return this.selfMultiply(i, 0);
            }
          } else if (arguments.length === 2) {
            var a, c, g = arguments[0], p = arguments[1], _ = null, w = null, L = null, q = null;
            _ = (L = o.SPLIT * this._hi) - this._hi, q = o.SPLIT * g, _ = L - _, a = this._hi - _, w = q - g;
            var Z = (L = this._hi * g) + (q = _ * (w = q - w) - L + _ * (c = g - w) + a * w + a * c + (this._hi * p + this._lo * g)), Q = q + (_ = L - Z);
            return this._hi = Z, this._lo = Q, this;
          }
        } }, { key: "selfSqr", value: function() {
          return this.selfMultiply(this);
        } }, { key: "floor", value: function() {
          if (this.isNaN()) return o.NaN;
          var t = Math.floor(this._hi), i = 0;
          return t === this._hi && (i = Math.floor(this._lo)), new o(t, i);
        } }, { key: "negate", value: function() {
          return this.isNaN() ? this : new o(-this._hi, -this._lo);
        } }, { key: "clone", value: function() {
          try {
            return null;
          } catch (t) {
            if (t instanceof CloneNotSupportedException) return null;
            throw t;
          }
        } }, { key: "multiply", value: function() {
          if (arguments[0] instanceof o) {
            var t = arguments[0];
            return t.isNaN() ? o.createNaN() : o.copy(this).selfMultiply(t);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return K.isNaN(i) ? o.createNaN() : o.copy(this).selfMultiply(i, 0);
          }
        } }, { key: "isNaN", value: function() {
          return K.isNaN(this._hi);
        } }, { key: "intValue", value: function() {
          return Math.trunc(this._hi);
        } }, { key: "toString", value: function() {
          var t = o.magnitude(this._hi);
          return t >= -3 && t <= 20 ? this.toStandardNotation() : this.toSciNotation();
        } }, { key: "toStandardNotation", value: function() {
          var t = this.getSpecialNumberString();
          if (t !== null) return t;
          var i = new Array(1).fill(null), a = this.extractSignificantDigits(!0, i), c = i[0] + 1, g = a;
          if (a.charAt(0) === ".") g = "0" + a;
          else if (c < 0) g = "0." + o.stringOfChar("0", -c) + a;
          else if (a.indexOf(".") === -1) {
            var p = c - a.length;
            g = a + o.stringOfChar("0", p) + ".0";
          }
          return this.isNegative() ? "-" + g : g;
        } }, { key: "reciprocal", value: function() {
          var t, i, a, c, g = null, p = null, _ = null, w = null;
          t = (a = 1 / this._hi) - (g = (_ = o.SPLIT * a) - (g = _ - a)), p = (w = o.SPLIT * this._hi) - this._hi;
          var L = a + (_ = (1 - (c = a * this._hi) - (w = g * (p = w - p) - c + g * (i = this._hi - p) + t * p + t * i) - a * this._lo) / this._hi);
          return new o(L, a - L + _);
        } }, { key: "toSciNotation", value: function() {
          if (this.isZero()) return o.SCI_NOT_ZERO;
          var t = this.getSpecialNumberString();
          if (t !== null) return t;
          var i = new Array(1).fill(null), a = this.extractSignificantDigits(!1, i), c = o.SCI_NOT_EXPONENT_CHAR + i[0];
          if (a.charAt(0) === "0") throw new IllegalStateException("Found leading zero: " + a);
          var g = "";
          a.length > 1 && (g = a.substring(1));
          var p = a.charAt(0) + "." + g;
          return this.isNegative() ? "-" + p + c : p + c;
        } }, { key: "abs", value: function() {
          return this.isNaN() ? o.NaN : this.isNegative() ? this.negate() : new o(this);
        } }, { key: "isPositive", value: function() {
          return this._hi > 0 || this._hi === 0 && this._lo > 0;
        } }, { key: "lt", value: function(t) {
          return this._hi < t._hi || this._hi === t._hi && this._lo < t._lo;
        } }, { key: "add", value: function() {
          if (arguments[0] instanceof o) {
            var t = arguments[0];
            return o.copy(this).selfAdd(t);
          }
          if (typeof arguments[0] == "number") {
            var i = arguments[0];
            return o.copy(this).selfAdd(i);
          }
        } }, { key: "init", value: function() {
          if (arguments.length === 1) {
            if (typeof arguments[0] == "number") {
              var t = arguments[0];
              this._hi = t, this._lo = 0;
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this._hi = i._hi, this._lo = i._lo;
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this._hi = a, this._lo = c;
          }
        } }, { key: "gt", value: function(t) {
          return this._hi > t._hi || this._hi === t._hi && this._lo > t._lo;
        } }, { key: "isNegative", value: function() {
          return this._hi < 0 || this._hi === 0 && this._lo < 0;
        } }, { key: "trunc", value: function() {
          return this.isNaN() ? o.NaN : this.isPositive() ? this.floor() : this.ceil();
        } }, { key: "signum", value: function() {
          return this._hi > 0 ? 1 : this._hi < 0 ? -1 : this._lo > 0 ? 1 : this._lo < 0 ? -1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [k, $, x];
        } }], [{ key: "constructor_", value: function() {
          if (this._hi = 0, this._lo = 0, arguments.length === 0) this.init(0);
          else if (arguments.length === 1) {
            if (typeof arguments[0] == "number") {
              var t = arguments[0];
              this.init(t);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.init(i);
            } else if (typeof arguments[0] == "string") {
              var a = arguments[0];
              o.constructor_.call(this, o.parse(a));
            }
          } else if (arguments.length === 2) {
            var c = arguments[0], g = arguments[1];
            this.init(c, g);
          }
        } }, { key: "determinant", value: function() {
          if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var t = arguments[0], i = arguments[1], a = arguments[2], c = arguments[3];
            return o.determinant(o.valueOf(t), o.valueOf(i), o.valueOf(a), o.valueOf(c));
          }
          if (arguments[3] instanceof o && arguments[2] instanceof o && arguments[0] instanceof o && arguments[1] instanceof o) {
            var g = arguments[1], p = arguments[2], _ = arguments[3];
            return arguments[0].multiply(_).selfSubtract(g.multiply(p));
          }
        } }, { key: "sqr", value: function(t) {
          return o.valueOf(t).selfMultiply(t);
        } }, { key: "valueOf", value: function() {
          if (typeof arguments[0] == "string") {
            var t = arguments[0];
            return o.parse(t);
          }
          if (typeof arguments[0] == "number") return new o(arguments[0]);
        } }, { key: "sqrt", value: function(t) {
          return o.valueOf(t).sqrt();
        } }, { key: "parse", value: function(t) {
          for (var i = 0, a = t.length; Br.isWhitespace(t.charAt(i)); ) i++;
          var c = !1;
          if (i < a) {
            var g = t.charAt(i);
            g !== "-" && g !== "+" || (i++, g === "-" && (c = !0));
          }
          for (var p = new o(), _ = 0, w = 0, L = 0, q = !1; !(i >= a); ) {
            var Z = t.charAt(i);
            if (i++, Br.isDigit(Z)) {
              var Q = Z - "0";
              p.selfMultiply(o.TEN), p.selfAdd(Q), _++;
            } else {
              if (Z !== ".") {
                if (Z === "e" || Z === "E") {
                  var le = t.substring(i);
                  try {
                    L = en.parseInt(le);
                  } catch (Fe) {
                    throw Fe instanceof NumberFormatException ? new NumberFormatException("Invalid exponent " + le + " in string " + t) : Fe;
                  }
                  break;
                }
                throw new NumberFormatException("Unexpected character '" + Z + "' at position " + i + " in string " + t);
              }
              w = _, q = !0;
            }
          }
          var fe = p;
          q || (w = _);
          var ve = _ - w - L;
          if (ve === 0) fe = p;
          else if (ve > 0) {
            var be = o.TEN.pow(ve);
            fe = p.divide(be);
          } else if (ve < 0) {
            var Ie = o.TEN.pow(-ve);
            fe = p.multiply(Ie);
          }
          return c ? fe.negate() : fe;
        } }, { key: "createNaN", value: function() {
          return new o(K.NaN, K.NaN);
        } }, { key: "copy", value: function(t) {
          return new o(t);
        } }, { key: "magnitude", value: function(t) {
          var i = Math.abs(t), a = Math.log(i) / Math.log(10), c = Math.trunc(Math.floor(a));
          return 10 * Math.pow(10, c) <= i && (c += 1), c;
        } }, { key: "stringOfChar", value: function(t, i) {
          for (var a = new Ft(), c = 0; c < i; c++) a.append(t);
          return a.toString();
        } }]);
      }();
      ye.PI = new ye(3.141592653589793, 12246467991473532e-32), ye.TWO_PI = new ye(6.283185307179586, 24492935982947064e-32), ye.PI_2 = new ye(1.5707963267948966, 6123233995736766e-32), ye.E = new ye(2.718281828459045, 14456468917292502e-32), ye.NaN = new ye(K.NaN, K.NaN), ye.EPS = 123259516440783e-46, ye.SPLIT = 134217729, ye.MAX_PRINT_DIGITS = 32, ye.TEN = ye.valueOf(10), ye.ONE = ye.valueOf(1), ye.SCI_NOT_EXPONENT_CHAR = "E", ye.SCI_NOT_ZERO = "0.0E0";
      var Ur = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "orientationIndex", value: function(t, i, a) {
          var c = o.orientationIndexFilter(t, i, a);
          if (c <= 1) return c;
          var g = ye.valueOf(i.x).selfAdd(-t.x), p = ye.valueOf(i.y).selfAdd(-t.y), _ = ye.valueOf(a.x).selfAdd(-i.x), w = ye.valueOf(a.y).selfAdd(-i.y);
          return g.selfMultiply(w).selfSubtract(p.selfMultiply(_)).signum();
        } }, { key: "signOfDet2x2", value: function() {
          if (arguments[3] instanceof ye && arguments[2] instanceof ye && arguments[0] instanceof ye && arguments[1] instanceof ye) {
            var t = arguments[1], i = arguments[2], a = arguments[3];
            return arguments[0].multiply(a).selfSubtract(t.multiply(i)).signum();
          }
          if (typeof arguments[3] == "number" && typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var c = arguments[0], g = arguments[1], p = arguments[2], _ = arguments[3], w = ye.valueOf(c), L = ye.valueOf(g), q = ye.valueOf(p), Z = ye.valueOf(_);
            return w.multiply(Z).selfSubtract(L.multiply(q)).signum();
          }
        } }, { key: "intersection", value: function(t, i, a, c) {
          var g = new ye(t.y).selfSubtract(i.y), p = new ye(i.x).selfSubtract(t.x), _ = new ye(t.x).selfMultiply(i.y).selfSubtract(new ye(i.x).selfMultiply(t.y)), w = new ye(a.y).selfSubtract(c.y), L = new ye(c.x).selfSubtract(a.x), q = new ye(a.x).selfMultiply(c.y).selfSubtract(new ye(c.x).selfMultiply(a.y)), Z = p.multiply(q).selfSubtract(L.multiply(_)), Q = w.multiply(_).selfSubtract(g.multiply(q)), le = g.multiply(L).selfSubtract(w.multiply(p)), fe = Z.selfDivide(le).doubleValue(), ve = Q.selfDivide(le).doubleValue();
          return K.isNaN(fe) || K.isInfinite(fe) || K.isNaN(ve) || K.isInfinite(ve) ? null : new V(fe, ve);
        } }, { key: "orientationIndexFilter", value: function(t, i, a) {
          var c = null, g = (t.x - a.x) * (i.y - a.y), p = (t.y - a.y) * (i.x - a.x), _ = g - p;
          if (g > 0) {
            if (p <= 0) return o.signum(_);
            c = g + p;
          } else {
            if (!(g < 0) || p >= 0) return o.signum(_);
            c = -g - p;
          }
          var w = o.DP_SAFE_EPSILON * c;
          return _ >= w || -_ >= w ? o.signum(_) : 2;
        } }, { key: "signum", value: function(t) {
          return t > 0 ? 1 : t < 0 ? -1 : 0;
        } }]);
      }();
      Ur.DP_SAFE_EPSILON = 1e-15;
      var ke = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "getM", value: function(o) {
          if (this.hasM()) {
            var t = this.getDimension() - this.getMeasures();
            return this.getOrdinate(o, t);
          }
          return K.NaN;
        } }, { key: "setOrdinate", value: function(o, t, i) {
        } }, { key: "getZ", value: function(o) {
          return this.hasZ() ? this.getOrdinate(o, 2) : K.NaN;
        } }, { key: "size", value: function() {
        } }, { key: "getOrdinate", value: function(o, t) {
        } }, { key: "getCoordinate", value: function() {
        } }, { key: "getCoordinateCopy", value: function(o) {
        } }, { key: "createCoordinate", value: function() {
        } }, { key: "getDimension", value: function() {
        } }, { key: "hasM", value: function() {
          return this.getMeasures() > 0;
        } }, { key: "getX", value: function(o) {
        } }, { key: "hasZ", value: function() {
          return this.getDimension() - this.getMeasures() > 2;
        } }, { key: "getMeasures", value: function() {
          return 0;
        } }, { key: "expandEnvelope", value: function(o) {
        } }, { key: "copy", value: function() {
        } }, { key: "getY", value: function(o) {
        } }, { key: "toCoordinateArray", value: function() {
        } }, { key: "interfaces_", get: function() {
          return [x];
        } }]);
      }();
      ke.X = 0, ke.Y = 1, ke.Z = 2, ke.M = 3;
      var _e = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "index", value: function(t, i, a) {
          return Ur.orientationIndex(t, i, a);
        } }, { key: "isCCW", value: function() {
          if (arguments[0] instanceof Array) {
            var t = arguments[0], i = t.length - 1;
            if (i < 3) throw new X("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var a = t[0], c = 0, g = 1; g <= i; g++) {
              var p = t[g];
              p.y > a.y && (a = p, c = g);
            }
            var _ = c;
            do
              (_ -= 1) < 0 && (_ = i);
            while (t[_].equals2D(a) && _ !== c);
            var w = c;
            do
              w = (w + 1) % i;
            while (t[w].equals2D(a) && w !== c);
            var L = t[_], q = t[w];
            if (L.equals2D(a) || q.equals2D(a) || L.equals2D(q)) return !1;
            var Z = o.index(L, a, q);
            return Z === 0 ? L.x > q.x : Z > 0;
          }
          if (Ee(arguments[0], ke)) {
            var Q = arguments[0], le = Q.size() - 1;
            if (le < 3) throw new X("Ring has fewer than 4 points, so orientation cannot be determined");
            for (var fe = Q.getCoordinate(0), ve = 0, be = 1; be <= le; be++) {
              var Ie = Q.getCoordinate(be);
              Ie.y > fe.y && (fe = Ie, ve = be);
            }
            var Fe = null, ot = ve;
            do
              (ot -= 1) < 0 && (ot = le), Fe = Q.getCoordinate(ot);
            while (Fe.equals2D(fe) && ot !== ve);
            var ct = null, Er = ve;
            do
              Er = (Er + 1) % le, ct = Q.getCoordinate(Er);
            while (ct.equals2D(fe) && Er !== ve);
            if (Fe.equals2D(fe) || ct.equals2D(fe) || Fe.equals2D(ct)) return !1;
            var Ui = o.index(Fe, fe, ct);
            return Ui === 0 ? Fe.x > ct.x : Ui > 0;
          }
        } }]);
      }();
      _e.CLOCKWISE = -1, _e.RIGHT = _e.CLOCKWISE, _e.COUNTERCLOCKWISE = 1, _e.LEFT = _e.COUNTERCLOCKWISE, _e.COLLINEAR = 0, _e.STRAIGHT = _e.COLLINEAR;
      var zr = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getCoordinate", value: function() {
          return this._minCoord;
        } }, { key: "getRightmostSide", value: function(o, t) {
          var i = this.getRightmostSideOfSegment(o, t);
          return i < 0 && (i = this.getRightmostSideOfSegment(o, t - 1)), i < 0 && (this._minCoord = null, this.checkForRightmostCoordinate(o)), i;
        } }, { key: "findRightmostEdgeAtVertex", value: function() {
          var o = this._minDe.getEdge().getCoordinates();
          ae.isTrue(this._minIndex > 0 && this._minIndex < o.length, "rightmost point expected to be interior vertex of edge");
          var t = o[this._minIndex - 1], i = o[this._minIndex + 1], a = _e.index(this._minCoord, i, t), c = !1;
          (t.y < this._minCoord.y && i.y < this._minCoord.y && a === _e.COUNTERCLOCKWISE || t.y > this._minCoord.y && i.y > this._minCoord.y && a === _e.CLOCKWISE) && (c = !0), c && (this._minIndex = this._minIndex - 1);
        } }, { key: "getRightmostSideOfSegment", value: function(o, t) {
          var i = o.getEdge().getCoordinates();
          if (t < 0 || t + 1 >= i.length || i[t].y === i[t + 1].y) return -1;
          var a = te.LEFT;
          return i[t].y < i[t + 1].y && (a = te.RIGHT), a;
        } }, { key: "getEdge", value: function() {
          return this._orientedDe;
        } }, { key: "checkForRightmostCoordinate", value: function(o) {
          for (var t = o.getEdge().getCoordinates(), i = 0; i < t.length - 1; i++) (this._minCoord === null || t[i].x > this._minCoord.x) && (this._minDe = o, this._minIndex = i, this._minCoord = t[i]);
        } }, { key: "findRightmostEdgeAtNode", value: function() {
          var o = this._minDe.getNode().getEdges();
          this._minDe = o.getRightmostEdge(), this._minDe.isForward() || (this._minDe = this._minDe.getSym(), this._minIndex = this._minDe.getEdge().getCoordinates().length - 1);
        } }, { key: "findEdge", value: function(o) {
          for (var t = o.iterator(); t.hasNext(); ) {
            var i = t.next();
            i.isForward() && this.checkForRightmostCoordinate(i);
          }
          ae.isTrue(this._minIndex !== 0 || this._minCoord.equals(this._minDe.getCoordinate()), "inconsistency in rightmost processing"), this._minIndex === 0 ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex(), this._orientedDe = this._minDe, this.getRightmostSide(this._minDe, this._minIndex) === te.LEFT && (this._orientedDe = this._minDe.getSym());
        } }], [{ key: "constructor_", value: function() {
          this._minIndex = -1, this._minCoord = null, this._minDe = null, this._orientedDe = null;
        } }]);
      }(), wt = function(o) {
        function t(i, a) {
          var c;
          return u(this, t), (c = s(this, t, [a ? i + " [ " + a + " ]" : i])).pt = a ? new V(a) : void 0, c.name = Object.keys({ TopologyException: t })[0], c;
        }
        return y(t, o), h(t, [{ key: "getCoordinate", value: function() {
          return this.pt;
        } }]);
      }(de), tn = function() {
        return h(function o() {
          u(this, o), this.array = [];
        }, [{ key: "addLast", value: function(o) {
          this.array.push(o);
        } }, { key: "removeFirst", value: function() {
          return this.array.shift();
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }]);
      }(), pe = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t)).array = [], i instanceof Oe && a.addAll(i), a;
        }
        return y(t, o), h(t, [{ key: "interfaces_", get: function() {
          return [Pn, Oe];
        } }, { key: "ensureCapacity", value: function() {
        } }, { key: "add", value: function(i) {
          return arguments.length === 1 ? this.array.push(i) : this.array.splice(arguments[0], 0, arguments[1]), !0;
        } }, { key: "clear", value: function() {
          this.array = [];
        } }, { key: "addAll", value: function(i) {
          var a, c = m(i);
          try {
            for (c.s(); !(a = c.n()).done; ) {
              var g = a.value;
              this.array.push(g);
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
        } }, { key: "set", value: function(i, a) {
          var c = this.array[i];
          return this.array[i] = a, c;
        } }, { key: "iterator", value: function() {
          return new Ai(this);
        } }, { key: "get", value: function(i) {
          if (i < 0 || i >= this.size()) throw new Li();
          return this.array[i];
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }, { key: "sort", value: function(i) {
          i ? this.array.sort(function(a, c) {
            return i.compare(a, c);
          }) : this.array.sort();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "remove", value: function(i) {
          for (var a = 0, c = this.array.length; a < c; a++) if (this.array[a] === i) return !!this.array.splice(a, 1);
          return !1;
        } }, { key: Symbol.iterator, value: function() {
          return this.array.values();
        } }]);
      }(Pn), Ai = function() {
        return h(function o(t) {
          u(this, o), this.arrayList = t, this.position = 0;
        }, [{ key: "next", value: function() {
          if (this.position === this.arrayList.size()) throw new Pe();
          return this.arrayList.get(this.position++);
        } }, { key: "hasNext", value: function() {
          return this.position < this.arrayList.size();
        } }, { key: "set", value: function(o) {
          return this.arrayList.set(this.position - 1, o);
        } }, { key: "remove", value: function() {
          this.arrayList.remove(this.arrayList.get(this.position));
        } }]);
      }(), Ci = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "clearVisitedEdges", value: function() {
          for (var o = this._dirEdgeList.iterator(); o.hasNext(); )
            o.next().setVisited(!1);
        } }, { key: "getRightmostCoordinate", value: function() {
          return this._rightMostCoord;
        } }, { key: "computeNodeDepth", value: function(o) {
          for (var t = null, i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            if (a.isVisited() || a.getSym().isVisited()) {
              t = a;
              break;
            }
          }
          if (t === null) throw new wt("unable to find edge to compute depths at " + o.getCoordinate());
          o.getEdges().computeDepths(t);
          for (var c = o.getEdges().iterator(); c.hasNext(); ) {
            var g = c.next();
            g.setVisited(!0), this.copySymDepths(g);
          }
        } }, { key: "computeDepth", value: function(o) {
          this.clearVisitedEdges();
          var t = this._finder.getEdge();
          t.getNode(), t.getLabel(), t.setEdgeDepths(te.RIGHT, o), this.copySymDepths(t), this.computeDepths(t);
        } }, { key: "create", value: function(o) {
          this.addReachable(o), this._finder.findEdge(this._dirEdgeList), this._rightMostCoord = this._finder.getCoordinate();
        } }, { key: "findResultEdges", value: function() {
          for (var o = this._dirEdgeList.iterator(); o.hasNext(); ) {
            var t = o.next();
            t.getDepth(te.RIGHT) >= 1 && t.getDepth(te.LEFT) <= 0 && !t.isInteriorAreaEdge() && t.setInResult(!0);
          }
        } }, { key: "computeDepths", value: function(o) {
          var t = new pn(), i = new tn(), a = o.getNode();
          for (i.addLast(a), t.add(a), o.setVisited(!0); !i.isEmpty(); ) {
            var c = i.removeFirst();
            t.add(c), this.computeNodeDepth(c);
            for (var g = c.getEdges().iterator(); g.hasNext(); ) {
              var p = g.next().getSym();
              if (!p.isVisited()) {
                var _ = p.getNode();
                t.contains(_) || (i.addLast(_), t.add(_));
              }
            }
          }
        } }, { key: "compareTo", value: function(o) {
          var t = o;
          return this._rightMostCoord.x < t._rightMostCoord.x ? -1 : this._rightMostCoord.x > t._rightMostCoord.x ? 1 : 0;
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            for (var o = new Le(), t = this._dirEdgeList.iterator(); t.hasNext(); ) for (var i = t.next().getEdge().getCoordinates(), a = 0; a < i.length - 1; a++) o.expandToInclude(i[a]);
            this._env = o;
          }
          return this._env;
        } }, { key: "addReachable", value: function(o) {
          var t = new bi();
          for (t.add(o); !t.empty(); ) {
            var i = t.pop();
            this.add(i, t);
          }
        } }, { key: "copySymDepths", value: function(o) {
          var t = o.getSym();
          t.setDepth(te.LEFT, o.getDepth(te.RIGHT)), t.setDepth(te.RIGHT, o.getDepth(te.LEFT));
        } }, { key: "add", value: function(o, t) {
          o.setVisited(!0), this._nodes.add(o);
          for (var i = o.getEdges().iterator(); i.hasNext(); ) {
            var a = i.next();
            this._dirEdgeList.add(a);
            var c = a.getSym().getNode();
            c.isVisited() || t.push(c);
          }
        } }, { key: "getNodes", value: function() {
          return this._nodes;
        } }, { key: "getDirectedEdges", value: function() {
          return this._dirEdgeList;
        } }, { key: "interfaces_", get: function() {
          return [$];
        } }], [{ key: "constructor_", value: function() {
          this._finder = null, this._dirEdgeList = new pe(), this._nodes = new pe(), this._rightMostCoord = null, this._env = null, this._finder = new zr();
        } }]);
      }(), Ti = function() {
        return h(function o() {
          u(this, o);
        }, null, [{ key: "intersection", value: function(o, t, i, a) {
          var c = o.x < t.x ? o.x : t.x, g = o.y < t.y ? o.y : t.y, p = o.x > t.x ? o.x : t.x, _ = o.y > t.y ? o.y : t.y, w = i.x < a.x ? i.x : a.x, L = i.y < a.y ? i.y : a.y, q = i.x > a.x ? i.x : a.x, Z = i.y > a.y ? i.y : a.y, Q = ((c > w ? c : w) + (p < q ? p : q)) / 2, le = ((g > L ? g : L) + (_ < Z ? _ : Z)) / 2, fe = o.x - Q, ve = o.y - le, be = t.x - Q, Ie = t.y - le, Fe = i.x - Q, ot = i.y - le, ct = a.x - Q, Er = a.y - le, Ui = ve - Ie, Wl = be - fe, Zl = fe * Ie - be * ve, jl = ot - Er, $l = ct - Fe, Kl = Fe * Er - ct * ot, Ql = Ui * $l - jl * Wl, yo = (Wl * Kl - $l * Zl) / Ql, _o = (jl * Zl - Ui * Kl) / Ql;
          return K.isNaN(yo) || K.isInfinite(yo) || K.isNaN(_o) || K.isInfinite(_o) ? null : new V(yo + Q, _o + le);
        } }]);
      }(), at = function() {
        return h(function o() {
          u(this, o);
        }, null, [{ key: "arraycopy", value: function(o, t, i, a, c) {
          for (var g = 0, p = t; p < t + c; p++) i[a + g] = o[p], g++;
        } }, { key: "getProperty", value: function(o) {
          return { "line.separator": `
` }[o];
        } }]);
      }(), mn = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "log10", value: function(t) {
          var i = Math.log(t);
          return K.isInfinite(i) || K.isNaN(i) ? i : i / o.LOG_10;
        } }, { key: "min", value: function(t, i, a, c) {
          var g = t;
          return i < g && (g = i), a < g && (g = a), c < g && (g = c), g;
        } }, { key: "clamp", value: function() {
          if (typeof arguments[2] == "number" && typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var t = arguments[0], i = arguments[1], a = arguments[2];
            return t < i ? i : t > a ? a : t;
          }
          if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
            var c = arguments[0], g = arguments[1], p = arguments[2];
            return c < g ? g : c > p ? p : c;
          }
        } }, { key: "wrap", value: function(t, i) {
          return t < 0 ? i - -t % i : t % i;
        } }, { key: "max", value: function() {
          if (arguments.length === 3) {
            var t = arguments[1], i = arguments[2], a = arguments[0];
            return t > a && (a = t), i > a && (a = i), a;
          }
          if (arguments.length === 4) {
            var c = arguments[1], g = arguments[2], p = arguments[3], _ = arguments[0];
            return c > _ && (_ = c), g > _ && (_ = g), p > _ && (_ = p), _;
          }
        } }, { key: "average", value: function(t, i) {
          return (t + i) / 2;
        } }]);
      }();
      mn.LOG_10 = Math.log(10);
      var Gt = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "segmentToSegment", value: function(t, i, a, c) {
          if (t.equals(i)) return o.pointToSegment(t, a, c);
          if (a.equals(c)) return o.pointToSegment(c, t, i);
          var g = !1;
          if (Le.intersects(t, i, a, c)) {
            var p = (i.x - t.x) * (c.y - a.y) - (i.y - t.y) * (c.x - a.x);
            if (p === 0) g = !0;
            else {
              var _ = (t.y - a.y) * (c.x - a.x) - (t.x - a.x) * (c.y - a.y), w = ((t.y - a.y) * (i.x - t.x) - (t.x - a.x) * (i.y - t.y)) / p, L = _ / p;
              (L < 0 || L > 1 || w < 0 || w > 1) && (g = !0);
            }
          } else g = !0;
          return g ? mn.min(o.pointToSegment(t, a, c), o.pointToSegment(i, a, c), o.pointToSegment(a, t, i), o.pointToSegment(c, t, i)) : 0;
        } }, { key: "pointToSegment", value: function(t, i, a) {
          if (i.x === a.x && i.y === a.y) return t.distance(i);
          var c = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((t.x - i.x) * (a.x - i.x) + (t.y - i.y) * (a.y - i.y)) / c;
          if (g <= 0) return t.distance(i);
          if (g >= 1) return t.distance(a);
          var p = ((i.y - t.y) * (a.x - i.x) - (i.x - t.x) * (a.y - i.y)) / c;
          return Math.abs(p) * Math.sqrt(c);
        } }, { key: "pointToLinePerpendicular", value: function(t, i, a) {
          var c = (a.x - i.x) * (a.x - i.x) + (a.y - i.y) * (a.y - i.y), g = ((i.y - t.y) * (a.x - i.x) - (i.x - t.x) * (a.y - i.y)) / c;
          return Math.abs(g) * Math.sqrt(c);
        } }, { key: "pointToSegmentString", value: function(t, i) {
          if (i.length === 0) throw new X("Line array must contain at least one vertex");
          for (var a = t.distance(i[0]), c = 0; c < i.length - 1; c++) {
            var g = o.pointToSegment(t, i[c], i[c + 1]);
            g < a && (a = g);
          }
          return a;
        } }]);
      }(), $n = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "create", value: function() {
          if (arguments.length === 1) arguments[0] instanceof Array || Ee(arguments[0], ke);
          else if (arguments.length !== 2) {
            if (arguments.length === 3) {
              var o = arguments[0], t = arguments[1];
              return this.create(o, t);
            }
          }
        } }]);
      }(), qr = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "filter", value: function(o) {
        } }]);
      }(), ao = function() {
        return h(function o() {
          u(this, o);
        }, null, [{ key: "ofLine", value: function(o) {
          var t = o.size();
          if (t <= 1) return 0;
          var i = 0, a = new V();
          o.getCoordinate(0, a);
          for (var c = a.x, g = a.y, p = 1; p < t; p++) {
            o.getCoordinate(p, a);
            var _ = a.x, w = a.y, L = _ - c, q = w - g;
            i += Math.sqrt(L * L + q * q), c = _, g = w;
          }
          return i;
        } }]);
      }(), Ze = h(function o() {
        u(this, o);
      }), kt = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "copyCoord", value: function(t, i, a, c) {
          for (var g = Math.min(t.getDimension(), a.getDimension()), p = 0; p < g; p++) a.setOrdinate(c, p, t.getOrdinate(i, p));
        } }, { key: "isRing", value: function(t) {
          var i = t.size();
          return i === 0 || !(i <= 3) && t.getOrdinate(0, ke.X) === t.getOrdinate(i - 1, ke.X) && t.getOrdinate(0, ke.Y) === t.getOrdinate(i - 1, ke.Y);
        } }, { key: "scroll", value: function() {
          if (arguments.length === 2) {
            if (Ee(arguments[0], ke) && Number.isInteger(arguments[1])) {
              var t = arguments[0], i = arguments[1];
              o.scroll(t, i, o.isRing(t));
            } else if (Ee(arguments[0], ke) && arguments[1] instanceof V) {
              var a = arguments[0], c = arguments[1], g = o.indexOf(c, a);
              if (g <= 0) return null;
              o.scroll(a, g);
            }
          } else if (arguments.length === 3) {
            var p = arguments[0], _ = arguments[1], w = arguments[2];
            if (_ <= 0) return null;
            for (var L = p.copy(), q = w ? p.size() - 1 : p.size(), Z = 0; Z < q; Z++) for (var Q = 0; Q < p.getDimension(); Q++) p.setOrdinate(Z, Q, L.getOrdinate((_ + Z) % q, Q));
            if (w) for (var le = 0; le < p.getDimension(); le++) p.setOrdinate(q, le, p.getOrdinate(0, le));
          }
        } }, { key: "isEqual", value: function(t, i) {
          var a = t.size();
          if (a !== i.size()) return !1;
          for (var c = Math.min(t.getDimension(), i.getDimension()), g = 0; g < a; g++) for (var p = 0; p < c; p++) {
            var _ = t.getOrdinate(g, p), w = i.getOrdinate(g, p);
            if (t.getOrdinate(g, p) !== i.getOrdinate(g, p) && (!K.isNaN(_) || !K.isNaN(w))) return !1;
          }
          return !0;
        } }, { key: "minCoordinateIndex", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            return o.minCoordinateIndex(t, 0, t.size() - 1);
          }
          if (arguments.length === 3) {
            for (var i = arguments[0], a = arguments[2], c = -1, g = null, p = arguments[1]; p <= a; p++) {
              var _ = i.getCoordinate(p);
              (g === null || g.compareTo(_) > 0) && (g = _, c = p);
            }
            return c;
          }
        } }, { key: "extend", value: function(t, i, a) {
          var c = t.create(a, i.getDimension()), g = i.size();
          if (o.copy(i, 0, c, 0, g), g > 0) for (var p = g; p < a; p++) o.copy(i, g - 1, c, p, 1);
          return c;
        } }, { key: "reverse", value: function(t) {
          for (var i = t.size() - 1, a = Math.trunc(i / 2), c = 0; c <= a; c++) o.swap(t, c, i - c);
        } }, { key: "swap", value: function(t, i, a) {
          if (i === a) return null;
          for (var c = 0; c < t.getDimension(); c++) {
            var g = t.getOrdinate(i, c);
            t.setOrdinate(i, c, t.getOrdinate(a, c)), t.setOrdinate(a, c, g);
          }
        } }, { key: "copy", value: function(t, i, a, c, g) {
          for (var p = 0; p < g; p++) o.copyCoord(t, i + p, a, c + p);
        } }, { key: "ensureValidRing", value: function(t, i) {
          var a = i.size();
          return a === 0 ? i : a <= 3 ? o.createClosedRing(t, i, 4) : i.getOrdinate(0, ke.X) === i.getOrdinate(a - 1, ke.X) && i.getOrdinate(0, ke.Y) === i.getOrdinate(a - 1, ke.Y) ? i : o.createClosedRing(t, i, a + 1);
        } }, { key: "indexOf", value: function(t, i) {
          for (var a = 0; a < i.size(); a++) if (t.x === i.getOrdinate(a, ke.X) && t.y === i.getOrdinate(a, ke.Y)) return a;
          return -1;
        } }, { key: "createClosedRing", value: function(t, i, a) {
          var c = t.create(a, i.getDimension()), g = i.size();
          o.copy(i, 0, c, 0, g);
          for (var p = g; p < a; p++) o.copy(i, 0, c, p, 1);
          return c;
        } }, { key: "minCoordinate", value: function(t) {
          for (var i = null, a = 0; a < t.size(); a++) {
            var c = t.getCoordinate(a);
            (i === null || i.compareTo(c) > 0) && (i = c);
          }
          return i;
        } }]);
      }(), se = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDimensionSymbol", value: function(t) {
          switch (t) {
            case o.FALSE:
              return o.SYM_FALSE;
            case o.TRUE:
              return o.SYM_TRUE;
            case o.DONTCARE:
              return o.SYM_DONTCARE;
            case o.P:
              return o.SYM_P;
            case o.L:
              return o.SYM_L;
            case o.A:
              return o.SYM_A;
          }
          throw new X("Unknown dimension value: " + t);
        } }, { key: "toDimensionValue", value: function(t) {
          switch (Br.toUpperCase(t)) {
            case o.SYM_FALSE:
              return o.FALSE;
            case o.SYM_TRUE:
              return o.TRUE;
            case o.SYM_DONTCARE:
              return o.DONTCARE;
            case o.SYM_P:
              return o.P;
            case o.SYM_L:
              return o.L;
            case o.SYM_A:
              return o.A;
          }
          throw new X("Unknown dimension symbol: " + t);
        } }]);
      }();
      se.P = 0, se.L = 1, se.A = 2, se.FALSE = -1, se.TRUE = -2, se.DONTCARE = -3, se.SYM_FALSE = "F", se.SYM_TRUE = "T", se.SYM_DONTCARE = "*", se.SYM_P = "0", se.SYM_L = "1", se.SYM_A = "2";
      var mr = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "filter", value: function(o) {
        } }]);
      }(), Kn = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "filter", value: function(o, t) {
        } }, { key: "isDone", value: function() {
        } }, { key: "isGeometryChanged", value: function() {
        } }]);
      }(), Qn = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "computeEnvelopeInternal", value: function() {
          return this.isEmpty() ? new Le() : this._points.expandEnvelope(new Le());
        } }, { key: "isRing", value: function() {
          return this.isClosed() && this.isSimple();
        } }, { key: "getCoordinates", value: function() {
          return this._points.toCoordinateArray();
        } }, { key: "copyInternal", value: function() {
          return new t(this._points.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var c = i;
            if (this._points.size() !== c._points.size()) return !1;
            for (var g = 0; g < this._points.size(); g++) if (!this.equal(this._points.getCoordinate(g), c._points.getCoordinate(g), a)) return !1;
            return !0;
          }
          return M(t, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var i = 0; i < Math.trunc(this._points.size() / 2); i++) {
            var a = this._points.size() - 1 - i;
            if (!this._points.getCoordinate(i).equals(this._points.getCoordinate(a))) {
              if (this._points.getCoordinate(i).compareTo(this._points.getCoordinate(a)) > 0) {
                var c = this._points.copy();
                kt.reverse(c), this._points = c;
              }
              return null;
            }
          }
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._points.getCoordinate(0);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? se.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          return !this.isEmpty() && this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints() - 1));
        } }, { key: "reverseInternal", value: function() {
          var i = this._points.copy();
          return kt.reverse(i), this.getFactory().createLineString(i);
        } }, { key: "getEndPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_LINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getLength", value: function() {
          return ao.ofLine(this._points);
        } }, { key: "getNumPoints", value: function() {
          return this._points.size();
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            for (var i = arguments[0], a = 0, c = 0; a < this._points.size() && c < i._points.size(); ) {
              var g = this._points.getCoordinate(a).compareTo(i._points.getCoordinate(c));
              if (g !== 0) return g;
              a++, c++;
            }
            return a < this._points.size() ? 1 : c < i._points.size() ? -1 : 0;
          }
          if (arguments.length === 2) {
            var p = arguments[0];
            return arguments[1].compare(this._points, p._points);
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], qr)) for (var i = arguments[0], a = 0; a < this._points.size(); a++) i.filter(this._points.getCoordinate(a));
          else if (Ee(arguments[0], Kn)) {
            var c = arguments[0];
            if (this._points.size() === 0) return null;
            for (var g = 0; g < this._points.size() && (c.filter(this._points, g), !c.isDone()); g++) ;
            c.isGeometryChanged() && this.geometryChanged();
          } else Ee(arguments[0], mr) ? arguments[0].filter(this) : Ee(arguments[0], W) && arguments[0].filter(this);
        } }, { key: "getBoundary", value: function() {
          throw new Se();
        } }, { key: "isEquivalentClass", value: function(i) {
          return i instanceof t;
        } }, { key: "getCoordinateN", value: function(i) {
          return this._points.getCoordinate(i);
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_LINESTRING;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._points;
        } }, { key: "isEmpty", value: function() {
          return this._points.size() === 0;
        } }, { key: "init", value: function(i) {
          if (i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), i.size() === 1) throw new X("Invalid number of points in LineString (found " + i.size() + " - must be 0 or >= 2)");
          this._points = i;
        } }, { key: "isCoordinate", value: function(i) {
          for (var a = 0; a < this._points.size(); a++) if (this._points.getCoordinate(a).equals(i)) return !0;
          return !1;
        } }, { key: "getStartPoint", value: function() {
          return this.isEmpty() ? null : this.getPointN(0);
        } }, { key: "getPointN", value: function(i) {
          return this.getFactory().createPoint(this._points.getCoordinate(i));
        } }, { key: "interfaces_", get: function() {
          return [Ze];
        } }], [{ key: "constructor_", value: function() {
          if (this._points = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              he.constructor_.call(this, a), this.init(i);
            }
          }
        } }]);
      }(he), Ni = h(function o() {
        u(this, o);
      }), Pi = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "computeEnvelopeInternal", value: function() {
          if (this.isEmpty()) return new Le();
          var i = new Le();
          return i.expandToInclude(this._coordinates.getX(0), this._coordinates.getY(0)), i;
        } }, { key: "getCoordinates", value: function() {
          return this.isEmpty() ? [] : [this.getCoordinate()];
        } }, { key: "copyInternal", value: function() {
          return new t(this._coordinates.copy(), this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && (!(!this.isEmpty() || !i.isEmpty()) || this.isEmpty() === i.isEmpty() && this.equal(i.getCoordinate(), this.getCoordinate(), a));
          }
          return M(t, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
        } }, { key: "getCoordinate", value: function() {
          return this._coordinates.size() !== 0 ? this._coordinates.getCoordinate(0) : null;
        } }, { key: "getBoundaryDimension", value: function() {
          return se.FALSE;
        } }, { key: "reverseInternal", value: function() {
          return this.getFactory().createPoint(this._coordinates.copy());
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_POINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getNumPoints", value: function() {
          return this.isEmpty() ? 0 : 1;
        } }, { key: "getX", value: function() {
          if (this.getCoordinate() === null) throw new IllegalStateException("getX called on empty Point");
          return this.getCoordinate().x;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return this.getCoordinate().compareTo(i.getCoordinate());
          }
          if (arguments.length === 2) {
            var a = arguments[0];
            return arguments[1].compare(this._coordinates, a._coordinates);
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], qr)) {
            var i = arguments[0];
            if (this.isEmpty()) return null;
            i.filter(this.getCoordinate());
          } else if (Ee(arguments[0], Kn)) {
            var a = arguments[0];
            if (this.isEmpty()) return null;
            a.filter(this._coordinates, 0), a.isGeometryChanged() && this.geometryChanged();
          } else Ee(arguments[0], mr) ? arguments[0].filter(this) : Ee(arguments[0], W) && arguments[0].filter(this);
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_POINT;
        } }, { key: "getCoordinateSequence", value: function() {
          return this._coordinates;
        } }, { key: "getY", value: function() {
          if (this.getCoordinate() === null) throw new IllegalStateException("getY called on empty Point");
          return this.getCoordinate().y;
        } }, { key: "isEmpty", value: function() {
          return this._coordinates.size() === 0;
        } }, { key: "init", value: function(i) {
          i === null && (i = this.getFactory().getCoordinateSequenceFactory().create([])), ae.isTrue(i.size() <= 1), this._coordinates = i;
        } }, { key: "isSimple", value: function() {
          return !0;
        } }, { key: "interfaces_", get: function() {
          return [Ni];
        } }], [{ key: "constructor_", value: function() {
          this._coordinates = null;
          var i = arguments[0], a = arguments[1];
          he.constructor_.call(this, a), this.init(i);
        } }]);
      }(he), bt = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "ofRing", value: function() {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            return Math.abs(o.ofRingSigned(t));
          }
          if (Ee(arguments[0], ke)) {
            var i = arguments[0];
            return Math.abs(o.ofRingSigned(i));
          }
        } }, { key: "ofRingSigned", value: function() {
          if (arguments[0] instanceof Array) {
            var t = arguments[0];
            if (t.length < 3) return 0;
            for (var i = 0, a = t[0].x, c = 1; c < t.length - 1; c++) {
              var g = t[c].x - a, p = t[c + 1].y;
              i += g * (t[c - 1].y - p);
            }
            return i / 2;
          }
          if (Ee(arguments[0], ke)) {
            var _ = arguments[0], w = _.size();
            if (w < 3) return 0;
            var L = new V(), q = new V(), Z = new V();
            _.getCoordinate(0, q), _.getCoordinate(1, Z);
            var Q = q.x;
            Z.x -= Q;
            for (var le = 0, fe = 1; fe < w - 1; fe++) L.y = q.y, q.x = Z.x, q.y = Z.y, _.getCoordinate(fe + 1, Z), Z.x -= Q, le += q.x * (L.y - Z.y);
            return le / 2;
          }
        } }]);
      }(), Bt = function() {
        return h(function o() {
          u(this, o);
        }, null, [{ key: "sort", value: function() {
          var o = arguments, t = arguments[0];
          if (arguments.length === 1) t.sort(function(Q, le) {
            return Q.compareTo(le);
          });
          else if (arguments.length === 2) t.sort(function(Q, le) {
            return o[1].compare(Q, le);
          });
          else if (arguments.length === 3) {
            var i = t.slice(arguments[1], arguments[2]);
            i.sort();
            var a = t.slice(0, arguments[1]).concat(i, t.slice(arguments[2], t.length));
            t.splice(0, t.length);
            var c, g = m(a);
            try {
              for (g.s(); !(c = g.n()).done; ) {
                var p = c.value;
                t.push(p);
              }
            } catch (Q) {
              g.e(Q);
            } finally {
              g.f();
            }
          } else if (arguments.length === 4) {
            var _ = t.slice(arguments[1], arguments[2]);
            _.sort(function(Q, le) {
              return o[3].compare(Q, le);
            });
            var w = t.slice(0, arguments[1]).concat(_, t.slice(arguments[2], t.length));
            t.splice(0, t.length);
            var L, q = m(w);
            try {
              for (q.s(); !(L = q.n()).done; ) {
                var Z = L.value;
                t.push(Z);
              }
            } catch (Q) {
              q.e(Q);
            } finally {
              q.f();
            }
          }
        } }, { key: "asList", value: function(o) {
          var t, i = new pe(), a = m(o);
          try {
            for (a.s(); !(t = a.n()).done; ) {
              var c = t.value;
              i.add(c);
            }
          } catch (g) {
            a.e(g);
          } finally {
            a.f();
          }
          return i;
        } }, { key: "copyOf", value: function(o, t) {
          return o.slice(0, t);
        } }]);
      }(), Oi = h(function o() {
        u(this, o);
      }), vr = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "computeEnvelopeInternal", value: function() {
          return this._shell.getEnvelopeInternal();
        } }, { key: "getCoordinates", value: function() {
          if (this.isEmpty()) return [];
          for (var i = new Array(this.getNumPoints()).fill(null), a = -1, c = this._shell.getCoordinates(), g = 0; g < c.length; g++) i[++a] = c[g];
          for (var p = 0; p < this._holes.length; p++) for (var _ = this._holes[p].getCoordinates(), w = 0; w < _.length; w++) i[++a] = _[w];
          return i;
        } }, { key: "getArea", value: function() {
          var i = 0;
          i += bt.ofRing(this._shell.getCoordinateSequence());
          for (var a = 0; a < this._holes.length; a++) i -= bt.ofRing(this._holes[a].getCoordinateSequence());
          return i;
        } }, { key: "copyInternal", value: function() {
          for (var i = this._shell.copy(), a = new Array(this._holes.length).fill(null), c = 0; c < this._holes.length; c++) a[c] = this._holes[c].copy();
          return new t(i, a, this._factory);
        } }, { key: "isRectangle", value: function() {
          if (this.getNumInteriorRing() !== 0 || this._shell === null || this._shell.getNumPoints() !== 5) return !1;
          for (var i = this._shell.getCoordinateSequence(), a = this.getEnvelopeInternal(), c = 0; c < 5; c++) {
            var g = i.getX(c);
            if (g !== a.getMinX() && g !== a.getMaxX()) return !1;
            var p = i.getY(c);
            if (p !== a.getMinY() && p !== a.getMaxY()) return !1;
          }
          for (var _ = i.getX(0), w = i.getY(0), L = 1; L <= 4; L++) {
            var q = i.getX(L), Z = i.getY(L);
            if (q !== _ == (Z !== w)) return !1;
            _ = q, w = Z;
          }
          return !0;
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var c = i, g = this._shell, p = c._shell;
            if (!g.equalsExact(p, a) || this._holes.length !== c._holes.length) return !1;
            for (var _ = 0; _ < this._holes.length; _++) if (!this._holes[_].equalsExact(c._holes[_], a)) return !1;
            return !0;
          }
          return M(t, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          if (arguments.length === 0) {
            this._shell = this.normalized(this._shell, !0);
            for (var i = 0; i < this._holes.length; i++) this._holes[i] = this.normalized(this._holes[i], !1);
            Bt.sort(this._holes);
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            if (a.isEmpty()) return null;
            var g = a.getCoordinateSequence(), p = kt.minCoordinateIndex(g, 0, g.size() - 2);
            kt.scroll(g, p, !0), _e.isCCW(g) === c && kt.reverse(g);
          }
        } }, { key: "getCoordinate", value: function() {
          return this._shell.getCoordinate();
        } }, { key: "getNumInteriorRing", value: function() {
          return this._holes.length;
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "reverseInternal", value: function() {
          for (var i = this.getExteriorRing().reverse(), a = new Array(this.getNumInteriorRing()).fill(null), c = 0; c < a.length; c++) a[c] = this.getInteriorRingN(c).reverse();
          return this.getFactory().createPolygon(i, a);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_POLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getLength", value: function() {
          var i = 0;
          i += this._shell.getLength();
          for (var a = 0; a < this._holes.length; a++) i += this._holes[a].getLength();
          return i;
        } }, { key: "getNumPoints", value: function() {
          for (var i = this._shell.getNumPoints(), a = 0; a < this._holes.length; a++) i += this._holes[a].getNumPoints();
          return i;
        } }, { key: "convexHull", value: function() {
          return this.getExteriorRing().convexHull();
        } }, { key: "normalized", value: function(i, a) {
          var c = i.copy();
          return this.normalize(c, a), c;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = this._shell, c = i._shell;
            return a.compareToSameClass(c);
          }
          if (arguments.length === 2) {
            var g = arguments[1], p = arguments[0], _ = this._shell, w = p._shell, L = _.compareToSameClass(w, g);
            if (L !== 0) return L;
            for (var q = this.getNumInteriorRing(), Z = p.getNumInteriorRing(), Q = 0; Q < q && Q < Z; ) {
              var le = this.getInteriorRingN(Q), fe = p.getInteriorRingN(Q), ve = le.compareToSameClass(fe, g);
              if (ve !== 0) return ve;
              Q++;
            }
            return Q < q ? 1 : Q < Z ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], qr)) {
            var i = arguments[0];
            this._shell.apply(i);
            for (var a = 0; a < this._holes.length; a++) this._holes[a].apply(i);
          } else if (Ee(arguments[0], Kn)) {
            var c = arguments[0];
            if (this._shell.apply(c), !c.isDone()) for (var g = 0; g < this._holes.length && (this._holes[g].apply(c), !c.isDone()); g++) ;
            c.isGeometryChanged() && this.geometryChanged();
          } else if (Ee(arguments[0], mr))
            arguments[0].filter(this);
          else if (Ee(arguments[0], W)) {
            var p = arguments[0];
            p.filter(this), this._shell.apply(p);
            for (var _ = 0; _ < this._holes.length; _++) this._holes[_].apply(p);
          }
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          var i = new Array(this._holes.length + 1).fill(null);
          i[0] = this._shell;
          for (var a = 0; a < this._holes.length; a++) i[a + 1] = this._holes[a];
          return i.length <= 1 ? this.getFactory().createLinearRing(i[0].getCoordinateSequence()) : this.getFactory().createMultiLineString(i);
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_POLYGON;
        } }, { key: "getExteriorRing", value: function() {
          return this._shell;
        } }, { key: "isEmpty", value: function() {
          return this._shell.isEmpty();
        } }, { key: "getInteriorRingN", value: function(i) {
          return this._holes[i];
        } }, { key: "interfaces_", get: function() {
          return [Oi];
        } }], [{ key: "constructor_", value: function() {
          this._shell = null, this._holes = null;
          var i = arguments[0], a = arguments[1], c = arguments[2];
          if (he.constructor_.call(this, c), i === null && (i = this.getFactory().createLinearRing()), a === null && (a = []), he.hasNullElements(a)) throw new X("holes must not contain null elements");
          if (i.isEmpty() && he.hasNonEmptyElements(a)) throw new X("shell is empty but holes are not");
          this._shell = i, this._holes = a;
        } }]);
      }(he), Ri = function(o) {
        function t() {
          return u(this, t), s(this, t, arguments);
        }
        return y(t, o), h(t);
      }(Fr), Di = function(o) {
        function t(i) {
          var a;
          return u(this, t), (a = s(this, t)).array = [], i instanceof Oe && a.addAll(i), a;
        }
        return y(t, o), h(t, [{ key: "contains", value: function(i) {
          var a, c = m(this.array);
          try {
            for (c.s(); !(a = c.n()).done; )
              if (a.value.compareTo(i) === 0) return !0;
          } catch (g) {
            c.e(g);
          } finally {
            c.f();
          }
          return !1;
        } }, { key: "add", value: function(i) {
          if (this.contains(i)) return !1;
          for (var a = 0, c = this.array.length; a < c; a++)
            if (this.array[a].compareTo(i) === 1) return !!this.array.splice(a, 0, i);
          return this.array.push(i), !0;
        } }, { key: "addAll", value: function(i) {
          var a, c = m(i);
          try {
            for (c.s(); !(a = c.n()).done; ) {
              var g = a.value;
              this.add(g);
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
          return !0;
        } }, { key: "remove", value: function() {
          throw new Se();
        } }, { key: "size", value: function() {
          return this.array.length;
        } }, { key: "isEmpty", value: function() {
          return this.array.length === 0;
        } }, { key: "toArray", value: function() {
          return this.array.slice();
        } }, { key: "iterator", value: function() {
          return new nn(this.array);
        } }]);
      }(Ri), nn = function() {
        return h(function o(t) {
          u(this, o), this.array = t, this.position = 0;
        }, [{ key: "next", value: function() {
          if (this.position === this.array.length) throw new Pe();
          return this.array[this.position++];
        } }, { key: "hasNext", value: function() {
          return this.position < this.array.length;
        } }, { key: "remove", value: function() {
          throw new Se();
        } }]);
      }(), lt = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "computeEnvelopeInternal", value: function() {
          for (var i = new Le(), a = 0; a < this._geometries.length; a++) i.expandToInclude(this._geometries[a].getEnvelopeInternal());
          return i;
        } }, { key: "getGeometryN", value: function(i) {
          return this._geometries[i];
        } }, { key: "getCoordinates", value: function() {
          for (var i = new Array(this.getNumPoints()).fill(null), a = -1, c = 0; c < this._geometries.length; c++) for (var g = this._geometries[c].getCoordinates(), p = 0; p < g.length; p++) i[++a] = g[p];
          return i;
        } }, { key: "getArea", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getArea();
          return i;
        } }, { key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new t(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            if (!this.isEquivalentClass(i)) return !1;
            var c = i;
            if (this._geometries.length !== c._geometries.length) return !1;
            for (var g = 0; g < this._geometries.length; g++) if (!this._geometries[g].equalsExact(c._geometries[g], a)) return !1;
            return !0;
          }
          return M(t, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "normalize", value: function() {
          for (var i = 0; i < this._geometries.length; i++) this._geometries[i].normalize();
          Bt.sort(this._geometries);
        } }, { key: "getCoordinate", value: function() {
          return this.isEmpty() ? null : this._geometries[0].getCoordinate();
        } }, { key: "getBoundaryDimension", value: function() {
          for (var i = se.FALSE, a = 0; a < this._geometries.length; a++) i = Math.max(i, this._geometries[a].getBoundaryDimension());
          return i;
        } }, { key: "reverseInternal", value: function() {
          for (var i = this._geometries.length, a = new pe(i), c = 0; c < i; c++) a.add(this._geometries[c].reverse());
          return this.getFactory().buildGeometry(a);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_GEOMETRYCOLLECTION;
        } }, { key: "getDimension", value: function() {
          for (var i = se.FALSE, a = 0; a < this._geometries.length; a++) i = Math.max(i, this._geometries[a].getDimension());
          return i;
        } }, { key: "getLength", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getLength();
          return i;
        } }, { key: "getNumPoints", value: function() {
          for (var i = 0, a = 0; a < this._geometries.length; a++) i += this._geometries[a].getNumPoints();
          return i;
        } }, { key: "getNumGeometries", value: function() {
          return this._geometries.length;
        } }, { key: "compareToSameClass", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = new Di(Bt.asList(this._geometries)), c = new Di(Bt.asList(i._geometries));
            return this.compare(a, c);
          }
          if (arguments.length === 2) {
            for (var g = arguments[1], p = arguments[0], _ = this.getNumGeometries(), w = p.getNumGeometries(), L = 0; L < _ && L < w; ) {
              var q = this.getGeometryN(L), Z = p.getGeometryN(L), Q = q.compareToSameClass(Z, g);
              if (Q !== 0) return Q;
              L++;
            }
            return L < _ ? 1 : L < w ? -1 : 0;
          }
        } }, { key: "apply", value: function() {
          if (Ee(arguments[0], qr)) for (var i = arguments[0], a = 0; a < this._geometries.length; a++) this._geometries[a].apply(i);
          else if (Ee(arguments[0], Kn)) {
            var c = arguments[0];
            if (this._geometries.length === 0) return null;
            for (var g = 0; g < this._geometries.length && (this._geometries[g].apply(c), !c.isDone()); g++) ;
            c.isGeometryChanged() && this.geometryChanged();
          } else if (Ee(arguments[0], mr)) {
            var p = arguments[0];
            p.filter(this);
            for (var _ = 0; _ < this._geometries.length; _++) this._geometries[_].apply(p);
          } else if (Ee(arguments[0], W)) {
            var w = arguments[0];
            w.filter(this);
            for (var L = 0; L < this._geometries.length; L++) this._geometries[L].apply(w);
          }
        } }, { key: "getBoundary", value: function() {
          return he.checkNotGeometryCollection(this), ae.shouldNeverReachHere(), null;
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_GEOMETRYCOLLECTION;
        } }, { key: "isEmpty", value: function() {
          for (var i = 0; i < this._geometries.length; i++) if (!this._geometries[i].isEmpty()) return !1;
          return !0;
        } }], [{ key: "constructor_", value: function() {
          if (this._geometries = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var i = arguments[0], a = arguments[1];
              if (he.constructor_.call(this, a), i === null && (i = []), he.hasNullElements(i)) throw new X("geometries must not contain null elements");
              this._geometries = i;
            }
          }
        } }]);
      }(he), Yr = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new t(i, this._factory);
        } }, { key: "isValid", value: function() {
          return !0;
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && M(t, "equalsExact", this, 1).call(this, i, a);
          }
          return M(t, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1 && Number.isInteger(arguments[0])) {
            var i = arguments[0];
            return this._geometries[i].getCoordinate();
          }
          return M(t, "getCoordinate", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return se.FALSE;
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_MULTIPOINT;
        } }, { key: "getDimension", value: function() {
          return 0;
        } }, { key: "getBoundary", value: function() {
          return this.getFactory().createGeometryCollection();
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_MULTIPOINT;
        } }, { key: "interfaces_", get: function() {
          return [Ni];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          lt.constructor_.call(this, i, a);
        } }]);
      }(lt), er = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "copyInternal", value: function() {
          return new t(this._points.copy(), this._factory);
        } }, { key: "getBoundaryDimension", value: function() {
          return se.FALSE;
        } }, { key: "isClosed", value: function() {
          return !!this.isEmpty() || M(t, "isClosed", this, 1).call(this);
        } }, { key: "reverseInternal", value: function() {
          var i = this._points.copy();
          return kt.reverse(i), this.getFactory().createLinearRing(i);
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_LINEARRING;
        } }, { key: "validateConstruction", value: function() {
          if (!this.isEmpty() && !M(t, "isClosed", this, 1).call(this)) throw new X("Points of LinearRing do not form a closed linestring");
          if (this.getCoordinateSequence().size() >= 1 && this.getCoordinateSequence().size() < t.MINIMUM_VALID_SIZE) throw new X("Invalid number of points in LinearRing (found " + this.getCoordinateSequence().size() + " - must be 0 or >= 4)");
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_LINEARRING;
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          Qn.constructor_.call(this, i, a), this.validateConstruction();
        } }]);
      }(Qn);
      er.MINIMUM_VALID_SIZE = 4;
      var vn = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case t.X:
              this.x = a;
              break;
            case t.Y:
              this.y = a;
              break;
            default:
              throw new X("Invalid ordinate index: " + i);
          }
        } }, { key: "getZ", value: function() {
          return V.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case t.X:
              return this.x;
            case t.Y:
              return this.y;
          }
          throw new X("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new X("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new t(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ();
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) V.constructor_.call(this);
          else if (arguments.length === 1) {
            if (arguments[0] instanceof t) {
              var i = arguments[0];
              V.constructor_.call(this, i.x, i.y);
            } else if (arguments[0] instanceof V) {
              var a = arguments[0];
              V.constructor_.call(this, a.x, a.y);
            }
          } else if (arguments.length === 2) {
            var c = arguments[0], g = arguments[1];
            V.constructor_.call(this, c, g, V.NULL_ORDINATE);
          }
        } }]);
      }(V);
      vn.X = 0, vn.Y = 1, vn.Z = -1, vn.M = -1;
      var On = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case t.X:
              this.x = a;
              break;
            case t.Y:
              this.y = a;
              break;
            case t.M:
              this._m = a;
              break;
            default:
              throw new X("Invalid ordinate index: " + i);
          }
        } }, { key: "setM", value: function(i) {
          this._m = i;
        } }, { key: "getZ", value: function() {
          return V.NULL_ORDINATE;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case t.X:
              return this.x;
            case t.Y:
              return this.y;
            case t.M:
              return this._m;
          }
          throw new X("Invalid ordinate index: " + i);
        } }, { key: "setZ", value: function(i) {
          throw new X("CoordinateXY dimension 2 does not support z-ordinate");
        } }, { key: "copy", value: function() {
          return new t(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) V.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof t) {
              var i = arguments[0];
              V.constructor_.call(this, i.x, i.y), this._m = i._m;
            } else if (arguments[0] instanceof V) {
              var a = arguments[0];
              V.constructor_.call(this, a.x, a.y), this._m = this.getM();
            }
          } else if (arguments.length === 3) {
            var c = arguments[0], g = arguments[1], p = arguments[2];
            V.constructor_.call(this, c, g, V.NULL_ORDINATE), this._m = p;
          }
        } }]);
      }(V);
      On.X = 0, On.Y = 1, On.Z = -1, On.M = 2;
      var ge = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "getM", value: function() {
          return this._m;
        } }, { key: "setOrdinate", value: function(i, a) {
          switch (i) {
            case V.X:
              this.x = a;
              break;
            case V.Y:
              this.y = a;
              break;
            case V.Z:
              this.z = a;
              break;
            case V.M:
              this._m = a;
              break;
            default:
              throw new X("Invalid ordinate index: " + i);
          }
        } }, { key: "setM", value: function(i) {
          this._m = i;
        } }, { key: "getOrdinate", value: function(i) {
          switch (i) {
            case V.X:
              return this.x;
            case V.Y:
              return this.y;
            case V.Z:
              return this.getZ();
            case V.M:
              return this.getM();
          }
          throw new X("Invalid ordinate index: " + i);
        } }, { key: "copy", value: function() {
          return new t(this);
        } }, { key: "toString", value: function() {
          return "(" + this.x + ", " + this.y + ", " + this.getZ() + " m=" + this.getM() + ")";
        } }, { key: "setCoordinate", value: function(i) {
          this.x = i.x, this.y = i.y, this.z = i.getZ(), this._m = i.getM();
        } }], [{ key: "constructor_", value: function() {
          if (this._m = null, arguments.length === 0) V.constructor_.call(this), this._m = 0;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof t) {
              var i = arguments[0];
              V.constructor_.call(this, i), this._m = i._m;
            } else if (arguments[0] instanceof V) {
              var a = arguments[0];
              V.constructor_.call(this, a), this._m = this.getM();
            }
          } else if (arguments.length === 4) {
            var c = arguments[0], g = arguments[1], p = arguments[2], _ = arguments[3];
            V.constructor_.call(this, c, g, p), this._m = _;
          }
        } }]);
      }(V), B = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "measures", value: function(t) {
          return t instanceof vn ? 0 : t instanceof On || t instanceof ge ? 1 : 0;
        } }, { key: "dimension", value: function(t) {
          return t instanceof vn ? 2 : t instanceof On ? 3 : t instanceof ge ? 4 : 3;
        } }, { key: "create", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            return o.create(t, 0);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return i === 2 ? new vn() : i === 3 && a === 0 ? new V() : i === 3 && a === 1 ? new On() : i === 4 && a === 1 ? new ge() : new V();
          }
        } }]);
      }(), ee = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "getCoordinate", value: function(i) {
          return this.get(i);
        } }, { key: "addAll", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "boolean" && Ee(arguments[0], Oe)) {
            for (var i = arguments[1], a = !1, c = arguments[0].iterator(); c.hasNext(); ) this.add(c.next(), i), a = !0;
            return a;
          }
          return M(t, "addAll", this, 1).apply(this, arguments);
        } }, { key: "clone", value: function() {
          for (var i = M(t, "clone", this, 1).call(this), a = 0; a < this.size(); a++) i.add(a, this.get(a).clone());
          return i;
        } }, { key: "toCoordinateArray", value: function() {
          if (arguments.length === 0) return this.toArray(t.coordArrayType);
          if (arguments.length === 1) {
            if (arguments[0]) return this.toArray(t.coordArrayType);
            for (var i = this.size(), a = new Array(i).fill(null), c = 0; c < i; c++) a[c] = this.get(i - c - 1);
            return a;
          }
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return M(t, "add", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            if (arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var a = arguments[0], c = arguments[1];
              return this.add(a, c, !0), !0;
            }
            if (arguments[0] instanceof V && typeof arguments[1] == "boolean") {
              var g = arguments[0];
              if (!arguments[1] && this.size() >= 1 && this.get(this.size() - 1).equals2D(g)) return null;
              M(t, "add", this, 1).call(this, g);
            } else if (arguments[0] instanceof Object && typeof arguments[1] == "boolean") {
              var p = arguments[0], _ = arguments[1];
              return this.add(p, _), !0;
            }
          } else if (arguments.length === 3) {
            if (typeof arguments[2] == "boolean" && arguments[0] instanceof Array && typeof arguments[1] == "boolean") {
              var w = arguments[0], L = arguments[1];
              if (arguments[2]) for (var q = 0; q < w.length; q++) this.add(w[q], L);
              else for (var Z = w.length - 1; Z >= 0; Z--) this.add(w[Z], L);
              return !0;
            }
            if (typeof arguments[2] == "boolean" && Number.isInteger(arguments[0]) && arguments[1] instanceof V) {
              var Q = arguments[0], le = arguments[1];
              if (!arguments[2]) {
                var fe = this.size();
                if (fe > 0 && (Q > 0 && this.get(Q - 1).equals2D(le) || Q < fe && this.get(Q).equals2D(le)))
                  return null;
              }
              M(t, "add", this, 1).call(this, Q, le);
            }
          } else if (arguments.length === 4) {
            var ve = arguments[0], be = arguments[1], Ie = arguments[2], Fe = arguments[3], ot = 1;
            Ie > Fe && (ot = -1);
            for (var ct = Ie; ct !== Fe; ct += ot) this.add(ve[ct], be);
            return !0;
          }
        } }, { key: "closeRing", value: function() {
          if (this.size() > 0) {
            var i = this.get(0).copy();
            this.add(i, !1);
          }
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length !== 0) {
            if (arguments.length === 1) {
              var i = arguments[0];
              this.ensureCapacity(i.length), this.add(i, !0);
            } else if (arguments.length === 2) {
              var a = arguments[0], c = arguments[1];
              this.ensureCapacity(a.length), this.add(a, c);
            }
          }
        } }]);
      }(pe);
      ee.coordArrayType = new Array(0).fill(null);
      var oe = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isRing", value: function(t) {
          return !(t.length < 4) && !!t[0].equals2D(t[t.length - 1]);
        } }, { key: "ptNotInList", value: function(t, i) {
          for (var a = 0; a < t.length; a++) {
            var c = t[a];
            if (o.indexOf(c, i) < 0) return c;
          }
          return null;
        } }, { key: "scroll", value: function(t, i) {
          var a = o.indexOf(i, t);
          if (a < 0) return null;
          var c = new Array(t.length).fill(null);
          at.arraycopy(t, a, c, 0, t.length - a), at.arraycopy(t, 0, c, t.length - a, a), at.arraycopy(c, 0, t, 0, t.length);
        } }, { key: "equals", value: function() {
          if (arguments.length === 2) {
            var t = arguments[0], i = arguments[1];
            if (t === i) return !0;
            if (t === null || i === null || t.length !== i.length) return !1;
            for (var a = 0; a < t.length; a++) if (!t[a].equals(i[a])) return !1;
            return !0;
          }
          if (arguments.length === 3) {
            var c = arguments[0], g = arguments[1], p = arguments[2];
            if (c === g) return !0;
            if (c === null || g === null || c.length !== g.length) return !1;
            for (var _ = 0; _ < c.length; _++) if (p.compare(c[_], g[_]) !== 0) return !1;
            return !0;
          }
        } }, { key: "intersection", value: function(t, i) {
          for (var a = new ee(), c = 0; c < t.length; c++) i.intersects(t[c]) && a.add(t[c], !0);
          return a.toCoordinateArray();
        } }, { key: "measures", value: function(t) {
          if (t === null || t.length === 0) return 0;
          var i, a = 0, c = m(t);
          try {
            for (c.s(); !(i = c.n()).done; ) {
              var g = i.value;
              a = Math.max(a, B.measures(g));
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
          return a;
        } }, { key: "hasRepeatedPoints", value: function(t) {
          for (var i = 1; i < t.length; i++) if (t[i - 1].equals(t[i])) return !0;
          return !1;
        } }, { key: "removeRepeatedPoints", value: function(t) {
          return o.hasRepeatedPoints(t) ? new ee(t, !1).toCoordinateArray() : t;
        } }, { key: "reverse", value: function(t) {
          for (var i = t.length - 1, a = Math.trunc(i / 2), c = 0; c <= a; c++) {
            var g = t[c];
            t[c] = t[i - c], t[i - c] = g;
          }
        } }, { key: "removeNull", value: function(t) {
          for (var i = 0, a = 0; a < t.length; a++) t[a] !== null && i++;
          var c = new Array(i).fill(null);
          if (i === 0) return c;
          for (var g = 0, p = 0; p < t.length; p++) t[p] !== null && (c[g++] = t[p]);
          return c;
        } }, { key: "copyDeep", value: function() {
          if (arguments.length === 1) {
            for (var t = arguments[0], i = new Array(t.length).fill(null), a = 0; a < t.length; a++) i[a] = t[a].copy();
            return i;
          }
          if (arguments.length === 5) for (var c = arguments[0], g = arguments[1], p = arguments[2], _ = arguments[3], w = arguments[4], L = 0; L < w; L++) p[_ + L] = c[g + L].copy();
        } }, { key: "isEqualReversed", value: function(t, i) {
          for (var a = 0; a < t.length; a++) {
            var c = t[a], g = i[t.length - a - 1];
            if (c.compareTo(g) !== 0) return !1;
          }
          return !0;
        } }, { key: "envelope", value: function(t) {
          for (var i = new Le(), a = 0; a < t.length; a++) i.expandToInclude(t[a]);
          return i;
        } }, { key: "toCoordinateArray", value: function(t) {
          return t.toArray(o.coordArrayType);
        } }, { key: "dimension", value: function(t) {
          if (t === null || t.length === 0) return 3;
          var i, a = 0, c = m(t);
          try {
            for (c.s(); !(i = c.n()).done; ) {
              var g = i.value;
              a = Math.max(a, B.dimension(g));
            }
          } catch (p) {
            c.e(p);
          } finally {
            c.f();
          }
          return a;
        } }, { key: "atLeastNCoordinatesOrNothing", value: function(t, i) {
          return i.length >= t ? i : [];
        } }, { key: "indexOf", value: function(t, i) {
          for (var a = 0; a < i.length; a++) if (t.equals(i[a])) return a;
          return -1;
        } }, { key: "increasingDirection", value: function(t) {
          for (var i = 0; i < Math.trunc(t.length / 2); i++) {
            var a = t.length - 1 - i, c = t[i].compareTo(t[a]);
            if (c !== 0) return c;
          }
          return 1;
        } }, { key: "compare", value: function(t, i) {
          for (var a = 0; a < t.length && a < i.length; ) {
            var c = t[a].compareTo(i[a]);
            if (c !== 0) return c;
            a++;
          }
          return a < i.length ? -1 : a < t.length ? 1 : 0;
        } }, { key: "minCoordinate", value: function(t) {
          for (var i = null, a = 0; a < t.length; a++) (i === null || i.compareTo(t[a]) > 0) && (i = t[a]);
          return i;
        } }, { key: "extract", value: function(t, i, a) {
          i = mn.clamp(i, 0, t.length);
          var c = (a = mn.clamp(a, -1, t.length)) - i + 1;
          a < 0 && (c = 0), i >= t.length && (c = 0), a < i && (c = 0);
          var g = new Array(c).fill(null);
          if (c === 0) return g;
          for (var p = 0, _ = i; _ <= a; _++) g[p++] = t[_];
          return g;
        } }]);
      }(), Be = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "compare", value: function(o, t) {
          var i = o, a = t;
          return oe.compare(i, a);
        } }, { key: "interfaces_", get: function() {
          return [ne];
        } }]);
      }(), et = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "compare", value: function(o, t) {
          var i = o, a = t;
          if (i.length < a.length) return -1;
          if (i.length > a.length) return 1;
          if (i.length === 0) return 0;
          var c = oe.compare(i, a);
          return oe.isEqualReversed(i, a) ? 0 : c;
        } }, { key: "OLDcompare", value: function(o, t) {
          var i = o, a = t;
          if (i.length < a.length) return -1;
          if (i.length > a.length) return 1;
          if (i.length === 0) return 0;
          for (var c = oe.increasingDirection(i), g = oe.increasingDirection(a), p = c > 0 ? 0 : i.length - 1, _ = g > 0 ? 0 : i.length - 1, w = 0; w < i.length; w++) {
            var L = i[p].compareTo(a[_]);
            if (L !== 0) return L;
            p += c, _ += g;
          }
          return 0;
        } }, { key: "interfaces_", get: function() {
          return [ne];
        } }]);
      }();
      oe.ForwardComparator = Be, oe.BidirectionalComparator = et, oe.coordArrayType = new Array(0).fill(null);
      var Xe = function() {
        return h(function o(t) {
          u(this, o), this.str = t;
        }, [{ key: "append", value: function(o) {
          this.str += o;
        } }, { key: "setCharAt", value: function(o, t) {
          this.str = this.str.substr(0, o) + t + this.str.substr(o + 1);
        } }, { key: "toString", value: function() {
          return this.str;
        } }]);
      }(), je = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getM", value: function(t) {
          return this.hasM() ? this._coordinates[t].getM() : K.NaN;
        } }, { key: "setOrdinate", value: function(t, i, a) {
          switch (i) {
            case ke.X:
              this._coordinates[t].x = a;
              break;
            case ke.Y:
              this._coordinates[t].y = a;
              break;
            default:
              this._coordinates[t].setOrdinate(i, a);
          }
        } }, { key: "getZ", value: function(t) {
          return this.hasZ() ? this._coordinates[t].getZ() : K.NaN;
        } }, { key: "size", value: function() {
          return this._coordinates.length;
        } }, { key: "getOrdinate", value: function(t, i) {
          switch (i) {
            case ke.X:
              return this._coordinates[t].x;
            case ke.Y:
              return this._coordinates[t].y;
            default:
              return this._coordinates[t].getOrdinate(i);
          }
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            return this._coordinates[t];
          }
          if (arguments.length === 2) {
            var i = arguments[0];
            arguments[1].setCoordinate(this._coordinates[i]);
          }
        } }, { key: "getCoordinateCopy", value: function(t) {
          var i = this.createCoordinate();
          return i.setCoordinate(this._coordinates[t]), i;
        } }, { key: "createCoordinate", value: function() {
          return B.create(this.getDimension(), this.getMeasures());
        } }, { key: "getDimension", value: function() {
          return this._dimension;
        } }, { key: "getX", value: function(t) {
          return this._coordinates[t].x;
        } }, { key: "getMeasures", value: function() {
          return this._measures;
        } }, { key: "expandEnvelope", value: function(t) {
          for (var i = 0; i < this._coordinates.length; i++) t.expandToInclude(this._coordinates[i]);
          return t;
        } }, { key: "copy", value: function() {
          for (var t = new Array(this.size()).fill(null), i = 0; i < this._coordinates.length; i++) {
            var a = this.createCoordinate();
            a.setCoordinate(this._coordinates[i]), t[i] = a;
          }
          return new o(t, this._dimension, this._measures);
        } }, { key: "toString", value: function() {
          if (this._coordinates.length > 0) {
            var t = new Xe(17 * this._coordinates.length);
            t.append("("), t.append(this._coordinates[0]);
            for (var i = 1; i < this._coordinates.length; i++) t.append(", "), t.append(this._coordinates[i]);
            return t.append(")"), t.toString();
          }
          return "()";
        } }, { key: "getY", value: function(t) {
          return this._coordinates[t].y;
        } }, { key: "toCoordinateArray", value: function() {
          return this._coordinates;
        } }, { key: "interfaces_", get: function() {
          return [ke, k];
        } }], [{ key: "constructor_", value: function() {
          if (this._dimension = 3, this._measures = 0, this._coordinates = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var t = arguments[0];
              o.constructor_.call(this, t, oe.dimension(t), oe.measures(t));
            } else if (Number.isInteger(arguments[0])) {
              var i = arguments[0];
              this._coordinates = new Array(i).fill(null);
              for (var a = 0; a < i; a++) this._coordinates[a] = new V();
            } else if (Ee(arguments[0], ke)) {
              var c = arguments[0];
              if (c === null) return this._coordinates = new Array(0).fill(null), null;
              this._dimension = c.getDimension(), this._measures = c.getMeasures(), this._coordinates = new Array(c.size()).fill(null);
              for (var g = 0; g < this._coordinates.length; g++) this._coordinates[g] = c.getCoordinateCopy(g);
            }
          } else if (arguments.length === 2) {
            if (arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var p = arguments[0], _ = arguments[1];
              o.constructor_.call(this, p, _, oe.measures(p));
            } else if (Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var w = arguments[0], L = arguments[1];
              this._coordinates = new Array(w).fill(null), this._dimension = L;
              for (var q = 0; q < w; q++) this._coordinates[q] = B.create(L);
            }
          } else if (arguments.length === 3) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof Array && Number.isInteger(arguments[1])) {
              var Z = arguments[0], Q = arguments[1], le = arguments[2];
              this._dimension = Q, this._measures = le, this._coordinates = Z === null ? new Array(0).fill(null) : Z;
            } else if (Number.isInteger(arguments[2]) && Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])) {
              var fe = arguments[0], ve = arguments[1], be = arguments[2];
              this._coordinates = new Array(fe).fill(null), this._dimension = ve, this._measures = be;
              for (var Ie = 0; Ie < fe; Ie++) this._coordinates[Ie] = this.createCoordinate();
            }
          }
        } }]);
      }(), St = function() {
        function o() {
          u(this, o);
        }
        return h(o, [{ key: "readResolve", value: function() {
          return o.instance();
        } }, { key: "create", value: function() {
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) return new je(arguments[0]);
            if (Ee(arguments[0], ke)) return new je(arguments[0]);
          } else {
            if (arguments.length === 2) {
              var t = arguments[1];
              return t > 3 && (t = 3), t < 2 && (t = 2), new je(arguments[0], t);
            }
            if (arguments.length === 3) {
              var i = arguments[2], a = arguments[1] - i;
              return i > 1 && (i = 1), a > 3 && (a = 3), a < 2 && (a = 2), new je(arguments[0], a + i, i);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [$n, k];
        } }], [{ key: "instance", value: function() {
          return o.instanceObject;
        } }]);
      }();
      St.instanceObject = new St();
      var Rn = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new t(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && M(t, "equalsExact", this, 1).call(this, i, a);
          }
          return M(t, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return 1;
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_MULTIPOLYGON;
        } }, { key: "getDimension", value: function() {
          return 2;
        } }, { key: "getBoundary", value: function() {
          if (this.isEmpty()) return this.getFactory().createMultiLineString();
          for (var i = new pe(), a = 0; a < this._geometries.length; a++) for (var c = this._geometries[a].getBoundary(), g = 0; g < c.getNumGeometries(); g++) i.add(c.getGeometryN(g));
          var p = new Array(i.size()).fill(null);
          return this.getFactory().createMultiLineString(i.toArray(p));
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_MULTIPOLYGON;
        } }, { key: "interfaces_", get: function() {
          return [Oi];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          lt.constructor_.call(this, i, a);
        } }]);
      }(lt), tt = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "get", value: function() {
        } }, { key: "put", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "values", value: function() {
        } }, { key: "entrySet", value: function() {
        } }]);
      }(), Ls = function(o) {
        function t() {
          var i;
          return u(this, t), (i = s(this, t)).map = /* @__PURE__ */ new Map(), i;
        }
        return y(t, o), h(t, [{ key: "get", value: function(i) {
          return this.map.get(i) || null;
        } }, { key: "put", value: function(i, a) {
          return this.map.set(i, a), a;
        } }, { key: "values", value: function() {
          for (var i = new pe(), a = this.map.values(), c = a.next(); !c.done; ) i.add(c.value), c = a.next();
          return i;
        } }, { key: "entrySet", value: function() {
          var i = new pn();
          return this.map.entries().forEach(function(a) {
            return i.add(a);
          }), i;
        } }, { key: "size", value: function() {
          return this.map.size();
        } }]);
      }(tt), Mt = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "equals", value: function(t) {
          if (!(t instanceof o)) return !1;
          var i = t;
          return this._modelType === i._modelType && this._scale === i._scale;
        } }, { key: "compareTo", value: function(t) {
          var i = t, a = this.getMaximumSignificantDigits(), c = i.getMaximumSignificantDigits();
          return en.compare(a, c);
        } }, { key: "getScale", value: function() {
          return this._scale;
        } }, { key: "isFloating", value: function() {
          return this._modelType === o.FLOATING || this._modelType === o.FLOATING_SINGLE;
        } }, { key: "getType", value: function() {
          return this._modelType;
        } }, { key: "toString", value: function() {
          var t = "UNKNOWN";
          return this._modelType === o.FLOATING ? t = "Floating" : this._modelType === o.FLOATING_SINGLE ? t = "Floating-Single" : this._modelType === o.FIXED && (t = "Fixed (Scale=" + this.getScale() + ")"), t;
        } }, { key: "makePrecise", value: function() {
          if (typeof arguments[0] == "number") {
            var t = arguments[0];
            return K.isNaN(t) || this._modelType === o.FLOATING_SINGLE ? t : this._modelType === o.FIXED ? Math.round(t * this._scale) / this._scale : t;
          }
          if (arguments[0] instanceof V) {
            var i = arguments[0];
            if (this._modelType === o.FLOATING) return null;
            i.x = this.makePrecise(i.x), i.y = this.makePrecise(i.y);
          }
        } }, { key: "getMaximumSignificantDigits", value: function() {
          var t = 16;
          return this._modelType === o.FLOATING ? t = 16 : this._modelType === o.FLOATING_SINGLE ? t = 6 : this._modelType === o.FIXED && (t = 1 + Math.trunc(Math.ceil(Math.log(this.getScale()) / Math.log(10)))), t;
        } }, { key: "setScale", value: function(t) {
          this._scale = Math.abs(t);
        } }, { key: "interfaces_", get: function() {
          return [k, $];
        } }], [{ key: "constructor_", value: function() {
          if (this._modelType = null, this._scale = null, arguments.length === 0) this._modelType = o.FLOATING;
          else if (arguments.length === 1) {
            if (arguments[0] instanceof Hr) {
              var t = arguments[0];
              this._modelType = t, t === o.FIXED && this.setScale(1);
            } else if (typeof arguments[0] == "number") {
              var i = arguments[0];
              this._modelType = o.FIXED, this.setScale(i);
            } else if (arguments[0] instanceof o) {
              var a = arguments[0];
              this._modelType = a._modelType, this._scale = a._scale;
            }
          }
        } }, { key: "mostPrecise", value: function(t, i) {
          return t.compareTo(i) >= 0 ? t : i;
        } }]);
      }(), Hr = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "readResolve", value: function() {
          return o.nameToTypeMap.get(this._name);
        } }, { key: "toString", value: function() {
          return this._name;
        } }, { key: "interfaces_", get: function() {
          return [k];
        } }], [{ key: "constructor_", value: function() {
          this._name = null;
          var t = arguments[0];
          this._name = t, o.nameToTypeMap.put(t, this);
        } }]);
      }();
      Hr.nameToTypeMap = new Ls(), Mt.Type = Hr, Mt.FIXED = new Hr("FIXED"), Mt.FLOATING = new Hr("FLOATING"), Mt.FLOATING_SINGLE = new Hr("FLOATING SINGLE"), Mt.maximumPreciseValue = 9007199254740992;
      var oo = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "copyInternal", value: function() {
          for (var i = new Array(this._geometries.length).fill(null), a = 0; a < i.length; a++) i[a] = this._geometries[a].copy();
          return new t(i, this._factory);
        } }, { key: "equalsExact", value: function() {
          if (arguments.length === 2 && typeof arguments[1] == "number" && arguments[0] instanceof he) {
            var i = arguments[0], a = arguments[1];
            return !!this.isEquivalentClass(i) && M(t, "equalsExact", this, 1).call(this, i, a);
          }
          return M(t, "equalsExact", this, 1).apply(this, arguments);
        } }, { key: "getBoundaryDimension", value: function() {
          return this.isClosed() ? se.FALSE : 0;
        } }, { key: "isClosed", value: function() {
          if (this.isEmpty()) return !1;
          for (var i = 0; i < this._geometries.length; i++) if (!this._geometries[i].isClosed()) return !1;
          return !0;
        } }, { key: "getTypeCode", value: function() {
          return he.TYPECODE_MULTILINESTRING;
        } }, { key: "getDimension", value: function() {
          return 1;
        } }, { key: "getBoundary", value: function() {
          throw new Se();
        } }, { key: "getGeometryType", value: function() {
          return he.TYPENAME_MULTILINESTRING;
        } }, { key: "interfaces_", get: function() {
          return [Ze];
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          lt.constructor_.call(this, i, a);
        } }]);
      }(lt), Jr = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "createEmpty", value: function(t) {
          switch (t) {
            case -1:
              return this.createGeometryCollection();
            case 0:
              return this.createPoint();
            case 1:
              return this.createLineString();
            case 2:
              return this.createPolygon();
            default:
              throw new X("Invalid dimension: " + t);
          }
        } }, { key: "toGeometry", value: function(t) {
          return t.isNull() ? this.createPoint() : t.getMinX() === t.getMaxX() && t.getMinY() === t.getMaxY() ? this.createPoint(new V(t.getMinX(), t.getMinY())) : t.getMinX() === t.getMaxX() || t.getMinY() === t.getMaxY() ? this.createLineString([new V(t.getMinX(), t.getMinY()), new V(t.getMaxX(), t.getMaxY())]) : this.createPolygon(this.createLinearRing([new V(t.getMinX(), t.getMinY()), new V(t.getMinX(), t.getMaxY()), new V(t.getMaxX(), t.getMaxY()), new V(t.getMaxX(), t.getMinY()), new V(t.getMinX(), t.getMinY())]), null);
        } }, { key: "createLineString", value: function() {
          if (arguments.length === 0) return this.createLineString(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var t = arguments[0];
              return this.createLineString(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
            }
            if (Ee(arguments[0], ke)) return new Qn(arguments[0], this);
          }
        } }, { key: "createMultiLineString", value: function() {
          return arguments.length === 0 ? new oo(null, this) : arguments.length === 1 ? new oo(arguments[0], this) : void 0;
        } }, { key: "buildGeometry", value: function(t) {
          for (var i = null, a = !1, c = !1, g = t.iterator(); g.hasNext(); ) {
            var p = g.next(), _ = p.getTypeCode();
            i === null && (i = _), _ !== i && (a = !0), p instanceof lt && (c = !0);
          }
          if (i === null) return this.createGeometryCollection();
          if (a || c) return this.createGeometryCollection(o.toGeometryArray(t));
          var w = t.iterator().next();
          if (t.size() > 1) {
            if (w instanceof vr) return this.createMultiPolygon(o.toPolygonArray(t));
            if (w instanceof Qn) return this.createMultiLineString(o.toLineStringArray(t));
            if (w instanceof Pi) return this.createMultiPoint(o.toPointArray(t));
            ae.shouldNeverReachHere("Unhandled geometry type: " + w.getGeometryType());
          }
          return w;
        } }, { key: "createMultiPointFromCoords", value: function(t) {
          return this.createMultiPoint(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
        } }, { key: "createPoint", value: function() {
          if (arguments.length === 0) return this.createPoint(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof V) {
              var t = arguments[0];
              return this.createPoint(t !== null ? this.getCoordinateSequenceFactory().create([t]) : null);
            }
            if (Ee(arguments[0], ke)) return new Pi(arguments[0], this);
          }
        } }, { key: "getCoordinateSequenceFactory", value: function() {
          return this._coordinateSequenceFactory;
        } }, { key: "createPolygon", value: function() {
          if (arguments.length === 0) return this.createPolygon(null, null);
          if (arguments.length === 1) {
            if (Ee(arguments[0], ke)) {
              var t = arguments[0];
              return this.createPolygon(this.createLinearRing(t));
            }
            if (arguments[0] instanceof Array) {
              var i = arguments[0];
              return this.createPolygon(this.createLinearRing(i));
            }
            if (arguments[0] instanceof er) {
              var a = arguments[0];
              return this.createPolygon(a, null);
            }
          } else if (arguments.length === 2)
            return new vr(arguments[0], arguments[1], this);
        } }, { key: "getSRID", value: function() {
          return this._SRID;
        } }, { key: "createGeometryCollection", value: function() {
          return arguments.length === 0 ? new lt(null, this) : arguments.length === 1 ? new lt(arguments[0], this) : void 0;
        } }, { key: "getPrecisionModel", value: function() {
          return this._precisionModel;
        } }, { key: "createLinearRing", value: function() {
          if (arguments.length === 0) return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var t = arguments[0];
              return this.createLinearRing(t !== null ? this.getCoordinateSequenceFactory().create(t) : null);
            }
            if (Ee(arguments[0], ke)) return new er(arguments[0], this);
          }
        } }, { key: "createMultiPolygon", value: function() {
          return arguments.length === 0 ? new Rn(null, this) : arguments.length === 1 ? new Rn(arguments[0], this) : void 0;
        } }, { key: "createMultiPoint", value: function() {
          if (arguments.length === 0) return new Yr(null, this);
          if (arguments.length === 1) {
            if (arguments[0] instanceof Array) return new Yr(arguments[0], this);
            if (Ee(arguments[0], ke)) {
              var t = arguments[0];
              if (t === null) return this.createMultiPoint(new Array(0).fill(null));
              for (var i = new Array(t.size()).fill(null), a = 0; a < t.size(); a++) {
                var c = this.getCoordinateSequenceFactory().create(1, t.getDimension(), t.getMeasures());
                kt.copy(t, a, c, 0, 1), i[a] = this.createPoint(c);
              }
              return this.createMultiPoint(i);
            }
          }
        } }, { key: "interfaces_", get: function() {
          return [k];
        } }], [{ key: "constructor_", value: function() {
          if (this._precisionModel = null, this._coordinateSequenceFactory = null, this._SRID = null, arguments.length === 0) o.constructor_.call(this, new Mt(), 0);
          else if (arguments.length === 1) {
            if (Ee(arguments[0], $n)) {
              var t = arguments[0];
              o.constructor_.call(this, new Mt(), 0, t);
            } else if (arguments[0] instanceof Mt) {
              var i = arguments[0];
              o.constructor_.call(this, i, 0, o.getDefaultCoordinateSequenceFactory());
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            o.constructor_.call(this, a, c, o.getDefaultCoordinateSequenceFactory());
          } else if (arguments.length === 3) {
            var g = arguments[0], p = arguments[1], _ = arguments[2];
            this._precisionModel = g, this._coordinateSequenceFactory = _, this._SRID = p;
          }
        } }, { key: "toMultiPolygonArray", value: function(t) {
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "toGeometryArray", value: function(t) {
          if (t === null) return null;
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "getDefaultCoordinateSequenceFactory", value: function() {
          return St.instance();
        } }, { key: "toMultiLineStringArray", value: function(t) {
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "toLineStringArray", value: function(t) {
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "toMultiPointArray", value: function(t) {
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "toLinearRingArray", value: function(t) {
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "toPointArray", value: function(t) {
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "toPolygonArray", value: function(t) {
          var i = new Array(t.size()).fill(null);
          return t.toArray(i);
        } }, { key: "createPointFromInternalCoord", value: function(t, i) {
          return i.getPrecisionModel().makePrecise(t), i.getFactory().createPoint(t);
        } }]);
      }(), uo = "XY", Fd = "XYZ", Gd = "XYM", Bd = "XYZM", ml = { POINT: "Point", LINE_STRING: "LineString", LINEAR_RING: "LinearRing", POLYGON: "Polygon", MULTI_POINT: "MultiPoint", MULTI_LINE_STRING: "MultiLineString", MULTI_POLYGON: "MultiPolygon", GEOMETRY_COLLECTION: "GeometryCollection", CIRCLE: "Circle" }, vl = "EMPTY", bs = 1, Dn = 2, tr = 3, yl = 4, Vr = 5, Ud = 6;
      for (var zd in ml) ml[zd].toUpperCase();
      var qd = function() {
        return h(function o(t) {
          u(this, o), this.wkt = t, this.index_ = -1;
        }, [{ key: "isAlpha_", value: function(o) {
          return o >= "a" && o <= "z" || o >= "A" && o <= "Z";
        } }, { key: "isNumeric_", value: function(o, t) {
          return o >= "0" && o <= "9" || o == "." && !(t !== void 0 && t);
        } }, { key: "isWhiteSpace_", value: function(o) {
          return o == " " || o == "	" || o == "\r" || o == `
`;
        } }, { key: "nextChar_", value: function() {
          return this.wkt.charAt(++this.index_);
        } }, { key: "nextToken", value: function() {
          var o, t = this.nextChar_(), i = this.index_, a = t;
          if (t == "(") o = Dn;
          else if (t == ",") o = Vr;
          else if (t == ")") o = tr;
          else if (this.isNumeric_(t) || t == "-") o = yl, a = this.readNumber_();
          else if (this.isAlpha_(t)) o = bs, a = this.readText_();
          else {
            if (this.isWhiteSpace_(t)) return this.nextToken();
            if (t !== "") throw new Error("Unexpected character: " + t);
            o = Ud;
          }
          return { position: i, value: a, type: o };
        } }, { key: "readNumber_", value: function() {
          var o, t = this.index_, i = !1, a = !1;
          do
            o == "." ? i = !0 : o != "e" && o != "E" || (a = !0), o = this.nextChar_();
          while (this.isNumeric_(o, i) || !a && (o == "e" || o == "E") || a && (o == "-" || o == "+"));
          return parseFloat(this.wkt.substring(t, this.index_--));
        } }, { key: "readText_", value: function() {
          var o, t = this.index_;
          do
            o = this.nextChar_();
          while (this.isAlpha_(o));
          return this.wkt.substring(t, this.index_--).toUpperCase();
        } }]);
      }(), Yd = function() {
        return h(function o(t, i) {
          u(this, o), this.lexer_ = t, this.token_, this.layout_ = uo, this.factory = i;
        }, [{ key: "consume_", value: function() {
          this.token_ = this.lexer_.nextToken();
        } }, { key: "isTokenType", value: function(o) {
          return this.token_.type == o;
        } }, { key: "match", value: function(o) {
          var t = this.isTokenType(o);
          return t && this.consume_(), t;
        } }, { key: "parse", value: function() {
          return this.consume_(), this.parseGeometry_();
        } }, { key: "parseGeometryLayout_", value: function() {
          var o = uo, t = this.token_;
          if (this.isTokenType(bs)) {
            var i = t.value;
            i === "Z" ? o = Fd : i === "M" ? o = Gd : i === "ZM" && (o = Bd), o !== uo && this.consume_();
          }
          return o;
        } }, { key: "parseGeometryCollectionText_", value: function() {
          if (this.match(Dn)) {
            var o = [];
            do
              o.push(this.parseGeometry_());
            while (this.match(Vr));
            if (this.match(tr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointText_", value: function() {
          if (this.match(Dn)) {
            var o = this.parsePoint_();
            if (this.match(tr)) return o;
          } else if (this.isEmptyGeometry_()) return null;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseLineStringText_", value: function() {
          if (this.match(Dn)) {
            var o = this.parsePointList_();
            if (this.match(tr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePolygonText_", value: function() {
          if (this.match(Dn)) {
            var o = this.parseLineStringTextList_();
            if (this.match(tr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPointText_", value: function() {
          var o;
          if (this.match(Dn)) {
            if (o = this.token_.type == Dn ? this.parsePointTextList_() : this.parsePointList_(), this.match(tr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiLineStringText_", value: function() {
          if (this.match(Dn)) {
            var o = this.parseLineStringTextList_();
            if (this.match(tr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parseMultiPolygonText_", value: function() {
          if (this.match(Dn)) {
            var o = this.parsePolygonTextList_();
            if (this.match(tr)) return o;
          } else if (this.isEmptyGeometry_()) return [];
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePoint_", value: function() {
          for (var o = [], t = this.layout_.length, i = 0; i < t; ++i) {
            var a = this.token_;
            if (!this.match(yl)) break;
            o.push(a.value);
          }
          if (o.length == t) return o;
          throw new Error(this.formatErrorMessage_());
        } }, { key: "parsePointList_", value: function() {
          for (var o = [this.parsePoint_()]; this.match(Vr); ) o.push(this.parsePoint_());
          return o;
        } }, { key: "parsePointTextList_", value: function() {
          for (var o = [this.parsePointText_()]; this.match(Vr); ) o.push(this.parsePointText_());
          return o;
        } }, { key: "parseLineStringTextList_", value: function() {
          for (var o = [this.parseLineStringText_()]; this.match(Vr); ) o.push(this.parseLineStringText_());
          return o;
        } }, { key: "parsePolygonTextList_", value: function() {
          for (var o = [this.parsePolygonText_()]; this.match(Vr); ) o.push(this.parsePolygonText_());
          return o;
        } }, { key: "isEmptyGeometry_", value: function() {
          var o = this.isTokenType(bs) && this.token_.value == vl;
          return o && this.consume_(), o;
        } }, { key: "formatErrorMessage_", value: function() {
          return "Unexpected `" + this.token_.value + "` at position " + this.token_.position + " in `" + this.lexer_.wkt + "`";
        } }, { key: "parseGeometry_", value: function() {
          var o = this.factory, t = function(ve) {
            return l(V, D(ve));
          }, i = function(ve) {
            var be = ve.map(function(Ie) {
              return o.createLinearRing(Ie.map(t));
            });
            return be.length > 1 ? o.createPolygon(be[0], be.slice(1)) : o.createPolygon(be[0]);
          }, a = this.token_;
          if (this.match(bs)) {
            var c = a.value;
            if (this.layout_ = this.parseGeometryLayout_(), c == "GEOMETRYCOLLECTION") {
              var g = this.parseGeometryCollectionText_();
              return o.createGeometryCollection(g);
            }
            switch (c) {
              case "POINT":
                var p = this.parsePointText_();
                return p ? o.createPoint(l(V, D(p))) : o.createPoint();
              case "LINESTRING":
                var _ = this.parseLineStringText_().map(t);
                return o.createLineString(_);
              case "LINEARRING":
                var w = this.parseLineStringText_().map(t);
                return o.createLinearRing(w);
              case "POLYGON":
                var L = this.parsePolygonText_();
                return L && L.length !== 0 ? i(L) : o.createPolygon();
              case "MULTIPOINT":
                var q = this.parseMultiPointText_();
                if (!q || q.length === 0) return o.createMultiPoint();
                var Z = q.map(t).map(function(ve) {
                  return o.createPoint(ve);
                });
                return o.createMultiPoint(Z);
              case "MULTILINESTRING":
                var Q = this.parseMultiLineStringText_().map(function(ve) {
                  return o.createLineString(ve.map(t));
                });
                return o.createMultiLineString(Q);
              case "MULTIPOLYGON":
                var le = this.parseMultiPolygonText_();
                if (!le || le.length === 0) return o.createMultiPolygon();
                var fe = le.map(i);
                return o.createMultiPolygon(fe);
              default:
                throw new Error("Invalid geometry type: " + c);
            }
          }
          throw new Error(this.formatErrorMessage_());
        } }]);
      }();
      function _l(o) {
        if (o.isEmpty()) return "";
        var t = o.getCoordinate(), i = [t.x, t.y];
        return t.z === void 0 || Number.isNaN(t.z) || i.push(t.z), t.m === void 0 || Number.isNaN(t.m) || i.push(t.m), i.join(" ");
      }
      function Fi(o) {
        for (var t = o.getCoordinates().map(function(g) {
          var p = [g.x, g.y];
          return g.z === void 0 || Number.isNaN(g.z) || p.push(g.z), g.m === void 0 || Number.isNaN(g.m) || p.push(g.m), p;
        }), i = [], a = 0, c = t.length; a < c; ++a) i.push(t[a].join(" "));
        return i.join(", ");
      }
      function El(o) {
        var t = [];
        t.push("(" + Fi(o.getExteriorRing()) + ")");
        for (var i = 0, a = o.getNumInteriorRing(); i < a; ++i) t.push("(" + Fi(o.getInteriorRingN(i)) + ")");
        return t.join(", ");
      }
      var Hd = { Point: _l, LineString: Fi, LinearRing: Fi, Polygon: El, MultiPoint: function(o) {
        for (var t = [], i = 0, a = o.getNumGeometries(); i < a; ++i) t.push("(" + _l(o.getGeometryN(i)) + ")");
        return t.join(", ");
      }, MultiLineString: function(o) {
        for (var t = [], i = 0, a = o.getNumGeometries(); i < a; ++i) t.push("(" + Fi(o.getGeometryN(i)) + ")");
        return t.join(", ");
      }, MultiPolygon: function(o) {
        for (var t = [], i = 0, a = o.getNumGeometries(); i < a; ++i) t.push("(" + El(o.getGeometryN(i)) + ")");
        return t.join(", ");
      }, GeometryCollection: function(o) {
        for (var t = [], i = 0, a = o.getNumGeometries(); i < a; ++i) t.push(xl(o.getGeometryN(i)));
        return t.join(", ");
      } };
      function xl(o) {
        var t = o.getGeometryType(), i = Hd[t];
        t = t.toUpperCase();
        var a = function(c) {
          var g = "";
          if (c.isEmpty()) return g;
          var p = c.getCoordinate();
          return p.z === void 0 || Number.isNaN(p.z) || (g += "Z"), p.m === void 0 || Number.isNaN(p.m) || (g += "M"), g;
        }(o);
        return a.length > 0 && (t += " " + a), o.isEmpty() ? t + " " + vl : t + " (" + i(o) + ")";
      }
      var Jd = function() {
        return h(function o(t) {
          u(this, o), this.geometryFactory = t || new Jr(), this.precisionModel = this.geometryFactory.getPrecisionModel();
        }, [{ key: "read", value: function(o) {
          var t = new qd(o);
          return new Yd(t, this.geometryFactory).parse();
        } }, { key: "write", value: function(o) {
          return xl(o);
        } }]);
      }(), lo = function() {
        return h(function o(t) {
          u(this, o), this.parser = new Jd(t);
        }, [{ key: "write", value: function(o) {
          return this.parser.write(o);
        } }], [{ key: "toLineString", value: function(o, t) {
          if (arguments.length !== 2) throw new Error("Not implemented");
          return "LINESTRING ( " + o.x + " " + o.y + ", " + t.x + " " + t.y + " )";
        } }]);
      }(), qe = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getIndexAlongSegment", value: function(t, i) {
          return this.computeIntLineIndex(), this._intLineIndex[t][i];
        } }, { key: "getTopologySummary", value: function() {
          var t = new Xe();
          return this.isEndPoint() && t.append(" endpoint"), this._isProper && t.append(" proper"), this.isCollinear() && t.append(" collinear"), t.toString();
        } }, { key: "computeIntersection", value: function(t, i, a, c) {
          this._inputLines[0][0] = t, this._inputLines[0][1] = i, this._inputLines[1][0] = a, this._inputLines[1][1] = c, this._result = this.computeIntersect(t, i, a, c);
        } }, { key: "getIntersectionNum", value: function() {
          return this._result;
        } }, { key: "computeIntLineIndex", value: function() {
          if (arguments.length === 0) this._intLineIndex === null && (this._intLineIndex = Array(2).fill().map(function() {
            return Array(2);
          }), this.computeIntLineIndex(0), this.computeIntLineIndex(1));
          else if (arguments.length === 1) {
            var t = arguments[0];
            this.getEdgeDistance(t, 0) > this.getEdgeDistance(t, 1) ? (this._intLineIndex[t][0] = 0, this._intLineIndex[t][1] = 1) : (this._intLineIndex[t][0] = 1, this._intLineIndex[t][1] = 0);
          }
        } }, { key: "isProper", value: function() {
          return this.hasIntersection() && this._isProper;
        } }, { key: "setPrecisionModel", value: function(t) {
          this._precisionModel = t;
        } }, { key: "isInteriorIntersection", value: function() {
          if (arguments.length === 0) return !!this.isInteriorIntersection(0) || !!this.isInteriorIntersection(1);
          if (arguments.length === 1) {
            for (var t = arguments[0], i = 0; i < this._result; i++) if (!this._intPt[i].equals2D(this._inputLines[t][0]) && !this._intPt[i].equals2D(this._inputLines[t][1])) return !0;
            return !1;
          }
        } }, { key: "getIntersection", value: function(t) {
          return this._intPt[t];
        } }, { key: "isEndPoint", value: function() {
          return this.hasIntersection() && !this._isProper;
        } }, { key: "hasIntersection", value: function() {
          return this._result !== o.NO_INTERSECTION;
        } }, { key: "getEdgeDistance", value: function(t, i) {
          return o.computeEdgeDistance(this._intPt[i], this._inputLines[t][0], this._inputLines[t][1]);
        } }, { key: "isCollinear", value: function() {
          return this._result === o.COLLINEAR_INTERSECTION;
        } }, { key: "toString", value: function() {
          return lo.toLineString(this._inputLines[0][0], this._inputLines[0][1]) + " - " + lo.toLineString(this._inputLines[1][0], this._inputLines[1][1]) + this.getTopologySummary();
        } }, { key: "getEndpoint", value: function(t, i) {
          return this._inputLines[t][i];
        } }, { key: "isIntersection", value: function(t) {
          for (var i = 0; i < this._result; i++) if (this._intPt[i].equals2D(t)) return !0;
          return !1;
        } }, { key: "getIntersectionAlongSegment", value: function(t, i) {
          return this.computeIntLineIndex(), this._intPt[this._intLineIndex[t][i]];
        } }], [{ key: "constructor_", value: function() {
          this._result = null, this._inputLines = Array(2).fill().map(function() {
            return Array(2);
          }), this._intPt = new Array(2).fill(null), this._intLineIndex = null, this._isProper = null, this._pa = null, this._pb = null, this._precisionModel = null, this._intPt[0] = new V(), this._intPt[1] = new V(), this._pa = this._intPt[0], this._pb = this._intPt[1], this._result = 0;
        } }, { key: "computeEdgeDistance", value: function(t, i, a) {
          var c = Math.abs(a.x - i.x), g = Math.abs(a.y - i.y), p = -1;
          if (t.equals(i)) p = 0;
          else if (t.equals(a)) p = c > g ? c : g;
          else {
            var _ = Math.abs(t.x - i.x), w = Math.abs(t.y - i.y);
            (p = c > g ? _ : w) !== 0 || t.equals(i) || (p = Math.max(_, w));
          }
          return ae.isTrue(!(p === 0 && !t.equals(i)), "Bad distance calculation"), p;
        } }, { key: "nonRobustComputeEdgeDistance", value: function(t, i, a) {
          var c = t.x - i.x, g = t.y - i.y, p = Math.sqrt(c * c + g * g);
          return ae.isTrue(!(p === 0 && !t.equals(i)), "Invalid distance calculation"), p;
        } }]);
      }();
      qe.DONT_INTERSECT = 0, qe.DO_INTERSECT = 1, qe.COLLINEAR = 2, qe.NO_INTERSECTION = 0, qe.POINT_INTERSECTION = 1, qe.COLLINEAR_INTERSECTION = 2;
      var yr = function(o) {
        function t() {
          return u(this, t), s(this, t);
        }
        return y(t, o), h(t, [{ key: "isInSegmentEnvelopes", value: function(i) {
          var a = new Le(this._inputLines[0][0], this._inputLines[0][1]), c = new Le(this._inputLines[1][0], this._inputLines[1][1]);
          return a.contains(i) && c.contains(i);
        } }, { key: "computeIntersection", value: function() {
          if (arguments.length !== 3) return M(t, "computeIntersection", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1], c = arguments[2];
          if (this._isProper = !1, Le.intersects(a, c, i) && _e.index(a, c, i) === 0 && _e.index(c, a, i) === 0) return this._isProper = !0, (i.equals(a) || i.equals(c)) && (this._isProper = !1), this._result = qe.POINT_INTERSECTION, null;
          this._result = qe.NO_INTERSECTION;
        } }, { key: "intersection", value: function(i, a, c, g) {
          var p = this.intersectionSafe(i, a, c, g);
          return this.isInSegmentEnvelopes(p) || (p = new V(t.nearestEndpoint(i, a, c, g))), this._precisionModel !== null && this._precisionModel.makePrecise(p), p;
        } }, { key: "checkDD", value: function(i, a, c, g, p) {
          var _ = Ur.intersection(i, a, c, g), w = this.isInSegmentEnvelopes(_);
          at.out.println("DD in env = " + w + "  --------------------- " + _), p.distance(_) > 1e-4 && at.out.println("Distance = " + p.distance(_));
        } }, { key: "intersectionSafe", value: function(i, a, c, g) {
          var p = Ti.intersection(i, a, c, g);
          return p === null && (p = t.nearestEndpoint(i, a, c, g)), p;
        } }, { key: "computeCollinearIntersection", value: function(i, a, c, g) {
          var p = Le.intersects(i, a, c), _ = Le.intersects(i, a, g), w = Le.intersects(c, g, i), L = Le.intersects(c, g, a);
          return p && _ ? (this._intPt[0] = c, this._intPt[1] = g, qe.COLLINEAR_INTERSECTION) : w && L ? (this._intPt[0] = i, this._intPt[1] = a, qe.COLLINEAR_INTERSECTION) : p && w ? (this._intPt[0] = c, this._intPt[1] = i, !c.equals(i) || _ || L ? qe.COLLINEAR_INTERSECTION : qe.POINT_INTERSECTION) : p && L ? (this._intPt[0] = c, this._intPt[1] = a, !c.equals(a) || _ || w ? qe.COLLINEAR_INTERSECTION : qe.POINT_INTERSECTION) : _ && w ? (this._intPt[0] = g, this._intPt[1] = i, !g.equals(i) || p || L ? qe.COLLINEAR_INTERSECTION : qe.POINT_INTERSECTION) : _ && L ? (this._intPt[0] = g, this._intPt[1] = a, !g.equals(a) || p || w ? qe.COLLINEAR_INTERSECTION : qe.POINT_INTERSECTION) : qe.NO_INTERSECTION;
        } }, { key: "computeIntersect", value: function(i, a, c, g) {
          if (this._isProper = !1, !Le.intersects(i, a, c, g)) return qe.NO_INTERSECTION;
          var p = _e.index(i, a, c), _ = _e.index(i, a, g);
          if (p > 0 && _ > 0 || p < 0 && _ < 0) return qe.NO_INTERSECTION;
          var w = _e.index(c, g, i), L = _e.index(c, g, a);
          return w > 0 && L > 0 || w < 0 && L < 0 ? qe.NO_INTERSECTION : p === 0 && _ === 0 && w === 0 && L === 0 ? this.computeCollinearIntersection(i, a, c, g) : (p === 0 || _ === 0 || w === 0 || L === 0 ? (this._isProper = !1, i.equals2D(c) || i.equals2D(g) ? this._intPt[0] = i : a.equals2D(c) || a.equals2D(g) ? this._intPt[0] = a : p === 0 ? this._intPt[0] = new V(c) : _ === 0 ? this._intPt[0] = new V(g) : w === 0 ? this._intPt[0] = new V(i) : L === 0 && (this._intPt[0] = new V(a))) : (this._isProper = !0, this._intPt[0] = this.intersection(i, a, c, g)), qe.POINT_INTERSECTION);
        } }], [{ key: "nearestEndpoint", value: function(i, a, c, g) {
          var p = i, _ = Gt.pointToSegment(i, c, g), w = Gt.pointToSegment(a, c, g);
          return w < _ && (_ = w, p = a), (w = Gt.pointToSegment(c, i, a)) < _ && (_ = w, p = c), (w = Gt.pointToSegment(g, i, a)) < _ && (_ = w, p = g), p;
        } }]);
      }(qe), Vd = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "countSegment", value: function(t, i) {
          if (t.x < this._p.x && i.x < this._p.x) return null;
          if (this._p.x === i.x && this._p.y === i.y) return this._isPointOnSegment = !0, null;
          if (t.y === this._p.y && i.y === this._p.y) {
            var a = t.x, c = i.x;
            return a > c && (a = i.x, c = t.x), this._p.x >= a && this._p.x <= c && (this._isPointOnSegment = !0), null;
          }
          if (t.y > this._p.y && i.y <= this._p.y || i.y > this._p.y && t.y <= this._p.y) {
            var g = _e.index(t, i, this._p);
            if (g === _e.COLLINEAR) return this._isPointOnSegment = !0, null;
            i.y < t.y && (g = -g), g === _e.LEFT && this._crossingCount++;
          }
        } }, { key: "isPointInPolygon", value: function() {
          return this.getLocation() !== C.EXTERIOR;
        } }, { key: "getLocation", value: function() {
          return this._isPointOnSegment ? C.BOUNDARY : this._crossingCount % 2 == 1 ? C.INTERIOR : C.EXTERIOR;
        } }, { key: "isOnSegment", value: function() {
          return this._isPointOnSegment;
        } }], [{ key: "constructor_", value: function() {
          this._p = null, this._crossingCount = 0, this._isPointOnSegment = !1;
          var t = arguments[0];
          this._p = t;
        } }, { key: "locatePointInRing", value: function() {
          if (arguments[0] instanceof V && Ee(arguments[1], ke)) {
            for (var t = arguments[1], i = new o(arguments[0]), a = new V(), c = new V(), g = 1; g < t.size(); g++) if (t.getCoordinate(g, a), t.getCoordinate(g - 1, c), i.countSegment(a, c), i.isOnSegment()) return i.getLocation();
            return i.getLocation();
          }
          if (arguments[0] instanceof V && arguments[1] instanceof Array) {
            for (var p = arguments[1], _ = new o(arguments[0]), w = 1; w < p.length; w++) {
              var L = p[w], q = p[w - 1];
              if (_.countSegment(L, q), _.isOnSegment()) return _.getLocation();
            }
            return _.getLocation();
          }
        } }]);
      }(), co = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isOnLine", value: function() {
          if (arguments[0] instanceof V && Ee(arguments[1], ke)) {
            for (var t = arguments[0], i = arguments[1], a = new yr(), c = new V(), g = new V(), p = i.size(), _ = 1; _ < p; _++) if (i.getCoordinate(_ - 1, c), i.getCoordinate(_, g), a.computeIntersection(t, c, g), a.hasIntersection()) return !0;
            return !1;
          }
          if (arguments[0] instanceof V && arguments[1] instanceof Array) {
            for (var w = arguments[0], L = arguments[1], q = new yr(), Z = 1; Z < L.length; Z++) {
              var Q = L[Z - 1], le = L[Z];
              if (q.computeIntersection(w, Q, le), q.hasIntersection()) return !0;
            }
            return !1;
          }
        } }, { key: "locateInRing", value: function(t, i) {
          return Vd.locatePointInRing(t, i);
        } }, { key: "isInRing", value: function(t, i) {
          return o.locateInRing(t, i) !== C.EXTERIOR;
        } }]);
      }(), Ut = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setAllLocations", value: function(t) {
          for (var i = 0; i < this.location.length; i++) this.location[i] = t;
        } }, { key: "isNull", value: function() {
          for (var t = 0; t < this.location.length; t++) if (this.location[t] !== C.NONE) return !1;
          return !0;
        } }, { key: "setAllLocationsIfNull", value: function(t) {
          for (var i = 0; i < this.location.length; i++) this.location[i] === C.NONE && (this.location[i] = t);
        } }, { key: "isLine", value: function() {
          return this.location.length === 1;
        } }, { key: "merge", value: function(t) {
          if (t.location.length > this.location.length) {
            var i = new Array(3).fill(null);
            i[te.ON] = this.location[te.ON], i[te.LEFT] = C.NONE, i[te.RIGHT] = C.NONE, this.location = i;
          }
          for (var a = 0; a < this.location.length; a++) this.location[a] === C.NONE && a < t.location.length && (this.location[a] = t.location[a]);
        } }, { key: "getLocations", value: function() {
          return this.location;
        } }, { key: "flip", value: function() {
          if (this.location.length <= 1) return null;
          var t = this.location[te.LEFT];
          this.location[te.LEFT] = this.location[te.RIGHT], this.location[te.RIGHT] = t;
        } }, { key: "toString", value: function() {
          var t = new Ft();
          return this.location.length > 1 && t.append(C.toLocationSymbol(this.location[te.LEFT])), t.append(C.toLocationSymbol(this.location[te.ON])), this.location.length > 1 && t.append(C.toLocationSymbol(this.location[te.RIGHT])), t.toString();
        } }, { key: "setLocations", value: function(t, i, a) {
          this.location[te.ON] = t, this.location[te.LEFT] = i, this.location[te.RIGHT] = a;
        } }, { key: "get", value: function(t) {
          return t < this.location.length ? this.location[t] : C.NONE;
        } }, { key: "isArea", value: function() {
          return this.location.length > 1;
        } }, { key: "isAnyNull", value: function() {
          for (var t = 0; t < this.location.length; t++) if (this.location[t] === C.NONE) return !0;
          return !1;
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.setLocation(te.ON, t);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.location[i] = a;
          }
        } }, { key: "init", value: function(t) {
          this.location = new Array(t).fill(null), this.setAllLocations(C.NONE);
        } }, { key: "isEqualOnSide", value: function(t, i) {
          return this.location[i] === t.location[i];
        } }, { key: "allPositionsEqual", value: function(t) {
          for (var i = 0; i < this.location.length; i++) if (this.location[i] !== t) return !1;
          return !0;
        } }], [{ key: "constructor_", value: function() {
          if (this.location = null, arguments.length === 1) {
            if (arguments[0] instanceof Array) {
              var t = arguments[0];
              this.init(t.length);
            } else if (Number.isInteger(arguments[0])) {
              var i = arguments[0];
              this.init(1), this.location[te.ON] = i;
            } else if (arguments[0] instanceof o) {
              var a = arguments[0];
              if (this.init(a.location.length), a !== null) for (var c = 0; c < this.location.length; c++) this.location[c] = a.location[c];
            }
          } else if (arguments.length === 3) {
            var g = arguments[0], p = arguments[1], _ = arguments[2];
            this.init(3), this.location[te.ON] = g, this.location[te.LEFT] = p, this.location[te.RIGHT] = _;
          }
        } }]);
      }(), zt = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getGeometryCount", value: function() {
          var t = 0;
          return this.elt[0].isNull() || t++, this.elt[1].isNull() || t++, t;
        } }, { key: "setAllLocations", value: function(t, i) {
          this.elt[t].setAllLocations(i);
        } }, { key: "isNull", value: function(t) {
          return this.elt[t].isNull();
        } }, { key: "setAllLocationsIfNull", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.setAllLocationsIfNull(0, t), this.setAllLocationsIfNull(1, t);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.elt[i].setAllLocationsIfNull(a);
          }
        } }, { key: "isLine", value: function(t) {
          return this.elt[t].isLine();
        } }, { key: "merge", value: function(t) {
          for (var i = 0; i < 2; i++) this.elt[i] === null && t.elt[i] !== null ? this.elt[i] = new Ut(t.elt[i]) : this.elt[i].merge(t.elt[i]);
        } }, { key: "flip", value: function() {
          this.elt[0].flip(), this.elt[1].flip();
        } }, { key: "getLocation", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            return this.elt[t].get(te.ON);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return this.elt[i].get(a);
          }
        } }, { key: "toString", value: function() {
          var t = new Ft();
          return this.elt[0] !== null && (t.append("A:"), t.append(this.elt[0].toString())), this.elt[1] !== null && (t.append(" B:"), t.append(this.elt[1].toString())), t.toString();
        } }, { key: "isArea", value: function() {
          if (arguments.length === 0) return this.elt[0].isArea() || this.elt[1].isArea();
          if (arguments.length === 1) {
            var t = arguments[0];
            return this.elt[t].isArea();
          }
        } }, { key: "isAnyNull", value: function(t) {
          return this.elt[t].isAnyNull();
        } }, { key: "setLocation", value: function() {
          if (arguments.length === 2) {
            var t = arguments[0], i = arguments[1];
            this.elt[t].setLocation(te.ON, i);
          } else if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2];
            this.elt[a].setLocation(c, g);
          }
        } }, { key: "isEqualOnSide", value: function(t, i) {
          return this.elt[0].isEqualOnSide(t.elt[0], i) && this.elt[1].isEqualOnSide(t.elt[1], i);
        } }, { key: "allPositionsEqual", value: function(t, i) {
          return this.elt[t].allPositionsEqual(i);
        } }, { key: "toLine", value: function(t) {
          this.elt[t].isArea() && (this.elt[t] = new Ut(this.elt[t].location[0]));
        } }], [{ key: "constructor_", value: function() {
          if (this.elt = new Array(2).fill(null), arguments.length === 1) {
            if (Number.isInteger(arguments[0])) {
              var t = arguments[0];
              this.elt[0] = new Ut(t), this.elt[1] = new Ut(t);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              this.elt[0] = new Ut(i.elt[0]), this.elt[1] = new Ut(i.elt[1]);
            }
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.elt[0] = new Ut(C.NONE), this.elt[1] = new Ut(C.NONE), this.elt[a].setLocation(c);
          } else if (arguments.length === 3) {
            var g = arguments[0], p = arguments[1], _ = arguments[2];
            this.elt[0] = new Ut(g, p, _), this.elt[1] = new Ut(g, p, _);
          } else if (arguments.length === 4) {
            var w = arguments[0], L = arguments[1], q = arguments[2], Z = arguments[3];
            this.elt[0] = new Ut(C.NONE, C.NONE, C.NONE), this.elt[1] = new Ut(C.NONE, C.NONE, C.NONE), this.elt[w].setLocations(L, q, Z);
          }
        } }, { key: "toLineLabel", value: function(t) {
          for (var i = new o(C.NONE), a = 0; a < 2; a++) i.setLocation(a, t.getLocation(a));
          return i;
        } }]);
      }(), As = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "computeRing", value: function() {
          if (this._ring !== null) return null;
          for (var o = new Array(this._pts.size()).fill(null), t = 0; t < this._pts.size(); t++) o[t] = this._pts.get(t);
          this._ring = this._geometryFactory.createLinearRing(o), this._isHole = _e.isCCW(this._ring.getCoordinates());
        } }, { key: "isIsolated", value: function() {
          return this._label.getGeometryCount() === 1;
        } }, { key: "computePoints", value: function(o) {
          this._startDe = o;
          var t = o, i = !0;
          do {
            if (t === null) throw new wt("Found null DirectedEdge");
            if (t.getEdgeRing() === this) throw new wt("Directed Edge visited twice during ring-building at " + t.getCoordinate());
            this._edges.add(t);
            var a = t.getLabel();
            ae.isTrue(a.isArea()), this.mergeLabel(a), this.addPoints(t.getEdge(), t.isForward(), i), i = !1, this.setEdgeRing(t, this), t = this.getNext(t);
          } while (t !== this._startDe);
        } }, { key: "getLinearRing", value: function() {
          return this._ring;
        } }, { key: "getCoordinate", value: function(o) {
          return this._pts.get(o);
        } }, { key: "computeMaxNodeDegree", value: function() {
          this._maxNodeDegree = 0;
          var o = this._startDe;
          do {
            var t = o.getNode().getEdges().getOutgoingDegree(this);
            t > this._maxNodeDegree && (this._maxNodeDegree = t), o = this.getNext(o);
          } while (o !== this._startDe);
          this._maxNodeDegree *= 2;
        } }, { key: "addPoints", value: function(o, t, i) {
          var a = o.getCoordinates();
          if (t) {
            var c = 1;
            i && (c = 0);
            for (var g = c; g < a.length; g++) this._pts.add(a[g]);
          } else {
            var p = a.length - 2;
            i && (p = a.length - 1);
            for (var _ = p; _ >= 0; _--) this._pts.add(a[_]);
          }
        } }, { key: "isHole", value: function() {
          return this._isHole;
        } }, { key: "setInResult", value: function() {
          var o = this._startDe;
          do
            o.getEdge().setInResult(!0), o = o.getNext();
          while (o !== this._startDe);
        } }, { key: "containsPoint", value: function(o) {
          var t = this.getLinearRing();
          if (!t.getEnvelopeInternal().contains(o) || !co.isInRing(o, t.getCoordinates())) return !1;
          for (var i = this._holes.iterator(); i.hasNext(); )
            if (i.next().containsPoint(o)) return !1;
          return !0;
        } }, { key: "addHole", value: function(o) {
          this._holes.add(o);
        } }, { key: "isShell", value: function() {
          return this._shell === null;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "getMaxNodeDegree", value: function() {
          return this._maxNodeDegree < 0 && this.computeMaxNodeDegree(), this._maxNodeDegree;
        } }, { key: "getShell", value: function() {
          return this._shell;
        } }, { key: "mergeLabel", value: function() {
          if (arguments.length === 1) {
            var o = arguments[0];
            this.mergeLabel(o, 0), this.mergeLabel(o, 1);
          } else if (arguments.length === 2) {
            var t = arguments[1], i = arguments[0].getLocation(t, te.RIGHT);
            if (i === C.NONE) return null;
            if (this._label.getLocation(t) === C.NONE) return this._label.setLocation(t, i), null;
          }
        } }, { key: "setShell", value: function(o) {
          this._shell = o, o !== null && o.addHole(this);
        } }, { key: "toPolygon", value: function(o) {
          for (var t = new Array(this._holes.size()).fill(null), i = 0; i < this._holes.size(); i++) t[i] = this._holes.get(i).getLinearRing();
          return o.createPolygon(this.getLinearRing(), t);
        } }], [{ key: "constructor_", value: function() {
          if (this._startDe = null, this._maxNodeDegree = -1, this._edges = new pe(), this._pts = new pe(), this._label = new zt(C.NONE), this._ring = null, this._isHole = null, this._shell = null, this._holes = new pe(), this._geometryFactory = null, arguments.length !== 0) {
            if (arguments.length === 2) {
              var o = arguments[0], t = arguments[1];
              this._geometryFactory = t, this.computePoints(o), this.computeRing();
            }
          }
        } }]);
      }(), Xd = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "setEdgeRing", value: function(i, a) {
          i.setMinEdgeRing(a);
        } }, { key: "getNext", value: function(i) {
          return i.getNextMin();
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          As.constructor_.call(this, i, a);
        } }]);
      }(As), Wd = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "buildMinimalRings", value: function() {
          var i = new pe(), a = this._startDe;
          do {
            if (a.getMinEdgeRing() === null) {
              var c = new Xd(a, this._geometryFactory);
              i.add(c);
            }
            a = a.getNext();
          } while (a !== this._startDe);
          return i;
        } }, { key: "setEdgeRing", value: function(i, a) {
          i.setEdgeRing(a);
        } }, { key: "linkDirectedEdgesForMinimalEdgeRings", value: function() {
          var i = this._startDe;
          do
            i.getNode().getEdges().linkMinimalDirectedEdges(this), i = i.getNext();
          while (i !== this._startDe);
        } }, { key: "getNext", value: function(i) {
          return i.getNext();
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0], a = arguments[1];
          As.constructor_.call(this, i, a);
        } }]);
      }(As), wl = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "setVisited", value: function(o) {
          this._isVisited = o;
        } }, { key: "setInResult", value: function(o) {
          this._isInResult = o;
        } }, { key: "isCovered", value: function() {
          return this._isCovered;
        } }, { key: "isCoveredSet", value: function() {
          return this._isCoveredSet;
        } }, { key: "setLabel", value: function(o) {
          this._label = o;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "setCovered", value: function(o) {
          this._isCovered = o, this._isCoveredSet = !0;
        } }, { key: "updateIM", value: function(o) {
          ae.isTrue(this._label.getGeometryCount() >= 2, "found partial label"), this.computeIM(o);
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          if (this._label = null, this._isInResult = !1, this._isCovered = !1, this._isCoveredSet = !1, this._isVisited = !1, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this._label = o;
            }
          }
        } }]);
      }(), Cs = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "isIncidentEdgeInResult", value: function() {
          for (var i = this.getEdges().getEdges().iterator(); i.hasNext(); )
            if (i.next().getEdge().isInResult()) return !0;
          return !1;
        } }, { key: "isIsolated", value: function() {
          return this._label.getGeometryCount() === 1;
        } }, { key: "getCoordinate", value: function() {
          return this._coord;
        } }, { key: "print", value: function(i) {
          i.println("node " + this._coord + " lbl: " + this._label);
        } }, { key: "computeIM", value: function(i) {
        } }, { key: "computeMergedLocation", value: function(i, a) {
          var c = C.NONE;
          if (c = this._label.getLocation(a), !i.isNull(a)) {
            var g = i.getLocation(a);
            c !== C.BOUNDARY && (c = g);
          }
          return c;
        } }, { key: "setLabel", value: function() {
          if (arguments.length !== 2 || !Number.isInteger(arguments[1]) || !Number.isInteger(arguments[0])) return M(t, "setLabel", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          this._label === null ? this._label = new zt(i, a) : this._label.setLocation(i, a);
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "mergeLabel", value: function() {
          if (arguments[0] instanceof t) {
            var i = arguments[0];
            this.mergeLabel(i._label);
          } else if (arguments[0] instanceof zt) for (var a = arguments[0], c = 0; c < 2; c++) {
            var g = this.computeMergedLocation(a, c);
            this._label.getLocation(c) === C.NONE && this._label.setLocation(c, g);
          }
        } }, { key: "add", value: function(i) {
          this._edges.insert(i), i.setNode(this);
        } }, { key: "setLabelBoundary", value: function(i) {
          if (this._label === null) return null;
          var a = C.NONE;
          this._label !== null && (a = this._label.getLocation(i));
          var c = null;
          switch (a) {
            case C.BOUNDARY:
              c = C.INTERIOR;
              break;
            case C.INTERIOR:
            default:
              c = C.BOUNDARY;
          }
          this._label.setLocation(i, c);
        } }], [{ key: "constructor_", value: function() {
          this._coord = null, this._edges = null;
          var i = arguments[0], a = arguments[1];
          this._coord = i, this._edges = a, this._label = new zt(0, C.NONE);
        } }]);
      }(wl), Zd = function(o) {
        function t() {
          return u(this, t), s(this, t, arguments);
        }
        return y(t, o), h(t);
      }(tt);
      function kl(o) {
        return o == null ? 0 : o.color;
      }
      function Ne(o) {
        return o == null ? null : o.parent;
      }
      function yn(o, t) {
        o !== null && (o.color = t);
      }
      function ho(o) {
        return o == null ? null : o.left;
      }
      function Sl(o) {
        return o == null ? null : o.right;
      }
      var Gi = function(o) {
        function t() {
          var i;
          return u(this, t), (i = s(this, t)).root_ = null, i.size_ = 0, i;
        }
        return y(t, o), h(t, [{ key: "get", value: function(i) {
          for (var a = this.root_; a !== null; ) {
            var c = i.compareTo(a.key);
            if (c < 0) a = a.left;
            else {
              if (!(c > 0)) return a.value;
              a = a.right;
            }
          }
          return null;
        } }, { key: "put", value: function(i, a) {
          if (this.root_ === null) return this.root_ = { key: i, value: a, left: null, right: null, parent: null, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } }, this.size_ = 1, null;
          var c, g, p = this.root_;
          do
            if (c = p, (g = i.compareTo(p.key)) < 0) p = p.left;
            else {
              if (!(g > 0)) {
                var _ = p.value;
                return p.value = a, _;
              }
              p = p.right;
            }
          while (p !== null);
          var w = { key: i, left: null, right: null, value: a, parent: c, color: 0, getValue: function() {
            return this.value;
          }, getKey: function() {
            return this.key;
          } };
          return g < 0 ? c.left = w : c.right = w, this.fixAfterInsertion(w), this.size_++, null;
        } }, { key: "fixAfterInsertion", value: function(i) {
          var a;
          for (i.color = 1; i != null && i !== this.root_ && i.parent.color === 1; ) Ne(i) === ho(Ne(Ne(i))) ? kl(a = Sl(Ne(Ne(i)))) === 1 ? (yn(Ne(i), 0), yn(a, 0), yn(Ne(Ne(i)), 1), i = Ne(Ne(i))) : (i === Sl(Ne(i)) && (i = Ne(i), this.rotateLeft(i)), yn(Ne(i), 0), yn(Ne(Ne(i)), 1), this.rotateRight(Ne(Ne(i)))) : kl(a = ho(Ne(Ne(i)))) === 1 ? (yn(Ne(i), 0), yn(a, 0), yn(Ne(Ne(i)), 1), i = Ne(Ne(i))) : (i === ho(Ne(i)) && (i = Ne(i), this.rotateRight(i)), yn(Ne(i), 0), yn(Ne(Ne(i)), 1), this.rotateLeft(Ne(Ne(i))));
          this.root_.color = 0;
        } }, { key: "values", value: function() {
          var i = new pe(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a.value); (a = t.successor(a)) !== null; ) i.add(a.value);
          return i;
        } }, { key: "entrySet", value: function() {
          var i = new pn(), a = this.getFirstEntry();
          if (a !== null) for (i.add(a); (a = t.successor(a)) !== null; ) i.add(a);
          return i;
        } }, { key: "rotateLeft", value: function(i) {
          if (i != null) {
            var a = i.right;
            i.right = a.left, a.left != null && (a.left.parent = i), a.parent = i.parent, i.parent == null ? this.root_ = a : i.parent.left === i ? i.parent.left = a : i.parent.right = a, a.left = i, i.parent = a;
          }
        } }, { key: "rotateRight", value: function(i) {
          if (i != null) {
            var a = i.left;
            i.left = a.right, a.right != null && (a.right.parent = i), a.parent = i.parent, i.parent == null ? this.root_ = a : i.parent.right === i ? i.parent.right = a : i.parent.left = a, a.right = i, i.parent = a;
          }
        } }, { key: "getFirstEntry", value: function() {
          var i = this.root_;
          if (i != null) for (; i.left != null; ) i = i.left;
          return i;
        } }, { key: "size", value: function() {
          return this.size_;
        } }, { key: "containsKey", value: function(i) {
          for (var a = this.root_; a !== null; ) {
            var c = i.compareTo(a.key);
            if (c < 0) a = a.left;
            else {
              if (!(c > 0)) return !0;
              a = a.right;
            }
          }
          return !1;
        } }], [{ key: "successor", value: function(i) {
          var a;
          if (i === null) return null;
          if (i.right !== null) {
            for (a = i.right; a.left !== null; ) a = a.left;
            return a;
          }
          a = i.parent;
          for (var c = i; a !== null && c === a.right; ) c = a, a = a.parent;
          return a;
        } }]);
      }(Zd), Ml = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "find", value: function(o) {
          return this.nodeMap.get(o);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof V) {
            var o = arguments[0], t = this.nodeMap.get(o);
            return t === null && (t = this.nodeFact.createNode(o), this.nodeMap.put(o, t)), t;
          }
          if (arguments[0] instanceof Cs) {
            var i = arguments[0], a = this.nodeMap.get(i.getCoordinate());
            return a === null ? (this.nodeMap.put(i.getCoordinate(), i), i) : (a.mergeLabel(i), a);
          }
        } }, { key: "print", value: function(o) {
          for (var t = this.iterator(); t.hasNext(); )
            t.next().print(o);
        } }, { key: "iterator", value: function() {
          return this.nodeMap.values().iterator();
        } }, { key: "values", value: function() {
          return this.nodeMap.values();
        } }, { key: "getBoundaryNodes", value: function(o) {
          for (var t = new pe(), i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            a.getLabel().getLocation(o) === C.BOUNDARY && t.add(a);
          }
          return t;
        } }, { key: "add", value: function(o) {
          var t = o.getCoordinate();
          this.addNode(t).add(o);
        } }], [{ key: "constructor_", value: function() {
          this.nodeMap = new Gi(), this.nodeFact = null;
          var o = arguments[0];
          this.nodeFact = o;
        } }]);
      }(), gt = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "isNorthern", value: function(t) {
          return t === o.NE || t === o.NW;
        } }, { key: "isOpposite", value: function(t, i) {
          return t !== i && (t - i + 4) % 4 === 2;
        } }, { key: "commonHalfPlane", value: function(t, i) {
          if (t === i) return t;
          if ((t - i + 4) % 4 === 2) return -1;
          var a = t < i ? t : i;
          return a === 0 && (t > i ? t : i) === 3 ? 3 : a;
        } }, { key: "isInHalfPlane", value: function(t, i) {
          return i === o.SE ? t === o.SE || t === o.SW : t === i || t === i + 1;
        } }, { key: "quadrant", value: function() {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var t = arguments[0], i = arguments[1];
            if (t === 0 && i === 0) throw new X("Cannot compute the quadrant for point ( " + t + ", " + i + " )");
            return t >= 0 ? i >= 0 ? o.NE : o.SE : i >= 0 ? o.NW : o.SW;
          }
          if (arguments[0] instanceof V && arguments[1] instanceof V) {
            var a = arguments[0], c = arguments[1];
            if (c.x === a.x && c.y === a.y) throw new X("Cannot compute the quadrant for two identical points " + a);
            return c.x >= a.x ? c.y >= a.y ? o.NE : o.SE : c.y >= a.y ? o.NW : o.SW;
          }
        } }]);
      }();
      gt.NE = 0, gt.NW = 1, gt.SW = 2, gt.SE = 3;
      var Il = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareDirection", value: function(t) {
          return this._dx === t._dx && this._dy === t._dy ? 0 : this._quadrant > t._quadrant ? 1 : this._quadrant < t._quadrant ? -1 : _e.index(t._p0, t._p1, this._p1);
        } }, { key: "getDy", value: function() {
          return this._dy;
        } }, { key: "getCoordinate", value: function() {
          return this._p0;
        } }, { key: "setNode", value: function(t) {
          this._node = t;
        } }, { key: "print", value: function(t) {
          var i = Math.atan2(this._dy, this._dx), a = this.getClass().getName(), c = a.lastIndexOf("."), g = a.substring(c + 1);
          t.print("  " + g + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + i + "   " + this._label);
        } }, { key: "compareTo", value: function(t) {
          var i = t;
          return this.compareDirection(i);
        } }, { key: "getDirectedCoordinate", value: function() {
          return this._p1;
        } }, { key: "getDx", value: function() {
          return this._dx;
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "getQuadrant", value: function() {
          return this._quadrant;
        } }, { key: "getNode", value: function() {
          return this._node;
        } }, { key: "toString", value: function() {
          var t = Math.atan2(this._dy, this._dx), i = this.getClass().getName(), a = i.lastIndexOf(".");
          return "  " + i.substring(a + 1) + ": " + this._p0 + " - " + this._p1 + " " + this._quadrant + ":" + t + "   " + this._label;
        } }, { key: "computeLabel", value: function(t) {
        } }, { key: "init", value: function(t, i) {
          this._p0 = t, this._p1 = i, this._dx = i.x - t.x, this._dy = i.y - t.y, this._quadrant = gt.quadrant(this._dx, this._dy), ae.isTrue(!(this._dx === 0 && this._dy === 0), "EdgeEnd with identical endpoints found");
        } }, { key: "interfaces_", get: function() {
          return [$];
        } }], [{ key: "constructor_", value: function() {
          if (this._edge = null, this._label = null, this._node = null, this._p0 = null, this._p1 = null, this._dx = null, this._dy = null, this._quadrant = null, arguments.length === 1) {
            var t = arguments[0];
            this._edge = t;
          } else if (arguments.length === 3) {
            var i = arguments[0], a = arguments[1], c = arguments[2];
            o.constructor_.call(this, i, a, c, null);
          } else if (arguments.length === 4) {
            var g = arguments[0], p = arguments[1], _ = arguments[2], w = arguments[3];
            o.constructor_.call(this, g), this.init(p, _), this._label = w;
          }
        } }]);
      }(), fo = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "getNextMin", value: function() {
          return this._nextMin;
        } }, { key: "getDepth", value: function(i) {
          return this._depth[i];
        } }, { key: "setVisited", value: function(i) {
          this._isVisited = i;
        } }, { key: "computeDirectedLabel", value: function() {
          this._label = new zt(this._edge.getLabel()), this._isForward || this._label.flip();
        } }, { key: "getNext", value: function() {
          return this._next;
        } }, { key: "setDepth", value: function(i, a) {
          if (this._depth[i] !== -999 && this._depth[i] !== a) throw new wt("assigned depths do not match", this.getCoordinate());
          this._depth[i] = a;
        } }, { key: "isInteriorAreaEdge", value: function() {
          for (var i = !0, a = 0; a < 2; a++) this._label.isArea(a) && this._label.getLocation(a, te.LEFT) === C.INTERIOR && this._label.getLocation(a, te.RIGHT) === C.INTERIOR || (i = !1);
          return i;
        } }, { key: "setNextMin", value: function(i) {
          this._nextMin = i;
        } }, { key: "print", value: function(i) {
          M(t, "print", this, 1).call(this, i), i.print(" " + this._depth[te.LEFT] + "/" + this._depth[te.RIGHT]), i.print(" (" + this.getDepthDelta() + ")"), this._isInResult && i.print(" inResult");
        } }, { key: "setMinEdgeRing", value: function(i) {
          this._minEdgeRing = i;
        } }, { key: "isLineEdge", value: function() {
          var i = this._label.isLine(0) || this._label.isLine(1), a = !this._label.isArea(0) || this._label.allPositionsEqual(0, C.EXTERIOR), c = !this._label.isArea(1) || this._label.allPositionsEqual(1, C.EXTERIOR);
          return i && a && c;
        } }, { key: "setEdgeRing", value: function(i) {
          this._edgeRing = i;
        } }, { key: "getMinEdgeRing", value: function() {
          return this._minEdgeRing;
        } }, { key: "getDepthDelta", value: function() {
          var i = this._edge.getDepthDelta();
          return this._isForward || (i = -i), i;
        } }, { key: "setInResult", value: function(i) {
          this._isInResult = i;
        } }, { key: "getSym", value: function() {
          return this._sym;
        } }, { key: "isForward", value: function() {
          return this._isForward;
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "printEdge", value: function(i) {
          this.print(i), i.print(" "), this._isForward ? this._edge.print(i) : this._edge.printReverse(i);
        } }, { key: "setSym", value: function(i) {
          this._sym = i;
        } }, { key: "setVisitedEdge", value: function(i) {
          this.setVisited(i), this._sym.setVisited(i);
        } }, { key: "setEdgeDepths", value: function(i, a) {
          var c = this.getEdge().getDepthDelta();
          this._isForward || (c = -c);
          var g = 1;
          i === te.LEFT && (g = -1);
          var p = te.opposite(i), _ = a + c * g;
          this.setDepth(i, a), this.setDepth(p, _);
        } }, { key: "getEdgeRing", value: function() {
          return this._edgeRing;
        } }, { key: "isInResult", value: function() {
          return this._isInResult;
        } }, { key: "setNext", value: function(i) {
          this._next = i;
        } }, { key: "isVisited", value: function() {
          return this._isVisited;
        } }], [{ key: "constructor_", value: function() {
          this._isForward = null, this._isInResult = !1, this._isVisited = !1, this._sym = null, this._next = null, this._nextMin = null, this._edgeRing = null, this._minEdgeRing = null, this._depth = [0, -999, -999];
          var i = arguments[0], a = arguments[1];
          if (Il.constructor_.call(this, i), this._isForward = a, a) this.init(i.getCoordinate(0), i.getCoordinate(1));
          else {
            var c = i.getNumPoints() - 1;
            this.init(i.getCoordinate(c), i.getCoordinate(c - 1));
          }
          this.computeDirectedLabel();
        } }, { key: "depthFactor", value: function(i, a) {
          return i === C.EXTERIOR && a === C.INTERIOR ? 1 : i === C.INTERIOR && a === C.EXTERIOR ? -1 : 0;
        } }]);
      }(Il), Ll = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "createNode", value: function(o) {
          return new Cs(o, null);
        } }]);
      }(), bl = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "printEdges", value: function(o) {
          o.println("Edges:");
          for (var t = 0; t < this._edges.size(); t++) {
            o.println("edge " + t + ":");
            var i = this._edges.get(t);
            i.print(o), i.eiList.print(o);
          }
        } }, { key: "find", value: function(o) {
          return this._nodes.find(o);
        } }, { key: "addNode", value: function() {
          if (arguments[0] instanceof Cs) {
            var o = arguments[0];
            return this._nodes.addNode(o);
          }
          if (arguments[0] instanceof V) {
            var t = arguments[0];
            return this._nodes.addNode(t);
          }
        } }, { key: "getNodeIterator", value: function() {
          return this._nodes.iterator();
        } }, { key: "linkResultDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkResultDirectedEdges();
        } }, { key: "debugPrintln", value: function(o) {
          at.out.println(o);
        } }, { key: "isBoundaryNode", value: function(o, t) {
          var i = this._nodes.find(t);
          if (i === null) return !1;
          var a = i.getLabel();
          return a !== null && a.getLocation(o) === C.BOUNDARY;
        } }, { key: "linkAllDirectedEdges", value: function() {
          for (var o = this._nodes.iterator(); o.hasNext(); )
            o.next().getEdges().linkAllDirectedEdges();
        } }, { key: "matchInSameDirection", value: function(o, t, i, a) {
          return !!o.equals(i) && _e.index(o, t, a) === _e.COLLINEAR && gt.quadrant(o, t) === gt.quadrant(i, a);
        } }, { key: "getEdgeEnds", value: function() {
          return this._edgeEndList;
        } }, { key: "debugPrint", value: function(o) {
          at.out.print(o);
        } }, { key: "getEdgeIterator", value: function() {
          return this._edges.iterator();
        } }, { key: "findEdgeInSameDirection", value: function(o, t) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), c = a.getCoordinates();
            if (this.matchInSameDirection(o, t, c[0], c[1]) || this.matchInSameDirection(o, t, c[c.length - 1], c[c.length - 2])) return a;
          }
          return null;
        } }, { key: "insertEdge", value: function(o) {
          this._edges.add(o);
        } }, { key: "findEdgeEnd", value: function(o) {
          for (var t = this.getEdgeEnds().iterator(); t.hasNext(); ) {
            var i = t.next();
            if (i.getEdge() === o) return i;
          }
          return null;
        } }, { key: "addEdges", value: function(o) {
          for (var t = o.iterator(); t.hasNext(); ) {
            var i = t.next();
            this._edges.add(i);
            var a = new fo(i, !0), c = new fo(i, !1);
            a.setSym(c), c.setSym(a), this.add(a), this.add(c);
          }
        } }, { key: "add", value: function(o) {
          this._nodes.add(o), this._edgeEndList.add(o);
        } }, { key: "getNodes", value: function() {
          return this._nodes.values();
        } }, { key: "findEdge", value: function(o, t) {
          for (var i = 0; i < this._edges.size(); i++) {
            var a = this._edges.get(i), c = a.getCoordinates();
            if (o.equals(c[0]) && t.equals(c[1])) return a;
          }
          return null;
        } }], [{ key: "constructor_", value: function() {
          if (this._edges = new pe(), this._nodes = null, this._edgeEndList = new pe(), arguments.length === 0) this._nodes = new Ml(new Ll());
          else if (arguments.length === 1) {
            var o = arguments[0];
            this._nodes = new Ml(o);
          }
        } }, { key: "linkResultDirectedEdges", value: function(o) {
          for (var t = o.iterator(); t.hasNext(); )
            t.next().getEdges().linkResultDirectedEdges();
        } }]);
      }(), jd = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "sortShellsAndHoles", value: function(t, i, a) {
          for (var c = t.iterator(); c.hasNext(); ) {
            var g = c.next();
            g.isHole() ? a.add(g) : i.add(g);
          }
        } }, { key: "computePolygons", value: function(t) {
          for (var i = new pe(), a = t.iterator(); a.hasNext(); ) {
            var c = a.next().toPolygon(this._geometryFactory);
            i.add(c);
          }
          return i;
        } }, { key: "placeFreeHoles", value: function(t, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var c = a.next();
            if (c.getShell() === null) {
              var g = o.findEdgeRingContaining(c, t);
              if (g === null) throw new wt("unable to assign hole to a shell", c.getCoordinate(0));
              c.setShell(g);
            }
          }
        } }, { key: "buildMinimalEdgeRings", value: function(t, i, a) {
          for (var c = new pe(), g = t.iterator(); g.hasNext(); ) {
            var p = g.next();
            if (p.getMaxNodeDegree() > 2) {
              p.linkDirectedEdgesForMinimalEdgeRings();
              var _ = p.buildMinimalRings(), w = this.findShell(_);
              w !== null ? (this.placePolygonHoles(w, _), i.add(w)) : a.addAll(_);
            } else c.add(p);
          }
          return c;
        } }, { key: "buildMaximalEdgeRings", value: function(t) {
          for (var i = new pe(), a = t.iterator(); a.hasNext(); ) {
            var c = a.next();
            if (c.isInResult() && c.getLabel().isArea() && c.getEdgeRing() === null) {
              var g = new Wd(c, this._geometryFactory);
              i.add(g), g.setInResult();
            }
          }
          return i;
        } }, { key: "placePolygonHoles", value: function(t, i) {
          for (var a = i.iterator(); a.hasNext(); ) {
            var c = a.next();
            c.isHole() && c.setShell(t);
          }
        } }, { key: "getPolygons", value: function() {
          return this.computePolygons(this._shellList);
        } }, { key: "findShell", value: function(t) {
          for (var i = 0, a = null, c = t.iterator(); c.hasNext(); ) {
            var g = c.next();
            g.isHole() || (a = g, i++);
          }
          return ae.isTrue(i <= 1, "found two shells in MinimalEdgeRing list"), a;
        } }, { key: "add", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.add(t.getEdgeEnds(), t.getNodes());
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            bl.linkResultDirectedEdges(a);
            var c = this.buildMaximalEdgeRings(i), g = new pe(), p = this.buildMinimalEdgeRings(c, this._shellList, g);
            this.sortShellsAndHoles(p, this._shellList, g), this.placeFreeHoles(this._shellList, g);
          }
        } }], [{ key: "constructor_", value: function() {
          this._geometryFactory = null, this._shellList = new pe();
          var t = arguments[0];
          this._geometryFactory = t;
        } }, { key: "findEdgeRingContaining", value: function(t, i) {
          for (var a = t.getLinearRing(), c = a.getEnvelopeInternal(), g = a.getCoordinateN(0), p = null, _ = null, w = i.iterator(); w.hasNext(); ) {
            var L = w.next(), q = L.getLinearRing(), Z = q.getEnvelopeInternal();
            if (!Z.equals(c) && Z.contains(c)) {
              g = oe.ptNotInList(a.getCoordinates(), q.getCoordinates());
              var Q = !1;
              co.isInRing(g, q.getCoordinates()) && (Q = !0), Q && (p === null || _.contains(Z)) && (_ = (p = L).getLinearRing().getEnvelopeInternal());
            }
          }
          return p;
        } }]);
      }(), Al = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "getBounds", value: function() {
        } }]);
      }(), Fn = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getItem", value: function() {
          return this._item;
        } }, { key: "getBounds", value: function() {
          return this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [Al, k];
        } }], [{ key: "constructor_", value: function() {
          this._bounds = null, this._item = null;
          var o = arguments[0], t = arguments[1];
          this._bounds = o, this._item = t;
        } }]);
      }(), Ts = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "poll", value: function() {
          if (this.isEmpty()) return null;
          var o = this._items.get(1);
          return this._items.set(1, this._items.get(this._size)), this._size -= 1, this.reorder(1), o;
        } }, { key: "size", value: function() {
          return this._size;
        } }, { key: "reorder", value: function(o) {
          for (var t = null, i = this._items.get(o); 2 * o <= this._size && ((t = 2 * o) !== this._size && this._items.get(t + 1).compareTo(this._items.get(t)) < 0 && t++, this._items.get(t).compareTo(i) < 0); o = t) this._items.set(o, this._items.get(t));
          this._items.set(o, i);
        } }, { key: "clear", value: function() {
          this._size = 0, this._items.clear();
        } }, { key: "peek", value: function() {
          return this.isEmpty() ? null : this._items.get(1);
        } }, { key: "isEmpty", value: function() {
          return this._size === 0;
        } }, { key: "add", value: function(o) {
          this._items.add(null), this._size += 1;
          var t = this._size;
          for (this._items.set(0, o); o.compareTo(this._items.get(Math.trunc(t / 2))) < 0; t /= 2) this._items.set(t, this._items.get(Math.trunc(t / 2)));
          this._items.set(t, o);
        } }], [{ key: "constructor_", value: function() {
          this._size = null, this._items = null, this._size = 0, this._items = new pe(), this._items.add(null);
        } }]);
      }(), $d = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "insert", value: function(o, t) {
        } }, { key: "remove", value: function(o, t) {
        } }, { key: "query", value: function() {
        } }]);
      }(), qt = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getLevel", value: function() {
          return this._level;
        } }, { key: "size", value: function() {
          return this._childBoundables.size();
        } }, { key: "getChildBoundables", value: function() {
          return this._childBoundables;
        } }, { key: "addChildBoundable", value: function(o) {
          ae.isTrue(this._bounds === null), this._childBoundables.add(o);
        } }, { key: "isEmpty", value: function() {
          return this._childBoundables.isEmpty();
        } }, { key: "getBounds", value: function() {
          return this._bounds === null && (this._bounds = this.computeBounds()), this._bounds;
        } }, { key: "interfaces_", get: function() {
          return [Al, k];
        } }], [{ key: "constructor_", value: function() {
          if (this._childBoundables = new pe(), this._bounds = null, this._level = null, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this._level = o;
            }
          }
        } }]);
      }(), Xr = { reverseOrder: function() {
        return { compare: function(o, t) {
          return t.compareTo(o);
        } };
      }, min: function(o) {
        return Xr.sort(o), o.get(0);
      }, sort: function(o, t) {
        var i = o.toArray();
        t ? Bt.sort(i, t) : Bt.sort(i);
        for (var a = o.iterator(), c = 0, g = i.length; c < g; c++) a.next(), a.set(i[c]);
      }, singletonList: function(o) {
        var t = new pe();
        return t.add(o), t;
      } }, Kd = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "maxDistance", value: function(t, i, a, c, g, p, _, w) {
          var L = o.distance(t, i, g, p);
          return L = Math.max(L, o.distance(t, i, _, w)), L = Math.max(L, o.distance(a, c, g, p)), L = Math.max(L, o.distance(a, c, _, w));
        } }, { key: "distance", value: function(t, i, a, c) {
          var g = a - t, p = c - i;
          return Math.sqrt(g * g + p * p);
        } }, { key: "maximumDistance", value: function(t, i) {
          var a = Math.min(t.getMinX(), i.getMinX()), c = Math.min(t.getMinY(), i.getMinY()), g = Math.max(t.getMaxX(), i.getMaxX()), p = Math.max(t.getMaxY(), i.getMaxY());
          return o.distance(a, c, g, p);
        } }, { key: "minMaxDistance", value: function(t, i) {
          var a = t.getMinX(), c = t.getMinY(), g = t.getMaxX(), p = t.getMaxY(), _ = i.getMinX(), w = i.getMinY(), L = i.getMaxX(), q = i.getMaxY(), Z = o.maxDistance(a, c, a, p, _, w, _, q);
          return Z = Math.min(Z, o.maxDistance(a, c, a, p, _, w, L, w)), Z = Math.min(Z, o.maxDistance(a, c, a, p, L, q, _, q)), Z = Math.min(Z, o.maxDistance(a, c, a, p, L, q, L, w)), Z = Math.min(Z, o.maxDistance(a, c, g, c, _, w, _, q)), Z = Math.min(Z, o.maxDistance(a, c, g, c, _, w, L, w)), Z = Math.min(Z, o.maxDistance(a, c, g, c, L, q, _, q)), Z = Math.min(Z, o.maxDistance(a, c, g, c, L, q, L, w)), Z = Math.min(Z, o.maxDistance(g, p, a, p, _, w, _, q)), Z = Math.min(Z, o.maxDistance(g, p, a, p, _, w, L, w)), Z = Math.min(Z, o.maxDistance(g, p, a, p, L, q, _, q)), Z = Math.min(Z, o.maxDistance(g, p, a, p, L, q, L, w)), Z = Math.min(Z, o.maxDistance(g, p, g, c, _, w, _, q)), Z = Math.min(Z, o.maxDistance(g, p, g, c, _, w, L, w)), Z = Math.min(Z, o.maxDistance(g, p, g, c, L, q, _, q)), Z = Math.min(Z, o.maxDistance(g, p, g, c, L, q, L, w));
        } }]);
      }(), Wr = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "maximumDistance", value: function() {
          return Kd.maximumDistance(this._boundable1.getBounds(), this._boundable2.getBounds());
        } }, { key: "expandToQueue", value: function(t, i) {
          var a = o.isComposite(this._boundable1), c = o.isComposite(this._boundable2);
          if (a && c) return o.area(this._boundable1) > o.area(this._boundable2) ? (this.expand(this._boundable1, this._boundable2, !1, t, i), null) : (this.expand(this._boundable2, this._boundable1, !0, t, i), null);
          if (a) return this.expand(this._boundable1, this._boundable2, !1, t, i), null;
          if (c) return this.expand(this._boundable2, this._boundable1, !0, t, i), null;
          throw new X("neither boundable is composite");
        } }, { key: "isLeaves", value: function() {
          return !(o.isComposite(this._boundable1) || o.isComposite(this._boundable2));
        } }, { key: "compareTo", value: function(t) {
          var i = t;
          return this._distance < i._distance ? -1 : this._distance > i._distance ? 1 : 0;
        } }, { key: "expand", value: function(t, i, a, c, g) {
          for (var p = t.getChildBoundables().iterator(); p.hasNext(); ) {
            var _ = p.next(), w = null;
            (w = a ? new o(i, _, this._itemDistance) : new o(_, i, this._itemDistance)).getDistance() < g && c.add(w);
          }
        } }, { key: "getBoundable", value: function(t) {
          return t === 0 ? this._boundable1 : this._boundable2;
        } }, { key: "getDistance", value: function() {
          return this._distance;
        } }, { key: "distance", value: function() {
          return this.isLeaves() ? this._itemDistance.distance(this._boundable1, this._boundable2) : this._boundable1.getBounds().distance(this._boundable2.getBounds());
        } }, { key: "interfaces_", get: function() {
          return [$];
        } }], [{ key: "constructor_", value: function() {
          this._boundable1 = null, this._boundable2 = null, this._distance = null, this._itemDistance = null;
          var t = arguments[0], i = arguments[1], a = arguments[2];
          this._boundable1 = t, this._boundable2 = i, this._itemDistance = a, this._distance = this.distance();
        } }, { key: "area", value: function(t) {
          return t.getBounds().getArea();
        } }, { key: "isComposite", value: function(t) {
          return t instanceof qt;
        } }]);
      }(), Cl = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "visitItem", value: function(o) {
        } }]);
      }(), Zr = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "queryInternal", value: function() {
          if (Ee(arguments[2], Cl) && arguments[0] instanceof Object && arguments[1] instanceof qt) for (var t = arguments[0], i = arguments[2], a = arguments[1].getChildBoundables(), c = 0; c < a.size(); c++) {
            var g = a.get(c);
            this.getIntersectsOp().intersects(g.getBounds(), t) && (g instanceof qt ? this.queryInternal(t, g, i) : g instanceof Fn ? i.visitItem(g.getItem()) : ae.shouldNeverReachHere());
          }
          else if (Ee(arguments[2], Pn) && arguments[0] instanceof Object && arguments[1] instanceof qt) for (var p = arguments[0], _ = arguments[2], w = arguments[1].getChildBoundables(), L = 0; L < w.size(); L++) {
            var q = w.get(L);
            this.getIntersectsOp().intersects(q.getBounds(), p) && (q instanceof qt ? this.queryInternal(p, q, _) : q instanceof Fn ? _.add(q.getItem()) : ae.shouldNeverReachHere());
          }
        } }, { key: "getNodeCapacity", value: function() {
          return this._nodeCapacity;
        } }, { key: "lastNode", value: function(t) {
          return t.get(t.size() - 1);
        } }, { key: "size", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.size(this._root));
          if (arguments.length === 1) {
            for (var t = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              a instanceof qt ? t += this.size(a) : a instanceof Fn && (t += 1);
            }
            return t;
          }
        } }, { key: "removeItem", value: function(t, i) {
          for (var a = null, c = t.getChildBoundables().iterator(); c.hasNext(); ) {
            var g = c.next();
            g instanceof Fn && g.getItem() === i && (a = g);
          }
          return a !== null && (t.getChildBoundables().remove(a), !0);
        } }, { key: "itemsTree", value: function() {
          if (arguments.length === 0) {
            this.build();
            var t = this.itemsTree(this._root);
            return t === null ? new pe() : t;
          }
          if (arguments.length === 1) {
            for (var i = arguments[0], a = new pe(), c = i.getChildBoundables().iterator(); c.hasNext(); ) {
              var g = c.next();
              if (g instanceof qt) {
                var p = this.itemsTree(g);
                p !== null && a.add(p);
              } else g instanceof Fn ? a.add(g.getItem()) : ae.shouldNeverReachHere();
            }
            return a.size() <= 0 ? null : a;
          }
        } }, { key: "insert", value: function(t, i) {
          ae.isTrue(!this._built, "Cannot insert items into an STR packed R-tree after it has been built."), this._itemBoundables.add(new Fn(t, i));
        } }, { key: "boundablesAtLevel", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0], i = new pe();
            return this.boundablesAtLevel(t, this._root, i), i;
          }
          if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2];
            if (ae.isTrue(a > -2), c.getLevel() === a) return g.add(c), null;
            for (var p = c.getChildBoundables().iterator(); p.hasNext(); ) {
              var _ = p.next();
              _ instanceof qt ? this.boundablesAtLevel(a, _, g) : (ae.isTrue(_ instanceof Fn), a === -1 && g.add(_));
            }
            return null;
          }
        } }, { key: "query", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.build();
            var i = new pe();
            return this.isEmpty() || this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.queryInternal(t, this._root, i), i;
          }
          if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            if (this.build(), this.isEmpty()) return null;
            this.getIntersectsOp().intersects(this._root.getBounds(), a) && this.queryInternal(a, this._root, c);
          }
        } }, { key: "build", value: function() {
          if (this._built) return null;
          this._root = this._itemBoundables.isEmpty() ? this.createNode(0) : this.createHigherLevels(this._itemBoundables, -1), this._itemBoundables = null, this._built = !0;
        } }, { key: "getRoot", value: function() {
          return this.build(), this._root;
        } }, { key: "remove", value: function() {
          if (arguments.length === 2) {
            var t = arguments[0], i = arguments[1];
            return this.build(), !!this.getIntersectsOp().intersects(this._root.getBounds(), t) && this.remove(t, this._root, i);
          }
          if (arguments.length === 3) {
            var a = arguments[0], c = arguments[1], g = arguments[2], p = this.removeItem(c, g);
            if (p) return !0;
            for (var _ = null, w = c.getChildBoundables().iterator(); w.hasNext(); ) {
              var L = w.next();
              if (this.getIntersectsOp().intersects(L.getBounds(), a) && L instanceof qt && (p = this.remove(a, L, g))) {
                _ = L;
                break;
              }
            }
            return _ !== null && _.getChildBoundables().isEmpty() && c.getChildBoundables().remove(_), p;
          }
        } }, { key: "createHigherLevels", value: function(t, i) {
          ae.isTrue(!t.isEmpty());
          var a = this.createParentBoundables(t, i + 1);
          return a.size() === 1 ? a.get(0) : this.createHigherLevels(a, i + 1);
        } }, { key: "depth", value: function() {
          if (arguments.length === 0) return this.isEmpty() ? 0 : (this.build(), this.depth(this._root));
          if (arguments.length === 1) {
            for (var t = 0, i = arguments[0].getChildBoundables().iterator(); i.hasNext(); ) {
              var a = i.next();
              if (a instanceof qt) {
                var c = this.depth(a);
                c > t && (t = c);
              }
            }
            return t + 1;
          }
        } }, { key: "createParentBoundables", value: function(t, i) {
          ae.isTrue(!t.isEmpty());
          var a = new pe();
          a.add(this.createNode(i));
          var c = new pe(t);
          Xr.sort(c, this.getComparator());
          for (var g = c.iterator(); g.hasNext(); ) {
            var p = g.next();
            this.lastNode(a).getChildBoundables().size() === this.getNodeCapacity() && a.add(this.createNode(i)), this.lastNode(a).addChildBoundable(p);
          }
          return a;
        } }, { key: "isEmpty", value: function() {
          return this._built ? this._root.isEmpty() : this._itemBoundables.isEmpty();
        } }, { key: "interfaces_", get: function() {
          return [k];
        } }], [{ key: "constructor_", value: function() {
          if (this._root = null, this._built = !1, this._itemBoundables = new pe(), this._nodeCapacity = null, arguments.length === 0) o.constructor_.call(this, o.DEFAULT_NODE_CAPACITY);
          else if (arguments.length === 1) {
            var t = arguments[0];
            ae.isTrue(t > 1, "Node capacity must be greater than 1"), this._nodeCapacity = t;
          }
        } }, { key: "compareDoubles", value: function(t, i) {
          return t > i ? 1 : t < i ? -1 : 0;
        } }]);
      }();
      Zr.IntersectsOp = function() {
      }, Zr.DEFAULT_NODE_CAPACITY = 10;
      var Qd = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "distance", value: function(o, t) {
        } }]);
      }(), _n = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "createParentBoundablesFromVerticalSlices", value: function(i, a) {
          ae.isTrue(i.length > 0);
          for (var c = new pe(), g = 0; g < i.length; g++) c.addAll(this.createParentBoundablesFromVerticalSlice(i[g], a));
          return c;
        } }, { key: "nearestNeighbourK", value: function() {
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            return this.nearestNeighbourK(i, K.POSITIVE_INFINITY, a);
          }
          if (arguments.length === 3) {
            var c = arguments[0], g = arguments[2], p = arguments[1], _ = new Ts();
            _.add(c);
            for (var w = new Ts(); !_.isEmpty() && p >= 0; ) {
              var L = _.poll(), q = L.getDistance();
              if (q >= p) break;
              L.isLeaves() ? w.size() < g ? w.add(L) : (w.peek().getDistance() > q && (w.poll(), w.add(L)), p = w.peek().getDistance()) : L.expandToQueue(_, p);
            }
            return t.getItems(w);
          }
        } }, { key: "createNode", value: function(i) {
          return new Tl(i);
        } }, { key: "size", value: function() {
          return arguments.length === 0 ? M(t, "size", this, 1).call(this) : M(t, "size", this, 1).apply(this, arguments);
        } }, { key: "insert", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Le)) return M(t, "insert", this, 1).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          if (i.isNull()) return null;
          M(t, "insert", this, 1).call(this, i, a);
        } }, { key: "getIntersectsOp", value: function() {
          return t.intersectsOp;
        } }, { key: "verticalSlices", value: function(i, a) {
          for (var c = Math.trunc(Math.ceil(i.size() / a)), g = new Array(a).fill(null), p = i.iterator(), _ = 0; _ < a; _++) {
            g[_] = new pe();
            for (var w = 0; p.hasNext() && w < c; ) {
              var L = p.next();
              g[_].add(L), w++;
            }
          }
          return g;
        } }, { key: "query", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0];
            return M(t, "query", this, 1).call(this, i);
          }
          if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            M(t, "query", this, 1).call(this, a, c);
          }
        } }, { key: "getComparator", value: function() {
          return t.yComparator;
        } }, { key: "createParentBoundablesFromVerticalSlice", value: function(i, a) {
          return M(t, "createParentBoundables", this, 1).call(this, i, a);
        } }, { key: "remove", value: function() {
          if (arguments.length === 2 && arguments[1] instanceof Object && arguments[0] instanceof Le) {
            var i = arguments[0], a = arguments[1];
            return M(t, "remove", this, 1).call(this, i, a);
          }
          return M(t, "remove", this, 1).apply(this, arguments);
        } }, { key: "depth", value: function() {
          return arguments.length === 0 ? M(t, "depth", this, 1).call(this) : M(t, "depth", this, 1).apply(this, arguments);
        } }, { key: "createParentBoundables", value: function(i, a) {
          ae.isTrue(!i.isEmpty());
          var c = Math.trunc(Math.ceil(i.size() / this.getNodeCapacity())), g = new pe(i);
          Xr.sort(g, t.xComparator);
          var p = this.verticalSlices(g, Math.trunc(Math.ceil(Math.sqrt(c))));
          return this.createParentBoundablesFromVerticalSlices(p, a);
        } }, { key: "nearestNeighbour", value: function() {
          if (arguments.length === 1) {
            if (Ee(arguments[0], Qd)) {
              var i = arguments[0];
              if (this.isEmpty()) return null;
              var a = new Wr(this.getRoot(), this.getRoot(), i);
              return this.nearestNeighbour(a);
            }
            if (arguments[0] instanceof Wr) {
              var c = arguments[0], g = K.POSITIVE_INFINITY, p = null, _ = new Ts();
              for (_.add(c); !_.isEmpty() && g > 0; ) {
                var w = _.poll(), L = w.getDistance();
                if (L >= g) break;
                w.isLeaves() ? (g = L, p = w) : w.expandToQueue(_, g);
              }
              return p === null ? null : [p.getBoundable(0).getItem(), p.getBoundable(1).getItem()];
            }
          } else {
            if (arguments.length === 2) {
              var q = arguments[0], Z = arguments[1];
              if (this.isEmpty() || q.isEmpty()) return null;
              var Q = new Wr(this.getRoot(), q.getRoot(), Z);
              return this.nearestNeighbour(Q);
            }
            if (arguments.length === 3) {
              var le = arguments[2], fe = new Fn(arguments[0], arguments[1]), ve = new Wr(this.getRoot(), fe, le);
              return this.nearestNeighbour(ve)[0];
            }
            if (arguments.length === 4) {
              var be = arguments[2], Ie = arguments[3], Fe = new Fn(arguments[0], arguments[1]), ot = new Wr(this.getRoot(), Fe, be);
              return this.nearestNeighbourK(ot, Ie);
            }
          }
        } }, { key: "isWithinDistance", value: function() {
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], c = K.POSITIVE_INFINITY, g = new Ts();
            for (g.add(i); !g.isEmpty(); ) {
              var p = g.poll(), _ = p.getDistance();
              if (_ > a) return !1;
              if (p.maximumDistance() <= a) return !0;
              if (p.isLeaves()) {
                if ((c = _) <= a) return !0;
              } else p.expandToQueue(g, c);
            }
            return !1;
          }
          if (arguments.length === 3) {
            var w = arguments[0], L = arguments[1], q = arguments[2], Z = new Wr(this.getRoot(), w.getRoot(), L);
            return this.isWithinDistance(Z, q);
          }
        } }, { key: "interfaces_", get: function() {
          return [$d, k];
        } }], [{ key: "constructor_", value: function() {
          if (arguments.length === 0) t.constructor_.call(this, t.DEFAULT_NODE_CAPACITY);
          else if (arguments.length === 1) {
            var i = arguments[0];
            Zr.constructor_.call(this, i);
          }
        } }, { key: "centreX", value: function(i) {
          return t.avg(i.getMinX(), i.getMaxX());
        } }, { key: "avg", value: function(i, a) {
          return (i + a) / 2;
        } }, { key: "getItems", value: function(i) {
          for (var a = new Array(i.size()).fill(null), c = 0; !i.isEmpty(); ) {
            var g = i.poll();
            a[c] = g.getBoundable(0).getItem(), c++;
          }
          return a;
        } }, { key: "centreY", value: function(i) {
          return t.avg(i.getMinY(), i.getMaxY());
        } }]);
      }(Zr), Tl = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "computeBounds", value: function() {
          for (var i = null, a = this.getChildBoundables().iterator(); a.hasNext(); ) {
            var c = a.next();
            i === null ? i = new Le(c.getBounds()) : i.expandToInclude(c.getBounds());
          }
          return i;
        } }], [{ key: "constructor_", value: function() {
          var i = arguments[0];
          qt.constructor_.call(this, i);
        } }]);
      }(qt);
      _n.STRtreeNode = Tl, _n.xComparator = new (function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "interfaces_", get: function() {
          return [ne];
        } }, { key: "compare", value: function(o, t) {
          return Zr.compareDoubles(_n.centreX(o.getBounds()), _n.centreX(t.getBounds()));
        } }]);
      }())(), _n.yComparator = new (function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "interfaces_", get: function() {
          return [ne];
        } }, { key: "compare", value: function(o, t) {
          return Zr.compareDoubles(_n.centreY(o.getBounds()), _n.centreY(t.getBounds()));
        } }]);
      }())(), _n.intersectsOp = new (function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "interfaces_", get: function() {
          return [IntersectsOp];
        } }, { key: "intersects", value: function(o, t) {
          return o.intersects(t);
        } }]);
      }())(), _n.DEFAULT_NODE_CAPACITY = 10;
      var ep = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "relativeSign", value: function(t, i) {
          return t < i ? -1 : t > i ? 1 : 0;
        } }, { key: "compare", value: function(t, i, a) {
          if (i.equals2D(a)) return 0;
          var c = o.relativeSign(i.x, a.x), g = o.relativeSign(i.y, a.y);
          switch (t) {
            case 0:
              return o.compareValue(c, g);
            case 1:
              return o.compareValue(g, c);
            case 2:
              return o.compareValue(g, -c);
            case 3:
              return o.compareValue(-c, g);
            case 4:
              return o.compareValue(-c, -g);
            case 5:
              return o.compareValue(-g, -c);
            case 6:
              return o.compareValue(-g, c);
            case 7:
              return o.compareValue(c, -g);
          }
          return ae.shouldNeverReachHere("invalid octant value"), 0;
        } }, { key: "compareValue", value: function(t, i) {
          return t < 0 ? -1 : t > 0 ? 1 : i < 0 ? -1 : i > 0 ? 1 : 0;
        } }]);
      }(), tp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(o) {
          o.print(this.coord), o.print(" seg # = " + this.segmentIndex);
        } }, { key: "compareTo", value: function(o) {
          var t = o;
          return this.segmentIndex < t.segmentIndex ? -1 : this.segmentIndex > t.segmentIndex ? 1 : this.coord.equals2D(t.coord) ? 0 : this._isInterior ? t._isInterior ? ep.compare(this._segmentOctant, this.coord, t.coord) : 1 : -1;
        } }, { key: "isEndPoint", value: function(o) {
          return this.segmentIndex === 0 && !this._isInterior || this.segmentIndex === o;
        } }, { key: "toString", value: function() {
          return this.segmentIndex + ":" + this.coord.toString();
        } }, { key: "isInterior", value: function() {
          return this._isInterior;
        } }, { key: "interfaces_", get: function() {
          return [$];
        } }], [{ key: "constructor_", value: function() {
          this._segString = null, this.coord = null, this.segmentIndex = null, this._segmentOctant = null, this._isInterior = null;
          var o = arguments[0], t = arguments[1], i = arguments[2], a = arguments[3];
          this._segString = o, this.coord = new V(t), this.segmentIndex = i, this._segmentOctant = a, this._isInterior = !t.equals2D(o.getCoordinate(i));
        } }]);
      }(), np = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "hasNext", value: function() {
        } }, { key: "next", value: function() {
        } }, { key: "remove", value: function() {
        } }]);
      }(), rp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getSplitCoordinates", value: function() {
          var o = new ee();
          this.addEndpoints();
          for (var t = this.iterator(), i = t.next(); t.hasNext(); ) {
            var a = t.next();
            this.addEdgeCoordinates(i, a, o), i = a;
          }
          return o.toCoordinateArray();
        } }, { key: "addCollapsedNodes", value: function() {
          var o = new pe();
          this.findCollapsesFromInsertedNodes(o), this.findCollapsesFromExistingVertices(o);
          for (var t = o.iterator(); t.hasNext(); ) {
            var i = t.next().intValue();
            this.add(this._edge.getCoordinate(i), i);
          }
        } }, { key: "createSplitEdgePts", value: function(o, t) {
          var i = t.segmentIndex - o.segmentIndex + 2;
          if (i === 2) return [new V(o.coord), new V(t.coord)];
          var a = this._edge.getCoordinate(t.segmentIndex), c = t.isInterior() || !t.coord.equals2D(a);
          c || i--;
          var g = new Array(i).fill(null), p = 0;
          g[p++] = new V(o.coord);
          for (var _ = o.segmentIndex + 1; _ <= t.segmentIndex; _++) g[p++] = this._edge.getCoordinate(_);
          return c && (g[p] = new V(t.coord)), g;
        } }, { key: "print", value: function(o) {
          o.println("Intersections:");
          for (var t = this.iterator(); t.hasNext(); )
            t.next().print(o);
        } }, { key: "findCollapsesFromExistingVertices", value: function(o) {
          for (var t = 0; t < this._edge.size() - 2; t++) {
            var i = this._edge.getCoordinate(t);
            this._edge.getCoordinate(t + 1);
            var a = this._edge.getCoordinate(t + 2);
            i.equals2D(a) && o.add(en.valueOf(t + 1));
          }
        } }, { key: "addEdgeCoordinates", value: function(o, t, i) {
          var a = this.createSplitEdgePts(o, t);
          i.add(a, !1);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints(), this.addCollapsedNodes();
          for (var t = this.iterator(), i = t.next(); t.hasNext(); ) {
            var a = t.next(), c = this.createSplitEdge(i, a);
            o.add(c), i = a;
          }
        } }, { key: "findCollapseIndex", value: function(o, t, i) {
          if (!o.coord.equals2D(t.coord)) return !1;
          var a = t.segmentIndex - o.segmentIndex;
          return t.isInterior() || a--, a === 1 && (i[0] = o.segmentIndex + 1, !0);
        } }, { key: "findCollapsesFromInsertedNodes", value: function(o) {
          for (var t = new Array(1).fill(null), i = this.iterator(), a = i.next(); i.hasNext(); ) {
            var c = i.next();
            this.findCollapseIndex(a, c, t) && o.add(en.valueOf(t[0])), a = c;
          }
        } }, { key: "getEdge", value: function() {
          return this._edge;
        } }, { key: "addEndpoints", value: function() {
          var o = this._edge.size() - 1;
          this.add(this._edge.getCoordinate(0), 0), this.add(this._edge.getCoordinate(o), o);
        } }, { key: "createSplitEdge", value: function(o, t) {
          var i = this.createSplitEdgePts(o, t);
          return new _r(i, this._edge.getData());
        } }, { key: "add", value: function(o, t) {
          var i = new tp(this._edge, o, t, this._edge.getSegmentOctant(t)), a = this._nodeMap.get(i);
          return a !== null ? (ae.isTrue(a.coord.equals2D(o), "Found equal nodes with different coordinates"), a) : (this._nodeMap.put(i, i), i);
        } }, { key: "checkSplitEdgesCorrectness", value: function(o) {
          var t = this._edge.getCoordinates(), i = o.get(0).getCoordinate(0);
          if (!i.equals2D(t[0])) throw new de("bad split edge start point at " + i);
          var a = o.get(o.size() - 1).getCoordinates(), c = a[a.length - 1];
          if (!c.equals2D(t[t.length - 1])) throw new de("bad split edge end point at " + c);
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new Gi(), this._edge = null;
          var o = arguments[0];
          this._edge = o;
        } }]);
      }(), ip = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "octant", value: function() {
          if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
            var t = arguments[0], i = arguments[1];
            if (t === 0 && i === 0) throw new X("Cannot compute the octant for point ( " + t + ", " + i + " )");
            var a = Math.abs(t), c = Math.abs(i);
            return t >= 0 ? i >= 0 ? a >= c ? 0 : 1 : a >= c ? 7 : 6 : i >= 0 ? a >= c ? 3 : 2 : a >= c ? 4 : 5;
          }
          if (arguments[0] instanceof V && arguments[1] instanceof V) {
            var g = arguments[0], p = arguments[1], _ = p.x - g.x, w = p.y - g.y;
            if (_ === 0 && w === 0) throw new X("Cannot compute the octant for two identical points " + g);
            return o.octant(_, w);
          }
        } }]);
      }(), sp = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "getCoordinates", value: function() {
        } }, { key: "size", value: function() {
        } }, { key: "getCoordinate", value: function(o) {
        } }, { key: "isClosed", value: function() {
        } }, { key: "setData", value: function(o) {
        } }, { key: "getData", value: function() {
        } }]);
      }(), ap = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "addIntersection", value: function(o, t) {
        } }, { key: "interfaces_", get: function() {
          return [sp];
        } }]);
      }(), _r = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getCoordinates", value: function() {
          return this._pts;
        } }, { key: "size", value: function() {
          return this._pts.length;
        } }, { key: "getCoordinate", value: function(t) {
          return this._pts[t];
        } }, { key: "isClosed", value: function() {
          return this._pts[0].equals(this._pts[this._pts.length - 1]);
        } }, { key: "getSegmentOctant", value: function(t) {
          return t === this._pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(t), this.getCoordinate(t + 1));
        } }, { key: "setData", value: function(t) {
          this._data = t;
        } }, { key: "safeOctant", value: function(t, i) {
          return t.equals2D(i) ? 0 : ip.octant(t, i);
        } }, { key: "getData", value: function() {
          return this._data;
        } }, { key: "addIntersection", value: function() {
          if (arguments.length === 2) {
            var t = arguments[0], i = arguments[1];
            this.addIntersectionNode(t, i);
          } else if (arguments.length === 4) {
            var a = arguments[1], c = arguments[3], g = new V(arguments[0].getIntersection(c));
            this.addIntersection(g, a);
          }
        } }, { key: "toString", value: function() {
          return lo.toLineString(new je(this._pts));
        } }, { key: "getNodeList", value: function() {
          return this._nodeList;
        } }, { key: "addIntersectionNode", value: function(t, i) {
          var a = i, c = a + 1;
          if (c < this._pts.length) {
            var g = this._pts[c];
            t.equals2D(g) && (a = c);
          }
          return this._nodeList.add(t, a);
        } }, { key: "addIntersections", value: function(t, i, a) {
          for (var c = 0; c < t.getIntersectionNum(); c++) this.addIntersection(t, i, a, c);
        } }, { key: "interfaces_", get: function() {
          return [ap];
        } }], [{ key: "constructor_", value: function() {
          this._nodeList = new rp(this), this._pts = null, this._data = null;
          var t = arguments[0], i = arguments[1];
          this._pts = t, this._data = i;
        } }, { key: "getNodedSubstrings", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0], i = new pe();
            return o.getNodedSubstrings(t, i), i;
          }
          if (arguments.length === 2) for (var a = arguments[1], c = arguments[0].iterator(); c.hasNext(); )
            c.next().getNodeList().addSplitEdges(a);
        } }]);
      }(), At = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "minX", value: function() {
          return Math.min(this.p0.x, this.p1.x);
        } }, { key: "orientationIndex", value: function() {
          if (arguments[0] instanceof o) {
            var t = arguments[0], i = _e.index(this.p0, this.p1, t.p0), a = _e.index(this.p0, this.p1, t.p1);
            return i >= 0 && a >= 0 || i <= 0 && a <= 0 ? Math.max(i, a) : 0;
          }
          if (arguments[0] instanceof V) {
            var c = arguments[0];
            return _e.index(this.p0, this.p1, c);
          }
        } }, { key: "toGeometry", value: function(t) {
          return t.createLineString([this.p0, this.p1]);
        } }, { key: "isVertical", value: function() {
          return this.p0.x === this.p1.x;
        } }, { key: "equals", value: function(t) {
          if (!(t instanceof o)) return !1;
          var i = t;
          return this.p0.equals(i.p0) && this.p1.equals(i.p1);
        } }, { key: "intersection", value: function(t) {
          var i = new yr();
          return i.computeIntersection(this.p0, this.p1, t.p0, t.p1), i.hasIntersection() ? i.getIntersection(0) : null;
        } }, { key: "project", value: function() {
          if (arguments[0] instanceof V) {
            var t = arguments[0];
            if (t.equals(this.p0) || t.equals(this.p1)) return new V(t);
            var i = this.projectionFactor(t), a = new V();
            return a.x = this.p0.x + i * (this.p1.x - this.p0.x), a.y = this.p0.y + i * (this.p1.y - this.p0.y), a;
          }
          if (arguments[0] instanceof o) {
            var c = arguments[0], g = this.projectionFactor(c.p0), p = this.projectionFactor(c.p1);
            if (g >= 1 && p >= 1 || g <= 0 && p <= 0) return null;
            var _ = this.project(c.p0);
            g < 0 && (_ = this.p0), g > 1 && (_ = this.p1);
            var w = this.project(c.p1);
            return p < 0 && (w = this.p0), p > 1 && (w = this.p1), new o(_, w);
          }
        } }, { key: "normalize", value: function() {
          this.p1.compareTo(this.p0) < 0 && this.reverse();
        } }, { key: "angle", value: function() {
          return Math.atan2(this.p1.y - this.p0.y, this.p1.x - this.p0.x);
        } }, { key: "getCoordinate", value: function(t) {
          return t === 0 ? this.p0 : this.p1;
        } }, { key: "distancePerpendicular", value: function(t) {
          return Gt.pointToLinePerpendicular(t, this.p0, this.p1);
        } }, { key: "minY", value: function() {
          return Math.min(this.p0.y, this.p1.y);
        } }, { key: "midPoint", value: function() {
          return o.midPoint(this.p0, this.p1);
        } }, { key: "projectionFactor", value: function(t) {
          if (t.equals(this.p0)) return 0;
          if (t.equals(this.p1)) return 1;
          var i = this.p1.x - this.p0.x, a = this.p1.y - this.p0.y, c = i * i + a * a;
          return c <= 0 ? K.NaN : ((t.x - this.p0.x) * i + (t.y - this.p0.y) * a) / c;
        } }, { key: "closestPoints", value: function(t) {
          var i = this.intersection(t);
          if (i !== null) return [i, i];
          var a = new Array(2).fill(null), c = K.MAX_VALUE, g = null, p = this.closestPoint(t.p0);
          c = p.distance(t.p0), a[0] = p, a[1] = t.p0;
          var _ = this.closestPoint(t.p1);
          (g = _.distance(t.p1)) < c && (c = g, a[0] = _, a[1] = t.p1);
          var w = t.closestPoint(this.p0);
          (g = w.distance(this.p0)) < c && (c = g, a[0] = this.p0, a[1] = w);
          var L = t.closestPoint(this.p1);
          return (g = L.distance(this.p1)) < c && (c = g, a[0] = this.p1, a[1] = L), a;
        } }, { key: "closestPoint", value: function(t) {
          var i = this.projectionFactor(t);
          return i > 0 && i < 1 ? this.project(t) : this.p0.distance(t) < this.p1.distance(t) ? this.p0 : this.p1;
        } }, { key: "maxX", value: function() {
          return Math.max(this.p0.x, this.p1.x);
        } }, { key: "getLength", value: function() {
          return this.p0.distance(this.p1);
        } }, { key: "compareTo", value: function(t) {
          var i = t, a = this.p0.compareTo(i.p0);
          return a !== 0 ? a : this.p1.compareTo(i.p1);
        } }, { key: "reverse", value: function() {
          var t = this.p0;
          this.p0 = this.p1, this.p1 = t;
        } }, { key: "equalsTopo", value: function(t) {
          return this.p0.equals(t.p0) && this.p1.equals(t.p1) || this.p0.equals(t.p1) && this.p1.equals(t.p0);
        } }, { key: "lineIntersection", value: function(t) {
          return Ti.intersection(this.p0, this.p1, t.p0, t.p1);
        } }, { key: "maxY", value: function() {
          return Math.max(this.p0.y, this.p1.y);
        } }, { key: "pointAlongOffset", value: function(t, i) {
          var a = this.p0.x + t * (this.p1.x - this.p0.x), c = this.p0.y + t * (this.p1.y - this.p0.y), g = this.p1.x - this.p0.x, p = this.p1.y - this.p0.y, _ = Math.sqrt(g * g + p * p), w = 0, L = 0;
          if (i !== 0) {
            if (_ <= 0) throw new IllegalStateException("Cannot compute offset from zero-length line segment");
            w = i * g / _, L = i * p / _;
          }
          return new V(a - L, c + w);
        } }, { key: "setCoordinates", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            this.setCoordinates(t.p0, t.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0.x = i.x, this.p0.y = i.y, this.p1.x = a.x, this.p1.y = a.y;
          }
        } }, { key: "segmentFraction", value: function(t) {
          var i = this.projectionFactor(t);
          return i < 0 ? i = 0 : (i > 1 || K.isNaN(i)) && (i = 1), i;
        } }, { key: "toString", value: function() {
          return "LINESTRING( " + this.p0.x + " " + this.p0.y + ", " + this.p1.x + " " + this.p1.y + ")";
        } }, { key: "isHorizontal", value: function() {
          return this.p0.y === this.p1.y;
        } }, { key: "reflect", value: function(t) {
          var i = this.p1.getY() - this.p0.getY(), a = this.p0.getX() - this.p1.getX(), c = this.p0.getY() * (this.p1.getX() - this.p0.getX()) - this.p0.getX() * (this.p1.getY() - this.p0.getY()), g = i * i + a * a, p = i * i - a * a, _ = t.getX(), w = t.getY();
          return new V((-p * _ - 2 * i * a * w - 2 * i * c) / g, (p * w - 2 * i * a * _ - 2 * a * c) / g);
        } }, { key: "distance", value: function() {
          if (arguments[0] instanceof o) {
            var t = arguments[0];
            return Gt.segmentToSegment(this.p0, this.p1, t.p0, t.p1);
          }
          if (arguments[0] instanceof V) {
            var i = arguments[0];
            return Gt.pointToSegment(i, this.p0, this.p1);
          }
        } }, { key: "pointAlong", value: function(t) {
          var i = new V();
          return i.x = this.p0.x + t * (this.p1.x - this.p0.x), i.y = this.p0.y + t * (this.p1.y - this.p0.y), i;
        } }, { key: "hashCode", value: function() {
          var t = K.doubleToLongBits(this.p0.x);
          t ^= 31 * K.doubleToLongBits(this.p0.y);
          var i = Math.trunc(t) ^ Math.trunc(t >> 32), a = K.doubleToLongBits(this.p1.x);
          return a ^= 31 * K.doubleToLongBits(this.p1.y), i ^ (Math.trunc(a) ^ Math.trunc(a >> 32));
        } }, { key: "interfaces_", get: function() {
          return [$, k];
        } }], [{ key: "constructor_", value: function() {
          if (this.p0 = null, this.p1 = null, arguments.length === 0) o.constructor_.call(this, new V(), new V());
          else if (arguments.length === 1) {
            var t = arguments[0];
            o.constructor_.call(this, t.p0, t.p1);
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this.p0 = i, this.p1 = a;
          } else if (arguments.length === 4) {
            var c = arguments[0], g = arguments[1], p = arguments[2], _ = arguments[3];
            o.constructor_.call(this, new V(c, g), new V(p, _));
          }
        } }, { key: "midPoint", value: function(t, i) {
          return new V((t.x + i.x) / 2, (t.y + i.y) / 2);
        } }]);
      }(), op = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "overlap", value: function() {
          if (arguments.length !== 2) {
            if (arguments.length === 4) {
              var o = arguments[1], t = arguments[2], i = arguments[3];
              arguments[0].getLineSegment(o, this._overlapSeg1), t.getLineSegment(i, this._overlapSeg2), this.overlap(this._overlapSeg1, this._overlapSeg2);
            }
          }
        } }], [{ key: "constructor_", value: function() {
          this._overlapSeg1 = new At(), this._overlapSeg2 = new At();
        } }]);
      }(), Nl = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getLineSegment", value: function(o, t) {
          t.p0 = this._pts[o], t.p1 = this._pts[o + 1];
        } }, { key: "computeSelect", value: function(o, t, i, a) {
          var c = this._pts[t], g = this._pts[i];
          if (i - t == 1) return a.select(this, t), null;
          if (!o.intersects(c, g)) return null;
          var p = Math.trunc((t + i) / 2);
          t < p && this.computeSelect(o, t, p, a), p < i && this.computeSelect(o, p, i, a);
        } }, { key: "getCoordinates", value: function() {
          for (var o = new Array(this._end - this._start + 1).fill(null), t = 0, i = this._start; i <= this._end; i++) o[t++] = this._pts[i];
          return o;
        } }, { key: "computeOverlaps", value: function() {
          if (arguments.length === 2) {
            var o = arguments[0], t = arguments[1];
            this.computeOverlaps(this._start, this._end, o, o._start, o._end, t);
          } else if (arguments.length === 6) {
            var i = arguments[0], a = arguments[1], c = arguments[2], g = arguments[3], p = arguments[4], _ = arguments[5];
            if (a - i == 1 && p - g == 1) return _.overlap(this, i, c, g), null;
            if (!this.overlaps(i, a, c, g, p)) return null;
            var w = Math.trunc((i + a) / 2), L = Math.trunc((g + p) / 2);
            i < w && (g < L && this.computeOverlaps(i, w, c, g, L, _), L < p && this.computeOverlaps(i, w, c, L, p, _)), w < a && (g < L && this.computeOverlaps(w, a, c, g, L, _), L < p && this.computeOverlaps(w, a, c, L, p, _));
          }
        } }, { key: "setId", value: function(o) {
          this._id = o;
        } }, { key: "select", value: function(o, t) {
          this.computeSelect(o, this._start, this._end, t);
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            var o = this._pts[this._start], t = this._pts[this._end];
            this._env = new Le(o, t);
          }
          return this._env;
        } }, { key: "overlaps", value: function(o, t, i, a, c) {
          return Le.intersects(this._pts[o], this._pts[t], i._pts[a], i._pts[c]);
        } }, { key: "getEndIndex", value: function() {
          return this._end;
        } }, { key: "getStartIndex", value: function() {
          return this._start;
        } }, { key: "getContext", value: function() {
          return this._context;
        } }, { key: "getId", value: function() {
          return this._id;
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._start = null, this._end = null, this._env = null, this._context = null, this._id = null;
          var o = arguments[0], t = arguments[1], i = arguments[2], a = arguments[3];
          this._pts = o, this._start = t, this._end = i, this._context = a;
        } }]);
      }(), up = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "findChainEnd", value: function(t, i) {
          for (var a = i; a < t.length - 1 && t[a].equals2D(t[a + 1]); ) a++;
          if (a >= t.length - 1) return t.length - 1;
          for (var c = gt.quadrant(t[a], t[a + 1]), g = i + 1; g < t.length && !(!t[g - 1].equals2D(t[g]) && gt.quadrant(t[g - 1], t[g]) !== c); )
            g++;
          return g - 1;
        } }, { key: "getChains", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            return o.getChains(t, null);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], c = new pe(), g = 0;
            do {
              var p = o.findChainEnd(i, g), _ = new Nl(i, g, p, a);
              c.add(_), g = p;
            } while (g < i.length - 1);
            return c;
          }
        } }]);
      }(), go = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "computeNodes", value: function(o) {
        } }, { key: "getNodedSubstrings", value: function() {
        } }]);
      }(), Pl = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "setSegmentIntersector", value: function(o) {
          this._segInt = o;
        } }, { key: "interfaces_", get: function() {
          return [go];
        } }], [{ key: "constructor_", value: function() {
          if (this._segInt = null, arguments.length !== 0) {
            if (arguments.length === 1) {
              var o = arguments[0];
              this.setSegmentIntersector(o);
            }
          }
        } }]);
      }(), po = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "getMonotoneChains", value: function() {
          return this._monoChains;
        } }, { key: "getNodedSubstrings", value: function() {
          return _r.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "getIndex", value: function() {
          return this._index;
        } }, { key: "add", value: function(i) {
          for (var a = up.getChains(i.getCoordinates(), i).iterator(); a.hasNext(); ) {
            var c = a.next();
            c.setId(this._idCounter++), this._index.insert(c.getEnvelope(), c), this._monoChains.add(c);
          }
        } }, { key: "computeNodes", value: function(i) {
          this._nodedSegStrings = i;
          for (var a = i.iterator(); a.hasNext(); ) this.add(a.next());
          this.intersectChains();
        } }, { key: "intersectChains", value: function() {
          for (var i = new Ol(this._segInt), a = this._monoChains.iterator(); a.hasNext(); ) for (var c = a.next(), g = this._index.query(c.getEnvelope()).iterator(); g.hasNext(); ) {
            var p = g.next();
            if (p.getId() > c.getId() && (c.computeOverlaps(p, i), this._nOverlaps++), this._segInt.isDone()) return null;
          }
        } }], [{ key: "constructor_", value: function() {
          if (this._monoChains = new pe(), this._index = new _n(), this._idCounter = 0, this._nodedSegStrings = null, this._nOverlaps = 0, arguments.length !== 0) {
            if (arguments.length === 1) {
              var i = arguments[0];
              Pl.constructor_.call(this, i);
            }
          }
        } }]);
      }(Pl), Ol = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "overlap", value: function() {
          if (arguments.length !== 4) return M(t, "overlap", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[2], c = arguments[3], g = arguments[0].getContext(), p = a.getContext();
          this._si.processIntersections(g, i, p, c);
        } }], [{ key: "constructor_", value: function() {
          this._si = null;
          var i = arguments[0];
          this._si = i;
        } }]);
      }(op);
      po.SegmentOverlapAction = Ol;
      var rn = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isDeletable", value: function(t, i, a, c) {
          var g = this._inputLine[t], p = this._inputLine[i], _ = this._inputLine[a];
          return !!this.isConcave(g, p, _) && !!this.isShallow(g, p, _, c) && this.isShallowSampled(g, p, t, a, c);
        } }, { key: "deleteShallowConcavities", value: function() {
          for (var t = 1, i = this.findNextNonDeletedIndex(t), a = this.findNextNonDeletedIndex(i), c = !1; a < this._inputLine.length; ) {
            var g = !1;
            this.isDeletable(t, i, a, this._distanceTol) && (this._isDeleted[i] = o.DELETE, g = !0, c = !0), t = g ? a : i, i = this.findNextNonDeletedIndex(t), a = this.findNextNonDeletedIndex(i);
          }
          return c;
        } }, { key: "isShallowConcavity", value: function(t, i, a, c) {
          return _e.index(t, i, a) === this._angleOrientation && Gt.pointToSegment(i, t, a) < c;
        } }, { key: "isShallowSampled", value: function(t, i, a, c, g) {
          var p = Math.trunc((c - a) / o.NUM_PTS_TO_CHECK);
          p <= 0 && (p = 1);
          for (var _ = a; _ < c; _ += p) if (!this.isShallow(t, i, this._inputLine[_], g)) return !1;
          return !0;
        } }, { key: "isConcave", value: function(t, i, a) {
          var c = _e.index(t, i, a) === this._angleOrientation;
          return c;
        } }, { key: "simplify", value: function(t) {
          this._distanceTol = Math.abs(t), t < 0 && (this._angleOrientation = _e.CLOCKWISE), this._isDeleted = new Array(this._inputLine.length).fill(null);
          var i = !1;
          do
            i = this.deleteShallowConcavities();
          while (i);
          return this.collapseLine();
        } }, { key: "findNextNonDeletedIndex", value: function(t) {
          for (var i = t + 1; i < this._inputLine.length && this._isDeleted[i] === o.DELETE; ) i++;
          return i;
        } }, { key: "isShallow", value: function(t, i, a, c) {
          return Gt.pointToSegment(i, t, a) < c;
        } }, { key: "collapseLine", value: function() {
          for (var t = new ee(), i = 0; i < this._inputLine.length; i++) this._isDeleted[i] !== o.DELETE && t.add(this._inputLine[i]);
          return t.toCoordinateArray();
        } }], [{ key: "constructor_", value: function() {
          this._inputLine = null, this._distanceTol = null, this._isDeleted = null, this._angleOrientation = _e.COUNTERCLOCKWISE;
          var t = arguments[0];
          this._inputLine = t;
        } }, { key: "simplify", value: function(t, i) {
          return new o(t).simplify(i);
        } }]);
      }();
      rn.INIT = 0, rn.DELETE = 1, rn.KEEP = 1, rn.NUM_PTS_TO_CHECK = 10;
      var Rl = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getCoordinates", value: function() {
          return this._ptList.toArray(o.COORDINATE_ARRAY_TYPE);
        } }, { key: "setPrecisionModel", value: function(t) {
          this._precisionModel = t;
        } }, { key: "addPt", value: function(t) {
          var i = new V(t);
          if (this._precisionModel.makePrecise(i), this.isRedundant(i)) return null;
          this._ptList.add(i);
        } }, { key: "reverse", value: function() {
        } }, { key: "addPts", value: function(t, i) {
          if (i) for (var a = 0; a < t.length; a++) this.addPt(t[a]);
          else for (var c = t.length - 1; c >= 0; c--) this.addPt(t[c]);
        } }, { key: "isRedundant", value: function(t) {
          if (this._ptList.size() < 1) return !1;
          var i = this._ptList.get(this._ptList.size() - 1);
          return t.distance(i) < this._minimimVertexDistance;
        } }, { key: "toString", value: function() {
          return new Jr().createLineString(this.getCoordinates()).toString();
        } }, { key: "closeRing", value: function() {
          if (this._ptList.size() < 1) return null;
          var t = new V(this._ptList.get(0)), i = this._ptList.get(this._ptList.size() - 1);
          if (t.equals(i)) return null;
          this._ptList.add(t);
        } }, { key: "setMinimumVertexDistance", value: function(t) {
          this._minimimVertexDistance = t;
        } }], [{ key: "constructor_", value: function() {
          this._ptList = null, this._precisionModel = null, this._minimimVertexDistance = 0, this._ptList = new pe();
        } }]);
      }();
      Rl.COORDINATE_ARRAY_TYPE = new Array(0).fill(null);
      var Ct = function() {
        function o() {
          u(this, o);
        }
        return h(o, null, [{ key: "toDegrees", value: function(t) {
          return 180 * t / Math.PI;
        } }, { key: "normalize", value: function(t) {
          for (; t > Math.PI; ) t -= o.PI_TIMES_2;
          for (; t <= -Math.PI; ) t += o.PI_TIMES_2;
          return t;
        } }, { key: "angle", value: function() {
          if (arguments.length === 1) {
            var t = arguments[0];
            return Math.atan2(t.y, t.x);
          }
          if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1], c = a.x - i.x, g = a.y - i.y;
            return Math.atan2(g, c);
          }
        } }, { key: "isAcute", value: function(t, i, a) {
          var c = t.x - i.x, g = t.y - i.y;
          return c * (a.x - i.x) + g * (a.y - i.y) > 0;
        } }, { key: "isObtuse", value: function(t, i, a) {
          var c = t.x - i.x, g = t.y - i.y;
          return c * (a.x - i.x) + g * (a.y - i.y) < 0;
        } }, { key: "interiorAngle", value: function(t, i, a) {
          var c = o.angle(i, t), g = o.angle(i, a);
          return Math.abs(g - c);
        } }, { key: "normalizePositive", value: function(t) {
          if (t < 0) {
            for (; t < 0; ) t += o.PI_TIMES_2;
            t >= o.PI_TIMES_2 && (t = 0);
          } else {
            for (; t >= o.PI_TIMES_2; ) t -= o.PI_TIMES_2;
            t < 0 && (t = 0);
          }
          return t;
        } }, { key: "angleBetween", value: function(t, i, a) {
          var c = o.angle(i, t), g = o.angle(i, a);
          return o.diff(c, g);
        } }, { key: "diff", value: function(t, i) {
          var a = null;
          return (a = t < i ? i - t : t - i) > Math.PI && (a = 2 * Math.PI - a), a;
        } }, { key: "toRadians", value: function(t) {
          return t * Math.PI / 180;
        } }, { key: "getTurn", value: function(t, i) {
          var a = Math.sin(i - t);
          return a > 0 ? o.COUNTERCLOCKWISE : a < 0 ? o.CLOCKWISE : o.NONE;
        } }, { key: "angleBetweenOriented", value: function(t, i, a) {
          var c = o.angle(i, t), g = o.angle(i, a) - c;
          return g <= -Math.PI ? g + o.PI_TIMES_2 : g > Math.PI ? g - o.PI_TIMES_2 : g;
        } }]);
      }();
      Ct.PI_TIMES_2 = 2 * Math.PI, Ct.PI_OVER_2 = Math.PI / 2, Ct.PI_OVER_4 = Math.PI / 4, Ct.COUNTERCLOCKWISE = _e.COUNTERCLOCKWISE, Ct.CLOCKWISE = _e.CLOCKWISE, Ct.NONE = _e.COLLINEAR;
      var Bi = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "addNextSegment", value: function(t, i) {
          if (this._s0 = this._s1, this._s1 = this._s2, this._s2 = t, this._seg0.setCoordinates(this._s0, this._s1), this.computeOffsetSegment(this._seg0, this._side, this._distance, this._offset0), this._seg1.setCoordinates(this._s1, this._s2), this.computeOffsetSegment(this._seg1, this._side, this._distance, this._offset1), this._s1.equals(this._s2)) return null;
          var a = _e.index(this._s0, this._s1, this._s2), c = a === _e.CLOCKWISE && this._side === te.LEFT || a === _e.COUNTERCLOCKWISE && this._side === te.RIGHT;
          a === 0 ? this.addCollinear(i) : c ? this.addOutsideTurn(a, i) : this.addInsideTurn(a, i);
        } }, { key: "addLineEndCap", value: function(t, i) {
          var a = new At(t, i), c = new At();
          this.computeOffsetSegment(a, te.LEFT, this._distance, c);
          var g = new At();
          this.computeOffsetSegment(a, te.RIGHT, this._distance, g);
          var p = i.x - t.x, _ = i.y - t.y, w = Math.atan2(_, p);
          switch (this._bufParams.getEndCapStyle()) {
            case H.CAP_ROUND:
              this._segList.addPt(c.p1), this.addDirectedFillet(i, w + Math.PI / 2, w - Math.PI / 2, _e.CLOCKWISE, this._distance), this._segList.addPt(g.p1);
              break;
            case H.CAP_FLAT:
              this._segList.addPt(c.p1), this._segList.addPt(g.p1);
              break;
            case H.CAP_SQUARE:
              var L = new V();
              L.x = Math.abs(this._distance) * Math.cos(w), L.y = Math.abs(this._distance) * Math.sin(w);
              var q = new V(c.p1.x + L.x, c.p1.y + L.y), Z = new V(g.p1.x + L.x, g.p1.y + L.y);
              this._segList.addPt(q), this._segList.addPt(Z);
          }
        } }, { key: "getCoordinates", value: function() {
          return this._segList.getCoordinates();
        } }, { key: "addMitreJoin", value: function(t, i, a, c) {
          var g = Ti.intersection(i.p0, i.p1, a.p0, a.p1);
          if (g !== null && (c <= 0 ? 1 : g.distance(t) / Math.abs(c)) <= this._bufParams.getMitreLimit()) return this._segList.addPt(g), null;
          this.addLimitedMitreJoin(i, a, c, this._bufParams.getMitreLimit());
        } }, { key: "addOutsideTurn", value: function(t, i) {
          if (this._offset0.p1.distance(this._offset1.p0) < this._distance * o.OFFSET_SEGMENT_SEPARATION_FACTOR) return this._segList.addPt(this._offset0.p1), null;
          this._bufParams.getJoinStyle() === H.JOIN_MITRE ? this.addMitreJoin(this._s1, this._offset0, this._offset1, this._distance) : this._bufParams.getJoinStyle() === H.JOIN_BEVEL ? this.addBevelJoin(this._offset0, this._offset1) : (i && this._segList.addPt(this._offset0.p1), this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, t, this._distance), this._segList.addPt(this._offset1.p0));
        } }, { key: "createSquare", value: function(t) {
          this._segList.addPt(new V(t.x + this._distance, t.y + this._distance)), this._segList.addPt(new V(t.x + this._distance, t.y - this._distance)), this._segList.addPt(new V(t.x - this._distance, t.y - this._distance)), this._segList.addPt(new V(t.x - this._distance, t.y + this._distance)), this._segList.closeRing();
        } }, { key: "addSegments", value: function(t, i) {
          this._segList.addPts(t, i);
        } }, { key: "addFirstSegment", value: function() {
          this._segList.addPt(this._offset1.p0);
        } }, { key: "addCornerFillet", value: function(t, i, a, c, g) {
          var p = i.x - t.x, _ = i.y - t.y, w = Math.atan2(_, p), L = a.x - t.x, q = a.y - t.y, Z = Math.atan2(q, L);
          c === _e.CLOCKWISE ? w <= Z && (w += 2 * Math.PI) : w >= Z && (w -= 2 * Math.PI), this._segList.addPt(i), this.addDirectedFillet(t, w, Z, c, g), this._segList.addPt(a);
        } }, { key: "addLastSegment", value: function() {
          this._segList.addPt(this._offset1.p1);
        } }, { key: "initSideSegments", value: function(t, i, a) {
          this._s1 = t, this._s2 = i, this._side = a, this._seg1.setCoordinates(t, i), this.computeOffsetSegment(this._seg1, a, this._distance, this._offset1);
        } }, { key: "addLimitedMitreJoin", value: function(t, i, a, c) {
          var g = this._seg0.p1, p = Ct.angle(g, this._seg0.p0), _ = Ct.angleBetweenOriented(this._seg0.p0, g, this._seg1.p1) / 2, w = Ct.normalize(p + _), L = Ct.normalize(w + Math.PI), q = c * a, Z = a - q * Math.abs(Math.sin(_)), Q = g.x + q * Math.cos(L), le = g.y + q * Math.sin(L), fe = new V(Q, le), ve = new At(g, fe), be = ve.pointAlongOffset(1, Z), Ie = ve.pointAlongOffset(1, -Z);
          this._side === te.LEFT ? (this._segList.addPt(be), this._segList.addPt(Ie)) : (this._segList.addPt(Ie), this._segList.addPt(be));
        } }, { key: "addDirectedFillet", value: function(t, i, a, c, g) {
          var p = c === _e.CLOCKWISE ? -1 : 1, _ = Math.abs(i - a), w = Math.trunc(_ / this._filletAngleQuantum + 0.5);
          if (w < 1) return null;
          for (var L = _ / w, q = new V(), Z = 0; Z < w; Z++) {
            var Q = i + p * Z * L;
            q.x = t.x + g * Math.cos(Q), q.y = t.y + g * Math.sin(Q), this._segList.addPt(q);
          }
        } }, { key: "computeOffsetSegment", value: function(t, i, a, c) {
          var g = i === te.LEFT ? 1 : -1, p = t.p1.x - t.p0.x, _ = t.p1.y - t.p0.y, w = Math.sqrt(p * p + _ * _), L = g * a * p / w, q = g * a * _ / w;
          c.p0.x = t.p0.x - q, c.p0.y = t.p0.y + L, c.p1.x = t.p1.x - q, c.p1.y = t.p1.y + L;
        } }, { key: "addInsideTurn", value: function(t, i) {
          if (this._li.computeIntersection(this._offset0.p0, this._offset0.p1, this._offset1.p0, this._offset1.p1), this._li.hasIntersection()) this._segList.addPt(this._li.getIntersection(0));
          else if (this._hasNarrowConcaveAngle = !0, this._offset0.p1.distance(this._offset1.p0) < this._distance * o.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this._segList.addPt(this._offset0.p1);
          else {
            if (this._segList.addPt(this._offset0.p1), this._closingSegLengthFactor > 0) {
              var a = new V((this._closingSegLengthFactor * this._offset0.p1.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset0.p1.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(a);
              var c = new V((this._closingSegLengthFactor * this._offset1.p0.x + this._s1.x) / (this._closingSegLengthFactor + 1), (this._closingSegLengthFactor * this._offset1.p0.y + this._s1.y) / (this._closingSegLengthFactor + 1));
              this._segList.addPt(c);
            } else this._segList.addPt(this._s1);
            this._segList.addPt(this._offset1.p0);
          }
        } }, { key: "createCircle", value: function(t) {
          var i = new V(t.x + this._distance, t.y);
          this._segList.addPt(i), this.addDirectedFillet(t, 0, 2 * Math.PI, -1, this._distance), this._segList.closeRing();
        } }, { key: "addBevelJoin", value: function(t, i) {
          this._segList.addPt(t.p1), this._segList.addPt(i.p0);
        } }, { key: "init", value: function(t) {
          this._distance = t, this._maxCurveSegmentError = t * (1 - Math.cos(this._filletAngleQuantum / 2)), this._segList = new Rl(), this._segList.setPrecisionModel(this._precisionModel), this._segList.setMinimumVertexDistance(t * o.CURVE_VERTEX_SNAP_DISTANCE_FACTOR);
        } }, { key: "addCollinear", value: function(t) {
          this._li.computeIntersection(this._s0, this._s1, this._s1, this._s2), this._li.getIntersectionNum() >= 2 && (this._bufParams.getJoinStyle() === H.JOIN_BEVEL || this._bufParams.getJoinStyle() === H.JOIN_MITRE ? (t && this._segList.addPt(this._offset0.p1), this._segList.addPt(this._offset1.p0)) : this.addCornerFillet(this._s1, this._offset0.p1, this._offset1.p0, _e.CLOCKWISE, this._distance));
        } }, { key: "closeRing", value: function() {
          this._segList.closeRing();
        } }, { key: "hasNarrowConcaveAngle", value: function() {
          return this._hasNarrowConcaveAngle;
        } }], [{ key: "constructor_", value: function() {
          this._maxCurveSegmentError = 0, this._filletAngleQuantum = null, this._closingSegLengthFactor = 1, this._segList = null, this._distance = 0, this._precisionModel = null, this._bufParams = null, this._li = null, this._s0 = null, this._s1 = null, this._s2 = null, this._seg0 = new At(), this._seg1 = new At(), this._offset0 = new At(), this._offset1 = new At(), this._side = 0, this._hasNarrowConcaveAngle = !1;
          var t = arguments[0], i = arguments[1], a = arguments[2];
          this._precisionModel = t, this._bufParams = i, this._li = new yr(), this._filletAngleQuantum = Math.PI / 2 / i.getQuadrantSegments(), i.getQuadrantSegments() >= 8 && i.getJoinStyle() === H.JOIN_ROUND && (this._closingSegLengthFactor = o.MAX_CLOSING_SEG_LEN_FACTOR), this.init(a);
        } }]);
      }();
      Bi.OFFSET_SEGMENT_SEPARATION_FACTOR = 1e-3, Bi.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = 1e-3, Bi.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1e-6, Bi.MAX_CLOSING_SEG_LEN_FACTOR = 80;
      var lp = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getOffsetCurve", value: function(t, i) {
          if (this._distance = i, i === 0) return null;
          var a = i < 0, c = Math.abs(i), g = this.getSegGen(c);
          t.length <= 1 ? this.computePointCurve(t[0], g) : this.computeOffsetCurve(t, a, g);
          var p = g.getCoordinates();
          return a && oe.reverse(p), p;
        } }, { key: "computeSingleSidedBufferCurve", value: function(t, i, a) {
          var c = this.simplifyTolerance(this._distance);
          if (i) {
            a.addSegments(t, !0);
            var g = rn.simplify(t, -c), p = g.length - 1;
            a.initSideSegments(g[p], g[p - 1], te.LEFT), a.addFirstSegment();
            for (var _ = p - 2; _ >= 0; _--) a.addNextSegment(g[_], !0);
          } else {
            a.addSegments(t, !1);
            var w = rn.simplify(t, c), L = w.length - 1;
            a.initSideSegments(w[0], w[1], te.LEFT), a.addFirstSegment();
            for (var q = 2; q <= L; q++) a.addNextSegment(w[q], !0);
          }
          a.addLastSegment(), a.closeRing();
        } }, { key: "computeRingBufferCurve", value: function(t, i, a) {
          var c = this.simplifyTolerance(this._distance);
          i === te.RIGHT && (c = -c);
          var g = rn.simplify(t, c), p = g.length - 1;
          a.initSideSegments(g[p - 1], g[0], i);
          for (var _ = 1; _ <= p; _++) {
            var w = _ !== 1;
            a.addNextSegment(g[_], w);
          }
          a.closeRing();
        } }, { key: "computeLineBufferCurve", value: function(t, i) {
          var a = this.simplifyTolerance(this._distance), c = rn.simplify(t, a), g = c.length - 1;
          i.initSideSegments(c[0], c[1], te.LEFT);
          for (var p = 2; p <= g; p++) i.addNextSegment(c[p], !0);
          i.addLastSegment(), i.addLineEndCap(c[g - 1], c[g]);
          var _ = rn.simplify(t, -a), w = _.length - 1;
          i.initSideSegments(_[w], _[w - 1], te.LEFT);
          for (var L = w - 2; L >= 0; L--) i.addNextSegment(_[L], !0);
          i.addLastSegment(), i.addLineEndCap(_[1], _[0]), i.closeRing();
        } }, { key: "computePointCurve", value: function(t, i) {
          switch (this._bufParams.getEndCapStyle()) {
            case H.CAP_ROUND:
              i.createCircle(t);
              break;
            case H.CAP_SQUARE:
              i.createSquare(t);
          }
        } }, { key: "getLineCurve", value: function(t, i) {
          if (this._distance = i, this.isLineOffsetEmpty(i)) return null;
          var a = Math.abs(i), c = this.getSegGen(a);
          if (t.length <= 1) this.computePointCurve(t[0], c);
          else if (this._bufParams.isSingleSided()) {
            var g = i < 0;
            this.computeSingleSidedBufferCurve(t, g, c);
          } else this.computeLineBufferCurve(t, c);
          return c.getCoordinates();
        } }, { key: "getBufferParameters", value: function() {
          return this._bufParams;
        } }, { key: "simplifyTolerance", value: function(t) {
          return t * this._bufParams.getSimplifyFactor();
        } }, { key: "getRingCurve", value: function(t, i, a) {
          if (this._distance = a, t.length <= 2) return this.getLineCurve(t, a);
          if (a === 0) return o.copyCoordinates(t);
          var c = this.getSegGen(a);
          return this.computeRingBufferCurve(t, i, c), c.getCoordinates();
        } }, { key: "computeOffsetCurve", value: function(t, i, a) {
          var c = this.simplifyTolerance(this._distance);
          if (i) {
            var g = rn.simplify(t, -c), p = g.length - 1;
            a.initSideSegments(g[p], g[p - 1], te.LEFT), a.addFirstSegment();
            for (var _ = p - 2; _ >= 0; _--) a.addNextSegment(g[_], !0);
          } else {
            var w = rn.simplify(t, c), L = w.length - 1;
            a.initSideSegments(w[0], w[1], te.LEFT), a.addFirstSegment();
            for (var q = 2; q <= L; q++) a.addNextSegment(w[q], !0);
          }
          a.addLastSegment();
        } }, { key: "isLineOffsetEmpty", value: function(t) {
          return t === 0 || t < 0 && !this._bufParams.isSingleSided();
        } }, { key: "getSegGen", value: function(t) {
          return new Bi(this._precisionModel, this._bufParams, t);
        } }], [{ key: "constructor_", value: function() {
          this._distance = 0, this._precisionModel = null, this._bufParams = null;
          var t = arguments[0], i = arguments[1];
          this._precisionModel = t, this._bufParams = i;
        } }, { key: "copyCoordinates", value: function(t) {
          for (var i = new Array(t.length).fill(null), a = 0; a < i.length; a++) i[a] = new V(t[a]);
          return i;
        } }]);
      }(), Dl = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "findStabbedSegments", value: function() {
          if (arguments.length === 1) {
            for (var o = arguments[0], t = new pe(), i = this._subgraphs.iterator(); i.hasNext(); ) {
              var a = i.next(), c = a.getEnvelope();
              o.y < c.getMinY() || o.y > c.getMaxY() || this.findStabbedSegments(o, a.getDirectedEdges(), t);
            }
            return t;
          }
          if (arguments.length === 3) {
            if (Ee(arguments[2], Pn) && arguments[0] instanceof V && arguments[1] instanceof fo) {
              for (var g = arguments[0], p = arguments[1], _ = arguments[2], w = p.getEdge().getCoordinates(), L = 0; L < w.length - 1; L++)
                if (this._seg.p0 = w[L], this._seg.p1 = w[L + 1], this._seg.p0.y > this._seg.p1.y && this._seg.reverse(), !(Math.max(this._seg.p0.x, this._seg.p1.x) < g.x || this._seg.isHorizontal() || g.y < this._seg.p0.y || g.y > this._seg.p1.y || _e.index(this._seg.p0, this._seg.p1, g) === _e.RIGHT)) {
                  var q = p.getDepth(te.LEFT);
                  this._seg.p0.equals(w[L]) || (q = p.getDepth(te.RIGHT));
                  var Z = new Fl(this._seg, q);
                  _.add(Z);
                }
            } else if (Ee(arguments[2], Pn) && arguments[0] instanceof V && Ee(arguments[1], Pn)) for (var Q = arguments[0], le = arguments[2], fe = arguments[1].iterator(); fe.hasNext(); ) {
              var ve = fe.next();
              ve.isForward() && this.findStabbedSegments(Q, ve, le);
            }
          }
        } }, { key: "getDepth", value: function(o) {
          var t = this.findStabbedSegments(o);
          return t.size() === 0 ? 0 : Xr.min(t)._leftDepth;
        } }], [{ key: "constructor_", value: function() {
          this._subgraphs = null, this._seg = new At();
          var o = arguments[0];
          this._subgraphs = o;
        } }]);
      }(), Fl = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "compareTo", value: function(o) {
          var t = o;
          if (this._upwardSeg.minX() >= t._upwardSeg.maxX()) return 1;
          if (this._upwardSeg.maxX() <= t._upwardSeg.minX()) return -1;
          var i = this._upwardSeg.orientationIndex(t._upwardSeg);
          return i !== 0 || (i = -1 * t._upwardSeg.orientationIndex(this._upwardSeg)) !== 0 ? i : this._upwardSeg.compareTo(t._upwardSeg);
        } }, { key: "compareX", value: function(o, t) {
          var i = o.p0.compareTo(t.p0);
          return i !== 0 ? i : o.p1.compareTo(t.p1);
        } }, { key: "toString", value: function() {
          return this._upwardSeg.toString();
        } }, { key: "interfaces_", get: function() {
          return [$];
        } }], [{ key: "constructor_", value: function() {
          this._upwardSeg = null, this._leftDepth = null;
          var o = arguments[0], t = arguments[1];
          this._upwardSeg = new At(o), this._leftDepth = t;
        } }]);
      }();
      Dl.DepthSegment = Fl;
      var Gl = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, null, [{ key: "constructor_", value: function() {
          J.constructor_.call(this, "Projective point not representable on the Cartesian plane.");
        } }]);
      }(J), mo = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getY", value: function() {
          var t = this.y / this.w;
          if (K.isNaN(t) || K.isInfinite(t)) throw new Gl();
          return t;
        } }, { key: "getX", value: function() {
          var t = this.x / this.w;
          if (K.isNaN(t) || K.isInfinite(t)) throw new Gl();
          return t;
        } }, { key: "getCoordinate", value: function() {
          var t = new V();
          return t.x = this.getX(), t.y = this.getY(), t;
        } }], [{ key: "constructor_", value: function() {
          if (this.x = null, this.y = null, this.w = null, arguments.length === 0) this.x = 0, this.y = 0, this.w = 1;
          else if (arguments.length === 1) {
            var t = arguments[0];
            this.x = t.x, this.y = t.y, this.w = 1;
          } else if (arguments.length === 2) {
            if (typeof arguments[0] == "number" && typeof arguments[1] == "number") {
              var i = arguments[0], a = arguments[1];
              this.x = i, this.y = a, this.w = 1;
            } else if (arguments[0] instanceof o && arguments[1] instanceof o) {
              var c = arguments[0], g = arguments[1];
              this.x = c.y * g.w - g.y * c.w, this.y = g.x * c.w - c.x * g.w, this.w = c.x * g.y - g.x * c.y;
            } else if (arguments[0] instanceof V && arguments[1] instanceof V) {
              var p = arguments[0], _ = arguments[1];
              this.x = p.y - _.y, this.y = _.x - p.x, this.w = p.x * _.y - _.x * p.y;
            }
          } else if (arguments.length === 3) {
            var w = arguments[0], L = arguments[1], q = arguments[2];
            this.x = w, this.y = L, this.w = q;
          } else if (arguments.length === 4) {
            var Z = arguments[0], Q = arguments[1], le = arguments[2], fe = arguments[3], ve = Z.y - Q.y, be = Q.x - Z.x, Ie = Z.x * Q.y - Q.x * Z.y, Fe = le.y - fe.y, ot = fe.x - le.x, ct = le.x * fe.y - fe.x * le.y;
            this.x = be * ct - ot * Ie, this.y = Fe * Ie - ve * ct, this.w = ve * ot - Fe * be;
          }
        } }]);
      }(), cp = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "area", value: function() {
          return o.area(this.p0, this.p1, this.p2);
        } }, { key: "signedArea", value: function() {
          return o.signedArea(this.p0, this.p1, this.p2);
        } }, { key: "interpolateZ", value: function(t) {
          if (t === null) throw new X("Supplied point is null.");
          return o.interpolateZ(t, this.p0, this.p1, this.p2);
        } }, { key: "longestSideLength", value: function() {
          return o.longestSideLength(this.p0, this.p1, this.p2);
        } }, { key: "isAcute", value: function() {
          return o.isAcute(this.p0, this.p1, this.p2);
        } }, { key: "circumcentre", value: function() {
          return o.circumcentre(this.p0, this.p1, this.p2);
        } }, { key: "area3D", value: function() {
          return o.area3D(this.p0, this.p1, this.p2);
        } }, { key: "centroid", value: function() {
          return o.centroid(this.p0, this.p1, this.p2);
        } }, { key: "inCentre", value: function() {
          return o.inCentre(this.p0, this.p1, this.p2);
        } }], [{ key: "constructor_", value: function() {
          this.p0 = null, this.p1 = null, this.p2 = null;
          var t = arguments[0], i = arguments[1], a = arguments[2];
          this.p0 = t, this.p1 = i, this.p2 = a;
        } }, { key: "area", value: function(t, i, a) {
          return Math.abs(((a.x - t.x) * (i.y - t.y) - (i.x - t.x) * (a.y - t.y)) / 2);
        } }, { key: "signedArea", value: function(t, i, a) {
          return ((a.x - t.x) * (i.y - t.y) - (i.x - t.x) * (a.y - t.y)) / 2;
        } }, { key: "det", value: function(t, i, a, c) {
          return t * c - i * a;
        } }, { key: "interpolateZ", value: function(t, i, a, c) {
          var g = i.x, p = i.y, _ = a.x - g, w = c.x - g, L = a.y - p, q = c.y - p, Z = _ * q - w * L, Q = t.x - g, le = t.y - p, fe = (q * Q - w * le) / Z, ve = (-L * Q + _ * le) / Z;
          return i.getZ() + fe * (a.getZ() - i.getZ()) + ve * (c.getZ() - i.getZ());
        } }, { key: "longestSideLength", value: function(t, i, a) {
          var c = t.distance(i), g = i.distance(a), p = a.distance(t), _ = c;
          return g > _ && (_ = g), p > _ && (_ = p), _;
        } }, { key: "circumcentreDD", value: function(t, i, a) {
          var c = ye.valueOf(t.x).subtract(a.x), g = ye.valueOf(t.y).subtract(a.y), p = ye.valueOf(i.x).subtract(a.x), _ = ye.valueOf(i.y).subtract(a.y), w = ye.determinant(c, g, p, _).multiply(2), L = c.sqr().add(g.sqr()), q = p.sqr().add(_.sqr()), Z = ye.determinant(g, L, _, q), Q = ye.determinant(c, L, p, q), le = ye.valueOf(a.x).subtract(Z.divide(w)).doubleValue(), fe = ye.valueOf(a.y).add(Q.divide(w)).doubleValue();
          return new V(le, fe);
        } }, { key: "isAcute", value: function(t, i, a) {
          return !!Ct.isAcute(t, i, a) && !!Ct.isAcute(i, a, t) && !!Ct.isAcute(a, t, i);
        } }, { key: "circumcentre", value: function(t, i, a) {
          var c = a.x, g = a.y, p = t.x - c, _ = t.y - g, w = i.x - c, L = i.y - g, q = 2 * o.det(p, _, w, L), Z = o.det(_, p * p + _ * _, L, w * w + L * L), Q = o.det(p, p * p + _ * _, w, w * w + L * L);
          return new V(c - Z / q, g + Q / q);
        } }, { key: "perpendicularBisector", value: function(t, i) {
          var a = i.x - t.x, c = i.y - t.y, g = new mo(t.x + a / 2, t.y + c / 2, 1), p = new mo(t.x - c + a / 2, t.y + a + c / 2, 1);
          return new mo(g, p);
        } }, { key: "angleBisector", value: function(t, i, a) {
          var c = i.distance(t), g = c / (c + i.distance(a)), p = a.x - t.x, _ = a.y - t.y;
          return new V(t.x + g * p, t.y + g * _);
        } }, { key: "area3D", value: function(t, i, a) {
          var c = i.x - t.x, g = i.y - t.y, p = i.getZ() - t.getZ(), _ = a.x - t.x, w = a.y - t.y, L = a.getZ() - t.getZ(), q = g * L - p * w, Z = p * _ - c * L, Q = c * w - g * _, le = q * q + Z * Z + Q * Q, fe = Math.sqrt(le) / 2;
          return fe;
        } }, { key: "centroid", value: function(t, i, a) {
          var c = (t.x + i.x + a.x) / 3, g = (t.y + i.y + a.y) / 3;
          return new V(c, g);
        } }, { key: "inCentre", value: function(t, i, a) {
          var c = i.distance(a), g = t.distance(a), p = t.distance(i), _ = c + g + p, w = (c * t.x + g * i.x + p * a.x) / _, L = (c * t.y + g * i.y + p * a.y) / _;
          return new V(w, L);
        } }]);
      }(), hp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "addRingSide", value: function(o, t, i, a, c) {
          if (t === 0 && o.length < er.MINIMUM_VALID_SIZE) return null;
          var g = a, p = c;
          o.length >= er.MINIMUM_VALID_SIZE && _e.isCCW(o) && (g = c, p = a, i = te.opposite(i));
          var _ = this._curveBuilder.getRingCurve(o, i, t);
          this.addCurve(_, g, p);
        } }, { key: "addRingBothSides", value: function(o, t) {
          this.addRingSide(o, t, te.LEFT, C.EXTERIOR, C.INTERIOR), this.addRingSide(o, t, te.RIGHT, C.INTERIOR, C.EXTERIOR);
        } }, { key: "addPoint", value: function(o) {
          if (this._distance <= 0) return null;
          var t = o.getCoordinates(), i = this._curveBuilder.getLineCurve(t, this._distance);
          this.addCurve(i, C.EXTERIOR, C.INTERIOR);
        } }, { key: "addPolygon", value: function(o) {
          var t = this._distance, i = te.LEFT;
          this._distance < 0 && (t = -this._distance, i = te.RIGHT);
          var a = o.getExteriorRing(), c = oe.removeRepeatedPoints(a.getCoordinates());
          if (this._distance < 0 && this.isErodedCompletely(a, this._distance) || this._distance <= 0 && c.length < 3) return null;
          this.addRingSide(c, t, i, C.EXTERIOR, C.INTERIOR);
          for (var g = 0; g < o.getNumInteriorRing(); g++) {
            var p = o.getInteriorRingN(g), _ = oe.removeRepeatedPoints(p.getCoordinates());
            this._distance > 0 && this.isErodedCompletely(p, -this._distance) || this.addRingSide(_, t, te.opposite(i), C.INTERIOR, C.EXTERIOR);
          }
        } }, { key: "isTriangleErodedCompletely", value: function(o, t) {
          var i = new cp(o[0], o[1], o[2]), a = i.inCentre();
          return Gt.pointToSegment(a, i.p0, i.p1) < Math.abs(t);
        } }, { key: "addLineString", value: function(o) {
          if (this._curveBuilder.isLineOffsetEmpty(this._distance)) return null;
          var t = oe.removeRepeatedPoints(o.getCoordinates());
          if (oe.isRing(t) && !this._curveBuilder.getBufferParameters().isSingleSided()) this.addRingBothSides(t, this._distance);
          else {
            var i = this._curveBuilder.getLineCurve(t, this._distance);
            this.addCurve(i, C.EXTERIOR, C.INTERIOR);
          }
        } }, { key: "addCurve", value: function(o, t, i) {
          if (o === null || o.length < 2) return null;
          var a = new _r(o, new zt(0, C.BOUNDARY, t, i));
          this._curveList.add(a);
        } }, { key: "getCurves", value: function() {
          return this.add(this._inputGeom), this._curveList;
        } }, { key: "add", value: function(o) {
          if (o.isEmpty()) return null;
          if (o instanceof vr) this.addPolygon(o);
          else if (o instanceof Qn) this.addLineString(o);
          else if (o instanceof Pi) this.addPoint(o);
          else if (o instanceof Yr) this.addCollection(o);
          else if (o instanceof oo) this.addCollection(o);
          else if (o instanceof Rn) this.addCollection(o);
          else {
            if (!(o instanceof lt)) throw new Se(o.getGeometryType());
            this.addCollection(o);
          }
        } }, { key: "isErodedCompletely", value: function(o, t) {
          var i = o.getCoordinates();
          if (i.length < 4) return t < 0;
          if (i.length === 4) return this.isTriangleErodedCompletely(i, t);
          var a = o.getEnvelopeInternal(), c = Math.min(a.getHeight(), a.getWidth());
          return t < 0 && 2 * Math.abs(t) > c;
        } }, { key: "addCollection", value: function(o) {
          for (var t = 0; t < o.getNumGeometries(); t++) {
            var i = o.getGeometryN(t);
            this.add(i);
          }
        } }], [{ key: "constructor_", value: function() {
          this._inputGeom = null, this._distance = null, this._curveBuilder = null, this._curveList = new pe();
          var o = arguments[0], t = arguments[1], i = arguments[2];
          this._inputGeom = o, this._distance = t, this._curveBuilder = i;
        } }]);
      }(), fp = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "locate", value: function(o) {
        } }]);
      }(), gp = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "next", value: function() {
          if (this._atStart) return this._atStart = !1, o.isAtomic(this._parent) && this._index++, this._parent;
          if (this._subcollectionIterator !== null) {
            if (this._subcollectionIterator.hasNext()) return this._subcollectionIterator.next();
            this._subcollectionIterator = null;
          }
          if (this._index >= this._max) throw new Pe();
          var t = this._parent.getGeometryN(this._index++);
          return t instanceof lt ? (this._subcollectionIterator = new o(t), this._subcollectionIterator.next()) : t;
        } }, { key: "remove", value: function() {
          throw new Se(this.getClass().getName());
        } }, { key: "hasNext", value: function() {
          if (this._atStart) return !0;
          if (this._subcollectionIterator !== null) {
            if (this._subcollectionIterator.hasNext()) return !0;
            this._subcollectionIterator = null;
          }
          return !(this._index >= this._max);
        } }, { key: "interfaces_", get: function() {
          return [np];
        } }], [{ key: "constructor_", value: function() {
          this._parent = null, this._atStart = null, this._max = null, this._index = null, this._subcollectionIterator = null;
          var t = arguments[0];
          this._parent = t, this._atStart = !0, this._index = 0, this._max = t.getNumGeometries();
        } }, { key: "isAtomic", value: function(t) {
          return !(t instanceof lt);
        } }]);
      }(), dp = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "locate", value: function(t) {
          return o.locate(t, this._geom);
        } }, { key: "interfaces_", get: function() {
          return [fp];
        } }], [{ key: "constructor_", value: function() {
          this._geom = null;
          var t = arguments[0];
          this._geom = t;
        } }, { key: "locatePointInPolygon", value: function(t, i) {
          if (i.isEmpty()) return C.EXTERIOR;
          var a = i.getExteriorRing(), c = o.locatePointInRing(t, a);
          if (c !== C.INTERIOR) return c;
          for (var g = 0; g < i.getNumInteriorRing(); g++) {
            var p = i.getInteriorRingN(g), _ = o.locatePointInRing(t, p);
            if (_ === C.BOUNDARY) return C.BOUNDARY;
            if (_ === C.INTERIOR) return C.EXTERIOR;
          }
          return C.INTERIOR;
        } }, { key: "locatePointInRing", value: function(t, i) {
          return i.getEnvelopeInternal().intersects(t) ? co.locateInRing(t, i.getCoordinates()) : C.EXTERIOR;
        } }, { key: "containsPointInPolygon", value: function(t, i) {
          return C.EXTERIOR !== o.locatePointInPolygon(t, i);
        } }, { key: "locateInGeometry", value: function(t, i) {
          if (i instanceof vr) return o.locatePointInPolygon(t, i);
          if (i instanceof lt) for (var a = new gp(i); a.hasNext(); ) {
            var c = a.next();
            if (c !== i) {
              var g = o.locateInGeometry(t, c);
              if (g !== C.EXTERIOR) return g;
            }
          }
          return C.EXTERIOR;
        } }, { key: "isContained", value: function(t, i) {
          return C.EXTERIOR !== o.locate(t, i);
        } }, { key: "locate", value: function(t, i) {
          return i.isEmpty() ? C.EXTERIOR : i.getEnvelopeInternal().intersects(t) ? o.locateInGeometry(t, i) : C.EXTERIOR;
        } }]);
      }(), pp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getNextCW", value: function(o) {
          this.getEdges();
          var t = this._edgeList.indexOf(o), i = t - 1;
          return t === 0 && (i = this._edgeList.size() - 1), this._edgeList.get(i);
        } }, { key: "propagateSideLabels", value: function(o) {
          for (var t = C.NONE, i = this.iterator(); i.hasNext(); ) {
            var a = i.next().getLabel();
            a.isArea(o) && a.getLocation(o, te.LEFT) !== C.NONE && (t = a.getLocation(o, te.LEFT));
          }
          if (t === C.NONE) return null;
          for (var c = t, g = this.iterator(); g.hasNext(); ) {
            var p = g.next(), _ = p.getLabel();
            if (_.getLocation(o, te.ON) === C.NONE && _.setLocation(o, te.ON, c), _.isArea(o)) {
              var w = _.getLocation(o, te.LEFT), L = _.getLocation(o, te.RIGHT);
              if (L !== C.NONE) {
                if (L !== c) throw new wt("side location conflict", p.getCoordinate());
                w === C.NONE && ae.shouldNeverReachHere("found single null side (at " + p.getCoordinate() + ")"), c = w;
              } else ae.isTrue(_.getLocation(o, te.LEFT) === C.NONE, "found single null side"), _.setLocation(o, te.RIGHT, c), _.setLocation(o, te.LEFT, c);
            }
          }
        } }, { key: "getCoordinate", value: function() {
          var o = this.iterator();
          return o.hasNext() ? o.next().getCoordinate() : null;
        } }, { key: "print", value: function(o) {
          at.out.println("EdgeEndStar:   " + this.getCoordinate());
          for (var t = this.iterator(); t.hasNext(); )
            t.next().print(o);
        } }, { key: "isAreaLabelsConsistent", value: function(o) {
          return this.computeEdgeEndLabels(o.getBoundaryNodeRule()), this.checkAreaLabelsConsistent(0);
        } }, { key: "checkAreaLabelsConsistent", value: function(o) {
          var t = this.getEdges();
          if (t.size() <= 0) return !0;
          var i = t.size() - 1, a = t.get(i).getLabel().getLocation(o, te.LEFT);
          ae.isTrue(a !== C.NONE, "Found unlabelled area edge");
          for (var c = a, g = this.iterator(); g.hasNext(); ) {
            var p = g.next().getLabel();
            ae.isTrue(p.isArea(o), "Found non-area edge");
            var _ = p.getLocation(o, te.LEFT), w = p.getLocation(o, te.RIGHT);
            if (_ === w || w !== c) return !1;
            c = _;
          }
          return !0;
        } }, { key: "findIndex", value: function(o) {
          this.iterator();
          for (var t = 0; t < this._edgeList.size(); t++)
            if (this._edgeList.get(t) === o) return t;
          return -1;
        } }, { key: "iterator", value: function() {
          return this.getEdges().iterator();
        } }, { key: "getEdges", value: function() {
          return this._edgeList === null && (this._edgeList = new pe(this._edgeMap.values())), this._edgeList;
        } }, { key: "getLocation", value: function(o, t, i) {
          return this._ptInAreaLocation[o] === C.NONE && (this._ptInAreaLocation[o] = dp.locate(t, i[o].getGeometry())), this._ptInAreaLocation[o];
        } }, { key: "toString", value: function() {
          var o = new Ft();
          o.append("EdgeEndStar:   " + this.getCoordinate()), o.append(`
`);
          for (var t = this.iterator(); t.hasNext(); ) {
            var i = t.next();
            o.append(i), o.append(`
`);
          }
          return o.toString();
        } }, { key: "computeEdgeEndLabels", value: function(o) {
          for (var t = this.iterator(); t.hasNext(); )
            t.next().computeLabel(o);
        } }, { key: "computeLabelling", value: function(o) {
          this.computeEdgeEndLabels(o[0].getBoundaryNodeRule()), this.propagateSideLabels(0), this.propagateSideLabels(1);
          for (var t = [!1, !1], i = this.iterator(); i.hasNext(); ) for (var a = i.next().getLabel(), c = 0; c < 2; c++) a.isLine(c) && a.getLocation(c) === C.BOUNDARY && (t[c] = !0);
          for (var g = this.iterator(); g.hasNext(); ) for (var p = g.next(), _ = p.getLabel(), w = 0; w < 2; w++) if (_.isAnyNull(w)) {
            var L = C.NONE;
            if (t[w]) L = C.EXTERIOR;
            else {
              var q = p.getCoordinate();
              L = this.getLocation(w, q, o);
            }
            _.setAllLocationsIfNull(w, L);
          }
        } }, { key: "getDegree", value: function() {
          return this._edgeMap.size();
        } }, { key: "insertEdgeEnd", value: function(o, t) {
          this._edgeMap.put(o, t), this._edgeList = null;
        } }], [{ key: "constructor_", value: function() {
          this._edgeMap = new Gi(), this._edgeList = null, this._ptInAreaLocation = [C.NONE, C.NONE];
        } }]);
      }(), mp = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "linkResultDirectedEdges", value: function() {
          this.getResultAreaEdges();
          for (var i = null, a = null, c = this._SCANNING_FOR_INCOMING, g = 0; g < this._resultAreaEdgeList.size(); g++) {
            var p = this._resultAreaEdgeList.get(g), _ = p.getSym();
            if (p.getLabel().isArea()) switch (i === null && p.isInResult() && (i = p), c) {
              case this._SCANNING_FOR_INCOMING:
                if (!_.isInResult()) continue;
                a = _, c = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (!p.isInResult()) continue;
                a.setNext(p), c = this._SCANNING_FOR_INCOMING;
            }
          }
          if (c === this._LINKING_TO_OUTGOING) {
            if (i === null) throw new wt("no outgoing dirEdge found", this.getCoordinate());
            ae.isTrue(i.isInResult(), "unable to link last incoming dirEdge"), a.setNext(i);
          }
        } }, { key: "insert", value: function(i) {
          var a = i;
          this.insertEdgeEnd(a, a);
        } }, { key: "getRightmostEdge", value: function() {
          var i = this.getEdges(), a = i.size();
          if (a < 1) return null;
          var c = i.get(0);
          if (a === 1) return c;
          var g = i.get(a - 1), p = c.getQuadrant(), _ = g.getQuadrant();
          return gt.isNorthern(p) && gt.isNorthern(_) ? c : gt.isNorthern(p) || gt.isNorthern(_) ? c.getDy() !== 0 ? c : g.getDy() !== 0 ? g : (ae.shouldNeverReachHere("found two horizontal edges incident on node"), null) : g;
        } }, { key: "print", value: function(i) {
          at.out.println("DirectedEdgeStar: " + this.getCoordinate());
          for (var a = this.iterator(); a.hasNext(); ) {
            var c = a.next();
            i.print("out "), c.print(i), i.println(), i.print("in "), c.getSym().print(i), i.println();
          }
        } }, { key: "getResultAreaEdges", value: function() {
          if (this._resultAreaEdgeList !== null) return this._resultAreaEdgeList;
          this._resultAreaEdgeList = new pe();
          for (var i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            (a.isInResult() || a.getSym().isInResult()) && this._resultAreaEdgeList.add(a);
          }
          return this._resultAreaEdgeList;
        } }, { key: "updateLabelling", value: function(i) {
          for (var a = this.iterator(); a.hasNext(); ) {
            var c = a.next().getLabel();
            c.setAllLocationsIfNull(0, i.getLocation(0)), c.setAllLocationsIfNull(1, i.getLocation(1));
          }
        } }, { key: "linkAllDirectedEdges", value: function() {
          this.getEdges();
          for (var i = null, a = null, c = this._edgeList.size() - 1; c >= 0; c--) {
            var g = this._edgeList.get(c), p = g.getSym();
            a === null && (a = p), i !== null && p.setNext(i), i = g;
          }
          a.setNext(i);
        } }, { key: "computeDepths", value: function() {
          if (arguments.length === 1) {
            var i = arguments[0], a = this.findIndex(i), c = i.getDepth(te.LEFT), g = i.getDepth(te.RIGHT), p = this.computeDepths(a + 1, this._edgeList.size(), c);
            if (this.computeDepths(0, a, p) !== g) throw new wt("depth mismatch at " + i.getCoordinate());
          } else if (arguments.length === 3) {
            for (var _ = arguments[1], w = arguments[2], L = arguments[0]; L < _; L++) {
              var q = this._edgeList.get(L);
              q.setEdgeDepths(te.RIGHT, w), w = q.getDepth(te.LEFT);
            }
            return w;
          }
        } }, { key: "mergeSymLabels", value: function() {
          for (var i = this.iterator(); i.hasNext(); ) {
            var a = i.next();
            a.getLabel().merge(a.getSym().getLabel());
          }
        } }, { key: "linkMinimalDirectedEdges", value: function(i) {
          for (var a = null, c = null, g = this._SCANNING_FOR_INCOMING, p = this._resultAreaEdgeList.size() - 1; p >= 0; p--) {
            var _ = this._resultAreaEdgeList.get(p), w = _.getSym();
            switch (a === null && _.getEdgeRing() === i && (a = _), g) {
              case this._SCANNING_FOR_INCOMING:
                if (w.getEdgeRing() !== i) continue;
                c = w, g = this._LINKING_TO_OUTGOING;
                break;
              case this._LINKING_TO_OUTGOING:
                if (_.getEdgeRing() !== i) continue;
                c.setNextMin(_), g = this._SCANNING_FOR_INCOMING;
            }
          }
          g === this._LINKING_TO_OUTGOING && (ae.isTrue(a !== null, "found null for first outgoing dirEdge"), ae.isTrue(a.getEdgeRing() === i, "unable to link last incoming dirEdge"), c.setNextMin(a));
        } }, { key: "getOutgoingDegree", value: function() {
          if (arguments.length === 0) {
            for (var i = 0, a = this.iterator(); a.hasNext(); )
              a.next().isInResult() && i++;
            return i;
          }
          if (arguments.length === 1) {
            for (var c = arguments[0], g = 0, p = this.iterator(); p.hasNext(); )
              p.next().getEdgeRing() === c && g++;
            return g;
          }
        } }, { key: "getLabel", value: function() {
          return this._label;
        } }, { key: "findCoveredLineEdges", value: function() {
          for (var i = C.NONE, a = this.iterator(); a.hasNext(); ) {
            var c = a.next(), g = c.getSym();
            if (!c.isLineEdge()) {
              if (c.isInResult()) {
                i = C.INTERIOR;
                break;
              }
              if (g.isInResult()) {
                i = C.EXTERIOR;
                break;
              }
            }
          }
          if (i === C.NONE) return null;
          for (var p = i, _ = this.iterator(); _.hasNext(); ) {
            var w = _.next(), L = w.getSym();
            w.isLineEdge() ? w.getEdge().setCovered(p === C.INTERIOR) : (w.isInResult() && (p = C.EXTERIOR), L.isInResult() && (p = C.INTERIOR));
          }
        } }, { key: "computeLabelling", value: function(i) {
          M(t, "computeLabelling", this, 1).call(this, i), this._label = new zt(C.NONE);
          for (var a = this.iterator(); a.hasNext(); ) for (var c = a.next().getEdge().getLabel(), g = 0; g < 2; g++) {
            var p = c.getLocation(g);
            p !== C.INTERIOR && p !== C.BOUNDARY || this._label.setLocation(g, C.INTERIOR);
          }
        } }], [{ key: "constructor_", value: function() {
          this._resultAreaEdgeList = null, this._label = null, this._SCANNING_FOR_INCOMING = 1, this._LINKING_TO_OUTGOING = 2;
        } }]);
      }(pp), vp = function(o) {
        function t() {
          return u(this, t), s(this, t);
        }
        return y(t, o), h(t, [{ key: "createNode", value: function(i) {
          return new Cs(i, new mp());
        } }]);
      }(Ll), Bl = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "compareTo", value: function(t) {
          var i = t;
          return o.compareOriented(this._pts, this._orientation, i._pts, i._orientation);
        } }, { key: "interfaces_", get: function() {
          return [$];
        } }], [{ key: "constructor_", value: function() {
          this._pts = null, this._orientation = null;
          var t = arguments[0];
          this._pts = t, this._orientation = o.orientation(t);
        } }, { key: "orientation", value: function(t) {
          return oe.increasingDirection(t) === 1;
        } }, { key: "compareOriented", value: function(t, i, a, c) {
          for (var g = i ? 1 : -1, p = c ? 1 : -1, _ = i ? t.length : -1, w = c ? a.length : -1, L = i ? 0 : t.length - 1, q = c ? 0 : a.length - 1; ; ) {
            var Z = t[L].compareTo(a[q]);
            if (Z !== 0) return Z;
            var Q = (L += g) === _, le = (q += p) === w;
            if (Q && !le) return -1;
            if (!Q && le) return 1;
            if (Q && le) return 0;
          }
        } }]);
      }(), yp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "print", value: function(o) {
          o.print("MULTILINESTRING ( ");
          for (var t = 0; t < this._edges.size(); t++) {
            var i = this._edges.get(t);
            t > 0 && o.print(","), o.print("(");
            for (var a = i.getCoordinates(), c = 0; c < a.length; c++) c > 0 && o.print(","), o.print(a[c].x + " " + a[c].y);
            o.println(")");
          }
          o.print(")  ");
        } }, { key: "addAll", value: function(o) {
          for (var t = o.iterator(); t.hasNext(); ) this.add(t.next());
        } }, { key: "findEdgeIndex", value: function(o) {
          for (var t = 0; t < this._edges.size(); t++) if (this._edges.get(t).equals(o)) return t;
          return -1;
        } }, { key: "iterator", value: function() {
          return this._edges.iterator();
        } }, { key: "getEdges", value: function() {
          return this._edges;
        } }, { key: "get", value: function(o) {
          return this._edges.get(o);
        } }, { key: "findEqualEdge", value: function(o) {
          var t = new Bl(o.getCoordinates());
          return this._ocaMap.get(t);
        } }, { key: "add", value: function(o) {
          this._edges.add(o);
          var t = new Bl(o.getCoordinates());
          this._ocaMap.put(t, o);
        } }], [{ key: "constructor_", value: function() {
          this._edges = new pe(), this._ocaMap = new Gi();
        } }]);
      }(), Ul = function() {
        return h(function o() {
          u(this, o);
        }, [{ key: "processIntersections", value: function(o, t, i, a) {
        } }, { key: "isDone", value: function() {
        } }]);
      }(), _p = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isTrivialIntersection", value: function(t, i, a, c) {
          if (t === a && this._li.getIntersectionNum() === 1) {
            if (o.isAdjacentSegments(i, c)) return !0;
            if (t.isClosed()) {
              var g = t.size() - 1;
              if (i === 0 && c === g || c === 0 && i === g) return !0;
            }
          }
          return !1;
        } }, { key: "getProperIntersectionPoint", value: function() {
          return this._properIntersectionPoint;
        } }, { key: "hasProperInteriorIntersection", value: function() {
          return this._hasProperInterior;
        } }, { key: "getLineIntersector", value: function() {
          return this._li;
        } }, { key: "hasProperIntersection", value: function() {
          return this._hasProper;
        } }, { key: "processIntersections", value: function(t, i, a, c) {
          if (t === a && i === c) return null;
          this.numTests++;
          var g = t.getCoordinates()[i], p = t.getCoordinates()[i + 1], _ = a.getCoordinates()[c], w = a.getCoordinates()[c + 1];
          this._li.computeIntersection(g, p, _, w), this._li.hasIntersection() && (this.numIntersections++, this._li.isInteriorIntersection() && (this.numInteriorIntersections++, this._hasInterior = !0), this.isTrivialIntersection(t, i, a, c) || (this._hasIntersection = !0, t.addIntersections(this._li, i, 0), a.addIntersections(this._li, c, 1), this._li.isProper() && (this.numProperIntersections++, this._hasProper = !0, this._hasProperInterior = !0)));
        } }, { key: "hasIntersection", value: function() {
          return this._hasIntersection;
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "hasInteriorIntersection", value: function() {
          return this._hasInterior;
        } }, { key: "interfaces_", get: function() {
          return [Ul];
        } }], [{ key: "constructor_", value: function() {
          this._hasIntersection = !1, this._hasProper = !1, this._hasProperInterior = !1, this._hasInterior = !1, this._properIntersectionPoint = null, this._li = null, this._isSelfIntersection = null, this.numIntersections = 0, this.numInteriorIntersections = 0, this.numProperIntersections = 0, this.numTests = 0;
          var t = arguments[0];
          this._li = t;
        } }, { key: "isAdjacentSegments", value: function(t, i) {
          return Math.abs(t - i) === 1;
        } }]);
      }(), Ep = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getSegmentIndex", value: function() {
          return this.segmentIndex;
        } }, { key: "getCoordinate", value: function() {
          return this.coord;
        } }, { key: "print", value: function(o) {
          o.print(this.coord), o.print(" seg # = " + this.segmentIndex), o.println(" dist = " + this.dist);
        } }, { key: "compareTo", value: function(o) {
          var t = o;
          return this.compare(t.segmentIndex, t.dist);
        } }, { key: "isEndPoint", value: function(o) {
          return this.segmentIndex === 0 && this.dist === 0 || this.segmentIndex === o;
        } }, { key: "toString", value: function() {
          return this.coord + " seg # = " + this.segmentIndex + " dist = " + this.dist;
        } }, { key: "getDistance", value: function() {
          return this.dist;
        } }, { key: "compare", value: function(o, t) {
          return this.segmentIndex < o ? -1 : this.segmentIndex > o ? 1 : this.dist < t ? -1 : this.dist > t ? 1 : 0;
        } }, { key: "interfaces_", get: function() {
          return [$];
        } }], [{ key: "constructor_", value: function() {
          this.coord = null, this.segmentIndex = null, this.dist = null;
          var o = arguments[0], t = arguments[1], i = arguments[2];
          this.coord = new V(o), this.segmentIndex = t, this.dist = i;
        } }]);
      }(), xp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "print", value: function(o) {
          o.println("Intersections:");
          for (var t = this.iterator(); t.hasNext(); )
            t.next().print(o);
        } }, { key: "iterator", value: function() {
          return this._nodeMap.values().iterator();
        } }, { key: "addSplitEdges", value: function(o) {
          this.addEndpoints();
          for (var t = this.iterator(), i = t.next(); t.hasNext(); ) {
            var a = t.next(), c = this.createSplitEdge(i, a);
            o.add(c), i = a;
          }
        } }, { key: "addEndpoints", value: function() {
          var o = this.edge.pts.length - 1;
          this.add(this.edge.pts[0], 0, 0), this.add(this.edge.pts[o], o, 0);
        } }, { key: "createSplitEdge", value: function(o, t) {
          var i = t.segmentIndex - o.segmentIndex + 2, a = this.edge.pts[t.segmentIndex], c = t.dist > 0 || !t.coord.equals2D(a);
          c || i--;
          var g = new Array(i).fill(null), p = 0;
          g[p++] = new V(o.coord);
          for (var _ = o.segmentIndex + 1; _ <= t.segmentIndex; _++) g[p++] = this.edge.pts[_];
          return c && (g[p] = t.coord), new ql(g, new zt(this.edge._label));
        } }, { key: "add", value: function(o, t, i) {
          var a = new Ep(o, t, i), c = this._nodeMap.get(a);
          return c !== null ? c : (this._nodeMap.put(a, a), a);
        } }, { key: "isIntersection", value: function(o) {
          for (var t = this.iterator(); t.hasNext(); )
            if (t.next().coord.equals(o)) return !0;
          return !1;
        } }], [{ key: "constructor_", value: function() {
          this._nodeMap = new Gi(), this.edge = null;
          var o = arguments[0];
          this.edge = o;
        } }]);
      }(), wp = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "isIntersects", value: function() {
          return !this.isDisjoint();
        } }, { key: "isCovers", value: function() {
          return (o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) || o.isTrue(this._matrix[C.INTERIOR][C.BOUNDARY]) || o.isTrue(this._matrix[C.BOUNDARY][C.INTERIOR]) || o.isTrue(this._matrix[C.BOUNDARY][C.BOUNDARY])) && this._matrix[C.EXTERIOR][C.INTERIOR] === se.FALSE && this._matrix[C.EXTERIOR][C.BOUNDARY] === se.FALSE;
        } }, { key: "isCoveredBy", value: function() {
          return (o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) || o.isTrue(this._matrix[C.INTERIOR][C.BOUNDARY]) || o.isTrue(this._matrix[C.BOUNDARY][C.INTERIOR]) || o.isTrue(this._matrix[C.BOUNDARY][C.BOUNDARY])) && this._matrix[C.INTERIOR][C.EXTERIOR] === se.FALSE && this._matrix[C.BOUNDARY][C.EXTERIOR] === se.FALSE;
        } }, { key: "set", value: function() {
          if (arguments.length === 1) for (var t = arguments[0], i = 0; i < t.length; i++) {
            var a = Math.trunc(i / 3), c = i % 3;
            this._matrix[a][c] = se.toDimensionValue(t.charAt(i));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], p = arguments[1], _ = arguments[2];
            this._matrix[g][p] = _;
          }
        } }, { key: "isContains", value: function() {
          return o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) && this._matrix[C.EXTERIOR][C.INTERIOR] === se.FALSE && this._matrix[C.EXTERIOR][C.BOUNDARY] === se.FALSE;
        } }, { key: "setAtLeast", value: function() {
          if (arguments.length === 1) for (var t = arguments[0], i = 0; i < t.length; i++) {
            var a = Math.trunc(i / 3), c = i % 3;
            this.setAtLeast(a, c, se.toDimensionValue(t.charAt(i)));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], p = arguments[1], _ = arguments[2];
            this._matrix[g][p] < _ && (this._matrix[g][p] = _);
          }
        } }, { key: "setAtLeastIfValid", value: function(t, i, a) {
          t >= 0 && i >= 0 && this.setAtLeast(t, i, a);
        } }, { key: "isWithin", value: function() {
          return o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) && this._matrix[C.INTERIOR][C.EXTERIOR] === se.FALSE && this._matrix[C.BOUNDARY][C.EXTERIOR] === se.FALSE;
        } }, { key: "isTouches", value: function(t, i) {
          return t > i ? this.isTouches(i, t) : (t === se.A && i === se.A || t === se.L && i === se.L || t === se.L && i === se.A || t === se.P && i === se.A || t === se.P && i === se.L) && this._matrix[C.INTERIOR][C.INTERIOR] === se.FALSE && (o.isTrue(this._matrix[C.INTERIOR][C.BOUNDARY]) || o.isTrue(this._matrix[C.BOUNDARY][C.INTERIOR]) || o.isTrue(this._matrix[C.BOUNDARY][C.BOUNDARY]));
        } }, { key: "isOverlaps", value: function(t, i) {
          return t === se.P && i === se.P || t === se.A && i === se.A ? o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) && o.isTrue(this._matrix[C.INTERIOR][C.EXTERIOR]) && o.isTrue(this._matrix[C.EXTERIOR][C.INTERIOR]) : t === se.L && i === se.L && this._matrix[C.INTERIOR][C.INTERIOR] === 1 && o.isTrue(this._matrix[C.INTERIOR][C.EXTERIOR]) && o.isTrue(this._matrix[C.EXTERIOR][C.INTERIOR]);
        } }, { key: "isEquals", value: function(t, i) {
          return t === i && o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) && this._matrix[C.INTERIOR][C.EXTERIOR] === se.FALSE && this._matrix[C.BOUNDARY][C.EXTERIOR] === se.FALSE && this._matrix[C.EXTERIOR][C.INTERIOR] === se.FALSE && this._matrix[C.EXTERIOR][C.BOUNDARY] === se.FALSE;
        } }, { key: "toString", value: function() {
          for (var t = new Xe("123456789"), i = 0; i < 3; i++) for (var a = 0; a < 3; a++) t.setCharAt(3 * i + a, se.toDimensionSymbol(this._matrix[i][a]));
          return t.toString();
        } }, { key: "setAll", value: function(t) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this._matrix[i][a] = t;
        } }, { key: "get", value: function(t, i) {
          return this._matrix[t][i];
        } }, { key: "transpose", value: function() {
          var t = this._matrix[1][0];
          return this._matrix[1][0] = this._matrix[0][1], this._matrix[0][1] = t, t = this._matrix[2][0], this._matrix[2][0] = this._matrix[0][2], this._matrix[0][2] = t, t = this._matrix[2][1], this._matrix[2][1] = this._matrix[1][2], this._matrix[1][2] = t, this;
        } }, { key: "matches", value: function(t) {
          if (t.length !== 9) throw new X("Should be length 9: " + t);
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) if (!o.matches(this._matrix[i][a], t.charAt(3 * i + a))) return !1;
          return !0;
        } }, { key: "add", value: function(t) {
          for (var i = 0; i < 3; i++) for (var a = 0; a < 3; a++) this.setAtLeast(i, a, t.get(i, a));
        } }, { key: "isDisjoint", value: function() {
          return this._matrix[C.INTERIOR][C.INTERIOR] === se.FALSE && this._matrix[C.INTERIOR][C.BOUNDARY] === se.FALSE && this._matrix[C.BOUNDARY][C.INTERIOR] === se.FALSE && this._matrix[C.BOUNDARY][C.BOUNDARY] === se.FALSE;
        } }, { key: "isCrosses", value: function(t, i) {
          return t === se.P && i === se.L || t === se.P && i === se.A || t === se.L && i === se.A ? o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) && o.isTrue(this._matrix[C.INTERIOR][C.EXTERIOR]) : t === se.L && i === se.P || t === se.A && i === se.P || t === se.A && i === se.L ? o.isTrue(this._matrix[C.INTERIOR][C.INTERIOR]) && o.isTrue(this._matrix[C.EXTERIOR][C.INTERIOR]) : t === se.L && i === se.L && this._matrix[C.INTERIOR][C.INTERIOR] === 0;
        } }, { key: "interfaces_", get: function() {
          return [x];
        } }], [{ key: "constructor_", value: function() {
          if (this._matrix = null, arguments.length === 0) this._matrix = Array(3).fill().map(function() {
            return Array(3);
          }), this.setAll(se.FALSE);
          else if (arguments.length === 1) {
            if (typeof arguments[0] == "string") {
              var t = arguments[0];
              o.constructor_.call(this), this.set(t);
            } else if (arguments[0] instanceof o) {
              var i = arguments[0];
              o.constructor_.call(this), this._matrix[C.INTERIOR][C.INTERIOR] = i._matrix[C.INTERIOR][C.INTERIOR], this._matrix[C.INTERIOR][C.BOUNDARY] = i._matrix[C.INTERIOR][C.BOUNDARY], this._matrix[C.INTERIOR][C.EXTERIOR] = i._matrix[C.INTERIOR][C.EXTERIOR], this._matrix[C.BOUNDARY][C.INTERIOR] = i._matrix[C.BOUNDARY][C.INTERIOR], this._matrix[C.BOUNDARY][C.BOUNDARY] = i._matrix[C.BOUNDARY][C.BOUNDARY], this._matrix[C.BOUNDARY][C.EXTERIOR] = i._matrix[C.BOUNDARY][C.EXTERIOR], this._matrix[C.EXTERIOR][C.INTERIOR] = i._matrix[C.EXTERIOR][C.INTERIOR], this._matrix[C.EXTERIOR][C.BOUNDARY] = i._matrix[C.EXTERIOR][C.BOUNDARY], this._matrix[C.EXTERIOR][C.EXTERIOR] = i._matrix[C.EXTERIOR][C.EXTERIOR];
            }
          }
        } }, { key: "matches", value: function() {
          if (Number.isInteger(arguments[0]) && typeof arguments[1] == "string") {
            var t = arguments[0], i = arguments[1];
            return i === se.SYM_DONTCARE || i === se.SYM_TRUE && (t >= 0 || t === se.TRUE) || i === se.SYM_FALSE && t === se.FALSE || i === se.SYM_P && t === se.P || i === se.SYM_L && t === se.L || i === se.SYM_A && t === se.A;
          }
          if (typeof arguments[0] == "string" && typeof arguments[1] == "string") {
            var a = arguments[1];
            return new o(arguments[0]).matches(a);
          }
        } }, { key: "isTrue", value: function(t) {
          return t >= 0 || t === se.TRUE;
        } }]);
      }(), kp = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "size", value: function() {
          return this._size;
        } }, { key: "addAll", value: function(t) {
          return t === null || t.length === 0 ? null : (this.ensureCapacity(this._size + t.length), at.arraycopy(t, 0, this._data, this._size, t.length), void (this._size += t.length));
        } }, { key: "ensureCapacity", value: function(t) {
          if (t <= this._data.length) return null;
          var i = Math.max(t, 2 * this._data.length);
          this._data = Bt.copyOf(this._data, i);
        } }, { key: "toArray", value: function() {
          var t = new Array(this._size).fill(null);
          return at.arraycopy(this._data, 0, t, 0, this._size), t;
        } }, { key: "add", value: function(t) {
          this.ensureCapacity(this._size + 1), this._data[this._size] = t, ++this._size;
        } }], [{ key: "constructor_", value: function() {
          if (this._data = null, this._size = 0, arguments.length === 0) o.constructor_.call(this, 10);
          else if (arguments.length === 1) {
            var t = arguments[0];
            this._data = new Array(t).fill(null);
          }
        } }]);
      }(), Sp = function() {
        function o() {
          u(this, o);
        }
        return h(o, [{ key: "getChainStartIndices", value: function(t) {
          var i = 0, a = new kp(Math.trunc(t.length / 2));
          a.add(i);
          do {
            var c = this.findChainEnd(t, i);
            a.add(c), i = c;
          } while (i < t.length - 1);
          return a.toArray();
        } }, { key: "findChainEnd", value: function(t, i) {
          for (var a = gt.quadrant(t[i], t[i + 1]), c = i + 1; c < t.length && gt.quadrant(t[c - 1], t[c]) === a; )
            c++;
          return c - 1;
        } }, { key: "OLDgetChainStartIndices", value: function(t) {
          var i = 0, a = new pe();
          a.add(i);
          do {
            var c = this.findChainEnd(t, i);
            a.add(c), i = c;
          } while (i < t.length - 1);
          return o.toIntArray(a);
        } }], [{ key: "toIntArray", value: function(t) {
          for (var i = new Array(t.size()).fill(null), a = 0; a < i.length; a++) i[a] = t.get(a).intValue();
          return i;
        } }]);
      }(), Mp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "getMaxX", value: function(o) {
          var t = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return t > i ? t : i;
        } }, { key: "getMinX", value: function(o) {
          var t = this.pts[this.startIndex[o]].x, i = this.pts[this.startIndex[o + 1]].x;
          return t < i ? t : i;
        } }, { key: "computeIntersectsForChain", value: function() {
          if (arguments.length === 4) {
            var o = arguments[0], t = arguments[1], i = arguments[2], a = arguments[3];
            this.computeIntersectsForChain(this.startIndex[o], this.startIndex[o + 1], t, t.startIndex[i], t.startIndex[i + 1], a);
          } else if (arguments.length === 6) {
            var c = arguments[0], g = arguments[1], p = arguments[2], _ = arguments[3], w = arguments[4], L = arguments[5];
            if (g - c == 1 && w - _ == 1) return L.addIntersections(this.e, c, p.e, _), null;
            if (!this.overlaps(c, g, p, _, w)) return null;
            var q = Math.trunc((c + g) / 2), Z = Math.trunc((_ + w) / 2);
            c < q && (_ < Z && this.computeIntersectsForChain(c, q, p, _, Z, L), Z < w && this.computeIntersectsForChain(c, q, p, Z, w, L)), q < g && (_ < Z && this.computeIntersectsForChain(q, g, p, _, Z, L), Z < w && this.computeIntersectsForChain(q, g, p, Z, w, L));
          }
        } }, { key: "overlaps", value: function(o, t, i, a, c) {
          return Le.intersects(this.pts[o], this.pts[t], i.pts[a], i.pts[c]);
        } }, { key: "getStartIndexes", value: function() {
          return this.startIndex;
        } }, { key: "computeIntersects", value: function(o, t) {
          for (var i = 0; i < this.startIndex.length - 1; i++) for (var a = 0; a < o.startIndex.length - 1; a++) this.computeIntersectsForChain(i, o, a, t);
        } }], [{ key: "constructor_", value: function() {
          this.e = null, this.pts = null, this.startIndex = null;
          var o = arguments[0];
          this.e = o, this.pts = o.getCoordinates();
          var t = new Sp();
          this.startIndex = t.getChainStartIndices(this.pts);
        } }]);
      }(), zl = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "getDepth", value: function(t, i) {
          return this._depth[t][i];
        } }, { key: "setDepth", value: function(t, i, a) {
          this._depth[t][i] = a;
        } }, { key: "isNull", value: function() {
          if (arguments.length === 0) {
            for (var t = 0; t < 2; t++) for (var i = 0; i < 3; i++) if (this._depth[t][i] !== o.NULL_VALUE) return !1;
            return !0;
          }
          if (arguments.length === 1) {
            var a = arguments[0];
            return this._depth[a][1] === o.NULL_VALUE;
          }
          if (arguments.length === 2) {
            var c = arguments[0], g = arguments[1];
            return this._depth[c][g] === o.NULL_VALUE;
          }
        } }, { key: "normalize", value: function() {
          for (var t = 0; t < 2; t++) if (!this.isNull(t)) {
            var i = this._depth[t][1];
            this._depth[t][2] < i && (i = this._depth[t][2]), i < 0 && (i = 0);
            for (var a = 1; a < 3; a++) {
              var c = 0;
              this._depth[t][a] > i && (c = 1), this._depth[t][a] = c;
            }
          }
        } }, { key: "getDelta", value: function(t) {
          return this._depth[t][te.RIGHT] - this._depth[t][te.LEFT];
        } }, { key: "getLocation", value: function(t, i) {
          return this._depth[t][i] <= 0 ? C.EXTERIOR : C.INTERIOR;
        } }, { key: "toString", value: function() {
          return "A: " + this._depth[0][1] + "," + this._depth[0][2] + " B: " + this._depth[1][1] + "," + this._depth[1][2];
        } }, { key: "add", value: function() {
          if (arguments.length === 1) for (var t = arguments[0], i = 0; i < 2; i++) for (var a = 1; a < 3; a++) {
            var c = t.getLocation(i, a);
            c !== C.EXTERIOR && c !== C.INTERIOR || (this.isNull(i, a) ? this._depth[i][a] = o.depthAtLocation(c) : this._depth[i][a] += o.depthAtLocation(c));
          }
          else if (arguments.length === 3) {
            var g = arguments[0], p = arguments[1];
            arguments[2] === C.INTERIOR && this._depth[g][p]++;
          }
        } }], [{ key: "constructor_", value: function() {
          this._depth = Array(2).fill().map(function() {
            return Array(3);
          });
          for (var t = 0; t < 2; t++) for (var i = 0; i < 3; i++) this._depth[t][i] = o.NULL_VALUE;
        } }, { key: "depthAtLocation", value: function(t) {
          return t === C.EXTERIOR ? 0 : t === C.INTERIOR ? 1 : o.NULL_VALUE;
        } }]);
      }();
      zl.NULL_VALUE = -1;
      var ql = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "getDepth", value: function() {
          return this._depth;
        } }, { key: "getCollapsedEdge", value: function() {
          var i = new Array(2).fill(null);
          return i[0] = this.pts[0], i[1] = this.pts[1], new t(i, zt.toLineLabel(this._label));
        } }, { key: "isIsolated", value: function() {
          return this._isIsolated;
        } }, { key: "getCoordinates", value: function() {
          return this.pts;
        } }, { key: "setIsolated", value: function(i) {
          this._isIsolated = i;
        } }, { key: "setName", value: function(i) {
          this._name = i;
        } }, { key: "equals", value: function(i) {
          if (!(i instanceof t)) return !1;
          var a = i;
          if (this.pts.length !== a.pts.length) return !1;
          for (var c = !0, g = !0, p = this.pts.length, _ = 0; _ < this.pts.length; _++) if (this.pts[_].equals2D(a.pts[_]) || (c = !1), this.pts[_].equals2D(a.pts[--p]) || (g = !1), !c && !g) return !1;
          return !0;
        } }, { key: "getCoordinate", value: function() {
          if (arguments.length === 0) return this.pts.length > 0 ? this.pts[0] : null;
          if (arguments.length === 1) {
            var i = arguments[0];
            return this.pts[i];
          }
        } }, { key: "print", value: function(i) {
          i.print("edge " + this._name + ": "), i.print("LINESTRING (");
          for (var a = 0; a < this.pts.length; a++) a > 0 && i.print(","), i.print(this.pts[a].x + " " + this.pts[a].y);
          i.print(")  " + this._label + " " + this._depthDelta);
        } }, { key: "computeIM", value: function(i) {
          t.updateIM(this._label, i);
        } }, { key: "isCollapsed", value: function() {
          return !!this._label.isArea() && this.pts.length === 3 && !!this.pts[0].equals(this.pts[2]);
        } }, { key: "isClosed", value: function() {
          return this.pts[0].equals(this.pts[this.pts.length - 1]);
        } }, { key: "getMaximumSegmentIndex", value: function() {
          return this.pts.length - 1;
        } }, { key: "getDepthDelta", value: function() {
          return this._depthDelta;
        } }, { key: "getNumPoints", value: function() {
          return this.pts.length;
        } }, { key: "printReverse", value: function(i) {
          i.print("edge " + this._name + ": ");
          for (var a = this.pts.length - 1; a >= 0; a--) i.print(this.pts[a] + " ");
          i.println("");
        } }, { key: "getMonotoneChainEdge", value: function() {
          return this._mce === null && (this._mce = new Mp(this)), this._mce;
        } }, { key: "getEnvelope", value: function() {
          if (this._env === null) {
            this._env = new Le();
            for (var i = 0; i < this.pts.length; i++) this._env.expandToInclude(this.pts[i]);
          }
          return this._env;
        } }, { key: "addIntersection", value: function(i, a, c, g) {
          var p = new V(i.getIntersection(g)), _ = a, w = i.getEdgeDistance(c, g), L = _ + 1;
          if (L < this.pts.length) {
            var q = this.pts[L];
            p.equals2D(q) && (_ = L, w = 0);
          }
          this.eiList.add(p, _, w);
        } }, { key: "toString", value: function() {
          var i = new Xe();
          i.append("edge " + this._name + ": "), i.append("LINESTRING (");
          for (var a = 0; a < this.pts.length; a++) a > 0 && i.append(","), i.append(this.pts[a].x + " " + this.pts[a].y);
          return i.append(")  " + this._label + " " + this._depthDelta), i.toString();
        } }, { key: "isPointwiseEqual", value: function(i) {
          if (this.pts.length !== i.pts.length) return !1;
          for (var a = 0; a < this.pts.length; a++) if (!this.pts[a].equals2D(i.pts[a])) return !1;
          return !0;
        } }, { key: "setDepthDelta", value: function(i) {
          this._depthDelta = i;
        } }, { key: "getEdgeIntersectionList", value: function() {
          return this.eiList;
        } }, { key: "addIntersections", value: function(i, a, c) {
          for (var g = 0; g < i.getIntersectionNum(); g++) this.addIntersection(i, a, c, g);
        } }], [{ key: "constructor_", value: function() {
          if (this.pts = null, this._env = null, this.eiList = new xp(this), this._name = null, this._mce = null, this._isIsolated = !0, this._depth = new zl(), this._depthDelta = 0, arguments.length === 1) {
            var i = arguments[0];
            t.constructor_.call(this, i, null);
          } else if (arguments.length === 2) {
            var a = arguments[0], c = arguments[1];
            this.pts = a, this._label = c;
          }
        } }, { key: "updateIM", value: function() {
          if (!(arguments.length === 2 && arguments[1] instanceof wp && arguments[0] instanceof zt)) return M(t, "updateIM", this).apply(this, arguments);
          var i = arguments[0], a = arguments[1];
          a.setAtLeastIfValid(i.getLocation(0, te.ON), i.getLocation(1, te.ON), 1), i.isArea() && (a.setAtLeastIfValid(i.getLocation(0, te.LEFT), i.getLocation(1, te.LEFT), 2), a.setAtLeastIfValid(i.getLocation(0, te.RIGHT), i.getLocation(1, te.RIGHT), 2));
        } }]);
      }(wl), Yl = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "setWorkingPrecisionModel", value: function(t) {
          this._workingPrecisionModel = t;
        } }, { key: "insertUniqueEdge", value: function(t) {
          var i = this._edgeList.findEqualEdge(t);
          if (i !== null) {
            var a = i.getLabel(), c = t.getLabel();
            i.isPointwiseEqual(t) || (c = new zt(t.getLabel())).flip(), a.merge(c);
            var g = o.depthDelta(c), p = i.getDepthDelta() + g;
            i.setDepthDelta(p);
          } else this._edgeList.add(t), t.setDepthDelta(o.depthDelta(t.getLabel()));
        } }, { key: "buildSubgraphs", value: function(t, i) {
          for (var a = new pe(), c = t.iterator(); c.hasNext(); ) {
            var g = c.next(), p = g.getRightmostCoordinate(), _ = new Dl(a).getDepth(p);
            g.computeDepth(_), g.findResultEdges(), a.add(g), i.add(g.getDirectedEdges(), g.getNodes());
          }
        } }, { key: "createSubgraphs", value: function(t) {
          for (var i = new pe(), a = t.getNodes().iterator(); a.hasNext(); ) {
            var c = a.next();
            if (!c.isVisited()) {
              var g = new Ci();
              g.create(c), i.add(g);
            }
          }
          return Xr.sort(i, Xr.reverseOrder()), i;
        } }, { key: "createEmptyResultGeometry", value: function() {
          return this._geomFact.createPolygon();
        } }, { key: "getNoder", value: function(t) {
          if (this._workingNoder !== null) return this._workingNoder;
          var i = new po(), a = new yr();
          return a.setPrecisionModel(t), i.setSegmentIntersector(new _p(a)), i;
        } }, { key: "buffer", value: function(t, i) {
          var a = this._workingPrecisionModel;
          a === null && (a = t.getPrecisionModel()), this._geomFact = t.getFactory();
          var c = new lp(a, this._bufParams), g = new hp(t, i, c).getCurves();
          if (g.size() <= 0) return this.createEmptyResultGeometry();
          this.computeNodedEdges(g, a), this._graph = new bl(new vp()), this._graph.addEdges(this._edgeList.getEdges());
          var p = this.createSubgraphs(this._graph), _ = new jd(this._geomFact);
          this.buildSubgraphs(p, _);
          var w = _.getPolygons();
          return w.size() <= 0 ? this.createEmptyResultGeometry() : this._geomFact.buildGeometry(w);
        } }, { key: "computeNodedEdges", value: function(t, i) {
          var a = this.getNoder(i);
          a.computeNodes(t);
          for (var c = a.getNodedSubstrings().iterator(); c.hasNext(); ) {
            var g = c.next(), p = g.getCoordinates();
            if (p.length !== 2 || !p[0].equals2D(p[1])) {
              var _ = g.getData(), w = new ql(g.getCoordinates(), new zt(_));
              this.insertUniqueEdge(w);
            }
          }
        } }, { key: "setNoder", value: function(t) {
          this._workingNoder = t;
        } }], [{ key: "constructor_", value: function() {
          this._bufParams = null, this._workingPrecisionModel = null, this._workingNoder = null, this._geomFact = null, this._graph = null, this._edgeList = new yp();
          var t = arguments[0];
          this._bufParams = t;
        } }, { key: "depthDelta", value: function(t) {
          var i = t.getLocation(0, te.LEFT), a = t.getLocation(0, te.RIGHT);
          return i === C.INTERIOR && a === C.EXTERIOR ? 1 : i === C.EXTERIOR && a === C.INTERIOR ? -1 : 0;
        } }, { key: "convertSegStrings", value: function(t) {
          for (var i = new Jr(), a = new pe(); t.hasNext(); ) {
            var c = t.next(), g = i.createLineString(c.getCoordinates());
            a.add(g);
          }
          return i.buildGeometry(a);
        } }]);
      }(), Ip = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "rescale", value: function() {
          if (Ee(arguments[0], Oe)) for (var t = arguments[0].iterator(); t.hasNext(); ) {
            var i = t.next();
            this.rescale(i.getCoordinates());
          }
          else if (arguments[0] instanceof Array) {
            for (var a = arguments[0], c = 0; c < a.length; c++) a[c].x = a[c].x / this._scaleFactor + this._offsetX, a[c].y = a[c].y / this._scaleFactor + this._offsetY;
            a.length === 2 && a[0].equals2D(a[1]) && at.out.println(a);
          }
        } }, { key: "scale", value: function() {
          if (Ee(arguments[0], Oe)) {
            for (var t = arguments[0], i = new pe(t.size()), a = t.iterator(); a.hasNext(); ) {
              var c = a.next();
              i.add(new _r(this.scale(c.getCoordinates()), c.getData()));
            }
            return i;
          }
          if (arguments[0] instanceof Array) {
            for (var g = arguments[0], p = new Array(g.length).fill(null), _ = 0; _ < g.length; _++) p[_] = new V(Math.round((g[_].x - this._offsetX) * this._scaleFactor), Math.round((g[_].y - this._offsetY) * this._scaleFactor), g[_].getZ());
            return oe.removeRepeatedPoints(p);
          }
        } }, { key: "isIntegerPrecision", value: function() {
          return this._scaleFactor === 1;
        } }, { key: "getNodedSubstrings", value: function() {
          var t = this._noder.getNodedSubstrings();
          return this._isScaled && this.rescale(t), t;
        } }, { key: "computeNodes", value: function(t) {
          var i = t;
          this._isScaled && (i = this.scale(t)), this._noder.computeNodes(i);
        } }, { key: "interfaces_", get: function() {
          return [go];
        } }], [{ key: "constructor_", value: function() {
          if (this._noder = null, this._scaleFactor = null, this._offsetX = null, this._offsetY = null, this._isScaled = !1, arguments.length === 2) {
            var t = arguments[0], i = arguments[1];
            o.constructor_.call(this, t, i, 0, 0);
          } else if (arguments.length === 4) {
            var a = arguments[0], c = arguments[1];
            this._noder = a, this._scaleFactor = c, this._isScaled = !this.isIntegerPrecision();
          }
        } }]);
      }(), Hl = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "checkEndPtVertexIntersections", value: function() {
          if (arguments.length === 0) for (var t = this._segStrings.iterator(); t.hasNext(); ) {
            var i = t.next().getCoordinates();
            this.checkEndPtVertexIntersections(i[0], this._segStrings), this.checkEndPtVertexIntersections(i[i.length - 1], this._segStrings);
          }
          else if (arguments.length === 2) {
            for (var a = arguments[0], c = arguments[1].iterator(); c.hasNext(); ) for (var g = c.next().getCoordinates(), p = 1; p < g.length - 1; p++) if (g[p].equals(a)) throw new de("found endpt/interior pt intersection at index " + p + " :pt " + a);
          }
        } }, { key: "checkInteriorIntersections", value: function() {
          if (arguments.length === 0) for (var t = this._segStrings.iterator(); t.hasNext(); ) for (var i = t.next(), a = this._segStrings.iterator(); a.hasNext(); ) {
            var c = a.next();
            this.checkInteriorIntersections(i, c);
          }
          else if (arguments.length === 2) for (var g = arguments[0], p = arguments[1], _ = g.getCoordinates(), w = p.getCoordinates(), L = 0; L < _.length - 1; L++) for (var q = 0; q < w.length - 1; q++) this.checkInteriorIntersections(g, L, p, q);
          else if (arguments.length === 4) {
            var Z = arguments[0], Q = arguments[1], le = arguments[2], fe = arguments[3];
            if (Z === le && Q === fe) return null;
            var ve = Z.getCoordinates()[Q], be = Z.getCoordinates()[Q + 1], Ie = le.getCoordinates()[fe], Fe = le.getCoordinates()[fe + 1];
            if (this._li.computeIntersection(ve, be, Ie, Fe), this._li.hasIntersection() && (this._li.isProper() || this.hasInteriorIntersection(this._li, ve, be) || this.hasInteriorIntersection(this._li, Ie, Fe))) throw new de("found non-noded intersection at " + ve + "-" + be + " and " + Ie + "-" + Fe);
          }
        } }, { key: "checkValid", value: function() {
          this.checkEndPtVertexIntersections(), this.checkInteriorIntersections(), this.checkCollapses();
        } }, { key: "checkCollapses", value: function() {
          if (arguments.length === 0) for (var t = this._segStrings.iterator(); t.hasNext(); ) {
            var i = t.next();
            this.checkCollapses(i);
          }
          else if (arguments.length === 1) for (var a = arguments[0].getCoordinates(), c = 0; c < a.length - 2; c++) this.checkCollapse(a[c], a[c + 1], a[c + 2]);
        } }, { key: "hasInteriorIntersection", value: function(t, i, a) {
          for (var c = 0; c < t.getIntersectionNum(); c++) {
            var g = t.getIntersection(c);
            if (!g.equals(i) && !g.equals(a)) return !0;
          }
          return !1;
        } }, { key: "checkCollapse", value: function(t, i, a) {
          if (t.equals(a)) throw new de("found non-noded collapse at " + o.fact.createLineString([t, i, a]));
        } }], [{ key: "constructor_", value: function() {
          this._li = new yr(), this._segStrings = null;
          var t = arguments[0];
          this._segStrings = t;
        } }]);
      }();
      Hl.fact = new Jr();
      var vo = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "intersectsScaled", value: function(t, i) {
          var a = Math.min(t.x, i.x), c = Math.max(t.x, i.x), g = Math.min(t.y, i.y), p = Math.max(t.y, i.y), _ = this._maxx < a || this._minx > c || this._maxy < g || this._miny > p;
          if (_) return !1;
          var w = this.intersectsToleranceSquare(t, i);
          return ae.isTrue(!(_ && w), "Found bad envelope test"), w;
        } }, { key: "initCorners", value: function(t) {
          var i = 0.5;
          this._minx = t.x - i, this._maxx = t.x + i, this._miny = t.y - i, this._maxy = t.y + i, this._corner[0] = new V(this._maxx, this._maxy), this._corner[1] = new V(this._minx, this._maxy), this._corner[2] = new V(this._minx, this._miny), this._corner[3] = new V(this._maxx, this._miny);
        } }, { key: "intersects", value: function(t, i) {
          return this._scaleFactor === 1 ? this.intersectsScaled(t, i) : (this.copyScaled(t, this._p0Scaled), this.copyScaled(i, this._p1Scaled), this.intersectsScaled(this._p0Scaled, this._p1Scaled));
        } }, { key: "scale", value: function(t) {
          return Math.round(t * this._scaleFactor);
        } }, { key: "getCoordinate", value: function() {
          return this._originalPt;
        } }, { key: "copyScaled", value: function(t, i) {
          i.x = this.scale(t.x), i.y = this.scale(t.y);
        } }, { key: "getSafeEnvelope", value: function() {
          if (this._safeEnv === null) {
            var t = o.SAFE_ENV_EXPANSION_FACTOR / this._scaleFactor;
            this._safeEnv = new Le(this._originalPt.x - t, this._originalPt.x + t, this._originalPt.y - t, this._originalPt.y + t);
          }
          return this._safeEnv;
        } }, { key: "intersectsPixelClosure", value: function(t, i) {
          return this._li.computeIntersection(t, i, this._corner[0], this._corner[1]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, i, this._corner[1], this._corner[2]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, i, this._corner[2], this._corner[3]), !!this._li.hasIntersection() || (this._li.computeIntersection(t, i, this._corner[3], this._corner[0]), !!this._li.hasIntersection())));
        } }, { key: "intersectsToleranceSquare", value: function(t, i) {
          var a = !1, c = !1;
          return this._li.computeIntersection(t, i, this._corner[0], this._corner[1]), !!this._li.isProper() || (this._li.computeIntersection(t, i, this._corner[1], this._corner[2]), !!this._li.isProper() || (this._li.hasIntersection() && (a = !0), this._li.computeIntersection(t, i, this._corner[2], this._corner[3]), !!this._li.isProper() || (this._li.hasIntersection() && (c = !0), this._li.computeIntersection(t, i, this._corner[3], this._corner[0]), !!this._li.isProper() || !(!a || !c) || !!t.equals(this._pt) || !!i.equals(this._pt))));
        } }, { key: "addSnappedNode", value: function(t, i) {
          var a = t.getCoordinate(i), c = t.getCoordinate(i + 1);
          return !!this.intersects(a, c) && (t.addIntersection(this.getCoordinate(), i), !0);
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._pt = null, this._originalPt = null, this._ptScaled = null, this._p0Scaled = null, this._p1Scaled = null, this._scaleFactor = null, this._minx = null, this._maxx = null, this._miny = null, this._maxy = null, this._corner = new Array(4).fill(null), this._safeEnv = null;
          var t = arguments[0], i = arguments[1], a = arguments[2];
          if (this._originalPt = t, this._pt = t, this._scaleFactor = i, this._li = a, i <= 0) throw new X("Scale factor must be non-zero");
          i !== 1 && (this._pt = new V(this.scale(t.x), this.scale(t.y)), this._p0Scaled = new V(), this._p1Scaled = new V()), this.initCorners(this._pt);
        } }]);
      }();
      vo.SAFE_ENV_EXPANSION_FACTOR = 0.75;
      var Lp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "select", value: function() {
          if (arguments.length !== 1) {
            if (arguments.length === 2) {
              var o = arguments[1];
              arguments[0].getLineSegment(o, this.selectedSegment), this.select(this.selectedSegment);
            }
          }
        } }], [{ key: "constructor_", value: function() {
          this.selectedSegment = new At();
        } }]);
      }(), Jl = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "snap", value: function() {
          if (arguments.length === 1) {
            var o = arguments[0];
            return this.snap(o, null, -1);
          }
          if (arguments.length === 3) {
            var t = arguments[0], i = arguments[1], a = arguments[2], c = t.getSafeEnvelope(), g = new Vl(t, i, a);
            return this._index.query(c, new (function() {
              return h(function p() {
                u(this, p);
              }, [{ key: "interfaces_", get: function() {
                return [Cl];
              } }, { key: "visitItem", value: function(p) {
                p.select(c, g);
              } }]);
            }())()), g.isNodeAdded();
          }
        } }], [{ key: "constructor_", value: function() {
          this._index = null;
          var o = arguments[0];
          this._index = o;
        } }]);
      }(), Vl = function(o) {
        function t() {
          var i;
          return u(this, t), i = s(this, t), t.constructor_.apply(i, arguments), i;
        }
        return y(t, o), h(t, [{ key: "isNodeAdded", value: function() {
          return this._isNodeAdded;
        } }, { key: "select", value: function() {
          if (!(arguments.length === 2 && Number.isInteger(arguments[1]) && arguments[0] instanceof Nl)) return M(t, "select", this, 1).apply(this, arguments);
          var i = arguments[1], a = arguments[0].getContext();
          if (this._parentEdge === a && (i === this._hotPixelVertexIndex || i + 1 === this._hotPixelVertexIndex)) return null;
          this._isNodeAdded |= this._hotPixel.addSnappedNode(a, i);
        } }], [{ key: "constructor_", value: function() {
          this._hotPixel = null, this._parentEdge = null, this._hotPixelVertexIndex = null, this._isNodeAdded = !1;
          var i = arguments[0], a = arguments[1], c = arguments[2];
          this._hotPixel = i, this._parentEdge = a, this._hotPixelVertexIndex = c;
        } }]);
      }(Lp);
      Jl.HotPixelSnapAction = Vl;
      var bp = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "processIntersections", value: function(o, t, i, a) {
          if (o === i && t === a) return null;
          var c = o.getCoordinates()[t], g = o.getCoordinates()[t + 1], p = i.getCoordinates()[a], _ = i.getCoordinates()[a + 1];
          if (this._li.computeIntersection(c, g, p, _), this._li.hasIntersection() && this._li.isInteriorIntersection()) {
            for (var w = 0; w < this._li.getIntersectionNum(); w++) this._interiorIntersections.add(this._li.getIntersection(w));
            o.addIntersections(this._li, t, 0), i.addIntersections(this._li, a, 1);
          }
        } }, { key: "isDone", value: function() {
          return !1;
        } }, { key: "getInteriorIntersections", value: function() {
          return this._interiorIntersections;
        } }, { key: "interfaces_", get: function() {
          return [Ul];
        } }], [{ key: "constructor_", value: function() {
          this._li = null, this._interiorIntersections = null;
          var o = arguments[0];
          this._li = o, this._interiorIntersections = new pe();
        } }]);
      }(), Ap = function() {
        return h(function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }, [{ key: "checkCorrectness", value: function(o) {
          var t = _r.getNodedSubstrings(o), i = new Hl(t);
          try {
            i.checkValid();
          } catch (a) {
            if (!(a instanceof J)) throw a;
            a.printStackTrace();
          }
        } }, { key: "getNodedSubstrings", value: function() {
          return _r.getNodedSubstrings(this._nodedSegStrings);
        } }, { key: "snapRound", value: function(o, t) {
          var i = this.findInteriorIntersections(o, t);
          this.computeIntersectionSnaps(i), this.computeVertexSnaps(o);
        } }, { key: "findInteriorIntersections", value: function(o, t) {
          var i = new bp(t);
          return this._noder.setSegmentIntersector(i), this._noder.computeNodes(o), i.getInteriorIntersections();
        } }, { key: "computeVertexSnaps", value: function() {
          if (Ee(arguments[0], Oe)) for (var o = arguments[0].iterator(); o.hasNext(); ) {
            var t = o.next();
            this.computeVertexSnaps(t);
          }
          else if (arguments[0] instanceof _r) for (var i = arguments[0], a = i.getCoordinates(), c = 0; c < a.length; c++) {
            var g = new vo(a[c], this._scaleFactor, this._li);
            this._pointSnapper.snap(g, i, c) && i.addIntersection(a[c], c);
          }
        } }, { key: "computeNodes", value: function(o) {
          this._nodedSegStrings = o, this._noder = new po(), this._pointSnapper = new Jl(this._noder.getIndex()), this.snapRound(o, this._li);
        } }, { key: "computeIntersectionSnaps", value: function(o) {
          for (var t = o.iterator(); t.hasNext(); ) {
            var i = t.next(), a = new vo(i, this._scaleFactor, this._li);
            this._pointSnapper.snap(a);
          }
        } }, { key: "interfaces_", get: function() {
          return [go];
        } }], [{ key: "constructor_", value: function() {
          this._pm = null, this._li = null, this._scaleFactor = null, this._noder = null, this._pointSnapper = null, this._nodedSegStrings = null;
          var o = arguments[0];
          this._pm = o, this._li = new yr(), this._li.setPrecisionModel(o), this._scaleFactor = o.getScale();
        } }]);
      }(), jr = function() {
        function o() {
          u(this, o), o.constructor_.apply(this, arguments);
        }
        return h(o, [{ key: "bufferFixedPrecision", value: function(t) {
          var i = new Ip(new Ap(new Mt(1)), t.getScale()), a = new Yl(this._bufParams);
          a.setWorkingPrecisionModel(t), a.setNoder(i), this._resultGeometry = a.buffer(this._argGeom, this._distance);
        } }, { key: "bufferReducedPrecision", value: function() {
          if (arguments.length === 0) {
            for (var t = o.MAX_PRECISION_DIGITS; t >= 0; t--) {
              try {
                this.bufferReducedPrecision(t);
              } catch (g) {
                if (!(g instanceof wt)) throw g;
                this._saveException = g;
              }
              if (this._resultGeometry !== null) return null;
            }
            throw this._saveException;
          }
          if (arguments.length === 1) {
            var i = arguments[0], a = o.precisionScaleFactor(this._argGeom, this._distance, i), c = new Mt(a);
            this.bufferFixedPrecision(c);
          }
        } }, { key: "computeGeometry", value: function() {
          if (this.bufferOriginalPrecision(), this._resultGeometry !== null) return null;
          var t = this._argGeom.getFactory().getPrecisionModel();
          t.getType() === Mt.FIXED ? this.bufferFixedPrecision(t) : this.bufferReducedPrecision();
        } }, { key: "setQuadrantSegments", value: function(t) {
          this._bufParams.setQuadrantSegments(t);
        } }, { key: "bufferOriginalPrecision", value: function() {
          try {
            var t = new Yl(this._bufParams);
            this._resultGeometry = t.buffer(this._argGeom, this._distance);
          } catch (i) {
            if (!(i instanceof de)) throw i;
            this._saveException = i;
          }
        } }, { key: "getResultGeometry", value: function(t) {
          return this._distance = t, this.computeGeometry(), this._resultGeometry;
        } }, { key: "setEndCapStyle", value: function(t) {
          this._bufParams.setEndCapStyle(t);
        } }], [{ key: "constructor_", value: function() {
          if (this._argGeom = null, this._distance = null, this._bufParams = new H(), this._resultGeometry = null, this._saveException = null, arguments.length === 1) {
            var t = arguments[0];
            this._argGeom = t;
          } else if (arguments.length === 2) {
            var i = arguments[0], a = arguments[1];
            this._argGeom = i, this._bufParams = a;
          }
        } }, { key: "bufferOp", value: function() {
          if (arguments.length === 2) {
            var t = arguments[1];
            return new o(arguments[0]).getResultGeometry(t);
          }
          if (arguments.length === 3) {
            if (Number.isInteger(arguments[2]) && arguments[0] instanceof he && typeof arguments[1] == "number") {
              var i = arguments[1], a = arguments[2], c = new o(arguments[0]);
              return c.setQuadrantSegments(a), c.getResultGeometry(i);
            }
            if (arguments[2] instanceof H && arguments[0] instanceof he && typeof arguments[1] == "number") {
              var g = arguments[1];
              return new o(arguments[0], arguments[2]).getResultGeometry(g);
            }
          } else if (arguments.length === 4) {
            var p = arguments[1], _ = arguments[2], w = arguments[3], L = new o(arguments[0]);
            return L.setQuadrantSegments(_), L.setEndCapStyle(w), L.getResultGeometry(p);
          }
        } }, { key: "precisionScaleFactor", value: function(t, i, a) {
          var c = t.getEnvelopeInternal(), g = mn.max(Math.abs(c.getMaxX()), Math.abs(c.getMaxY()), Math.abs(c.getMinX()), Math.abs(c.getMinY())) + 2 * (i > 0 ? i : 0), p = a - Math.trunc(Math.log(g) / Math.log(10) + 1);
          return Math.pow(10, p);
        } }]);
      }();
      jr.CAP_ROUND = H.CAP_ROUND, jr.CAP_BUTT = H.CAP_FLAT, jr.CAP_FLAT = H.CAP_FLAT, jr.CAP_SQUARE = H.CAP_SQUARE, jr.MAX_PRECISION_DIGITS = 12;
      var Cp = ["Point", "MultiPoint", "LineString", "MultiLineString", "Polygon", "MultiPolygon"], Xl = function() {
        return h(function o(t) {
          u(this, o), this.geometryFactory = t || new Jr();
        }, [{ key: "read", value: function(o) {
          var t, i = (t = typeof o == "string" ? JSON.parse(o) : o).type;
          if (!Yt[i]) throw new Error("Unknown GeoJSON type: " + t.type);
          return Cp.indexOf(i) !== -1 ? Yt[i].call(this, t.coordinates) : i === "GeometryCollection" ? Yt[i].call(this, t.geometries) : Yt[i].call(this, t);
        } }, { key: "write", value: function(o) {
          var t = o.getGeometryType();
          if (!En[t]) throw new Error("Geometry is not supported");
          return En[t].call(this, o);
        } }]);
      }(), Yt = { Feature: function(o) {
        var t = {};
        for (var i in o) t[i] = o[i];
        if (o.geometry) {
          var a = o.geometry.type;
          if (!Yt[a]) throw new Error("Unknown GeoJSON type: " + o.type);
          t.geometry = this.read(o.geometry);
        }
        return o.bbox && (t.bbox = Yt.bbox.call(this, o.bbox)), t;
      }, FeatureCollection: function(o) {
        var t = {};
        if (o.features) {
          t.features = [];
          for (var i = 0; i < o.features.length; ++i) t.features.push(this.read(o.features[i]));
        }
        return o.bbox && (t.bbox = this.parse.bbox.call(this, o.bbox)), t;
      }, coordinates: function(o) {
        for (var t = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          t.push(l(V, D(a)));
        }
        return t;
      }, bbox: function(o) {
        return this.geometryFactory.createLinearRing([new V(o[0], o[1]), new V(o[2], o[1]), new V(o[2], o[3]), new V(o[0], o[3]), new V(o[0], o[1])]);
      }, Point: function(o) {
        var t = l(V, D(o));
        return this.geometryFactory.createPoint(t);
      }, MultiPoint: function(o) {
        for (var t = [], i = 0; i < o.length; ++i) t.push(Yt.Point.call(this, o[i]));
        return this.geometryFactory.createMultiPoint(t);
      }, LineString: function(o) {
        var t = Yt.coordinates.call(this, o);
        return this.geometryFactory.createLineString(t);
      }, MultiLineString: function(o) {
        for (var t = [], i = 0; i < o.length; ++i) t.push(Yt.LineString.call(this, o[i]));
        return this.geometryFactory.createMultiLineString(t);
      }, Polygon: function(o) {
        for (var t = Yt.coordinates.call(this, o[0]), i = this.geometryFactory.createLinearRing(t), a = [], c = 1; c < o.length; ++c) {
          var g = o[c], p = Yt.coordinates.call(this, g), _ = this.geometryFactory.createLinearRing(p);
          a.push(_);
        }
        return this.geometryFactory.createPolygon(i, a);
      }, MultiPolygon: function(o) {
        for (var t = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          t.push(Yt.Polygon.call(this, a));
        }
        return this.geometryFactory.createMultiPolygon(t);
      }, GeometryCollection: function(o) {
        for (var t = [], i = 0; i < o.length; ++i) {
          var a = o[i];
          t.push(this.read(a));
        }
        return this.geometryFactory.createGeometryCollection(t);
      } }, En = { coordinate: function(o) {
        var t = [o.x, o.y];
        return o.z && t.push(o.z), o.m && t.push(o.m), t;
      }, Point: function(o) {
        return { type: "Point", coordinates: En.coordinate.call(this, o.getCoordinate()) };
      }, MultiPoint: function(o) {
        for (var t = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = En.Point.call(this, a);
          t.push(c.coordinates);
        }
        return { type: "MultiPoint", coordinates: t };
      }, LineString: function(o) {
        for (var t = [], i = o.getCoordinates(), a = 0; a < i.length; ++a) {
          var c = i[a];
          t.push(En.coordinate.call(this, c));
        }
        return { type: "LineString", coordinates: t };
      }, MultiLineString: function(o) {
        for (var t = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = En.LineString.call(this, a);
          t.push(c.coordinates);
        }
        return { type: "MultiLineString", coordinates: t };
      }, Polygon: function(o) {
        var t = [], i = En.LineString.call(this, o._shell);
        t.push(i.coordinates);
        for (var a = 0; a < o._holes.length; ++a) {
          var c = o._holes[a], g = En.LineString.call(this, c);
          t.push(g.coordinates);
        }
        return { type: "Polygon", coordinates: t };
      }, MultiPolygon: function(o) {
        for (var t = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = En.Polygon.call(this, a);
          t.push(c.coordinates);
        }
        return { type: "MultiPolygon", coordinates: t };
      }, GeometryCollection: function(o) {
        for (var t = [], i = 0; i < o._geometries.length; ++i) {
          var a = o._geometries[i], c = a.getGeometryType();
          t.push(En[c].call(this, a));
        }
        return { type: "GeometryCollection", geometries: t };
      } };
      return { BufferOp: jr, GeoJSONReader: function() {
        return h(function o(t) {
          u(this, o), this.parser = new Xl(t || new Jr());
        }, [{ key: "read", value: function(o) {
          return this.parser.read(o);
        } }]);
      }(), GeoJSONWriter: function() {
        return h(function o() {
          u(this, o), this.parser = new Xl(this.geometryFactory);
        }, [{ key: "write", value: function(o) {
          return this.parser.write(o);
        } }]);
      }() };
    });
  }(ea)), ea.exports;
}
var AE = bE();
const CE = /* @__PURE__ */ pf(AE);
function dr() {
  return new ma();
}
function ma() {
  this.reset();
}
ma.prototype = {
  constructor: ma,
  reset: function() {
    this.s = // rounded value
    this.t = 0;
  },
  add: function(n) {
    Wc(Ds, n, this.t), Wc(this, Ds.s, this.s), this.s ? this.t += Ds.t : this.s = Ds.t;
  },
  valueOf: function() {
    return this.s;
  }
};
var Ds = new ma();
function Wc(n, r, e) {
  var s = n.s = r + e, u = s - r, l = s - u;
  n.t = r - l + (e - u);
}
var Ye = 1e-6, Ce = Math.PI, Mn = Ce / 2, Zc = Ce / 4, Tn = Ce * 2, nr = 180 / Ce, Wt = Ce / 180, st = Math.abs, TE = Math.atan, gi = Math.atan2, Je = Math.cos, Ve = Math.sin, _i = Math.sqrt;
function pg(n) {
  return n > 1 ? 0 : n < -1 ? Ce : Math.acos(n);
}
function Nr(n) {
  return n > 1 ? Mn : n < -1 ? -Mn : Math.asin(n);
}
function $i() {
}
function va(n, r) {
  n && $c.hasOwnProperty(n.type) && $c[n.type](n, r);
}
var jc = {
  Feature: function(n, r) {
    va(n.geometry, r);
  },
  FeatureCollection: function(n, r) {
    for (var e = n.features, s = -1, u = e.length; ++s < u; ) va(e[s].geometry, r);
  }
}, $c = {
  Sphere: function(n, r) {
    r.sphere();
  },
  Point: function(n, r) {
    n = n.coordinates, r.point(n[0], n[1], n[2]);
  },
  MultiPoint: function(n, r) {
    for (var e = n.coordinates, s = -1, u = e.length; ++s < u; ) n = e[s], r.point(n[0], n[1], n[2]);
  },
  LineString: function(n, r) {
    eu(n.coordinates, r, 0);
  },
  MultiLineString: function(n, r) {
    for (var e = n.coordinates, s = -1, u = e.length; ++s < u; ) eu(e[s], r, 0);
  },
  Polygon: function(n, r) {
    Kc(n.coordinates, r);
  },
  MultiPolygon: function(n, r) {
    for (var e = n.coordinates, s = -1, u = e.length; ++s < u; ) Kc(e[s], r);
  },
  GeometryCollection: function(n, r) {
    for (var e = n.geometries, s = -1, u = e.length; ++s < u; ) va(e[s], r);
  }
};
function eu(n, r, e) {
  var s = -1, u = n.length - e, l;
  for (r.lineStart(); ++s < u; ) l = n[s], r.point(l[0], l[1], l[2]);
  r.lineEnd();
}
function Kc(n, r) {
  var e = -1, s = n.length;
  for (r.polygonStart(); ++e < s; ) eu(n[e], r, 1);
  r.polygonEnd();
}
function NE(n, r) {
  n && jc.hasOwnProperty(n.type) ? jc[n.type](n, r) : va(n, r);
}
dr();
dr();
function tu(n) {
  return [gi(n[1], n[0]), Nr(n[2])];
}
function di(n) {
  var r = n[0], e = n[1], s = Je(e);
  return [s * Je(r), s * Ve(r), Ve(e)];
}
function Fs(n, r) {
  return n[0] * r[0] + n[1] * r[1] + n[2] * r[2];
}
function ya(n, r) {
  return [n[1] * r[2] - n[2] * r[1], n[2] * r[0] - n[0] * r[2], n[0] * r[1] - n[1] * r[0]];
}
function Lo(n, r) {
  n[0] += r[0], n[1] += r[1], n[2] += r[2];
}
function Gs(n, r) {
  return [n[0] * r, n[1] * r, n[2] * r];
}
function nu(n) {
  var r = _i(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
  n[0] /= r, n[1] /= r, n[2] /= r;
}
dr();
function mg(n, r) {
  function e(s, u) {
    return s = n(s, u), r(s[0], s[1]);
  }
  return n.invert && r.invert && (e.invert = function(s, u) {
    return s = r.invert(s, u), s && n.invert(s[0], s[1]);
  }), e;
}
function ru(n, r) {
  return [n > Ce ? n - Tn : n < -Ce ? n + Tn : n, r];
}
ru.invert = ru;
function PE(n, r, e) {
  return (n %= Tn) ? r || e ? mg(eh(n), th(r, e)) : eh(n) : r || e ? th(r, e) : ru;
}
function Qc(n) {
  return function(r, e) {
    return r += n, [r > Ce ? r - Tn : r < -Ce ? r + Tn : r, e];
  };
}
function eh(n) {
  var r = Qc(n);
  return r.invert = Qc(-n), r;
}
function th(n, r) {
  var e = Je(n), s = Ve(n), u = Je(r), l = Ve(r);
  function f(h, m) {
    var d = Je(m), v = Je(h) * d, y = Ve(h) * d, E = Ve(m), S = E * e + v * s;
    return [
      gi(y * u - S * l, v * e - E * s),
      Nr(S * u + y * l)
    ];
  }
  return f.invert = function(h, m) {
    var d = Je(m), v = Je(h) * d, y = Ve(h) * d, E = Ve(m), S = E * u - y * l;
    return [
      gi(y * u + E * l, v * e + S * s),
      Nr(S * e - v * s)
    ];
  }, f;
}
function OE(n, r, e, s, u, l) {
  if (e) {
    var f = Je(r), h = Ve(r), m = s * e;
    u == null ? (u = r + s * Tn, l = r - m / 2) : (u = nh(f, u), l = nh(f, l), (s > 0 ? u < l : u > l) && (u += s * Tn));
    for (var d, v = u; s > 0 ? v > l : v < l; v -= m)
      d = tu([f, -h * Je(v), -h * Ve(v)]), n.point(d[0], d[1]);
  }
}
function nh(n, r) {
  r = di(r), r[0] -= n, nu(r);
  var e = pg(-r[1]);
  return ((-r[2] < 0 ? -e : e) + Tn - Ye) % Tn;
}
function vg() {
  var n = [], r;
  return {
    point: function(e, s) {
      r.push([e, s]);
    },
    lineStart: function() {
      n.push(r = []);
    },
    lineEnd: $i,
    rejoin: function() {
      n.length > 1 && n.push(n.pop().concat(n.shift()));
    },
    result: function() {
      var e = n;
      return n = [], r = null, e;
    }
  };
}
function RE(n, r, e, s, u, l) {
  var f = n[0], h = n[1], m = r[0], d = r[1], v = 0, y = 1, E = m - f, S = d - h, M;
  if (M = e - f, !(!E && M > 0)) {
    if (M /= E, E < 0) {
      if (M < v) return;
      M < y && (y = M);
    } else if (E > 0) {
      if (M > y) return;
      M > v && (v = M);
    }
    if (M = u - f, !(!E && M < 0)) {
      if (M /= E, E < 0) {
        if (M > y) return;
        M > v && (v = M);
      } else if (E > 0) {
        if (M < v) return;
        M < y && (y = M);
      }
      if (M = s - h, !(!S && M > 0)) {
        if (M /= S, S < 0) {
          if (M < v) return;
          M < y && (y = M);
        } else if (S > 0) {
          if (M > y) return;
          M > v && (v = M);
        }
        if (M = l - h, !(!S && M < 0)) {
          if (M /= S, S < 0) {
            if (M > y) return;
            M > v && (v = M);
          } else if (S > 0) {
            if (M < v) return;
            M < y && (y = M);
          }
          return v > 0 && (n[0] = f + v * E, n[1] = h + v * S), y < 1 && (r[0] = f + y * E, r[1] = h + y * S), !0;
        }
      }
    }
  }
}
function ta(n, r) {
  return st(n[0] - r[0]) < Ye && st(n[1] - r[1]) < Ye;
}
function Bs(n, r, e, s) {
  this.x = n, this.z = r, this.o = e, this.e = s, this.v = !1, this.n = this.p = null;
}
function yg(n, r, e, s, u) {
  var l = [], f = [], h, m;
  if (n.forEach(function(M) {
    if (!((D = M.length - 1) <= 0)) {
      var D, U = M[0], G = M[D], I;
      if (ta(U, G)) {
        for (u.lineStart(), h = 0; h < D; ++h) u.point((U = M[h])[0], U[1]);
        u.lineEnd();
        return;
      }
      l.push(I = new Bs(U, M, null, !0)), f.push(I.o = new Bs(U, null, I, !1)), l.push(I = new Bs(G, M, null, !1)), f.push(I.o = new Bs(G, null, I, !0));
    }
  }), !!l.length) {
    for (f.sort(r), rh(l), rh(f), h = 0, m = f.length; h < m; ++h)
      f[h].e = e = !e;
    for (var d = l[0], v, y; ; ) {
      for (var E = d, S = !0; E.v; ) if ((E = E.n) === d) return;
      v = E.z, u.lineStart();
      do {
        if (E.v = E.o.v = !0, E.e) {
          if (S)
            for (h = 0, m = v.length; h < m; ++h) u.point((y = v[h])[0], y[1]);
          else
            s(E.x, E.n.x, 1, u);
          E = E.n;
        } else {
          if (S)
            for (v = E.p.z, h = v.length - 1; h >= 0; --h) u.point((y = v[h])[0], y[1]);
          else
            s(E.x, E.p.x, -1, u);
          E = E.p;
        }
        E = E.o, v = E.z, S = !S;
      } while (!E.v);
      u.lineEnd();
    }
  }
}
function rh(n) {
  if (r = n.length) {
    for (var r, e = 0, s = n[0], u; ++e < r; )
      s.n = u = n[e], u.p = s, s = u;
    s.n = u = n[0], u.p = s;
  }
}
function _g(n, r) {
  return n < r ? -1 : n > r ? 1 : n >= r ? 0 : NaN;
}
function DE(n) {
  return n.length === 1 && (n = FE(n)), {
    left: function(r, e, s, u) {
      for (s == null && (s = 0), u == null && (u = r.length); s < u; ) {
        var l = s + u >>> 1;
        n(r[l], e) < 0 ? s = l + 1 : u = l;
      }
      return s;
    },
    right: function(r, e, s, u) {
      for (s == null && (s = 0), u == null && (u = r.length); s < u; ) {
        var l = s + u >>> 1;
        n(r[l], e) > 0 ? u = l : s = l + 1;
      }
      return s;
    }
  };
}
function FE(n) {
  return function(r, e) {
    return _g(n(r), e);
  };
}
DE(_g);
function Eg(n) {
  for (var r = n.length, e, s = -1, u = 0, l, f; ++s < r; ) u += n[s].length;
  for (l = new Array(u); --r >= 0; )
    for (f = n[r], e = f.length; --e >= 0; )
      l[--u] = f[e];
  return l;
}
var Us = 1e9, zs = -1e9;
function GE(n, r, e, s) {
  function u(d, v) {
    return n <= d && d <= e && r <= v && v <= s;
  }
  function l(d, v, y, E) {
    var S = 0, M = 0;
    if (d == null || (S = f(d, y)) !== (M = f(v, y)) || m(d, v) < 0 ^ y > 0)
      do
        E.point(S === 0 || S === 3 ? n : e, S > 1 ? s : r);
      while ((S = (S + y + 4) % 4) !== M);
    else
      E.point(v[0], v[1]);
  }
  function f(d, v) {
    return st(d[0] - n) < Ye ? v > 0 ? 0 : 3 : st(d[0] - e) < Ye ? v > 0 ? 2 : 1 : st(d[1] - r) < Ye ? v > 0 ? 1 : 0 : v > 0 ? 3 : 2;
  }
  function h(d, v) {
    return m(d.x, v.x);
  }
  function m(d, v) {
    var y = f(d, 1), E = f(v, 1);
    return y !== E ? y - E : y === 0 ? v[1] - d[1] : y === 1 ? d[0] - v[0] : y === 2 ? d[1] - v[1] : v[0] - d[0];
  }
  return function(d) {
    var v = d, y = vg(), E, S, M, D, U, G, I, H, J, X, W, $ = {
      point: x,
      lineStart: T,
      lineEnd: F,
      polygonStart: b,
      polygonEnd: A
    };
    function x(N, R) {
      u(N, R) && v.point(N, R);
    }
    function k() {
      for (var N = 0, R = 0, Y = S.length; R < Y; ++R)
        for (var z = S[R], j = 1, K = z.length, ne = z[0], de, ce, ae = ne[0], ue = ne[1]; j < K; ++j)
          de = ae, ce = ue, ne = z[j], ae = ne[0], ue = ne[1], ce <= s ? ue > s && (ae - de) * (s - ce) > (ue - ce) * (n - de) && ++N : ue <= s && (ae - de) * (s - ce) < (ue - ce) * (n - de) && --N;
      return N;
    }
    function b() {
      v = y, E = [], S = [], W = !0;
    }
    function A() {
      var N = k(), R = W && N, Y = (E = Eg(E)).length;
      (R || Y) && (d.polygonStart(), R && (d.lineStart(), l(null, null, 1, d), d.lineEnd()), Y && yg(E, h, N, l, d), d.polygonEnd()), v = d, E = S = M = null;
    }
    function T() {
      $.point = P, S && S.push(M = []), X = !0, J = !1, I = H = NaN;
    }
    function F() {
      E && (P(D, U), G && J && y.rejoin(), E.push(y.result())), $.point = x, J && v.lineEnd();
    }
    function P(N, R) {
      var Y = u(N, R);
      if (S && M.push([N, R]), X)
        D = N, U = R, G = Y, X = !1, Y && (v.lineStart(), v.point(N, R));
      else if (Y && J) v.point(N, R);
      else {
        var z = [I = Math.max(zs, Math.min(Us, I)), H = Math.max(zs, Math.min(Us, H))], j = [N = Math.max(zs, Math.min(Us, N)), R = Math.max(zs, Math.min(Us, R))];
        RE(z, j, n, r, e, s) ? (J || (v.lineStart(), v.point(z[0], z[1])), v.point(j[0], j[1]), Y || v.lineEnd(), W = !1) : Y && (v.lineStart(), v.point(N, R), W = !1);
      }
      I = N, H = R, J = Y;
    }
    return $;
  };
}
var bo = dr();
function BE(n, r) {
  var e = r[0], s = r[1], u = [Ve(e), -Je(e), 0], l = 0, f = 0;
  bo.reset();
  for (var h = 0, m = n.length; h < m; ++h)
    if (v = (d = n[h]).length)
      for (var d, v, y = d[v - 1], E = y[0], S = y[1] / 2 + Zc, M = Ve(S), D = Je(S), U = 0; U < v; ++U, E = I, M = J, D = X, y = G) {
        var G = d[U], I = G[0], H = G[1] / 2 + Zc, J = Ve(H), X = Je(H), W = I - E, $ = W >= 0 ? 1 : -1, x = $ * W, k = x > Ce, b = M * J;
        if (bo.add(gi(b * $ * Ve(x), D * X + b * Je(x))), l += k ? W + $ * Tn : W, k ^ E >= e ^ I >= e) {
          var A = ya(di(y), di(G));
          nu(A);
          var T = ya(u, A);
          nu(T);
          var F = (k ^ W >= 0 ? -1 : 1) * Nr(T[2]);
          (s > F || s === F && (A[0] || A[1])) && (f += k ^ W >= 0 ? 1 : -1);
        }
      }
  return (l < -1e-6 || l < Ye && bo < -1e-6) ^ f & 1;
}
dr();
function ih(n) {
  return n;
}
dr();
dr();
var pi = 1 / 0, _a = pi, gs = -pi, Ea = gs, sh = {
  point: UE,
  lineStart: $i,
  lineEnd: $i,
  polygonStart: $i,
  polygonEnd: $i,
  result: function() {
    var n = [[pi, _a], [gs, Ea]];
    return gs = Ea = -(_a = pi = 1 / 0), n;
  }
};
function UE(n, r) {
  n < pi && (pi = n), n > gs && (gs = n), r < _a && (_a = r), r > Ea && (Ea = r);
}
dr();
function xg(n, r, e, s) {
  return function(u, l) {
    var f = r(l), h = u.invert(s[0], s[1]), m = vg(), d = r(m), v = !1, y, E, S, M = {
      point: D,
      lineStart: G,
      lineEnd: I,
      polygonStart: function() {
        M.point = H, M.lineStart = J, M.lineEnd = X, E = [], y = [];
      },
      polygonEnd: function() {
        M.point = D, M.lineStart = G, M.lineEnd = I, E = Eg(E);
        var W = BE(y, h);
        E.length ? (v || (l.polygonStart(), v = !0), yg(E, qE, W, e, l)) : W && (v || (l.polygonStart(), v = !0), l.lineStart(), e(null, null, 1, l), l.lineEnd()), v && (l.polygonEnd(), v = !1), E = y = null;
      },
      sphere: function() {
        l.polygonStart(), l.lineStart(), e(null, null, 1, l), l.lineEnd(), l.polygonEnd();
      }
    };
    function D(W, $) {
      var x = u(W, $);
      n(W = x[0], $ = x[1]) && l.point(W, $);
    }
    function U(W, $) {
      var x = u(W, $);
      f.point(x[0], x[1]);
    }
    function G() {
      M.point = U, f.lineStart();
    }
    function I() {
      M.point = D, f.lineEnd();
    }
    function H(W, $) {
      S.push([W, $]);
      var x = u(W, $);
      d.point(x[0], x[1]);
    }
    function J() {
      d.lineStart(), S = [];
    }
    function X() {
      H(S[0][0], S[0][1]), d.lineEnd();
      var W = d.clean(), $ = m.result(), x, k = $.length, b, A, T;
      if (S.pop(), y.push(S), S = null, !!k) {
        if (W & 1) {
          if (A = $[0], (b = A.length - 1) > 0) {
            for (v || (l.polygonStart(), v = !0), l.lineStart(), x = 0; x < b; ++x) l.point((T = A[x])[0], T[1]);
            l.lineEnd();
          }
          return;
        }
        k > 1 && W & 2 && $.push($.pop().concat($.shift())), E.push($.filter(zE));
      }
    }
    return M;
  };
}
function zE(n) {
  return n.length > 1;
}
function qE(n, r) {
  return ((n = n.x)[0] < 0 ? n[1] - Mn - Ye : Mn - n[1]) - ((r = r.x)[0] < 0 ? r[1] - Mn - Ye : Mn - r[1]);
}
const ah = xg(
  function() {
    return !0;
  },
  YE,
  JE,
  [-Ce, -Mn]
);
function YE(n) {
  var r = NaN, e = NaN, s = NaN, u;
  return {
    lineStart: function() {
      n.lineStart(), u = 1;
    },
    point: function(l, f) {
      var h = l > 0 ? Ce : -Ce, m = st(l - r);
      st(m - Ce) < Ye ? (n.point(r, e = (e + f) / 2 > 0 ? Mn : -Mn), n.point(s, e), n.lineEnd(), n.lineStart(), n.point(h, e), n.point(l, e), u = 0) : s !== h && m >= Ce && (st(r - s) < Ye && (r -= s * Ye), st(l - h) < Ye && (l -= h * Ye), e = HE(r, e, l, f), n.point(s, e), n.lineEnd(), n.lineStart(), n.point(h, e), u = 0), n.point(r = l, e = f), s = h;
    },
    lineEnd: function() {
      n.lineEnd(), r = e = NaN;
    },
    clean: function() {
      return 2 - u;
    }
  };
}
function HE(n, r, e, s) {
  var u, l, f = Ve(n - e);
  return st(f) > Ye ? TE((Ve(r) * (l = Je(s)) * Ve(e) - Ve(s) * (u = Je(r)) * Ve(n)) / (u * l * f)) : (r + s) / 2;
}
function JE(n, r, e, s) {
  var u;
  if (n == null)
    u = e * Mn, s.point(-Ce, u), s.point(0, u), s.point(Ce, u), s.point(Ce, 0), s.point(Ce, -u), s.point(0, -u), s.point(-Ce, -u), s.point(-Ce, 0), s.point(-Ce, u);
  else if (st(n[0] - r[0]) > Ye) {
    var l = n[0] < r[0] ? Ce : -Ce;
    u = e * l / 2, s.point(-l, u), s.point(0, u), s.point(l, u);
  } else
    s.point(r[0], r[1]);
}
function VE(n, r) {
  var e = Je(n), s = e > 0, u = st(e) > Ye;
  function l(v, y, E, S) {
    OE(S, n, r, E, v, y);
  }
  function f(v, y) {
    return Je(v) * Je(y) > e;
  }
  function h(v) {
    var y, E, S, M, D;
    return {
      lineStart: function() {
        M = S = !1, D = 1;
      },
      point: function(U, G) {
        var I = [U, G], H, J = f(U, G), X = s ? J ? 0 : d(U, G) : J ? d(U + (U < 0 ? Ce : -Ce), G) : 0;
        if (!y && (M = S = J) && v.lineStart(), J !== S && (H = m(y, I), (!H || ta(y, H) || ta(I, H)) && (I[0] += Ye, I[1] += Ye, J = f(I[0], I[1]))), J !== S)
          D = 0, J ? (v.lineStart(), H = m(I, y), v.point(H[0], H[1])) : (H = m(y, I), v.point(H[0], H[1]), v.lineEnd()), y = H;
        else if (u && y && s ^ J) {
          var W;
          !(X & E) && (W = m(I, y, !0)) && (D = 0, s ? (v.lineStart(), v.point(W[0][0], W[0][1]), v.point(W[1][0], W[1][1]), v.lineEnd()) : (v.point(W[1][0], W[1][1]), v.lineEnd(), v.lineStart(), v.point(W[0][0], W[0][1])));
        }
        J && (!y || !ta(y, I)) && v.point(I[0], I[1]), y = I, S = J, E = X;
      },
      lineEnd: function() {
        S && v.lineEnd(), y = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return D | (M && S) << 1;
      }
    };
  }
  function m(v, y, E) {
    var S = di(v), M = di(y), D = [1, 0, 0], U = ya(S, M), G = Fs(U, U), I = U[0], H = G - I * I;
    if (!H) return !E && v;
    var J = e * G / H, X = -e * I / H, W = ya(D, U), $ = Gs(D, J), x = Gs(U, X);
    Lo($, x);
    var k = W, b = Fs($, k), A = Fs(k, k), T = b * b - A * (Fs($, $) - 1);
    if (!(T < 0)) {
      var F = _i(T), P = Gs(k, (-b - F) / A);
      if (Lo(P, $), P = tu(P), !E) return P;
      var N = v[0], R = y[0], Y = v[1], z = y[1], j;
      R < N && (j = N, N = R, R = j);
      var K = R - N, ne = st(K - Ce) < Ye, de = ne || K < Ye;
      if (!ne && z < Y && (j = Y, Y = z, z = j), de ? ne ? Y + z > 0 ^ P[1] < (st(P[0] - N) < Ye ? Y : z) : Y <= P[1] && P[1] <= z : K > Ce ^ (N <= P[0] && P[0] <= R)) {
        var ce = Gs(k, (-b + F) / A);
        return Lo(ce, $), [P, tu(ce)];
      }
    }
  }
  function d(v, y) {
    var E = s ? n : Ce - n, S = 0;
    return v < -E ? S |= 1 : v > E && (S |= 2), y < -E ? S |= 4 : y > E && (S |= 8), S;
  }
  return xg(f, h, l, s ? [0, -n] : [-Ce, n - Ce]);
}
function wg(n) {
  return function(r) {
    var e = new iu();
    for (var s in n) e[s] = n[s];
    return e.stream = r, e;
  };
}
function iu() {
}
iu.prototype = {
  constructor: iu,
  point: function(n, r) {
    this.stream.point(n, r);
  },
  sphere: function() {
    this.stream.sphere();
  },
  lineStart: function() {
    this.stream.lineStart();
  },
  lineEnd: function() {
    this.stream.lineEnd();
  },
  polygonStart: function() {
    this.stream.polygonStart();
  },
  polygonEnd: function() {
    this.stream.polygonEnd();
  }
};
function kg(n, r, e) {
  var s = r[1][0] - r[0][0], u = r[1][1] - r[0][1], l = n.clipExtent && n.clipExtent();
  n.scale(150).translate([0, 0]), l != null && n.clipExtent(null), NE(e, n.stream(sh));
  var f = sh.result(), h = Math.min(s / (f[1][0] - f[0][0]), u / (f[1][1] - f[0][1])), m = +r[0][0] + (s - h * (f[1][0] + f[0][0])) / 2, d = +r[0][1] + (u - h * (f[1][1] + f[0][1])) / 2;
  return l != null && n.clipExtent(l), n.scale(h * 150).translate([m, d]);
}
function XE(n, r, e) {
  return kg(n, [[0, 0], r], e);
}
var oh = 16, WE = Je(30 * Wt);
function uh(n, r) {
  return +r ? jE(n, r) : ZE(n);
}
function ZE(n) {
  return wg({
    point: function(r, e) {
      r = n(r, e), this.stream.point(r[0], r[1]);
    }
  });
}
function jE(n, r) {
  function e(s, u, l, f, h, m, d, v, y, E, S, M, D, U) {
    var G = d - s, I = v - u, H = G * G + I * I;
    if (H > 4 * r && D--) {
      var J = f + E, X = h + S, W = m + M, $ = _i(J * J + X * X + W * W), x = Nr(W /= $), k = st(st(W) - 1) < Ye || st(l - y) < Ye ? (l + y) / 2 : gi(X, J), b = n(k, x), A = b[0], T = b[1], F = A - s, P = T - u, N = I * F - G * P;
      (N * N / H > r || st((G * F + I * P) / H - 0.5) > 0.3 || f * E + h * S + m * M < WE) && (e(s, u, l, f, h, m, A, T, k, J /= $, X /= $, W, D, U), U.point(A, T), e(A, T, k, J, X, W, d, v, y, E, S, M, D, U));
    }
  }
  return function(s) {
    var u, l, f, h, m, d, v, y, E, S, M, D, U = {
      point: G,
      lineStart: I,
      lineEnd: J,
      polygonStart: function() {
        s.polygonStart(), U.lineStart = X;
      },
      polygonEnd: function() {
        s.polygonEnd(), U.lineStart = I;
      }
    };
    function G(x, k) {
      x = n(x, k), s.point(x[0], x[1]);
    }
    function I() {
      y = NaN, U.point = H, s.lineStart();
    }
    function H(x, k) {
      var b = di([x, k]), A = n(x, k);
      e(y, E, v, S, M, D, y = A[0], E = A[1], v = x, S = b[0], M = b[1], D = b[2], oh, s), s.point(y, E);
    }
    function J() {
      U.point = G, s.lineEnd();
    }
    function X() {
      I(), U.point = W, U.lineEnd = $;
    }
    function W(x, k) {
      H(u = x, k), l = y, f = E, h = S, m = M, d = D, U.point = H;
    }
    function $() {
      e(y, E, v, S, M, D, l, f, u, h, m, d, oh, s), U.lineEnd = J, J();
    }
    return U;
  };
}
var $E = wg({
  point: function(n, r) {
    this.stream.point(n * Wt, r * Wt);
  }
});
function KE(n) {
  return QE(function() {
    return n;
  })();
}
function QE(n) {
  var r, e = 150, s = 480, u = 250, l, f, h = 0, m = 0, d = 0, v = 0, y = 0, E, S, M = null, D = ah, U = null, G, I, H, J = ih, X = 0.5, W = uh(A, X), $, x;
  function k(P) {
    return P = S(P[0] * Wt, P[1] * Wt), [P[0] * e + l, f - P[1] * e];
  }
  function b(P) {
    return P = S.invert((P[0] - l) / e, (f - P[1]) / e), P && [P[0] * nr, P[1] * nr];
  }
  function A(P, N) {
    return P = r(P, N), [P[0] * e + l, f - P[1] * e];
  }
  k.stream = function(P) {
    return $ && x === P ? $ : $ = $E(D(E, W(J(x = P))));
  }, k.clipAngle = function(P) {
    return arguments.length ? (D = +P ? VE(M = P * Wt, 6 * Wt) : (M = null, ah), F()) : M * nr;
  }, k.clipExtent = function(P) {
    return arguments.length ? (J = P == null ? (U = G = I = H = null, ih) : GE(U = +P[0][0], G = +P[0][1], I = +P[1][0], H = +P[1][1]), F()) : U == null ? null : [[U, G], [I, H]];
  }, k.scale = function(P) {
    return arguments.length ? (e = +P, T()) : e;
  }, k.translate = function(P) {
    return arguments.length ? (s = +P[0], u = +P[1], T()) : [s, u];
  }, k.center = function(P) {
    return arguments.length ? (h = P[0] % 360 * Wt, m = P[1] % 360 * Wt, T()) : [h * nr, m * nr];
  }, k.rotate = function(P) {
    return arguments.length ? (d = P[0] % 360 * Wt, v = P[1] % 360 * Wt, y = P.length > 2 ? P[2] % 360 * Wt : 0, T()) : [d * nr, v * nr, y * nr];
  }, k.precision = function(P) {
    return arguments.length ? (W = uh(A, X = P * P), F()) : _i(X);
  }, k.fitExtent = function(P, N) {
    return kg(k, P, N);
  }, k.fitSize = function(P, N) {
    return XE(k, P, N);
  };
  function T() {
    S = mg(E = PE(d, v, y), r);
    var P = r(h, m);
    return l = s - P[0] * e, f = u + P[1] * e, F();
  }
  function F() {
    return $ = x = null, k;
  }
  return function() {
    return r = n.apply(this, arguments), k.invert = r.invert && b, T();
  };
}
function Sg(n) {
  return function(r, e) {
    var s = Je(r), u = Je(e), l = n(s * u);
    return [
      l * u * Ve(r),
      l * Ve(e)
    ];
  };
}
function Mg(n) {
  return function(r, e) {
    var s = _i(r * r + e * e), u = n(s), l = Ve(u), f = Je(u);
    return [
      gi(r * l, s * f),
      Nr(s && e * l / s)
    ];
  };
}
var ex = Sg(function(n) {
  return _i(2 / (1 + n));
});
ex.invert = Mg(function(n) {
  return 2 * Nr(n / 2);
});
var Ig = Sg(function(n) {
  return (n = pg(n)) && n / Ve(n);
});
Ig.invert = Mg(function(n) {
  return n;
});
function tx() {
  return KE(Ig).scale(79.4188).clipAngle(180 - 1e-3);
}
function lh(n, r) {
  return [n, r];
}
lh.invert = lh;
var { BufferOp: nx, GeoJSONReader: rx, GeoJSONWriter: ix } = CE;
function sx(n, r, e) {
  e = e || {};
  var s = e.units || "kilometers", u = e.steps || 8;
  if (!n) throw new Error("geojson is required");
  if (typeof e != "object") throw new Error("options must be an object");
  if (typeof u != "number") throw new Error("steps must be an number");
  if (r === void 0) throw new Error("radius is required");
  if (u <= 0) throw new Error("steps must be greater than 0");
  var l = [];
  switch (n.type) {
    case "GeometryCollection":
      return gr(n, function(f) {
        var h = na(f, r, s, u);
        h && l.push(h);
      }), $e(l);
    case "FeatureCollection":
      return An(n, function(f) {
        var h = na(f, r, s, u);
        h && An(h, function(m) {
          m && l.push(m);
        });
      }), $e(l);
  }
  return na(n, r, s, u);
}
function na(n, r, e, s) {
  var u = n.properties || {}, l = n.type === "Feature" ? n.geometry : n;
  if (l.type === "GeometryCollection") {
    var f = [];
    return gr(n, function(D) {
      var U = na(D, r, e, s);
      U && f.push(U);
    }), $e(f);
  }
  var h = ax(l), m = {
    type: l.type,
    coordinates: bg(l.coordinates, h)
  }, d = new rx(), v = d.read(m), y = Mu(Iu(r, e), "meters"), E = nx.bufferOp(v, y, s), S = new ix();
  if (E = S.write(E), !Lg(E.coordinates)) {
    var M = {
      type: E.type,
      coordinates: Ag(E.coordinates, h)
    };
    return cn(M, u);
  }
}
function Lg(n) {
  return Array.isArray(n[0]) ? Lg(n[0]) : isNaN(n[0]);
}
function bg(n, r) {
  return typeof n[0] != "object" ? r(n) : n.map(function(e) {
    return bg(e, r);
  });
}
function Ag(n, r) {
  return typeof n[0] != "object" ? r.invert(n) : n.map(function(e) {
    return Ag(e, r);
  });
}
function ax(n) {
  var r = IE(n).geometry.coordinates, e = [-r[0], -r[1]];
  return tx().rotate(e).scale(rt);
}
var ox = sx;
const ux = (n, r) => (Es(n, (e) => {
  const s = e.coordinate;
  s[0] += r.lng, s[1] += r.lat;
}), n), lx = (n, r) => {
  const s = n.getBounds(), u = bf(s[0], s[1], { units: "meters" });
  return ox(r, u * 1e-4, { units: "meters" }) || null;
}, Cg = (n, r) => {
  const e = hn(n.getGeoJson());
  return ux(e, r), e;
}, QS = (n, r) => {
  const e = Cg(n, r);
  n.shapeProperties.center && (n.shapeProperties.center[0] += r.lng, n.shapeProperties.center[1] += r.lat), n.updateGeoJsonGeometry(e.geometry);
}, Tg = (n) => Object.fromEntries(
  Object.entries(n.getShapeProperties()).filter(([, r]) => r !== null).map(([r, e]) => [`_gm_shape_${r}`, e])
), cx = (n, r) => {
  try {
    Es(n, (e) => {
      if (!Tr(e.coordinate, r))
        throw new Error("stop");
    });
  } catch {
    return !1;
  }
  return !0;
}, ch = (n, r) => {
  const e = cx(n, r);
  return dg(n) ? e : e && Qo(n) ? !xE(
    n,
    r,
    { ignoreSelfIntersections: !0 }
  ).features.length : !1;
}, Xu = (n) => {
  const r = n.getGeoJson();
  return typeof r != "object" ? null : cg(r);
}, hx = (n) => {
  if (Qo(n)) {
    const r = kE(n, { mutate: !1 });
    if (r.type === "Feature" && Qo(r))
      return {
        ...r,
        properties: n.properties || {}
      };
  }
  return dg(n) ? n : null;
}, fx = ["circle", "ellipse", "rectangle"];
class xa {
  constructor(r) {
    O(this, "gm");
    O(this, "id", "no-id");
    O(this, "parent", null);
    O(this, "shape");
    O(this, "markers");
    O(this, "shapeProperties", { center: null });
    O(this, "source");
    O(this, "orders", this.getEmptyOrders());
    this.gm = r.gm, this.id = r.id, this.source = r.source, this.parent = r.parent, this.markers = /* @__PURE__ */ new Map(), this.shape = r.geoJsonShapeFeature.properties.shape, this.order = this.getFreeOrder(), this.addGeoJson(r.geoJsonShapeFeature);
  }
  get order() {
    const r = this.source.id;
    if (this.orders[r] !== null)
      return this.orders[r];
    throw new Error(`Null order for feature id: ${this.id}`);
  }
  set order(r) {
    const e = this.source.id;
    this.orders[e] = r;
  }
  getEmptyOrders() {
    return Object.fromEntries(
      ji(ie).map((r) => [r, null])
    );
  }
  get temporary() {
    return this.source.id === ie.temporary;
  }
  get sourceName() {
    return this.source.id;
  }
  getFreeOrder() {
    return this.getSourceGeoJson().features.length;
  }
  getGeoJson(r = !1) {
    if (!this.isFeatureAvailable())
      throw new Error(`Feature not found: "${this.id}"`);
    this.fixOrder();
    const e = this.getSourceGeoJson().features[this.order] || null;
    if (this.id !== (e == null ? void 0 : e.id))
      throw re.error(`Feature not found: ${this.id} !== ${e == null ? void 0 : e.id}`, e, this.getSourceGeoJson()), new Error("Feature not found");
    return r ? {
      ...e,
      properties: {
        ...e.properties,
        ...Tg(this)
      }
    } : e;
  }
  getShapeProperty(r) {
    return this.shapeProperties[r];
  }
  getShapeProperties() {
    return this.shapeProperties;
  }
  setShapeProperty(r, e) {
    this.shapeProperties[r] = e;
  }
  getSourceGeoJson() {
    return this.source.getGeoJson();
  }
  addGeoJson(r) {
    if (!this.isFeatureAvailable())
      throw new Error(`Feature not found: "${this.id}"`);
    const e = this.getSourceGeoJson();
    e.features[this.order] && re.error("FeatureData.addGeoJson, not an empty feature", this.id, e);
    const s = {
      ...r,
      id: this.id,
      properties: {
        ...r.properties,
        [Lr]: this.id
      }
    };
    e.features[this.order] = s, this.updateGeoJsonCenter(s), this.gm.features.updateSourceData({
      diff: { add: [s] },
      sourceName: this.sourceName
    });
  }
  removeGeoJson() {
    if (!this.isFeatureAvailable())
      throw new Error(`Feature not found: "${this.id}"`);
    this.fixOrder();
    const r = this.getSourceGeoJson();
    delete r.features[this.order], this.gm.features.updateSourceData({
      diff: { remove: [this.id] },
      sourceName: this.sourceName
    }), this.order = null;
  }
  removeMarkers() {
    this.markers.forEach((r) => {
      r.instance instanceof ku ? r.instance.remove() : this.gm.features.delete(r.instance);
    }), this.markers = /* @__PURE__ */ new Map();
  }
  updateGeoJsonGeometry(r) {
    if (!this.isFeatureAvailable())
      throw new Error(`Feature not found: "${this.id}"`);
    this.fixOrder();
    const e = this.getSourceGeoJson();
    e.features[this.order].geometry = r;
    const s = {
      update: [
        e.features[this.order]
      ]
    };
    this.gm.features.updateSourceData({
      diff: s,
      sourceName: this.sourceName
    });
  }
  updateGeoJsonProperties(r) {
    if (!this.isFeatureAvailable())
      throw new Error(`Feature not found: "${this.id}"`);
    this.fixOrder();
    const e = this.getSourceGeoJson();
    e.features[this.order].properties = {
      ...e.features[this.order].properties,
      ...r
    };
    const s = {
      update: [
        e.features[this.order]
      ]
    };
    this.gm.features.updateSourceData({
      diff: s,
      sourceName: this.sourceName
    });
  }
  updateGeoJsonCenter(r) {
    if (this.shape === "circle") {
      const e = lg(xf(r));
      this.setShapeProperty("center", e);
    } else this.shape === "ellipse" && r.properties._gm_shape_center && (this.setShapeProperty("center", r.properties._gm_shape_center), this.setShapeProperty("xSemiAxis", r.properties._gm_shape_xSemiAxis), this.setShapeProperty("ySemiAxis", r.properties._gm_shape_ySemiAxis), this.setShapeProperty("angle", r.properties._gm_shape_angle), delete r.properties._gm_shape_center, delete r.properties._gm_shape_xSemiAxis, delete r.properties._gm_shape_ySemiAxis, delete r.properties._gm_shape_angle);
  }
  convertToPolygon() {
    return this.isConvertableToPolygon() ? (this.shape = "polygon", this.shapeProperties.center = null, delete this.shapeProperties.angle, delete this.shapeProperties.xSemiAxis, delete this.shapeProperties.ySemiAxis, !0) : !1;
  }
  isConvertableToPolygon() {
    return fx.includes(this.shape);
  }
  fixOrder() {
    if (!this.isFeatureAvailable())
      throw new Error(`Feature not found: "${this.id}"`);
  }
  isFeatureAvailable() {
    return this.order !== null;
  }
  changeSource({ sourceName: r, atomic: e }) {
    e ? this.gm.features.withAtomicSourcesUpdate(
      () => this.actualChangeSource({ sourceName: r, atomic: e })
    ) : this.actualChangeSource({ sourceName: r, atomic: e });
  }
  actualChangeSource({ sourceName: r, atomic: e }) {
    if (this.source.id === r) {
      re.error(`FeatureData.changeSource: feature "${this.id}" already has the source "${r}"`);
      return;
    }
    const s = this.gm.features.sources[r];
    if (!s) {
      re.error(`FeatureData.changeSource: missing source "${r}"`);
      return;
    }
    const u = this.getGeoJson();
    this.removeGeoJson(), this.source = s, this.order = this.getFreeOrder(), this.addGeoJson(u), this.markers.forEach((l) => {
      l.instance instanceof xa && l.instance.changeSource({ sourceName: r, atomic: e });
    });
  }
  delete() {
    this.removeGeoJson(), this.removeMarkers(), this.id = "no-id", this.orders = this.getEmptyOrders();
  }
}
const eM = (n) => $t(n) && n.action === "before_create", tM = (n) => $t(n) && n.action === "before_update", gx = ["on", "off"], Ng = (n) => $t(n) && n.type === "control" && gx.includes(n.action), $t = (n) => !!(n && typeof n == "object" && "level" in n && "type" in n && "action" in n), Wu = (n) => $t(n) && Ir(n.action, um), me = "gm";
class Za {
  constructor(r) {
    O(this, "gm");
    this.gm = r;
  }
  trackExclusiveModes(r) {
    if (r.action !== "mode_start")
      return;
    const {
      sectionName: e,
      modeName: s
    } = this.getControlIds(r) || {}, u = this.getControl(r);
    u != null && u.settings.exclusive && this.gm.control.eachControlWithOptions((l) => {
      const f = l.control.type, h = l.control.targetMode;
      f === e && h === s || l.controlOptions.active && l.control.settings.exclusive && this.gm.options.disableMode(f, h);
    });
  }
  trackRelatedModes(r) {
    Wu(r) && this.gm.control.eachControlWithOptions((e) => {
      var u;
      const s = e.control;
      (u = s.settings.enabledBy) != null && u.includes(r.mode) && (r.action === "mode_start" ? this.gm.options.enableMode(s.type, s.targetMode) : r.action === "mode_end" ? this.gm.options.disableMode(s.type, s.targetMode) : re.error("Unknown mode action", r.action));
    });
  }
  getControl(r) {
    const { modeName: e, sectionName: s } = this.getControlIds(r) || {};
    return e && s ? this.gm.control.getControl({ actionType: s, modeName: e }) : null;
  }
  getControlOptions(r) {
    const { modeName: e, sectionName: s } = this.getControlIds(r) || {};
    return e && s ? this.gm.options.getControlOptions({ actionType: s, modeName: e }) : null;
  }
  getControlIds(r) {
    let e = null, s = null;
    return r.action === "mode_start" ? (e = r.type, s = r.mode) : Ng(r) && (e = r.section, s = r.target), e && s ? { sectionName: e, modeName: s } : null;
  }
}
class dx {
  isInstanceAvailable() {
    return this.sourceInstance ? !0 : (re.error("Source instance is not available"), !1);
  }
}
const px = [
  "intersection_violation",
  "containment_violation"
], ja = (n) => $t(n) && n.type === "helper", mx = (n) => ja(n) && n.mode === "geofencing" && Ir(n.action, px), vx = ["draw", "edit", "helper"];
class Zu {
  constructor(r) {
    O(this, "gm");
    O(this, "options", []);
    O(this, "actions", []);
    O(this, "flags", {
      featureCreateAllowed: !0,
      featureUpdateAllowed: !0
    });
    O(this, "internalMapEventHandlers", {
      [`${me}:helper`]: this.handleHelperEvent.bind(this)
    });
    this.gm = r;
  }
  startAction() {
    this.gm.events.bus.attachEvents(this.internalMapEventHandlers), this.gm.events.bus.attachEvents(this.mapEventHandlers), this.onStartAction();
  }
  endAction() {
    this.onEndAction(), this.gm.events.bus.detachEvents(this.mapEventHandlers), this.gm.events.bus.detachEvents(this.internalMapEventHandlers);
  }
  get snappingHelper() {
    return this.gm.actionInstances.helper__snapping || null;
  }
  getOptionValue(r) {
    const e = this.options.find((s) => s.name === r);
    if (!e)
      throw new Error(`Option ${r} not found`);
    if (e.type === "toggle")
      return e.value;
    if (e.type === "select")
      return e.value.value;
    throw new Error(`Unknown option type: ${JSON.stringify(e)}`);
  }
  applyOptionValue(r, e) {
    const s = this.options.find((u) => u.name === r);
    if (!s) {
      re.error("Option not found", r, e);
      return;
    }
    if (s.type === "toggle" && typeof e == "boolean")
      s.value = e;
    else if (s.type === "select") {
      const u = s.choices.find((l) => l.value === e);
      u && (s.value = u);
    } else
      re.error("Can't apply option value", r, e, s);
  }
  handleHelperEvent(r) {
    return mx(r) ? this.handleGeofencingViolationEvent(r) : { next: !0 };
  }
  handleGeofencingViolationEvent(r) {
    return r.actionType === "draw" ? this.flags.featureCreateAllowed = !1 : r.actionType === "edit" && (this.flags.featureUpdateAllowed = !1), { next: !0 };
  }
  fireBeforeFeatureCreate({ geoJsonFeatures: r, forceMode: e = void 0 }) {
    this.flags.featureCreateAllowed = !0;
    const s = {
      level: "system",
      type: this.actionType,
      mode: e || this.mode,
      action: "before_create",
      geoJsonFeatures: r
    };
    this.gm.events.fire(`${me}:${this.actionType}`, s);
  }
  fireBeforeFeatureUpdate({ features: r, geoJsonFeatures: e, forceMode: s = void 0 }) {
    this.flags.featureUpdateAllowed = !0;
    const u = {
      level: "system",
      type: this.actionType,
      mode: s || this.mode,
      action: "before_update",
      features: r,
      geoJsonFeatures: e
    };
    this.gm.events.fire(`${me}:${this.actionType}`, u);
  }
}
const ju = (n) => $t(n) && n.type === "draw", nM = (n) => $t(n) && n.type === "draw" && "variant" in n && n.variant === null, Pg = (n) => $t(n) && n.type === "draw" && "variant" in n && n.variant === "line_drawer", rM = (n) => $t(n) && n.type === "draw" && "variant" in n && n.variant === "freehand_drawer", as = [
  // shapes
  "marker",
  "ellipse",
  "circle",
  "circle_marker",
  "text_marker",
  "line",
  "rectangle",
  "polygon"
], yx = [
  "freehand",
  "custom_shape"
], Og = [
  ...as,
  ...yx
];
class Wn extends Zu {
  constructor() {
    super(...arguments);
    O(this, "actionType", "draw");
    O(this, "shape", null);
    O(this, "featureData", null);
  }
  saveFeature() {
    if (this.featureData) {
      const e = this.featureData.getGeoJson();
      this.removeTmpFeature(), this.gm.features.createFeature({
        sourceName: ie.main,
        shapeGeoJson: e
      });
    } else
      re.error("BaseDraw.saveFeature: no featureData to save");
  }
  removeTmpFeature() {
    this.featureData && (this.featureData.temporary || re.error("Not a temporary feature to remove", this.featureData), this.gm.features.delete(this.featureData), this.featureData = null);
  }
  fireMarkerPointerStartEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, s = {
      level: "system",
      variant: null,
      type: "draw",
      mode: this.shape,
      action: "start",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: this.featureData
    };
    this.gm.events.fire(`${me}:draw`, s);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker || !this.shape)
      return;
    const e = this.gm.markerPointer.marker, s = {
      level: "system",
      variant: null,
      type: "draw",
      mode: this.shape,
      action: "update",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: this.featureData
    };
    this.gm.events.fire(`${me}:draw`, s);
  }
  fireMarkerPointerFinishEvent() {
    if (!this.shape)
      return;
    const e = {
      level: "system",
      variant: null,
      type: "draw",
      mode: this.shape,
      action: "finish"
    };
    this.gm.events.fire(`${me}:draw`, e);
  }
  forwardLineDrawerEvent(e) {
    if (!Pg(e) || !this.shape)
      return { next: !0 };
    if (e.action === "start" || e.action === "update") {
      const s = {
        level: "system",
        type: "draw",
        mode: this.shape,
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${me}:draw`, s);
    } else if (e.action === "finish" || e.action === "cancel") {
      const s = {
        level: "system",
        type: "draw",
        mode: this.shape,
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${me}:draw`, s);
    }
    return { next: !0 };
  }
}
const Rg = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchmove",
  "touchcancel"
], _x = [
  "load"
];
function iM(n) {
  return Rg.includes(n);
}
function sM(n) {
  return _x.includes(n);
}
const Ex = (n) => !!(n && typeof n == "object" && "once" in n && typeof n.once == "function"), Qe = (n, r = { warning: !1 }) => {
  if (!n)
    return r.warning && re.warn("Empty event", n), !1;
  const e = typeof n == "object" && "lngLat" in n && "point" in n && "type" in n && "originalEvent" in n && typeof n.type == "string" && Rg.includes(n.type);
  return !e && r.warning && re.warn("Not a pointer event", n), e;
}, ie = {
  // order matters here, layers order will be aligned according to these items
  // standby: `${gmPrefix}_standby`, // used in pro version only
  main: `${me}_main`,
  temporary: `${me}_temporary`
}, Lr = "_gmid";
class xx {
  constructor(r) {
    O(this, "gm");
    O(this, "featureCounter", 0);
    O(this, "featureStore", /* @__PURE__ */ new Map());
    O(this, "featureStoreAllowedSources", [ie.main, ie.temporary]);
    O(this, "autoUpdatesEnabled", !0);
    O(this, "diffUpdatesEnabled", !0);
    O(this, "sources");
    O(this, "defaultSourceName", ie.main);
    O(this, "updateStorage");
    O(this, "delayedSourceUpdateMethods");
    O(this, "layers");
    this.gm = r, this.sources = Object.fromEntries(
      ji(ie).map((e) => [e, null])
    ), this.updateStorage = Object.fromEntries(
      ji(ie).map((e) => [
        e,
        { add: [], remove: [], update: [] }
      ])
    ), this.delayedSourceUpdateMethods = Object.fromEntries(
      ji(ie).map((e) => [
        e,
        {
          throttled: this.getDelayedSourceUpdateMethod({
            sourceName: e,
            type: "throttled"
          }),
          debounced: this.getDelayedSourceUpdateMethod({
            sourceName: e,
            type: "debounced"
          })
        }
      ])
    ), this.layers = [];
  }
  init() {
    if (Object.values(this.sources).some((r) => r !== null)) {
      re.warn("features.init(): features are already initialized");
      return;
    }
    ft(this.sources).forEach((r) => {
      this.sources[r] = this.createSource(r);
    }), this.layers = this.createLayers();
  }
  get forEach() {
    return this.filteredForEach((r) => !r.temporary);
  }
  get tmpForEach() {
    return this.filteredForEach((r) => r.temporary);
  }
  getNewFeatureId() {
    return this.featureCounter += 1, `feature-${this.featureCounter}`;
  }
  filteredForEach(r) {
    return (e) => {
      this.featureStore.forEach((s, u, l) => {
        r(s) && e(s, u, l);
      });
    };
  }
  has(r, e) {
    const s = this.featureStore.get(e);
    return !!s && (s == null ? void 0 : s.source) === this.sources[r];
  }
  get(r, e) {
    const s = this.featureStore.get(e) || null;
    return (s == null ? void 0 : s.source) === this.sources[r] ? s : null;
  }
  add(r) {
    if (this.featureStore.has(r.id)) {
      re.error(`features.add: feature with the id "${r.id}" already exists`);
      return;
    }
    this.featureStoreAllowedSources.includes(r.source.id) && this.featureStore.set(r.id, r);
  }
  setDefaultSourceName(r) {
    this.defaultSourceName = r;
  }
  getDelayedSourceUpdateMethod({ sourceName: r, type: e }) {
    if (e === "throttled")
      return ug(
        () => this.updateSourceByStorage(r),
        2 * this.gm.options.settings.throttlingDelay,
        { leading: !1, trailing: !0 }
      );
    if (e === "debounced")
      return Bu(
        () => this.updateSourceByStorage(r),
        2 * this.gm.options.settings.throttlingDelay,
        { leading: !0, trailing: !1 }
      );
    throw new Error("Features: getDelayedSourceUpdateMethod: invalid type");
  }
  updateSourceByStorage(r) {
    const e = this.sources[r], s = this.updateStorage[r], u = Object.values(s).some((l) => l.length);
    e && u && (e.updateData(s), this.resetDiffStorage(r));
  }
  resetDiffStorage(r) {
    const e = this.updateStorage[r];
    e.add = [], e.remove = [], e.update = [];
  }
  withAtomicSourcesUpdate(r) {
    try {
      return this.autoUpdatesEnabled = !1, r();
    } finally {
      ji(ie).forEach((e) => {
        this.updateSourceByStorage(e);
      }), this.autoUpdatesEnabled = !0;
    }
  }
  updateSourceData({ diff: r, sourceName: e }) {
    this.gm.features.diffUpdatesEnabled ? this.updateSourceDataWithDiff({ diff: r, sourceName: e }) : this.setSourceData({ diff: r, sourceName: e });
  }
  updateSourceDataWithDiff({ diff: r, sourceName: e }) {
    const s = this.updateStorage[e];
    r.add && (s.add = s.add.concat(r.add)), r.update && (s.update = s.update.concat(r.update)), r.remove && (s.remove = s.remove.concat(r.remove)), this.gm.features.autoUpdatesEnabled && (this.delayedSourceUpdateMethods[e].throttled(), this.delayedSourceUpdateMethods[e].debounced());
  }
  setSourceData({ sourceName: r }) {
    re.warn("Review this Features.setSourceData() method");
    const e = this.getSourceGeoJson(r);
    e.features = e.features.filter((s) => !!s), this.setSourceGeoJson({ geoJson: e, sourceName: r });
  }
  createSource(r) {
    const e = this.gm.mapAdapter.addSource(
      r,
      {
        type: "FeatureCollection",
        features: []
      }
    );
    if (e)
      return e;
    throw new Error(`Features: failed to create the source: "${r}"`);
  }
  delete(r) {
    let e;
    r instanceof xa ? e = r : e = this.featureStore.get(r) || null, e ? (e.removeMarkers(), e.removeGeoJson(), this.featureStore.delete(e.id)) : re.error(`features.delete: feature "${r}" not found`);
  }
  getFeatureByMouseEvent({ event: r, sourceNames: e }) {
    if (!Qe(r, { warning: !0 }))
      return null;
    const s = [r.point.x, r.point.y], u = this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: s,
      sourceNames: e
    });
    return u.length ? u[0] : null;
  }
  getFeaturesByGeoJsonBounds({ geoJson: r, sourceNames: e }) {
    const s = Hu(r), u = this.gm.mapAdapter.coordBoundsToScreenBounds(s);
    return this.getFeaturesByScreenBounds({ bounds: u, sourceNames: e });
  }
  getFeaturesByScreenBounds({ bounds: r, sourceNames: e }) {
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: r,
      sourceNames: e
    });
  }
  createFeature({ featureId: r, shapeGeoJson: e, parent: s, sourceName: u, imported: l }) {
    const f = this.sources[u];
    if (!f)
      return re.error("Features.createFeature Missing source for feature creation"), null;
    const h = r || e.properties[Lr] || this.getNewFeatureId();
    if (this.featureStore.get(h))
      return re.error(
        `Features.createFeature: feature with the id "${h}" already exists`,
        this.featureStore.get(h)
      ), null;
    const m = new xa({
      gm: this.gm,
      id: h,
      parent: s || null,
      source: f,
      geoJsonShapeFeature: hn(e)
    });
    return this.add(m), !m.temporary && !l && this.fireFeatureCreatedEvent(m), this.featureCounter += 1, m;
  }
  importGeoJson(r) {
    const e = "features" in r ? r.features : [r], s = {
      stats: {
        total: 0,
        success: 0,
        failed: 0
      },
      addedFeatures: []
    };
    return e.forEach((u) => {
      let l = null;
      s.stats.total += 1;
      const f = hx(u);
      f && (l = this.importGeoJsonFeature(f)), l ? (s.addedFeatures.push(l), s.stats.success += 1) : s.stats.failed += 1;
    }), s;
  }
  importGeoJsonFeature(r) {
    const e = this.defaultSourceName, s = this.getFeatureShapeByGeoJson(r);
    if (!s)
      return re.error("features.addGeoJsonFeature: unknown shape", s), null;
    const u = r.id || `${e}-feature-${this.featureCounter}`;
    return this.createFeature({
      featureId: r.id,
      shapeGeoJson: {
        ...r,
        properties: {
          ...r.properties,
          [Lr]: u,
          shape: s
        }
      },
      sourceName: e,
      imported: !0
    });
  }
  getAll() {
    return this.exportGeoJson();
  }
  exportGeoJson({ allowedShapes: r } = { allowedShapes: void 0 }) {
    return this.asGeoJsonFeatureCollection({
      sourceNames: [
        ie.main
        // SOURCES.standby, // used in pro version only
      ],
      shapeTypes: r || [...as]
    });
  }
  getSourceGeoJson(r) {
    const e = this.sources[r];
    if (!e)
      throw new Error(`getSourceGeoJson: missing source "${r}"`);
    return e.getGeoJson();
  }
  setSourceGeoJson({ geoJson: r, sourceName: e }) {
    const s = this.sources[e];
    if (!s)
      throw new Error(`setSourceGeoJson: missing source "${e}"`);
    s.setGeoJson(r);
  }
  asGeoJsonFeatureCollection({ shapeTypes: r, sourceNames: e }) {
    const s = {
      type: "FeatureCollection",
      features: []
    };
    return e.forEach((u) => {
      const l = this.sources[u];
      l && l.getGeoJson().features.filter((h) => !!h).forEach((h) => {
        if (r === void 0 || r.includes(h.properties.shape)) {
          const m = this.featureStore.has(h.properties._gmid ?? "") ? Tg(this.featureStore.get(h.properties._gmid)) : {};
          s.features.push({
            ...h,
            properties: {
              ...h.properties,
              ...m
            }
          });
        }
      });
    }), s;
  }
  convertSourceToGm(r) {
    const e = [], s = r.getGeoJson(), u = "features" in s ? s.features : [s];
    return this.gm.mapAdapter.getSource(r.id).remove({ removeLayers: !1 }), u.forEach((f) => {
      const h = this.addGeoJsonFeature({
        shapeGeoJson: f,
        defaultSource: !0
      });
      h && e.push(h);
    }), e;
  }
  addGeoJsonFeature({ shapeGeoJson: r, sourceName: e, defaultSource: s }) {
    let u;
    if (s ? (u = this.defaultSourceName, e && re.warn("features.addGeoJsonFeature: default source is set, sourceName is ignored")) : u = e || null, !u)
      return re.error("features.addGeoJsonFeature: missing sourceName"), null;
    const l = this.getFeatureShapeByGeoJson(r);
    return l ? this.createFeature({
      featureId: r.id,
      shapeGeoJson: {
        ...r,
        properties: { ...r.properties, shape: l }
      },
      sourceName: u
    }) : (re.error("features.addGeoJsonFeature: unknown shape", l), null);
  }
  createLayers() {
    const r = [];
    return ft(this.sources).forEach((e) => {
      ft(this.gm.options.layerStyles).forEach((s) => {
        this.gm.options.layerStyles[s][e].forEach((l) => {
          const f = this.createGenericLayer({
            layerId: `${e}-${s}__${l.type}-layer`,
            partialStyle: l,
            shape: s,
            sourceName: e
          });
          f && r.push(f);
        });
      });
    }), r;
  }
  createGenericLayer({ layerId: r, sourceName: e, partialStyle: s, shape: u }) {
    const l = {
      ...s,
      id: r,
      source: e,
      filter: [
        "in",
        ["get", "shape"],
        ["literal", [u]]
      ]
    };
    return this.gm.mapAdapter.addLayer(l);
  }
  getFeatureShapeByGeoJson(r) {
    const e = {
      Point: "marker",
      LineString: "line",
      Polygon: "polygon",
      MultiPolygon: "polygon"
    }, s = r.properties;
    return s != null && s.shape && as.includes(s == null ? void 0 : s.shape) ? s == null ? void 0 : s.shape : e[r.geometry.type] || null;
  }
  createMarkerFeature({ parentFeature: r, coordinate: e, type: s, sourceName: u }) {
    return this.createFeature({
      sourceName: u,
      parent: r,
      shapeGeoJson: {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: e
        },
        properties: {
          shape: `${s}_marker`
        }
      }
    });
  }
  updateMarkerFeaturePosition(r, e) {
    r.updateGeoJsonGeometry({
      type: "Point",
      coordinates: e
    });
  }
  fireFeatureCreatedEvent(r) {
    if (Ir(r.shape, as)) {
      const e = {
        level: "system",
        type: "draw",
        mode: r.shape,
        action: "feature_created",
        featureData: r
      };
      this.gm.events.fire(`${me}:draw`, e);
    }
  }
}
const hh = (n) => [
  {
    type: "circle",
    paint: {
      "circle-radius": n.circleMarkerRadius,
      "circle-color": n.fillColor,
      "circle-opacity": n.fillOpacity,
      "circle-stroke-color": n.lineColor,
      "circle-stroke-width": n.lineWidth,
      "circle-stroke-opacity": n.lineOpacity
    }
  }
], qs = (n) => [
  {
    type: "circle",
    paint: {
      "circle-radius": 7,
      "circle-color": "#ffffff",
      "circle-opacity": 1,
      "circle-stroke-color": n.lineColor,
      "circle-stroke-width": 2,
      "circle-stroke-opacity": 1
    }
  }
], fh = (n) => [
  {
    type: "line",
    paint: {
      "line-color": n.lineColor,
      "line-opacity": n.lineOpacity,
      "line-width": n.lineWidth
    }
  }
], gh = () => [
  {
    type: "symbol",
    layout: {
      "icon-image": "default-marker",
      "icon-size": 0.18,
      "icon-allow-overlap": !0,
      "icon-anchor": "bottom"
    }
  }
], rr = (n) => [
  {
    type: "fill",
    paint: {
      "fill-color": n.fillColor,
      "fill-opacity": n.fillOpacity
    }
  },
  {
    type: "line",
    paint: {
      "line-color": n.lineColor,
      "line-opacity": n.lineOpacity,
      "line-width": n.lineWidth
    }
  }
], dh = (n) => [
  {
    type: "circle",
    paint: {
      "circle-radius": 6,
      "circle-color": "#ffffff",
      "circle-opacity": 0.6,
      "circle-stroke-color": n.lineColor,
      "circle-stroke-width": 2,
      "circle-stroke-opacity": 1
    }
  }
], ph = () => [
  {
    type: "line",
    paint: {
      "line-color": "#00979f",
      "line-width": 1.8,
      "line-dasharray": [2, 1]
    }
  }
], mh = () => [
  {
    type: "symbol",
    layout: {
      "text-field": ["get", "text"],
      "text-justify": "center"
    },
    paint: {
      "text-color": "black",
      "text-halo-color": "#fff",
      "text-halo-width": 2
    }
  }
], nt = {
  [ie.main]: {
    lineColor: "#278cda",
    lineOpacity: 0.8,
    lineWidth: 3,
    fillColor: "#4fb3ff",
    fillOpacity: 0.4,
    circleMarkerRadius: 10
  },
  [ie.temporary]: {
    lineColor: "#ff5600",
    lineOpacity: 0.8,
    lineWidth: 3,
    fillColor: "#4fb3ff",
    fillOpacity: 0.4,
    circleMarkerRadius: 10
  }
  // used in pro version only
  // [SOURCES.standby]: {
  //   lineColor: '#787878',
  //   lineOpacity: 0.8,
  //   lineWidth: 3,
  //   fillColor: '#a5a5a5',
  //   fillOpacity: 0.4,
  //   circleMarkerRadius: 10,
  // },
}, wx = {
  // order matters here, layers order will be aligned according to these items
  polygon: {
    [ie.main]: rr(nt[ie.main]),
    [ie.temporary]: rr(nt[ie.temporary])
    // [SOURCES.standby]: getPolygonStyles(sourceStyles[SOURCES.standby]),
  },
  ellipse: {
    [ie.main]: rr(nt[ie.main]),
    [ie.temporary]: rr(nt[ie.temporary])
    // [SOURCES.standby]: getPolygonStyles(sourceStyles[SOURCES.standby]),
  },
  rectangle: {
    [ie.main]: rr(nt[ie.main]),
    [ie.temporary]: rr(nt[ie.temporary])
    // [SOURCES.standby]: getPolygonStyles(sourceStyles[SOURCES.standby]),
  },
  circle: {
    [ie.main]: rr(nt[ie.main]),
    [ie.temporary]: rr(nt[ie.temporary])
    // [SOURCES.standby]: getPolygonStyles(sourceStyles[SOURCES.standby]),
  },
  circle_marker: {
    [ie.main]: hh(nt[ie.main]),
    [ie.temporary]: hh(nt[ie.temporary])
    // [SOURCES.standby]: getCircleMarkerStyles(sourceStyles[SOURCES.standby]),
  },
  line: {
    [ie.main]: fh(nt[ie.main]),
    [ie.temporary]: fh(nt[ie.temporary])
    // [SOURCES.standby]: getLineStyles(sourceStyles[SOURCES.standby]),
  },
  marker: {
    [ie.temporary]: gh(),
    [ie.main]: gh()
    // [SOURCES.standby]: getMarkerStyles(),
  },
  text_marker: {
    [ie.main]: mh(),
    [ie.temporary]: mh()
    // [SOURCES.standby]: getTextMarkerStyles(),
  },
  dom_marker: {
    // not a geojson source, layers aren't required
    [ie.main]: [],
    [ie.temporary]: []
    // [SOURCES.standby]: [],
  },
  center_marker: {
    [ie.main]: qs(nt[ie.main]),
    [ie.temporary]: qs(nt[ie.temporary])
    // [SOURCES.standby]: getControlMarkerStyles(sourceStyles[SOURCES.standby]),
  },
  vertex_marker: {
    [ie.main]: qs(nt[ie.main]),
    [ie.temporary]: qs(nt[ie.temporary])
    // [SOURCES.standby]: getControlMarkerStyles(sourceStyles[SOURCES.standby]),
  },
  edge_marker: {
    [ie.main]: dh(nt[ie.main]),
    [ie.temporary]: dh(nt[ie.temporary])
    // [SOURCES.standby]: getSecondaryControlMarkerStyles(sourceStyles[SOURCES.standby]),
  },
  snap_guide: {
    // todo: check which sources can't display snap guides (and other shapes) and remove layers
    [ie.main]: ph(),
    [ie.temporary]: ph()
    // [SOURCES.standby]: getSnapGuideStyles(),
  }
}, kx = {
  settings: {
    throttlingDelay: 10,
    controlsPosition: "top-left"
  },
  layerStyles: wx,
  controls: {
    draw: {
      marker: {
        title: "Marker",
        icon: dt.marker,
        uiEnabled: !0,
        active: !1
      },
      circle_marker: {
        title: "Circle Marker",
        icon: dt.circle_marker,
        uiEnabled: !0,
        active: !1
      },
      text_marker: {
        title: "Text Marker",
        icon: dt.text_marker,
        uiEnabled: !0,
        active: !1
      },
      circle: {
        title: "Circle",
        icon: dt.circle,
        uiEnabled: !0,
        active: !1
      },
      ellipse: {
        title: "Ellipse",
        icon: dt.ellipse,
        uiEnabled: !0,
        active: !1
      },
      line: {
        title: "Line",
        icon: dt.line,
        uiEnabled: !0,
        active: !1
      },
      rectangle: {
        title: "Rectangle",
        icon: dt.rectangle,
        uiEnabled: !0,
        active: !1
      },
      polygon: {
        title: "Polygon",
        icon: dt.polygon,
        uiEnabled: !0,
        active: !1
      }
    },
    edit: {
      drag: {
        title: "Drag",
        icon: dt.drag,
        uiEnabled: !0,
        active: !1
      },
      change: {
        title: "Change",
        icon: dt.change,
        uiEnabled: !0,
        active: !1
      },
      rotate: {
        title: "Rotate",
        icon: dt.rotate,
        uiEnabled: !0,
        active: !1
      },
      cut: {
        title: "Cut",
        icon: dt.cut,
        uiEnabled: !0,
        active: !1
      },
      delete: {
        title: "Delete",
        icon: dt.delete,
        uiEnabled: !0,
        active: !1
      }
    },
    helper: {
      shape_markers: {
        title: "Shape markers",
        icon: null,
        uiEnabled: !0,
        active: !1
      },
      snapping: {
        title: "Snapping",
        icon: dt.snapping,
        uiEnabled: !0,
        active: !1
      },
      zoom_to_features: {
        title: "Zoom to features",
        icon: dt.zoom_to_features,
        uiEnabled: !0,
        active: !1
      }
    }
  }
}, Dg = () => hn(kx), vh = !1;
var $u = Array.isArray, Sx = Array.prototype.indexOf, Ku = Array.from, Fg = Object.defineProperty, os = Object.getOwnPropertyDescriptor, Gg = Object.getOwnPropertyDescriptors, Mx = Object.prototype, Ix = Array.prototype, Qu = Object.getPrototypeOf;
const ai = () => {
};
function Lx(n) {
  return n();
}
function su(n) {
  for (var r = 0; r < n.length; r++)
    n[r]();
}
const fn = 2, Bg = 4, $a = 8, el = 16, Zn = 32, ks = 64, wa = 128, Zt = 256, ka = 512, _t = 1024, jn = 2048, Ei = 4096, qn = 8192, Ka = 16384, bx = 32768, tl = 65536, Ax = 1 << 19, Ug = 1 << 20, br = Symbol("$state"), Cx = Symbol("");
let Sa = [];
function Tx() {
  var n = Sa;
  Sa = [], su(n);
}
function Nx(n) {
  Sa.length === 0 && queueMicrotask(Tx), Sa.push(n);
}
function zg(n) {
  return n === this.v;
}
function qg(n, r) {
  return n != n ? r == r : n !== r || n !== null && typeof n == "object" || typeof n == "function";
}
function Yg(n) {
  return !qg(n, this.v);
}
function Px(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ox() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Rx(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dx() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fx() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Gx() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Bx() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ux() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ss = !1, zx = !1;
function qx() {
  Ss = !0;
}
const nl = 1, rl = 2, Hg = 4, Yx = 8, Hx = 16, Jx = 1, Vx = 2, It = Symbol();
function il(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let Re = null;
function yh(n) {
  Re = n;
}
function sl(n) {
  return (
    /** @type {T} */
    Xx().get(n)
  );
}
function xi(n, r = !1, e) {
  Re = {
    p: Re,
    c: null,
    e: null,
    m: !1,
    s: n,
    x: null,
    l: null
  }, Ss && !r && (Re.l = {
    s: null,
    u: null,
    r1: [],
    r2: Pt(!1)
  });
}
function wi(n) {
  const r = Re;
  if (r !== null) {
    const f = r.e;
    if (f !== null) {
      var e = Ge, s = De;
      r.e = null;
      try {
        for (var u = 0; u < f.length; u++) {
          var l = f[u];
          hr(l.effect), cr(l.reaction), io(l.fn);
        }
      } finally {
        hr(e), cr(s);
      }
    }
    Re = r.p, r.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Qa() {
  return !Ss || Re !== null && Re.l === null;
}
function Xx(n) {
  return Re === null && il(), Re.c ?? (Re.c = new Map(Wx(Re) || void 0));
}
function Wx(n) {
  let r = n.p;
  for (; r !== null; ) {
    const e = r.c;
    if (e !== null)
      return e;
    r = r.p;
  }
  return null;
}
function Pt(n, r) {
  var e = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: zg,
    rv: 0,
    wv: 0
  };
  return e;
}
function Jg(n) {
  return /* @__PURE__ */ Vg(Pt(n));
}
// @__NO_SIDE_EFFECTS__
function al(n, r = !1) {
  var s;
  const e = Pt(n);
  return r || (e.equals = Yg), Ss && Re !== null && Re.l !== null && ((s = Re.l).s ?? (s.s = [])).push(e), e;
}
function Zx(n, r = !1) {
  return /* @__PURE__ */ Vg(/* @__PURE__ */ al(n, r));
}
// @__NO_SIDE_EFFECTS__
function Vg(n) {
  return De !== null && !un && (De.f & fn) !== 0 && (bn === null ? nw([n]) : bn.push(n)), n;
}
function ut(n, r) {
  return De !== null && !un && Qa() && (De.f & (fn | el)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (bn === null || !bn.includes(n)) && Ux(), au(n, r);
}
function au(n, r) {
  return n.equals(r) || (n.v, n.v = r, n.wv = td(), Xg(n, jn), Qa() && Ge !== null && (Ge.f & _t) !== 0 && (Ge.f & (Zn | ks)) === 0 && (Bn === null ? rw([n]) : Bn.push(n))), r;
}
function Xg(n, r) {
  var e = n.reactions;
  if (e !== null)
    for (var s = Qa(), u = e.length, l = 0; l < u; l++) {
      var f = e[l], h = f.f;
      (h & jn) === 0 && (!s && f === Ge || (Nn(f, r), (h & (_t | Zt)) !== 0 && ((h & fn) !== 0 ? Xg(
        /** @type {Derived} */
        f,
        Ei
      ) : ro(
        /** @type {Effect} */
        f
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function ol(n) {
  var r = fn | jn, e = De !== null && (De.f & fn) !== 0 ? (
    /** @type {Derived} */
    De
  ) : null;
  return Ge === null || e !== null && (e.f & Zt) !== 0 ? r |= Zt : Ge.f |= Ug, {
    ctx: Re,
    deps: null,
    effects: null,
    equals: zg,
    f: r,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: e ?? Ge
  };
}
// @__NO_SIDE_EFFECTS__
function Wg(n) {
  const r = /* @__PURE__ */ ol(n);
  return r.equals = Yg, r;
}
function Zg(n) {
  var r = n.effects;
  if (r !== null) {
    n.effects = null;
    for (var e = 0; e < r.length; e += 1)
      Hn(
        /** @type {Effect} */
        r[e]
      );
  }
}
function jx(n) {
  for (var r = n.parent; r !== null; ) {
    if ((r.f & fn) === 0)
      return (
        /** @type {Effect} */
        r
      );
    r = r.parent;
  }
  return null;
}
function $x(n) {
  var r, e = Ge;
  hr(jx(n));
  try {
    Zg(n), r = rd(n);
  } finally {
    hr(e);
  }
  return r;
}
function jg(n) {
  var r = $x(n), e = (or || (n.f & Zt) !== 0) && n.deps !== null ? Ei : _t;
  Nn(n, e), n.equals(r) || (n.v = r, n.wv = td());
}
let Kx = !1;
function kn(n, r = null, e) {
  if (typeof n != "object" || n === null || br in n)
    return n;
  const s = Qu(n);
  if (s !== Mx && s !== Ix)
    return n;
  var u = /* @__PURE__ */ new Map(), l = $u(n), f = Pt(0);
  l && u.set("length", Pt(
    /** @type {any[]} */
    n.length
  ));
  var h;
  return new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(m, d, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Fx();
        var y = u.get(d);
        return y === void 0 ? (y = Pt(v.value), u.set(d, y)) : ut(y, kn(v.value, h)), !0;
      },
      deleteProperty(m, d) {
        var v = u.get(d);
        if (v === void 0)
          d in m && u.set(d, Pt(It));
        else {
          if (l && typeof d == "string") {
            var y = (
              /** @type {Source<number>} */
              u.get("length")
            ), E = Number(d);
            Number.isInteger(E) && E < y.v && ut(y, E);
          }
          ut(v, It), _h(f);
        }
        return !0;
      },
      get(m, d, v) {
        var M;
        if (d === br)
          return n;
        var y = u.get(d), E = d in m;
        if (y === void 0 && (!E || (M = os(m, d)) != null && M.writable) && (y = Pt(kn(E ? m[d] : It, h)), u.set(d, y)), y !== void 0) {
          var S = Te(y);
          return S === It ? void 0 : S;
        }
        return Reflect.get(m, d, v);
      },
      getOwnPropertyDescriptor(m, d) {
        var v = Reflect.getOwnPropertyDescriptor(m, d);
        if (v && "value" in v) {
          var y = u.get(d);
          y && (v.value = Te(y));
        } else if (v === void 0) {
          var E = u.get(d), S = E == null ? void 0 : E.v;
          if (E !== void 0 && S !== It)
            return {
              enumerable: !0,
              configurable: !0,
              value: S,
              writable: !0
            };
        }
        return v;
      },
      has(m, d) {
        var S;
        if (d === br)
          return !0;
        var v = u.get(d), y = v !== void 0 && v.v !== It || Reflect.has(m, d);
        if (v !== void 0 || Ge !== null && (!y || (S = os(m, d)) != null && S.writable)) {
          v === void 0 && (v = Pt(y ? kn(m[d], h) : It), u.set(d, v));
          var E = Te(v);
          if (E === It)
            return !1;
        }
        return y;
      },
      set(m, d, v, y) {
        var H;
        var E = u.get(d), S = d in m;
        if (l && d === "length")
          for (var M = v; M < /** @type {Source<number>} */
          E.v; M += 1) {
            var D = u.get(M + "");
            D !== void 0 ? ut(D, It) : M in m && (D = Pt(It), u.set(M + "", D));
          }
        E === void 0 ? (!S || (H = os(m, d)) != null && H.writable) && (E = Pt(void 0), ut(E, kn(v, h)), u.set(d, E)) : (S = E.v !== It, ut(E, kn(v, h)));
        var U = Reflect.getOwnPropertyDescriptor(m, d);
        if (U != null && U.set && U.set.call(y, v), !S) {
          if (l && typeof d == "string") {
            var G = (
              /** @type {Source<number>} */
              u.get("length")
            ), I = Number(d);
            Number.isInteger(I) && I >= G.v && ut(G, I + 1);
          }
          _h(f);
        }
        return !0;
      },
      ownKeys(m) {
        Te(f);
        var d = Reflect.ownKeys(m).filter((E) => {
          var S = u.get(E);
          return S === void 0 || S.v !== It;
        });
        for (var [v, y] of u)
          y.v !== It && !(v in m) && d.push(v);
        return d;
      },
      setPrototypeOf() {
        Gx();
      }
    }
  );
}
function _h(n, r = 1) {
  ut(n, n.v + r);
}
function Eh(n) {
  return n !== null && typeof n == "object" && br in n ? n[br] : n;
}
function Qx(n, r) {
  return Object.is(Eh(n), Eh(r));
}
var xh, $g, Kg, Qg;
function ew() {
  if (xh === void 0) {
    xh = window, $g = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, r = Node.prototype;
    Kg = os(r, "firstChild").get, Qg = os(r, "nextSibling").get, n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__styles = null, n.__e = void 0, Text.prototype.__t = void 0;
  }
}
function eo(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function ds(n) {
  return Kg.call(n);
}
// @__NO_SIDE_EFFECTS__
function to(n) {
  return Qg.call(n);
}
function ar(n, r) {
  return /* @__PURE__ */ ds(n);
}
function lr(n, r) {
  {
    var e = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ ds(
        /** @type {Node} */
        n
      )
    );
    return e instanceof Comment && e.data === "" ? /* @__PURE__ */ to(e) : e;
  }
}
function Ma(n, r = 1, e = !1) {
  let s = n;
  for (; r--; )
    s = /** @type {TemplateNode} */
    /* @__PURE__ */ to(s);
  return s;
}
function tw(n) {
  n.textContent = "";
}
let ra = !1, ou = !1, Ia = null, ia = !1, ul = !1;
function wh(n) {
  ul = n;
}
let sa = [];
let De = null, un = !1;
function cr(n) {
  De = n;
}
let Ge = null;
function hr(n) {
  Ge = n;
}
let bn = null;
function nw(n) {
  bn = n;
}
let vt = null, Nt = 0, Bn = null;
function rw(n) {
  Bn = n;
}
let ed = 1, La = 0, or = !1;
function td() {
  return ++ed;
}
function Ms(n) {
  var y;
  var r = n.f;
  if ((r & jn) !== 0)
    return !0;
  if ((r & Ei) !== 0) {
    var e = n.deps, s = (r & Zt) !== 0;
    if (e !== null) {
      var u, l, f = (r & ka) !== 0, h = s && Ge !== null && !or, m = e.length;
      if (f || h) {
        var d = (
          /** @type {Derived} */
          n
        ), v = d.parent;
        for (u = 0; u < m; u++)
          l = e[u], (f || !((y = l == null ? void 0 : l.reactions) != null && y.includes(d))) && (l.reactions ?? (l.reactions = [])).push(d);
        f && (d.f ^= ka), h && v !== null && (v.f & Zt) === 0 && (d.f ^= Zt);
      }
      for (u = 0; u < m; u++)
        if (l = e[u], Ms(
          /** @type {Derived} */
          l
        ) && jg(
          /** @type {Derived} */
          l
        ), l.wv > n.wv)
          return !0;
    }
    (!s || Ge !== null && !or) && Nn(n, _t);
  }
  return !1;
}
function iw(n, r) {
  for (var e = r; e !== null; ) {
    if ((e.f & wa) !== 0)
      try {
        e.fn(n);
        return;
      } catch {
        e.f ^= wa;
      }
    e = e.parent;
  }
  throw ra = !1, n;
}
function sw(n) {
  return (n.f & Ka) === 0 && (n.parent === null || (n.parent.f & wa) === 0);
}
function no(n, r, e, s) {
  if (ra) {
    if (e === null && (ra = !1), sw(r))
      throw n;
    return;
  }
  e !== null && (ra = !0);
  {
    iw(n, r);
    return;
  }
}
function nd(n, r, e = !0) {
  var s = n.reactions;
  if (s !== null)
    for (var u = 0; u < s.length; u++) {
      var l = s[u];
      (l.f & fn) !== 0 ? nd(
        /** @type {Derived} */
        l,
        r,
        !1
      ) : r === l && (e ? Nn(l, jn) : (l.f & _t) !== 0 && Nn(l, Ei), ro(
        /** @type {Effect} */
        l
      ));
    }
}
function rd(n) {
  var S;
  var r = vt, e = Nt, s = Bn, u = De, l = or, f = bn, h = Re, m = un, d = n.f;
  vt = /** @type {null | Value[]} */
  null, Nt = 0, Bn = null, or = (d & Zt) !== 0 && (un || !ia || De === null), De = (d & (Zn | ks)) === 0 ? n : null, bn = null, yh(n.ctx), un = !1, La++;
  try {
    var v = (
      /** @type {Function} */
      (0, n.fn)()
    ), y = n.deps;
    if (vt !== null) {
      var E;
      if (ba(n, Nt), y !== null && Nt > 0)
        for (y.length = Nt + vt.length, E = 0; E < vt.length; E++)
          y[Nt + E] = vt[E];
      else
        n.deps = y = vt;
      if (!or)
        for (E = Nt; E < y.length; E++)
          ((S = y[E]).reactions ?? (S.reactions = [])).push(n);
    } else y !== null && Nt < y.length && (ba(n, Nt), y.length = Nt);
    if (Qa() && Bn !== null && !un && y !== null && (n.f & (fn | Ei | jn)) === 0)
      for (E = 0; E < /** @type {Source[]} */
      Bn.length; E++)
        nd(
          Bn[E],
          /** @type {Effect} */
          n
        );
    return u !== null && La++, v;
  } finally {
    vt = r, Nt = e, Bn = s, De = u, or = l, bn = f, yh(h), un = m;
  }
}
function aw(n, r) {
  let e = r.reactions;
  if (e !== null) {
    var s = Sx.call(e, n);
    if (s !== -1) {
      var u = e.length - 1;
      u === 0 ? e = r.reactions = null : (e[s] = e[u], e.pop());
    }
  }
  e === null && (r.f & fn) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (vt === null || !vt.includes(r)) && (Nn(r, Ei), (r.f & (Zt | ka)) === 0 && (r.f ^= ka), Zg(
    /** @type {Derived} **/
    r
  ), ba(
    /** @type {Derived} **/
    r,
    0
  ));
}
function ba(n, r) {
  var e = n.deps;
  if (e !== null)
    for (var s = r; s < e.length; s++)
      aw(n, e[s]);
}
function ll(n) {
  var r = n.f;
  if ((r & Ka) === 0) {
    Nn(n, _t);
    var e = Ge, s = Re, u = ia;
    Ge = n, ia = !0;
    try {
      (r & el) !== 0 ? vw(n) : od(n), ad(n);
      var l = rd(n);
      n.teardown = typeof l == "function" ? l : null, n.wv = ed;
      var f = n.deps, h;
      vh && zx && n.f & jn;
    } catch (m) {
      no(m, n, e, s || n.ctx);
    } finally {
      ia = u, Ge = e;
    }
  }
}
function ow() {
  try {
    Dx();
  } catch (n) {
    if (Ia !== null)
      no(n, Ia, null);
    else
      throw n;
  }
}
function uw() {
  try {
    for (var n = 0; sa.length > 0; ) {
      n++ > 1e3 && ow();
      var r = sa, e = r.length;
      sa = [];
      for (var s = 0; s < e; s++) {
        var u = r[s];
        (u.f & _t) === 0 && (u.f ^= _t);
        var l = cw(u);
        lw(l);
      }
    }
  } finally {
    ou = !1, Ia = null;
  }
}
function lw(n) {
  var r = n.length;
  if (r !== 0)
    for (var e = 0; e < r; e++) {
      var s = n[e];
      if ((s.f & (Ka | qn)) === 0)
        try {
          Ms(s) && (ll(s), s.deps === null && s.first === null && s.nodes_start === null && (s.teardown === null ? ud(s) : s.fn = null));
        } catch (u) {
          no(u, s, null, s.ctx);
        }
    }
}
function ro(n) {
  ou || (ou = !0, queueMicrotask(uw));
  for (var r = Ia = n; r.parent !== null; ) {
    r = r.parent;
    var e = r.f;
    if ((e & (ks | Zn)) !== 0) {
      if ((e & _t) === 0) return;
      r.f ^= _t;
    }
  }
  sa.push(r);
}
function cw(n) {
  for (var r = [], e = n.first; e !== null; ) {
    var s = e.f, u = (s & Zn) !== 0, l = u && (s & _t) !== 0;
    if (!l && (s & qn) === 0) {
      if ((s & Bg) !== 0)
        r.push(e);
      else if (u)
        e.f ^= _t;
      else {
        var f = De;
        try {
          De = e, Ms(e) && ll(e);
        } catch (d) {
          no(d, e, null, e.ctx);
        } finally {
          De = f;
        }
      }
      var h = e.first;
      if (h !== null) {
        e = h;
        continue;
      }
    }
    var m = e.parent;
    for (e = e.next; e === null && m !== null; )
      e = m.next, m = m.parent;
  }
  return r;
}
function Te(n) {
  var r = n.f, e = (r & fn) !== 0;
  if (De !== null && !un) {
    bn !== null && bn.includes(n) && Bx();
    var s = De.deps;
    n.rv < La && (n.rv = La, vt === null && s !== null && s[Nt] === n ? Nt++ : vt === null ? vt = [n] : (!or || !vt.includes(n)) && vt.push(n));
  } else if (e && /** @type {Derived} */
  n.deps === null && /** @type {Derived} */
  n.effects === null) {
    var u = (
      /** @type {Derived} */
      n
    ), l = u.parent;
    l !== null && (l.f & Zt) === 0 && (u.f ^= Zt);
  }
  return e && (u = /** @type {Derived} */
  n, Ms(u) && jg(u)), n.v;
}
function Is(n) {
  var r = un;
  try {
    return un = !0, n();
  } finally {
    un = r;
  }
}
const hw = -7169;
function Nn(n, r) {
  n.f = n.f & hw | r;
}
function fw(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (br in n)
      uu(n);
    else if (!Array.isArray(n))
      for (let r in n) {
        const e = n[r];
        typeof e == "object" && e && br in e && uu(e);
      }
  }
}
function uu(n, r = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !r.has(n)) {
    r.add(n), n instanceof Date && n.getTime();
    for (let s in n)
      try {
        uu(n[s], r);
      } catch {
      }
    const e = Qu(n);
    if (e !== Object.prototype && e !== Array.prototype && e !== Map.prototype && e !== Set.prototype && e !== Date.prototype) {
      const s = Gg(e);
      for (let u in s) {
        const l = s[u].get;
        if (l)
          try {
            l.call(n);
          } catch {
          }
      }
    }
  }
}
function id(n) {
  Ge === null && De === null && Rx(), De !== null && (De.f & Zt) !== 0 && Ge === null && Ox(), ul && Px();
}
function gw(n, r) {
  var e = r.last;
  e === null ? r.last = r.first = n : (e.next = n, n.prev = e, r.last = n);
}
function ki(n, r, e, s = !0) {
  var u = (n & ks) !== 0, l = Ge, f = {
    ctx: Re,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: n | jn,
    first: null,
    fn: r,
    last: null,
    next: null,
    parent: u ? null : l,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (e)
    try {
      ll(f), f.f |= bx;
    } catch (d) {
      throw Hn(f), d;
    }
  else r !== null && ro(f);
  var h = e && f.deps === null && f.first === null && f.nodes_start === null && f.teardown === null && (f.f & (Ug | wa)) === 0;
  if (!h && !u && s && (l !== null && gw(f, l), De !== null && (De.f & fn) !== 0)) {
    var m = (
      /** @type {Derived} */
      De
    );
    (m.effects ?? (m.effects = [])).push(f);
  }
  return f;
}
function dw(n) {
  const r = ki($a, null, !1);
  return Nn(r, _t), r.teardown = n, r;
}
function lu(n) {
  id();
  var r = Ge !== null && (Ge.f & Zn) !== 0 && Re !== null && !Re.m;
  if (r) {
    var e = (
      /** @type {ComponentContext} */
      Re
    );
    (e.e ?? (e.e = [])).push({
      fn: n,
      effect: Ge,
      reaction: De
    });
  } else {
    var s = io(n);
    return s;
  }
}
function pw(n) {
  return id(), sd(n);
}
function mw(n) {
  const r = ki(ks, n, !0);
  return (e = {}) => new Promise((s) => {
    e.outro ? Aa(r, () => {
      Hn(r), s(void 0);
    }) : (Hn(r), s(void 0));
  });
}
function io(n) {
  return ki(Bg, n, !1);
}
function sd(n) {
  return ki($a, n, !0);
}
function Un(n, r = [], e = ol) {
  const s = r.map(e);
  return so(() => n(...s.map(Te)));
}
function so(n, r = 0) {
  return ki($a | el | r, n, !0);
}
function mi(n, r = !0) {
  return ki($a | Zn, n, !0, r);
}
function ad(n) {
  var r = n.teardown;
  if (r !== null) {
    const e = ul, s = De;
    wh(!0), cr(null);
    try {
      r.call(null);
    } finally {
      wh(e), cr(s);
    }
  }
}
function od(n, r = !1) {
  var e = n.first;
  for (n.first = n.last = null; e !== null; ) {
    var s = e.next;
    Hn(e, r), e = s;
  }
}
function vw(n) {
  for (var r = n.first; r !== null; ) {
    var e = r.next;
    (r.f & Zn) === 0 && Hn(r), r = e;
  }
}
function Hn(n, r = !0) {
  var e = !1;
  if ((r || (n.f & Ax) !== 0) && n.nodes_start !== null) {
    for (var s = n.nodes_start, u = n.nodes_end; s !== null; ) {
      var l = s === u ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ to(s)
      );
      s.remove(), s = l;
    }
    e = !0;
  }
  od(n, r && !e), ba(n, 0), Nn(n, Ka);
  var f = n.transitions;
  if (f !== null)
    for (const m of f)
      m.stop();
  ad(n);
  var h = n.parent;
  h !== null && h.first !== null && ud(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = null;
}
function ud(n) {
  var r = n.parent, e = n.prev, s = n.next;
  e !== null && (e.next = s), s !== null && (s.prev = e), r !== null && (r.first === n && (r.first = s), r.last === n && (r.last = e));
}
function Aa(n, r) {
  var e = [];
  cl(n, e, !0), ld(e, () => {
    Hn(n), r && r();
  });
}
function ld(n, r) {
  var e = n.length;
  if (e > 0) {
    var s = () => --e || r();
    for (var u of n)
      u.out(s);
  } else
    r();
}
function cl(n, r, e) {
  if ((n.f & qn) === 0) {
    if (n.f ^= qn, n.transitions !== null)
      for (const f of n.transitions)
        (f.is_global || e) && r.push(f);
    for (var s = n.first; s !== null; ) {
      var u = s.next, l = (s.f & tl) !== 0 || (s.f & Zn) !== 0;
      cl(s, r, l ? e : !1), s = u;
    }
  }
}
function Ca(n) {
  cd(n, !0);
}
function cd(n, r) {
  if ((n.f & qn) !== 0) {
    n.f ^= qn, (n.f & _t) === 0 && (n.f ^= _t), Ms(n) && (Nn(n, jn), ro(n));
    for (var e = n.first; e !== null; ) {
      var s = e.next, u = (e.f & tl) !== 0 || (e.f & Zn) !== 0;
      cd(e, u ? r : !1), e = s;
    }
    if (n.transitions !== null)
      for (const l of n.transitions)
        (l.is_global || r) && l.in();
  }
}
const yw = ["touchstart", "touchmove"];
function _w(n) {
  return yw.includes(n);
}
let kh = !1;
function Ew() {
  kh || (kh = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var r;
        if (!n.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (r = e.__on_r) == null || r.call(e);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function xw(n) {
  var r = De, e = Ge;
  cr(null), hr(null);
  try {
    return n();
  } finally {
    cr(r), hr(e);
  }
}
function hd(n, r, e, s = e) {
  n.addEventListener(r, () => xw(e));
  const u = n.__on_r;
  u ? n.__on_r = () => {
    u(), s(!0);
  } : n.__on_r = () => s(!0), Ew();
}
const fd = /* @__PURE__ */ new Set(), cu = /* @__PURE__ */ new Set();
function hl(n) {
  for (var r = 0; r < n.length; r++)
    fd.add(n[r]);
  for (var e of cu)
    e(n);
}
function Ys(n) {
  var I;
  var r = this, e = (
    /** @type {Node} */
    r.ownerDocument
  ), s = n.type, u = ((I = n.composedPath) == null ? void 0 : I.call(n)) || [], l = (
    /** @type {null | Element} */
    u[0] || n.target
  ), f = 0, h = n.__root;
  if (h) {
    var m = u.indexOf(h);
    if (m !== -1 && (r === document || r === /** @type {any} */
    window)) {
      n.__root = r;
      return;
    }
    var d = u.indexOf(r);
    if (d === -1)
      return;
    m <= d && (f = m);
  }
  if (l = /** @type {Element} */
  u[f] || n.target, l !== r) {
    Fg(n, "currentTarget", {
      configurable: !0,
      get() {
        return l || e;
      }
    });
    var v = De, y = Ge;
    cr(null), hr(null);
    try {
      for (var E, S = []; l !== null; ) {
        var M = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var D = l["__" + s];
          if (D !== void 0 && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === l))
            if ($u(D)) {
              var [U, ...G] = D;
              U.apply(l, [n, ...G]);
            } else
              D.call(l, n);
        } catch (H) {
          E ? S.push(H) : E = H;
        }
        if (n.cancelBubble || M === r || M === null)
          break;
        l = M;
      }
      if (E) {
        for (let H of S)
          queueMicrotask(() => {
            throw H;
          });
        throw E;
      }
    } finally {
      n.__root = r, delete n.currentTarget, cr(v), hr(y);
    }
  }
}
function gd(n) {
  var r = document.createElement("template");
  return r.innerHTML = n, r.content;
}
function ps(n, r) {
  var e = (
    /** @type {Effect} */
    Ge
  );
  e.nodes_start === null && (e.nodes_start = n, e.nodes_end = r);
}
// @__NO_SIDE_EFFECTS__
function dn(n, r) {
  var e = (r & Jx) !== 0, s = (r & Vx) !== 0, u, l = !n.startsWith("<!>");
  return () => {
    u === void 0 && (u = gd(l ? n : "<!>" + n), e || (u = /** @type {Node} */
    /* @__PURE__ */ ds(u)));
    var f = (
      /** @type {TemplateNode} */
      s || $g ? document.importNode(u, !0) : u.cloneNode(!0)
    );
    if (e) {
      var h = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ds(f)
      ), m = (
        /** @type {TemplateNode} */
        f.lastChild
      );
      ps(h, m);
    } else
      ps(f, f);
    return f;
  };
}
function Sh(n = "") {
  {
    var r = eo(n + "");
    return ps(r, r), r;
  }
}
function vi() {
  var n = document.createDocumentFragment(), r = document.createComment(""), e = eo();
  return n.append(r, e), ps(r, e), n;
}
function Ke(n, r) {
  n !== null && n.before(
    /** @type {Node} */
    r
  );
}
function oi(n, r) {
  var e = r == null ? "" : typeof r == "object" ? r + "" : r;
  e !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = e, n.nodeValue = e + "");
}
function ww(n, r) {
  return kw(n, r);
}
const Kr = /* @__PURE__ */ new Map();
function kw(n, { target: r, anchor: e, props: s = {}, events: u, context: l, intro: f = !0 }) {
  ew();
  var h = /* @__PURE__ */ new Set(), m = (y) => {
    for (var E = 0; E < y.length; E++) {
      var S = y[E];
      if (!h.has(S)) {
        h.add(S);
        var M = _w(S);
        r.addEventListener(S, Ys, { passive: M });
        var D = Kr.get(S);
        D === void 0 ? (document.addEventListener(S, Ys, { passive: M }), Kr.set(S, 1)) : Kr.set(S, D + 1);
      }
    }
  };
  m(Ku(fd)), cu.add(m);
  var d = void 0, v = mw(() => {
    var y = e ?? r.appendChild(eo());
    return mi(() => {
      if (l) {
        xi({});
        var E = (
          /** @type {ComponentContext} */
          Re
        );
        E.c = l;
      }
      u && (s.$$events = u), d = n(y, s) || {}, l && wi();
    }), () => {
      var M;
      for (var E of h) {
        r.removeEventListener(E, Ys);
        var S = (
          /** @type {number} */
          Kr.get(E)
        );
        --S === 0 ? (document.removeEventListener(E, Ys), Kr.delete(E)) : Kr.set(E, S);
      }
      cu.delete(m), y !== e && ((M = y.parentNode) == null || M.removeChild(y));
    };
  });
  return hu.set(d, v), d;
}
let hu = /* @__PURE__ */ new WeakMap();
function Sw(n, r) {
  const e = hu.get(n);
  return e ? (hu.delete(n), e(r)) : Promise.resolve();
}
function In(n, r, [e, s] = [0, 0]) {
  var u = n, l = null, f = null, h = It, m = e > 0 ? tl : 0, d = !1;
  const v = (E, S = !0) => {
    d = !0, y(S, E);
  }, y = (E, S) => {
    h !== (h = E) && (h ? (l ? Ca(l) : S && (l = mi(() => S(u))), f && Aa(f, () => {
      f = null;
    })) : (f ? Ca(f) : S && (f = mi(() => S(u, [e + 1, s]))), l && Aa(l, () => {
      l = null;
    })));
  };
  so(() => {
    d = !1, r(v), d || y(null, null);
  }, m);
}
function ms(n, r) {
  return r;
}
function Mw(n, r, e, s) {
  for (var u = [], l = r.length, f = 0; f < l; f++)
    cl(r[f].e, u, !0);
  var h = l > 0 && u.length === 0 && e !== null;
  if (h) {
    var m = (
      /** @type {Element} */
      /** @type {Element} */
      e.parentNode
    );
    tw(m), m.append(
      /** @type {Element} */
      e
    ), s.clear(), sr(n, r[0].prev, r[l - 1].next);
  }
  ld(u, () => {
    for (var d = 0; d < l; d++) {
      var v = r[d];
      h || (s.delete(v.k), sr(n, v.prev, v.next)), Hn(v.e, !h);
    }
  });
}
function vs(n, r, e, s, u, l = null) {
  var f = n, h = { flags: r, items: /* @__PURE__ */ new Map(), first: null }, m = (r & Hg) !== 0;
  if (m) {
    var d = (
      /** @type {Element} */
      n
    );
    f = d.appendChild(eo());
  }
  var v = null, y = !1, E = /* @__PURE__ */ Wg(() => {
    var S = e();
    return $u(S) ? S : S == null ? [] : Ku(S);
  });
  so(() => {
    var S = Te(E), M = S.length;
    y && M === 0 || (y = M === 0, Iw(S, h, f, u, r, s, e), l !== null && (M === 0 ? v ? Ca(v) : v = mi(() => l(f)) : v !== null && Aa(v, () => {
      v = null;
    })), Te(E));
  });
}
function Iw(n, r, e, s, u, l, f) {
  var P, N, R, Y;
  var h = (u & Yx) !== 0, m = (u & (nl | rl)) !== 0, d = n.length, v = r.items, y = r.first, E = y, S, M = null, D, U = [], G = [], I, H, J, X;
  if (h)
    for (X = 0; X < d; X += 1)
      I = n[X], H = l(I, X), J = v.get(H), J !== void 0 && ((P = J.a) == null || P.measure(), (D ?? (D = /* @__PURE__ */ new Set())).add(J));
  for (X = 0; X < d; X += 1) {
    if (I = n[X], H = l(I, X), J = v.get(H), J === void 0) {
      var W = E ? (
        /** @type {TemplateNode} */
        E.e.nodes_start
      ) : e;
      M = bw(
        W,
        r,
        M,
        M === null ? r.first : M.next,
        I,
        H,
        X,
        s,
        u,
        f
      ), v.set(H, M), U = [], G = [], E = M.next;
      continue;
    }
    if (m && Lw(J, I, X, u), (J.e.f & qn) !== 0 && (Ca(J.e), h && ((N = J.a) == null || N.unfix(), (D ?? (D = /* @__PURE__ */ new Set())).delete(J))), J !== E) {
      if (S !== void 0 && S.has(J)) {
        if (U.length < G.length) {
          var $ = G[0], x;
          M = $.prev;
          var k = U[0], b = U[U.length - 1];
          for (x = 0; x < U.length; x += 1)
            Mh(U[x], $, e);
          for (x = 0; x < G.length; x += 1)
            S.delete(G[x]);
          sr(r, k.prev, b.next), sr(r, M, k), sr(r, b, $), E = $, M = b, X -= 1, U = [], G = [];
        } else
          S.delete(J), Mh(J, E, e), sr(r, J.prev, J.next), sr(r, J, M === null ? r.first : M.next), sr(r, M, J), M = J;
        continue;
      }
      for (U = [], G = []; E !== null && E.k !== H; )
        (E.e.f & qn) === 0 && (S ?? (S = /* @__PURE__ */ new Set())).add(E), G.push(E), E = E.next;
      if (E === null)
        continue;
      J = E;
    }
    U.push(J), M = J, E = J.next;
  }
  if (E !== null || S !== void 0) {
    for (var A = S === void 0 ? [] : Ku(S); E !== null; )
      (E.e.f & qn) === 0 && A.push(E), E = E.next;
    var T = A.length;
    if (T > 0) {
      var F = (u & Hg) !== 0 && d === 0 ? e : null;
      if (h) {
        for (X = 0; X < T; X += 1)
          (R = A[X].a) == null || R.measure();
        for (X = 0; X < T; X += 1)
          (Y = A[X].a) == null || Y.fix();
      }
      Mw(r, A, F, v);
    }
  }
  h && Nx(() => {
    var z;
    if (D !== void 0)
      for (J of D)
        (z = J.a) == null || z.apply();
  }), Ge.first = r.first && r.first.e, Ge.last = M && M.e;
}
function Lw(n, r, e, s) {
  (s & nl) !== 0 && au(n.v, r), (s & rl) !== 0 ? au(
    /** @type {Value<number>} */
    n.i,
    e
  ) : n.i = e;
}
function bw(n, r, e, s, u, l, f, h, m, d) {
  var v = (m & nl) !== 0, y = (m & Hx) === 0, E = v ? y ? /* @__PURE__ */ al(u) : Pt(u) : u, S = (m & rl) === 0 ? f : Pt(f), M = {
    i: S,
    v: E,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: e,
    next: s
  };
  try {
    return M.e = mi(() => h(n, E, S, d), Kx), M.e.prev = e && e.e, M.e.next = s && s.e, e === null ? r.first = M : (e.next = M, e.e.next = M.e), s !== null && (s.prev = M, s.e.prev = M.e), M;
  } finally {
  }
}
function Mh(n, r, e) {
  for (var s = n.next ? (
    /** @type {TemplateNode} */
    n.next.e.nodes_start
  ) : e, u = r ? (
    /** @type {TemplateNode} */
    r.e.nodes_start
  ) : e, l = (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ); l !== s; ) {
    var f = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ to(l)
    );
    u.before(l), l = f;
  }
}
function sr(n, r, e) {
  r === null ? n.first = e : (r.next = e, r.e.next = e && e.e), e !== null && (e.prev = r, e.e.prev = r && r.e);
}
function Aw(n, r, e, s, u) {
  var l = n, f = "", h;
  so(() => {
    f !== (f = r() ?? "") && (h !== void 0 && (Hn(h), h = void 0), f !== "" && (h = mi(() => {
      var m = f + "", d = gd(m);
      ps(
        /** @type {TemplateNode} */
        /* @__PURE__ */ ds(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), l.before(d);
    })));
  });
}
const Ih = [...` 	
\r\f \v\uFEFF`];
function Cw(n, r, e) {
  var s = n == null ? "" : "" + n;
  if (r && (s = s ? s + " " + r : r), e) {
    for (var u in e)
      if (e[u])
        s = s ? s + " " + u : u;
      else if (s.length)
        for (var l = u.length, f = 0; (f = s.indexOf(u, f)) >= 0; ) {
          var h = f + l;
          (f === 0 || Ih.includes(s[f - 1])) && (h === s.length || Ih.includes(s[h])) ? s = (f === 0 ? "" : s.substring(0, f)) + s.substring(h + 1) : f = h;
        }
  }
  return s === "" ? null : s;
}
function fu(n, r, e, s, u, l) {
  var f = n.__className;
  if (f !== e) {
    var h = Cw(e, s, l);
    h == null ? n.removeAttribute("class") : n.className = h, n.__className = e;
  } else if (l)
    for (var m in l) {
      var d = !!l[m];
      (u == null || d !== !!u[m]) && n.classList.toggle(m, d);
    }
  return l;
}
function Mr(n, r, e, s) {
  var u = n.__attributes ?? (n.__attributes = {});
  u[r] !== (u[r] = e) && (r === "style" && "__styles" in n && (n.__styles = {}), r === "loading" && (n[Cx] = e), e == null ? n.removeAttribute(r) : typeof e != "string" && Tw(n).includes(r) ? n[r] = e : n.setAttribute(r, e));
}
var Lh = /* @__PURE__ */ new Map();
function Tw(n) {
  var r = Lh.get(n.nodeName);
  if (r) return r;
  Lh.set(n.nodeName, r = []);
  for (var e, s = n, u = Element.prototype; u !== s; ) {
    e = Gg(s);
    for (var l in e)
      e[l].set && r.push(l);
    s = Qu(s);
  }
  return r;
}
function Nw(n, r, e = r) {
  hd(n, "change", (s) => {
    var u = s ? n.defaultChecked : n.checked;
    e(u);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  Is(r) == null && e(n.checked), sd(() => {
    var s = r();
    n.checked = !!s;
  });
}
function dd(n, r, e) {
  if (n.multiple)
    return Rw(n, r);
  for (var s of n.options) {
    var u = us(s);
    if (Qx(u, r)) {
      s.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (n.selectedIndex = -1);
}
function Pw(n, r) {
  io(() => {
    var e = new MutationObserver(() => {
      var s = n.__value;
      dd(n, s);
    });
    return e.observe(n, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      e.disconnect();
    };
  });
}
function Ow(n, r, e = r) {
  var s = !0;
  hd(n, "change", (u) => {
    var l = u ? "[selected]" : ":checked", f;
    if (n.multiple)
      f = [].map.call(n.querySelectorAll(l), us);
    else {
      var h = n.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      n.querySelector("option:not([disabled])");
      f = h && us(h);
    }
    e(f);
  }), io(() => {
    var u = r();
    if (dd(n, u, s), s && u === void 0) {
      var l = n.querySelector(":checked");
      l !== null && (u = us(l), e(u));
    }
    n.__value = u, s = !1;
  }), Pw(n);
}
function Rw(n, r) {
  for (var e of n.options)
    e.selected = ~r.indexOf(us(e));
}
function us(n) {
  return "__value" in n ? n.__value : n.value;
}
function Dw(n = !1) {
  const r = (
    /** @type {ComponentContextLegacy} */
    Re
  ), e = r.l.u;
  if (!e) return;
  let s = () => fw(r.s);
  if (n) {
    let u = 0, l = (
      /** @type {Record<string, any>} */
      {}
    );
    const f = /* @__PURE__ */ ol(() => {
      let h = !1;
      const m = r.s;
      for (const d in m)
        m[d] !== l[d] && (l[d] = m[d], h = !0);
      return h && u++, u;
    });
    s = () => Te(f);
  }
  e.b.length && pw(() => {
    bh(r, s), su(e.b);
  }), lu(() => {
    const u = Is(() => e.m.map(Lx));
    return () => {
      for (const l of u)
        typeof l == "function" && l();
    };
  }), e.a.length && lu(() => {
    bh(r, s), su(e.a);
  });
}
function bh(n, r) {
  if (n.l.s)
    for (const e of n.l.s) Te(e);
  r();
}
let gu = Symbol();
function Fw(n, r, e) {
  const s = e[r] ?? (e[r] = {
    store: null,
    source: /* @__PURE__ */ al(void 0),
    unsubscribe: ai
  });
  if (s.store !== n && !(gu in e))
    if (s.unsubscribe(), s.store = n ?? null, n == null)
      s.source.v = void 0, s.unsubscribe = ai;
    else {
      var u = !0;
      s.unsubscribe = md(n, (l) => {
        u ? s.source.v = l : ut(s.source, l);
      }), u = !1;
    }
  return n && gu in e ? qw(n) : Te(s.source);
}
function Gw() {
  const n = {};
  function r() {
    dw(() => {
      for (var e in n)
        n[e].unsubscribe();
      Fg(n, gu, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, r];
}
function pd(n) {
  Re === null && il(), Ss && Re.l !== null ? Uw(Re).m.push(n) : lu(() => {
    const r = Is(n);
    if (typeof r == "function") return (
      /** @type {() => void} */
      r
    );
  });
}
function Bw(n) {
  Re === null && il(), pd(() => () => Is(n));
}
function Uw(n) {
  var r = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return r.u ?? (r.u = { a: [], b: [], m: [] });
}
function md(n, r, e) {
  if (n == null)
    return r(void 0), ai;
  const s = Is(
    () => n.subscribe(
      r,
      // @ts-expect-error
      e
    )
  );
  return s.unsubscribe ? () => s.unsubscribe() : s;
}
const Qr = [];
function zw(n, r = ai) {
  let e = null;
  const s = /* @__PURE__ */ new Set();
  function u(h) {
    if (qg(n, h) && (n = h, e)) {
      const m = !Qr.length;
      for (const d of s)
        d[1](), Qr.push(d, n);
      if (m) {
        for (let d = 0; d < Qr.length; d += 2)
          Qr[d][0](Qr[d + 1]);
        Qr.length = 0;
      }
    }
  }
  function l(h) {
    u(h(
      /** @type {T} */
      n
    ));
  }
  function f(h, m = ai) {
    const d = [h, m];
    return s.add(d), s.size === 1 && (e = r(u, l) || ai), h(
      /** @type {T} */
      n
    ), () => {
      s.delete(d), s.size === 0 && e && (e(), e = null);
    };
  }
  return { set: u, update: l, subscribe: f };
}
function qw(n) {
  let r;
  return md(n, (e) => r = e)(), r;
}
const Yw = {
  controls: hn(gf),
  options: Dg().controls
}, du = zw(Yw), Hw = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Hw);
qx();
const Ah = (n, r, e) => {
  var s, u;
  if (!r.actionInstance || !r.actionOption) {
    re.error("Can't apply option value", r.actionInstance, r.actionOption);
    return;
  }
  if (((s = r.actionOption) == null ? void 0 : s.type) === "toggle") {
    const l = n.target;
    ut(e, kn(l.checked));
  } else if (((u = r.actionOption) == null ? void 0 : u.type) === "select") {
    const l = n.target;
    ut(e, kn(l.value));
  }
  r.actionInstance.applyOptionValue(r.actionOption.name, Te(e));
};
var Jw = /* @__PURE__ */ dn("<option> </option>"), Vw = /* @__PURE__ */ dn('<label class="svelte-1892xbw"> </label> <select class="svelte-1892xbw"></select>', 1), Xw = /* @__PURE__ */ dn('<label class="svelte-1892xbw"><input type="checkbox" class="svelte-1892xbw"> </label>'), Ww = /* @__PURE__ */ dn("<span>Unknown type</span>"), Zw = /* @__PURE__ */ dn('<div class="action-option svelte-1892xbw"><!></div>');
function jw(n, r) {
  xi(r, !0);
  let e = Jg("");
  pd(() => {
    r.actionOption && (r.actionOption.type === "select" ? ut(e, kn(r.actionOption.value.value)) : r.actionOption.type === "toggle" && ut(e, kn(r.actionOption.value)));
  });
  var s = vi(), u = lr(s);
  {
    var l = (f) => {
      var h = Zw(), m = ar(h);
      {
        var d = (y) => {
          var E = Vw(), S = lr(E), M = ar(S), D = Ma(S, 2);
          D.__change = [Ah, r, e], vs(D, 21, () => r.actionOption.choices, ms, (U, G) => {
            var I = Jw(), H = {}, J = ar(I);
            Un(() => {
              H !== (H = Te(G).value) && (I.value = (I.__value = Te(G).value) == null ? "" : Te(G).value), oi(J, Te(G).title);
            }), Ke(U, I);
          }), Un(() => {
            Mr(S, "for", r.actionOption.name), oi(M, r.actionOption.label), Mr(D, "id", r.actionOption.name);
          }), Ow(D, () => Te(e), (U) => ut(e, U)), Ke(y, E);
        }, v = (y, E) => {
          {
            var S = (D) => {
              var U = Xw(), G = ar(U);
              G.__change = [Ah, r, e];
              var I = Ma(G);
              Un(
                (H) => {
                  Mr(U, "for", r.actionOption.name), Mr(G, "id", H), oi(I, ` ${r.actionOption.label ?? ""}`);
                },
                [() => String(r.actionOption.name)]
              ), Nw(G, () => Te(e), (H) => ut(e, H)), Ke(D, U);
            }, M = (D) => {
              var U = Ww();
              Ke(D, U);
            };
            In(
              y,
              (D) => {
                r.actionOption.type === "toggle" && typeof Te(e) == "boolean" ? D(S) : D(M, !1);
              },
              E
            );
          }
        };
        In(m, (y) => {
          r.actionOption.type === "select" ? y(d) : y(v, !1);
        });
      }
      Ke(f, h);
    };
    In(u, (f) => {
      r.actionOption && f(l);
    });
  }
  Ke(n, s), wi();
}
hl(["change"]);
const $w = (n, r) => {
  if (n.preventDefault(), !r.actionInstance || !r.subAction) {
    re.error("Can't run a SubAction", r.actionInstance, r.subAction);
    return;
  }
  r.subAction.method();
};
var Kw = /* @__PURE__ */ dn('<button type="submit" class="sub-action svelte-1x28ief"> </button>');
function Qw(n, r) {
  xi(r, !0);
  var e = vi(), s = lr(e);
  {
    var u = (l) => {
      var f = Kw();
      f.__click = [$w, r];
      var h = ar(f);
      Un(() => {
        Mr(f, "title", r.subAction.label), oi(h, r.subAction.label);
      }), Ke(l, f);
    };
    In(s, (l) => {
      r.subAction && l(u);
    });
  }
  Ke(n, e), wi();
}
hl(["click"]);
var e2 = /* @__PURE__ */ dn("<!> <!>", 1);
function t2(n, r) {
  xi(r, !0);
  const e = sl("gm"), s = r.control.type, u = r.control.targetMode;
  let l = Jg(null);
  s && u && ut(l, kn(e.actionInstances[`${s}__${u}`] || null));
  var f = vi(), h = lr(f);
  {
    var m = (d) => {
      var v = e2(), y = lr(v);
      vs(y, 17, () => Te(l).options, ms, (S, M) => {
        jw(S, {
          get actionInstance() {
            return Te(l);
          },
          get actionOption() {
            return Te(M);
          }
        });
      });
      var E = Ma(y, 2);
      vs(E, 17, () => Te(l).actions, ms, (S, M) => {
        Qw(S, {
          get actionInstance() {
            return Te(l);
          },
          get subAction() {
            return Te(M);
          }
        });
      }), Ke(d, v);
    };
    In(h, (d) => {
      Te(l) && d(m);
    });
  }
  Ke(n, f), wi();
}
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
const {
  entries: vd,
  setPrototypeOf: Ch,
  isFrozen: n2,
  getPrototypeOf: r2,
  getOwnPropertyDescriptor: i2
} = Object;
let {
  freeze: Et,
  seal: Kt,
  create: yd
} = Object, {
  apply: pu,
  construct: mu
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(r) {
  return r;
});
Kt || (Kt = function(r) {
  return r;
});
pu || (pu = function(r, e, s) {
  return r.apply(e, s);
});
mu || (mu = function(r, e) {
  return new r(...e);
});
const Hs = xt(Array.prototype.forEach), s2 = xt(Array.prototype.lastIndexOf), Th = xt(Array.prototype.pop), qi = xt(Array.prototype.push), a2 = xt(Array.prototype.splice), aa = xt(String.prototype.toLowerCase), Ao = xt(String.prototype.toString), Nh = xt(String.prototype.match), Yi = xt(String.prototype.replace), o2 = xt(String.prototype.indexOf), u2 = xt(String.prototype.trim), an = xt(Object.prototype.hasOwnProperty), mt = xt(RegExp.prototype.test), Hi = l2(TypeError);
function xt(n) {
  return function(r) {
    for (var e = arguments.length, s = new Array(e > 1 ? e - 1 : 0), u = 1; u < e; u++)
      s[u - 1] = arguments[u];
    return pu(n, r, s);
  };
}
function l2(n) {
  return function() {
    for (var r = arguments.length, e = new Array(r), s = 0; s < r; s++)
      e[s] = arguments[s];
    return mu(n, e);
  };
}
function Me(n, r) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : aa;
  Ch && Ch(n, null);
  let s = r.length;
  for (; s--; ) {
    let u = r[s];
    if (typeof u == "string") {
      const l = e(u);
      l !== u && (n2(r) || (r[s] = l), u = l);
    }
    n[u] = !0;
  }
  return n;
}
function c2(n) {
  for (let r = 0; r < n.length; r++)
    an(n, r) || (n[r] = null);
  return n;
}
function Sr(n) {
  const r = yd(null);
  for (const [e, s] of vd(n))
    an(n, e) && (Array.isArray(s) ? r[e] = c2(s) : s && typeof s == "object" && s.constructor === Object ? r[e] = Sr(s) : r[e] = s);
  return r;
}
function Ji(n, r) {
  for (; n !== null; ) {
    const s = i2(n, r);
    if (s) {
      if (s.get)
        return xt(s.get);
      if (typeof s.value == "function")
        return xt(s.value);
    }
    n = r2(n);
  }
  function e() {
    return null;
  }
  return e;
}
const Ph = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Co = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), To = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), h2 = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), No = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), f2 = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Oh = Et(["#text"]), Rh = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Po = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Dh = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Js = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), g2 = Kt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), d2 = Kt(/<%[\w\W]*|[\w\W]*%>/gm), p2 = Kt(/\$\{[\w\W]*/gm), m2 = Kt(/^data-[\-\w.\u00B7-\uFFFF]+$/), v2 = Kt(/^aria-[\-\w]+$/), _d = Kt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), y2 = Kt(/^(?:\w+script|data):/i), _2 = Kt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ed = Kt(/^html$/i), E2 = Kt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Fh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: v2,
  ATTR_WHITESPACE: _2,
  CUSTOM_ELEMENT: E2,
  DATA_ATTR: m2,
  DOCTYPE_NAME: Ed,
  ERB_EXPR: d2,
  IS_ALLOWED_URI: _d,
  IS_SCRIPT_OR_DATA: y2,
  MUSTACHE_EXPR: g2,
  TMPLIT_EXPR: p2
});
const Vi = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, x2 = function() {
  return typeof window > "u" ? null : window;
}, w2 = function(r, e) {
  if (typeof r != "object" || typeof r.createPolicy != "function")
    return null;
  let s = null;
  const u = "data-tt-policy-suffix";
  e && e.hasAttribute(u) && (s = e.getAttribute(u));
  const l = "dompurify" + (s ? "#" + s : "");
  try {
    return r.createPolicy(l, {
      createHTML(f) {
        return f;
      },
      createScriptURL(f) {
        return f;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
}, Gh = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function xd() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x2();
  const r = (ge) => xd(ge);
  if (r.version = "3.2.4", r.removed = [], !n || !n.document || n.document.nodeType !== Vi.document || !n.Element)
    return r.isSupported = !1, r;
  let {
    document: e
  } = n;
  const s = e, u = s.currentScript, {
    DocumentFragment: l,
    HTMLTemplateElement: f,
    Node: h,
    Element: m,
    NodeFilter: d,
    NamedNodeMap: v = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: y,
    DOMParser: E,
    trustedTypes: S
  } = n, M = m.prototype, D = Ji(M, "cloneNode"), U = Ji(M, "remove"), G = Ji(M, "nextSibling"), I = Ji(M, "childNodes"), H = Ji(M, "parentNode");
  if (typeof f == "function") {
    const ge = e.createElement("template");
    ge.content && ge.content.ownerDocument && (e = ge.content.ownerDocument);
  }
  let J, X = "";
  const {
    implementation: W,
    createNodeIterator: $,
    createDocumentFragment: x,
    getElementsByTagName: k
  } = e, {
    importNode: b
  } = s;
  let A = Gh();
  r.isSupported = typeof vd == "function" && typeof H == "function" && W && W.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: T,
    ERB_EXPR: F,
    TMPLIT_EXPR: P,
    DATA_ATTR: N,
    ARIA_ATTR: R,
    IS_SCRIPT_OR_DATA: Y,
    ATTR_WHITESPACE: z,
    CUSTOM_ELEMENT: j
  } = Fh;
  let {
    IS_ALLOWED_URI: K
  } = Fh, ne = null;
  const de = Me({}, [...Ph, ...Co, ...To, ...No, ...Oh]);
  let ce = null;
  const ae = Me({}, [...Rh, ...Po, ...Dh, ...Js]);
  let ue = Object.seal(yd(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), xe = null, Ae = null, V = !0, Qt = !0, Le = !1, he = !0, C = !1, Oe = !0, Pe = !1, Se = !1, Fr = !1, pn = !1, Gr = !1, te = !1, Ii = !0, Li = !1;
  const Pn = "user-content-";
  let bi = !0, Ee = !1, Ft = {}, en = null;
  const Br = Me({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ye = null;
  const Ur = Me({}, ["audio", "video", "img", "source", "image", "track"]);
  let ke = null;
  const _e = Me({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), zr = "http://www.w3.org/1998/Math/MathML", wt = "http://www.w3.org/2000/svg", tn = "http://www.w3.org/1999/xhtml";
  let pe = tn, Ai = !1, Ci = null;
  const Ti = Me({}, [zr, wt, tn], Ao);
  let at = Me({}, ["mi", "mo", "mn", "ms", "mtext"]), mn = Me({}, ["annotation-xml"]);
  const Gt = Me({}, ["title", "style", "font", "a", "script"]);
  let $n = null;
  const qr = ["application/xhtml+xml", "text/html"], ao = "text/html";
  let Ze = null, kt = null;
  const se = e.createElement("form"), mr = function(B) {
    return B instanceof RegExp || B instanceof Function;
  }, Kn = function() {
    let B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(kt && kt === B)) {
      if ((!B || typeof B != "object") && (B = {}), B = Sr(B), $n = // eslint-disable-next-line unicorn/prefer-includes
      qr.indexOf(B.PARSER_MEDIA_TYPE) === -1 ? ao : B.PARSER_MEDIA_TYPE, Ze = $n === "application/xhtml+xml" ? Ao : aa, ne = an(B, "ALLOWED_TAGS") ? Me({}, B.ALLOWED_TAGS, Ze) : de, ce = an(B, "ALLOWED_ATTR") ? Me({}, B.ALLOWED_ATTR, Ze) : ae, Ci = an(B, "ALLOWED_NAMESPACES") ? Me({}, B.ALLOWED_NAMESPACES, Ao) : Ti, ke = an(B, "ADD_URI_SAFE_ATTR") ? Me(Sr(_e), B.ADD_URI_SAFE_ATTR, Ze) : _e, ye = an(B, "ADD_DATA_URI_TAGS") ? Me(Sr(Ur), B.ADD_DATA_URI_TAGS, Ze) : Ur, en = an(B, "FORBID_CONTENTS") ? Me({}, B.FORBID_CONTENTS, Ze) : Br, xe = an(B, "FORBID_TAGS") ? Me({}, B.FORBID_TAGS, Ze) : {}, Ae = an(B, "FORBID_ATTR") ? Me({}, B.FORBID_ATTR, Ze) : {}, Ft = an(B, "USE_PROFILES") ? B.USE_PROFILES : !1, V = B.ALLOW_ARIA_ATTR !== !1, Qt = B.ALLOW_DATA_ATTR !== !1, Le = B.ALLOW_UNKNOWN_PROTOCOLS || !1, he = B.ALLOW_SELF_CLOSE_IN_ATTR !== !1, C = B.SAFE_FOR_TEMPLATES || !1, Oe = B.SAFE_FOR_XML !== !1, Pe = B.WHOLE_DOCUMENT || !1, pn = B.RETURN_DOM || !1, Gr = B.RETURN_DOM_FRAGMENT || !1, te = B.RETURN_TRUSTED_TYPE || !1, Fr = B.FORCE_BODY || !1, Ii = B.SANITIZE_DOM !== !1, Li = B.SANITIZE_NAMED_PROPS || !1, bi = B.KEEP_CONTENT !== !1, Ee = B.IN_PLACE || !1, K = B.ALLOWED_URI_REGEXP || _d, pe = B.NAMESPACE || tn, at = B.MATHML_TEXT_INTEGRATION_POINTS || at, mn = B.HTML_INTEGRATION_POINTS || mn, ue = B.CUSTOM_ELEMENT_HANDLING || {}, B.CUSTOM_ELEMENT_HANDLING && mr(B.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ue.tagNameCheck = B.CUSTOM_ELEMENT_HANDLING.tagNameCheck), B.CUSTOM_ELEMENT_HANDLING && mr(B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ue.attributeNameCheck = B.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), B.CUSTOM_ELEMENT_HANDLING && typeof B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ue.allowCustomizedBuiltInElements = B.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), C && (Qt = !1), Gr && (pn = !0), Ft && (ne = Me({}, Oh), ce = [], Ft.html === !0 && (Me(ne, Ph), Me(ce, Rh)), Ft.svg === !0 && (Me(ne, Co), Me(ce, Po), Me(ce, Js)), Ft.svgFilters === !0 && (Me(ne, To), Me(ce, Po), Me(ce, Js)), Ft.mathMl === !0 && (Me(ne, No), Me(ce, Dh), Me(ce, Js))), B.ADD_TAGS && (ne === de && (ne = Sr(ne)), Me(ne, B.ADD_TAGS, Ze)), B.ADD_ATTR && (ce === ae && (ce = Sr(ce)), Me(ce, B.ADD_ATTR, Ze)), B.ADD_URI_SAFE_ATTR && Me(ke, B.ADD_URI_SAFE_ATTR, Ze), B.FORBID_CONTENTS && (en === Br && (en = Sr(en)), Me(en, B.FORBID_CONTENTS, Ze)), bi && (ne["#text"] = !0), Pe && Me(ne, ["html", "head", "body"]), ne.table && (Me(ne, ["tbody"]), delete xe.tbody), B.TRUSTED_TYPES_POLICY) {
        if (typeof B.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Hi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof B.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Hi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        J = B.TRUSTED_TYPES_POLICY, X = J.createHTML("");
      } else
        J === void 0 && (J = w2(S, u)), J !== null && typeof X == "string" && (X = J.createHTML(""));
      Et && Et(B), kt = B;
    }
  }, Qn = Me({}, [...Co, ...To, ...h2]), Ni = Me({}, [...No, ...f2]), Pi = function(B) {
    let ee = H(B);
    (!ee || !ee.tagName) && (ee = {
      namespaceURI: pe,
      tagName: "template"
    });
    const oe = aa(B.tagName), Be = aa(ee.tagName);
    return Ci[B.namespaceURI] ? B.namespaceURI === wt ? ee.namespaceURI === tn ? oe === "svg" : ee.namespaceURI === zr ? oe === "svg" && (Be === "annotation-xml" || at[Be]) : !!Qn[oe] : B.namespaceURI === zr ? ee.namespaceURI === tn ? oe === "math" : ee.namespaceURI === wt ? oe === "math" && mn[Be] : !!Ni[oe] : B.namespaceURI === tn ? ee.namespaceURI === wt && !mn[Be] || ee.namespaceURI === zr && !at[Be] ? !1 : !Ni[oe] && (Gt[oe] || !Qn[oe]) : !!($n === "application/xhtml+xml" && Ci[B.namespaceURI]) : !1;
  }, bt = function(B) {
    qi(r.removed, {
      element: B
    });
    try {
      H(B).removeChild(B);
    } catch {
      U(B);
    }
  }, Bt = function(B, ee) {
    try {
      qi(r.removed, {
        attribute: ee.getAttributeNode(B),
        from: ee
      });
    } catch {
      qi(r.removed, {
        attribute: null,
        from: ee
      });
    }
    if (ee.removeAttribute(B), B === "is")
      if (pn || Gr)
        try {
          bt(ee);
        } catch {
        }
      else
        try {
          ee.setAttribute(B, "");
        } catch {
        }
  }, Oi = function(B) {
    let ee = null, oe = null;
    if (Fr)
      B = "<remove></remove>" + B;
    else {
      const Xe = Nh(B, /^[\r\n\t ]+/);
      oe = Xe && Xe[0];
    }
    $n === "application/xhtml+xml" && pe === tn && (B = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + B + "</body></html>");
    const Be = J ? J.createHTML(B) : B;
    if (pe === tn)
      try {
        ee = new E().parseFromString(Be, $n);
      } catch {
      }
    if (!ee || !ee.documentElement) {
      ee = W.createDocument(pe, "template", null);
      try {
        ee.documentElement.innerHTML = Ai ? X : Be;
      } catch {
      }
    }
    const et = ee.body || ee.documentElement;
    return B && oe && et.insertBefore(e.createTextNode(oe), et.childNodes[0] || null), pe === tn ? k.call(ee, Pe ? "html" : "body")[0] : Pe ? ee.documentElement : et;
  }, vr = function(B) {
    return $.call(
      B.ownerDocument || B,
      B,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Ri = function(B) {
    return B instanceof y && (typeof B.nodeName != "string" || typeof B.textContent != "string" || typeof B.removeChild != "function" || !(B.attributes instanceof v) || typeof B.removeAttribute != "function" || typeof B.setAttribute != "function" || typeof B.namespaceURI != "string" || typeof B.insertBefore != "function" || typeof B.hasChildNodes != "function");
  }, Di = function(B) {
    return typeof h == "function" && B instanceof h;
  };
  function nn(ge, B, ee) {
    Hs(ge, (oe) => {
      oe.call(r, B, ee, kt);
    });
  }
  const lt = function(B) {
    let ee = null;
    if (nn(A.beforeSanitizeElements, B, null), Ri(B))
      return bt(B), !0;
    const oe = Ze(B.nodeName);
    if (nn(A.uponSanitizeElement, B, {
      tagName: oe,
      allowedTags: ne
    }), B.hasChildNodes() && !Di(B.firstElementChild) && mt(/<[/\w]/g, B.innerHTML) && mt(/<[/\w]/g, B.textContent) || B.nodeType === Vi.progressingInstruction || Oe && B.nodeType === Vi.comment && mt(/<[/\w]/g, B.data))
      return bt(B), !0;
    if (!ne[oe] || xe[oe]) {
      if (!xe[oe] && er(oe) && (ue.tagNameCheck instanceof RegExp && mt(ue.tagNameCheck, oe) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(oe)))
        return !1;
      if (bi && !en[oe]) {
        const Be = H(B) || B.parentNode, et = I(B) || B.childNodes;
        if (et && Be) {
          const Xe = et.length;
          for (let je = Xe - 1; je >= 0; --je) {
            const St = D(et[je], !0);
            St.__removalCount = (B.__removalCount || 0) + 1, Be.insertBefore(St, G(B));
          }
        }
      }
      return bt(B), !0;
    }
    return B instanceof m && !Pi(B) || (oe === "noscript" || oe === "noembed" || oe === "noframes") && mt(/<\/no(script|embed|frames)/i, B.innerHTML) ? (bt(B), !0) : (C && B.nodeType === Vi.text && (ee = B.textContent, Hs([T, F, P], (Be) => {
      ee = Yi(ee, Be, " ");
    }), B.textContent !== ee && (qi(r.removed, {
      element: B.cloneNode()
    }), B.textContent = ee)), nn(A.afterSanitizeElements, B, null), !1);
  }, Yr = function(B, ee, oe) {
    if (Ii && (ee === "id" || ee === "name") && (oe in e || oe in se))
      return !1;
    if (!(Qt && !Ae[ee] && mt(N, ee))) {
      if (!(V && mt(R, ee))) {
        if (!ce[ee] || Ae[ee]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(er(B) && (ue.tagNameCheck instanceof RegExp && mt(ue.tagNameCheck, B) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(B)) && (ue.attributeNameCheck instanceof RegExp && mt(ue.attributeNameCheck, ee) || ue.attributeNameCheck instanceof Function && ue.attributeNameCheck(ee)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            ee === "is" && ue.allowCustomizedBuiltInElements && (ue.tagNameCheck instanceof RegExp && mt(ue.tagNameCheck, oe) || ue.tagNameCheck instanceof Function && ue.tagNameCheck(oe)))
          ) return !1;
        } else if (!ke[ee]) {
          if (!mt(K, Yi(oe, z, ""))) {
            if (!((ee === "src" || ee === "xlink:href" || ee === "href") && B !== "script" && o2(oe, "data:") === 0 && ye[B])) {
              if (!(Le && !mt(Y, Yi(oe, z, "")))) {
                if (oe)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, er = function(B) {
    return B !== "annotation-xml" && Nh(B, j);
  }, vn = function(B) {
    nn(A.beforeSanitizeAttributes, B, null);
    const {
      attributes: ee
    } = B;
    if (!ee || Ri(B))
      return;
    const oe = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: ce,
      forceKeepAttr: void 0
    };
    let Be = ee.length;
    for (; Be--; ) {
      const et = ee[Be], {
        name: Xe,
        namespaceURI: je,
        value: St
      } = et, Rn = Ze(Xe);
      let tt = Xe === "value" ? St : u2(St);
      if (oe.attrName = Rn, oe.attrValue = tt, oe.keepAttr = !0, oe.forceKeepAttr = void 0, nn(A.uponSanitizeAttribute, B, oe), tt = oe.attrValue, Li && (Rn === "id" || Rn === "name") && (Bt(Xe, B), tt = Pn + tt), Oe && mt(/((--!?|])>)|<\/(style|title)/i, tt)) {
        Bt(Xe, B);
        continue;
      }
      if (oe.forceKeepAttr || (Bt(Xe, B), !oe.keepAttr))
        continue;
      if (!he && mt(/\/>/i, tt)) {
        Bt(Xe, B);
        continue;
      }
      C && Hs([T, F, P], (Mt) => {
        tt = Yi(tt, Mt, " ");
      });
      const Ls = Ze(B.nodeName);
      if (Yr(Ls, Rn, tt)) {
        if (J && typeof S == "object" && typeof S.getAttributeType == "function" && !je)
          switch (S.getAttributeType(Ls, Rn)) {
            case "TrustedHTML": {
              tt = J.createHTML(tt);
              break;
            }
            case "TrustedScriptURL": {
              tt = J.createScriptURL(tt);
              break;
            }
          }
        try {
          je ? B.setAttributeNS(je, Xe, tt) : B.setAttribute(Xe, tt), Ri(B) ? bt(B) : Th(r.removed);
        } catch {
        }
      }
    }
    nn(A.afterSanitizeAttributes, B, null);
  }, On = function ge(B) {
    let ee = null;
    const oe = vr(B);
    for (nn(A.beforeSanitizeShadowDOM, B, null); ee = oe.nextNode(); )
      nn(A.uponSanitizeShadowNode, ee, null), lt(ee), vn(ee), ee.content instanceof l && ge(ee.content);
    nn(A.afterSanitizeShadowDOM, B, null);
  };
  return r.sanitize = function(ge) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, ee = null, oe = null, Be = null, et = null;
    if (Ai = !ge, Ai && (ge = "<!-->"), typeof ge != "string" && !Di(ge))
      if (typeof ge.toString == "function") {
        if (ge = ge.toString(), typeof ge != "string")
          throw Hi("dirty is not a string, aborting");
      } else
        throw Hi("toString is not a function");
    if (!r.isSupported)
      return ge;
    if (Se || Kn(B), r.removed = [], typeof ge == "string" && (Ee = !1), Ee) {
      if (ge.nodeName) {
        const St = Ze(ge.nodeName);
        if (!ne[St] || xe[St])
          throw Hi("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (ge instanceof h)
      ee = Oi("<!---->"), oe = ee.ownerDocument.importNode(ge, !0), oe.nodeType === Vi.element && oe.nodeName === "BODY" || oe.nodeName === "HTML" ? ee = oe : ee.appendChild(oe);
    else {
      if (!pn && !C && !Pe && // eslint-disable-next-line unicorn/prefer-includes
      ge.indexOf("<") === -1)
        return J && te ? J.createHTML(ge) : ge;
      if (ee = Oi(ge), !ee)
        return pn ? null : te ? X : "";
    }
    ee && Fr && bt(ee.firstChild);
    const Xe = vr(Ee ? ge : ee);
    for (; Be = Xe.nextNode(); )
      lt(Be), vn(Be), Be.content instanceof l && On(Be.content);
    if (Ee)
      return ge;
    if (pn) {
      if (Gr)
        for (et = x.call(ee.ownerDocument); ee.firstChild; )
          et.appendChild(ee.firstChild);
      else
        et = ee;
      return (ce.shadowroot || ce.shadowrootmode) && (et = b.call(s, et, !0)), et;
    }
    let je = Pe ? ee.outerHTML : ee.innerHTML;
    return Pe && ne["!doctype"] && ee.ownerDocument && ee.ownerDocument.doctype && ee.ownerDocument.doctype.name && mt(Ed, ee.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + ee.ownerDocument.doctype.name + `>
` + je), C && Hs([T, F, P], (St) => {
      je = Yi(je, St, " ");
    }), J && te ? J.createHTML(je) : je;
  }, r.setConfig = function() {
    let ge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kn(ge), Se = !0;
  }, r.clearConfig = function() {
    kt = null, Se = !1;
  }, r.isValidAttribute = function(ge, B, ee) {
    kt || Kn({});
    const oe = Ze(ge), Be = Ze(B);
    return Yr(oe, Be, ee);
  }, r.addHook = function(ge, B) {
    typeof B == "function" && qi(A[ge], B);
  }, r.removeHook = function(ge, B) {
    if (B !== void 0) {
      const ee = s2(A[ge], B);
      return ee === -1 ? void 0 : a2(A[ge], ee, 1)[0];
    }
    return Th(A[ge]);
  }, r.removeHooks = function(ge) {
    A[ge] = [];
  }, r.removeAllHooks = function() {
    A = Gh();
  }, r;
}
var k2 = xd();
const S2 = (n, r, e) => {
  r.control && r.controlOptions ? e.options.toggleMode(r.control.type, r.control.targetMode) : re.error("Control or controlOptions not defined", r.control, r.controlOptions);
};
var M2 = /* @__PURE__ */ dn("<div><!></div>"), I2 = /* @__PURE__ */ dn('<div class="control-container svelte-1rd72r"><button type="button"><!></button> <!></div>');
function L2(n, r) {
  var m;
  xi(r, !0);
  const e = (m = r.controlOptions) != null && m.icon ? k2.sanitize(r.controlOptions.icon.trim()) : null, s = sl("gm"), u = s.control.getDefaultPosition();
  var l = vi(), f = lr(l);
  {
    var h = (d) => {
      var v = I2(), y = ar(v);
      let E;
      y.__click = [S2, r, s];
      var S = ar(y);
      {
        var M = (I) => {
          var H = vi(), J = lr(H);
          Aw(J, () => e), Ke(I, H);
        }, D = (I, H) => {
          {
            var J = (W) => {
              var $ = Sh();
              Un((x) => oi($, x), [
                () => r.controlOptions.title.slice(0, 2)
              ]), Ke(W, $);
            }, X = (W) => {
              var $ = Sh();
              Un(() => oi($, r.control.targetMode)), Ke(W, $);
            };
            In(
              I,
              (W) => {
                r.controlOptions.title ? W(J) : W(X, !1);
              },
              H
            );
          }
        };
        In(S, (I) => {
          r.controlOptions.icon ? I(M) : I(D, !1);
        });
      }
      var U = Ma(y, 2);
      {
        var G = (I) => {
          var H = M2();
          let J;
          var X = ar(H);
          t2(X, {
            get control() {
              return r.control;
            }
          }), Un((W, $) => J = fu(H, 1, "control-menu svelte-1rd72r", null, J, { "menu-right": W, "menu-left": $ }), [
            () => u.endsWith("left"),
            () => u.endsWith("right")
          ]), Ke(I, H);
        };
        In(U, (I) => {
          r.controlOptions.active && I(G);
        });
      }
      Un(() => {
        Mr(y, "id", `id_${r.control.type}_${r.control.targetMode}`), E = fu(y, 1, `gm-control-button ${r.control.type}-${r.control.targetMode}`, "svelte-1rd72r", E, { active: r.controlOptions.active }), Mr(y, "title", r.controlOptions.title);
      }), Ke(d, v);
    };
    In(f, (d) => {
      r.control && r.controlOptions && r.controlOptions.uiEnabled && d(h);
    });
  }
  Ke(n, l), wi();
}
hl(["click"]);
var b2 = /* @__PURE__ */ dn("<div></div>"), A2 = /* @__PURE__ */ dn('<div class="gm-reactive-controls svelte-blwgmu"></div>');
function C2(n, r) {
  xi(r, !1);
  const [e, s] = Gw(), u = () => Fw(du, "$controlsStore", e), f = `${sl("gm").mapAdapter.mapType}gl`;
  let h = u(), m = h.controls, d = Zx(h.options);
  const v = du.subscribe((S) => {
    m = S.controls, ut(d, S.options);
  });
  Bw(v);
  const y = (S, M) => {
    const D = m == null ? void 0 : m[S];
    return (D == null ? void 0 : D[M]) || null;
  };
  Dw();
  var E = A2();
  vs(E, 5, () => Object.entries(Te(d)), ms, (S, M) => {
    let D = () => Te(M)[0], U = () => Te(M)[1];
    var G = b2();
    vs(G, 5, () => Object.entries(U()), ms, (I, H) => {
      let J = () => Te(H)[0], X = () => Te(H)[1];
      var W = vi();
      const $ = /* @__PURE__ */ Wg(() => y(D(), J()));
      var x = lr(W);
      {
        var k = (b) => {
          L2(b, {
            get control() {
              return Te($);
            },
            get controlOptions() {
              return X();
            }
          });
        };
        In(x, (b) => {
          Te($) && b(k);
        });
      }
      Ke(I, W);
    }), Un(() => fu(G, 1, `${f}-ctrl ${f}-ctrl-group group-${D()}`, "svelte-blwgmu")), Ke(S, G);
  }), Ke(n, E), wi(), s();
}
class T2 {
  constructor(r) {
    O(this, "gm");
    this.gm = r;
  }
}
class N2 extends T2 {
  constructor() {
    super(...arguments);
    O(this, "controls", hn(gf));
    O(this, "reactiveControls", null);
    O(this, "container");
    O(this, "mapEventHandlers", {
      [`${me}:draw`]: this.handleModeEvent.bind(this),
      [`${me}:edit`]: this.handleModeEvent.bind(this),
      [`${me}:helper`]: this.handleModeEvent.bind(this)
    });
  }
  onAdd() {
    if (this.createControls(), this.gm.events.bus.attachEvents(this.mapEventHandlers), !this.container)
      throw new Error("Controls container is not initialized");
    return this.container;
  }
  createControls(e = void 0) {
    if (this.controlsAdded()) {
      re.warn("Can't add controls: controls already added");
      return;
    }
    this.container = e || this.createHtmlContainer(), this.createReactivePanel();
  }
  onRemove() {
    this.gm.events.bus.detachEvents(this.mapEventHandlers), this.reactiveControls && (Sw(this.reactiveControls), this.reactiveControls = null), this.container && this.container.parentNode && this.container.parentNode.removeChild(this.container), this.container = void 0;
  }
  handleModeEvent(e) {
    return Wu(e) ? (["mode_started", "mode_ended"].includes(e.action) && this.updateReactivePanel(), { next: !0 }) : { next: !0 };
  }
  controlsAdded() {
    return !!this.reactiveControls;
  }
  createReactivePanel() {
    if (!this.container) {
      re.error("Can't create reactive panel: container is not initialized");
      return;
    }
    this.syncModeStates();
    const e = /* @__PURE__ */ new Map();
    e.set("gm", this.gm), this.reactiveControls = ww(
      C2,
      {
        target: this.container,
        context: e
      }
    ), this.updateReactivePanel();
  }
  updateReactivePanel() {
    du.update(() => ({
      controls: this.controls,
      options: this.gm.options.controls
    }));
  }
  createHtmlContainer() {
    const e = document.createElement("div");
    return e.classList.add("geoman-controls"), e;
  }
  syncModeStates() {
    this.eachControlWithOptions(({ control: e }) => {
      this.gm.options.syncModeState(e.type, e.targetMode);
    });
  }
  eachControlWithOptions(e) {
    return ft(this.controls).forEach((s) => {
      const u = this.controls[s];
      return Object.keys(u).forEach((l) => {
        const f = l, h = this.getControl({ actionType: s, modeName: f }), m = this.gm.options.getControlOptions({ actionType: s, modeName: f });
        h && m && e({ control: h, controlOptions: m });
      });
    });
  }
  getControl({ actionType: e, modeName: s }) {
    return e && s && this.controls[e][s] || null;
  }
  getDefaultPosition() {
    return this.gm.options.settings.controlsPosition;
  }
}
const P2 = `_${me}`;
class O2 {
  constructor(r) {
    O(this, "gm");
    O(this, "globalEventsListener", null);
    this.gm = r;
  }
  get map() {
    return this.gm.mapAdapter.getMapInstance();
  }
  processEvent(r, e) {
    this.fireToMap(
      "system",
      r.split(":")[1],
      { ...e, level: "user" }
    ), e.action === "mode_start" || e.action === "mode_end" ? this.forwardModeToggledEvent(e) : e.action === "feature_created" ? this.forwardFeatureCreated(e) : e.action === "feature_removed" ? this.forwardFeatureRemoved(e) : e.action === "feature_updated" ? this.forwardFeatureUpdated(e) : e.action === "feature_edit_start" ? this.forwardFeatureEditStart(e) : e.action === "feature_edit_end" ? this.forwardFeatureEditEnd(e) : (e.action === "loaded" || e.action === "unloaded") && this.forwardGeomanLoaded(e);
  }
  forwardModeToggledEvent(r) {
    const e = r.action === "mode_start";
    let s;
    if (r.type === "draw") {
      const u = "globaldrawmodetoggled";
      s = { enabled: e, shape: r.mode, map: this.map }, this.fireToMap("converted", u, s), s = { shape: r.mode, map: this.map }, this.fireToMap("converted", e ? "drawstart" : "drawend", s);
    } else if (r.type === "edit") {
      const u = this.getConvertedEditModeName(r.mode);
      s = { enabled: e, map: this.map }, this.fireToMap("converted", `global${u}modetoggled`, s);
    } else r.type === "helper" && (s = { enabled: e, map: this.map }, this.fireToMap("converted", `global${r.mode}modetoggled`, s));
  }
  forwardFeatureCreated(r) {
    const e = {
      shape: r.mode,
      feature: r.featureData,
      map: this.map
    };
    this.fireToMap("converted", "create", e);
  }
  forwardFeatureRemoved(r) {
    const e = {
      shape: r.mode,
      feature: r.featureData,
      map: this.map
    };
    this.fireToMap("converted", "remove", e);
  }
  forwardFeatureUpdated(r) {
    const e = ["lasso"], s = {
      map: this.map
    };
    r.sourceFeatures.length === 1 && !e.includes(r.mode) ? s.originalFeature = r.sourceFeatures[0] : s.originalFeatures = r.sourceFeatures, r.targetFeatures.length === 1 && !e.includes(r.mode) ? (s.feature = r.targetFeatures[0], s.shape = s.feature.shape) : s.features = r.targetFeatures;
    const u = this.getConvertedEditModeName(r.mode);
    this.fireToMap("converted", `${u}`, s);
  }
  forwardFeatureEditStart(r) {
    const e = this.getConvertedEditModeName(r.mode), s = {
      shape: r.feature.shape,
      feature: r.feature,
      map: this.map
    };
    this.fireToMap("converted", `${e}start`, s);
  }
  forwardFeatureEditEnd(r) {
    const e = this.getConvertedEditModeName(r.mode), s = {
      shape: r.feature.shape,
      feature: r.feature,
      map: this.map
    };
    this.fireToMap("converted", `${e}end`, s);
  }
  forwardGeomanLoaded(r) {
    this.fireToMap(
      "converted",
      `${r.action}`,
      { map: this.map, [me]: this.gm }
    );
  }
  fireToMap(r, e, s) {
    const l = `${r === "system" ? P2 : me}:${e}`;
    this.globalEventsListener && this.globalEventsListener({ type: r, name: l, payload: s }), this.gm.mapAdapter.fire(l, s);
  }
  getConvertedEditModeName(r) {
    return r === "change" ? "edit" : r;
  }
}
class R2 {
  constructor(r) {
    O(this, "gm");
    O(this, "forwarder");
    O(this, "mapEventHandlers", {});
    O(this, "gmEventHandlers", {});
    this.gm = r, this.forwarder = new O2(r);
  }
  fireEvent(r, e) {
    const s = this.gmEventHandlers[r];
    if (!s)
      return;
    const { controlHandler: u } = s;
    u(e), this.forwarder.processEvent(r, e);
  }
  attachEvents(r) {
    ft(r).forEach((e) => {
      const s = r[e];
      s && this.on(e, s);
    });
  }
  detachEvents(r) {
    ft(r).forEach((e) => {
      const s = r[e];
      s && this.off(e, s);
    });
  }
  detachAllEvents() {
    ft(this.gmEventHandlers).forEach((r) => {
      var s;
      Array.from(((s = this.gmEventHandlers[r]) == null ? void 0 : s.handlers) || []).forEach((u) => {
        this.off(r, u);
      });
    }), ft(this.mapEventHandlers).forEach((r) => {
      var s;
      Array.from(((s = this.mapEventHandlers[r]) == null ? void 0 : s.handlers) || []).forEach((u) => {
        this.off(r, u);
      });
    });
  }
  on(r, e) {
    r.startsWith(me) ? this.onGmEvent(r, e) : this.onMapEvent(r, e);
  }
  onGmEvent(r, e) {
    var s;
    this.gmEventHandlers[r] || (this.gmEventHandlers[r] = this.createEventSection(r)), (s = this.gmEventHandlers[r]) == null || s.handlers.unshift(e);
  }
  onMapEvent(r, e) {
    var s;
    if (!this.mapEventHandlers[r]) {
      const u = this.createEventSection(r);
      this.gm.mapAdapter.on(r, u.controlHandler), this.mapEventHandlers[r] = u;
    }
    (s = this.mapEventHandlers[r]) == null || s.handlers.unshift(e);
  }
  off(r, e) {
    r.startsWith(`${me}`) ? this.offGmEvent(r, e) : this.offMapEvent(r, e);
  }
  offGmEvent(r, e) {
    var l;
    const s = ((l = this.gmEventHandlers[r]) == null ? void 0 : l.handlers) || [], u = s.findIndex(
      (f) => e === f
    );
    u === -1 ? re.warn("MapEvents: handler not found", r, e) : (s.splice(u, 1), s.length === 0 && delete this.gmEventHandlers[r]);
  }
  offMapEvent(r, e) {
    var l, f;
    const s = ((l = this.mapEventHandlers[r]) == null ? void 0 : l.handlers) || [], u = s.findIndex(
      (h) => e === h
    );
    if (u === -1)
      re.warn("MapEvents: handler not found", r, e);
    else if (s.splice(u, 1), s.length === 0) {
      const h = (f = this.mapEventHandlers[r]) == null ? void 0 : f.controlHandler;
      h && this.gm.mapAdapter.off(r, h), delete this.mapEventHandlers[r];
    }
  }
  createEventSection(r) {
    return {
      handlers: [],
      controlHandler: (e) => {
        let s;
        if ($t(e) && r.startsWith(`${me}`) ? s = this.gmEventHandlers[r] : s = this.mapEventHandlers[r], !s) {
          re.debug(`No handlers for eventName: "${r}"`);
          return;
        }
        s.handlers.some((u) => {
          let l;
          return $t(e), l = u(e), l && typeof l == "object" && "next" in l ? !l.next : (re.error('EventsBus: handler should return an object with a "next" property'), !1);
        });
      }
    };
  }
}
class D2 extends Za {
  constructor(e, s) {
    super(e);
    O(this, "mapEventHandlers", {
      [`${me}:control`]: this.handleControlEvent.bind(this)
    });
    s.attachEvents(this.mapEventHandlers);
  }
  handleControlEvent(e) {
    return Ng(e) ? (this.getControl(e) || re.error("Control not found, event payload", e), { next: !0 }) : { next: !0 };
  }
}
const wd = [
  "drag",
  "change",
  "rotate",
  "scale",
  "copy",
  "cut",
  "split",
  "union",
  "difference",
  "line_simplification",
  "lasso",
  "delete"
];
class Si extends Zu {
  constructor() {
    super(...arguments);
    O(this, "actionType", "edit");
    O(this, "featureData", null);
    O(this, "cursorExcludedLayerIds", [
      "rectangle-line",
      "polygon-line",
      "circle-line"
    ]);
    O(this, "layerEventHandlersData", []);
  }
  startAction() {
    this.setEventsForLayers("mouseenter", this.setCursorToPointer.bind(this)), this.setEventsForLayers("mouseleave", this.setCursorToEmpty.bind(this)), super.startAction();
  }
  endAction() {
    this.clearEventsForLayers(), super.endAction();
  }
  setCursorToPointer() {
    this.gm.mapAdapter.setCursor("pointer");
  }
  setCursorToEmpty() {
    this.gm.mapAdapter.setCursor("");
  }
  setEventsForLayers(e, s) {
    this.gm.features.layers.map((l) => l.id).filter(
      (l) => !this.cursorExcludedLayerIds.some((f) => l.includes(f))
    ).forEach((l) => {
      this.gm.mapAdapter.on(e, l, s), this.layerEventHandlersData.push({ eventName: e, layerId: l, callback: s });
    });
  }
  clearEventsForLayers() {
    this.layerEventHandlersData.forEach(({ eventName: e, layerId: s, callback: u }) => {
      this.gm.mapAdapter.off(e, s, u);
    }), this.layerEventHandlersData = [];
  }
  updateFeatureGeoJson({ featureData: e, featureGeoJson: s, forceMode: u = void 0 }) {
    if (!this.flags.featureUpdateAllowed)
      return !1;
    const l = s.properties;
    return l.shape === "circle" && l.center && e.setShapeProperty("center", l.center), l.shape === "ellipse" && l._gm_shape_center && (e.setShapeProperty("center", l._gm_shape_center), e.setShapeProperty("xSemiAxis", l._gm_shape_xSemiAxis), e.setShapeProperty("ySemiAxis", l._gm_shape_ySemiAxis), e.setShapeProperty("angle", l._gm_shape_angle)), e.updateGeoJsonGeometry(s.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e],
      targetFeatures: [e],
      forceMode: u
    }), !0;
  }
  fireFeatureUpdatedEvent({ sourceFeatures: e, targetFeatures: s, markerData: u = void 0, forceMode: l = void 0 }) {
    const f = {
      level: "system",
      type: "edit",
      action: "feature_updated",
      mode: l || this.mode,
      sourceFeatures: e,
      targetFeatures: s,
      markerData: u || null
    };
    this.gm.events.fire(`${me}:edit`, f);
  }
  fireFeatureEditStartEvent({ feature: e, forceMode: s = void 0 }) {
    const u = {
      level: "system",
      type: "edit",
      action: "feature_edit_start",
      mode: s || this.mode,
      feature: e
    };
    this.gm.events.fire(`${me}:edit`, u);
  }
  fireFeatureEditEndEvent({ feature: e, forceMode: s = void 0 }) {
    const u = {
      level: "system",
      type: "edit",
      action: "feature_edit_end",
      mode: s || this.mode,
      feature: e
    };
    this.gm.events.fire(`${me}:edit`, u);
  }
  fireMarkerPointerUpdateEvent() {
    if (!this.gm.markerPointer.marker)
      return;
    const e = this.gm.markerPointer.marker, s = {
      level: "system",
      variant: null,
      type: "draw",
      mode: this.getLineDrawerMode(),
      action: "update",
      markerData: {
        type: "dom",
        instance: e,
        position: {
          coordinate: e.getLngLat(),
          path: [-1]
        }
      },
      featureData: null
    };
    this.gm.events.fire(`${me}:draw`, s);
  }
  forwardLineDrawerEvent(e) {
    if (!Pg(e) || !["cut", "split"].includes(this.mode))
      return { next: !0 };
    if (e.action === "start" || e.action === "update") {
      const s = {
        level: "system",
        type: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action,
        featureData: e.featureData,
        markerData: e.markerData
      };
      this.gm.events.fire(`${me}:draw`, s);
    } else if (e.action === "finish" || e.action === "cancel") {
      const s = {
        level: "system",
        type: "draw",
        mode: this.getLineDrawerMode(),
        variant: null,
        action: e.action
      };
      this.gm.events.fire(`${me}:draw`, s);
    }
    return { next: !0 };
  }
  fireFeatureRemovedEvent(e) {
    if (Ir(e.shape, as)) {
      const s = {
        level: "system",
        type: "edit",
        mode: e.shape,
        action: "feature_removed",
        featureData: e
      };
      this.gm.events.fire(`${me}:edit`, s);
    }
  }
  getLineDrawerMode() {
    return this.mode === "cut" ? "polygon" : (this.mode === "split", "line");
  }
}
const kd = [
  "shape_markers",
  "pin",
  "snapping",
  "snap_guides",
  "measurements",
  "auto_trace",
  "geofencing",
  "zoom_to_features",
  "click_to_edit"
];
class pr extends Zu {
  constructor() {
    super(...arguments);
    O(this, "actionType", "helper");
  }
}
const Mi = (n) => $t(n) && n.type === "edit", F2 = (n) => vx.includes(n), G2 = (n) => Og.includes(n), B2 = (n) => wd.includes(n), U2 = (n) => kd.includes(n), z2 = (n) => G2(n) || B2(n) || U2(n);
class q2 extends Za {
  constructor(e, s) {
    super(e);
    O(this, "mapEventHandlers", {
      [`${me}:draw`]: this.handleDrawEvent.bind(this)
    });
    s.attachEvents(this.mapEventHandlers);
  }
  handleDrawEvent(e) {
    if (!ju(e))
      return { next: !0 };
    const s = `${e.type}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(s, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(s)), { next: !0 };
  }
  start(e, s) {
    const u = this.gm.createDrawInstance(s.mode);
    u && (e in this.gm.actionInstances && re.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = u, u.startAction());
  }
  end(e) {
    const s = this.gm.actionInstances[e];
    s instanceof Wn ? (s.endAction(), delete this.gm.actionInstances[e]) : console.error(
      `Wrong action instance for draw event "${e}":`,
      s
    );
  }
}
class Y2 extends Za {
  constructor(e, s) {
    super(e);
    O(this, "mapEventHandlers", {
      [`${me}:edit`]: this.handleEditEvent.bind(this)
    });
    s.attachEvents(this.mapEventHandlers);
  }
  handleEditEvent(e) {
    if (!Mi(e))
      return { next: !0 };
    const s = `${e.type}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(s, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(s)), { next: !0 };
  }
  start(e, s) {
    if (s.action !== "mode_start")
      return;
    const u = this.gm.createEditInstance(s.mode);
    u && (e in this.gm.actionInstances && re.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = u, u.startAction());
  }
  end(e) {
    const s = this.gm.actionInstances[e];
    s instanceof Si ? (s.endAction(), delete this.gm.actionInstances[e]) : console.error(
      `Wrong action instance for edit event "${e}": `,
      s
    );
  }
}
class H2 extends Za {
  constructor(e, s) {
    super(e);
    O(this, "mapEventHandlers", {
      [`${me}:helper`]: this.handleHelperEvent.bind(this)
    });
    s.attachEvents(this.mapEventHandlers);
  }
  handleHelperEvent(e) {
    if (!ja(e))
      return { next: !0 };
    const s = `${e.type}__${e.mode}`;
    return e.action === "mode_start" ? (this.trackExclusiveModes(e), this.start(s, e), this.trackRelatedModes(e)) : e.action === "mode_end" && (this.trackRelatedModes(e), this.end(s)), { next: !0 };
  }
  start(e, s) {
    const u = this.gm.createHelperInstance(s.mode);
    u && (e in this.gm.actionInstances && re.error(`Action instance "${e}" already exists`), this.gm.actionInstances[e] = u, u.startAction());
  }
  end(e) {
    const s = this.gm.actionInstances[e];
    s instanceof pr ? (s.endAction(), delete this.gm.actionInstances[e]) : console.error(
      `Wrong action instance for edit event "${e}":`,
      s
    );
  }
}
class J2 {
  constructor(r) {
    O(this, "gm");
    O(this, "bus");
    O(this, "listeners", {});
    this.gm = r, this.bus = new R2(this.gm), this.listeners = {
      draw: new q2(this.gm, this.bus),
      edit: new Y2(this.gm, this.bus),
      helper: new H2(this.gm, this.bus),
      control: new D2(this.gm, this.bus)
    };
  }
  fire(r, e) {
    this.listeners[e.type] || re.error(`Can't find event listener for "${e.type}" event type`), this.bus.fireEvent(r, e);
  }
}
class V2 {
  getEuclideanNearestLngLat(r, e) {
    const s = this.project(e);
    let u = [0, 0], l = 1 / 0;
    return Yu(r, (f) => {
      const h = this.project(f.start.coordinate), m = this.project(f.end.coordinate), d = K_(
        h,
        m,
        s
      ), v = Ks(s, d);
      v < l && (l = v, u = [d[0], d[1]]);
    }), this.unproject(u);
  }
  getDistance(r, e) {
    return bf(r, e, { units: "meters" });
  }
}
class X2 {
  isInstanceAvailable() {
    return this.layerInstance ? !0 : (re.error("layerInstance is not available"), !1);
  }
}
class Oo extends X2 {
  constructor({ gm: e, layerId: s, options: u }) {
    super();
    O(this, "gm");
    O(this, "layerInstance", null);
    O(this, "mapInstance");
    this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, u ? this.layerInstance = this.createLayer(u) : this.layerInstance = this.mapInstance.getLayer(s) || null;
  }
  get id() {
    if (!this.isInstanceAvailable())
      throw new Error("Layer instance is not available");
    return this.layerInstance.id;
  }
  get source() {
    if (!this.isInstanceAvailable())
      throw new Error("Layer instance is not available");
    return this.layerInstance.source;
  }
  createLayer(e) {
    return this.mapInstance.addLayer(e), this.mapInstance.getLayer(e.id) || null;
  }
  remove() {
    this.isInstanceAvailable() && this.mapInstance.removeLayer(this.id), this.layerInstance = null;
  }
}
class W2 extends ku {
  constructor({ mapInstance: e, options: s, lngLat: u }) {
    super();
    O(this, "markerInstance");
    this.markerInstance = new wu.Marker(s).setLngLat(u).addTo(e);
  }
  getElement() {
    var e;
    return this.isMarkerInstanceAvailable() && ((e = this.markerInstance) == null ? void 0 : e.getElement()) || null;
  }
  setLngLat(e) {
    var s;
    this.isMarkerInstanceAvailable() && ((s = this.markerInstance) == null || s.setLngLat(e));
  }
  getLngLat() {
    var e;
    return this.isMarkerInstanceAvailable() ? ((e = this.markerInstance) == null ? void 0 : e.getLngLat().toArray()) || [0, 0] : [0, 0];
  }
  remove() {
    var e;
    (e = this.markerInstance) == null || e.remove();
  }
}
class Z2 {
  isInstanceAvailable() {
    return this.popupInstance ? !0 : (re.error("Popup instance is not available"), !1);
  }
}
class j2 extends Z2 {
  constructor({ mapInstance: e, options: s, lngLat: u }) {
    super();
    O(this, "popupInstance");
    this.popupInstance = new wu.Popup(s).addTo(e), u && this.setLngLat(u);
  }
  getLngLat() {
    return this.isInstanceAvailable() ? this.popupInstance.getLngLat().toArray() || [0, 0] : [0, 0];
  }
  setLngLat(e) {
    this.isInstanceAvailable() && this.popupInstance.setLngLat(e);
  }
  setHtml(e) {
    this.isInstanceAvailable() && this.popupInstance.setHTML(e);
  }
  remove() {
    this.isInstanceAvailable() && this.popupInstance.remove();
  }
}
function $2(n, r) {
  const e = n ?? { add: [], update: [], remove: [] }, s = r ?? { add: [], update: [], remove: [] }, u = new Set(s.remove), l = e.add.filter((m) => !u.has(m.id)), f = e.update.filter((m) => !u.has(m.id)), h = [];
  return s.update.forEach((m) => {
    const d = l.findIndex((y) => y.id === m.id), v = f.findIndex((y) => y.id === m.id);
    if (d === -1 && v === -1) {
      h.push(m);
      return;
    }
    d !== -1 && (l[d] = m), v !== -1 && (f[v] = m);
  }), {
    add: [...l, ...s.add],
    update: [...f, ...h],
    remove: [...e.remove, ...s.remove]
  };
}
class Bh extends dx {
  constructor({ gm: e, geoJson: s, sourceId: u }) {
    super();
    O(this, "gm");
    O(this, "mapInstance");
    O(this, "sourceInstance");
    O(this, "pendingUpdateStorage", null);
    O(this, "mlSourceDiff", null);
    O(this, "updateTimeout", null);
    O(this, "updateData", (e) => {
      if (!this.isInstanceAvailable())
        return;
      const s = $2(this.pendingUpdateStorage, e ?? null);
      if (this.updateTimeout && (window.clearTimeout(this.updateTimeout), this.updateTimeout = null), this.sourceInstance._pendingLoads === 0) {
        this.pendingUpdateStorage = null;
        const u = this.convertGeoJsonDiffToMlDiff(s);
        this.sourceInstance.updateData(u);
      } else
        this.pendingUpdateStorage = s, this.updateTimeout = window.setTimeout(this.updateData, 15);
    });
    this.gm = e, this.mapInstance = this.gm.mapAdapter.mapInstance, s ? this.sourceInstance = this.createSource({ geoJson: s, sourceId: u }) : this.sourceInstance = this.mapInstance.getSource(u) || null;
  }
  get id() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.id;
  }
  createSource({ geoJson: e, sourceId: s }) {
    let u = this.mapInstance.getSource(s);
    return u || (this.mapInstance.addSource(s, {
      type: "geojson",
      data: e,
      promoteId: Lr
    }), u = this.mapInstance.getSource(s)), u ?? null;
  }
  getGeoJson() {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.serialize().data;
  }
  setGeoJson(e) {
    if (!this.isInstanceAvailable())
      throw new Error("Source instance is not available");
    return this.sourceInstance.setData(e);
  }
  convertGeoJsonDiffToMlDiff(e) {
    return {
      add: e.add,
      update: e.update.map(this.convertFeatureToMlUpdateDiff.bind(this)),
      remove: e.remove
    };
  }
  convertFeatureToMlUpdateDiff(e) {
    const s = Object.entries(e.properties || {}).map((u) => ({ key: u[0], value: u[1] }));
    return {
      id: e.id,
      newGeometry: e.geometry,
      addOrUpdateProperties: s
    };
  }
  remove({ removeLayers: e }) {
    this.isInstanceAvailable() && (e && this.gm.mapAdapter.eachLayer((s) => {
      s.source === this.sourceInstance.id && this.gm.mapAdapter.removeLayer(s.id);
    }), this.mapInstance.removeSource(this.sourceInstance.id));
  }
}
const K2 = [
  "click",
  "dblclick",
  "mousedown",
  "mouseup",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "contextmenu",
  "touchstart",
  "touchend",
  "touchcancel"
], Ro = (n) => K2.includes(n);
class Q2 extends V2 {
  constructor(e, s) {
    super();
    O(this, "gm");
    O(this, "mapType", "maplibre");
    O(this, "mapInstance");
    this.gm = s, this.mapInstance = e;
  }
  getMapInstance() {
    return this.mapInstance;
  }
  isLoaded() {
    return this.mapInstance.loaded();
  }
  getContainer() {
    return this.mapInstance.getContainer();
  }
  getCanvas() {
    return this.mapInstance.getCanvas();
  }
  addControl(e) {
    this.mapInstance.addControl(e);
  }
  removeControl(e) {
    this.mapInstance.removeControl(e);
  }
  async loadImage({ id: e, image: s }) {
    const u = await this.mapInstance.loadImage(s);
    this.mapInstance.addImage(e, u.data);
  }
  getBounds() {
    return this.mapInstance.getBounds().toArray();
  }
  fitBounds(e, s) {
    this.mapInstance.fitBounds(e, s);
  }
  setCursor(e) {
    this.mapInstance.getCanvas().style.cursor = e;
  }
  disableMapInteractions(e) {
    e.forEach((s) => {
      this.mapInstance[s].disable();
    });
  }
  enableMapInteractions(e) {
    e.forEach((s) => {
      this.mapInstance[s].enable();
    });
  }
  setDragPan(e) {
    e ? this.mapInstance.dragPan.enable() : this.mapInstance.dragPan.disable();
  }
  queryFeaturesByScreenCoordinates({ queryCoordinates: e = void 0, sourceNames: s }) {
    return Rc(this.mapInstance.queryRenderedFeatures(e).map((l) => ({
      featureId: l.properties[Lr],
      featureSourceName: l.source
    })), Va).map(({ featureId: l, featureSourceName: f }) => l === void 0 || !s.includes(f) ? null : this.gm.features.get(f, l) || null).filter((l) => !!l);
  }
  queryGeoJsonFeatures({ queryCoordinates: e = void 0, sourceNames: s }) {
    const u = (f, h) => (f == null ? void 0 : f.id) === (h == null ? void 0 : h.id);
    return Rc(this.mapInstance.queryRenderedFeatures(e).map((f) => {
      const h = this.convertToGeoJsonImportFeature(f);
      return h ? {
        id: f.properties[Lr],
        sourceName: f.source,
        geoJson: h
      } : null;
    }), u).filter(
      (f) => !!f && f.id !== void 0 && f.geoJson && s.includes(f.sourceName)
    );
  }
  convertToGeoJsonImportFeature(e) {
    const s = e.properties[Lr];
    return s === void 0 || e.geometry.type === "GeometryCollection" ? null : {
      id: s,
      type: "Feature",
      properties: e.properties,
      geometry: e.geometry
    };
  }
  addSource(e, s) {
    return new Bh({ gm: this.gm, sourceId: e, geoJson: s });
  }
  getSource(e) {
    return new Bh({ gm: this.gm, sourceId: e });
  }
  addLayer(e) {
    const s = e.id;
    return new Oo({ gm: this.gm, layerId: s, options: e });
  }
  getLayer(e) {
    return new Oo({ gm: this.gm, layerId: e });
  }
  removeLayer(e) {
    const s = this.getLayer(e);
    s && s.remove();
  }
  eachLayer(e) {
    this.mapInstance.getStyle().layers.forEach((s) => {
      e(new Oo({ gm: this.gm, layerId: s.id }));
    });
  }
  createDomMarker(e, s) {
    return new W2({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: s
    });
  }
  createPopup(e, s) {
    return new j2({
      mapInstance: this.mapInstance,
      options: e,
      lngLat: s
    });
  }
  project(e) {
    const s = this.mapInstance.project(e);
    return [s.x, s.y];
  }
  unproject(e) {
    const s = this.mapInstance.unproject(e);
    return [s.lng, s.lat];
  }
  coordBoundsToScreenBounds(e) {
    const s = new wu.LngLatBounds(e), u = this.project(s.getSouthWest().toArray()), l = this.project(s.getNorthEast().toArray());
    return [u, l];
  }
  fire(e, s) {
    this.mapInstance.fire(e, s);
  }
  on(e, s, u) {
    if (typeof s == "string" && u && Ro(e))
      this.mapInstance.on(e, s, u);
    else if (typeof s == "function")
      this.mapInstance.on(e, s);
    else
      throw new Error("Invalid arguments passed to 'on' method");
  }
  once(e, s, u) {
    if (typeof s == "string" && u && Ro(e))
      this.mapInstance.once(e, s, u);
    else if (typeof s == "function")
      this.mapInstance.once(e, s);
    else
      throw new Error("Invalid arguments passed to 'once' method.");
  }
  off(e, s, u) {
    if (typeof s == "string" && u && Ro(e))
      this.mapInstance.off(e, s, u);
    else if (typeof s == "function")
      this.mapInstance.off(e, s);
    else
      throw new Error("Invalid arguments passed to 'off' method");
  }
}
const ek = async (n, r) => new Q2(r, n), tk = (n, r) => {
  if (Array.isArray(n) && Array.isArray(r)) {
    const e = F_(n, "type");
    return r.forEach((s) => {
      e[s.type] ? G_(e[s.type], s) : e[s.type] = hn(s);
    }), N_(e);
  }
};
class nk {
  constructor(r, e) {
    O(this, "gm");
    O(this, "settings");
    O(this, "controls");
    O(this, "layerStyles");
    this.gm = r;
    const s = this.getMergedOptions(e);
    this.settings = s.settings, this.controls = s.controls, this.layerStyles = s.layerStyles;
  }
  getMergedOptions(r = {}) {
    return b_(
      Dg(),
      r,
      tk
    );
  }
  enableMode(r, e) {
    const s = this.isModeEnabled(r, e), u = this.isModeAvailable(r, e);
    if (u || re.warn(`Unable to enable mode, "${r}:${e}" is not available`), s || !u)
      return;
    const f = this.controls[r][e];
    f ? (f.active = !0, this.fireModeEvent(r, e, "mode_start"), this.fireControlEvent(r, e, "on"), this.fireModeEvent(r, e, "mode_started")) : re.error("Can't find control section for", r, e);
  }
  disableMode(r, e) {
    const s = this.isModeEnabled(r, e), u = this.isModeAvailable(r, e);
    if (!s || !u)
      return;
    const f = this.controls[r][e];
    f ? (f.active = !1, this.fireModeEvent(r, e, "mode_end"), this.fireControlEvent(r, e, "off"), this.fireModeEvent(r, e, "mode_ended")) : re.error("Can't find control section for", r, e);
  }
  syncModeState(r, e) {
    const u = this.controls[r][e], l = this.isModeAvailable(r, e);
    u && (l ? u.active ? this.enableMode(r, e) : this.disableMode(r, e) : (console.log(`Not available mode: ${r}:${e}`), u.active = !1, u.uiEnabled = !1));
  }
  toggleMode(r, e) {
    this.isModeEnabled(r, e) ? this.disableMode(r, e) : this.enableMode(r, e);
  }
  isModeEnabled(r, e) {
    return !!Object.entries(this.gm.actionInstances).find(([s, u]) => s === `${r}__${e}` && u);
  }
  isModeAvailable(r, e) {
    return r === "draw" && Ir(e, Og) ? !!this.gm.drawClassMap[e] : r === "edit" && Ir(e, wd) ? !!this.gm.editClassMap[e] : r === "helper" && Ir(e, kd) ? !!this.gm.helperClassMap[e] : !1;
  }
  getControlOptions({ actionType: r, modeName: e }) {
    return r && e && this.controls[r][e] || null;
  }
  fireModeEvent(r, e, s) {
    const u = {
      level: "system",
      type: r,
      mode: e,
      action: s
    };
    Wu(u) && (ju(u) ? this.gm.events.fire(`${me}:${r}`, u) : Mi(u) ? this.gm.events.fire(`${me}:${r}`, u) : ja(u) && this.gm.events.fire(`${me}:${r}`, u));
  }
  fireControlEvent(r, e, s) {
    const u = {
      level: "system",
      type: "control",
      section: r,
      target: e,
      action: s
    };
    this.gm.events.fire(`${me}:control`, u);
  }
}
class fl extends Wn {
  constructor() {
    super(...arguments);
    O(this, "mode", "circle");
    O(this, "shape", "circle");
    O(this, "circleCenterPoint", null);
    O(this, "circleCenterLngLat", null);
    O(this, "mapEventHandlers", {
      mousemove: this.onMouseMove.bind(this),
      click: this.onMouseClick.bind(this)
    });
  }
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.removeTmpFeature(), this.gm.markerPointer.disable(), this.fireFinishEvent();
  }
  createFeature() {
    const e = this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(this.circleCenterLngLat || [0, 0]),
      sourceName: ie.temporary
    });
    return e && this.circleCenterLngLat && e.setShapeProperty("center", this.circleCenterLngLat), e;
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  createMarker() {
    const e = document.createElement("div");
    e.innerHTML = df;
    const s = e.firstChild;
    return s.style.color = "#278cda", s.style.width = "28px", s.style.height = "28px", s.style.pointerEvents = "none", this.gm.mapAdapter.createDomMarker({
      draggable: !1,
      anchor: "center",
      element: s
    }, [0, 0]);
  }
  getControlMarkerData() {
    const e = this.gm.markerPointer.marker;
    return e ? {
      type: "dom",
      instance: e,
      position: {
        coordinate: e.getLngLat(),
        path: [-1]
      }
    } : null;
  }
  fireStartEvent(e, s) {
    const u = {
      level: "system",
      type: "draw",
      mode: this.shape,
      variant: null,
      action: "start",
      featureData: e,
      markerData: s
    };
    this.gm.events.fire(`${me}:draw`, u);
  }
  fireUpdateEvent(e, s) {
    const u = {
      level: "system",
      type: "draw",
      mode: this.shape,
      variant: null,
      action: "update",
      featureData: e,
      markerData: s
    };
    this.gm.events.fire(`${me}:draw`, u);
  }
  fireFinishEvent() {
    const e = {
      level: "system",
      type: "draw",
      mode: this.shape,
      variant: null,
      action: "finish"
    };
    this.gm.events.fire(`${me}:draw`, e);
  }
}
class rk extends fl {
  constructor() {
    super(...arguments);
    O(this, "mode", "circle_marker");
    O(this, "shape", "circle_marker");
  }
  onStartAction() {
    this.gm.markerPointer.enable({
      customMarker: this.createMarker()
    });
  }
  onEndAction() {
    this.fireMarkerPointerFinishEvent(), super.onEndAction();
  }
  onMouseMove() {
    return this.fireMarkerPointerUpdateEvent(), { next: !0 };
  }
  onMouseClick(e) {
    var u;
    const s = ((u = this.gm.markerPointer.marker) == null ? void 0 : u.getLngLat()) || e.lngLat.toArray();
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(s)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(), this.circleCenterLngLat = s, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.updateFeaturePosition(this.circleCenterLngLat), this.saveFeature()), { next: !1 };
  }
  updateFeaturePosition(e) {
    if (!this.featureData)
      return;
    const s = this.getFeatureGeoJson(e);
    this.featureData.updateGeoJsonGeometry(s.geometry);
  }
}
const ik = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || matchMedia("(hover: none)").matches ? !0 : "msMaxTouchPoints" in navigator && typeof navigator.msMaxTouchPoints == "number" && navigator.msMaxTouchPoints > 0, Dr = (n, r, e = 10) => {
  const s = { ...n };
  return ft(n).forEach((u) => {
    const l = n[u];
    typeof l == "function" ? s[u] = ug(
      l.bind(r),
      e,
      { leading: !0, trailing: !1 }
    ) : re.error("convertToThrottled: item is not a function", n[u]);
  }), s;
}, sk = (n, r, e = 10) => {
  const s = { ...n };
  return ft(n).forEach((u) => {
    const l = n[u];
    typeof l == "function" ? s[u] = Bu(
      l.bind(r),
      e,
      { leading: !1, trailing: !0 }
    ) : re.error("convertToDebounced: item is not a function", n[u]);
  }), s;
};
class ak extends fl {
  constructor() {
    super(...arguments);
    O(this, "mode", "circle");
    O(this, "shape", "circle");
    O(this, "throttledMethods", Dr({
      updateFeatureGeoJson: this.updateFeatureGeoJson
    }, this, this.gm.options.settings.throttlingDelay));
  }
  onMouseClick(e) {
    var u;
    if (!Qe(e))
      return { next: !0 };
    const s = ((u = this.gm.markerPointer.marker) == null ? void 0 : u.getLngLat()) || e.lngLat.toArray();
    if (this.circleCenterPoint && this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getCircleGeoJson(this.circleCenterLngLat, s)]
      }), this.flags.featureCreateAllowed && (this.saveCircleFeature(s), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.fireFinishEvent());
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(s)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = s, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
      const l = this.getControlMarkerData();
      this.featureData && l && this.fireStartEvent(this.featureData, l);
    }
    return { next: !1 };
  }
  onMouseMove() {
    if (this.circleCenterLngLat && this.gm.markerPointer.marker) {
      const e = this.gm.markerPointer.marker.getLngLat();
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getCircleGeoJson(this.circleCenterLngLat, e)]
      }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeatureGeoJson(e);
    }
    return this.circleCenterPoint || this.fireMarkerPointerUpdateEvent(), { next: !1 };
  }
  updateFeatureGeoJson(e) {
    if (this.featureData && this.circleCenterLngLat) {
      const s = this.getCircleGeoJson(this.circleCenterLngLat, e);
      this.featureData.updateGeoJsonGeometry(s.geometry);
      const u = this.getControlMarkerData();
      u && this.fireUpdateEvent(this.featureData, u);
    }
  }
  saveCircleFeature(e) {
    var s;
    if (this.circleCenterLngLat && this.featureData) {
      const u = ((s = this.gm.markerPointer.marker) == null ? void 0 : s.getLngLat()) || e;
      this.updateFeatureGeoJson(u), this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Ju(this.featureData.getGeoJson()) : !1;
  }
  getCircleGeoJson(e, s) {
    const u = this.gm.mapAdapter.getDistance(e, s);
    return {
      ...Vu({ center: e, radius: u }),
      properties: {
        shape: this.shape
      }
    };
  }
}
const ok = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
    <circle cx="10.5" cy="10.5" r="9.213" fill="#fff" stroke="#278cda" stroke-width="2.303"/>
</svg>
`, uk = {
  dom: ok
}, Sd = (n, r = void 0) => {
  const e = document.createElement("div");
  e.classList.add("marker-wrapper"), e.style.lineHeight = "0", e.innerHTML = uk[n];
  const s = e.firstChild;
  return r && Object.assign(s.style, r), e;
};
function lk(n, r = {}) {
  var e, s, u, l = r.properties, f = (e = r.autoComplete) != null ? e : !0, h = (s = r.orderCoords) != null ? s : !0, m = (u = r.mutate) != null ? u : !1;
  switch (m || (n = Fa(n)), n.type) {
    case "FeatureCollection":
      var d = [];
      return n.features.forEach(function(v) {
        d.push(
          Rt(Uh(v, {}, f, h))
        );
      }), Su(d, l);
    default:
      return Uh(n, l, f, h);
  }
}
function Uh(n, r, e, s) {
  r = r || (n.type === "Feature" ? n.properties : {});
  var u = ys(n), l = u.coordinates, f = u.type;
  if (!l.length) throw new Error("line must contain coordinates");
  switch (f) {
    case "LineString":
      return e && (l = zh(l)), Yn([l], r);
    case "MultiLineString":
      var h = [], m = 0;
      return l.forEach(function(d) {
        if (e && (d = zh(d)), s) {
          var v = ck(wn(ui(d)));
          v > m ? (h.unshift(d), m = v) : h.push(d);
        } else
          h.push(d);
      }), Yn(h, r);
    default:
      throw new Error("geometry type " + f + " is not supported");
  }
}
function zh(n) {
  var r = n[0], e = r[0], s = r[1], u = n[n.length - 1], l = u[0], f = u[1];
  return (e !== l || s !== f) && n.push(r), n;
}
function ck(n) {
  var r = n[0], e = n[1], s = n[2], u = n[3];
  return Math.abs(r - s) * Math.abs(e - u);
}
var gl = lk;
const Md = (n) => !!n && typeof n == "object" && n instanceof pr && "removeSnapGuides" in n && "updateSnapGuides" in n && n.mode === "snap_guides" && typeof n.removeSnapGuides == "function" && typeof n.updateSnapGuides == "function", hk = (n) => !!n && typeof n == "object" && n instanceof pr && "getShortestPath" in n && n.mode === "auto_trace" && typeof n.getShortestPath == "function", fk = (n) => !!n && typeof n == "object" && n instanceof pr && "getSharedMarkers" in n && n.mode === "pin" && typeof n.getSharedMarkers == "function";
class dl extends Wn {
  constructor(e, s = {
    snappingMarkers: "none",
    targetShape: "line"
  }) {
    super(e);
    O(this, "mode", "line");
    O(this, "snappingKey", "line_drawer");
    O(this, "drawOptions");
    O(this, "shapeLngLats", []);
    O(this, "throttledMethods", Dr({
      onMouseMove: this.onMouseMove
    }, this, this.gm.options.settings.throttlingDelay));
    O(this, "mapEventHandlers", {
      [`${me}:helper`]: this.handleGmHelperEvent.bind(this),
      click: this.onMouseClick.bind(this),
      mousemove: this.throttledMethods.onMouseMove.bind(this)
    });
    O(this, "drawerEventHandlers", {
      firstMarkerClick: null,
      lastMarkerClick: null,
      nMarkerClick: null
    });
    this.drawOptions = s;
  }
  get snapGuidesInstance() {
    const e = this.gm.actionInstances.helper__snap_guides;
    return Md(e) ? e : null;
  }
  get autoTraceEnabled() {
    var e;
    return ((e = this.gm.options.controls.helper.auto_trace) == null ? void 0 : e.active) || !1;
  }
  get autoTraceHelperInstance() {
    return this.autoTraceEnabled && Object.values(this.gm.actionInstances).find(hk) || null;
  }
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    var e;
    this.gm.markerPointer.disable(), this.endShape(), (e = this.snapGuidesInstance) == null || e.removeSnapGuides();
  }
  handleGmHelperEvent(e) {
    return ja(e) ? (e.mode === "snap_guides" && e.action === "mode_start" && this.updateSnapGuides(), { next: !0 }) : (re.error("LineDrawer.handleGmHelperEvent: invalid event", e), { next: !0 });
  }
  updateSnapGuides() {
    var e;
    if (this.snapGuidesInstance) {
      const s = (e = this.featureData) == null ? void 0 : e.getGeoJson();
      s && s.geometry.coordinates.pop(), this.snapGuidesInstance.updateSnapGuides(
        s || null,
        this.shapeLngLats.at(-1) || null,
        !0
      );
    }
  }
  on(e, s) {
    this.drawerEventHandlers[e] = s;
  }
  onMouseClick(e) {
    var u;
    if (!Qe(e, { warning: !0 }))
      return { next: !0 };
    const s = ((u = this.gm.markerPointer.marker) == null ? void 0 : u.getLngLat()) || e.lngLat.toArray();
    if (this.featureData) {
      const l = this.getClickedMarkerInfo(e);
      this.handleNextVertex(s, l);
    } else this.isFeatureAllowed(rE(s)) && this.startShape(s);
    return this.updateSnapGuides(), { next: !0 };
  }
  handleNextVertex(e, s) {
    var f, h, m, d, v, y;
    if (!this.featureData) {
      re.error("LineDrawer.handleNextVertex: no featureData");
      return;
    }
    const u = this.featureData.markers.size, l = this.getMarkerClickEventData(s.index);
    s.index < u - 1 && this.addPoint(e, s), s.index !== -1 && (s.index === 0 ? (h = (f = this.drawerEventHandlers).firstMarkerClick) == null || h.call(f, l) : s.index > 0 && s.index === u - 1 && ((d = (m = this.drawerEventHandlers).lastMarkerClick) == null || d.call(m, l)), s.index >= 0 && ((y = (v = this.drawerEventHandlers).nMarkerClick) == null || y.call(v, l)));
  }
  getMarkerClickEventData(e) {
    const s = this.getFeatureGeoJson({ withControlMarker: !1 });
    return {
      markerIndex: e,
      shapeCoordinates: this.getShapeCoordinates({ withControlMarker: !1 }),
      geoJson: s,
      bounds: Hu(s)
    };
  }
  onMouseMove(e) {
    return Qe(e, { warning: !0 }) ? (this.featureData && this.shapeLngLats.length && this.updateFeatureSource(), { next: !0 }) : { next: !0 };
  }
  startShape(e) {
    this.shapeLngLats = [e], this.featureData = this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson({ withControlMarker: !0 }),
      sourceName: ie.temporary
    });
    const s = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", 0]
      }
    };
    this.featureData && (this.featureData.markers.set(
      s.position.path.join("."),
      s
    ), this.setSnapping(), this.fireStartEvent(this.featureData, s)), this.gm.mapAdapter.disableMapInteractions(["doubleClickZoom"]);
  }
  endShape() {
    const e = this.getFeatureGeoJson({ withControlMarker: !1 });
    this.removeSnapping(), this.removeTmpFeature(), this.shapeLngLats = [], this.gm.mapAdapter.enableMapInteractions(["doubleClickZoom"]), this.fireStopEvent(e);
  }
  setSnapping() {
    if (!this.snappingHelper)
      return;
    const e = this.drawOptions.snappingMarkers;
    e === "none" ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, []) : e === "all" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, this.shapeLngLats) : e === "first" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(this.snappingKey, [this.shapeLngLats[0]]) : e === "last" && this.shapeLngLats.length ? this.snappingHelper.setCustomSnappingCoordinates(
      this.snappingKey,
      [this.shapeLngLats[this.shapeLngLats.length - 1]]
    ) : re.error("LineDrawer.setSnapping: invalid data", e, this.shapeLngLats);
  }
  removeSnapping() {
    this.snappingHelper && this.snappingHelper.clearCustomSnappingCoordinates(this.snappingKey);
  }
  getClickedMarkerInfo(e) {
    if (!this.featureData)
      return { index: -1, path: null };
    let s = 0, u = null;
    try {
      this.featureData.markers.forEach((l, f) => {
        if (l.instance instanceof ku) {
          const h = l.instance.getElement() || null, m = e.originalEvent.target, d = m instanceof Element ? m : null;
          if (h && h.contains(d))
            throw u = f, new Error("stop");
        }
        s += 1;
      });
    } catch {
      if (u)
        return { index: s, path: u };
    }
    return { index: -1, path: null };
  }
  addPoint(e, s) {
    const u = this.featureData;
    if (!u) {
      re.error("LineDrawer.addPoint: no featureData");
      return;
    }
    const l = this.getAddedLngLats(e, s), f = this.getFeatureGeoJsonWithType({
      withControlMarker: !0,
      coordinates: this.shapeLngLats.concat(l)
    });
    this.isFeatureAllowed(f) && (l.forEach((h) => {
      this.shapeLngLats.push(h);
      const m = this.addMarker(h, u);
      this.fireUpdateEvent(u, m);
    }), this.updateFeatureSource());
  }
  isFeatureAllowed(e) {
    return this.gm.getActiveDrawModes().length ? (this.fireBeforeFeatureCreate({ geoJsonFeatures: [e] }), this.flags.featureCreateAllowed) : !0;
  }
  getAddedLngLats(e, s) {
    if (!this.featureData)
      return re.error("LineDrawer.getCurrentLngLats: no featureData"), [];
    const l = this.getMarkerInfoLngLat(s) || e, f = this.getAutoTracePath(l);
    return [
      ...(f == null ? void 0 : f.slice(1, -1)) || [],
      l
    ];
  }
  getAutoTracePath(e) {
    const s = this.shapeLngLats.at(-1);
    return this.autoTraceEnabled && this.autoTraceHelperInstance && s && this.autoTraceHelperInstance.getShortestPath(
      s,
      e
    ) || null;
  }
  getMarkerInfoLngLat(e) {
    if (this.featureData && e.path) {
      const s = this.featureData.markers.get(e.path);
      if (s && s.type === "dom")
        return s.instance.getLngLat();
      re.error("LineDrawer.addPoint: no markerData", e);
    }
    return null;
  }
  addMarker(e, s) {
    const u = {
      type: "dom",
      instance: this.createMarker(e),
      position: {
        coordinate: e,
        path: ["geometry", "coordinates", this.shapeLngLats.length]
      }
    };
    return s.markers.set(
      u.position.path.join("."),
      {
        type: "dom",
        instance: u.instance,
        position: {
          coordinate: e,
          path: []
        }
      }
    ), u;
  }
  createMarker(e) {
    return this.gm.mapAdapter.createDomMarker({
      element: Sd("dom", {
        pointerEvents: "auto",
        cursor: "pointer"
      }),
      anchor: "center"
    }, e);
  }
  updateFeatureSource() {
    if (this.featureData && (this.featureData.updateGeoJsonGeometry(
      this.getFeatureGeoJson({ withControlMarker: !0 }).geometry
    ), this.gm.markerPointer.marker)) {
      const e = {
        type: "dom",
        instance: this.gm.markerPointer.marker,
        position: {
          coordinate: this.gm.markerPointer.marker.getLngLat(),
          path: ["geometry", "coordinates", this.shapeLngLats.length]
        }
      };
      this.fireUpdateEvent(this.featureData, e);
    }
  }
  getFeatureGeoJson({ withControlMarker: e, coordinates: s = void 0 }) {
    return {
      type: "Feature",
      properties: {
        shape: "line"
      },
      geometry: {
        type: "LineString",
        coordinates: s || this.getShapeCoordinates({ withControlMarker: e })
      }
    };
  }
  getFeatureGeoJsonWithType({ withControlMarker: e, coordinates: s = void 0 }) {
    const u = this.getFeatureGeoJson({ withControlMarker: e, coordinates: s });
    return this.drawOptions.targetShape === "polygon" && u.geometry.coordinates.length > 3 ? gl(
      u,
      { properties: u.properties }
    ) : u;
  }
  getShapeCoordinates({ withControlMarker: e }) {
    const s = [...this.shapeLngLats];
    return e && this.gm.markerPointer.marker && s.push(this.gm.markerPointer.marker.getLngLat()), s;
  }
  fireStartEvent(e, s) {
    this.gm.events.fire(
      `${me}:draw`,
      {
        level: "system",
        type: "draw",
        mode: "line",
        variant: "line_drawer",
        action: "start",
        featureData: e,
        markerData: s
      }
    );
  }
  fireUpdateEvent(e, s) {
    this.gm.events.fire(
      `${me}:draw`,
      {
        level: "system",
        type: "draw",
        mode: "line",
        variant: "line_drawer",
        action: "update",
        featureData: e,
        markerData: s
      }
    );
  }
  fireStopEvent(e) {
    this.gm.events.fire(`${me}:draw`, {
      level: "system",
      type: "draw",
      mode: "line",
      action: "finish",
      variant: "line_drawer",
      geoJsonFeature: e
    });
  }
}
class gk extends Wn {
  constructor() {
    super(...arguments);
    O(this, "mode", "line");
    O(this, "shape", "line");
    O(this, "lineDrawer", new dl(
      this.gm,
      { snappingMarkers: "first", targetShape: "line" }
    ));
    O(this, "mapEventHandlers", {
      [`${me}:draw`]: this.forwardLineDrawerEvent.bind(this),
      mousemove: this.onMouseMove.bind(this)
    });
  }
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on("nMarkerClick", this.lineFinished.bind(this));
  }
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onMouseMove(e) {
    return Qe(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  lineFinished(e) {
    this.lineDrawer.endShape();
    let s = e.shapeCoordinates;
    return e.markerIndex > 0 && (s = s.slice(0, e.markerIndex + 1)), s.length < 2 ? null : this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(s),
      sourceName: ie.main
    });
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "LineString",
        coordinates: e
      }
    };
  }
}
class dk extends Wn {
  constructor() {
    super(...arguments);
    O(this, "mode", "marker");
    O(this, "shape", "marker");
    O(this, "mapEventHandlers", {
      click: this.onMouseClick.bind(this),
      mousemove: this.onMouseMove.bind(this)
    });
  }
  onStartAction() {
    const e = this.createMarker();
    this.gm.markerPointer.enable({ customMarker: e }), this.fireMarkerPointerStartEvent();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent();
  }
  onMouseClick(e) {
    return Qe(e) && (this.featureData = this.createFeature(e), this.featureData && this.saveFeature()), { next: !1 };
  }
  onMouseMove(e) {
    return !Qe(e) || !this.gm.markerPointer.marker ? { next: !0 } : (this.fireMarkerPointerUpdateEvent(), { next: !0 });
  }
  createMarker() {
    const e = document.createElement("div");
    return e.style.backgroundImage = `url("${ff}")`, e.style.width = "36px", e.style.height = "36px", e.style.backgroundSize = "cover", e.style.pointerEvents = "none", this.gm.mapAdapter.createDomMarker({
      draggable: !1,
      anchor: "bottom",
      element: e
    }, [0, 0]);
  }
  createFeature(e) {
    var l;
    const s = ((l = this.gm.markerPointer.marker) == null ? void 0 : l.getLngLat()) || e.lngLat.toArray(), u = this.getFeatureGeoJson(s);
    return u && (this.fireBeforeFeatureCreate({ geoJsonFeatures: [u] }), this.flags.featureCreateAllowed) ? this.gm.features.createFeature({
      shapeGeoJson: u,
      sourceName: ie.temporary
    }) : null;
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
}
function pk(n) {
  var r = {
    MultiPoint: {
      coordinates: [],
      properties: []
    },
    MultiLineString: {
      coordinates: [],
      properties: []
    },
    MultiPolygon: {
      coordinates: [],
      properties: []
    }
  };
  return An(n, (e) => {
    var s;
    switch ((s = e.geometry) == null ? void 0 : s.type) {
      case "Point":
        r.MultiPoint.coordinates.push(e.geometry.coordinates), r.MultiPoint.properties.push(e.properties);
        break;
      case "MultiPoint":
        r.MultiPoint.coordinates.push(...e.geometry.coordinates), r.MultiPoint.properties.push(e.properties);
        break;
      case "LineString":
        r.MultiLineString.coordinates.push(e.geometry.coordinates), r.MultiLineString.properties.push(e.properties);
        break;
      case "MultiLineString":
        r.MultiLineString.coordinates.push(
          ...e.geometry.coordinates
        ), r.MultiLineString.properties.push(e.properties);
        break;
      case "Polygon":
        r.MultiPolygon.coordinates.push(e.geometry.coordinates), r.MultiPolygon.properties.push(e.properties);
        break;
      case "MultiPolygon":
        r.MultiPolygon.coordinates.push(...e.geometry.coordinates), r.MultiPolygon.properties.push(e.properties);
        break;
    }
  }), $e(
    Object.keys(r).filter(function(e) {
      return r[e].coordinates.length;
    }).sort().map(function(e) {
      var s = { type: e, coordinates: r[e].coordinates }, u = { collectedProperties: r[e].properties };
      return cn(s, u);
    })
  );
}
var mk = pk;
function vk(n, r, e, s, u) {
  Id(n, r, e || 0, s || n.length - 1, u || yk);
}
function Id(n, r, e, s, u) {
  for (; s > e; ) {
    if (s - e > 600) {
      var l = s - e + 1, f = r - e + 1, h = Math.log(l), m = 0.5 * Math.exp(2 * h / 3), d = 0.5 * Math.sqrt(h * m * (l - m) / l) * (f - l / 2 < 0 ? -1 : 1), v = Math.max(e, Math.floor(r - f * m / l + d)), y = Math.min(s, Math.floor(r + (l - f) * m / l + d));
      Id(n, r, v, y, u);
    }
    var E = n[r], S = e, M = s;
    for (Xi(n, e, r), u(n[s], E) > 0 && Xi(n, e, s); S < M; ) {
      for (Xi(n, S, M), S++, M--; u(n[S], E) < 0; ) S++;
      for (; u(n[M], E) > 0; ) M--;
    }
    u(n[e], E) === 0 ? Xi(n, e, M) : (M++, Xi(n, M, s)), M <= r && (e = M + 1), r <= M && (s = M - 1);
  }
}
function Xi(n, r, e) {
  var s = n[r];
  n[r] = n[e], n[e] = s;
}
function yk(n, r) {
  return n < r ? -1 : n > r ? 1 : 0;
}
class Xt {
  constructor(r = 9) {
    this._maxEntries = Math.max(4, r), this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4)), this.clear();
  }
  all() {
    return this._all(this.data, []);
  }
  search(r) {
    let e = this.data;
    const s = [];
    if (!Xs(r, e)) return s;
    const u = this.toBBox, l = [];
    for (; e; ) {
      for (let f = 0; f < e.children.length; f++) {
        const h = e.children[f], m = e.leaf ? u(h) : h;
        Xs(r, m) && (e.leaf ? s.push(h) : Fo(r, m) ? this._all(h, s) : l.push(h));
      }
      e = l.pop();
    }
    return s;
  }
  collides(r) {
    let e = this.data;
    if (!Xs(r, e)) return !1;
    const s = [];
    for (; e; ) {
      for (let u = 0; u < e.children.length; u++) {
        const l = e.children[u], f = e.leaf ? this.toBBox(l) : l;
        if (Xs(r, f)) {
          if (e.leaf || Fo(r, f)) return !0;
          s.push(l);
        }
      }
      e = s.pop();
    }
    return !1;
  }
  load(r) {
    if (!(r && r.length)) return this;
    if (r.length < this._minEntries) {
      for (let s = 0; s < r.length; s++)
        this.insert(r[s]);
      return this;
    }
    let e = this._build(r.slice(), 0, r.length - 1, 0);
    if (!this.data.children.length)
      this.data = e;
    else if (this.data.height === e.height)
      this._splitRoot(this.data, e);
    else {
      if (this.data.height < e.height) {
        const s = this.data;
        this.data = e, e = s;
      }
      this._insert(e, this.data.height - e.height - 1, !0);
    }
    return this;
  }
  insert(r) {
    return r && this._insert(r, this.data.height - 1), this;
  }
  clear() {
    return this.data = ni([]), this;
  }
  remove(r, e) {
    if (!r) return this;
    let s = this.data;
    const u = this.toBBox(r), l = [], f = [];
    let h, m, d;
    for (; s || l.length; ) {
      if (s || (s = l.pop(), m = l[l.length - 1], h = f.pop(), d = !0), s.leaf) {
        const v = _k(r, s.children, e);
        if (v !== -1)
          return s.children.splice(v, 1), l.push(s), this._condense(l), this;
      }
      !d && !s.leaf && Fo(s, u) ? (l.push(s), f.push(h), h = 0, m = s, s = s.children[0]) : m ? (h++, s = m.children[h], d = !1) : s = null;
    }
    return this;
  }
  toBBox(r) {
    return r;
  }
  compareMinX(r, e) {
    return r.minX - e.minX;
  }
  compareMinY(r, e) {
    return r.minY - e.minY;
  }
  toJSON() {
    return this.data;
  }
  fromJSON(r) {
    return this.data = r, this;
  }
  _all(r, e) {
    const s = [];
    for (; r; )
      r.leaf ? e.push(...r.children) : s.push(...r.children), r = s.pop();
    return e;
  }
  _build(r, e, s, u) {
    const l = s - e + 1;
    let f = this._maxEntries, h;
    if (l <= f)
      return h = ni(r.slice(e, s + 1)), ei(h, this.toBBox), h;
    u || (u = Math.ceil(Math.log(l) / Math.log(f)), f = Math.ceil(l / Math.pow(f, u - 1))), h = ni([]), h.leaf = !1, h.height = u;
    const m = Math.ceil(l / f), d = m * Math.ceil(Math.sqrt(f));
    qh(r, e, s, d, this.compareMinX);
    for (let v = e; v <= s; v += d) {
      const y = Math.min(v + d - 1, s);
      qh(r, v, y, m, this.compareMinY);
      for (let E = v; E <= y; E += m) {
        const S = Math.min(E + m - 1, y);
        h.children.push(this._build(r, E, S, u - 1));
      }
    }
    return ei(h, this.toBBox), h;
  }
  _chooseSubtree(r, e, s, u) {
    for (; u.push(e), !(e.leaf || u.length - 1 === s); ) {
      let l = 1 / 0, f = 1 / 0, h;
      for (let m = 0; m < e.children.length; m++) {
        const d = e.children[m], v = Do(d), y = wk(r, d) - v;
        y < f ? (f = y, l = v < l ? v : l, h = d) : y === f && v < l && (l = v, h = d);
      }
      e = h || e.children[0];
    }
    return e;
  }
  _insert(r, e, s) {
    const u = s ? r : this.toBBox(r), l = [], f = this._chooseSubtree(u, this.data, e, l);
    for (f.children.push(r), Qi(f, u); e >= 0 && l[e].children.length > this._maxEntries; )
      this._split(l, e), e--;
    this._adjustParentBBoxes(u, l, e);
  }
  // split overflowed node into two
  _split(r, e) {
    const s = r[e], u = s.children.length, l = this._minEntries;
    this._chooseSplitAxis(s, l, u);
    const f = this._chooseSplitIndex(s, l, u), h = ni(s.children.splice(f, s.children.length - f));
    h.height = s.height, h.leaf = s.leaf, ei(s, this.toBBox), ei(h, this.toBBox), e ? r[e - 1].children.push(h) : this._splitRoot(s, h);
  }
  _splitRoot(r, e) {
    this.data = ni([r, e]), this.data.height = r.height + 1, this.data.leaf = !1, ei(this.data, this.toBBox);
  }
  _chooseSplitIndex(r, e, s) {
    let u, l = 1 / 0, f = 1 / 0;
    for (let h = e; h <= s - e; h++) {
      const m = Ki(r, 0, h, this.toBBox), d = Ki(r, h, s, this.toBBox), v = kk(m, d), y = Do(m) + Do(d);
      v < l ? (l = v, u = h, f = y < f ? y : f) : v === l && y < f && (f = y, u = h);
    }
    return u || s - e;
  }
  // sorts node children by the best axis for split
  _chooseSplitAxis(r, e, s) {
    const u = r.leaf ? this.compareMinX : Ek, l = r.leaf ? this.compareMinY : xk, f = this._allDistMargin(r, e, s, u), h = this._allDistMargin(r, e, s, l);
    f < h && r.children.sort(u);
  }
  // total margin of all possible split distributions where each node is at least m full
  _allDistMargin(r, e, s, u) {
    r.children.sort(u);
    const l = this.toBBox, f = Ki(r, 0, e, l), h = Ki(r, s - e, s, l);
    let m = Vs(f) + Vs(h);
    for (let d = e; d < s - e; d++) {
      const v = r.children[d];
      Qi(f, r.leaf ? l(v) : v), m += Vs(f);
    }
    for (let d = s - e - 1; d >= e; d--) {
      const v = r.children[d];
      Qi(h, r.leaf ? l(v) : v), m += Vs(h);
    }
    return m;
  }
  _adjustParentBBoxes(r, e, s) {
    for (let u = s; u >= 0; u--)
      Qi(e[u], r);
  }
  _condense(r) {
    for (let e = r.length - 1, s; e >= 0; e--)
      r[e].children.length === 0 ? e > 0 ? (s = r[e - 1].children, s.splice(s.indexOf(r[e]), 1)) : this.clear() : ei(r[e], this.toBBox);
  }
}
function _k(n, r, e) {
  if (!e) return r.indexOf(n);
  for (let s = 0; s < r.length; s++)
    if (e(n, r[s])) return s;
  return -1;
}
function ei(n, r) {
  Ki(n, 0, n.children.length, r, n);
}
function Ki(n, r, e, s, u) {
  u || (u = ni(null)), u.minX = 1 / 0, u.minY = 1 / 0, u.maxX = -1 / 0, u.maxY = -1 / 0;
  for (let l = r; l < e; l++) {
    const f = n.children[l];
    Qi(u, n.leaf ? s(f) : f);
  }
  return u;
}
function Qi(n, r) {
  return n.minX = Math.min(n.minX, r.minX), n.minY = Math.min(n.minY, r.minY), n.maxX = Math.max(n.maxX, r.maxX), n.maxY = Math.max(n.maxY, r.maxY), n;
}
function Ek(n, r) {
  return n.minX - r.minX;
}
function xk(n, r) {
  return n.minY - r.minY;
}
function Do(n) {
  return (n.maxX - n.minX) * (n.maxY - n.minY);
}
function Vs(n) {
  return n.maxX - n.minX + (n.maxY - n.minY);
}
function wk(n, r) {
  return (Math.max(r.maxX, n.maxX) - Math.min(r.minX, n.minX)) * (Math.max(r.maxY, n.maxY) - Math.min(r.minY, n.minY));
}
function kk(n, r) {
  const e = Math.max(n.minX, r.minX), s = Math.max(n.minY, r.minY), u = Math.min(n.maxX, r.maxX), l = Math.min(n.maxY, r.maxY);
  return Math.max(0, u - e) * Math.max(0, l - s);
}
function Fo(n, r) {
  return n.minX <= r.minX && n.minY <= r.minY && r.maxX <= n.maxX && r.maxY <= n.maxY;
}
function Xs(n, r) {
  return r.minX <= n.maxX && r.minY <= n.maxY && r.maxX >= n.minX && r.maxY >= n.minY;
}
function ni(n) {
  return {
    children: n,
    height: 1,
    leaf: !0,
    minX: 1 / 0,
    minY: 1 / 0,
    maxX: -1 / 0,
    maxY: -1 / 0
  };
}
function qh(n, r, e, s, u) {
  const l = [r, e];
  for (; l.length; ) {
    if (e = l.pop(), r = l.pop(), e - r <= s) continue;
    const f = r + Math.ceil((e - r) / s / 2) * s;
    vk(n, f, r, e, u), l.push(r, f, f, e);
  }
}
function Sk(n) {
  return dm(
    n,
    (r, e) => r + Mk(e),
    0
  );
}
function Mk(n) {
  let r = 0, e;
  switch (n.type) {
    case "Polygon":
      return Yh(n.coordinates);
    case "MultiPolygon":
      for (e = 0; e < n.coordinates.length; e++)
        r += Yh(n.coordinates[e]);
      return r;
    case "Point":
    case "MultiPoint":
    case "LineString":
    case "MultiLineString":
      return 0;
  }
  return 0;
}
function Yh(n) {
  let r = 0;
  if (n && n.length > 0) {
    r += Math.abs(Hh(n[0]));
    for (let e = 1; e < n.length; e++)
      r -= Math.abs(Hh(n[e]));
  }
  return r;
}
var Ik = rt * rt / 2, Go = Math.PI / 180;
function Hh(n) {
  const r = n.length - 1;
  if (r <= 2) return 0;
  let e = 0, s = 0;
  for (; s < r; ) {
    const u = n[s], l = n[s + 1 === r ? 0 : s + 1], f = n[s + 2 >= r ? (s + 2) % r : s + 2], h = u[0] * Go, m = l[1] * Go, d = f[0] * Go;
    e += (d - h) * Math.sin(m), s++;
  }
  return e * Ik;
}
function Lk(n, r, e) {
  if (n.geometry.type !== "Polygon")
    throw new Error("The input feature must be a Polygon");
  e === void 0 && (e = 1);
  var s = n.geometry.coordinates, u = [], l = {};
  if (e) {
    for (var f = [], h = 0; h < s.length; h++)
      for (var m = 0; m < s[h].length - 1; m++)
        f.push(U(h, m));
    var d = new Xt();
    d.load(f);
  }
  for (var v = 0; v < s.length; v++)
    for (var y = 0; y < s[v].length - 1; y++)
      if (e) {
        var E = d.search(U(v, y));
        E.forEach(function(G) {
          var I = G.ring, H = G.edge;
          D(v, y, I, H);
        });
      } else
        for (var S = 0; S < s.length; S++)
          for (var M = 0; M < s[S].length - 1; M++)
            D(v, y, S, M);
  return r || (u = {
    type: "Feature",
    geometry: { type: "MultiPoint", coordinates: u }
  }), u;
  function D(G, I, H, J) {
    var X = s[G][I], W = s[G][I + 1], $ = s[H][J], x = s[H][J + 1], k = bk(X, W, $, x);
    if (k !== null) {
      var b, A;
      if (W[0] !== X[0] ? b = (k[0] - X[0]) / (W[0] - X[0]) : b = (k[1] - X[1]) / (W[1] - X[1]), x[0] !== $[0] ? A = (k[0] - $[0]) / (x[0] - $[0]) : A = (k[1] - $[1]) / (x[1] - $[1]), !(b >= 1 || b <= 0 || A >= 1 || A <= 0)) {
        var T = k, F = !l[T];
        F && (l[T] = !0), r ? u.push(
          r(
            k,
            G,
            I,
            X,
            W,
            b,
            H,
            J,
            $,
            x,
            A,
            F
          )
        ) : u.push(k);
      }
    }
  }
  function U(G, I) {
    var H = s[G][I], J = s[G][I + 1], X, W, $, x;
    return H[0] < J[0] ? (X = H[0], W = J[0]) : (X = J[0], W = H[0]), H[1] < J[1] ? ($ = H[1], x = J[1]) : ($ = J[1], x = H[1]), {
      minX: X,
      minY: $,
      maxX: W,
      maxY: x,
      ring: G,
      edge: I
    };
  }
}
function bk(n, r, e, s) {
  if (es(n, e) || es(n, s) || es(r, e) || es(s, e))
    return null;
  var u = n[0], l = n[1], f = r[0], h = r[1], m = e[0], d = e[1], v = s[0], y = s[1], E = (u - f) * (d - y) - (l - h) * (m - v);
  if (E === 0) return null;
  var S = ((u * h - l * f) * (m - v) - (u - f) * (m * y - d * v)) / E, M = ((u * h - l * f) * (d - y) - (l - h) * (m * y - d * v)) / E;
  return [S, M];
}
function es(n, r) {
  if (!n || !r || n.length !== r.length) return !1;
  for (var e = 0, s = n.length; e < s; e++)
    if (n[e] instanceof Array && r[e] instanceof Array) {
      if (!es(n[e], r[e])) return !1;
    } else if (n[e] !== r[e])
      return !1;
  return !0;
}
function Ak(n) {
  if (n.type != "Feature")
    throw new Error("The input must a geojson object of type Feature");
  if (n.geometry === void 0 || n.geometry == null)
    throw new Error(
      "The input must a geojson object with a non-empty geometry"
    );
  if (n.geometry.type != "Polygon")
    throw new Error("The input must be a geojson Polygon");
  for (var r = n.geometry.coordinates.length, e = [], I = 0; I < r; I++) {
    var s = n.geometry.coordinates[I];
    ts(s[0], s[s.length - 1]) || s.push(s[0]);
    for (var u = 0; u < s.length - 1; u++)
      e.push(s[u]);
  }
  if (!Tk(e))
    throw new Error(
      "The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)"
    );
  var l = e.length, f = Lk(
    n,
    function(ae, ue, xe, Ae, V, Qt, Le, he, C, Oe, Pe, Se) {
      return [
        ae,
        ue,
        xe,
        Ae,
        V,
        Qt,
        Le,
        he,
        C,
        Oe,
        Pe,
        Se
      ];
    }
  ), h = f.length;
  if (h == 0) {
    for (var $ = [], I = 0; I < r; I++)
      $.push(
        Yn([n.geometry.coordinates[I]], {
          parent: -1,
          winding: Ck(n.geometry.coordinates[I])
        })
      );
    var j = $e($);
    return K(), ne(), j;
  }
  for (var m = [], d = [], I = 0; I < r; I++) {
    m.push([]);
    for (var u = 0; u < n.geometry.coordinates[I].length - 1; u++)
      m[I].push([
        new Jh(
          n.geometry.coordinates[I][ri(u + 1, n.geometry.coordinates[I].length - 1)],
          1,
          [I, u],
          [I, ri(u + 1, n.geometry.coordinates[I].length - 1)],
          void 0
        )
      ]), d.push(
        new Vh(
          n.geometry.coordinates[I][u],
          [I, ri(u - 1, n.geometry.coordinates[I].length - 1)],
          [I, u],
          void 0,
          void 0,
          !1,
          !0
        )
      );
  }
  for (var I = 0; I < h; I++)
    m[f[I][1]][f[I][2]].push(
      new Jh(
        f[I][0],
        f[I][5],
        [f[I][1], f[I][2]],
        [f[I][6], f[I][7]],
        void 0
      )
    ), f[I][11] && d.push(
      new Vh(
        f[I][0],
        [f[I][1], f[I][2]],
        [f[I][6], f[I][7]],
        void 0,
        void 0,
        !0,
        !0
      )
    );
  for (var v = d.length, I = 0; I < m.length; I++)
    for (var u = 0; u < m[I].length; u++)
      m[I][u].sort(function(ue, xe) {
        return ue.param < xe.param ? -1 : 1;
      });
  for (var y = [], I = 0; I < v; I++)
    y.push({
      minX: d[I].coord[0],
      minY: d[I].coord[1],
      maxX: d[I].coord[0],
      maxY: d[I].coord[1],
      index: I
    });
  var E = new Xt();
  E.load(y);
  for (var I = 0; I < m.length; I++)
    for (var u = 0; u < m[I].length; u++)
      for (var S = 0; S < m[I][u].length; S++) {
        var M;
        S == m[I][u].length - 1 ? M = m[I][ri(u + 1, n.geometry.coordinates[I].length - 1)][0].coord : M = m[I][u][S + 1].coord;
        var D = E.search({
          minX: M[0],
          minY: M[1],
          maxX: M[0],
          maxY: M[1]
        })[0];
        m[I][u][S].nxtIsectAlongEdgeIn = D.index;
      }
  for (var I = 0; I < m.length; I++)
    for (var u = 0; u < m[I].length; u++)
      for (var S = 0; S < m[I][u].length; S++) {
        var M = m[I][u][S].coord, D = E.search({
          minX: M[0],
          minY: M[1],
          maxX: M[0],
          maxY: M[1]
        })[0], U = D.index;
        U < l ? d[U].nxtIsectAlongRingAndEdge2 = m[I][u][S].nxtIsectAlongEdgeIn : ts(
          d[U].ringAndEdge1,
          m[I][u][S].ringAndEdgeIn
        ) ? d[U].nxtIsectAlongRingAndEdge1 = m[I][u][S].nxtIsectAlongEdgeIn : d[U].nxtIsectAlongRingAndEdge2 = m[I][u][S].nxtIsectAlongEdgeIn;
      }
  for (var G = [], I = 0, u = 0; u < r; u++) {
    for (var H = I, S = 0; S < n.geometry.coordinates[u].length - 1; S++)
      d[I].coord[0] < d[H].coord[0] && (H = I), I++;
    for (var J = d[H].nxtIsectAlongRingAndEdge2, S = 0; S < d.length; S++)
      if (d[S].nxtIsectAlongRingAndEdge1 == H || d[S].nxtIsectAlongRingAndEdge2 == H) {
        var X = S;
        break;
      }
    var W = oa(
      [
        d[X].coord,
        d[H].coord,
        d[J].coord
      ],
      !0
    ) ? 1 : -1;
    G.push({ isect: H, parent: -1, winding: W });
  }
  G.sort(function(ce, ae) {
    return d[ce.isect].coord > d[ae.isect].coord ? -1 : 1;
  });
  for (var $ = []; G.length > 0; ) {
    var x = G.pop(), k = x.isect, b = x.parent, A = x.winding, T = $.length, F = [d[k].coord], P = k;
    if (d[k].ringAndEdge1Walkable)
      var N = d[k].ringAndEdge1, R = d[k].nxtIsectAlongRingAndEdge1;
    else
      var N = d[k].ringAndEdge2, R = d[k].nxtIsectAlongRingAndEdge2;
    for (; !ts(d[k].coord, d[R].coord); ) {
      F.push(d[R].coord);
      for (var Y = void 0, I = 0; I < G.length; I++)
        if (G[I].isect == R) {
          Y = I;
          break;
        }
      if (Y != null && G.splice(Y, 1), ts(N, d[R].ringAndEdge1)) {
        if (N = d[R].ringAndEdge2, d[R].ringAndEdge2Walkable = !1, d[R].ringAndEdge1Walkable) {
          var z = { isect: R };
          oa(
            [
              d[P].coord,
              d[R].coord,
              d[d[R].nxtIsectAlongRingAndEdge2].coord
            ],
            A == 1
          ) ? (z.parent = b, z.winding = -A) : (z.parent = T, z.winding = A), G.push(z);
        }
        P = R, R = d[R].nxtIsectAlongRingAndEdge2;
      } else {
        if (N = d[R].ringAndEdge1, d[R].ringAndEdge1Walkable = !1, d[R].ringAndEdge2Walkable) {
          var z = { isect: R };
          oa(
            [
              d[P].coord,
              d[R].coord,
              d[d[R].nxtIsectAlongRingAndEdge1].coord
            ],
            A == 1
          ) ? (z.parent = b, z.winding = -A) : (z.parent = T, z.winding = A), G.push(z);
        }
        P = R, R = d[R].nxtIsectAlongRingAndEdge1;
      }
    }
    F.push(d[R].coord), $.push(
      Yn([F], {
        index: T,
        parent: b,
        winding: A,
        netWinding: void 0
      })
    );
  }
  var j = $e($);
  K(), ne();
  function K() {
    for (var ce = [], ae = 0; ae < j.features.length; ae++)
      j.features[ae].properties.parent == -1 && ce.push(ae);
    if (ce.length > 1)
      for (var ae = 0; ae < ce.length; ae++) {
        for (var ue = -1, xe = 1 / 0, Ae = 0; Ae < j.features.length; Ae++)
          ce[ae] != Ae && Tr(
            j.features[ce[ae]].geometry.coordinates[0][0],
            j.features[Ae],
            { ignoreBoundary: !0 }
          ) && Sk(j.features[Ae]) < xe && (ue = Ae);
        j.features[ce[ae]].properties.parent = ue;
      }
  }
  function ne() {
    for (var ce = 0; ce < j.features.length; ce++)
      if (j.features[ce].properties.parent == -1) {
        var ae = j.features[ce].properties.winding;
        j.features[ce].properties.netWinding = ae, de(ce, ae);
      }
  }
  function de(ce, ae) {
    for (var ue = 0; ue < j.features.length; ue++)
      if (j.features[ue].properties.parent == ce) {
        var xe = ae + j.features[ue].properties.winding;
        j.features[ue].properties.netWinding = xe, de(ue, xe);
      }
  }
  return j;
}
var Jh = function(n, r, e, s, u) {
  this.coord = n, this.param = r, this.ringAndEdgeIn = e, this.ringAndEdgeOut = s, this.nxtIsectAlongEdgeIn = u;
}, Vh = function(n, r, e, s, u, l, f) {
  this.coord = n, this.ringAndEdge1 = r, this.ringAndEdge2 = e, this.nxtIsectAlongRingAndEdge1 = s, this.nxtIsectAlongRingAndEdge2 = u, this.ringAndEdge1Walkable = l, this.ringAndEdge2Walkable = f;
};
function oa(n, r) {
  if (typeof r > "u" && (r = !0), n.length != 3)
    throw new Error("This function requires an array of three points [x,y]");
  var e = (n[1][0] - n[0][0]) * (n[2][1] - n[0][1]) - (n[1][1] - n[0][1]) * (n[2][0] - n[0][0]);
  return e >= 0 == r;
}
function Ck(n) {
  for (var r = 0, e = 0; e < n.length - 1; e++)
    n[e][0] < n[r][0] && (r = e);
  if (oa(
    [
      n[ri(r - 1, n.length - 1)],
      n[r],
      n[ri(r + 1, n.length - 1)]
    ],
    !0
  ))
    var s = 1;
  else
    var s = -1;
  return s;
}
function ts(n, r) {
  if (!n || !r || n.length != r.length) return !1;
  for (var e = 0, s = n.length; e < s; e++)
    if (n[e] instanceof Array && r[e] instanceof Array) {
      if (!ts(n[e], r[e])) return !1;
    } else if (n[e] != r[e])
      return !1;
  return !0;
}
function ri(n, r) {
  return (n % r + r) % r;
}
function Tk(n) {
  for (var r = {}, e = 1, s = 0, u = n.length; s < u; ++s) {
    if (Object.prototype.hasOwnProperty.call(r, n[s])) {
      e = 0;
      break;
    }
    r[n[s]] = 1;
  }
  return e;
}
function Nk(n) {
  var r = [];
  return ur(n, function(e) {
    e.geometry.type === "Polygon" && An(Ak(e), function(s) {
      r.push(Yn(s.geometry.coordinates, e.properties));
    });
  }), $e(r);
}
var Pk = Nk;
class Ok extends Wn {
  constructor() {
    super(...arguments);
    O(this, "mode", "polygon");
    O(this, "shape", "polygon");
    O(this, "lineDrawer", new dl(
      this.gm,
      { snappingMarkers: "first", targetShape: "polygon" }
    ));
    O(this, "mapEventHandlers", {
      [`${me}:draw`]: this.forwardLineDrawerEvent.bind(this),
      mousemove: this.onMouseMove.bind(this)
    });
  }
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on(
      "firstMarkerClick",
      this.polygonFinished.bind(this)
    );
  }
  onMouseMove(e) {
    return Qe(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  polygonFinished(e) {
    if (this.lineDrawer.endShape(), e.shapeCoordinates.length < 3)
      return;
    const s = this.fixShapeGeoJson(gl(e.geoJson));
    s && this.gm.features.createFeature({
      shapeGeoJson: {
        ...s,
        properties: {
          ...s.properties,
          shape: this.shape
        }
      },
      sourceName: ie.main
    });
  }
  fixShapeGeoJson(e) {
    try {
      return Mf(mk(Pk(e))).features[0];
    } catch {
      return null;
    }
  }
}
class Rk extends Wn {
  constructor() {
    super(...arguments);
    O(this, "mode", "rectangle");
    O(this, "shape", "rectangle");
    O(this, "startLngLat", null);
    O(this, "mapEventHandlers", {
      mousemove: this.onMouseMove.bind(this),
      click: this.onMouseClick.bind(this)
    });
    O(this, "throttledMethods", Dr({
      updateFeaturePosition: this.updateFeaturePosition
    }, this, this.gm.options.settings.throttlingDelay));
  }
  onStartAction() {
    this.gm.markerPointer.enable();
  }
  onEndAction() {
    this.removeTmpFeature(), this.startLngLat = null, this.gm.markerPointer.disable(), this.fireFinishEvent();
  }
  onMouseClick(e) {
    var u;
    if (!Qe(e, { warning: !0 }))
      return { next: !1 };
    const s = ((u = this.gm.markerPointer.marker) == null ? void 0 : u.getLngLat()) || e.lngLat.toArray();
    if (this.startLngLat) {
      const l = this.getFeatureGeoJson(
        ti(this.startLngLat, s)
      );
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [l] }), this.flags.featureCreateAllowed && this.finishShape(s);
    } else {
      const l = this.getFeatureGeoJson(
        ti(s, s)
      );
      if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [l] }), this.flags.featureCreateAllowed) {
        const f = this.startShape(s);
        if (f) {
          const h = this.getControlMarkerData(["geometry", "coordinates", 4]);
          this.fireStartEvent(f, h);
        }
      }
    }
    return { next: !1 };
  }
  onMouseMove(e) {
    var f;
    if (!Qe(e, { warning: !0 }))
      return { next: !1 };
    if (!this.startLngLat)
      return this.fireMarkerPointerUpdateEvent(), { next: !1 };
    const s = ((f = this.gm.markerPointer.marker) == null ? void 0 : f.getLngLat()) || e.lngLat.toArray(), u = ti(this.startLngLat, s), l = this.getFeatureGeoJson(u);
    return this.fireBeforeFeatureCreate({ geoJsonFeatures: [l] }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeaturePosition(u), { next: !1 };
  }
  startShape(e) {
    this.startLngLat = e;
    const s = ti(this.startLngLat, this.startLngLat);
    return this.featureData = this.createFeature(s), this.featureData;
  }
  finishShape(e) {
    if (this.startLngLat) {
      const s = ti(this.startLngLat, e);
      this.throttledMethods.updateFeaturePosition(s);
    }
    this.featureData && (this.isFeatureGeoJsonValid() ? this.saveFeature() : this.removeTmpFeature()), this.startLngLat = null, this.fireFinishEvent();
  }
  createFeature(e) {
    return this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(e),
      sourceName: ie.temporary
    });
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Ju(this.featureData.getGeoJson()) : !1;
  }
  getFeatureGeoJson(e) {
    return {
      ...$o(
        [e[0], e[2]],
        [e[2], e[3]]
      ),
      properties: {
        shape: this.shape
      }
    };
  }
  updateFeaturePosition(e) {
    if (!this.featureData)
      return;
    const s = $o(
      [e[0], e[1]],
      [e[2], e[3]]
    );
    this.featureData.updateGeoJsonGeometry(s.geometry);
    const u = this.getControlMarkerData(["geometry", "coordinates", 4]);
    this.fireUpdateEvent(this.featureData, u);
  }
  getControlMarkerData(e) {
    const s = this.gm.markerPointer.marker;
    return s ? {
      type: "dom",
      instance: s,
      position: {
        coordinate: s.getLngLat(),
        path: e
      }
    } : null;
  }
  fireStartEvent(e, s) {
    const u = {
      level: "system",
      type: "draw",
      mode: this.shape,
      variant: null,
      action: "start",
      featureData: e,
      markerData: s
    };
    this.gm.events.fire(`${me}:draw`, u);
  }
  fireUpdateEvent(e, s) {
    const u = {
      level: "system",
      type: "draw",
      mode: this.shape,
      variant: null,
      action: "update",
      featureData: e,
      markerData: s
    };
    this.gm.events.fire(`${me}:draw`, u);
  }
  fireFinishEvent() {
    const e = {
      level: "system",
      type: "draw",
      mode: this.shape,
      variant: null,
      action: "finish"
    };
    this.gm.events.fire(`${me}:draw`, e);
  }
}
class Dk extends Wn {
  constructor() {
    super(...arguments);
    O(this, "mode", "text_marker");
    O(this, "shape", "text_marker");
    O(this, "textarea", null);
    O(this, "mapEventHandlers", {
      click: this.onMouseClick.bind(this),
      mousemove: this.onMouseMove.bind(this)
    });
  }
  onStartAction() {
    this.gm.markerPointer.enable({ invisibleMarker: !0 });
  }
  onEndAction() {
    this.removeTextarea(), this.removeTmpFeature(), this.featureData = null, this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent();
  }
  onMouseMove(e) {
    return Qe(e, { warning: !0 }) ? (this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  onMouseClick(e) {
    var s;
    if (!Qe(e, { warning: !0 }))
      return { next: !0 };
    if (this.textarea)
      this.endShape(), this.gm.markerPointer.enable({ invisibleMarker: !0, lngLat: e.lngLat.toArray() }), this.fireMarkerPointerUpdateEvent();
    else {
      const u = ((s = this.gm.markerPointer.marker) == null ? void 0 : s.getLngLat()) || e.lngLat.toArray();
      this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(u)] }), this.flags.featureCreateAllowed && (this.featureData = this.createFeature(u), this.gm.markerPointer.disable(), this.fireMarkerPointerFinishEvent());
    }
    return { next: !1 };
  }
  createFeature(e) {
    const s = this.gm.mapAdapter.project(e);
    return this.createTextarea(s), this.gm.features.createFeature({
      shapeGeoJson: this.getFeatureGeoJson(e),
      sourceName: ie.temporary
    });
  }
  endShape() {
    var s;
    const e = ((s = this.textarea) == null ? void 0 : s.value) || "";
    this.removeTextarea(), e.trim() ? (this.updateFeatureSource(e), this.saveFeature()) : this.removeTmpFeature();
  }
  createTextarea(e) {
    this.textarea = document.createElement("textarea"), this.textarea.style.position = "absolute", this.textarea.style.left = `${e[0]}px`, this.textarea.style.top = `${e[1]}px`, this.textarea.style.opacity = "0.7", this.gm.mapAdapter.getContainer().appendChild(this.textarea), this.textarea.focus();
  }
  removeTextarea() {
    var e;
    (e = this.textarea) == null || e.remove(), this.textarea = null;
  }
  getFeatureGeoJson(e) {
    return {
      type: "Feature",
      properties: {
        shape: this.shape,
        text: ""
      },
      geometry: {
        type: "Point",
        coordinates: e
      }
    };
  }
  updateFeatureSource(e) {
    this.featureData && this.featureData.updateGeoJsonProperties({ shape: this.shape, text: e });
  }
}
class Fk extends fl {
  constructor() {
    super(...arguments);
    O(this, "mode", "ellipse");
    O(this, "shape", "ellipse");
    O(this, "xSemiAxisPoint", null);
    O(this, "xSemiAxisLngLat", null);
    O(this, "throttledMethods", Dr(
      {
        updateFeatureGeoJson: this.updateFeatureGeoJson
      },
      this,
      this.gm.options.settings.throttlingDelay
    ));
  }
  onMouseClick(e) {
    var u;
    if (!Qe(e))
      return { next: !0 };
    const s = ((u = this.gm.markerPointer.marker) == null ? void 0 : u.getLngLat()) || e.lngLat.toArray();
    if (this.circleCenterLngLat && this.xSemiAxisLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [
          this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, s)
        ]
      }), this.flags.featureCreateAllowed && (this.saveEllipseFeature(s), this.circleCenterLngLat = null, this.circleCenterPoint = null, this.xSemiAxisPoint = null, this.xSemiAxisLngLat = null, this.fireFinishEvent());
    else if (this.circleCenterLngLat)
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [this.getEllipseGeoJson(this.circleCenterLngLat, s)]
      }), this.flags.featureCreateAllowed && (this.xSemiAxisLngLat = s, this.xSemiAxisPoint = this.gm.mapAdapter.project(this.circleCenterLngLat));
    else if (this.fireBeforeFeatureCreate({ geoJsonFeatures: [this.getFeatureGeoJson(s)] }), this.flags.featureCreateAllowed) {
      this.circleCenterLngLat = s, this.circleCenterPoint = this.gm.mapAdapter.project(this.circleCenterLngLat), this.featureData = this.createFeature();
      const l = this.getControlMarkerData();
      this.featureData && l && this.fireStartEvent(this.featureData, l);
    }
    return { next: !1 };
  }
  onMouseMove() {
    if (this.circleCenterLngLat && this.gm.markerPointer.marker) {
      const e = this.gm.markerPointer.marker.getLngLat();
      this.fireBeforeFeatureCreate({
        geoJsonFeatures: [
          this.xSemiAxisLngLat ? this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, e) : this.getEllipseGeoJson(this.circleCenterLngLat, e)
        ]
      }), this.flags.featureCreateAllowed && this.throttledMethods.updateFeatureGeoJson(e);
    }
    return this.circleCenterLngLat || this.fireMarkerPointerUpdateEvent(), { next: !1 };
  }
  updateFeatureGeoJson(e) {
    if (!this.featureData || !this.circleCenterLngLat)
      return;
    const s = this.xSemiAxisLngLat ? this.getEllipseGeoJson(this.circleCenterLngLat, this.xSemiAxisLngLat, e) : this.getEllipseGeoJson(this.circleCenterLngLat, e);
    this.featureData.updateGeoJsonGeometry(s.geometry), this.featureData.updateGeoJsonProperties({
      shape: s.properties.shape
    });
    const u = this.getControlMarkerData();
    u && this.fireUpdateEvent(this.featureData, u);
  }
  saveEllipseFeature(e) {
    var s;
    if (!(!this.circleCenterLngLat || !this.xSemiAxisLngLat) && this.featureData) {
      const u = ((s = this.gm.markerPointer.marker) == null ? void 0 : s.getLngLat()) || e;
      this.updateFeatureGeoJson(u);
      const { xSemiAxis: l, ySemiAxis: f, angle: h } = Bc({
        center: this.circleCenterLngLat,
        xSemiAxisLngLat: this.xSemiAxisLngLat,
        rimLngLat: u
      });
      this.featureData.setShapeProperty("center", this.circleCenterLngLat), this.featureData.setShapeProperty("xSemiAxis", l), this.featureData.setShapeProperty("ySemiAxis", f), this.featureData.setShapeProperty("angle", h), this.isFeatureGeoJsonValid() ? (this.featureData.changeSource({ sourceName: "gm_main", atomic: !0 }), this.gm.features.fireFeatureCreatedEvent(this.featureData), this.featureData = null) : this.removeTmpFeature();
    }
  }
  isFeatureGeoJsonValid() {
    return this.featureData ? Ju(this.featureData.getGeoJson()) : !1;
  }
  getEllipseGeoJson(e, s, u) {
    const { xSemiAxis: l, ySemiAxis: f, angle: h } = Bc({
      center: e,
      xSemiAxisLngLat: s,
      rimLngLat: u
    });
    return Wa({ center: e, xSemiAxis: l, ySemiAxis: f, angle: h });
  }
}
const Gk = {
  marker: dk,
  ellipse: Fk,
  circle: ak,
  circle_marker: rk,
  text_marker: Dk,
  line: gk,
  rectangle: Rk,
  polygon: Ok,
  freehand: null,
  custom_shape: null
};
class pl extends Si {
  constructor() {
    super(...arguments);
    O(this, "mode", "drag");
    O(this, "isDragging", !1);
    O(this, "previousLngLat", null);
    O(this, "pointBasedShapes", [
      "marker",
      "circle_marker",
      "text_marker"
    ]);
    O(this, "throttledMethods", Dr({
      onMouseMove: this.onMouseMove
    }, this, this.gm.options.settings.throttlingDelay));
    O(this, "mapEventHandlers", {
      [`${me}:edit`]: this.handleGmEdit.bind(this),
      mousedown: this.onMouseDown.bind(this),
      touchstart: this.onMouseDown.bind(this),
      mousemove: this.throttledMethods.onMouseMove.bind(this),
      touchmove: this.throttledMethods.onMouseMove.bind(this),
      mouseup: this.onMouseUp.bind(this),
      touchend: this.onMouseUp.bind(this)
    });
    O(this, "getUpdatedGeoJsonHandlers", {
      marker: this.moveSource.bind(this),
      ellipse: this.moveEllipse.bind(this),
      circle: this.moveCircle.bind(this),
      circle_marker: this.moveSource.bind(this),
      text_marker: this.moveSource.bind(this),
      line: this.moveSource.bind(this),
      rectangle: this.moveSource.bind(this),
      polygon: this.moveSource.bind(this)
    });
  }
  onMouseDown(e) {
    var s;
    return this.featureData = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: [ie.main]
    }), this.featureData && this.getUpdatedGeoJsonHandlers[this.featureData.shape] ? (this.featureData.changeSource({ sourceName: ie.temporary, atomic: !0 }), this.gm.mapAdapter.setDragPan(!1), this.isDragging = !0, (s = this.snappingHelper) == null || s.addExcludedFeature(this.featureData), this.isPointBasedShape() && this.alignShapeCenterWithControlMarker(this.featureData, e), this.fireFeatureEditStartEvent({ feature: this.featureData, forceMode: "drag" }), { next: !1 }) : { next: !0 };
  }
  onMouseUp() {
    var e;
    return this.featureData ? ((e = this.snappingHelper) == null || e.clearExcludedFeatures(), this.featureData.changeSource({ sourceName: ie.main, atomic: !0 }), this.isDragging = !1, this.previousLngLat = null, this.gm.mapAdapter.setDragPan(!0), this.fireFeatureEditEndEvent({ feature: this.featureData, forceMode: "drag" }), this.featureData = null, { next: !0 }) : { next: !0 };
  }
  onMouseMove(e) {
    var s;
    if (!this.isDragging || !Qe(e, { warning: !0 }))
      return { next: !0 };
    if (this.featureData) {
      const u = ((s = this.gm.markerPointer.marker) == null ? void 0 : s.getLngLat()) || e.lngLat.toArray();
      this.moveFeature(this.featureData, u);
    }
    return { next: !1 };
  }
  isPointBasedShape() {
    return !!this.featureData && this.pointBasedShapes.includes(this.featureData.shape);
  }
  alignShapeCenterWithControlMarker(e, s) {
    var l;
    const u = Xu(e);
    u && ((l = this.gm.markerPointer.marker) == null || l.setLngLat(u), this.onMouseMove(s));
  }
  moveFeature(e, s) {
    if (!this.isDragging)
      return;
    if (!this.previousLngLat) {
      this.previousLngLat = s;
      return;
    }
    const u = this.getUpdatedGeoJsonHandlers[e.shape];
    if (u) {
      const l = u(e, this.previousLngLat, s);
      if (!l) {
        re.error("BaseDrag.moveFeature: invalid updatedGeoJson", e);
        return;
      }
      this.fireBeforeFeatureUpdate({
        features: [e],
        geoJsonFeatures: [l],
        forceMode: "drag"
      }), this.updateFeatureGeoJson({
        featureData: e,
        featureGeoJson: l,
        forceMode: "drag"
      }) && (this.previousLngLat = s);
    }
  }
  moveSource(e, s, u) {
    const l = So(s, u);
    return Cg(e, l);
  }
  moveEllipse(e, s, u) {
    if (e.shape !== "ellipse")
      return re.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const l = e.getShapeProperty("center"), f = e.getShapeProperty("xSemiAxis"), h = e.getShapeProperty("ySemiAxis"), m = e.getShapeProperty("angle");
    if (!Array.isArray(l) || typeof f != "number" || typeof h != "number" || typeof m != "number")
      return re.error(
        "BaseDrag.moveEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        e
      ), null;
    const d = So(s, u), v = [l[0] + d.lng, l[1] + d.lat];
    return Wa({
      center: v,
      xSemiAxis: f,
      ySemiAxis: h,
      angle: m
    });
  }
  moveCircle(e, s, u) {
    if (e.shape !== "circle")
      return re.error("BaseDrag.moveCircle: invalid shape type", e), null;
    const l = e.getShapeProperty("center");
    if (!Array.isArray(l))
      return re.error("BaseDrag.moveCircle: missing center in the featureData", e), null;
    const f = e.getGeoJson(), h = So(s, u), m = cg(f);
    if (!m)
      return re.error("BaseDrag.moveCircle: missing center circleRimLngLat"), null;
    const d = [
      l[0] + h.lng,
      l[1] + h.lat
    ], v = Vu({
      center: d,
      radius: this.gm.mapAdapter.getDistance(l, m)
    });
    return {
      type: "Feature",
      properties: {
        shape: "circle",
        center: d
      },
      geometry: v.geometry
    };
  }
}
const Bk = (n, r) => (n % r + r) % r, Ta = (n) => new Intl.NumberFormat("nb-NO", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
}).format(n), aM = (n) => {
  const e = [
    { range: [0, 1], unit: "cm", factor: 100 },
    { range: [1, 1e4], unit: "m", factor: 1 },
    { range: [1e4, 1 / 0], unit: "km", factor: 1e-3 }
  ].find((s) => n >= s.range[0] && n < s.range[1]);
  return e ? `${Ta(n * e.factor)} ${e.unit}` : Ta(n);
}, oM = (n) => {
  const e = [
    { range: [0, 1], unit: "cm²", factor: 1e4 },
    { range: [1, 1e4], unit: "m²", factor: 1 },
    { range: [1e5, 1 / 0], unit: "km²", factor: 1e-6 }
  ].find((s) => n >= s.range[0] && n < s.range[1]);
  return e ? `${Ta(n * e.factor)} ${e.unit}` : Ta(n);
};
class Uk extends pl {
  constructor() {
    super(...arguments);
    O(this, "mode", "change");
    O(this, "cutVertexShapeTypes", ["line", "polygon", "rectangle"]);
    O(this, "markerData", null);
    O(this, "shapeUpdateHandlers", {
      marker: this.updateSingleVertex.bind(this),
      circle: this.updateCircle.bind(this),
      circle_marker: this.updateSingleVertex.bind(this),
      ellipse: this.updateEllipse.bind(this),
      text_marker: this.updateSingleVertex.bind(this),
      line: this.updateSingleVertex.bind(this),
      rectangle: this.updateRectangle.bind(this),
      polygon: this.updateSingleVertex.bind(this)
    });
  }
  get snapGuidesInstance() {
    const e = this.gm.actionInstances.helper__snap_guides;
    return Md(e) ? e : null;
  }
  onStartAction() {
  }
  onEndAction() {
    var e;
    (e = this.snapGuidesInstance) == null || e.removeSnapGuides();
  }
  handleGmEdit(e) {
    var s;
    if (!Mi(e))
      return { next: !0 };
    if (e.action === "marker_move" && e.lngLatStart && e.markerData) {
      if (e.markerData.type === "vertex")
        return this.moveVertex(e), { next: !1 };
      if (e.lngLatEnd)
        return this.moveSource(
          e.featureData,
          e.lngLatStart,
          e.lngLatEnd
        ), { next: !1 };
    }
    return e.action === "marker_right_click" ? (this.cutVertex(e), this.fireFeatureEditEndEvent({ feature: e.featureData })) : e.action === "edge_marker_click" ? this.insertVertex(e) : e.action === "marker_captured" ? (e.featureData.changeSource({ sourceName: ie.temporary, atomic: !0 }), this.fireFeatureEditStartEvent({ feature: e.featureData })) : e.action === "marker_released" && (this.markerData = null, (s = this.snapGuidesInstance) == null || s.removeSnapGuides(), e.featureData.changeSource({ sourceName: ie.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData })), { next: !0 };
  }
  moveVertex(e) {
    var f, h, m;
    this.markerData || (this.markerData = e.markerData || null, (f = this.snapGuidesInstance) == null || f.updateSnapGuides(
      e.featureData.getGeoJson(),
      e.lngLatStart
    ));
    const s = e.featureData, u = s.shape, l = ((m = (h = this.shapeUpdateHandlers)[u]) == null ? void 0 : m.call(h, e)) || null;
    l ? (this.fireBeforeFeatureUpdate({
      features: [s],
      geoJsonFeatures: [l]
    }), this.updateFeatureGeoJson({ featureData: s, featureGeoJson: l })) : re.error("EditChange.moveVertex: invalid geojson", l, e);
  }
  cutVertex(e) {
    const s = e.featureData;
    if (e.markerData.type !== "vertex" || !this.cutVertexShapeTypes.includes(s.shape))
      return;
    let u = !1;
    const l = s.getGeoJson(), f = e.markerData.instance;
    if (ss(l)) {
      if (Mo(l) <= 2) {
        this.gm.features.delete(s);
        return;
      }
    } else if (qu(l)) {
      if (Mo(l) <= 3) {
        this.gm.features.delete(s);
        return;
      }
    } else if (zu(l) && Mo(l) <= 3) {
      this.gm.features.delete(s);
      return;
    }
    const h = Xu(f);
    h && (u = nE(l, h)), u ? (s.convertToPolygon(), s.updateGeoJsonGeometry(l.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [s],
      targetFeatures: [s],
      markerData: e.markerData
    })) : re.error("EditChange.cutVertex: feature not updated", e);
  }
  insertVertex(e) {
    if (e.markerData.type !== "edge")
      return;
    const s = e.featureData.getGeoJson(), u = e.markerData.segment.end.path, l = u.pop(), f = hi(s, u);
    typeof l == "number" && (f.splice(l, 0, [...e.markerData.position.coordinate]), e.featureData.updateGeoJsonGeometry(s.geometry), e.featureData.convertToPolygon(), this.fireFeatureUpdatedEvent({
      sourceFeatures: [e.featureData],
      targetFeatures: [e.featureData],
      markerData: e.markerData
    }));
  }
  updateSingleVertex({ featureData: e, lngLatEnd: s, markerData: u }) {
    const l = hn(e.getGeoJson()), f = hn(u.position.path), h = f.pop(), m = hi(l, f);
    return Array.isArray(m) && typeof h == "number" ? (m[h] = [...s], h === 0 && e.shape === "polygon" && (m[m.length - 1] = [...s])) : re.error("BaseDrag.moveSingleVertex: invalid coordinates", l, f), l;
  }
  updateCircle({ featureData: e, lngLatEnd: s }) {
    if (e.shape !== "circle" || e.shapeProperties.center === null)
      return re.error("BaseDrag.moveCircle: invalid shape type / missing center", e), null;
    const u = e.shapeProperties.center, l = Vu({
      center: u,
      radius: this.gm.mapAdapter.getDistance(u, s)
    });
    return {
      type: "Feature",
      properties: {
        shape: "circle",
        center: u
      },
      geometry: l.geometry
    };
  }
  updateEllipse(e) {
    const { featureData: s, lngLatEnd: u, markerData: l } = e;
    if (s.shape !== "ellipse")
      return re.error("EditChange.updateEllipse: invalid shape type", s), null;
    const f = s.getShapeProperty("center");
    let h = s.getShapeProperty("xSemiAxis"), m = s.getShapeProperty("ySemiAxis");
    const d = s.getShapeProperty("angle");
    if (!Array.isArray(f) || typeof h != "number" || typeof m != "number" || typeof d != "number")
      return re.error(
        "updateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        s
      ), null;
    const v = this.gm.mapAdapter.getDistance(f, u), y = l.position.path[3], E = Math.floor(y / hg * 4);
    return (E === 0 || E === 2 ? "x" : "y") === "x" ? h = v : m = v, Wa({
      center: f,
      xSemiAxis: h,
      ySemiAxis: m,
      angle: d
    });
  }
  updateRectangle({ featureData: e, lngLatStart: s, lngLatEnd: u }) {
    const f = e.getGeoJson(), h = f.geometry.coordinates[0], { absCoordIndex: m } = Xa(f, s);
    if (m === -1)
      return re.error("EditChange.updateRectangle: start vertex not found", e), null;
    const d = Bk(m - 2, 4), v = h[d];
    return $o(
      u,
      v
    );
  }
}
const Ld = (n) => n.length > 0;
function zk(n, r, {
  ignoreSelfIntersections: e = !0
} = { ignoreSelfIntersections: !0 }) {
  let s = !0;
  return ur(n, (u) => {
    ur(r, (l) => {
      if (s === !1)
        return !1;
      s = qk(
        u.geometry,
        l.geometry,
        e
      );
    });
  }), s;
}
function qk(n, r, e) {
  switch (n.type) {
    case "Point":
      switch (r.type) {
        case "Point":
          return !Vk(n.coordinates, r.coordinates);
        case "LineString":
          return !Xh(r, n);
        case "Polygon":
          return !Tr(n, r);
      }
      break;
    case "LineString":
      switch (r.type) {
        case "Point":
          return !Xh(n, r);
        case "LineString":
          return !Yk(n, r, e);
        case "Polygon":
          return !Wh(r, n, e);
      }
      break;
    case "Polygon":
      switch (r.type) {
        case "Point":
          return !Tr(r, n);
        case "LineString":
          return !Wh(n, r, e);
        case "Polygon":
          return !Hk(r, n, e);
      }
  }
  return !1;
}
function Xh(n, r) {
  for (let e = 0; e < n.coordinates.length - 1; e++)
    if (Jk(
      n.coordinates[e],
      n.coordinates[e + 1],
      r.coordinates
    ))
      return !0;
  return !1;
}
function Yk(n, r, e) {
  return ws(n, r, {
    ignoreSelfIntersections: e
  }).features.length > 0;
}
function Wh(n, r, e) {
  for (const u of r.coordinates)
    if (Tr(u, n))
      return !0;
  return ws(r, Yo(n), {
    ignoreSelfIntersections: e
  }).features.length > 0;
}
function Hk(n, r, e) {
  for (const u of n.coordinates[0])
    if (Tr(u, r))
      return !0;
  for (const u of r.coordinates[0])
    if (Tr(u, n))
      return !0;
  return ws(
    Yo(n),
    Yo(r),
    { ignoreSelfIntersections: e }
  ).features.length > 0;
}
function Jk(n, r, e) {
  const s = e[0] - n[0], u = e[1] - n[1], l = r[0] - n[0], f = r[1] - n[1];
  return s * f - u * l !== 0 ? !1 : Math.abs(l) >= Math.abs(f) ? l > 0 ? n[0] <= e[0] && e[0] <= r[0] : r[0] <= e[0] && e[0] <= n[0] : f > 0 ? n[1] <= e[1] && e[1] <= r[1] : r[1] <= e[1] && e[1] <= n[1];
}
function Vk(n, r) {
  return n[0] === r[0] && n[1] === r[1];
}
function Xk(n, r, {
  ignoreSelfIntersections: e = !0
} = {}) {
  let s = !1;
  return ur(n, (u) => {
    ur(r, (l) => {
      if (s === !0)
        return !0;
      s = !zk(u.geometry, l.geometry, {
        ignoreSelfIntersections: e
      });
    });
  }), s;
}
var bd = Xk, Wk = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, Bo = Math.ceil, Jt = Math.floor, Lt = "[BigNumber Error] ", Zh = Lt + "Number primitive has more than 15 significant digits: ", sn = 1e14, we = 14, jh = 9007199254740991, Uo = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], ir = 1e7, Tt = 1e9;
function Ad(n) {
  var r, e, s, u = I.prototype = { constructor: I, toString: null, valueOf: null }, l = new I(1), f = 20, h = 4, m = -7, d = 21, v = -1e7, y = 1e7, E = !1, S = 1, M = 0, D = {
    prefix: "",
    groupSize: 3,
    secondaryGroupSize: 0,
    groupSeparator: ",",
    decimalSeparator: ".",
    fractionGroupSize: 0,
    fractionGroupSeparator: " ",
    // non-breaking space
    suffix: ""
  }, U = "0123456789abcdefghijklmnopqrstuvwxyz", G = !0;
  function I(x, k) {
    var b, A, T, F, P, N, R, Y, z = this;
    if (!(z instanceof I)) return new I(x, k);
    if (k == null) {
      if (x && x._isBigNumber === !0) {
        z.s = x.s, !x.c || x.e > y ? z.c = z.e = null : x.e < v ? z.c = [z.e = 0] : (z.e = x.e, z.c = x.c.slice());
        return;
      }
      if ((N = typeof x == "number") && x * 0 == 0) {
        if (z.s = 1 / x < 0 ? (x = -x, -1) : 1, x === ~~x) {
          for (F = 0, P = x; P >= 10; P /= 10, F++) ;
          F > y ? z.c = z.e = null : (z.e = F, z.c = [x]);
          return;
        }
        Y = String(x);
      } else {
        if (!Wk.test(Y = String(x))) return s(z, Y, N);
        z.s = Y.charCodeAt(0) == 45 ? (Y = Y.slice(1), -1) : 1;
      }
      (F = Y.indexOf(".")) > -1 && (Y = Y.replace(".", "")), (P = Y.search(/e/i)) > 0 ? (F < 0 && (F = P), F += +Y.slice(P + 1), Y = Y.substring(0, P)) : F < 0 && (F = Y.length);
    } else {
      if (He(k, 2, U.length, "Base"), k == 10 && G)
        return z = new I(x), W(z, f + z.e + 1, h);
      if (Y = String(x), N = typeof x == "number") {
        if (x * 0 != 0) return s(z, Y, N, k);
        if (z.s = 1 / x < 0 ? (Y = Y.slice(1), -1) : 1, I.DEBUG && Y.replace(/^0\.0*|\./, "").length > 15)
          throw Error(Zh + x);
      } else
        z.s = Y.charCodeAt(0) === 45 ? (Y = Y.slice(1), -1) : 1;
      for (b = U.slice(0, k), F = P = 0, R = Y.length; P < R; P++)
        if (b.indexOf(A = Y.charAt(P)) < 0) {
          if (A == ".") {
            if (P > F) {
              F = R;
              continue;
            }
          } else if (!T && (Y == Y.toUpperCase() && (Y = Y.toLowerCase()) || Y == Y.toLowerCase() && (Y = Y.toUpperCase()))) {
            T = !0, P = -1, F = 0;
            continue;
          }
          return s(z, String(x), N, k);
        }
      N = !1, Y = e(Y, k, 10, z.s), (F = Y.indexOf(".")) > -1 ? Y = Y.replace(".", "") : F = Y.length;
    }
    for (P = 0; Y.charCodeAt(P) === 48; P++) ;
    for (R = Y.length; Y.charCodeAt(--R) === 48; ) ;
    if (Y = Y.slice(P, ++R)) {
      if (R -= P, N && I.DEBUG && R > 15 && (x > jh || x !== Jt(x)))
        throw Error(Zh + z.s * x);
      if ((F = F - P - 1) > y)
        z.c = z.e = null;
      else if (F < v)
        z.c = [z.e = 0];
      else {
        if (z.e = F, z.c = [], P = (F + 1) % we, F < 0 && (P += we), P < R) {
          for (P && z.c.push(+Y.slice(0, P)), R -= we; P < R; )
            z.c.push(+Y.slice(P, P += we));
          P = we - (Y = Y.slice(P)).length;
        } else
          P -= R;
        for (; P--; Y += "0") ;
        z.c.push(+Y);
      }
    } else
      z.c = [z.e = 0];
  }
  I.clone = Ad, I.ROUND_UP = 0, I.ROUND_DOWN = 1, I.ROUND_CEIL = 2, I.ROUND_FLOOR = 3, I.ROUND_HALF_UP = 4, I.ROUND_HALF_DOWN = 5, I.ROUND_HALF_EVEN = 6, I.ROUND_HALF_CEIL = 7, I.ROUND_HALF_FLOOR = 8, I.EUCLID = 9, I.config = I.set = function(x) {
    var k, b;
    if (x != null)
      if (typeof x == "object") {
        if (x.hasOwnProperty(k = "DECIMAL_PLACES") && (b = x[k], He(b, 0, Tt, k), f = b), x.hasOwnProperty(k = "ROUNDING_MODE") && (b = x[k], He(b, 0, 8, k), h = b), x.hasOwnProperty(k = "EXPONENTIAL_AT") && (b = x[k], b && b.pop ? (He(b[0], -1e9, 0, k), He(b[1], 0, Tt, k), m = b[0], d = b[1]) : (He(b, -1e9, Tt, k), m = -(d = b < 0 ? -b : b))), x.hasOwnProperty(k = "RANGE"))
          if (b = x[k], b && b.pop)
            He(b[0], -1e9, -1, k), He(b[1], 1, Tt, k), v = b[0], y = b[1];
          else if (He(b, -1e9, Tt, k), b)
            v = -(y = b < 0 ? -b : b);
          else
            throw Error(Lt + k + " cannot be zero: " + b);
        if (x.hasOwnProperty(k = "CRYPTO"))
          if (b = x[k], b === !!b)
            if (b)
              if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
                E = b;
              else
                throw E = !b, Error(Lt + "crypto unavailable");
            else
              E = b;
          else
            throw Error(Lt + k + " not true or false: " + b);
        if (x.hasOwnProperty(k = "MODULO_MODE") && (b = x[k], He(b, 0, 9, k), S = b), x.hasOwnProperty(k = "POW_PRECISION") && (b = x[k], He(b, 0, Tt, k), M = b), x.hasOwnProperty(k = "FORMAT"))
          if (b = x[k], typeof b == "object") D = b;
          else throw Error(Lt + k + " not an object: " + b);
        if (x.hasOwnProperty(k = "ALPHABET"))
          if (b = x[k], typeof b == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(b))
            G = b.slice(0, 10) == "0123456789", U = b;
          else
            throw Error(Lt + k + " invalid: " + b);
      } else
        throw Error(Lt + "Object expected: " + x);
    return {
      DECIMAL_PLACES: f,
      ROUNDING_MODE: h,
      EXPONENTIAL_AT: [m, d],
      RANGE: [v, y],
      CRYPTO: E,
      MODULO_MODE: S,
      POW_PRECISION: M,
      FORMAT: D,
      ALPHABET: U
    };
  }, I.isBigNumber = function(x) {
    if (!x || x._isBigNumber !== !0) return !1;
    if (!I.DEBUG) return !0;
    var k, b, A = x.c, T = x.e, F = x.s;
    e: if ({}.toString.call(A) == "[object Array]") {
      if ((F === 1 || F === -1) && T >= -1e9 && T <= Tt && T === Jt(T)) {
        if (A[0] === 0) {
          if (T === 0 && A.length === 1) return !0;
          break e;
        }
        if (k = (T + 1) % we, k < 1 && (k += we), String(A[0]).length == k) {
          for (k = 0; k < A.length; k++)
            if (b = A[k], b < 0 || b >= sn || b !== Jt(b)) break e;
          if (b !== 0) return !0;
        }
      }
    } else if (A === null && T === null && (F === null || F === 1 || F === -1))
      return !0;
    throw Error(Lt + "Invalid BigNumber: " + x);
  }, I.maximum = I.max = function() {
    return J(arguments, -1);
  }, I.minimum = I.min = function() {
    return J(arguments, 1);
  }, I.random = function() {
    var x = 9007199254740992, k = Math.random() * x & 2097151 ? function() {
      return Jt(Math.random() * x);
    } : function() {
      return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
    };
    return function(b) {
      var A, T, F, P, N, R = 0, Y = [], z = new I(l);
      if (b == null ? b = f : He(b, 0, Tt), P = Bo(b / we), E)
        if (crypto.getRandomValues) {
          for (A = crypto.getRandomValues(new Uint32Array(P *= 2)); R < P; )
            N = A[R] * 131072 + (A[R + 1] >>> 11), N >= 9e15 ? (T = crypto.getRandomValues(new Uint32Array(2)), A[R] = T[0], A[R + 1] = T[1]) : (Y.push(N % 1e14), R += 2);
          R = P / 2;
        } else if (crypto.randomBytes) {
          for (A = crypto.randomBytes(P *= 7); R < P; )
            N = (A[R] & 31) * 281474976710656 + A[R + 1] * 1099511627776 + A[R + 2] * 4294967296 + A[R + 3] * 16777216 + (A[R + 4] << 16) + (A[R + 5] << 8) + A[R + 6], N >= 9e15 ? crypto.randomBytes(7).copy(A, R) : (Y.push(N % 1e14), R += 7);
          R = P / 7;
        } else
          throw E = !1, Error(Lt + "crypto unavailable");
      if (!E)
        for (; R < P; )
          N = k(), N < 9e15 && (Y[R++] = N % 1e14);
      for (P = Y[--R], b %= we, P && b && (N = Uo[we - b], Y[R] = Jt(P / N) * N); Y[R] === 0; Y.pop(), R--) ;
      if (R < 0)
        Y = [F = 0];
      else {
        for (F = -1; Y[0] === 0; Y.splice(0, 1), F -= we) ;
        for (R = 1, N = Y[0]; N >= 10; N /= 10, R++) ;
        R < we && (F -= we - R);
      }
      return z.e = F, z.c = Y, z;
    };
  }(), I.sum = function() {
    for (var x = 1, k = arguments, b = new I(k[0]); x < k.length; ) b = b.plus(k[x++]);
    return b;
  }, e = /* @__PURE__ */ function() {
    var x = "0123456789";
    function k(b, A, T, F) {
      for (var P, N = [0], R, Y = 0, z = b.length; Y < z; ) {
        for (R = N.length; R--; N[R] *= A) ;
        for (N[0] += F.indexOf(b.charAt(Y++)), P = 0; P < N.length; P++)
          N[P] > T - 1 && (N[P + 1] == null && (N[P + 1] = 0), N[P + 1] += N[P] / T | 0, N[P] %= T);
      }
      return N.reverse();
    }
    return function(b, A, T, F, P) {
      var N, R, Y, z, j, K, ne, de, ce = b.indexOf("."), ae = f, ue = h;
      for (ce >= 0 && (z = M, M = 0, b = b.replace(".", ""), de = new I(A), K = de.pow(b.length - ce), M = z, de.c = k(
        Gn(Ht(K.c), K.e, "0"),
        10,
        T,
        x
      ), de.e = de.c.length), ne = k(b, A, T, P ? (N = U, x) : (N = x, U)), Y = z = ne.length; ne[--z] == 0; ne.pop()) ;
      if (!ne[0]) return N.charAt(0);
      if (ce < 0 ? --Y : (K.c = ne, K.e = Y, K.s = F, K = r(K, de, ae, ue, T), ne = K.c, j = K.r, Y = K.e), R = Y + ae + 1, ce = ne[R], z = T / 2, j = j || R < 0 || ne[R + 1] != null, j = ue < 4 ? (ce != null || j) && (ue == 0 || ue == (K.s < 0 ? 3 : 2)) : ce > z || ce == z && (ue == 4 || j || ue == 6 && ne[R - 1] & 1 || ue == (K.s < 0 ? 8 : 7)), R < 1 || !ne[0])
        b = j ? Gn(N.charAt(1), -ae, N.charAt(0)) : N.charAt(0);
      else {
        if (ne.length = R, j)
          for (--T; ++ne[--R] > T; )
            ne[R] = 0, R || (++Y, ne = [1].concat(ne));
        for (z = ne.length; !ne[--z]; ) ;
        for (ce = 0, b = ""; ce <= z; b += N.charAt(ne[ce++])) ;
        b = Gn(b, Y, N.charAt(0));
      }
      return b;
    };
  }(), r = /* @__PURE__ */ function() {
    function x(A, T, F) {
      var P, N, R, Y, z = 0, j = A.length, K = T % ir, ne = T / ir | 0;
      for (A = A.slice(); j--; )
        R = A[j] % ir, Y = A[j] / ir | 0, P = ne * R + Y * K, N = K * R + P % ir * ir + z, z = (N / F | 0) + (P / ir | 0) + ne * Y, A[j] = N % F;
      return z && (A = [z].concat(A)), A;
    }
    function k(A, T, F, P) {
      var N, R;
      if (F != P)
        R = F > P ? 1 : -1;
      else
        for (N = R = 0; N < F; N++)
          if (A[N] != T[N]) {
            R = A[N] > T[N] ? 1 : -1;
            break;
          }
      return R;
    }
    function b(A, T, F, P) {
      for (var N = 0; F--; )
        A[F] -= N, N = A[F] < T[F] ? 1 : 0, A[F] = N * P + A[F] - T[F];
      for (; !A[0] && A.length > 1; A.splice(0, 1)) ;
    }
    return function(A, T, F, P, N) {
      var R, Y, z, j, K, ne, de, ce, ae, ue, xe, Ae, V, Qt, Le, he, C, Oe = A.s == T.s ? 1 : -1, Pe = A.c, Se = T.c;
      if (!Pe || !Pe[0] || !Se || !Se[0])
        return new I(
          // Return NaN if either NaN, or both Infinity or 0.
          !A.s || !T.s || (Pe ? Se && Pe[0] == Se[0] : !Se) ? NaN : (
            // Return ±0 if x is ±0 or y is ±Infinity, or return ±Infinity as y is ±0.
            Pe && Pe[0] == 0 || !Se ? Oe * 0 : Oe / 0
          )
        );
      for (ce = new I(Oe), ae = ce.c = [], Y = A.e - T.e, Oe = F + Y + 1, N || (N = sn, Y = Vt(A.e / we) - Vt(T.e / we), Oe = Oe / we | 0), z = 0; Se[z] == (Pe[z] || 0); z++) ;
      if (Se[z] > (Pe[z] || 0) && Y--, Oe < 0)
        ae.push(1), j = !0;
      else {
        for (Qt = Pe.length, he = Se.length, z = 0, Oe += 2, K = Jt(N / (Se[0] + 1)), K > 1 && (Se = x(Se, K, N), Pe = x(Pe, K, N), he = Se.length, Qt = Pe.length), V = he, ue = Pe.slice(0, he), xe = ue.length; xe < he; ue[xe++] = 0) ;
        C = Se.slice(), C = [0].concat(C), Le = Se[0], Se[1] >= N / 2 && Le++;
        do {
          if (K = 0, R = k(Se, ue, he, xe), R < 0) {
            if (Ae = ue[0], he != xe && (Ae = Ae * N + (ue[1] || 0)), K = Jt(Ae / Le), K > 1)
              for (K >= N && (K = N - 1), ne = x(Se, K, N), de = ne.length, xe = ue.length; k(ne, ue, de, xe) == 1; )
                K--, b(ne, he < de ? C : Se, de, N), de = ne.length, R = 1;
            else
              K == 0 && (R = K = 1), ne = Se.slice(), de = ne.length;
            if (de < xe && (ne = [0].concat(ne)), b(ue, ne, xe, N), xe = ue.length, R == -1)
              for (; k(Se, ue, he, xe) < 1; )
                K++, b(ue, he < xe ? C : Se, xe, N), xe = ue.length;
          } else R === 0 && (K++, ue = [0]);
          ae[z++] = K, ue[0] ? ue[xe++] = Pe[V] || 0 : (ue = [Pe[V]], xe = 1);
        } while ((V++ < Qt || ue[0] != null) && Oe--);
        j = ue[0] != null, ae[0] || ae.splice(0, 1);
      }
      if (N == sn) {
        for (z = 1, Oe = ae[0]; Oe >= 10; Oe /= 10, z++) ;
        W(ce, F + (ce.e = z + Y * we - 1) + 1, P, j);
      } else
        ce.e = Y, ce.r = +j;
      return ce;
    };
  }();
  function H(x, k, b, A) {
    var T, F, P, N, R;
    if (b == null ? b = h : He(b, 0, 8), !x.c) return x.toString();
    if (T = x.c[0], P = x.e, k == null)
      R = Ht(x.c), R = A == 1 || A == 2 && (P <= m || P >= d) ? Zs(R, P) : Gn(R, P, "0");
    else if (x = W(new I(x), k, b), F = x.e, R = Ht(x.c), N = R.length, A == 1 || A == 2 && (k <= F || F <= m)) {
      for (; N < k; R += "0", N++) ;
      R = Zs(R, F);
    } else if (k -= P, R = Gn(R, F, "0"), F + 1 > N) {
      if (--k > 0) for (R += "."; k--; R += "0") ;
    } else if (k += F - N, k > 0)
      for (F + 1 == N && (R += "."); k--; R += "0") ;
    return x.s < 0 && T ? "-" + R : R;
  }
  function J(x, k) {
    for (var b, A, T = 1, F = new I(x[0]); T < x.length; T++)
      A = new I(x[T]), (!A.s || (b = xr(F, A)) === k || b === 0 && F.s === k) && (F = A);
    return F;
  }
  function X(x, k, b) {
    for (var A = 1, T = k.length; !k[--T]; k.pop()) ;
    for (T = k[0]; T >= 10; T /= 10, A++) ;
    return (b = A + b * we - 1) > y ? x.c = x.e = null : b < v ? x.c = [x.e = 0] : (x.e = b, x.c = k), x;
  }
  s = /* @__PURE__ */ function() {
    var x = /^(-?)0([xbo])(?=\w[\w.]*$)/i, k = /^([^.]+)\.$/, b = /^\.([^.]+)$/, A = /^-?(Infinity|NaN)$/, T = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
    return function(F, P, N, R) {
      var Y, z = N ? P : P.replace(T, "");
      if (A.test(z))
        F.s = isNaN(z) ? null : z < 0 ? -1 : 1;
      else {
        if (!N && (z = z.replace(x, function(j, K, ne) {
          return Y = (ne = ne.toLowerCase()) == "x" ? 16 : ne == "b" ? 2 : 8, !R || R == Y ? K : j;
        }), R && (Y = R, z = z.replace(k, "$1").replace(b, "0.$1")), P != z))
          return new I(z, Y);
        if (I.DEBUG)
          throw Error(Lt + "Not a" + (R ? " base " + R : "") + " number: " + P);
        F.s = null;
      }
      F.c = F.e = null;
    };
  }();
  function W(x, k, b, A) {
    var T, F, P, N, R, Y, z, j = x.c, K = Uo;
    if (j) {
      e: {
        for (T = 1, N = j[0]; N >= 10; N /= 10, T++) ;
        if (F = k - T, F < 0)
          F += we, P = k, R = j[Y = 0], z = Jt(R / K[T - P - 1] % 10);
        else if (Y = Bo((F + 1) / we), Y >= j.length)
          if (A) {
            for (; j.length <= Y; j.push(0)) ;
            R = z = 0, T = 1, F %= we, P = F - we + 1;
          } else
            break e;
        else {
          for (R = N = j[Y], T = 1; N >= 10; N /= 10, T++) ;
          F %= we, P = F - we + T, z = P < 0 ? 0 : Jt(R / K[T - P - 1] % 10);
        }
        if (A = A || k < 0 || // Are there any non-zero digits after the rounding digit?
        // The expression  n % pows10[d - j - 1]  returns all digits of n to the right
        // of the digit at j, e.g. if n is 908714 and j is 2, the expression gives 714.
        j[Y + 1] != null || (P < 0 ? R : R % K[T - P - 1]), A = b < 4 ? (z || A) && (b == 0 || b == (x.s < 0 ? 3 : 2)) : z > 5 || z == 5 && (b == 4 || A || b == 6 && // Check whether the digit to the left of the rounding digit is odd.
        (F > 0 ? P > 0 ? R / K[T - P] : 0 : j[Y - 1]) % 10 & 1 || b == (x.s < 0 ? 8 : 7)), k < 1 || !j[0])
          return j.length = 0, A ? (k -= x.e + 1, j[0] = K[(we - k % we) % we], x.e = -k || 0) : j[0] = x.e = 0, x;
        if (F == 0 ? (j.length = Y, N = 1, Y--) : (j.length = Y + 1, N = K[we - F], j[Y] = P > 0 ? Jt(R / K[T - P] % K[P]) * N : 0), A)
          for (; ; )
            if (Y == 0) {
              for (F = 1, P = j[0]; P >= 10; P /= 10, F++) ;
              for (P = j[0] += N, N = 1; P >= 10; P /= 10, N++) ;
              F != N && (x.e++, j[0] == sn && (j[0] = 1));
              break;
            } else {
              if (j[Y] += N, j[Y] != sn) break;
              j[Y--] = 0, N = 1;
            }
        for (F = j.length; j[--F] === 0; j.pop()) ;
      }
      x.e > y ? x.c = x.e = null : x.e < v && (x.c = [x.e = 0]);
    }
    return x;
  }
  function $(x) {
    var k, b = x.e;
    return b === null ? x.toString() : (k = Ht(x.c), k = b <= m || b >= d ? Zs(k, b) : Gn(k, b, "0"), x.s < 0 ? "-" + k : k);
  }
  return u.absoluteValue = u.abs = function() {
    var x = new I(this);
    return x.s < 0 && (x.s = 1), x;
  }, u.comparedTo = function(x, k) {
    return xr(this, new I(x, k));
  }, u.decimalPlaces = u.dp = function(x, k) {
    var b, A, T, F = this;
    if (x != null)
      return He(x, 0, Tt), k == null ? k = h : He(k, 0, 8), W(new I(F), x + F.e + 1, k);
    if (!(b = F.c)) return null;
    if (A = ((T = b.length - 1) - Vt(this.e / we)) * we, T = b[T]) for (; T % 10 == 0; T /= 10, A--) ;
    return A < 0 && (A = 0), A;
  }, u.dividedBy = u.div = function(x, k) {
    return r(this, new I(x, k), f, h);
  }, u.dividedToIntegerBy = u.idiv = function(x, k) {
    return r(this, new I(x, k), 0, 1);
  }, u.exponentiatedBy = u.pow = function(x, k) {
    var b, A, T, F, P, N, R, Y, z, j = this;
    if (x = new I(x), x.c && !x.isInteger())
      throw Error(Lt + "Exponent not an integer: " + $(x));
    if (k != null && (k = new I(k)), N = x.e > 14, !j.c || !j.c[0] || j.c[0] == 1 && !j.e && j.c.length == 1 || !x.c || !x.c[0])
      return z = new I(Math.pow(+$(j), N ? x.s * (2 - Ws(x)) : +$(x))), k ? z.mod(k) : z;
    if (R = x.s < 0, k) {
      if (k.c ? !k.c[0] : !k.s) return new I(NaN);
      A = !R && j.isInteger() && k.isInteger(), A && (j = j.mod(k));
    } else {
      if (x.e > 9 && (j.e > 0 || j.e < -1 || (j.e == 0 ? j.c[0] > 1 || N && j.c[1] >= 24e7 : j.c[0] < 8e13 || N && j.c[0] <= 9999975e7)))
        return F = j.s < 0 && Ws(x) ? -0 : 0, j.e > -1 && (F = 1 / F), new I(R ? 1 / F : F);
      M && (F = Bo(M / we + 2));
    }
    for (N ? (b = new I(0.5), R && (x.s = 1), Y = Ws(x)) : (T = Math.abs(+$(x)), Y = T % 2), z = new I(l); ; ) {
      if (Y) {
        if (z = z.times(j), !z.c) break;
        F ? z.c.length > F && (z.c.length = F) : A && (z = z.mod(k));
      }
      if (T) {
        if (T = Jt(T / 2), T === 0) break;
        Y = T % 2;
      } else if (x = x.times(b), W(x, x.e + 1, 1), x.e > 14)
        Y = Ws(x);
      else {
        if (T = +$(x), T === 0) break;
        Y = T % 2;
      }
      j = j.times(j), F ? j.c && j.c.length > F && (j.c.length = F) : A && (j = j.mod(k));
    }
    return A ? z : (R && (z = l.div(z)), k ? z.mod(k) : F ? W(z, M, h, P) : z);
  }, u.integerValue = function(x) {
    var k = new I(this);
    return x == null ? x = h : He(x, 0, 8), W(k, k.e + 1, x);
  }, u.isEqualTo = u.eq = function(x, k) {
    return xr(this, new I(x, k)) === 0;
  }, u.isFinite = function() {
    return !!this.c;
  }, u.isGreaterThan = u.gt = function(x, k) {
    return xr(this, new I(x, k)) > 0;
  }, u.isGreaterThanOrEqualTo = u.gte = function(x, k) {
    return (k = xr(this, new I(x, k))) === 1 || k === 0;
  }, u.isInteger = function() {
    return !!this.c && Vt(this.e / we) > this.c.length - 2;
  }, u.isLessThan = u.lt = function(x, k) {
    return xr(this, new I(x, k)) < 0;
  }, u.isLessThanOrEqualTo = u.lte = function(x, k) {
    return (k = xr(this, new I(x, k))) === -1 || k === 0;
  }, u.isNaN = function() {
    return !this.s;
  }, u.isNegative = function() {
    return this.s < 0;
  }, u.isPositive = function() {
    return this.s > 0;
  }, u.isZero = function() {
    return !!this.c && this.c[0] == 0;
  }, u.minus = function(x, k) {
    var b, A, T, F, P = this, N = P.s;
    if (x = new I(x, k), k = x.s, !N || !k) return new I(NaN);
    if (N != k)
      return x.s = -k, P.plus(x);
    var R = P.e / we, Y = x.e / we, z = P.c, j = x.c;
    if (!R || !Y) {
      if (!z || !j) return z ? (x.s = -k, x) : new I(j ? P : NaN);
      if (!z[0] || !j[0])
        return j[0] ? (x.s = -k, x) : new I(z[0] ? P : (
          // IEEE 754 (2008) 6.3: n - n = -0 when rounding to -Infinity
          h == 3 ? -0 : 0
        ));
    }
    if (R = Vt(R), Y = Vt(Y), z = z.slice(), N = R - Y) {
      for ((F = N < 0) ? (N = -N, T = z) : (Y = R, T = j), T.reverse(), k = N; k--; T.push(0)) ;
      T.reverse();
    } else
      for (A = (F = (N = z.length) < (k = j.length)) ? N : k, N = k = 0; k < A; k++)
        if (z[k] != j[k]) {
          F = z[k] < j[k];
          break;
        }
    if (F && (T = z, z = j, j = T, x.s = -x.s), k = (A = j.length) - (b = z.length), k > 0) for (; k--; z[b++] = 0) ;
    for (k = sn - 1; A > N; ) {
      if (z[--A] < j[A]) {
        for (b = A; b && !z[--b]; z[b] = k) ;
        --z[b], z[A] += sn;
      }
      z[A] -= j[A];
    }
    for (; z[0] == 0; z.splice(0, 1), --Y) ;
    return z[0] ? X(x, z, Y) : (x.s = h == 3 ? -1 : 1, x.c = [x.e = 0], x);
  }, u.modulo = u.mod = function(x, k) {
    var b, A, T = this;
    return x = new I(x, k), !T.c || !x.s || x.c && !x.c[0] ? new I(NaN) : !x.c || T.c && !T.c[0] ? new I(T) : (S == 9 ? (A = x.s, x.s = 1, b = r(T, x, 0, 3), x.s = A, b.s *= A) : b = r(T, x, 0, S), x = T.minus(b.times(x)), !x.c[0] && S == 1 && (x.s = T.s), x);
  }, u.multipliedBy = u.times = function(x, k) {
    var b, A, T, F, P, N, R, Y, z, j, K, ne, de, ce, ae, ue = this, xe = ue.c, Ae = (x = new I(x, k)).c;
    if (!xe || !Ae || !xe[0] || !Ae[0])
      return !ue.s || !x.s || xe && !xe[0] && !Ae || Ae && !Ae[0] && !xe ? x.c = x.e = x.s = null : (x.s *= ue.s, !xe || !Ae ? x.c = x.e = null : (x.c = [0], x.e = 0)), x;
    for (A = Vt(ue.e / we) + Vt(x.e / we), x.s *= ue.s, R = xe.length, j = Ae.length, R < j && (de = xe, xe = Ae, Ae = de, T = R, R = j, j = T), T = R + j, de = []; T--; de.push(0)) ;
    for (ce = sn, ae = ir, T = j; --T >= 0; ) {
      for (b = 0, K = Ae[T] % ae, ne = Ae[T] / ae | 0, P = R, F = T + P; F > T; )
        Y = xe[--P] % ae, z = xe[P] / ae | 0, N = ne * Y + z * K, Y = K * Y + N % ae * ae + de[F] + b, b = (Y / ce | 0) + (N / ae | 0) + ne * z, de[F--] = Y % ce;
      de[F] = b;
    }
    return b ? ++A : de.splice(0, 1), X(x, de, A);
  }, u.negated = function() {
    var x = new I(this);
    return x.s = -x.s || null, x;
  }, u.plus = function(x, k) {
    var b, A = this, T = A.s;
    if (x = new I(x, k), k = x.s, !T || !k) return new I(NaN);
    if (T != k)
      return x.s = -k, A.minus(x);
    var F = A.e / we, P = x.e / we, N = A.c, R = x.c;
    if (!F || !P) {
      if (!N || !R) return new I(T / 0);
      if (!N[0] || !R[0]) return R[0] ? x : new I(N[0] ? A : T * 0);
    }
    if (F = Vt(F), P = Vt(P), N = N.slice(), T = F - P) {
      for (T > 0 ? (P = F, b = R) : (T = -T, b = N), b.reverse(); T--; b.push(0)) ;
      b.reverse();
    }
    for (T = N.length, k = R.length, T - k < 0 && (b = R, R = N, N = b, k = T), T = 0; k; )
      T = (N[--k] = N[k] + R[k] + T) / sn | 0, N[k] = sn === N[k] ? 0 : N[k] % sn;
    return T && (N = [T].concat(N), ++P), X(x, N, P);
  }, u.precision = u.sd = function(x, k) {
    var b, A, T, F = this;
    if (x != null && x !== !!x)
      return He(x, 1, Tt), k == null ? k = h : He(k, 0, 8), W(new I(F), x, k);
    if (!(b = F.c)) return null;
    if (T = b.length - 1, A = T * we + 1, T = b[T]) {
      for (; T % 10 == 0; T /= 10, A--) ;
      for (T = b[0]; T >= 10; T /= 10, A++) ;
    }
    return x && F.e + 1 > A && (A = F.e + 1), A;
  }, u.shiftedBy = function(x) {
    return He(x, -9007199254740991, jh), this.times("1e" + x);
  }, u.squareRoot = u.sqrt = function() {
    var x, k, b, A, T, F = this, P = F.c, N = F.s, R = F.e, Y = f + 4, z = new I("0.5");
    if (N !== 1 || !P || !P[0])
      return new I(!N || N < 0 && (!P || P[0]) ? NaN : P ? F : 1 / 0);
    if (N = Math.sqrt(+$(F)), N == 0 || N == 1 / 0 ? (k = Ht(P), (k.length + R) % 2 == 0 && (k += "0"), N = Math.sqrt(+k), R = Vt((R + 1) / 2) - (R < 0 || R % 2), N == 1 / 0 ? k = "5e" + R : (k = N.toExponential(), k = k.slice(0, k.indexOf("e") + 1) + R), b = new I(k)) : b = new I(N + ""), b.c[0]) {
      for (R = b.e, N = R + Y, N < 3 && (N = 0); ; )
        if (T = b, b = z.times(T.plus(r(F, T, Y, 1))), Ht(T.c).slice(0, N) === (k = Ht(b.c)).slice(0, N))
          if (b.e < R && --N, k = k.slice(N - 3, N + 1), k == "9999" || !A && k == "4999") {
            if (!A && (W(T, T.e + f + 2, 0), T.times(T).eq(F))) {
              b = T;
              break;
            }
            Y += 4, N += 4, A = 1;
          } else {
            (!+k || !+k.slice(1) && k.charAt(0) == "5") && (W(b, b.e + f + 2, 1), x = !b.times(b).eq(F));
            break;
          }
    }
    return W(b, b.e + f + 1, h, x);
  }, u.toExponential = function(x, k) {
    return x != null && (He(x, 0, Tt), x++), H(this, x, k, 1);
  }, u.toFixed = function(x, k) {
    return x != null && (He(x, 0, Tt), x = x + this.e + 1), H(this, x, k);
  }, u.toFormat = function(x, k, b) {
    var A, T = this;
    if (b == null)
      x != null && k && typeof k == "object" ? (b = k, k = null) : x && typeof x == "object" ? (b = x, x = k = null) : b = D;
    else if (typeof b != "object")
      throw Error(Lt + "Argument not an object: " + b);
    if (A = T.toFixed(x, k), T.c) {
      var F, P = A.split("."), N = +b.groupSize, R = +b.secondaryGroupSize, Y = b.groupSeparator || "", z = P[0], j = P[1], K = T.s < 0, ne = K ? z.slice(1) : z, de = ne.length;
      if (R && (F = N, N = R, R = F, de -= F), N > 0 && de > 0) {
        for (F = de % N || N, z = ne.substr(0, F); F < de; F += N) z += Y + ne.substr(F, N);
        R > 0 && (z += Y + ne.slice(F)), K && (z = "-" + z);
      }
      A = j ? z + (b.decimalSeparator || "") + ((R = +b.fractionGroupSize) ? j.replace(
        new RegExp("\\d{" + R + "}\\B", "g"),
        "$&" + (b.fractionGroupSeparator || "")
      ) : j) : z;
    }
    return (b.prefix || "") + A + (b.suffix || "");
  }, u.toFraction = function(x) {
    var k, b, A, T, F, P, N, R, Y, z, j, K, ne = this, de = ne.c;
    if (x != null && (N = new I(x), !N.isInteger() && (N.c || N.s !== 1) || N.lt(l)))
      throw Error(Lt + "Argument " + (N.isInteger() ? "out of range: " : "not an integer: ") + $(N));
    if (!de) return new I(ne);
    for (k = new I(l), Y = b = new I(l), A = R = new I(l), K = Ht(de), F = k.e = K.length - ne.e - 1, k.c[0] = Uo[(P = F % we) < 0 ? we + P : P], x = !x || N.comparedTo(k) > 0 ? F > 0 ? k : Y : N, P = y, y = 1 / 0, N = new I(K), R.c[0] = 0; z = r(N, k, 0, 1), T = b.plus(z.times(A)), T.comparedTo(x) != 1; )
      b = A, A = T, Y = R.plus(z.times(T = Y)), R = T, k = N.minus(z.times(T = k)), N = T;
    return T = r(x.minus(b), A, 0, 1), R = R.plus(T.times(Y)), b = b.plus(T.times(A)), R.s = Y.s = ne.s, F = F * 2, j = r(Y, A, F, h).minus(ne).abs().comparedTo(
      r(R, b, F, h).minus(ne).abs()
    ) < 1 ? [Y, A] : [R, b], y = P, j;
  }, u.toNumber = function() {
    return +$(this);
  }, u.toPrecision = function(x, k) {
    return x != null && He(x, 1, Tt), H(this, x, k, 2);
  }, u.toString = function(x) {
    var k, b = this, A = b.s, T = b.e;
    return T === null ? A ? (k = "Infinity", A < 0 && (k = "-" + k)) : k = "NaN" : (x == null ? k = T <= m || T >= d ? Zs(Ht(b.c), T) : Gn(Ht(b.c), T, "0") : x === 10 && G ? (b = W(new I(b), f + T + 1, h), k = Gn(Ht(b.c), b.e, "0")) : (He(x, 2, U.length, "Base"), k = e(Gn(Ht(b.c), T, "0"), 10, x, A, !0)), A < 0 && b.c[0] && (k = "-" + k)), k;
  }, u.valueOf = u.toJSON = function() {
    return $(this);
  }, u._isBigNumber = !0, u[Symbol.toStringTag] = "BigNumber", u[Symbol.for("nodejs.util.inspect.custom")] = u.valueOf, n != null && I.set(n), I;
}
function Vt(n) {
  var r = n | 0;
  return n > 0 || n === r ? r : r - 1;
}
function Ht(n) {
  for (var r, e, s = 1, u = n.length, l = n[0] + ""; s < u; ) {
    for (r = n[s++] + "", e = we - r.length; e--; r = "0" + r) ;
    l += r;
  }
  for (u = l.length; l.charCodeAt(--u) === 48; ) ;
  return l.slice(0, u + 1 || 1);
}
function xr(n, r) {
  var e, s, u = n.c, l = r.c, f = n.s, h = r.s, m = n.e, d = r.e;
  if (!f || !h) return null;
  if (e = u && !u[0], s = l && !l[0], e || s) return e ? s ? 0 : -h : f;
  if (f != h) return f;
  if (e = f < 0, s = m == d, !u || !l) return s ? 0 : !u ^ e ? 1 : -1;
  if (!s) return m > d ^ e ? 1 : -1;
  for (h = (m = u.length) < (d = l.length) ? m : d, f = 0; f < h; f++) if (u[f] != l[f]) return u[f] > l[f] ^ e ? 1 : -1;
  return m == d ? 0 : m > d ^ e ? 1 : -1;
}
function He(n, r, e, s) {
  if (n < r || n > e || n !== Jt(n))
    throw Error(Lt + (s || "Argument") + (typeof n == "number" ? n < r || n > e ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
}
function Ws(n) {
  var r = n.c.length - 1;
  return Vt(n.e / we) == r && n.c[r] % 2 != 0;
}
function Zs(n, r) {
  return (n.length > 1 ? n.charAt(0) + "." + n.slice(1) : n) + (r < 0 ? "e" : "e+") + r;
}
function Gn(n, r, e) {
  var s, u;
  if (r < 0) {
    for (u = e + "."; ++r; u += e) ;
    n = u + n;
  } else if (s = n.length, ++r > s) {
    for (u = e, r -= s; --r; u += e) ;
    n += u;
  } else r < s && (n = n.slice(0, r) + "." + n.slice(r));
  return n;
}
var Ln = Ad(), Zk = class {
  constructor(n) {
    O(this, "key");
    O(this, "left", null);
    O(this, "right", null);
    this.key = n;
  }
}, Wi = class extends Zk {
  constructor(n) {
    super(n);
  }
}, jk = class {
  constructor() {
    O(this, "size", 0);
    O(this, "modificationCount", 0);
    O(this, "splayCount", 0);
  }
  splay(n) {
    const r = this.root;
    if (r == null)
      return this.compare(n, n), -1;
    let e = null, s = null, u = null, l = null, f = r;
    const h = this.compare;
    let m;
    for (; ; )
      if (m = h(f.key, n), m > 0) {
        let d = f.left;
        if (d == null || (m = h(d.key, n), m > 0 && (f.left = d.right, d.right = f, f = d, d = f.left, d == null)))
          break;
        e == null ? s = f : e.left = f, e = f, f = d;
      } else if (m < 0) {
        let d = f.right;
        if (d == null || (m = h(d.key, n), m < 0 && (f.right = d.left, d.left = f, f = d, d = f.right, d == null)))
          break;
        u == null ? l = f : u.right = f, u = f, f = d;
      } else
        break;
    return u != null && (u.right = f.left, f.left = l), e != null && (e.left = f.right, f.right = s), this.root !== f && (this.root = f, this.splayCount++), m;
  }
  splayMin(n) {
    let r = n, e = r.left;
    for (; e != null; ) {
      const s = e;
      r.left = s.right, s.right = r, r = s, e = r.left;
    }
    return r;
  }
  splayMax(n) {
    let r = n, e = r.right;
    for (; e != null; ) {
      const s = e;
      r.right = s.left, s.left = r, r = s, e = r.right;
    }
    return r;
  }
  _delete(n) {
    if (this.root == null || this.splay(n) != 0) return null;
    let e = this.root;
    const s = e, u = e.left;
    if (this.size--, u == null)
      this.root = e.right;
    else {
      const l = e.right;
      e = this.splayMax(u), e.right = l, this.root = e;
    }
    return this.modificationCount++, s;
  }
  addNewRoot(n, r) {
    this.size++, this.modificationCount++;
    const e = this.root;
    if (e == null) {
      this.root = n;
      return;
    }
    r < 0 ? (n.left = e, n.right = e.right, e.right = null) : (n.right = e, n.left = e.left, e.left = null), this.root = n;
  }
  _first() {
    const n = this.root;
    return n == null ? null : (this.root = this.splayMin(n), this.root);
  }
  _last() {
    const n = this.root;
    return n == null ? null : (this.root = this.splayMax(n), this.root);
  }
  clear() {
    this.root = null, this.size = 0, this.modificationCount++;
  }
  has(n) {
    return this.validKey(n) && this.splay(n) == 0;
  }
  defaultCompare() {
    return (n, r) => n < r ? -1 : n > r ? 1 : 0;
  }
  wrap() {
    return {
      getRoot: () => this.root,
      setRoot: (n) => {
        this.root = n;
      },
      getSize: () => this.size,
      getModificationCount: () => this.modificationCount,
      getSplayCount: () => this.splayCount,
      setSplayCount: (n) => {
        this.splayCount = n;
      },
      splay: (n) => this.splay(n),
      has: (n) => this.has(n)
    };
  }
}, lf, cf, Na = class ns extends jk {
  constructor(e, s) {
    super();
    O(this, "root", null);
    O(this, "compare");
    O(this, "validKey");
    O(this, lf, "[object Set]");
    this.compare = e ?? this.defaultCompare(), this.validKey = s ?? ((u) => u != null && u != null);
  }
  delete(e) {
    return this.validKey(e) ? this._delete(e) != null : !1;
  }
  deleteAll(e) {
    for (const s of e)
      this.delete(s);
  }
  forEach(e) {
    const s = this[Symbol.iterator]();
    let u;
    for (; u = s.next(), !u.done; )
      e(u.value, u.value, this);
  }
  add(e) {
    const s = this.splay(e);
    return s != 0 && this.addNewRoot(new Wi(e), s), this;
  }
  addAndReturn(e) {
    const s = this.splay(e);
    return s != 0 && this.addNewRoot(new Wi(e), s), this.root.key;
  }
  addAll(e) {
    for (const s of e)
      this.add(s);
  }
  isEmpty() {
    return this.root == null;
  }
  isNotEmpty() {
    return this.root != null;
  }
  single() {
    if (this.size == 0) throw "Bad state: No element";
    if (this.size > 1) throw "Bad state: Too many element";
    return this.root.key;
  }
  first() {
    if (this.size == 0) throw "Bad state: No element";
    return this._first().key;
  }
  last() {
    if (this.size == 0) throw "Bad state: No element";
    return this._last().key;
  }
  lastBefore(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) < 0) return this.root.key;
    let u = this.root.left;
    if (u == null) return null;
    let l = u.right;
    for (; l != null; )
      u = l, l = u.right;
    return u.key;
  }
  firstAfter(e) {
    if (e == null) throw "Invalid arguments(s)";
    if (this.root == null) return null;
    if (this.splay(e) > 0) return this.root.key;
    let u = this.root.right;
    if (u == null) return null;
    let l = u.left;
    for (; l != null; )
      u = l, l = u.left;
    return u.key;
  }
  retainAll(e) {
    const s = new ns(this.compare, this.validKey), u = this.modificationCount;
    for (const l of e) {
      if (u != this.modificationCount)
        throw "Concurrent modification during iteration.";
      this.validKey(l) && this.splay(l) == 0 && s.add(this.root.key);
    }
    s.size != this.size && (this.root = s.root, this.size = s.size, this.modificationCount++);
  }
  lookup(e) {
    return !this.validKey(e) || this.splay(e) != 0 ? null : this.root.key;
  }
  intersection(e) {
    const s = new ns(this.compare, this.validKey);
    for (const u of this)
      e.has(u) && s.add(u);
    return s;
  }
  difference(e) {
    const s = new ns(this.compare, this.validKey);
    for (const u of this)
      e.has(u) || s.add(u);
    return s;
  }
  union(e) {
    const s = this.clone();
    return s.addAll(e), s;
  }
  clone() {
    const e = new ns(this.compare, this.validKey);
    return e.size = this.size, e.root = this.copyNode(this.root), e;
  }
  copyNode(e) {
    if (e == null) return null;
    function s(l, f) {
      let h, m;
      do {
        if (h = l.left, m = l.right, h != null) {
          const d = new Wi(h.key);
          f.left = d, s(h, d);
        }
        if (m != null) {
          const d = new Wi(m.key);
          f.right = d, l = m, f = d;
        }
      } while (m != null);
    }
    const u = new Wi(e.key);
    return s(e, u), u;
  }
  toSet() {
    return this.clone();
  }
  entries() {
    return new Kk(this.wrap());
  }
  keys() {
    return this[Symbol.iterator]();
  }
  values() {
    return this[Symbol.iterator]();
  }
  [(cf = Symbol.iterator, lf = Symbol.toStringTag, cf)]() {
    return new $k(this.wrap());
  }
}, Cd = class {
  constructor(n) {
    O(this, "tree");
    O(this, "path", new Array());
    O(this, "modificationCount", null);
    O(this, "splayCount");
    this.tree = n, this.splayCount = n.getSplayCount();
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    return this.moveNext() ? { done: !1, value: this.current() } : { done: !0, value: null };
  }
  current() {
    if (!this.path.length) return null;
    const n = this.path[this.path.length - 1];
    return this.getValue(n);
  }
  rebuildPath(n) {
    this.path.splice(0, this.path.length), this.tree.splay(n), this.path.push(this.tree.getRoot()), this.splayCount = this.tree.getSplayCount();
  }
  findLeftMostDescendent(n) {
    for (; n != null; )
      this.path.push(n), n = n.left;
  }
  moveNext() {
    if (this.modificationCount != this.tree.getModificationCount()) {
      if (this.modificationCount == null) {
        this.modificationCount = this.tree.getModificationCount();
        let e = this.tree.getRoot();
        for (; e != null; )
          this.path.push(e), e = e.left;
        return this.path.length > 0;
      }
      throw "Concurrent modification during iteration.";
    }
    if (!this.path.length) return !1;
    this.splayCount != this.tree.getSplayCount() && this.rebuildPath(this.path[this.path.length - 1].key);
    let n = this.path[this.path.length - 1], r = n.right;
    if (r != null) {
      for (; r != null; )
        this.path.push(r), r = r.left;
      return !0;
    }
    for (this.path.pop(); this.path.length && this.path[this.path.length - 1].right === n; )
      n = this.path.pop();
    return this.path.length > 0;
  }
}, $k = class extends Cd {
  getValue(n) {
    return n.key;
  }
}, Kk = class extends Cd {
  getValue(n) {
    return [n.key, n.key];
  }
}, Td = (n) => () => n, vu = (n) => {
  const r = n ? (e, s) => s.minus(e).abs().isLessThanOrEqualTo(n) : Td(!1);
  return (e, s) => r(e, s) ? 0 : e.comparedTo(s);
};
function Qk(n) {
  const r = n ? (e, s, u, l, f) => e.exponentiatedBy(2).isLessThanOrEqualTo(
    l.minus(s).exponentiatedBy(2).plus(f.minus(u).exponentiatedBy(2)).times(n)
  ) : Td(!1);
  return (e, s, u) => {
    const l = e.x, f = e.y, h = u.x, m = u.y, d = f.minus(m).times(s.x.minus(h)).minus(l.minus(h).times(s.y.minus(m)));
    return r(d, l, f, h, m) ? 0 : d.comparedTo(0);
  };
}
var eS = (n) => n, tS = (n) => {
  if (n) {
    const r = new Na(vu(n)), e = new Na(vu(n)), s = (l, f) => f.addAndReturn(l), u = (l) => ({
      x: s(l.x, r),
      y: s(l.y, e)
    });
    return u({ x: new Ln(0), y: new Ln(0) }), u;
  }
  return eS;
}, yu = (n) => ({
  set: (r) => {
    Jn = yu(r);
  },
  reset: () => yu(n),
  compare: vu(n),
  snap: tS(n),
  orient: Qk(n)
}), Jn = yu(), Zi = (n, r) => n.ll.x.isLessThanOrEqualTo(r.x) && r.x.isLessThanOrEqualTo(n.ur.x) && n.ll.y.isLessThanOrEqualTo(r.y) && r.y.isLessThanOrEqualTo(n.ur.y), _u = (n, r) => {
  if (r.ur.x.isLessThan(n.ll.x) || n.ur.x.isLessThan(r.ll.x) || r.ur.y.isLessThan(n.ll.y) || n.ur.y.isLessThan(r.ll.y))
    return null;
  const e = n.ll.x.isLessThan(r.ll.x) ? r.ll.x : n.ll.x, s = n.ur.x.isLessThan(r.ur.x) ? n.ur.x : r.ur.x, u = n.ll.y.isLessThan(r.ll.y) ? r.ll.y : n.ll.y, l = n.ur.y.isLessThan(r.ur.y) ? n.ur.y : r.ur.y;
  return { ll: { x: e, y: u }, ur: { x: s, y: l } };
}, ua = (n, r) => n.x.times(r.y).minus(n.y.times(r.x)), Nd = (n, r) => n.x.times(r.x).plus(n.y.times(r.y)), Pa = (n) => Nd(n, n).sqrt(), nS = (n, r, e) => {
  const s = { x: r.x.minus(n.x), y: r.y.minus(n.y) }, u = { x: e.x.minus(n.x), y: e.y.minus(n.y) };
  return ua(u, s).div(Pa(u)).div(Pa(s));
}, rS = (n, r, e) => {
  const s = { x: r.x.minus(n.x), y: r.y.minus(n.y) }, u = { x: e.x.minus(n.x), y: e.y.minus(n.y) };
  return Nd(u, s).div(Pa(u)).div(Pa(s));
}, $h = (n, r, e) => r.y.isZero() ? null : { x: n.x.plus(r.x.div(r.y).times(e.minus(n.y))), y: e }, Kh = (n, r, e) => r.x.isZero() ? null : { x: e, y: n.y.plus(r.y.div(r.x).times(e.minus(n.x))) }, iS = (n, r, e, s) => {
  if (r.x.isZero()) return Kh(e, s, n.x);
  if (s.x.isZero()) return Kh(n, r, e.x);
  if (r.y.isZero()) return $h(e, s, n.y);
  if (s.y.isZero()) return $h(n, r, e.y);
  const u = ua(r, s);
  if (u.isZero()) return null;
  const l = { x: e.x.minus(n.x), y: e.y.minus(n.y) }, f = ua(l, r).div(u), h = ua(l, s).div(u), m = n.x.plus(h.times(r.x)), d = e.x.plus(f.times(s.x)), v = n.y.plus(h.times(r.y)), y = e.y.plus(f.times(s.y)), E = m.plus(d).div(2), S = v.plus(y).div(2);
  return { x: E, y: S };
}, xn = class Pd {
  // Warning: 'point' input will be modified and re-used (for performance)
  constructor(r, e) {
    O(this, "point");
    O(this, "isLeft");
    O(this, "segment");
    O(this, "otherSE");
    O(this, "consumedBy");
    r.events === void 0 ? r.events = [this] : r.events.push(this), this.point = r, this.isLeft = e;
  }
  // for ordering sweep events in the sweep event queue
  static compare(r, e) {
    const s = Pd.comparePoints(r.point, e.point);
    return s !== 0 ? s : (r.point !== e.point && r.link(e), r.isLeft !== e.isLeft ? r.isLeft ? 1 : -1 : Ra.compare(r.segment, e.segment));
  }
  // for ordering points in sweep line order
  static comparePoints(r, e) {
    return r.x.isLessThan(e.x) ? -1 : r.x.isGreaterThan(e.x) ? 1 : r.y.isLessThan(e.y) ? -1 : r.y.isGreaterThan(e.y) ? 1 : 0;
  }
  link(r) {
    if (r.point === this.point)
      throw new Error("Tried to link already linked events");
    const e = r.point.events;
    for (let s = 0, u = e.length; s < u; s++) {
      const l = e[s];
      this.point.events.push(l), l.point = this.point;
    }
    this.checkForConsuming();
  }
  /* Do a pass over our linked events and check to see if any pair
   * of segments match, and should be consumed. */
  checkForConsuming() {
    const r = this.point.events.length;
    for (let e = 0; e < r; e++) {
      const s = this.point.events[e];
      if (s.segment.consumedBy === void 0)
        for (let u = e + 1; u < r; u++) {
          const l = this.point.events[u];
          l.consumedBy === void 0 && s.otherSE.point.events === l.otherSE.point.events && s.segment.consume(l.segment);
        }
    }
  }
  getAvailableLinkedEvents() {
    const r = [];
    for (let e = 0, s = this.point.events.length; e < s; e++) {
      const u = this.point.events[e];
      u !== this && !u.segment.ringOut && u.segment.isInResult() && r.push(u);
    }
    return r;
  }
  /**
   * Returns a comparator function for sorting linked events that will
   * favor the event that will give us the smallest left-side angle.
   * All ring construction starts as low as possible heading to the right,
   * so by always turning left as sharp as possible we'll get polygons
   * without uncessary loops & holes.
   *
   * The comparator function has a compute cache such that it avoids
   * re-computing already-computed values.
   */
  getLeftmostComparator(r) {
    const e = /* @__PURE__ */ new Map(), s = (u) => {
      const l = u.otherSE;
      e.set(u, {
        sine: nS(this.point, r.point, l.point),
        cosine: rS(this.point, r.point, l.point)
      });
    };
    return (u, l) => {
      e.has(u) || s(u), e.has(l) || s(l);
      const { sine: f, cosine: h } = e.get(u), { sine: m, cosine: d } = e.get(l);
      return f.isGreaterThanOrEqualTo(0) && m.isGreaterThanOrEqualTo(0) ? h.isLessThan(d) ? 1 : h.isGreaterThan(d) ? -1 : 0 : f.isLessThan(0) && m.isLessThan(0) ? h.isLessThan(d) ? -1 : h.isGreaterThan(d) ? 1 : 0 : m.isLessThan(f) ? -1 : m.isGreaterThan(f) ? 1 : 0;
    };
  }
}, sS = class Eu {
  constructor(r) {
    O(this, "events");
    O(this, "poly");
    O(this, "_isExteriorRing");
    O(this, "_enclosingRing");
    this.events = r;
    for (let e = 0, s = r.length; e < s; e++)
      r[e].segment.ringOut = this;
    this.poly = null;
  }
  /* Given the segments from the sweep line pass, compute & return a series
   * of closed rings from all the segments marked to be part of the result */
  static factory(r) {
    const e = [];
    for (let s = 0, u = r.length; s < u; s++) {
      const l = r[s];
      if (!l.isInResult() || l.ringOut) continue;
      let f = null, h = l.leftSE, m = l.rightSE;
      const d = [h], v = h.point, y = [];
      for (; f = h, h = m, d.push(h), h.point !== v; )
        for (; ; ) {
          const E = h.getAvailableLinkedEvents();
          if (E.length === 0) {
            const D = d[0].point, U = d[d.length - 1].point;
            throw new Error(
              `Unable to complete output ring starting at [${D.x}, ${D.y}]. Last matching segment found ends at [${U.x}, ${U.y}].`
            );
          }
          if (E.length === 1) {
            m = E[0].otherSE;
            break;
          }
          let S = null;
          for (let D = 0, U = y.length; D < U; D++)
            if (y[D].point === h.point) {
              S = D;
              break;
            }
          if (S !== null) {
            const D = y.splice(S)[0], U = d.splice(D.index);
            U.unshift(U[0].otherSE), e.push(new Eu(U.reverse()));
            continue;
          }
          y.push({
            index: d.length,
            point: h.point
          });
          const M = h.getLeftmostComparator(f);
          m = E.sort(M)[0].otherSE;
          break;
        }
      e.push(new Eu(d));
    }
    return e;
  }
  getGeom() {
    let r = this.events[0].point;
    const e = [r];
    for (let d = 1, v = this.events.length - 1; d < v; d++) {
      const y = this.events[d].point, E = this.events[d + 1].point;
      Jn.orient(y, r, E) !== 0 && (e.push(y), r = y);
    }
    if (e.length === 1) return null;
    const s = e[0], u = e[1];
    Jn.orient(s, r, u) === 0 && e.shift(), e.push(e[0]);
    const l = this.isExteriorRing() ? 1 : -1, f = this.isExteriorRing() ? 0 : e.length - 1, h = this.isExteriorRing() ? e.length : -1, m = [];
    for (let d = f; d != h; d += l)
      m.push([e[d].x.toNumber(), e[d].y.toNumber()]);
    return m;
  }
  isExteriorRing() {
    if (this._isExteriorRing === void 0) {
      const r = this.enclosingRing();
      this._isExteriorRing = r ? !r.isExteriorRing() : !0;
    }
    return this._isExteriorRing;
  }
  enclosingRing() {
    return this._enclosingRing === void 0 && (this._enclosingRing = this._calcEnclosingRing()), this._enclosingRing;
  }
  /* Returns the ring that encloses this one, if any */
  _calcEnclosingRing() {
    var u, l;
    let r = this.events[0];
    for (let f = 1, h = this.events.length; f < h; f++) {
      const m = this.events[f];
      xn.compare(r, m) > 0 && (r = m);
    }
    let e = r.segment.prevInResult(), s = e ? e.prevInResult() : null;
    for (; ; ) {
      if (!e) return null;
      if (!s) return e.ringOut;
      if (s.ringOut !== e.ringOut)
        return ((u = s.ringOut) == null ? void 0 : u.enclosingRing()) !== e.ringOut ? e.ringOut : (l = e.ringOut) == null ? void 0 : l.enclosingRing();
      e = s.prevInResult(), s = e ? e.prevInResult() : null;
    }
  }
}, Qh = class {
  constructor(n) {
    O(this, "exteriorRing");
    O(this, "interiorRings");
    this.exteriorRing = n, n.poly = this, this.interiorRings = [];
  }
  addInterior(n) {
    this.interiorRings.push(n), n.poly = this;
  }
  getGeom() {
    const n = this.exteriorRing.getGeom();
    if (n === null) return null;
    const r = [n];
    for (let e = 0, s = this.interiorRings.length; e < s; e++) {
      const u = this.interiorRings[e].getGeom();
      u !== null && r.push(u);
    }
    return r;
  }
}, aS = class {
  constructor(n) {
    O(this, "rings");
    O(this, "polys");
    this.rings = n, this.polys = this._composePolys(n);
  }
  getGeom() {
    const n = [];
    for (let r = 0, e = this.polys.length; r < e; r++) {
      const s = this.polys[r].getGeom();
      s !== null && n.push(s);
    }
    return n;
  }
  _composePolys(n) {
    var e;
    const r = [];
    for (let s = 0, u = n.length; s < u; s++) {
      const l = n[s];
      if (!l.poly)
        if (l.isExteriorRing()) r.push(new Qh(l));
        else {
          const f = l.enclosingRing();
          f != null && f.poly || r.push(new Qh(f)), (e = f == null ? void 0 : f.poly) == null || e.addInterior(l);
        }
    }
    return r;
  }
}, oS = class {
  constructor(n, r = Ra.compare) {
    O(this, "queue");
    O(this, "tree");
    O(this, "segments");
    this.queue = n, this.tree = new Na(r), this.segments = [];
  }
  process(n) {
    const r = n.segment, e = [];
    if (n.consumedBy)
      return n.isLeft ? this.queue.delete(n.otherSE) : this.tree.delete(r), e;
    n.isLeft && this.tree.add(r);
    let s = r, u = r;
    do
      s = this.tree.lastBefore(s);
    while (s != null && s.consumedBy != null);
    do
      u = this.tree.firstAfter(u);
    while (u != null && u.consumedBy != null);
    if (n.isLeft) {
      let l = null;
      if (s) {
        const h = s.getIntersection(r);
        if (h !== null && (r.isAnEndpoint(h) || (l = h), !s.isAnEndpoint(h))) {
          const m = this._splitSafely(s, h);
          for (let d = 0, v = m.length; d < v; d++)
            e.push(m[d]);
        }
      }
      let f = null;
      if (u) {
        const h = u.getIntersection(r);
        if (h !== null && (r.isAnEndpoint(h) || (f = h), !u.isAnEndpoint(h))) {
          const m = this._splitSafely(u, h);
          for (let d = 0, v = m.length; d < v; d++)
            e.push(m[d]);
        }
      }
      if (l !== null || f !== null) {
        let h = null;
        l === null ? h = f : f === null ? h = l : h = xn.comparePoints(
          l,
          f
        ) <= 0 ? l : f, this.queue.delete(r.rightSE), e.push(r.rightSE);
        const m = r.split(h);
        for (let d = 0, v = m.length; d < v; d++)
          e.push(m[d]);
      }
      e.length > 0 ? (this.tree.delete(r), e.push(n)) : (this.segments.push(r), r.prev = s);
    } else {
      if (s && u) {
        const l = s.getIntersection(u);
        if (l !== null) {
          if (!s.isAnEndpoint(l)) {
            const f = this._splitSafely(s, l);
            for (let h = 0, m = f.length; h < m; h++)
              e.push(f[h]);
          }
          if (!u.isAnEndpoint(l)) {
            const f = this._splitSafely(u, l);
            for (let h = 0, m = f.length; h < m; h++)
              e.push(f[h]);
          }
        }
      }
      this.tree.delete(r);
    }
    return e;
  }
  /* Safely split a segment that is currently in the datastructures
   * IE - a segment other than the one that is currently being processed. */
  _splitSafely(n, r) {
    this.tree.delete(n);
    const e = n.rightSE;
    this.queue.delete(e);
    const s = n.split(r);
    return s.push(e), n.consumedBy === void 0 && this.tree.add(n), s;
  }
}, uS = class {
  constructor() {
    O(this, "type");
    O(this, "numMultiPolys");
  }
  run(n, r, e) {
    rs.type = n;
    const s = [new tf(r, !0)];
    for (let d = 0, v = e.length; d < v; d++)
      s.push(new tf(e[d], !1));
    if (rs.numMultiPolys = s.length, rs.type === "difference") {
      const d = s[0];
      let v = 1;
      for (; v < s.length; )
        _u(s[v].bbox, d.bbox) !== null ? v++ : s.splice(v, 1);
    }
    if (rs.type === "intersection")
      for (let d = 0, v = s.length; d < v; d++) {
        const y = s[d];
        for (let E = d + 1, S = s.length; E < S; E++)
          if (_u(y.bbox, s[E].bbox) === null) return [];
      }
    const u = new Na(xn.compare);
    for (let d = 0, v = s.length; d < v; d++) {
      const y = s[d].getSweepEvents();
      for (let E = 0, S = y.length; E < S; E++)
        u.add(y[E]);
    }
    const l = new oS(u);
    let f = null;
    for (u.size != 0 && (f = u.first(), u.delete(f)); f; ) {
      const d = l.process(f);
      for (let v = 0, y = d.length; v < y; v++) {
        const E = d[v];
        E.consumedBy === void 0 && u.add(E);
      }
      u.size != 0 ? (f = u.first(), u.delete(f)) : f = null;
    }
    Jn.reset();
    const h = sS.factory(l.segments);
    return new aS(h).getGeom();
  }
}, rs = new uS(), Oa = rs, lS = 0, Ra = class la {
  /* Warning: a reference to ringWindings input will be stored,
   *  and possibly will be later modified */
  constructor(r, e, s, u) {
    O(this, "id");
    O(this, "leftSE");
    O(this, "rightSE");
    O(this, "rings");
    O(this, "windings");
    O(this, "ringOut");
    O(this, "consumedBy");
    O(this, "prev");
    O(this, "_prevInResult");
    O(this, "_beforeState");
    O(this, "_afterState");
    O(this, "_isInResult");
    this.id = ++lS, this.leftSE = r, r.segment = this, r.otherSE = e, this.rightSE = e, e.segment = this, e.otherSE = r, this.rings = s, this.windings = u;
  }
  /* This compare() function is for ordering segments in the sweep
   * line tree, and does so according to the following criteria:
   *
   * Consider the vertical line that lies an infinestimal step to the
   * right of the right-more of the two left endpoints of the input
   * segments. Imagine slowly moving a point up from negative infinity
   * in the increasing y direction. Which of the two segments will that
   * point intersect first? That segment comes 'before' the other one.
   *
   * If neither segment would be intersected by such a line, (if one
   * or more of the segments are vertical) then the line to be considered
   * is directly on the right-more of the two left inputs.
   */
  static compare(r, e) {
    const s = r.leftSE.point.x, u = e.leftSE.point.x, l = r.rightSE.point.x, f = e.rightSE.point.x;
    if (f.isLessThan(s)) return 1;
    if (l.isLessThan(u)) return -1;
    const h = r.leftSE.point.y, m = e.leftSE.point.y, d = r.rightSE.point.y, v = e.rightSE.point.y;
    if (s.isLessThan(u)) {
      if (m.isLessThan(h) && m.isLessThan(d)) return 1;
      if (m.isGreaterThan(h) && m.isGreaterThan(d)) return -1;
      const y = r.comparePoint(e.leftSE.point);
      if (y < 0) return 1;
      if (y > 0) return -1;
      const E = e.comparePoint(r.rightSE.point);
      return E !== 0 ? E : -1;
    }
    if (s.isGreaterThan(u)) {
      if (h.isLessThan(m) && h.isLessThan(v)) return -1;
      if (h.isGreaterThan(m) && h.isGreaterThan(v)) return 1;
      const y = e.comparePoint(r.leftSE.point);
      if (y !== 0) return y;
      const E = r.comparePoint(e.rightSE.point);
      return E < 0 ? 1 : E > 0 ? -1 : 1;
    }
    if (h.isLessThan(m)) return -1;
    if (h.isGreaterThan(m)) return 1;
    if (l.isLessThan(f)) {
      const y = e.comparePoint(r.rightSE.point);
      if (y !== 0) return y;
    }
    if (l.isGreaterThan(f)) {
      const y = r.comparePoint(e.rightSE.point);
      if (y < 0) return 1;
      if (y > 0) return -1;
    }
    if (!l.eq(f)) {
      const y = d.minus(h), E = l.minus(s), S = v.minus(m), M = f.minus(u);
      if (y.isGreaterThan(E) && S.isLessThan(M)) return 1;
      if (y.isLessThan(E) && S.isGreaterThan(M)) return -1;
    }
    return l.isGreaterThan(f) ? 1 : l.isLessThan(f) || d.isLessThan(v) ? -1 : d.isGreaterThan(v) ? 1 : r.id < e.id ? -1 : r.id > e.id ? 1 : 0;
  }
  static fromRing(r, e, s) {
    let u, l, f;
    const h = xn.comparePoints(r, e);
    if (h < 0)
      u = r, l = e, f = 1;
    else if (h > 0)
      u = e, l = r, f = -1;
    else
      throw new Error(
        `Tried to create degenerate segment at [${r.x}, ${r.y}]`
      );
    const m = new xn(u, !0), d = new xn(l, !1);
    return new la(m, d, [s], [f]);
  }
  /* When a segment is split, the rightSE is replaced with a new sweep event */
  replaceRightSE(r) {
    this.rightSE = r, this.rightSE.segment = this, this.rightSE.otherSE = this.leftSE, this.leftSE.otherSE = this.rightSE;
  }
  bbox() {
    const r = this.leftSE.point.y, e = this.rightSE.point.y;
    return {
      ll: { x: this.leftSE.point.x, y: r.isLessThan(e) ? r : e },
      ur: { x: this.rightSE.point.x, y: r.isGreaterThan(e) ? r : e }
    };
  }
  /* A vector from the left point to the right */
  vector() {
    return {
      x: this.rightSE.point.x.minus(this.leftSE.point.x),
      y: this.rightSE.point.y.minus(this.leftSE.point.y)
    };
  }
  isAnEndpoint(r) {
    return r.x.eq(this.leftSE.point.x) && r.y.eq(this.leftSE.point.y) || r.x.eq(this.rightSE.point.x) && r.y.eq(this.rightSE.point.y);
  }
  /* Compare this segment with a point.
   *
   * A point P is considered to be colinear to a segment if there
   * exists a distance D such that if we travel along the segment
   * from one * endpoint towards the other a distance D, we find
   * ourselves at point P.
   *
   * Return value indicates:
   *
   *   1: point lies above the segment (to the left of vertical)
   *   0: point is colinear to segment
   *  -1: point lies below the segment (to the right of vertical)
   */
  comparePoint(r) {
    return Jn.orient(this.leftSE.point, r, this.rightSE.point);
  }
  /**
   * Given another segment, returns the first non-trivial intersection
   * between the two segments (in terms of sweep line ordering), if it exists.
   *
   * A 'non-trivial' intersection is one that will cause one or both of the
   * segments to be split(). As such, 'trivial' vs. 'non-trivial' intersection:
   *
   *   * endpoint of segA with endpoint of segB --> trivial
   *   * endpoint of segA with point along segB --> non-trivial
   *   * endpoint of segB with point along segA --> non-trivial
   *   * point along segA with point along segB --> non-trivial
   *
   * If no non-trivial intersection exists, return null
   * Else, return null.
   */
  getIntersection(r) {
    const e = this.bbox(), s = r.bbox(), u = _u(e, s);
    if (u === null) return null;
    const l = this.leftSE.point, f = this.rightSE.point, h = r.leftSE.point, m = r.rightSE.point, d = Zi(e, h) && this.comparePoint(h) === 0, v = Zi(s, l) && r.comparePoint(l) === 0, y = Zi(e, m) && this.comparePoint(m) === 0, E = Zi(s, f) && r.comparePoint(f) === 0;
    if (v && d)
      return E && !y ? f : !E && y ? m : null;
    if (v)
      return y && l.x.eq(m.x) && l.y.eq(m.y) ? null : l;
    if (d)
      return E && f.x.eq(h.x) && f.y.eq(h.y) ? null : h;
    if (E && y) return null;
    if (E) return f;
    if (y) return m;
    const S = iS(l, this.vector(), h, r.vector());
    return S === null || !Zi(u, S) ? null : Jn.snap(S);
  }
  /**
   * Split the given segment into multiple segments on the given points.
   *  * Each existing segment will retain its leftSE and a new rightSE will be
   *    generated for it.
   *  * A new segment will be generated which will adopt the original segment's
   *    rightSE, and a new leftSE will be generated for it.
   *  * If there are more than two points given to split on, new segments
   *    in the middle will be generated with new leftSE and rightSE's.
   *  * An array of the newly generated SweepEvents will be returned.
   *
   * Warning: input array of points is modified
   */
  split(r) {
    const e = [], s = r.events !== void 0, u = new xn(r, !0), l = new xn(r, !1), f = this.rightSE;
    this.replaceRightSE(l), e.push(l), e.push(u);
    const h = new la(
      u,
      f,
      this.rings.slice(),
      this.windings.slice()
    );
    return xn.comparePoints(h.leftSE.point, h.rightSE.point) > 0 && h.swapEvents(), xn.comparePoints(this.leftSE.point, this.rightSE.point) > 0 && this.swapEvents(), s && (u.checkForConsuming(), l.checkForConsuming()), e;
  }
  /* Swap which event is left and right */
  swapEvents() {
    const r = this.rightSE;
    this.rightSE = this.leftSE, this.leftSE = r, this.leftSE.isLeft = !0, this.rightSE.isLeft = !1;
    for (let e = 0, s = this.windings.length; e < s; e++)
      this.windings[e] *= -1;
  }
  /* Consume another segment. We take their rings under our wing
   * and mark them as consumed. Use for perfectly overlapping segments */
  consume(r) {
    let e = this, s = r;
    for (; e.consumedBy; ) e = e.consumedBy;
    for (; s.consumedBy; ) s = s.consumedBy;
    const u = la.compare(e, s);
    if (u !== 0) {
      if (u > 0) {
        const l = e;
        e = s, s = l;
      }
      if (e.prev === s) {
        const l = e;
        e = s, s = l;
      }
      for (let l = 0, f = s.rings.length; l < f; l++) {
        const h = s.rings[l], m = s.windings[l], d = e.rings.indexOf(h);
        d === -1 ? (e.rings.push(h), e.windings.push(m)) : e.windings[d] += m;
      }
      s.rings = null, s.windings = null, s.consumedBy = e, s.leftSE.consumedBy = e.leftSE, s.rightSE.consumedBy = e.rightSE;
    }
  }
  /* The first segment previous segment chain that is in the result */
  prevInResult() {
    return this._prevInResult !== void 0 ? this._prevInResult : (this.prev ? this.prev.isInResult() ? this._prevInResult = this.prev : this._prevInResult = this.prev.prevInResult() : this._prevInResult = null, this._prevInResult);
  }
  beforeState() {
    if (this._beforeState !== void 0) return this._beforeState;
    if (!this.prev)
      this._beforeState = {
        rings: [],
        windings: [],
        multiPolys: []
      };
    else {
      const r = this.prev.consumedBy || this.prev;
      this._beforeState = r.afterState();
    }
    return this._beforeState;
  }
  afterState() {
    if (this._afterState !== void 0) return this._afterState;
    const r = this.beforeState();
    this._afterState = {
      rings: r.rings.slice(0),
      windings: r.windings.slice(0),
      multiPolys: []
    };
    const e = this._afterState.rings, s = this._afterState.windings, u = this._afterState.multiPolys;
    for (let h = 0, m = this.rings.length; h < m; h++) {
      const d = this.rings[h], v = this.windings[h], y = e.indexOf(d);
      y === -1 ? (e.push(d), s.push(v)) : s[y] += v;
    }
    const l = [], f = [];
    for (let h = 0, m = e.length; h < m; h++) {
      if (s[h] === 0) continue;
      const d = e[h], v = d.poly;
      if (f.indexOf(v) === -1)
        if (d.isExterior) l.push(v);
        else {
          f.indexOf(v) === -1 && f.push(v);
          const y = l.indexOf(d.poly);
          y !== -1 && l.splice(y, 1);
        }
    }
    for (let h = 0, m = l.length; h < m; h++) {
      const d = l[h].multiPoly;
      u.indexOf(d) === -1 && u.push(d);
    }
    return this._afterState;
  }
  /* Is this segment part of the final result? */
  isInResult() {
    if (this.consumedBy) return !1;
    if (this._isInResult !== void 0) return this._isInResult;
    const r = this.beforeState().multiPolys, e = this.afterState().multiPolys;
    switch (Oa.type) {
      case "union": {
        const s = r.length === 0, u = e.length === 0;
        this._isInResult = s !== u;
        break;
      }
      case "intersection": {
        let s, u;
        r.length < e.length ? (s = r.length, u = e.length) : (s = e.length, u = r.length), this._isInResult = u === Oa.numMultiPolys && s < u;
        break;
      }
      case "xor": {
        const s = Math.abs(r.length - e.length);
        this._isInResult = s % 2 === 1;
        break;
      }
      case "difference": {
        const s = (u) => u.length === 1 && u[0].isSubject;
        this._isInResult = s(r) !== s(e);
        break;
      }
    }
    return this._isInResult;
  }
}, ef = class {
  constructor(n, r, e) {
    O(this, "poly");
    O(this, "isExterior");
    O(this, "segments");
    O(this, "bbox");
    if (!Array.isArray(n) || n.length === 0)
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    if (this.poly = r, this.isExterior = e, this.segments = [], typeof n[0][0] != "number" || typeof n[0][1] != "number")
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    const s = Jn.snap({ x: new Ln(n[0][0]), y: new Ln(n[0][1]) });
    this.bbox = {
      ll: { x: s.x, y: s.y },
      ur: { x: s.x, y: s.y }
    };
    let u = s;
    for (let l = 1, f = n.length; l < f; l++) {
      if (typeof n[l][0] != "number" || typeof n[l][1] != "number")
        throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
      const h = Jn.snap({ x: new Ln(n[l][0]), y: new Ln(n[l][1]) });
      h.x.eq(u.x) && h.y.eq(u.y) || (this.segments.push(Ra.fromRing(u, h, this)), h.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = h.x), h.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = h.y), h.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = h.x), h.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = h.y), u = h);
    }
    (!s.x.eq(u.x) || !s.y.eq(u.y)) && this.segments.push(Ra.fromRing(u, s, this));
  }
  getSweepEvents() {
    const n = [];
    for (let r = 0, e = this.segments.length; r < e; r++) {
      const s = this.segments[r];
      n.push(s.leftSE), n.push(s.rightSE);
    }
    return n;
  }
}, cS = class {
  constructor(n, r) {
    O(this, "multiPoly");
    O(this, "exteriorRing");
    O(this, "interiorRings");
    O(this, "bbox");
    if (!Array.isArray(n))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    this.exteriorRing = new ef(n[0], this, !0), this.bbox = {
      ll: { x: this.exteriorRing.bbox.ll.x, y: this.exteriorRing.bbox.ll.y },
      ur: { x: this.exteriorRing.bbox.ur.x, y: this.exteriorRing.bbox.ur.y }
    }, this.interiorRings = [];
    for (let e = 1, s = n.length; e < s; e++) {
      const u = new ef(n[e], this, !1);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.interiorRings.push(u);
    }
    this.multiPoly = r;
  }
  getSweepEvents() {
    const n = this.exteriorRing.getSweepEvents();
    for (let r = 0, e = this.interiorRings.length; r < e; r++) {
      const s = this.interiorRings[r].getSweepEvents();
      for (let u = 0, l = s.length; u < l; u++)
        n.push(s[u]);
    }
    return n;
  }
}, tf = class {
  constructor(n, r) {
    O(this, "isSubject");
    O(this, "polys");
    O(this, "bbox");
    if (!Array.isArray(n))
      throw new Error("Input geometry is not a valid Polygon or MultiPolygon");
    try {
      typeof n[0][0][0] == "number" && (n = [n]);
    } catch {
    }
    this.polys = [], this.bbox = {
      ll: { x: new Ln(Number.POSITIVE_INFINITY), y: new Ln(Number.POSITIVE_INFINITY) },
      ur: { x: new Ln(Number.NEGATIVE_INFINITY), y: new Ln(Number.NEGATIVE_INFINITY) }
    };
    for (let e = 0, s = n.length; e < s; e++) {
      const u = new cS(n[e], this);
      u.bbox.ll.x.isLessThan(this.bbox.ll.x) && (this.bbox.ll.x = u.bbox.ll.x), u.bbox.ll.y.isLessThan(this.bbox.ll.y) && (this.bbox.ll.y = u.bbox.ll.y), u.bbox.ur.x.isGreaterThan(this.bbox.ur.x) && (this.bbox.ur.x = u.bbox.ur.x), u.bbox.ur.y.isGreaterThan(this.bbox.ur.y) && (this.bbox.ur.y = u.bbox.ur.y), this.polys.push(u);
    }
    this.isSubject = r;
  }
  getSweepEvents() {
    const n = [];
    for (let r = 0, e = this.polys.length; r < e; r++) {
      const s = this.polys[r].getSweepEvents();
      for (let u = 0, l = s.length; u < l; u++)
        n.push(s[u]);
    }
    return n;
  }
}, hS = (n, ...r) => Oa.run("union", n, r), fS = (n, ...r) => Oa.run("difference", n, r);
Jn.set;
function gS(n) {
  const r = [];
  if (gr(n, (u) => {
    r.push(u.coordinates);
  }), r.length < 2)
    throw new Error("Must have at least two features");
  const e = n.features[0].properties || {}, s = fS(r[0], ...r.slice(1));
  return s.length === 0 ? null : s.length === 1 ? Yn(s[0], e) : Su(s, e);
}
var Od = gS;
function Rd(n) {
  var r = new Xt(n);
  return r.insert = function(e) {
    if (e.type !== "Feature") throw new Error("invalid feature");
    return e.bbox = e.bbox ? e.bbox : wn(e), Xt.prototype.insert.call(this, e);
  }, r.load = function(e) {
    var s = [];
    return Array.isArray(e) ? e.forEach(function(u) {
      if (u.type !== "Feature") throw new Error("invalid features");
      u.bbox = u.bbox ? u.bbox : wn(u), s.push(u);
    }) : An(e, function(u) {
      if (u.type !== "Feature") throw new Error("invalid features");
      u.bbox = u.bbox ? u.bbox : wn(u), s.push(u);
    }), Xt.prototype.load.call(this, s);
  }, r.remove = function(e, s) {
    if (e.type !== "Feature") throw new Error("invalid feature");
    return e.bbox = e.bbox ? e.bbox : wn(e), Xt.prototype.remove.call(this, e, s);
  }, r.clear = function() {
    return Xt.prototype.clear.call(this);
  }, r.search = function(e) {
    var s = Xt.prototype.search.call(this, this.toBBox(e));
    return $e(s);
  }, r.collides = function(e) {
    return Xt.prototype.collides.call(this, this.toBBox(e));
  }, r.all = function() {
    var e = Xt.prototype.all.call(this);
    return $e(e);
  }, r.toJSON = function() {
    return Xt.prototype.toJSON.call(this);
  }, r.fromJSON = function(e) {
    return Xt.prototype.fromJSON.call(this, e);
  }, r.toBBox = function(e) {
    var s;
    if (e.bbox) s = e.bbox;
    else if (Array.isArray(e) && e.length === 4) s = e;
    else if (Array.isArray(e) && e.length === 6)
      s = [e[0], e[1], e[3], e[4]];
    else if (e.type === "Feature") s = wn(e);
    else if (e.type === "FeatureCollection") s = wn(e);
    else throw new Error("invalid geojson");
    return {
      minX: s[0],
      minY: s[1],
      maxX: s[2],
      maxY: s[3]
    };
  }, r;
}
function dS(n) {
  var r = n[0], e = n[1], s = n[2], u = n[3], l = Ot(n.slice(0, 2), [s, e]), f = Ot(n.slice(0, 2), [r, u]);
  if (l >= f) {
    var h = (e + u) / 2;
    return [
      r,
      h - (s - r) / 2,
      s,
      h + (s - r) / 2
    ];
  } else {
    var m = (r + s) / 2;
    return [
      m - (u - e) / 2,
      e,
      m + (u - e) / 2,
      u
    ];
  }
}
function pS(n, r) {
  if (r = r ?? {}, !Da(r)) throw new Error("options is invalid");
  var e = r.precision, s = r.coordinates, u = r.mutate;
  if (e = e == null || isNaN(e) ? 6 : e, s = s == null || isNaN(s) ? 3 : s, !n) throw new Error("<geojson> is required");
  if (typeof e != "number")
    throw new Error("<precision> must be a number");
  if (typeof s != "number")
    throw new Error("<coordinates> must be a number");
  (u === !1 || u === void 0) && (n = JSON.parse(JSON.stringify(n)));
  var l = Math.pow(10, e);
  return fr(n, function(f) {
    mS(f, l, s);
  }), n;
}
function mS(n, r, e) {
  n.length > e && n.splice(e, n.length);
  for (var s = 0; s < n.length; s++)
    n[s] = Math.round(n[s] * r) / r;
  return n;
}
function vS(n) {
  if (!n)
    throw new Error("geojson is required");
  const r = [];
  return ur(n, (e) => {
    yS(e, r);
  }), $e(r);
}
function yS(n, r) {
  let e = [];
  const s = n.geometry;
  if (s !== null) {
    switch (s.type) {
      case "Polygon":
        e = Rt(s);
        break;
      case "LineString":
        e = [Rt(s)];
    }
    e.forEach((u) => {
      _S(u, n.properties).forEach((f) => {
        f.id = r.length, r.push(f);
      });
    });
  }
}
function _S(n, r) {
  const e = [];
  return n.reduce((s, u) => {
    const l = ui([s, u], r);
    return l.bbox = ES(s, u), e.push(l), u;
  }), e;
}
function ES(n, r) {
  const e = n[0], s = n[1], u = r[0], l = r[1], f = e < u ? e : u, h = s < l ? s : l, m = e > u ? e : u, d = s > l ? s : l;
  return [f, h, m, d];
}
var xS = Object.defineProperty, wS = Object.defineProperties, kS = Object.getOwnPropertyDescriptors, nf = Object.getOwnPropertySymbols, SS = Object.prototype.hasOwnProperty, MS = Object.prototype.propertyIsEnumerable, rf = (n, r, e) => r in n ? xS(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, sf = (n, r) => {
  for (var e in r || (r = {}))
    SS.call(r, e) && rf(n, e, r[e]);
  if (nf)
    for (var e of nf(r))
      MS.call(r, e) && rf(n, e, r[e]);
  return n;
}, af = (n, r) => wS(n, kS(r));
function IS(n, r, e = {}) {
  if (!n || !r)
    throw new Error("lines and pt are required arguments");
  const s = We(r);
  let u = Sn([1 / 0, 1 / 0], {
    dist: 1 / 0,
    index: -1,
    multiFeatureIndex: -1,
    location: -1
  }), l = 0;
  return ur(
    n,
    function(f, h, m) {
      const d = Rt(f);
      for (let v = 0; v < d.length - 1; v++) {
        const y = Sn(d[v]);
        y.properties.dist = Ot(r, y, e);
        const E = We(y), S = Sn(d[v + 1]);
        S.properties.dist = Ot(r, S, e);
        const M = We(S), D = Ot(y, S, e);
        let U, G;
        E[0] === s[0] && E[1] === s[1] ? [U, , G] = [E, void 0, !1] : M[0] === s[0] && M[1] === s[1] ? [U, , G] = [M, void 0, !0] : [U, , G] = AS(
          y.geometry.coordinates,
          S.geometry.coordinates,
          We(r)
        );
        let I;
        U && (I = Sn(U, {
          dist: Ot(r, U, e),
          multiFeatureIndex: m,
          location: l + Ot(y, U, e)
        })), I && I.properties.dist < u.properties.dist && (u = af(sf({}, I), {
          properties: af(sf({}, I.properties), {
            // Legacy behaviour where index progresses to next segment # if we
            // went with the end point this iteration.
            index: G ? v + 1 : v
          })
        })), l += D;
      }
    }
  ), u;
}
function LS(n, r) {
  const [e, s, u] = n, [l, f, h] = r;
  return e * l + s * f + u * h;
}
function bS(n, r) {
  const [e, s, u] = n, [l, f, h] = r;
  return [s * h - u * f, u * l - e * h, e * f - s * l];
}
function of(n) {
  return Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2));
}
function wr(n, r) {
  const e = LS(n, r) / (of(n) * of(r));
  return Math.acos(Math.min(Math.max(e, -1), 1));
}
function zo(n) {
  const r = it(n[1]), e = it(n[0]);
  return [
    Math.cos(r) * Math.cos(e),
    Math.cos(r) * Math.sin(e),
    Math.sin(r)
  ];
}
function kr(n) {
  const [r, e, s] = n, u = Ar(Math.asin(s));
  return [Ar(Math.atan2(e, r)), u];
}
function AS(n, r, e) {
  const s = zo(n), u = zo(r), l = zo(e), [f, h, m] = l, [d, v, y] = bS(s, u), E = v * m - y * h, S = y * f - d * m, M = d * h - v * f, D = M * v - S * y, U = E * y - M * d, G = S * d - E * v, I = 1 / Math.sqrt(Math.pow(D, 2) + Math.pow(U, 2) + Math.pow(G, 2)), H = [D * I, U * I, G * I], J = [-1 * D * I, -1 * U * I, -1 * G * I], X = wr(s, u), W = wr(s, H), $ = wr(u, H), x = wr(s, J), k = wr(u, J);
  let b;
  return W < x && W < k || $ < x && $ < k ? b = H : b = J, wr(s, b) > X || wr(u, b) > X ? Ot(kr(b), kr(s)) <= Ot(kr(b), kr(u)) ? [kr(s), !0, !1] : [kr(u), !1, !0] : [kr(b), !1, !1];
}
function CS(n, r) {
  if (!n) throw new Error("line is required");
  if (!r) throw new Error("splitter is required");
  var e = tc(n), s = tc(r);
  if (e !== "LineString") throw new Error("line must be LineString");
  if (s === "FeatureCollection")
    throw new Error("splitter cannot be a FeatureCollection");
  if (s === "GeometryCollection")
    throw new Error("splitter cannot be a GeometryCollection");
  var u = pS(r, { precision: 7 });
  switch (s) {
    case "Point":
      return xu(n, u);
    case "MultiPoint":
      return uf(n, u);
    case "LineString":
    case "MultiLineString":
    case "Polygon":
    case "MultiPolygon":
      return uf(
        n,
        ws(n, u, {
          ignoreSelfIntersections: !0
        })
      );
  }
}
function uf(n, r) {
  var e = [], s = Rd();
  return ur(r, function(u) {
    if (e.forEach(function(h, m) {
      h.id = m;
    }), !e.length)
      e = xu(n, u).features, e.forEach(function(h) {
        h.bbox || (h.bbox = dS(wn(h)));
      }), s.load($e(e));
    else {
      var l = s.search(u);
      if (l.features.length) {
        var f = Dd(u, l);
        e = e.filter(function(h) {
          return h.id !== f.id;
        }), s.remove(f), An(xu(f, u), function(h) {
          e.push(h), s.insert(h);
        });
      }
    }
  }), $e(e);
}
function xu(n, r) {
  var e = [], s = Rt(n)[0], u = Rt(n)[n.geometry.coordinates.length - 1];
  if (qo(s, We(r)) || qo(u, We(r)))
    return $e([n]);
  var l = Rd(), f = vS(n);
  l.load(f);
  var h = l.search(r);
  if (!h.features.length) return $e([n]);
  var m = Dd(r, h), d = [s], v = gm(
    f,
    function(y, E, S) {
      var M = Rt(E)[1], D = We(r);
      return S === m.id ? (y.push(D), e.push(ui(y)), qo(D, M) ? [D] : [D, M]) : (y.push(M), y);
    },
    d
  );
  return v.length > 1 && e.push(ui(v)), $e(e);
}
function Dd(n, r) {
  if (!r.features.length) throw new Error("lines must contain features");
  if (r.features.length === 1) return r.features[0];
  var e, s = 1 / 0;
  return An(r, function(u) {
    var l = IS(u, n), f = l.properties.dist;
    f < s && (e = u, s = f);
  }), e;
}
function qo(n, r) {
  return n[0] === r[0] && n[1] === r[1];
}
var TS = CS;
class NS extends Si {
  constructor() {
    super(...arguments);
    O(this, "mode", "cut");
    O(this, "lineDrawer", new dl(
      this.gm,
      { snappingMarkers: "first", targetShape: "polygon" }
    ));
    O(this, "cutShapesAllowed", ["ellipse", "circle", "line", "rectangle", "polygon"]);
    O(this, "mapEventHandlers", {
      [`${me}:draw`]: this.forwardLineDrawerEvent.bind(this),
      mousemove: this.onMouseMove.bind(this)
    });
  }
  onStartAction() {
    this.lineDrawer.startAction(), this.lineDrawer.on(
      "firstMarkerClick",
      this.cutPolygonFinished.bind(this)
    );
  }
  onEndAction() {
    this.lineDrawer.endAction();
  }
  onMouseMove(e) {
    return Qe(e) ? (this.lineDrawer.featureData || this.fireMarkerPointerUpdateEvent(), { next: !0 }) : { next: !0 };
  }
  cutPolygonFinished(e) {
    this.lineDrawer.endShape();
    const s = gl(e.geoJson), u = this.getBBoxFeaturesByPolygon(s);
    this.cutFeaturesByPolygon(u, s);
  }
  getBBoxFeaturesByPolygon(e) {
    const s = Hu(e), u = this.gm.mapAdapter.coordBoundsToScreenBounds(s);
    return this.gm.mapAdapter.queryFeaturesByScreenCoordinates({
      queryCoordinates: u,
      sourceNames: [ie.main]
    });
  }
  cutFeaturesByPolygon(e, s) {
    e.forEach((u) => {
      if (ch(u.getGeoJson(), s)) {
        this.gm.features.delete(u), this.fireFeatureRemovedEvent(u);
        return;
      }
      if (bd(u.getGeoJson(), s) && this.cutShapesAllowed.includes(u.shape)) {
        if (u.shape === "line") {
          this.cutLineFeatureByPolygon(u, s);
          return;
        }
        this.cutPolygonFeatureByPolygon(u.id, s);
      }
    });
  }
  cutLineFeatureByPolygon(e, s) {
    const u = e.getGeoJson(), l = lx(this.gm.mapAdapter, s), f = TS(u, s);
    if (!l || f.features.length === 0)
      return;
    const h = [];
    if (f.features.filter((m) => !ch(m, l)).forEach((m) => {
      const d = this.createLineFeature(Mf(m));
      d && h.push(d);
    }), this.gm.features.delete(e), !Ld(h)) {
      re.error("cutLineFeatureByPolygon: resultFeatures not found", f);
      return;
    }
    this.fireFeatureUpdatedEvent({
      sourceFeatures: [e],
      targetFeatures: h
    });
  }
  createLineFeature(e) {
    const s = {
      ...e,
      properties: {
        shape: "line"
      }
    };
    return this.gm.features.createFeature({
      shapeGeoJson: s,
      sourceName: ie.main
    });
  }
  cutPolygonFeatureByPolygon(e, s) {
    const u = this.gm.features.get(ie.main, e);
    if (!u) {
      re.warn("cutPolygonFeatureByPolygon: featureData not found", e);
      return;
    }
    u.convertToPolygon();
    const l = u.getGeoJson(), f = this.getGeoJsonDifference(l, s);
    f && (u.updateGeoJsonGeometry(f.geometry), this.fireFeatureUpdatedEvent({
      sourceFeatures: [u],
      targetFeatures: [u]
    }));
  }
  getGeoJsonDifference(e, s) {
    const u = $e([e, s]), l = Od(u);
    return l ? l.type === "Feature" ? l : (l.type === "FeatureCollection" && re.error("getGeoJsonDifference: FeatureCollection detected (not supported)", l), null) : null;
  }
}
class PS extends Si {
  constructor() {
    super(...arguments);
    O(this, "mode", "delete");
    O(this, "mapEventHandlers", {
      click: this.onMouseClick.bind(this)
    });
  }
  onStartAction() {
    this.gm.markerPointer.enable({ invisibleMarker: !0 }), this.gm.markerPointer.pauseSnapping();
  }
  onEndAction() {
    this.gm.markerPointer.resumeSnapping(), this.gm.markerPointer.disable();
  }
  onMouseClick(e) {
    if (!Qe(e, { warning: !0 }))
      return { next: !1 };
    const s = this.gm.features.getFeatureByMouseEvent({ event: e, sourceNames: [ie.main] });
    return s && (this.gm.features.delete(s), this.fireFeatureRemovedEvent(s)), { next: !1 };
  }
}
class OS extends pl {
  constructor() {
    super(...arguments);
    O(this, "mode", "drag");
  }
  onStartAction() {
  }
  onEndAction() {
  }
  handleGmEdit(e) {
    return Mi(e) ? e.action === "marker_move" && e.lngLatStart && e.lngLatEnd ? (this.previousLngLat || (this.previousLngLat = e.lngLatStart), this.moveFeature(e.featureData, e.lngLatEnd), { next: !1 }) : (e.action === "marker_captured" ? (this.isDragging = !0, e.featureData.changeSource({ sourceName: ie.temporary, atomic: !0 }), this.fireFeatureEditStartEvent({ feature: e.featureData })) : e.action === "marker_released" && (this.previousLngLat = null, this.isDragging = !1, e.featureData.changeSource({ sourceName: ie.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData })), { next: !0 }) : (re.error("EditDrag.handleGmEdit: not an edit event", e), { next: !0 });
  }
}
class RS extends pl {
  constructor() {
    super(...arguments);
    O(this, "mode", "rotate");
    O(this, "convertFeaturesTypes", ["rectangle"]);
    O(this, "shapeRotateHandlers", {
      marker: this.rotateFeature.bind(this),
      circle: this.rotateFeature.bind(this),
      circle_marker: this.rotateFeature.bind(this),
      text_marker: this.rotateFeature.bind(this),
      line: this.rotateFeature.bind(this),
      rectangle: this.rotateFeature.bind(this),
      polygon: this.rotateFeature.bind(this),
      ellipse: this.rotateEllipse.bind(this)
    });
  }
  onStartAction() {
  }
  onEndAction() {
  }
  handleGmEdit(e) {
    var s;
    return Mi(e) ? e.action === "marker_move" && e.lngLatStart && e.lngLatEnd ? (((s = e.markerData) == null ? void 0 : s.type) === "vertex" ? this.moveVertex(e) : this.moveSource(e.featureData, e.lngLatStart, e.lngLatEnd), { next: !1 }) : (e.action === "marker_captured" ? (e.featureData.changeSource({ sourceName: ie.temporary, atomic: !0 }), this.fireFeatureEditStartEvent({ feature: e.featureData })) : e.action === "marker_released" && (e.featureData.changeSource({ sourceName: ie.main, atomic: !0 }), this.fireFeatureEditEndEvent({ feature: e.featureData })), { next: !0 }) : (re.error("EditChange.handleGmEdit: not an edit event", e), { next: !1 });
  }
  moveVertex(e) {
    var l, f;
    const s = e.featureData, u = ((f = (l = this.shapeRotateHandlers)[s.shape]) == null ? void 0 : f.call(l, e)) || null;
    u ? (this.fireBeforeFeatureUpdate({
      features: [s],
      geoJsonFeatures: [u]
    }), this.updateFeatureGeoJson({ featureData: s, featureGeoJson: u }) && this.convertFeaturesTypes.includes(s.shape) && s.convertToPolygon()) : re.error("EditRotate.moveVertex: invalid geojson", u, e);
  }
  rotateEllipse(e) {
    const { featureData: s } = e;
    if (s.shape !== "ellipse")
      return re.error("EditRotate.rotateEllipse: invalid shape type", s), null;
    const u = s.getShapeProperty("center"), l = s.getShapeProperty("xSemiAxis"), f = s.getShapeProperty("ySemiAxis"), h = s.getShapeProperty("angle");
    if (!Array.isArray(u) || typeof l != "number" || typeof f != "number" || typeof h != "number")
      return re.error(
        "rotateEllipse: missing center, xSemiAxis, ySemiAxis or angle in the featureData",
        s
      ), null;
    const m = this.calculateRotationAngle(
      u,
      e.lngLatStart,
      e.lngLatEnd,
      !1
    );
    return Wa({
      center: u,
      xSemiAxis: l,
      ySemiAxis: f,
      angle: h + m
    });
  }
  rotateFeature(e) {
    const s = e.featureData, u = hn(s.getGeoJson()), l = lg(xf(u)), f = this.calculateRotationAngle(
      l,
      e.lngLatStart,
      e.lngLatEnd
    );
    return u.geometry = km(u, f, { pivot: l }).geometry, u;
  }
  calculateRotationAngle(e, s, u, l = !0) {
    const f = ha(e, s), m = ha(e, u) - f;
    return l ? (m + 360) % 360 : m;
  }
}
const DS = {
  drag: OS,
  change: Uk,
  rotate: RS,
  scale: null,
  copy: null,
  cut: NS,
  split: null,
  union: null,
  difference: null,
  line_simplification: null,
  lasso: null,
  delete: PS
}, FS = (n, r) => {
  let e = null;
  try {
    n.forEach((s) => {
      if (r(s))
        throw e = s, new Error("found");
    });
  } catch {
  }
  return e;
};
var hf;
class GS extends pr {
  constructor() {
    super(...arguments);
    O(this, "mode", "shape_markers");
    O(this, "pinEnabled", ((hf = this.gm.options.controls.helper.pin) == null ? void 0 : hf.active) || !1);
    O(this, "previousPosition", null);
    O(this, "activeMarker", null);
    O(this, "activeFeatureData", null);
    O(this, "sharedMarkers", []);
    O(this, "allowedShapes", ["circle", "line", "rectangle", "polygon", "ellipse"]);
    O(this, "edgeMarkersAllowed", !1);
    O(this, "edgeMarkerAllowedShapes", ["line", "rectangle", "polygon"]);
    O(this, "shapeMarkerAllowedModes", ["drag", "change", "cut", "split"]);
    O(this, "mapEventHandlers", {
      [`${me}:draw`]: this.handleGmDraw.bind(this),
      [`${me}:edit`]: this.handleGmEdit.bind(this),
      mousedown: this.onMouseDown.bind(this),
      touchstart: this.onMouseDown.bind(this),
      mouseup: this.onMouseUp.bind(this),
      touchend: this.onMouseUp.bind(this),
      mousemove: this.onMouseMove.bind(this),
      touchmove: this.onMouseMove.bind(this),
      contextmenu: this.onMouseRightButtonClick.bind(this)
    });
    O(this, "throttledMethods", Dr({
      sendMarkerMoveEvent: this.sendMarkerMoveEvent,
      sendMarkerRightClickEvent: this.sendMarkerRightClickEvent
    }, this, this.gm.options.settings.throttlingDelay));
    O(this, "debouncedMethods", sk({
      refreshMarkers: this.refreshMarkers
    }, this, this.gm.options.settings.throttlingDelay * 10));
  }
  onStartAction() {
    this.isShapeMarkerAllowed() && this.gm.markerPointer.enable({ invisibleMarker: !0 }), this.edgeMarkersAllowed = this.gm.getActiveEditModes().includes("change"), this.addMarkers();
  }
  onEndAction() {
    this.gm.markerPointer.disable(), this.removeMarkers();
  }
  setPin(e) {
    this.pinEnabled = e;
  }
  onMouseDown(e) {
    var l;
    const s = ["mousedown", "touchstart"];
    if (!Qe(e, { warning: !0 }) || !s.includes(e.type))
      return { next: !0 };
    if (e.type === "mousedown" && e.originalEvent.button !== 0)
      return { next: !0 };
    const u = this.getFeatureMarkerByMouseEvent(e);
    return this.activeMarker = u || null, this.activeFeatureData = (u == null ? void 0 : u.instance.parent) || null, this.activeMarker && this.activeFeatureData ? (this.previousPosition = Xu(this.activeMarker.instance), this.gm.mapAdapter.setDragPan(!1), this.activeMarker.type === "edge" && this.sendMarkerEvent("edge_marker_click", this.activeFeatureData, this.activeMarker), this.pinEnabled && this.pinHelperInstance ? (this.sharedMarkers = this.pinHelperInstance.getSharedMarkers(this.activeMarker.position.coordinate), this.sharedMarkers.forEach(
      (f) => {
        var h;
        return (h = this.snappingHelper) == null ? void 0 : h.addExcludedFeature(f.featureData);
      }
    )) : (l = this.snappingHelper) == null || l.addExcludedFeature(this.activeFeatureData), this.sendMarkerEvent("marker_captured", this.activeFeatureData, this.activeMarker), { next: !1 }) : { next: !0 };
  }
  onMouseUp() {
    var s;
    if (!this.activeMarker)
      return { next: !0 };
    const e = {
      featureData: this.activeFeatureData,
      markerData: this.activeMarker
    };
    return this.activeMarker = null, this.activeFeatureData = null, this.sharedMarkers = [], (s = this.snappingHelper) == null || s.clearExcludedFeatures(), this.previousPosition = null, this.gm.mapAdapter.setDragPan(!0), e.featureData && e.markerData ? (this.sendMarkerEvent("marker_released", e.featureData, e.markerData), { next: !1 }) : (re.debug("ShapeMarkersHelper.onMouseUp: no active marker or featureData", e), { next: !0 });
  }
  onMouseMove(e) {
    return !this.activeMarker || !Qe(e, { warning: !0 }) ? { next: !0 } : (this.throttledMethods.sendMarkerMoveEvent(e), { next: !1 });
  }
  onMouseRightButtonClick(e) {
    const s = this.getFeatureMarkerByMouseEvent(e);
    return s && s.instance.parent ? (this.throttledMethods.sendMarkerRightClickEvent(
      s.instance.parent,
      s
    ), { next: !1 }) : { next: !0 };
  }
  get pinHelperInstance() {
    return this.pinEnabled && Object.values(this.gm.actionInstances).find(fk) || null;
  }
  isShapeMarkerAllowed() {
    return D_(
      this.shapeMarkerAllowedModes,
      this.gm.getActiveEditModes()
    ).length > 0;
  }
  convertToVertexMarker(e) {
    if (e.type === "edge" && e.instance.parent) {
      const s = e.position, u = e.instance.parent;
      this.removeMarker(e);
      const l = this.createMarker({
        type: "vertex",
        positionData: s,
        parentFeature: u
      }), f = u.getGeoJson(), h = W_(f, s.coordinate);
      if (h) {
        const m = h.path.join("."), d = u.markers.get(m);
        return d && this.removeMarker(d), u.markers.set(m, l), l;
      }
    }
    return re.error("ShapeMarkersHelper.convertToVertexMarker: invalid marker type", e), e;
  }
  getFeatureMarkerByMouseEvent(e) {
    var u;
    const s = this.gm.features.getFeatureByMouseEvent({
      event: e,
      sourceNames: [ie.main]
    });
    if ((u = s == null ? void 0 : s.parent) != null && u.markers) {
      const l = FS(
        s.parent.markers,
        (f) => f.instance === s
      );
      if ((l == null ? void 0 : l.type) !== "dom")
        return l;
    }
    return null;
  }
  addMarkers() {
    this.gm.features.forEach((e) => {
      if (!e || !this.allowedShapes.includes(e.shape))
        return;
      this.addCenterMarker(e);
      const s = this.getAllShapeSegments(e);
      s.forEach((u, l) => {
        if (this.isMarkerIndexAllowed(
          e.shape,
          l,
          s.length
        )) {
          const h = this.createOrUpdateVertexMarker(u.segment.start, e);
          if (e.markers.set(h.markerKey, h.markerData), e.shape === "line" && l === s.length - 1) {
            const m = this.createOrUpdateVertexMarker(
              u.segment.end,
              e
            );
            e.markers.set(m.markerKey, m.markerData);
          }
        }
        if (this.isEdgeMarkerAllowed(e)) {
          const h = this.createOrUpdateEdgeMarker(u, e);
          e.markers.set(h.markerKey, h.markerData);
        }
      });
    });
  }
  addCenterMarker(e) {
    if (e.shapeProperties.center) {
      const s = this.createMarker({
        type: "center",
        positionData: {
          path: [],
          coordinate: e.shapeProperties.center
        },
        parentFeature: e
      });
      e.markers.set("center", s);
    }
  }
  getAllShapeSegments(e) {
    const s = e.getGeoJson(), u = [];
    return Yu(s, (l, f) => {
      u.push({
        segment: l,
        middle: this.getSegmentMiddlePosition(l),
        edgeMarkerKey: this.getEdgeMarkerKey(f)
      });
    }), u;
  }
  isEdgeMarkerAllowed(e) {
    return this.edgeMarkersAllowed && this.edgeMarkerAllowedShapes.includes(e.shape);
  }
  isMarkerIndexAllowed(e, s, u) {
    const l = Math.floor(u / 4);
    return e === "circle" ? (s + l / 2) % l === 0 : e === "ellipse" ? s % l === 0 : !0;
  }
  getEdgeMarkerKey(e) {
    return `edge.${e}`;
  }
  getSegmentMiddlePosition(e) {
    const s = this.gm.mapAdapter.project(e.start.coordinate), u = this.gm.mapAdapter.project(e.end.coordinate), l = [
      (s[0] + u[0]) / 2,
      (s[1] + u[1]) / 2
    ], f = e.start.path.slice(0, e.start.path.length - 1).concat([-1]);
    return {
      coordinate: this.gm.mapAdapter.unproject(l),
      path: f
    };
  }
  removeMarkers() {
    this.gm.features.forEach((e, s) => {
      const u = this.gm.features.get(ie.main, s);
      u && (u.markers.forEach((l) => {
        l.type !== "dom" ? this.gm.features.delete(l.instance) : re.error("Non a FeatureData marker", l);
      }), u.markers = /* @__PURE__ */ new Map());
    });
  }
  removeMarker(e) {
    if (e.type === "dom") {
      re.error("Wrong marker type", e);
      return;
    }
    const s = e.instance.parent;
    if (!s) {
      re.error("Missing parent feature data", e);
      return;
    }
    try {
      s.markers.forEach((u, l) => {
        if (u === e)
          throw this.gm.features.delete(u.instance), s.markers.delete(l), new Error("break");
      });
    } catch {
    }
  }
  createMarker({ type: e, segment: s, positionData: u, parentFeature: l }) {
    const f = u.coordinate, h = this.gm.features.createMarkerFeature({
      sourceName: l.sourceName,
      parentFeature: l,
      type: e,
      coordinate: f
    });
    if (!h)
      throw new Error(`Missine feature data for the "${e}" marker`);
    if (e === "edge" && s)
      return {
        type: e,
        instance: h,
        position: hn(u),
        segment: s
      };
    if (e === "vertex" || e === "center")
      return {
        type: e,
        instance: h,
        position: hn(u)
      };
    throw new Error(`Invalid marker type "${e}" with segment: ${s}`);
  }
  handleGmDraw(e) {
    return ju(e) ? (e.action === "feature_created" && this.debouncedMethods.refreshMarkers(), { next: !0 }) : (re.error("ShapeMarkersHelper.handleGmDraw: not a draw event", e), { next: !0 });
  }
  refreshMarkers() {
    this.removeMarkers(), this.addMarkers();
  }
  handleGmEdit(e) {
    return Mi(e) ? (e.action === "feature_updated" && this.gm.features.withAtomicSourcesUpdate(() => {
      this.handleShapeUpdate(e);
    }), { next: !0 }) : (re.error("ShapeMarkersHelper.handleGmEdit: not an edit event", e), { next: !0 });
  }
  handleShapeUpdate(e) {
    var f;
    const s = e.targetFeatures[0];
    if (!s) {
      re.error("ShapeMarkersHelper.handleShapeUpdate: no featureData", e);
      return;
    }
    ((f = this.activeMarker) == null ? void 0 : f.type) === "edge" && (this.activeMarker = this.convertToVertexMarker(this.activeMarker));
    const u = this.getAllShapeSegments(s), l = new Set(s.markers.keys());
    u.forEach((h, m) => {
      if (this.isMarkerIndexAllowed(
        s.shape,
        m,
        u.length
      )) {
        const v = this.createOrUpdateVertexMarker(h.segment.start, s);
        if (l.delete(v.markerKey), s.shape === "line" && m === u.length - 1) {
          const y = this.createOrUpdateVertexMarker(
            h.segment.end,
            s
          );
          l.delete(y.markerKey);
        }
      }
      if (this.isEdgeMarkerAllowed(s)) {
        const v = this.createOrUpdateEdgeMarker(h, s);
        l.delete(v.markerKey);
      }
    }), this.updateCenterMarkerPosition(s), l.delete("center"), l.forEach((h) => {
      const m = s.markers.get(h);
      m && m.type !== "dom" ? this.gm.features.delete(m.instance) : re.error("Non a FeatureData marker"), s.markers.delete(h);
    });
  }
  createOrUpdateVertexMarker(e, s) {
    const u = e.path.join(".");
    let l = s.markers.get(u) || null;
    if (l && (l == null ? void 0 : l.type) !== "vertex")
      throw new Error(`Invalid marker type "${l == null ? void 0 : l.type}" for edge marker`);
    return l ? (Dc(l.position.coordinate, e.coordinate) || this.gm.features.updateMarkerFeaturePosition(l.instance, e.coordinate), l.position = e) : (l = this.createMarker({
      type: "vertex",
      positionData: e,
      parentFeature: s
    }), s.markers.set(u, l)), { markerKey: u, markerData: l };
  }
  createOrUpdateEdgeMarker(e, s) {
    let u = s.markers.get(e.edgeMarkerKey) || null;
    if (u && (u == null ? void 0 : u.type) !== "edge")
      throw new Error(`Invalid marker type "${u == null ? void 0 : u.type}" for edge marker`);
    return u ? (Dc(u.position.coordinate, e.middle.coordinate) || u.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: e.middle.coordinate
    }), u.position = e.middle, u.segment = e.segment) : (u = this.createMarker({
      type: "edge",
      positionData: e.middle,
      segment: e.segment,
      parentFeature: s
    }), s.markers.set(e.edgeMarkerKey, u)), { markerKey: e.edgeMarkerKey, markerData: u };
  }
  updateCenterMarkerPosition(e) {
    const s = e.markers.get("center") || null;
    s && s.type !== "dom" && e.shapeProperties.center && (s.instance.updateGeoJsonGeometry({
      type: "Point",
      coordinates: e.shapeProperties.center
    }), s.position.coordinate = e.shapeProperties.center);
  }
  sendMarkerEvent(e, s, u) {
    const l = {
      level: "system",
      type: "edit",
      mode: "change",
      action: e,
      featureData: s,
      markerData: u
    };
    this.gm.events.fire(`${me}:edit`, l);
  }
  sendMarkerRightClickEvent(e, s) {
    const u = {
      level: "system",
      type: "edit",
      mode: "change",
      action: "marker_right_click",
      featureData: e,
      markerData: s
    };
    this.gm.events.fire(`${me}:edit`, u);
  }
  sendMarkerMoveEvent(e) {
    var u;
    const s = ((u = this.gm.markerPointer.marker) == null ? void 0 : u.getLngLat()) || e.lngLat.toArray();
    this.activeMarker && this.activeFeatureData && (this.pinEnabled ? this.sharedMarkers : [{
      markerData: this.activeMarker,
      featureData: this.activeFeatureData
    }]).forEach((f) => {
      if (this.previousPosition) {
        const h = {
          level: "system",
          type: "edit",
          mode: "drag",
          action: "marker_move",
          featureData: f.featureData,
          markerData: f.markerData,
          lngLatStart: this.previousPosition,
          lngLatEnd: s
        };
        this.gm.events.fire(`${me}:edit`, h);
      }
    }), this.previousPosition = s;
  }
}
class BS extends pr {
  constructor() {
    super(...arguments);
    O(this, "mode", "snapping");
    O(this, "tolerance", 18);
    O(this, "excludedFeature", /* @__PURE__ */ new Set());
    O(this, "customSnappingLngLats", /* @__PURE__ */ new Map());
    O(this, "customSnappingFeatures", /* @__PURE__ */ new Set());
    O(this, "lineSnappingShapes", [
      "circle",
      "line",
      "rectangle",
      "polygon",
      "snap_guide"
    ]);
    O(this, "mapEventHandlers", {});
    O(this, "shapeSnappingHandlers", {
      marker: this.getPointsSnapping.bind(this),
      circle: this.getLineSnapping.bind(this),
      circle_marker: this.getPointsSnapping.bind(this),
      text_marker: this.getPointsSnapping.bind(this),
      line: this.getLineSnapping.bind(this),
      rectangle: this.getLineSnapping.bind(this),
      polygon: this.getLineSnapping.bind(this),
      snap_guide: this.getLineSnapping.bind(this)
    });
  }
  onStartAction() {
    this.gm.markerPointer.setSnapping(!0);
  }
  onEndAction() {
    this.gm.markerPointer.setSnapping(!1);
  }
  addExcludedFeature(e) {
    this.excludedFeature.add(e);
  }
  clearExcludedFeatures() {
    this.excludedFeature.clear();
  }
  addCustomSnappingFeature(e) {
    this.customSnappingFeatures.add(e);
  }
  removeCustomSnappingFeature(e) {
    this.customSnappingFeatures.delete(e);
  }
  clearCustomSnappingFeature() {
    this.customSnappingFeatures.clear();
  }
  setCustomSnappingCoordinates(e, s) {
    this.customSnappingLngLats.set(e, s);
  }
  clearCustomSnappingCoordinates(e) {
    this.customSnappingLngLats.delete(e);
  }
  getSnappedLngLat(e, s) {
    let u = this.getCustomLngLatsSnapping(s);
    if (u)
      return u;
    const l = this.getFeaturesInPointBounds(s).filter(
      (f) => !this.excludedFeature.has(f)
    );
    return u = this.getFeaturePointsSnapping(l, e, s), u || (u = this.getFeatureLinesSnapping(l, e, s), u) ? u : e;
  }
  getCustomLngLatsSnapping(e) {
    const s = {
      distance: 1 / 0,
      lngLat: null
    };
    return this.customSnappingLngLats.forEach((u) => {
      u.forEach((l) => {
        const f = this.gm.mapAdapter.project(l), h = Ks(e, f);
        h < this.tolerance && h < s.distance && (s.distance = h, s.lngLat = l);
      });
    }), s.lngLat;
  }
  getFeaturePointsSnapping(e, s, u) {
    let l = e.map((f) => ({
      shape: f.shape,
      ...this.getPointsSnapping(f, s, u)
    })).filter((f) => f.distance < this.tolerance);
    return l.length ? (l = Oc(l, ["distance"]), l[0].lngLat) : null;
  }
  getFeatureLinesSnapping(e, s, u) {
    let l = e.filter(
      (f) => this.lineSnappingShapes.includes(f.shape)
    ).map((f) => {
      const h = this.shapeSnappingHandlers[f.shape];
      return h ? {
        shape: f.shape,
        ...h(f, s, u)
      } : null;
    }).filter(
      (f) => f !== null && f.distance < this.tolerance
    );
    return l.length ? (l = Oc(l, ["distance"]), l[0].lngLat) : null;
  }
  getFeaturesInPointBounds(e) {
    const s = [
      [e[0] - this.tolerance, e[1] - this.tolerance],
      [e[0] + this.tolerance, e[1] + this.tolerance]
    ];
    return this.gm.features.getFeaturesByScreenBounds(
      { bounds: s, sourceNames: [ie.main, ie.temporary] }
    ).filter((u) => u.temporary ? this.customSnappingFeatures.has(u) : !0) || [];
  }
  getPointsSnapping(e, s, u) {
    const l = e.getGeoJson(), f = {
      distance: 1 / 0,
      coord: null
      // lngLat coords
    };
    return Es(l, (h) => {
      const m = this.gm.mapAdapter.project(h.coordinate), d = Ks(u, m);
      d < this.tolerance && d < f.distance && (f.distance = d, f.coord = h.coordinate);
    }, !0), {
      lngLat: f.coord ? f.coord : s,
      distance: f.distance
    };
  }
  getLineSnapping(e, s, u) {
    const l = e.getGeoJson();
    return this.getNearestLinePointData(l, s, u);
  }
  getNearestLinePointData(e, s, u) {
    const l = {
      lngLat: s,
      distance: 1 / 0
    }, f = this.gm.mapAdapter.getEuclideanNearestLngLat(
      e,
      s
    ), h = this.gm.mapAdapter.project(f);
    return l.distance = Ks(h, u), l.distance < this.tolerance && (l.lngLat = f), l;
  }
}
class US extends pr {
  constructor() {
    super(...arguments);
    O(this, "mode", "zoom_to_features");
    O(this, "mapEventHandlers", {});
  }
  onStartAction() {
    this.fitMapToFeatures(), setTimeout(() => {
      this.gm.options.disableMode("helper", "zoom_to_features");
    });
  }
  onEndAction() {
  }
  fitMapToFeatures() {
    const e = this.gm.features.asGeoJsonFeatureCollection({
      sourceNames: [
        ie.main
        // SOURCES.standby, // used in pro version only
      ]
    }), s = yf(e), u = [
      [s[0], s[1]],
      [s[2], s[3]]
    ];
    try {
      this.gm.mapAdapter.fitBounds(u, { padding: 20 });
    } catch {
      re.warn("Wrong bounds for zooming to features", u, e);
    }
  }
}
const zS = {
  shape_markers: GS,
  pin: null,
  snapping: BS,
  snap_guides: null,
  measurements: null,
  auto_trace: null,
  geofencing: null,
  zoom_to_features: US,
  click_to_edit: null
};
class qS {
  constructor(r) {
    O(this, "gm");
    O(this, "marker", null);
    O(this, "tmpMarker", null);
    O(this, "snapping", !1);
    O(this, "oldSnapping");
    this.gm = r, this.initEventHandlers();
  }
  initEventHandlers() {
    this.throttledMethods = Dr({
      onMouseMove: this.onMouseMove
    }, this, this.gm.options.settings.throttlingDelay), this.mapEventHandlers = {
      mousemove: this.throttledMethods.onMouseMove.bind(this)
    };
  }
  get snappingHelper() {
    return this.gm.actionInstances.helper__snapping || null;
  }
  setSnapping(r) {
    if (r && !this.snappingHelper) {
      re.error("MarkerPointer: snapping is not available");
      return;
    }
    this.snapping = r;
  }
  pauseSnapping() {
    this.oldSnapping !== void 0 && re.error("MarkerPointer: snapping is already paused"), this.oldSnapping = this.snapping, this.setSnapping(!1);
  }
  resumeSnapping() {
    this.oldSnapping === void 0 ? (re.error("MarkerPointer: resumeSnapping is called before pauseSnapping"), this.setSnapping(!0)) : (this.setSnapping(this.oldSnapping), this.oldSnapping = void 0);
  }
  enable({ lngLat: r, customMarker: e, invisibleMarker: s } = {
    lngLat: [0, 0],
    customMarker: void 0,
    invisibleMarker: !1
  }) {
    if (!ik()) {
      if (e && s)
        throw new Error("MarkerPointer: customMarker and invisibleMarker can't be used together");
      if (this.marker)
        throw new Error("MarkerPointer: marker is already enabled");
      this.gm.events.bus.attachEvents(this.mapEventHandlers), s ? this.marker = this.createInvisibleMarker(r || [0, 0]) : this.marker = e || this.createMarker(r || [0, 0]), this.gm.getActiveDrawModes().length && this.gm.mapAdapter.setCursor("crosshair");
    }
  }
  disable() {
    this.marker && (this.gm.events.bus.detachEvents(this.mapEventHandlers), this.marker.remove(), this.marker = null), this.gm.mapAdapter.setCursor("");
  }
  createMarker(r = [0, 0]) {
    return this.gm.mapAdapter.createDomMarker({
      anchor: "center",
      element: Sd("dom", { pointerEvents: "none" })
    }, r);
  }
  createInvisibleMarker(r = [0, 0]) {
    const e = document.createElement("div");
    return e.style.width = "0px", e.style.height = "0px", this.gm.mapAdapter.createDomMarker({
      anchor: "center",
      element: e
    }, r);
  }
  onMouseMove(r) {
    if (Qe(r, { warning: !0 }) && this.marker)
      if (this.snapping && this.snappingHelper) {
        const e = [r.point.x, r.point.y], s = this.snappingHelper.getSnappedLngLat(r.lngLat.toArray(), e);
        this.marker.setLngLat(s);
      } else
        this.marker.setLngLat(r.lngLat.toArray());
    return { next: !0 };
  }
  syncTmpMarker(r) {
    this.tmpMarker || (this.tmpMarker = this.createMarker(r)), this.tmpMarker.setLngLat(r);
  }
}
const uM = {
  type: "Feature",
  properties: {
    shape: "polygon"
  },
  geometry: {
    type: "MultiPolygon",
    coordinates: [
      [
        [
          [
            4,
            51.2
          ],
          [
            5.4,
            52.4
          ],
          [
            6.8,
            51.2
          ],
          [
            4,
            51.2
          ]
        ]
      ]
    ]
  }
}, lM = {
  type: "Feature",
  properties: {
    shape: "rectangle"
  },
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [
          -0.47,
          51.67
        ],
        [
          1.43,
          51.67
        ],
        [
          1.43,
          53.32
        ],
        [
          -0.47,
          53.32
        ],
        [
          -0.47,
          51.67
        ]
      ]
    ]
  }
};
function YS(n, r = {}) {
  const e = [];
  if (gr(n, (u) => {
    e.push(u.coordinates);
  }), e.length < 2)
    throw new Error("Must have at least 2 geometries");
  const s = hS(e[0], ...e.slice(1));
  return s.length === 0 ? null : s.length === 1 ? Yn(s[0], r.properties) : Su(s, r.properties);
}
var HS = YS;
class cM extends Si {
  constructor() {
    super(...arguments);
    O(this, "features", []);
    O(this, "featureData", null);
    O(this, "mapEventHandlers", {
      click: this.onMouseClick.bind(this)
    });
  }
  onStartAction() {
  }
  onEndAction() {
    this.features.forEach((e) => {
      e.changeSource({ sourceName: ie.main, atomic: !0 });
    }), this.features = [];
  }
  onMouseClick(e) {
    if (this.unselectFeature(e))
      return { next: !0 };
    const u = this.getAllowedFeatureByMouseEvent({ event: e, sourceNames: [ie.main] });
    return u && this.isFeatureAllowedToGroup(u) && (u.changeSource({ sourceName: ie.temporary, atomic: !0 }), this.features.push(u)), this.features.length > 1 ? (this.groupFeatures(), { next: !0 }) : { next: !0 };
  }
  unselectFeature(e) {
    const s = this.getAllowedFeatureByMouseEvent({
      event: e,
      sourceNames: [ie.temporary]
    });
    if (s) {
      const u = this.features.findIndex(
        (l) => l === s
      );
      return u > -1 && this.features.splice(u, 1), s.changeSource({ sourceName: ie.main, atomic: !0 }), !0;
    }
    return !1;
  }
  getAllowedFeatureByMouseEvent({ event: e, sourceNames: s }) {
    const u = this.gm.features.getFeatureByMouseEvent({ event: e, sourceNames: s });
    return u && this.allowedShapeTypes.includes(u.shape) ? u : null;
  }
  isFeatureAllowedToGroup(e) {
    if (!this.allowedShapeTypes.includes(e.shape))
      return !1;
    if (this.features.length === 0)
      return !0;
    const s = e.getGeoJson();
    return this.features.every(
      (u) => bd(u.getGeoJson(), s)
    );
  }
  groupFeatures() {
    if (!this.features.length) {
      re.error("BaseGroupEdit.groupFeatures: no features to group");
      return;
    }
    const e = {
      type: "FeatureCollection",
      features: this.features.map((u) => {
        const l = u.getGeoJson();
        return ["Polygon", "MultiPolygon"].includes(l.geometry.type) ? l : null;
      }).filter((u) => !!u)
    };
    let s = null;
    if (this.mode === "union" ? s = HS(e) : this.mode === "difference" && (s = Od(e)), s) {
      const u = this.gm.features.createFeature({
        shapeGeoJson: {
          ...s,
          properties: {
            ...s.properties,
            shape: "polygon"
          }
        },
        sourceName: ie.main
      });
      this.features.forEach((l) => {
        this.gm.features.delete(l);
      }), u && Ld(this.features) && this.fireFeatureUpdatedEvent({
        sourceFeatures: this.features,
        targetFeatures: [u]
      }), this.features = [];
    }
  }
}
class JS {
  constructor(r, e = {}) {
    O(this, "mapAdapterInstance", null);
    O(this, "globalLngLatBounds", this.getGlobalLngLatBounds());
    O(this, "features");
    O(this, "loaded", !1);
    O(this, "options");
    O(this, "events");
    O(this, "control");
    O(this, "actionInstances", {});
    O(this, "markerPointer");
    const s = Object.assign(r, { gm: this });
    this.options = this.initCoreOptions(e), this.events = this.initCoreEvents(), this.features = this.initCoreFeatures(), this.control = this.initCoreControls(), this.markerPointer = this.initMarkerPointer(), Ex(r) && (this.isMapInstanceLoaded(r) ? this.init(s).then() : r.once("load", async () => {
      await this.init(s);
    }));
  }
  initCoreOptions(r = {}) {
    return new nk(this, r);
  }
  initCoreEvents() {
    return new J2(this);
  }
  initCoreFeatures() {
    return new xx(this);
  }
  initCoreControls() {
    return new N2(this);
  }
  initMarkerPointer() {
    return new qS(this);
  }
  get drawClassMap() {
    return Gk;
  }
  get editClassMap() {
    return DS;
  }
  get helperClassMap() {
    return zS;
  }
  get mapAdapter() {
    if (this.mapAdapterInstance)
      return this.mapAdapterInstance;
    throw re.trace("Map adapter is not initialized"), new Error("Map adapter is not initialized");
  }
  addControls(r = void 0) {
    return new Promise((e) => {
      (async () => {
        r ? this.control.createControls(r) : this.mapAdapter.addControl(this.control), await this.onMapLoad(), e();
      })().then();
    });
  }
  isMapInstanceLoaded(r) {
    return "_fullyLoaded" in r && r._fullyLoaded;
  }
  async init(r) {
    this.mapAdapterInstance = await ek(this, r), this.features.init(), await this.addControls();
  }
  destroy() {
    this.removeControls(), this.events.bus.detachAllEvents(), "gm" in this.mapAdapter.mapInstance && delete this.mapAdapter.mapInstance.gm;
  }
  removeControls() {
    this.disableAllModes(), this.mapAdapter.removeControl(this.control);
  }
  async onMapLoad() {
    this.loaded || (await this.mapAdapter.loadImage({
      id: "default-marker",
      image: ff
    }), this.events.fire(`${me}:control`, {
      level: "system",
      type: "control",
      action: "loaded"
    }), this.loaded = !0);
  }
  disableAllModes() {
    ft(this.actionInstances).forEach((r) => {
      const [e, s] = r.split("__");
      F2(e) && z2(s) && this.options.disableMode(e, s);
    });
  }
  getActiveDrawModes() {
    return ft(this.actionInstances).map((r) => {
      const e = this.actionInstances[r];
      return e instanceof Wn ? e.mode : null;
    }).filter((r) => r !== null);
  }
  getActiveEditModes() {
    return ft(this.actionInstances).map((r) => {
      const e = this.actionInstances[r];
      return e instanceof Si ? e.mode : null;
    }).filter((r) => r !== null);
  }
  getActiveHelperModes() {
    return ft(this.actionInstances).map((r) => {
      const e = this.actionInstances[r];
      return e instanceof pr ? e.mode : null;
    }).filter((r) => r !== null);
  }
  getGlobalLngLatBounds() {
    return [
      [-179.99999, -85.051129],
      [179.99999, 85.051129]
    ];
  }
  createDrawInstance(r) {
    return this.drawClassMap[r] ? new this.drawClassMap[r](this) : (re.error(`Draw "${r}" is not available`), null);
  }
  createEditInstance(r) {
    return this.editClassMap[r] ? new this.editClassMap[r](this) : (re.error(`Edit "${r}" is not available`), null);
  }
  createHelperInstance(r) {
    return this.helperClassMap[r] ? new this.helperClassMap[r](this) : (re.error(`Helper "${r}" is not available`), null);
  }
  setGlobalEventsListener(r = null) {
    this.events.bus.forwarder.globalEventsListener = r;
  }
  enableMode(r, e) {
    this.options.enableMode(r, e);
  }
  disableMode(r, e) {
    this.options.disableMode(r, e);
  }
  toggleMode(r, e) {
    this.options.toggleMode(r, e);
  }
  isModeEnabled(r, e) {
    return this.options.isModeEnabled(r, e);
  }
  // helper methods for compatibility with the old API
  // draw (draw:*)
  enableDraw(r) {
    this.options.enableMode("draw", r);
  }
  disableDraw() {
    this.getActiveDrawModes().forEach(
      (r) => this.options.disableMode("draw", r)
    );
  }
  toggleDraw(r) {
    this.options.toggleMode("draw", r);
  }
  drawEnabled(r) {
    return this.options.isModeEnabled("draw", r);
  }
  // drag(edit:drag)
  enableGlobalDragMode() {
    this.options.enableMode("edit", "drag");
  }
  disableGlobalDragMode() {
    this.options.disableMode("edit", "drag");
  }
  toggleGlobalDragMode() {
    this.options.toggleMode("edit", "drag");
  }
  globalDragModeEnabled() {
    return this.options.isModeEnabled("edit", "drag");
  }
  // edit (edit:change)
  enableGlobalEditMode() {
    this.options.enableMode("edit", "change");
  }
  disableGlobalEditMode() {
    this.options.disableMode("edit", "change");
  }
  toggleGlobalEditMode() {
    this.options.toggleMode("edit", "change");
  }
  globalEditModeEnabled() {
    return this.options.isModeEnabled("edit", "change");
  }
  // rotate (edit:rotate)
  enableGlobalRotateMode() {
    this.options.enableMode("edit", "rotate");
  }
  disableGlobalRotateMode() {
    this.options.disableMode("edit", "rotate");
  }
  toggleGlobalRotateMode() {
    this.options.toggleMode("edit", "rotate");
  }
  globalRotateModeEnabled() {
    return this.options.isModeEnabled("edit", "rotate");
  }
  // cut (edit:cut)
  enableGlobalCutMode() {
    this.options.enableMode("edit", "cut");
  }
  disableGlobalCutMode() {
    this.options.disableMode("edit", "cut");
  }
  toggleGlobalCutMode() {
    this.options.toggleMode("edit", "cut");
  }
  globalCutModeEnabled() {
    return this.options.isModeEnabled("edit", "cut");
  }
  // remove (edit:delete)
  enableGlobalRemovalMode() {
    this.options.enableMode("edit", "delete");
  }
  disableGlobalRemovalMode() {
    this.options.disableMode("edit", "delete");
  }
  toggleGlobalRemovalMode() {
    this.options.toggleMode("edit", "delete");
  }
  globalRemovalModeEnabled() {
    return this.options.isModeEnabled("edit", "delete");
  }
}
const hM = async (n, r) => {
  const s = new JS(n, r);
  return await Promise.race([
    new Promise((u) => {
      s.mapAdapter.once(`${me}:loaded`, u);
    }),
    new Promise((u, l) => {
      setTimeout(() => l(new Error(`Timeout ${6e4 / 1e3} seconds: can't init geoman`)), 6e4);
    })
  ]), s;
};
export {
  Zu as BaseAction,
  ku as BaseDomMarker,
  pl as BaseDrag,
  Wn as BaseDraw,
  Si as BaseEdit,
  cM as BaseGroupEdit,
  pr as BaseHelper,
  X2 as BaseLayer,
  V2 as BaseMapAdapter,
  Z2 as BasePopup,
  dx as BaseSource,
  Lr as FEATURE_ID_PROPERTY,
  xa as FeatureData,
  JS as Geoman,
  nk as GmOptions,
  dl as LineDrawer,
  qS as MarkerPointer,
  ie as SOURCES,
  GS as ShapeMarkersHelper,
  ZS as boundsContains,
  Z_ as boundsToBBox,
  jS as calculatePerimeter,
  dt as controlIcons,
  $S as convertToLineStringFeatureCollection,
  Dr as convertToThrottled,
  hM as createGeomanInstance,
  lM as customShapeRectangle,
  uM as customShapeTriangle,
  wx as defaultLayerStyles,
  Gk as drawClassMap,
  Og as drawModes,
  Es as eachCoordinateWithPath,
  Yu as eachSegmentWithPath,
  DS as editClassMap,
  wd as editModes,
  yx as extraDrawModes,
  W_ as findCoordinateWithPath,
  oM as formatArea,
  aM as formatDistance,
  lg as geoJsonPointToLngLat,
  Ks as getEuclideanDistance,
  K_ as getEuclideanSegmentNearestPoint,
  Mo as getGeoJsonCoordinatesCount,
  cg as getGeoJsonFirstPoint,
  So as getLngLatDiff,
  me as gmPrefix,
  Ex as hasMapOnceMethod,
  zS as helperClassMap,
  kd as helperModes,
  Ir as includesWithType,
  F2 as isActionType,
  sM as isBaseMapEventName,
  G2 as isDrawModeName,
  B2 as isEditModeName,
  Dc as isEqualPosition,
  ch as isGeoJsonFeatureInPolygon,
  Ng as isGmControlEvent,
  ju as isGmDrawEvent,
  rM as isGmDrawFreehandDrawerEvent,
  Pg as isGmDrawLineDrawerEvent,
  nM as isGmDrawShapeEvent,
  Mi as isGmEditEvent,
  $t as isGmEvent,
  eM as isGmFeatureBeforeCreateEvent,
  tM as isGmFeatureBeforeUpdateEvent,
  ja as isGmHelperEvent,
  Wu as isGmModeEvent,
  U2 as isHelperModeName,
  Qe as isMapPointerEvent,
  z2 as isModeName,
  qu as isMultiPolygonFeature,
  Ld as isNonEmptyArray,
  iM as isPointerEventName,
  zu as isPolygonFeature,
  rE as lngLatToGeoJsonPoint,
  tk as mergeByTypeCustomizer,
  QS as moveFeatureData,
  ux as moveGeoJson,
  as as shapeNames,
  Bk as toMod,
  WS as twoCoordsToLineString,
  ft as typedKeys
};
//# sourceMappingURL=maplibre-geoman.es.js.map
