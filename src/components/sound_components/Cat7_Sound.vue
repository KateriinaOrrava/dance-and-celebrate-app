<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import yellow from '@/assets/sounds/cats/yellow.wav'
// import Button from './Button.vue'
export default {
  // components: { Button },
  setup() {
    const volume = ref(1)
    const { play } = useSound(yellow, {
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
  <img src="@/assets/imagesAll/orange.png" alt="" class="cat7" @click="handleClick" />
</template>
<style>
.cat7 {
  cursor: pointer;
  width: 170px;
  position: absolute;
  left: 270px;
  bottom: 270px;
  z-index: 1;
  transition: width 0.3s ease-in-out;
}
.cat7:hover{
    width: 180px;
}
</style>
