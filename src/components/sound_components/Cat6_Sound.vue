<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import orange from '@/assets/sounds/cats/orange.mp3'
// import Button from './Button.vue'
export default {
  // components: { Button },
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
  <img src="@/assets/imagesAll/cat.png" alt="" class="cat6"  @click="handleClick"/>
</template>
<style>
.cat6 {
  cursor: pointer;
  width: 190px;
  position: absolute;
  left: 270px;
  bottom: 0px;
  z-index: 10;
  transition: width 0.3s ease-in-out;
}
.cat6:hover{
    width: 220px;
}
</style>
