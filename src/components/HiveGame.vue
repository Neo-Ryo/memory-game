<script setup lang="ts">
import {
  phase,
  startGame,
  gameStatus,
  stopGame,
  numToGuess,
  gameHive,
  phaseDesc
} from '../game-setup/game'
import { hexClass } from '../game-setup/hexaClasses'
import { playerInput, submitCombi } from '../game-setup/playerInput'
import Hexa2 from '../components/icons/HexagonComp.vue'
import Timer from '../components/TimerVue.vue'
import PlayerBox from '../components/PlayerInputBox.vue'

function handleStartStop() {
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

    <div class="scores">3pts</div>
  </div>
  <div class="game-phase">
    {{ phase.toLocaleUpperCase() }}
  </div>
  <div class="game-phase-description">
    {{ phaseDesc }}
  </div>
  <div class="number-to-find">
    Combinasion should result: <span class="red-text">{{ numToGuess }}</span>
  </div>
  <div class="player-combi">
    <PlayerBox :letter="playerInput[0]" />
    <PlayerBox :letter="playerInput[1]" />
    <PlayerBox :letter="playerInput[2]" />
    <!-- <div class="del-key" @click="deleteInput">X</div> -->
    <div class="validate-key" @click="submitCombi">V</div>
  </div>
  <div class="hive-wrapper">
    <Hexa2
      :class="hexClass(index)"
      v-for="index in gameHive.length"
      :key="index + phase"
      :value="
        phase === 'guessing phase' || phase === 'game over'
          ? gameHive[index - 1].val
          : gameHive[index - 1].int
      "
    />
  </div>
  <div class="bottom-elements">
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
.number-to-find {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  font-weight: 700;
}
.game-phase-description {
  display: flex;
  width: 100%;
  justify-content: center;
}

.player-combi {
  display: flex;
  width: 100%;
  justify-content: center;
}

.del-key {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 700;
  height: 50px;
  width: 35px;
  border: 4px solid #b84141;
  color: #b84141;
  border-radius: 10px;
  margin: 5px 5px 5px 25px;
  cursor: pointer;
  user-select: none;
}

.del-key:hover {
  background-color: #b84141;
  color: inherit;
}

.validate-key {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 700;
  height: 50px;
  width: 35px;
  border: 4px solid #3eb07d;
  color: #3eb07d;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  user-select: none;
}

.validate-key:hover {
  background-color: #3eb07d;
  color: inherit;
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

.red-text {
  color: #b84141;
}

.green-text {
  color: #41b883;
}

span {
  background-color: transparent;
}
</style>
