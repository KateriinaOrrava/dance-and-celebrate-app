<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import many from '@/assets/sounds/cats/many.mp3'

export default {
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(many, {
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
  <img src="@/assets/imagesAll/3cats.png" alt="" class="cat4 3cats" @click="handleClick" />
</template>

<style>
.cat4 {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🐱</text></svg>")
      16 0,
    auto;
  width: 400px;
  position: absolute;
  left: -50px;
  bottom: 0px;
  z-index: 3;
  transition: width 0.3s ease-in-out;
}
.cat4:hover {
  width: 430px;
}
</style>
