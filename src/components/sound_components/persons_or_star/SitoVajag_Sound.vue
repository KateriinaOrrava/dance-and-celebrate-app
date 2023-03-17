<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import vajag1 from '@/assets/sounds/voices/vajag1.mp3'

export default {
  setup() {
    const volume = ref(1)

    const { play } = useSound(vajag1, {
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
  <img src="@/assets/imagesAll/ja3_star.png" @click="handleClick" class="janis-sito-vajag" />
</template>

<style>
.janis-sito-vajag {
  width: 40px;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🌯</text></svg>")
      16 0,
    auto;
  position: absolute;
  left: 660px;
  top: 40px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.janis-sito-vajag:hover {
  width: 200px;
  z-index: 2;
}
</style>
