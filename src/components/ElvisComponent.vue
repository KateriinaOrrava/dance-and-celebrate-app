<script lang="ts">
  import { RouterLink } from 'vue-router'    
import { useSound } from '@vueuse/sound'
import vajag_visu from '../assets/sounds/voices/vajag_visu.mp3'
import RekurIr_Sound from './sound_components/persons_or_star/RekurIr_Sound.vue'
import DjControl_Sound from './sound_components/DjControl_Sound.vue'
// import Button from './Button.vue'
export default {
  components: { RekurIr_Sound, DjControl_Sound },
  // components: { Button },
  setup() {
    const { play, stop } = useSound(vajag_visu, {
      interrupt: true
    })

    const handleClick = () => {
      play()
    }

    const handleDoubleClick = () => {
      stop()
    }

    return {
      handleClick,
      handleDoubleClick
    }
  }
}
</script>

<template class="elvis-container">
<RouterLink to="/"><h2>BACK</h2></RouterLink>
  <DjControl_Sound />
  <RekurIr_Sound />
  <img
    @click="handleClick"
    @dblclick="handleDoubleClick"
    src="../assets/imagesAll/el2.png"
    alt="elvis"
    class="elvis-container__image"
  />
</template>

<style>
.elvis-container__image {
  cursor:pointer;
  position: absolute;
  width: 330px;
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
