<template>
    <div>
        <div class='piano'>
            <div class="key" :id="note.key" :key="note.name"  v-for="note in notes" @click="play(note.name); animate(note.key)" :data-note='note.name' :class="{'black': note.type === 'black', 'white': note.type === 'white'}"><p>{{note.key}}</p></div>
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
             type: 'white',
             key: 'q'
         },{
             name: 'C#',
             type: 'black',
             key: 'z'
         },{
             name: 'D',
             type: 'white',
             key: 's'
         },{
             name: 'D#',
             type: 'black',
             key: 'e'
         },{
             name: 'E',
             type: 'white',
             key: 'd'
         },{
             name: 'F',
             type: 'white',
             key: 'f'
         },{
             name: 'F#',
             type: 'black',
             key: 't'
         },{
             name: 'G',
             type: 'white',
             key: 'g'
         },{
             name: 'G#',
             type: 'black',
             key: 'y'
         },{
             name: 'A',
             type: 'white',
             key: 'h'
         },{
             name: 'A#',
             type: 'black',
             key: 'u'
         },{
             name: 'B',
             type: 'white',
             key: 'j'
         }]
      }
    },
    mounted() { //keyboard mapping
        document.addEventListener('keydown', event => { 
            this.notes.forEach(note => {
                if (note.key == event.key) {
                    this.play(note.name);
                    document.getElementById(note.key).classList.add('active');
                    return
                }
            });
        });

        document.addEventListener('keyup', event => {
            this.notes.forEach(note => {
                if (note.key == event.key) {
                    document.getElementById(note.key).classList.remove('active');
                    return
                }
            });
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

.key:hover {
    cursor: pointer
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
    color: white;
    border: 1px solid #333;
    margin-right: calc(var(--width) / -2);
    margin-left: calc(var(--width) / -2);
    z-index: 2;

}

.black.active {
    background-color: #333;
}

.black p {
    position: relative;
    top: calc((var(--width) * 3.3));
    left: 10px;
}

.white p {
    position: relative;
    top: calc((var(--width) * 3.5));
    left: 10px;
}

 @media screen and (max-width: 1025px) {
    .white {
        --width: 10.4vw;
    }
    .black {
        --width: 7vw;
    }

}

 @media screen and (max-width: 415px) {
    .black p {
        font-size: 0px;
    }

    .white p {
        font-size: 0px;
    }  
} 

</style>