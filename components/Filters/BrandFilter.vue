<template>
  <v-expansion-panels v-model="panel" flat>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="font-weight-medium">BRAND</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list class="filter">
          <v-list-item-group
            color="primary"
            :value="selectedBrand"
            @change="changeBrand"
          >
            <v-list-item v-for="(brand, index) in brands" :key="index">
              <v-list-item-content>
                <v-list-item-title>
                  <div
                    class="
                      d-flex
                      justify-space-between
                      text--secondary text-capitalize
                    "
                  >
                    {{ brand.title }}
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'BrandFilter',
  async fetch() {
    await this.getBrands()
  },
  data() {
    return {
      panel: 0,
    }
  },
  computed: {
    brands() {
      // get all filter brands
      const brands = [{ title: 'All', uuid: null }]
      return brands.concat(this.$store.getters['brand/getBrands'])
    },
    selectedBrand() {
      // current selected brand
      return _.findIndex(
        this.brands,
        (brand) =>
          brand.uuid === this.$store.getters['product/getSelectedBrand']
      )
    },
  },
  methods: {
    async getBrands() {
      await this.$store.dispatch('brand/GetBrands')
    },
    changeBrand(value) {
      // on change brand refetch products
      this.$store.commit('product/SET_SELECTED_BRAND', this.brands[value].uuid)
      this.$store.dispatch('product/GetProducts')
    },
  },
}
</script>