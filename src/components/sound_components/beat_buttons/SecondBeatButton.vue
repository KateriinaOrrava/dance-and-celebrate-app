<script lang="ts">
import { toRef } from 'vue'
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import beat2sound from '@/assets/sounds/beat/electronic-future-beats-117997.mp3'

export default {
  props: {
    volume: {
      type: Number,
      required: true
    }
  },
  
  setup(props) {
    const volume = toRef(props, 'volume')

    const { isPlaying, play, stop } = useSound(beat2sound, {
      volume,
      interrupt: true
    })

    const handleClick = () => {
      if (isPlaying.value) {
        stop()
      } else {
        play()
      }
    }
    return {
      handleClick
    }
  }
}
</script>

<template>
  <button class="change-beats__2 change-beat" @click="handleClick">2</button>
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
