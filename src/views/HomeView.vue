<template>
  <div class="content-container">
    <div class="content-container__janis-part"><JanisComponent /></div>
    <div class="content-container__elvis-part"><ElvisComponents /></div>
    <newwuuW />
  </div>
</template>

<script lang="ts">
import JanisComponent from '@/components/JanisComponent.vue'
import ElvisComponents from '@/components/ElvisComponent.vue'

import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import elvis from '../assets/sounds/voices/elvis.mp3'
export default {
  components: {
    JanisComponent,
    ElvisComponents,
  },
  setup() {
    const volume = ref(0.1)
    const { play } = useSound(elvis, {
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

<style>
.content-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
