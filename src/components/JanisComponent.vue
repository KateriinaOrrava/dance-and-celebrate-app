<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import ranojies from '../assets/sounds/voices/dockeri_ranojies.mp3'
import Larkstet_Sound from './sound_components/Larkstet_Sound.vue'
import TiksimGala_Sound from './sound_components/TiksimGala_Sound.vue'
import Cat1_Sound from './sound_components/cat/Cat1_Sound.vue'
import Cat2_Sound from './sound_components/cat/Cat2_Sound.vue'
import Cat3_Sound from './sound_components/cat/Cat3_Sound.vue'
import Cat4_Sound from './sound_components/cat/Cat4_Sound.vue'
import Cat5_Sound from './sound_components/cat/Cat5_Sound.vue'
import Cat6_Sound from './sound_components/cat/Cat6_Sound.vue'
import Cat7_Sound from './sound_components/cat/Cat7_Sound.vue'
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
  components: {
    Larkstet_Sound,
    TiksimGala_Sound,
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
    <img
      src="../assets/imagesAll/ja.png"
      alt="janis"
      @click="handleClick"
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
