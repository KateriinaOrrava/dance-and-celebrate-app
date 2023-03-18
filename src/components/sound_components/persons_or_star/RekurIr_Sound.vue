<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import elvis from '@/assets/sounds/voices/elvis.mp3'

export default {
  setup() {
    const volume = ref(1)

    const { play } = useSound(elvis, {
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
  <img src="@/assets/imagesAll/el1-star.png" @click="handleClick" class="elvis-re-kur-ir" />
</template>

<style>
.elvis-re-kur-ir {
  width: 40px;
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🍔</text></svg>")
      16 0,
    auto;
  position: absolute;
  right: 500px;
  top: 200px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.elvis-re-kur-ir:hover {
  width: 150px;
  z-index: 2;
}
</style>
