<script setup lang="ts">
import HiveGame from '../components/HiveGame.vue'
import github from '../assets/github.png'
import linkedin from '../assets/logo-linkedin.png'
import VueSvg from '../components/icons/VueSvg.vue'
</script>

<template>
  <main>
    <HiveGame />
    <div class="footer">
      made with ❤ and <VueSvg /> by ネオリョウ
      <a class="images" href="https://github.com/Neo-Ryo" target="_blank">
        <img :src="github" alt="github" width="20" height="20" />
      </a>
      <a class="images" href="https://www.linkedin.com/in/marc-schiavone/" target="_blank">
        <img :src="linkedin" alt="linkedin" width="20" height="20" />
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
  margin-left: 5px;
}

.footer {
  display: flex;
}
</style>
