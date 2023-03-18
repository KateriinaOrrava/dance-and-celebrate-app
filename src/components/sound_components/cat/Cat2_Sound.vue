<script lang="ts">
import { useSound } from '@vueuse/sound'
import hiss from '@/assets/sounds/cats/Hiss.wav'

export default {
  setup() {
    const { play } = useSound(hiss, {
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
  <img
    src="@/assets/imagesAll/grumpy.png"
    alt="grumpy cat noise"
    class="cat2 grumpy"
    @click="handleClick"
  />
</template>

<style>
.cat2 {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🐱</text></svg>")
      16 0,
    auto;
  width: 180px;
  transform: rotate(10deg);

  position: absolute;
  left: -10px;
  bottom: 180px;
  z-index: 3;
  transition: width 0.3s ease-in-out;
}
.cat2:hover:hover {
  width: 250px;
}
</style>
