<template>
  <v-row class="ml-0 ml-sm-2 ml-md-5">
    <v-col
      cols="12"
      sm="6"
      md="4"
      v-for="(product, index) in products"
      :key="index"
    >
      <Product :data="product" />
    </v-col>
  </v-row>
</template>

<script>
import Product from '../Product/GridDisplay.vue'

export default {
  name: 'ProductGrid',
  components: {
    Product,
  },
  computed: {
    products() {
      return this.$store.getters['product/getProducts']
    },
  },
}
</script>
