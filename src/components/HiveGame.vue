<script setup lang="ts">
import { ref } from 'vue'
import { phase, startGame, gameStatus, stopGame } from '../game-setup/game'
import { grid } from '../game-setup/gridData'
import { hexClass } from '../game-setup/hexaClasses'
import Hexa2 from '../components/icons/HexagonComp.vue'
import Timer from '../components/TimerVue.vue'

const gameHive = ref(grid)
const phaseDesc = ref<string>('You have 1 minute to memorizing as much number as you can')
const playerInput = ref('')
function handleStartStop() {
  console.log(gameStatus)

  if (gameStatus.value === 'stopped' || gameStatus.value === 'finished') {
    startGame()
  } else {
    stopGame()
  }
}
</script>

<template>
  <div class="top-elements">
    <Timer />
    <div class="player-combi">ABC</div>
    <div class="scores">3pts</div>
  </div>
  <div class="game-phase">
    {{ phase.toLocaleUpperCase() }}
  </div>
  <div class="game-phase-description">
    {{ phaseDesc }}
  </div>
  <div class="hive-wrapper">
    <Hexa2
      :class="hexClass(index)"
      v-for="index in gameHive.length"
      :key="index"
      :value="gameHive[index - 1].val"
    />
  </div>
  <div class="bottom-elements">
    <div class="number-to-find">27</div>
    <button class="start-button" @click="handleStartStop">
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

.game-phase {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: xx-large;
  font-weight: 700;
}

.game-phase-description {
  display: flex;
  width: 100%;
  justify-content: center;
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
