<template>
  <div></div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'IndexPage',
  async fetch() {
    await this.getCategories()
  },
  computed: {
    categories() {
      // get all filter categories
      return this.$store.getters['category/getCategories']
    },
  },
  mounted() {
    this.redirectToSubCategoryPage()
  },
  methods: {
    async getCategories() {
      await this.$store.dispatch('category/GetCategories')
    },
    redirectToSubCategoryPage() {
      const categoryDetails = _.find(this.categories, (category) => category.slug === 'wet-pet-food')
      if(categoryDetails) {
        this.$router.push({path: '/category/wet-pet-food', query: {'uid': categoryDetails.uuid }})
      }
    }
  }
}
</script>
