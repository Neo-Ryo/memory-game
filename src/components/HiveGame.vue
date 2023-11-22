<script setup lang="ts">
import { ref } from 'vue'
import { setUpGame, hexClass } from '../game-setup/game'
import { useStartTimer, useStopTimer, gameStatus } from '../game-setup/timer'
import Hexa2 from '../components/icons/HexagonComp.vue'
import Timer from '../components/TimerVue.vue'
const gameHive = ref(setUpGame())
// const playerInput = ref('')
const handleGameStatus = () => {
  if (gameStatus.value === 'started') {
    gameStatus.value = 'stopped'
    useStopTimer()
  } else {
    gameStatus.value = 'started'
    useStartTimer({ minutes: 0, seconds: 35 })
  }
}
</script>

<template>
  <div class="top-elements">
    <Timer />
    <div class="player-combi">ABC</div>
    <div class="scores">3pts</div>
  </div>
  <div class="hive-wrapper">
    <Hexa2
      :class="hexClass(index)"
      v-for="index in gameHive.grid.length"
      :key="index"
      :value="gameHive.grid[index - 1].val"
    />
  </div>
  <div class="bottom-elements">
    <div class="number-to-find">27</div>
    <button class="start-button" @click="handleGameStatus">
      {{ gameStatus === 'started' ? 'STOP' : 'START' }}
    </button>
  </div>
</template>

<style scoped>
.top-elements {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  padding: 10px;
  margin: auto;
}

.bottom-elements {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 10px;
  margin: auto;
}

.start-button {
  height: 50px;
  width: 100px;
  border-radius: 20px;
  color: #41b883;
  font-size: large;
  font-weight: 700;
  border: 5px solid #b84141;
  transition: 0.25s ease-in-out;
  background-color: transparent;
}
.start-button:hover {
  color: #b84141;
  border: 5px solid #41b883;
  transition: 0.25s ease-in-out;
}
</style>
