<script lang="ts">
import { useSound } from '@vueuse/sound'
import larkstet from '@/assets/sounds/voices/larkstet.mp3'
// import Button from './Button.vue'
export default {

  setup() {
    // const volume = ref(0.1)
    const { play } = useSound(larkstet, {
      // volume,
      interrupt: true
    })
    const handleClick = () => {
      // volume.value = parseFloat(Math.random().toFixed(2))
      play()
    }
    return {
      handleClick
    }
  }
}
</script>

<template>
  <Button @click="handleClick" label="Control knobs">larkstet</Button>
</template>
