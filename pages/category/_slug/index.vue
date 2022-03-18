<template>
  <v-container class="mt-0 mt-sm-12 mt-md-12">
    <v-row no-gutters>
      <v-col cols="12" offset-md="3" sm="12" md="8">
        <div v-if="selectedCategoryName" class="display-3 primary-green--text">
          {{ selectedCategoryName.title }}
        </div>
        <v-row class="mt-10">
          <v-col cols="12" sm="8" md="9">
            <div>
              <span class="">Homepage</span>
              <span v-if="selectedCategoryName" class="font-weight-medium"
                >/ {{ selectedCategoryName.title }}</span
              >
            </div>
          </v-col>
          <v-col cols="12" sm="4" md="3">
            <v-select
              v-model="sort"
              :items="sort_option"
              label="Sort by"
              class="pt-0 mt-0 float-sm-right"
              @change="getProducts"
            >
            </v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="4" md="3">
        <product-filter class="mt-6 mt-sm-0" />
      </v-col>
      <v-col cols="12" sm="8" md="9">
        <div v-if="$store.getters['product/getProducts'].length > 0">
          <product-grid />
          <div class="d-flex justify-center mt-16">
            <ListingPagination
              :paginationLength="paginationLength"
              @page-no="onPageChange"
            />
          </div>
          <div class="d-flex justify-center mt-6">
            <div class="text--secondary">Items per page :</div>
            <div class="limit-select ml-2">
              <v-select
                v-model="limits"
                :items="[15, 25, 50, 100]"
                class="pt-0 mt-0"
                @change="getProducts"
              ></v-select>
            </div>
            <div class="text--secondary ml-9">
              {{ productData.from }}-{{ productData.to }} of
              {{ productData.total }}
            </div>
          </div>
        </div>
        <h2 v-else class="text-center mt-16">No products found</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from 'lodash'
import ProductFilter from '~/components/Category/ProductFilter.vue'
import ProductGrid from '~/components/Category/ProductGrid.vue'
import ListingPagination from '~/components/ListingPagination.vue'

export default {
  name: 'CategorySlugPage',
  layout: 'category',
  components: {
    ProductFilter,
    ProductGrid,
    ListingPagination,
  },
  async fetch() {
    this.$store.commit('product/SET_CATEGORY_UID', this.$route.query.uid)
    await this.getProducts()
  },
  data() {
    return {
      sort_option: [
        { text: 'Lowest price first', value: false },
        { text: 'Highest price first', value: true },
      ],
    }
  },
  computed: {
    productData() {
      return this.$store.getters['product/getProductsData']
    },
    paginationLength() {
      if (this.productData) {
        return Math.ceil(this.productData.total / this.limits)
      }
      return 0
    },
    selectedCategoryName() {
      // if uid in url then get that category details
      if (
        this.$route.query.uid &&
        this.$store.getters['category/getCategories']
      ) {
        return _.find(
          this.$store.getters['category/getCategories'],
          (category) => category.uuid === this.$route.query.uid
        )
      }
      return null
    },
    limits: {
      get() {
        return this.$store.getters['product/getLimit']
      },
      set(value) {
        this.$store.commit('product/SET_LIMIT', value)
      },
    },
    page: {
      get() {
        return this.$store.getters['product/getPage']
      },
      set(value) {
        this.$store.commit('product/SET_PAGE', value)
      },
    },
    sort: {
      get() {
        return this.$store.getters['product/getSort']
      },
      set(value) {
        this.$store.commit('product/SET_SORT', value)
      },
    },
  },
  methods: {
    async getProducts() {
      // get all products
      await this.$store.dispatch('product/GetProducts')
    },
    async onPageChange(pageNo) {
      // on page change get next page products
      this.page = pageNo
      await this.getProducts()
    },
  },
}
</script>
<style lang="scss" scoped>
.limit-select {
  width: 60px;
}
</style>
