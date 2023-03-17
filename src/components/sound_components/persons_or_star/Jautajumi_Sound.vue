<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import jautajumi1 from '@/assets/sounds/voices/jautajum1.mp3'

export default {
  setup() {
    const volume = ref(1)

    const { play } = useSound(jautajumi1, {
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
  <TheWelcome />
  <img @click="handleClick" src="@/assets/imagesAll/ja5_star.png" alt="" class="janis-jautajumi" />
</template>

<style>
.janis-jautajumi {
  width: 20px;
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 40%;
  z-index: 2;
  transition: width 0.2s ease-in-out;
}
.janis-jautajumi:hover {
  width: 200px;
  z-index: 2;
}
</style>
