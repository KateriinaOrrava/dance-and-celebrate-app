<script lang="ts">
import { useSound } from '@vueuse/sound'
import cute from '@/assets/sounds/cats/yellow.wav'

export default {
  setup() {
    const { play } = useSound(cute, {
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
  <img src="@/assets/imagesAll/1.png" @click="handleClick" alt="cute" class="cat1" />
</template>

<style>
.cat1 {
  width: 230px;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🐱</text></svg>")
      16 0,
    auto;
  position: absolute;
  left: 320px;
  bottom: 0px;
  z-index: 30;
  transition: width 0.3s ease-in-out;
}
.cat1:hover {
  width: 250px;
}
</style>
