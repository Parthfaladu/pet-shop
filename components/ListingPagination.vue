<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="paginationLength"
      circle
      color="primary-green box-shadow-none"
      @input="onPageChange"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'ListingPagination',
  props: {
    paginationLength: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      page: 1,
    }
  },
  methods: {
    onPageChange(e) {
      this.$emit('page-no', e)
    },
  },
}
</script>
<style lang="scss">
.v-pagination__item {
  box-shadow: none !important;
  background-color: rgba(0, 0, 0, 0.08) !important;
}
.v-pagination__navigation {
  box-shadow: none !important;
  background-color: transparent !important;
}
</style>