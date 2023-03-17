<script lang="ts">
import { useSound } from '@vueuse/sound'
import orange from '@/assets/sounds/cats/cute.wav'

export default {
  setup() {
    const { play } = useSound(orange, {
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
  <img src="@/assets/imagesAll/orange.png" alt="red-cat" class="cat7 orange" @click="handleClick" />
</template>

<style>
.cat7 {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🐱</text></svg>")
      16 0,
    auto;
  width: 170px;
  position: absolute;
  left: 270px;
  bottom: 250px;
  z-index: 1;
  transition: width 0.3s ease-in-out;
}
.cat7:hover {
  width: 180px;
}
</style>
