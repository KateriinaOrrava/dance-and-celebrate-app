<script lang="ts">
import JanisComponent from '@/components/JanisComponent.vue'
import ElvisComponents from '@/components/ElvisComponent.vue'
import Volume_Component from './Volume_Component.vue'
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import elvis from '@/assets/sounds/voices/elvis.mp3'

export default {
  components: {
    JanisComponent,
    ElvisComponents,
    Volume_Component
  },

  setup() {
    const volume = ref(1)

    const { play } = useSound(elvis, {
      volume,
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

<template class="home">
  <!-- <img src="@/assets/imagesAll/curtains.jpg" alt="" class="curtains" /> -->
  <Volume_Component/>
  <div class="content-container">
    <div class="content-container__janis-part"><JanisComponent /></div>
    <div class="content-container__elvis-part"><ElvisComponents /></div>
  </div>
</template>

<style>
.content-container {
  /* width: 100%; */
  height: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
}
.content-container__janis-part {
  display: absolute;
  bottom: 0px;
}
.curtains {
  width: 100vw;
  height: 100vh;
  /* margin-bottom:-100%;
  z-index:10000 */
}
.home {
  width: 100vw;
  height: 100vh;
}
</style>
