<template>
  <v-app>
    <app-header />
    <v-main>
      <search-product />
      <Nuxt />
    </v-main>
    <app-footer class="mt-16" />
  </v-app>
</template>
<script>
import AppFooter from '~/components/AppFooter.vue'
import AppHeader from '~/components/AppHeader.vue'
export default {
  components: { AppHeader, AppFooter },
  name: 'CategoryLayout',
}
</script>