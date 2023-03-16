<script lang="ts">
import { ref } from 'vue'

import { useSound } from '@vueuse/sound'
import larkstet from '@/assets/sounds/voices/larkstet.mp3'
// import Button from './Button.vue'
export default {
  setup() {
    const volume = ref(1)
    const { play } = useSound(larkstet, {
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
  <Button @click="handleClick" label="Control knobs">larkstet</Button>
</template>
