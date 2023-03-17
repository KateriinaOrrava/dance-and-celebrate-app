<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import orange from '@/assets/sounds/cats/orange.mp3'
export default {
  // components: { Button },
  setup() {

    const { play } = useSound(orange, {
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
  <img src="@/assets/imagesAll/orange.png" alt="red-cat" class="cat7 orange" @click="handleClick" />
</template>
<style>
.cat7 {
  cursor: pointer;
  width: 170px;
  position: absolute;
  left: 270px;
  bottom: 250px;
  z-index: 1;
  transition: width 0.3s ease-in-out;
}
.cat7:hover {
  width: 180px;
}
</style>
