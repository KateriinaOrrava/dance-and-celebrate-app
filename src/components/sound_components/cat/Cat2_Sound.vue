<script lang="ts">
import { useSound } from '@vueuse/sound'
import hiss from '@/assets/sounds/cats/Hiss.wav'

export default {
  setup() {
    const { play } = useSound(hiss, {
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
  <img
    src="@/assets/imagesAll/Screenshot 2023-03-15 195538.png"
    alt="grumpy cat noise"
    class="cat2 grumpy"
    @click="handleClick"
  />
</template>

<style>
.cat2 {
  cursor: pointer;
  width: 180px;
  transform: rotate(10deg);
  cursor: pointer;
  position: absolute;
  left: -10px;
  bottom: 200px;
  z-index: 3;
  transition: width 0.3s ease-in-out;
}
.cat2:hover:hover {
  width: 250px;
}
</style>
