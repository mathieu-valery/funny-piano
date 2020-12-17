<template>
    <img :src=url alt="">
</template>

<script>
export default {
  name: 'Emoji',
  computed: {
        url() {
            return this.$store.state.url
        }
    }
}
</script>