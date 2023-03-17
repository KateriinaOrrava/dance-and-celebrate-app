<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import ranojies from '../assets/sounds/voices/dockeri_ranojies.mp3'
import Larkstet_Sound from './sound_components/persons_or_star/Larkstet_Sound.vue'
import TiksimGala_Sound from './sound_components/persons_or_star/TiksimGala_Sound.vue'
import SitoVajag_Sound from './sound_components/persons_or_star/SitoVajag_Sound.vue'
import Jautajumi_Sound from './sound_components/persons_or_star/Jautajumi_Sound.vue'
import Cat1_Sound from './sound_components/cat/Cat1_Sound.vue'
import Cat2_Sound from './sound_components/cat/Cat2_Sound.vue'
import Cat3_Sound from './sound_components/cat/Cat3_Sound.vue'
import Cat4_Sound from './sound_components/cat/Cat4_Sound.vue'
import Cat5_Sound from './sound_components/cat/Cat5_Sound.vue'
import Cat6_Sound from './sound_components/cat/Cat6_Sound.vue'
import Cat7_Sound from './sound_components/cat/Cat7_Sound.vue'

export default {
  setup() {

    const { play, stop } = useSound(ranojies, {
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
  },

  components: {
    Larkstet_Sound,
    TiksimGala_Sound,
    SitoVajag_Sound,
    Jautajumi_Sound,
    Cat1_Sound,
    Cat2_Sound,
    Cat3_Sound,
    Cat4_Sound,
    Cat5_Sound,
    Cat6_Sound,
    Cat7_Sound
  }
}
</script>

<template class="janis-container">
  <div>
    <Larkstet_Sound />
    <Cat1_Sound></Cat1_Sound>
    <Cat2_Sound></Cat2_Sound>
    <Cat3_Sound></Cat3_Sound>
    <Cat4_Sound></Cat4_Sound>
    <Cat5_Sound></Cat5_Sound>
    <Cat6_Sound></Cat6_Sound>
    <Cat7_Sound></Cat7_Sound>
    <TiksimGala_Sound />
    <SitoVajag_Sound />
    <Jautajumi_Sound />
    <img
      src="../assets/imagesAll/ja.png"
      alt="janis"
      @click="handleClick"
      @dblclick="handleDoubleClick"
      class="janis-container__image"
    />
  </div>
</template>

<style>
.janis-container__image {
  width: 300px;
  cursor: pointer;
  position: absolute;
  left: 50px;
  bottom: 200px;
  transition: width 0.3s ease-in-out;
}
.janis-container__image:hover {
  width: 330px;
}
.janis-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
