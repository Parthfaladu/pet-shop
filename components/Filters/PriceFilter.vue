<template>
  <v-expansion-panels v-model="panel" flat>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="font-weight-medium">PRICE</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-slider
          v-model="slider"
          class="align-center"
          :max="max"
          :min="min"
          hide-details
          @change="changePrice"
        >
        </v-slider>
        <div
          class="
            float-right
            rounded
            slider-range-border
            py-1
            px-2
            text--secondary
          "
        >
          {{ slider }} kn
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'PriceFilter',
  data() {
    return {
      min: 10,
      max: 100,
      panel: 0,
    }
  },
  computed: {
    slider: {
      get() {
        return this.$store.getters['product/getPrice']
      },
      set(value) {
        this.$store.commit('product/SET_PRICE', value)
      },
    },
  },
  methods: {
    changePrice() {
      // on price change refetch products
      this.$store.dispatch('product/GetProducts')
    },
  },
}
</script>
<style lang="scss" scoped>
.slider-range-border {
  border: 1px solid;
}
</style>