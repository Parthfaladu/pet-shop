<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card class="mx-auto pa-5" :elevation="hover ? 3 : 0">
        <v-img :src="demoProductImg" class="cursor-pointer"></v-img>

        <v-card-title
          class="text-decoration-underline text-truncate d-inline-block col-12"
        >
          {{ data.title }}
        </v-card-title>

        <v-card-subtitle class="text-truncate pb-0">
          {{ data.brand ? data.brand.title : '' }}
        </v-card-subtitle>
        <v-card-text class="font-weight-bold text-truncate subtitle-1 pb-0">
          {{ data.price }} Kn
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary-green white--text rounded">
            <v-icon left> mdi-cart </v-icon>
            ADD TO CART
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
import demoProductImg from '@/assets/images/demo-product.svg'

export default {
  name: 'GridDisplay',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      demoProductImg,
    }
  },
}
</script>