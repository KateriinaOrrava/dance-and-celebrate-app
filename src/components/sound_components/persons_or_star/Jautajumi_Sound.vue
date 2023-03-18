<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import jautajumi1 from '@/assets/sounds/voices/jautajum1.mp3'

export default {
  setup() {
    const volume = ref(1)

    const { play } = useSound(jautajumi1, {
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
  <TheWelcome />
  <img @click="handleClick" src="@/assets/imagesAll/ja5_star.png" alt="" class="janis-jautajumi" />
</template>

<style>
.janis-jautajumi {
  width: 45px;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🌯</text></svg>")
      16 0,
    auto;
  position: absolute;
  right: 40%;
  top: 40%;
  z-index: 2;
  transition: width 0.2s ease-in-out;
}
.janis-jautajumi:hover {
  width: 150px;
  z-index: 2;
}
</style>
