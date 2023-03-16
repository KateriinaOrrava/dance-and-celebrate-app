<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import orange from '@/assets/sounds/cats/orange.mp3'
export default {
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(orange, {
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
  <img src="@/assets/imagesAll/cat.png" alt="" class="cat6 pers"  @click="handleClick"/>
</template>
<style>
.cat6 {
  cursor: pointer;
  width: 200px;
  position: absolute;
  left: 180px;
  bottom: 40px;
  z-index: 2;
  transition: width 0.3s ease-in-out;
}
.cat6:hover{
    width: 220px;
}
</style>
