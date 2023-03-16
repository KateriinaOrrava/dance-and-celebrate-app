<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import elvis from '@/assets/sounds/voices/elvis.mp3'
// import Button from './Button.vue'
export default {
  // components: { Button },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(elvis, {
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
  <Button @click="handleClick" label="Control knobs">Re, kur ir</Button>
</template>
