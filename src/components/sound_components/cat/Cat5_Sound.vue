<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import pers from '@/assets/sounds/cats/pers.mp3'
// import Button from './Button.vue'
export default {
  // components: { Button },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(pers, {
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
  <img src="@/assets/imagesAll/pers.png" alt="pers  white" @click="handleClick" class="cat5" />
</template>
<style>
.cat5 {
  cursor: pointer;
  width: 240px;
  position: absolute;
  left:380px;
  bottom: -60px;
  z-index: 90;
  transition: width 0.3s ease-in-out;
}
.cat5:hover{
    width: 250px;
}
</style>
