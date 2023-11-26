<script setup lang="ts">
import { ref } from 'vue'
import { phase } from '../../game-setup/game'
import { handleEnterInupts } from '../../game-setup/playerInput'
const props = defineProps<{
  value: string | number
}>()

const selected = ref(false)

function setInput() {
  if (phase.value === 'guessing phase' && typeof props.value === 'string') {
    handleEnterInupts(props.value, selected)
  }
}
</script>

<template>
  <div class="hexa-wrapper" @click="setInput()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      :fill="selected ? 'cyan' : '#b84141'"
      viewBox="0 0 16 16"
    >
      <path
        d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"
      />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        fill="#41b883"
        font-size="4px"
        font-family="Sans,Arial;"
        font-weight="900"
        dy=".3em"
      >
        {{ value }}
      </text>
    </svg>
  </div>
</template>

<style>
.hexa-wrapper {
  width: 75px;
  height: 75px;
  user-select: none;
}

svg:hover {
  fill: yellowgreen;
}
</style>
