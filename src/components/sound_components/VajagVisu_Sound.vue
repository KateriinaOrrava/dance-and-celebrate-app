<script lang="ts">

import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import vajag_visu from '@/assets/sounds/voices/vajag_visu.mp3'
// import Button from './Button.vue'
export default {
  // components: { Button },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(vajag_visu, {
      volume,
      interrupt: true
    })
    const handleClick = () => {
      volume.value = parseFloat(Math.random().toFixed(2))
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
  <Button @click="handleClick" label="Control knobs">vajag_visu</Button>
  <img @click="handleClick" src=".../assets/imagesAll/el.png" alt="">
</template>
