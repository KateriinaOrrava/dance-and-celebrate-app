<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import ranojies from '@/assets/sounds/voices/dockeri_ranojies.mp3'
import Larkstet_Sound from './Larkstet_Sound.vue'
import TiksimGala_Sound from './TiksimGala_Sound.vue'

export default {
  setup() {
    const volume = ref(0.1)

    const { play } = useSound(ranojies, {
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
  },

  components: { Larkstet_Sound, TiksimGala_Sound }
}
</script>

<template class="janis-container">
  <Larkstet_Sound />
  <TiksimGala_Sound />
  <img
    src="../assets/imagesAll/ja.png"
    alt="jānis"
    @click="handleClick"
    class="janis-container__image"
  />
</template>

<style>
.janis-janis-container__image {
  cursor: pointer;
}
</style>
