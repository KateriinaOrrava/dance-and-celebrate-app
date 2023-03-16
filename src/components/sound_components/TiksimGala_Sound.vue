<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import tiksim_gala from '@/assets/sounds/voices/tiksim_gala.mp3'
// import Button from './Button.vue'
export default {
  // components: { Button },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(tiksim_gala, {
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
  <Button @click="handleClick" label="Control knobs">tiksim_gala</Button>
</template>
