<script setup lang="ts">
import { onUpdated, watch, ref } from 'vue'
import { useBreakpoints } from '../utils/breakPoints'
import { setUpGame, checkCombi, hexClass } from '../game-setup/game'
import Hexa2 from '../components/icons/HexagonComp.vue'

const { grid, res } = setUpGame()
const { type, width } = useBreakpoints()

const size = ref(75)
watch(width, (newWidth) => {
  console.log(newWidth)
})
</script>

<template>
  <div class="hive-wrapper">
    <!-- <div class="one">div</div> -->
    <Hexa2
      :class="hexClass(index)"
      v-for="index in grid.length"
      :key="index"
      :value="grid[index - 1].val"
    />
    <!-- </div> -->
  </div>
</template>

<style scoped>
.hive-wrapper {
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  width: 450px;
  margin: auto;
  gap: 1px 11px;
  grid-template-columns: repeat(40, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.one {
  /* grid-area: one; */
  grid-area: 1 / 14 / 4/ 16;
  align-self: center;
  margin: auto;
}
.two {
  /* grid-area: two; */
  grid-area: 1 / 20 / 4/ 22;
  align-self: center;
  margin: auto;
}
.three {
  grid-area: 1 / 26/ 4/ 28;
  align-self: center;
  margin: auto;
  /* grid-area: three; */
}
.four {
  /* grid-area: four; */
  grid-area: 3 / 11 / 5/ 13;
  align-self: center;
  margin: auto;
}
.five {
  /* grid-area: five; */
  grid-area: 3 / 17 / 5/ 19;
  align-self: center;
  margin: auto;
}
.six {
  margin: auto;
  grid-area: 3 / 23 / 5/ 25;
  align-self: center;
  /* grid-area: six; */
}
.seven {
  /* grid-area: seven; */
  margin: auto;
  grid-area: 3 / 29 / 5/ 31;
  align-self: center;
}
.eight {
  margin: auto;
  grid-area: 4 / 8 / 7/ 10;
  align-self: center;
  /* grid-area: eight; */
}
.nine {
  /* grid-area: nine; */
  margin: auto;
  grid-area: 4 / 14 / 7/ 16;
  align-self: center;
}
.ten {
  /* grid-area: ten; */
  margin: auto;
  grid-area: 4 / 20 / 7/ 22;
  align-self: center;
}

.eleven {
  margin: auto;
  grid-area: 4 / 26 / 7/ 28;
  align-self: center;
  /* grid-area: eleven; */
}
.twelve {
  grid-area: 4 / 32 / 7/ 34;
  align-self: center;
  margin: auto;
  /* grid-area: twelve; */
}
.thirteen {
  grid-area: 5 / 11 / 9 / 13;
  align-self: center;
  margin: auto;
  /* grid-area: thirteen; */
}

.fourteen {
  grid-area: 5 / 17 / 9/ 19;
  align-self: center;
  margin: auto;
  /* grid-area: fourt; */
}

.fifteen {
  grid-area: 5 / 23 / 9 / 25;
  align-self: center;
  margin: auto;
  /* grid-area: fift; */
}

.sixteen {
  grid-area: 5 / 29 / 9 / 32;
  align-self: center;
  margin: auto;
  /* grid-area: sixt; */
}

.seventeen {
  grid-area: 6 / 14 / 11 / 16;
  align-self: center;
  margin: auto;
  /* grid-area: sevent; */
}

.eighteen {
  /* grid-area: eighteen; */
  grid-area: 6 / 20 / 11 / 22;
  align-self: center;
  margin: auto;
}

.nineteen {
  /* grid-area: ninet; */
  grid-area: 6 / 26 / 11 / 28;
  align-self: center;
  margin: auto;
}
@media only screen and (min-width: 1224px) {
  .hive-wrapper {
    gap: 2px 17px;
    width: 100%;
  }
  .one {
    /* grid-area: one; */
    grid-area: 1 / 14 / 4/ 16;
    align-self: center;
    margin: auto;
  }

  .two {
    /* grid-area: two; */
    grid-area: 1 / 18 / 4/ 20;
    align-self: center;
    margin: auto;
  }
  .three {
    grid-area: 1 / 22/ 4/ 24;
    align-self: center;
    margin: auto;
    /* grid-area: three; */
  }
  .four {
    /* grid-area: four; */
    grid-area: 3 / 12 / 5/ 14;
    align-self: center;
    margin: auto;
  }
  .five {
    /* grid-area: five; */
    grid-area: 3 / 16 / 5/ 18;
    align-self: center;
    margin: auto;
  }
  .six {
    margin: auto;
    grid-area: 3 / 20 / 5/ 22;
    align-self: center;
    /* grid-area: six; */
  }
  .seven {
    /* grid-area: seven; */
    margin: auto;
    grid-area: 3 / 24 / 5/ 26;
    align-self: center;
  }
  .eight {
    margin: auto;
    grid-area: 4 / 10 / 7/ 12;
    align-self: center;
    /* grid-area: eight; */
  }
  .nine {
    /* grid-area: nine; */
    margin: auto;
    grid-area: 4 / 14 / 7/ 16;
    align-self: center;
  }
  .ten {
    /* grid-area: ten; */
    margin: auto;
    grid-area: 4 / 18 / 7/ 20;
    align-self: center;
  }

  .eleven {
    margin: auto;
    grid-area: 4 / 22 / 7/ 24;
    align-self: center;
    /* grid-area: eleven; */
  }
  .twelve {
    grid-area: 4 / 26 / 7/ 28;
    align-self: center;
    margin: auto;
    /* grid-area: twelve; */
  }
  .thirteen {
    grid-area: 5 / 12 / 9 / 14;
    align-self: center;
    margin: auto;
    /* grid-area: thirteen; */
  }

  .fourteen {
    grid-area: 5 / 16 / 9/ 18;
    align-self: center;
    margin: auto;
    /* grid-area: fourt; */
  }

  .fifteen {
    grid-area: 5 / 20 / 9 / 22;
    align-self: center;
    margin: auto;
    /* grid-area: fift; */
  }

  .sixteen {
    grid-area: 5 / 24 / 9 / 26;
    align-self: center;
    margin: auto;
    /* grid-area: sixt; */
  }

  .seventeen {
    grid-area: 6 / 14 / 11 / 16;
    align-self: center;
    margin: auto;
    /* grid-area: sevent; */
  }

  .eighteen {
    /* grid-area: eighteen; */
    grid-area: 6 / 18 / 11 / 20;
    align-self: center;
    margin: auto;
  }

  .nineteen {
    /* grid-area: ninet; */
    grid-area: 6 / 22 / 11 / 24;
    align-self: center;
    margin: auto;
  }
}
</style>
