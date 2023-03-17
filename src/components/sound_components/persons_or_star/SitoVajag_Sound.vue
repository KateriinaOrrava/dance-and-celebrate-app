<script lang="ts">
import { ref } from 'vue'

import { useSound } from '@vueuse/sound'
import vajag1 from '@/assets/sounds/voices/vajag1.mp3'
// import Button from './Button.vue'
export default {
  setup() {
    const volume = ref(1)
    const { play } = useSound(vajag1, {
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
  <img src="@/assets/imagesAll/ja3_star.png" @click="handleClick" class="janis-sito-vajag" />
</template>
<style>
.janis-sito-vajag {
  width: 20px;
  cursor: pointer;
  position: absolute;
  left: 660px;
  top: 40px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.janis-sito-vajag:hover {
  width:100px;
  z-index: 2;
}
</style>
