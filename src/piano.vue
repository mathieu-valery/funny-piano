<template>
    <div>
        <div class='piano'>
            <div class="key" :id="note.name" :key="note.name"  v-for="note in notes" @click="play(note.name)" :data-note='note.name' :class="{'black': note.type === 'black', 'white': note.type === 'white'}"></div>
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
    console.log('API Called gif  is :');
    console.log(random_gif);
    const stringURL = `https://media.giphy.com/media/${random_gif.id}/giphy.gif`;
    return stringURL;
}

export default {
  name: 'Piano',
  methods: { 
        play(note) {
            console.log(note);
            const audio = document.createElement('audio');
            audio.src = encodeURIComponent(`/assets/sounds/${note}.mp3`);
            audio.currentTime = 0;
            audio.play();
            this.changeEmoji();

            const key = document.getElementById(note); //feedback key animation
            key.classList.add('active');
            audio.addEventListener('ended', () => {
                key.classList.remove('active');
            })
        },
        changeEmoji() {
            console.log('fetch..');
            fetchGiphyAPI().then(data => this.$store.commit('changeURL', data));
            console.log('Global state is ' + this.$store.state.url)
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
    },
    mounted() { //keyboard mapping
    document.addEventListener('keydown', event => {
        console.log(event.key);
        const BLACK_KEY = ['z', 'e', 't', 'y', 'u'];
        const WHITE_KEY = ['q', 's', 'd', 'f', 'g', 'h', 'j'];
        const key = event.key;

        const whiteKeys = document.querySelectorAll('.key.white');
        const blackKeys = document.querySelectorAll('.key.black');
        const whiteKeyIndex = WHITE_KEY.indexOf(key);
        const blackKeyIndex = BLACK_KEY.indexOf(key);
        
            if (whiteKeyIndex > -1) {
                this.play(whiteKeys[whiteKeyIndex].dataset.note);      
            }

            if (blackKeyIndex > -1) {
                this.play(blackKeys[blackKeyIndex].dataset.note)   
            }
        })
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

.white.active {
    background-color: #CCC;
}

.black {
    --width: 5vw;
    background-color: black;
    border: 1px solid #333;
    margin-right: calc(var(--width) / -2);
    margin-left: calc(var(--width) / -2);
    z-index: 2;

}

.black.active {
    background-color: #333;
}

</style>