<template>
    <p>hello {{ variable }}</p>
</template>

<script>
export default {
  name: 'Coucou',
  data(){
      return {
          variable: 'mathieu'
      }
  }
}
</script>