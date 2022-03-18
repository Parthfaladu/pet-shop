<template>
  <v-container class="mt-5 mt-sm-10">
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="8" md="6">
        <v-text-field
          v-model="searchTitle"
          outlined
          class="primary-green--text"
          prepend-inner-icon="mdi-magnify primary-green--text"
        >
          <template v-slot:label>
            <div class="primary-green--text">Search Product</div>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SearchProduct',
  computed: {
    searchTitle: {
      get() {
        return this.$store.getters['product/getTitle']
      },
      set(value) {
        // on search input change refetch products with updated title
        this.$store.commit('product/SET_TITLE', value)
        this.$store.dispatch('product/GetProducts')
      },
    },
  },
}
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #4ec690;
}
.v-label {
  color: #4ec690;
}
</style>
