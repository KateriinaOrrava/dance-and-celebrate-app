<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import cute from '@/assets/sounds/cats/orange.wav'

export default {
  setup() {
    const volume = ref(0.5)
    const { play } = useSound(cute, {
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
  <img src="@/assets/imagesAll/1.png" @click="handleClick" alt="cute" class="cat1" />
</template>
<style>
.cat1 {
  width: 230px;
  cursor: pointer;
  position: absolute;
  left:320px;
  bottom: 0px;
  z-index: 30;
  transition: width 0.3s ease-in-out;
}
.cat1:hover{
    width: 250px;
}
</style>
