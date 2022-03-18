<template>
  <div>
    <price-filter />
    <brand-filter />
    <category-filter />
  </div>
</template>

<script>
import PriceFilter from '~/components/Filters/PriceFilter.vue'
import BrandFilter from '~/components/Filters/BrandFilter.vue'
import CategoryFilter from '~/components/Filters/CategoryFilter.vue'

export default {
  name: 'ProductFilter',
  components: {
    PriceFilter,
    BrandFilter,
    CategoryFilter,
  },
}
</script>

