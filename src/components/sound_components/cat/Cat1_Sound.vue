<script lang="ts">
import { useSound } from '@vueuse/sound'
import cute from '@/assets/sounds/cats/orange.wav'

export default {
  setup() {
    const { play } = useSound(cute, {
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
  <img src="@/assets/imagesAll/1.png" @click="handleClick" alt="cute" class="cat1" />
</template>

<style>
.cat1 {
  width: 230px;
  cursor: pointer;
  position: absolute;
  left: 320px;
  bottom: 0px;
  z-index: 30;
  transition: width 0.3s ease-in-out;
}
.cat1:hover {
  width: 250px;
}
</style>
