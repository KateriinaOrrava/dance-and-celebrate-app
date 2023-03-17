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
  width: 50px;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🌯</text></svg>")
      16 0,
    auto;
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
