<template>
    <div>
        <div class='piano'>
            <div class="key" :id="note.name" :key="note.name"  v-for="note in notes" @click="play(note.name); animate(note.name)" :data-note='note.name' :class="{'black': note.type === 'black', 'white': note.type === 'white'}"></div>
        </div>
    </div>
</template>

<script>

import { GiphyFetch } from '@giphy/js-fetch-api'

async function fetchGiphyAPI() {
    const APIKEY = process.env.VUE_APP_GIPHY_API_KEY;
    const gf = new GiphyFetch(APIKEY);
    const gifs = await gf.emoji();
    const random_gif = gifs.data[Math.floor(Math.random() * gifs.data.length)]
    const stringURL = `https://media.giphy.com/media/${random_gif.id}/giphy.gif`;
    return stringURL;
}

export default {
  name: 'Piano',
  methods: { 
        play(note) {
            const audio = document.createElement('audio');
            audio.src = encodeURIComponent(`/assets/sounds/${note}.mp3`);
            audio.currentTime = 0;
            audio.play();
            this.changeEmoji();
        },
        changeEmoji() {
            fetchGiphyAPI().then(data => this.$store.commit('changeURL', data));
        },
        animate(note) {
            const key = document.getElementById(note); //feedback key animation
            key.classList.add('active');
            setTimeout(function(){ 
                key.classList.remove('active'); 
            }, 250);
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
        const KEYS = ['q', 'z', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
        const key = event.key;
        const Keys = document.querySelectorAll('.key');
        const KeyIndex = KEYS.indexOf(key);
            if (KeyIndex > -1) {
                const note = Keys[KeyIndex].dataset.note
                this.play(note);
                document.getElementById(note).classList.add('active');     
            }
        });
        document.addEventListener('keyup', event => {
        const KEYS = ['q', 'z', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j'];
        const key = event.key;
        const Keys = document.querySelectorAll('.key');
        const KeyIndex = KEYS.indexOf(key);
            if (KeyIndex > -1) {
                Keys[KeyIndex].classList.remove('active');      
            }
        });
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
    --width: 5vw;
    background-color: white;
    border: 1px solid #333;
}

.white.active {
    background-color: #CCC;
}

.black {
    --width: 3.125vw;
    background-color: black;
    border: 1px solid #333;
    margin-right: calc(var(--width) / -2);
    margin-left: calc(var(--width) / -2);
    z-index: 2;

}

.black.active {
    background-color: #333;
}

 @media screen and (max-width: 1025px) {
    .white {
        --width: 10.4vw;
    }
    .black {
        --width: 7vw;
    }
} 

</style>