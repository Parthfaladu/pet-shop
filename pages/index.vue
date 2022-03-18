<template>
  <div></div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$router.push({path: '/category/wet-pet-food', query: {'uid': '6bedc326-8f43-38ba-a183-c10c6732af2c' }})
  }
}
</script>
