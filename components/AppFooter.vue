<template>
  <v-footer color="secondary-green" class="pa-16">
    <v-container class="pa-4">
      <v-row>
        <v-col cols="12" sm="6" md="2">
          <nuxt-link to="/" class="d-flex text-decoration-none ml-2"
            ><img src="@/assets/images/green-logo.svg" class="cursor-pointer"
          /></nuxt-link>
          <div class="primary-green--text headline">petson</div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <div class="font-weight-medium">Petson</div>
          <a href="#" class="text--secondary text-decoration-none">About Us</a
          ><br />
          <a href="#" class="text--secondary text-decoration-none">Blog</a
          ><br />
          <a href="#" class="text--secondary text-decoration-none"
            >Store Locator</a
          >
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <div class="font-weight-medium">Contact</div>
          <div class="text--secondary">contact@petson.com</div>
          <div class="text--secondary">+385 000 000</div>
          <div class="text--secondary">35 Shnauzer avenue, Dogville AL</div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <div class="font-weight-medium">Information</div>
          <a href="#" class="text--secondary text-decoration-none"
            >Ordering and shipping</a
          ><br />
          <a href="#" class="text--secondary text-decoration-none">FAQ</a><br />
          <a href="#" class="text--secondary text-decoration-none"
            >GDPR statement</a
          >
        </v-col>
        <v-col cols="12" sm="12" md="3">
          <div class="text--secondary mt-4">
            If you can’t find answer to your question, please contact our
          </div>
          <div class="primary-blue--text">contact@petson.com</div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: 'AppFooter',
}
</script>
