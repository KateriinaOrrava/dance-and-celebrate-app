<script lang="ts">
import { ref } from 'vue'

import { useSound } from '@vueuse/sound'

import larkstet from '@/assets/sounds/voices/larkstet.mp3'
export default {
  setup() {
    const volume = ref(1)
    const { play } = useSound(larkstet, {
      volume,
      interrupt: true
    })
    const handleClick = () => {
      play()
    }
    return {
      handleClick
    }
  }
}
</script>

<template>
  <img src="@/assets/imagesAll/ja1_star.png" @click="handleClick" class="janis-pietiks-larkstet" />
</template>
<style>
.janis-pietiks-larkstet {
  width: 20px;
  cursor: pointer;
  position: absolute;
  left: 100px;
  top: 20px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.janis-pietiks-larkstet:hover {
  width: 100px;
  z-index: 2;
}
</style>
