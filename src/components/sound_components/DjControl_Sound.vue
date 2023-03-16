<script lang="ts">
import { ref } from 'vue'
import FirstBeatButton from '../sound_components/beat_buttons.vue/FirstBeatButton.vue'
import SecondBeatButton from '../sound_components/beat_buttons.vue/SecondBeatButton.vue'
import FourthBeatButton from '../sound_components/beat_buttons.vue/FourthBeatButton.vue'
import ThirdBeatButton from '../sound_components/beat_buttons.vue/ThirdBeatButton.vue'
import FifthBeatButton from '../sound_components/beat_buttons.vue/FifthBeatButton.vue'
export default {
  setup() {
    let volume = ref(0.1)
    const handleClick2 = () => {
      volume.value += 0.1
    }
    const handleClick1 = () => {
      volume.value -= 0.1
    }
    return {
      handleClick1,
      handleClick2,
      volume
    }
  },
  components: {
    FirstBeatButton,
    SecondBeatButton,
    ThirdBeatButton,
    FourthBeatButton,
    FifthBeatButton
  }
}
</script>

<template>
  <div class="image_container">
    <img src="@/assets/imagesAll/dj.png" alt="control table for dj" class="dj" />
    <div class="change-beats">
      {{ volume }}
      <button class="change-volume__lower lower" @click="handleClick1">-</button>
      <button class="change-volume__louder louder" @click="handleClick2">+</button>
      <FirstBeatButton :volume1="volume" />
      <SecondBeatButton :volume="volume" />
      <ThirdBeatButton :volume="volume" />
      <FourthBeatButton :volume="volume" />
      <FifthBeatButton :volume="volume" />
    </div>
    <div></div>
  </div>
</template>

<style>
.dj {
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 100;
  width: 500px;
}
.dj:hover {
  width: 520px;
  transition: width 0.2s ease-in-out;
}
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

.change-volume {
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

.change-volume {
  cursor: pointer;
  background-color: orange;
  color: white;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 20px;
}
.change-volume:hover {
  cursor: pointer;
  background-color: white;
  border: 3 px solid rgb(234, 234, 234);
  color: red;
  padding: 10px 15px;
  border-radius: 50%;
}
</style>
