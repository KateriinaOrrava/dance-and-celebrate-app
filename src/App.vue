<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>
  <RouterView />
</template>

<style scoped>
.volume-bar {
  height: 20px;
  background-color: blue;
}
</style>
