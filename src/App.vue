<template>
  <div id="app">
    <h1>Funny Piano</h1>
    <v-coucou></v-coucou>
    <v-piano></v-piano>
  </div>
</template>

<script>
import VCoucou from './coucou.vue'
import VPiano from './piano.vue'
export default {
  name: 'App',
  components: {
    VCoucou,
    VPiano
  }
}
</script>

<style scoped>
#app {
  background-color: #143F6B;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>