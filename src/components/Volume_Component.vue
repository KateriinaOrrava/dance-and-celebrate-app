<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      volume: 50
    })

    const volumePercent = computed(() => {
      return `${state.volume}%`
    })

    const updateVolume = (event: Event) => {
      const target = event.target as HTMLInputElement
      state.volume = Number(target.value)
    }

    return {
      state,
      volumePercent,
      updateVolume
    }
  }
})
</script>

<template>
  <div>
    <div class="volume-bar" :style="{ width: volumePercent }">
      <p class="volume">{{ state.volume }}</p>
    </div>
    <input type="range" min="0" max="100" v-model="state.volume" @input="updateVolume" />
  </div>
</template>

<style scoped>
input[type='range'] {
  width: 100%;
  background-color: red;
}
.volume-bar {
  height: 10px;
  background-color: orange;
}
.volume {
  color: white;
}
</style>
