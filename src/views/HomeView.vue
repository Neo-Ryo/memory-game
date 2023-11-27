<script setup lang="ts">
import HiveGame from '../components/HiveGame.vue'
import github from '../assets/github.png'
import linkedin from '../assets/logo-linkedin.png'
</script>

<template>
  <main>
    <HiveGame />
    <div class="footer">
      <a href="https://github.com/Neo-Ryo" target="_blank">
        <img class="images" :src="github" alt="github" width="20" height="20" />
      </a>
      made with ❤ by ネオリョウ
      <a href="https://www.linkedin.com/in/marc-schiavone/" target="_blank">
        <img class="images" :src="linkedin" alt="linkedin" width="20" height="20" />
      </a>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.images {
  filter: invert(100%);
  -webkit-filter: invert(100%);
  margin-right: 15px;
  margin-left: 15px;
}

.footer {
  display: flex;
}
</style>
