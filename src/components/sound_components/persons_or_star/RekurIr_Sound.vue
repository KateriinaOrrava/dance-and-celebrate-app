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
  width: 20px;
  cursor: pointer;
  position: absolute;
  right: 50px;
  top: 200px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.elvis-re-kur-ir:hover {
  width: 100px;
  z-index: 2;
}
</style>