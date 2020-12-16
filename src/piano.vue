<template>
<div>
    <div class='piano'>
        <!-- <div data-note='C' @click="play('c')" class='key white'></div>
        <div data-note='C#' class='key black'></div>
        <div data-note='D' class='key white'></div>
        <div data-note='D#' class='key black'></div>
        <div data-note='E' class='key white'></div>
        <div data-note='F' class='key white'></div>
        <div data-note='F#' class='key black'></div>
        <div data-note='G' class='key white'></div>
        <div data-note='G#' class='key black'></div>
        <div data-note='A' class='key white'></div>
        <div data-note='A#' class='key black'></div>
        <div data-note='B' class='key white'></div> -->

        <div class="key" :key="note.name"  v-for="note in notes" @click="play(note.name)" :data-note='note.name' :class="{'black': note.type === 'black', 'white': note.type === 'white'}"></div>
    </div>

        <!-- <audio id='C' src="/sounds/C.mp3"></audio>
        <audio id='C#' src="../public/assets/sounds/C#.mp3"></audio>
        <audio id='D' src="../public/assets/sounds/D.mp3"></audio>
        <audio id='D#' src="../public/assets/sounds/D#.mp3"></audio>
        <audio id='E' src="../public/assets/sounds/E.mp3"></audio>
        <audio id='F' src="../public/assets/sounds/F.mp3"></audio>
        <audio id='F#' src="../public/assets/sounds/F#.mp3"></audio>
        <audio id='G' src="../public/assets/sounds/G.mp3"></audio>
        <audio id='G#' src="../public/assets/sounds/G#.mp3"></audio>
        <audio id='A' src="../public/assets/sounds/A.mp3"></audio>
        <audio id='A#' src="../public/assets/sounds/A#.mp3"></audio>
        <audio id='B' src="../public/assets/sounds/B.mp3"></audio> -->
</div>

</template>

<script>

// const keys = document.querySelectorAll('key');

// keys.forEach(key => {
//     key.addEventListener('click', () => {playNote(key); console.log('clicked')});
// })

// function playNote(key) {
//     const noteAudio = document.getElementById(key.dataset.note);
//     noteAudio.play();
// }



export default {
  name: 'Piano',
  methods: { 
        play() {
            console.log('clicked');
            const audio = document.createElement('audio')
            audio.src = '/assets/sounds/C.mp3'
            audio.play()
            
        }
    }, 
  data(){
      return {
         notes: [{
             name: 'C',
             type: 'white'
         },{
             name: 'C#',
             type: 'white'
         },{
             name: 'D',
             type: 'black'
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
    --width: 100px;;
    background-color: white;
    border: 1px solid #333;
}

.black {
    --width: 60px;
    background-color: black;
    border: 1px solid #333;
    margin-right: calc(var(--width) / -2);
    margin-left: calc(var(--width) / -2);
    z-index: 2;

}

</style>