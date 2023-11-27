<script setup lang="ts">
import { watch, ref } from 'vue'
import { timerState } from '../game-setup/timer'
const formattedTime = ref('00:00')
const dangerState = ref<boolean>(false)
const dangerValue = 15
watch(timerState, (newVal) => {
  if (newVal <= dangerValue && !dangerState.value) {
    dangerState.value = true
  } else if (newVal > dangerValue && dangerState.value) {
    dangerState.value = false
  }
  const min = Math.floor(newVal / 60)
  const sec = newVal - min * 60
  formattedTime.value = `${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : sec}`
})
</script>

<template>
  <div class="timer" :class="{ red: dangerState }" :key="timerState">{{ formattedTime }}</div>
</template>

<style scoped>
.timer {
  height: fit-content;
  font-size: x-large;
  font-weight: 700;
  color: #41b883;
}

.red {
  color: #b84141;
}
</style>
