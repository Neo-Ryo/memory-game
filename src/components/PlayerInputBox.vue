<script setup lang="ts">
defineProps<{
  letter: string | undefined
}>()
</script>

<template>
  <div class="player-input-box">
    {{ letter }}
  </div>
</template>

<style scoped>
.player-input-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 700;
  height: 50px;
  width: 35px;
  border: 4px solid #3d3d3d;
  border-radius: 10px;
  margin: 5px;
}
</style>
