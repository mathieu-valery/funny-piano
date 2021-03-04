<template>
    <div class="emoji">
        <img :src=url alt="">
    </div>
</template>

<script>

export default {

  name: 'Emoji',
  computed: {
        url() {
            return this.$store.getters.url
        }
    }
}
</script>

<style scoped>
img {
    width: 10vw;
    padding-bottom: 10vh;

}

@media screen and (max-width: 1025px) {
    img {
        width: 20vw;
        padding-bottom: 5vh;
       
    }

}
</style>