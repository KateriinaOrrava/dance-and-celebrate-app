<script lang="ts">
import { useSound } from '@vueuse/sound'
import pers from '@/assets/sounds/cats/pers.mp3'

export default {
  setup() {
    const { play } = useSound(pers, {
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
  <img src="@/assets/imagesAll/pers.png" alt="pers  white" @click="handleClick" class="cat5" />
</template>

<style>
.cat5 {
  cursor: pointer;
  width: 240px;
  position: absolute;
  left: 380px;
  bottom: -60px;
  z-index: 90;
  transition: width 0.3s ease-in-out;
}
.cat5:hover {
  width: 250px;
}
</style>
