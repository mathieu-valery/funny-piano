<template>
  <div id="app">
    <h1>The Emoji Piano</h1>
    <v-emoji></v-emoji>
    <v-piano></v-piano>
  </div>
</template>

<script>
import VEmoji from './emoji.vue'
import VPiano from './piano.vue'

export default {
  name: 'App',
  components: {
    VPiano,
    VEmoji
  },
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

h1 {
  color: white;
  padding: 20px;
  background-color: black;
  border-radius: 4%;

}
</style>