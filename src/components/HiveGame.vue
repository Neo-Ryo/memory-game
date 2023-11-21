<script setup lang="ts">
import { setUpGame, checkCombi, hexClass } from '../game-setup/game'
import Hexa2 from '../components/icons/HexagonComp.vue'

// defineProps<{
//   value: any
// }>()
const { grid, res } = setUpGame()
console.log(grid, res)
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
  /* gap: 10px; */
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-template-areas:
    '. . . one one two two three three . . .'
    '. . four four five five six six seven seven . .'
    '. eight eight nine nine ten ten eleven eleven twelve twelve .'
    '. . thirteen thirteen fourt fourt fift fift sixt sixt . .'
    '. . . sevent sevent eighteen eighteen ninet ninet . . .';
}

.one {
  grid-area: one;
}

.two {
  grid-area: two;
}
.three {
  grid-area: three;
}
.four {
  grid-area: four;
}
.five {
  grid-area: five;
}
.six {
  grid-area: six;
}
.seven {
  grid-area: seven;
}
.eight {
  grid-area: eight;
}
.nine {
  grid-area: nine;
}
.ten {
  grid-area: ten;
}

.eleven {
  grid-area: eleven;
}
.twelve {
  grid-area: twelve;
}
.thirteen {
  grid-area: thirteen;
}

.fourteen {
  grid-area: fourt;
}

.fifteen {
  grid-area: fift;
}

.sixteen {
  grid-area: sixt;
}

.seventeen {
  grid-area: sevent;
}

.eighteen {
  grid-area: eighteen;
}
.nineteen {
  grid-area: ninet;
}
</style>
