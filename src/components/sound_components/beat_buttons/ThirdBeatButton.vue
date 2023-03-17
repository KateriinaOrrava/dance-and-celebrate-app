<script lang="ts">
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import beat3sound from '@/assets/sounds/beat/inspiring-cinematic-ambient-116199.mp3'

export default {
  props: ['volume1'],
  setup(volume1) {
    let beatPlaying = false
    const volume = ref(0.1)

    const { play, stop } = useSound(beat3sound, {
      volume,
      interrupt: true
    })

    const changeBeat = () => {
      volume.value = 0.1
      if (beatPlaying === true) {
        stop()
        beatPlaying = !beatPlaying
      } else {
        beatPlaying = !beatPlaying
        volume1 ? (volume.value = volume1.volume1) : (volume.value = 0.1)
        play()
      }
    }

    const handleClick = () => {
      changeBeat()
    }

    return {
      handleClick
    }
  }
}
</script>

<template>
  <button class="change-beats__3 change-beat" @click="handleClick">3</button>
</template>

<style>
.change-beats {
  display: flex;
  gap: 5px;
  opacity: 0.1;
  position: absolute;
  bottom: 120px;
  right: 150px;
  z-index: 1000;
  rotate: calc(19deg);
}
.image_container:hover .change-beats {
  color: blue;
  opacity: 1;
}

.change-beat {
  cursor: pointer;
  background-color: red;
  border: 3 px solid orange;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 20px;
}
.change-beat:hover {
  cursor: pointer;
  background-color: white;
  border: 3 px solid rgb(234, 234, 234);
  color: red;
  padding: 10px 15px;
  border-radius: 50%;
}
</style>
