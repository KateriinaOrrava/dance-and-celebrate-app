<script lang="ts">
import { ref } from 'vue'
import FirstBeatButton from '../sound_components/beat_buttons/FirstBeatButton.vue'
import SecondBeatButton from '../sound_components/beat_buttons/SecondBeatButton.vue'
import FourthBeatButton from '../sound_components/beat_buttons/FourthBeatButton.vue'
import ThirdBeatButton from '../sound_components/beat_buttons/ThirdBeatButton.vue'
import FifthBeatButton from '../sound_components/beat_buttons/FifthBeatButton.vue'

export default {
  setup() {
    let volume = ref(1)

    const handleClick = (vol: number) => {
      volume.value = vol
    }

    return {
      handleClick,
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
      <div class="change-beats__volume-text">
        <span class="change-beats__volume-text--span">VOLUME: {{ volume }}</span>
      </div>
      <div class="change-beats__volume">
      </div>
      <input type="range" v-model.number="volume" min="0" max="1" step="0.01" />
      <div class="change-beats__tracks">
        <FirstBeatButton :volume="volume" />
        <SecondBeatButton :volume="volume" />
        <ThirdBeatButton :volume="volume" />
        <FourthBeatButton :volume="volume" />
        <FifthBeatButton :volume="volume" />
      </div>
    </div>
  </div>
</template>

<style>
.dj {
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 0;
  width: 500px;
}
.change-beats {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  opacity: 0;
  position: absolute;
  bottom: 120px;
  right: 150px;
  z-index: 1000;
  rotate: calc(19deg);
}
.change-beats__volume-text--span {
  color: white;
  background-color: rgba(0, 0, 0, 0.418);
}
.change-beats__tracks,
.change-beats__volume {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.image_container:hover .change-beats {
  color: blue;
  opacity: 1;
}
.change-beats__sound-button {
  background-color: orange;
  border: none;
  border-radius: 50%;
  font-size: larger;
  cursor: pointer;
  padding: 5px;
}
.change-beats__sound-button:hover {
  background-color: rgb(22, 22, 20);
  border: none;
  border-radius: 50%;
  font-size: larger;
  cursor: pointer;
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
