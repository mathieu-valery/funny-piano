<template>
<div>
    <div class='piano'>
        <div class="key" :key="note.name"  v-for="note in notes" @click="play(note.name); changeEmoji()" :data-note='note.name' :class="{'black': note.type === 'black', 'white': note.type === 'white'}"></div>
    </div>
</div>

</template>

<script>
import { GiphyFetch } from '@giphy/js-fetch-api'

async function fetchGiphyAPI() {
    const APIKEY = 'ABDpLGBTr66BQ16DKHlSwwOF5xN3tauz';
    const gf = new GiphyFetch(APIKEY);
    const gifs = await gf.emoji();
    const random_gif = gifs.data[Math.floor(Math.random() * gifs.data.length)]
    console.log('API Called gif is :');
    console.log(random_gif.url);
    return random_gif.url;
}

export default {
  name: 'Piano',
  methods: { 
        play(note) {
            console.log(note);
            const audio = document.createElement('audio');
            audio.src = encodeURIComponent(`/assets/sounds/${note}.mp3`);
            audio.play()
            
        },
        changeEmoji() {
            console.log('fetch..');
            fetchGiphyAPI().then((response) => {
                return response.json();
            }).then((json) => {
                console.log(json);
            });
    
            // return this.$store.dispatch('changeURL', newURL);
    
            
            
        }
    }, 
  data(){
      return {
         notes: [{
             name: 'C',
             type: 'white'
         },{
             name: 'C#',
             type: 'black'
         },{
             name: 'D',
             type: 'white'
         },{
             name: 'D#',
             type: 'black'
         },{
             name: 'E',
             type: 'white'
         },{
             name: 'F',
             type: 'white'
         },{
             name: 'F#',
             type: 'black'
         },{
             name: 'G',
             type: 'white'
         },{
             name: 'G#',
             type: 'black'
         },{
             name: 'A',
             type: 'white'
         },{
             name: 'A#',
             type: 'black'
         },{
             name: 'B',
             type: 'white'
         }]
      }
  }
}


</script>

<style scoped>

.piano {
    display: flex;

}

.key {
    height: calc(var(--width) * 4);
    width: var(--width);
}
.white {
    --width: 8vw;
    background-color: white;
    border: 1px solid #333;
}

.black {
    --width: 5vw;
    background-color: black;
    border: 1px solid #333;
    margin-right: calc(var(--width) / -2);
    margin-left: calc(var(--width) / -2);
    z-index: 2;

}

</style>