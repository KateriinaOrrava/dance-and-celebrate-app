<script lang="ts">
import { useSound } from '@vueuse/sound'
import angry from '@/assets/sounds/cats/Angry.mp3'

export default {
  setup() {
    const { play } = useSound(angry, {
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
  <img src="@/assets/imagesAll/ugly.png" alt="ugly" class="cat3" @click="handleClick" />
</template>

<style>
.cat3 {
  width: 160px;
  cursor: pointer;
  position: absolute;
  left: 350px;
  bottom: 100px;
  z-index: 4;
  transition: width 0.3s ease-in-out;
}
.cat3:hover {
  width: 200px;
  z-index: 11;
}
</style>
