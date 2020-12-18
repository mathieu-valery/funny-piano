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
    width: 20vw;
    padding-bottom: 10vh;

}
</style>