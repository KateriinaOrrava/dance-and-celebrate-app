<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import hiss from '@/assets/sounds/cats/Hiss.wav'

export default {
  // components: { Button },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(hiss, {
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
  <img
    src="@/assets/imagesAll/Screenshot 2023-03-15 195538.png"
    alt=""
    class="cat2 grumpy"
    @click="handleClick"
  />
</template>
<style>
.cat2 {
  cursor: pointer;
  width: 180px;
  transform: rotate(10deg);
  cursor: pointer;
  position: absolute;
  left: -10px;
  bottom: 200px;
  z-index: 3;
  transition: width 0.3s ease-in-out;
}
.cat2:hover:hover{
    width: 250px;
}
</style>
