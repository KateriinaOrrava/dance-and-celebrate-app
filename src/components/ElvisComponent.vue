<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import vajag_visu from '../assets/sounds/voices/vajag_visu.mp3'
import RekurIr_Sound from './sound_components/persons_or_star/RekurIr_Sound.vue'
import DjControl_Sound from './sound_components/DjControl_Sound.vue'
// import Button from './Button.vue'
export default {
  components: { RekurIr_Sound, DjControl_Sound },
  // components: { Button },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(vajag_visu, {
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

<template class="elvis-container">
  <DjControl_Sound />
  <RekurIr_Sound />
  <img
    @click="handleClick"
    src="../assets/imagesAll/el2.png"
    alt="elvis"
    class="elvis-container__image"
  />
</template>

<style>
.elvis-container__image {
  position: absolute;
  width:330px;
  bottom: 170px;
  right: -5px;
  z-index: 2;
  transition: width 0.3s ease-in-out;

}
.elvis-container__image:hover {
  width: 360px;
}
.elvis-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
