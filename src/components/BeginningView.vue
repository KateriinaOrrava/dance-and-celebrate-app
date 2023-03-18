<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
  setup() {}
}
</script>

<template class="beginning">
  <h3 class="neonText">ARE YOU READY?!</h3>
  <h2 class="neonTextLink">
    <RouterLink to="/celebrate" class="router-link">👉LETS GO! 👈 </RouterLink>
  </h2>
</template>

<style>
h3 {
  color: WHITE;
  size: 3em;
}
.router-link {
  text-decoration: none;
}
.beginning-button-to-celebration {
  width: 4em;
  height: 4em;
}
.neonText {
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa,
    0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
}
.neonTextLink {
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px rgb(223, 89, 116),
    0 0 82px rgb(230, 34, 211), 0 0 92px rgb(229, 67, 113), 0 0 102px rgb(179, 98, 226),
    0 0 151px rgb(212, 80, 229);
}
h3 {
  text-align: right;
  text-decoration: none;
  font-size:2rem;
  animation: flicker 1.5s infinite alternate;
}
h2 {
  text-align: right;
  text-decoration: none;
  font-size: 4.2rem;
  animation: flicker 1.5s infinite alternate;
}
h5 {
  text-align: right;
  text-decoration: none;
  font-size: 2rem;
  animation: flicker 1.5s infinite alternate;
}
@keyframes flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #0fa, 0 0 80px #0fa,
      0 0 90px #0fa, 0 0 100px #0fa, 0 0 150px #0fa;
  }

  20%,
  24%,
  55% {
    text-shadow: none;
  }
}
</style>
