<template>
  <div>
    <header>
      <nav class="py-4">
        <v-container>
            <div class="d-flex justify-space-between">
              <router-link to="/" class="d-flex"><img src="@/assets/images/logo.svg" class="cursor-pointer" /><span class="pl-2 pt-1">petson</span></router-link>
              <div class="">
                  <a href="#" class="mt-4  mr-6 pb-2 cursor-pointer">
                  PRODUCTS
                  </a>
                  <a href="#" class="mt-4  mr-6 pb-2 cursor-pointer">
                  PROMOTIONS
                  </a>
                  <a href="#" class="mt-4  mr-6 pb-2 cursor-pointer">
                  BLOG
                  </a>
              </div>
              <div class="">
                <button class="mr-2">
                  <div class="d-flex">
                    <v-icon color="white">
                      mdi-cart
                    </v-icon>
                    <span class="">CART (0)</span></div>
                </button>
                <button class="">
                  <div class="d-flex">
                    <v-icon color="white">
                      mdi-account
                    </v-icon>
                    <span class="">LOGIN</span>
                  </div>
                </button>
              </div>
            </div>
        </v-container>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isOpenMenu: false,
    }
  },
  methods: {
    closeMenu () {
      this.isOpenMenu = false
    }
  }
}
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
