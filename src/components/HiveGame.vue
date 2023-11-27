<script setup lang="ts">
import {
  phase,
  startGame,
  gameStatus,
  stopGame,
  numToGuess,
  gameGrid,
  phaseDesc,
  playerCurrentScore,
  playerPreviousScore,
  intel
} from '../game-setup/game'
import { hexClass } from '../game-setup/hexaClasses'
import { playerInput, submitCombi, playerHasSubmit } from '../game-setup/playerInput'
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
  <div class="game-phase">
    {{ phase.toLocaleUpperCase() }}
  </div>
  <div class="top-elements">
    <Timer />
    <div class="scores">
      <div class="current-score">Current score: {{ playerCurrentScore }} pts</div>
      <div class="previous-score">Previous score: {{ playerPreviousScore }} pts</div>
    </div>
  </div>
  <div class="game-phase-description">
    {{ phaseDesc }}
  </div>
  <div class="number-to-find">
    Combinasion should result: <span class="red">{{ numToGuess }}</span>
  </div>
  <div class="player-combi">
    <PlayerBox :letter="playerInput[0]" />
    <PlayerBox :letter="playerInput[1]" />
    <PlayerBox :letter="playerInput[2]" />
    <!-- <div class="del-key" @click="deleteInput">X</div> -->
    <div class="validate-key" @click="submitCombi">V</div>
  </div>
  <div class="intel" :class="{ red: !intel.goodAnswer, green: intel.goodAnswer }">
    {{ intel.text }}
  </div>
  <div class="hive-wrapper">
    <Hexa2
      :class="hexClass(index)"
      v-for="index in gameGrid.length"
      :key="index + phase + playerHasSubmit"
      :value="
        phase === 'guessing phase' || phase === 'game over'
          ? gameGrid[index - 1].val
          : gameGrid[index - 1].int
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
  justify-content: space-around;
  width: 100%;
  height: fit-content;
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

.scores {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: 500;
}
.current-score {
  width: 100%;
  padding: 10px;
  border: 1px solid #9e9e9e;
}
.previous-score {
  width: 100%;
  padding: 10px;
  border: 1px solid #9e9e9e;
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

.intel {
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px;
  font-weight: 500;
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

.red {
  color: #b84141;
}

.green {
  color: #41b883;
}

span {
  background-color: transparent;
}
</style>
