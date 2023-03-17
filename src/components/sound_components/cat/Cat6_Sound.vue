<script lang="ts">
import { useSound } from '@vueuse/sound'
import orange from '@/assets/sounds/cats/orange.mp3'
export default {
  setup() {
    const { play } = useSound(orange, {
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
  <img src="@/assets/imagesAll/cat.png" alt="" class="cat6 pers" @click="handleClick" />
</template>

<style>
.cat6 {
  cursor: pointer;
  width: 200px;
  position: absolute;
  left: 180px;
  bottom: 40px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.cat6:hover {
  width: 220px;
}
</style>
