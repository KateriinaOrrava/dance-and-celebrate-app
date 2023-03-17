<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
  setup() {}
}
</script>

<template class="beginning">
  <h1>ARE YOU READY?!</h1>
  <button><RouterLink to="/celebrate">LETS GO!</RouterLink></button>
</template>

<style>
h1 {
  color: red;
}
</style>
