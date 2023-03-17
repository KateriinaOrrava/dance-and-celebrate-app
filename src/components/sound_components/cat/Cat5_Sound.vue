<script lang="ts">
import { useSound } from '@vueuse/sound'
import pers from '@/assets/sounds/cats/pers.mp3'

export default {
  setup() {
    const { play } = useSound(pers, {
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
  <img src="@/assets/imagesAll/pers.png" alt="pers  white" @click="handleClick" class="cat5" />
</template>

<style>
.cat5 {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🐱</text></svg>")
      16 0,
    auto;
  width: 240px;
  position: absolute;
  left: 380px;
  bottom: -60px;
  z-index: 90;
  transition: width 0.3s ease-in-out;
}
.cat5:hover {
  width: 250px;
}
</style>
