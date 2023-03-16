<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import angry from '@/assets/sounds/cats/Angry.mp3'
// import Button from './Button.vue'
export default {
  // components: { Button },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(angry, {
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
  <img src="@/assets/imagesAll/ugly.png" alt="" class="cat3" @click="handleClick" />
</template>
<style>
.cat3 {
  width: 160px;
  cursor: pointer;
  position: absolute;
  left: 350px;
  bottom: 100px;
  z-index: 4;
  transition: width 0.3s ease-in-out;
}
.cat3:hover{
    width: 200px;
  z-index: 11;

}
</style>
