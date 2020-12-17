<template>
  <div id="app">
    <h1>Funny Piano</h1>
    <v-emoji></v-emoji>
    <v-piano></v-piano>
  </div>
</template>

<script>
import VEmoji from './emoji.vue'
import VPiano from './piano.vue'


// class GifStore {
//   constructor () {
//     this.state = {
//       selectedGif: {}
//     }
//   }
  
//   setGifAction (newValue) {
//      this.state.selectedGif = newValue
//   }
// }

// export let gif_store = new GifStore();
// console.log(gif_store);

export default {
  name: 'App',
  components: {
    VPiano,
    VEmoji
  }
  // data() {
  //   return {
  //     gifURL: "https://media.giphy.com/media/6f6HMJ2iGNLyM/giphy.gif"
  //   }
  // }
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