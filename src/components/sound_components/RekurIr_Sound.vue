<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import elvis from '@/assets/sounds/voices/elvis.mp3'

export default {

  setup() {
    const volume = ref(1)
    const { play } = useSound(elvis, {
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
  <Button @click="handleClick" label="Control knobs">Re, kur ir</Button>
</template>
