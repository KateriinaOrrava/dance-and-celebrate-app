<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import tiksim_gala from '@/assets/sounds/voices/tiksim_gala.mp3'

export default {
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
  <img src="@/assets/imagesAll/ja2_star.png" @click="handleClick" class="janis-tiksim-gala" />
</template>

<style>
.janis-tiksim-gala {
  width: 20px;
  cursor: pointer;
  position: absolute;
  left: 300px;
  top: 100px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.janis-tiksim-gala:hover {
  width: 200px;
  z-index: 2;
}
</style>
