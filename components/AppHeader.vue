<template>
  <div>
    <header>
      <nav class="py-4 primary-green rounded">
        <v-container>
          <div class="d-flex justify-space-between">
            <nuxt-link to="/" class="d-flex text-decoration-none">
              <img src="@/assets/images/logo.svg" class="cursor-pointer" />
              <div
                class="
                  pl-2
                  pt-3
                  white--text
                  text-decoration-none
                  d-none d-lg-flex
                "
              >
                petson
              </div>
            </nuxt-link>
            <div class="d-none d-lg-flex">
              <a
                href="#"
                class="
                  mt-4
                  mr-6
                  pb-2
                  cursor-pointer
                  white--text
                  text-decoration-none
                "
              >
                PRODUCTS
              </a>
              <a
                href="#"
                class="
                  mt-4
                  mr-6
                  pb-2
                  cursor-pointer
                  white--text
                  text-decoration-none
                "
              >
                PROMOTIONS
              </a>
              <a
                href="#"
                class="
                  mt-4
                  mr-6
                  pb-2
                  cursor-pointer
                  white--text
                  text-decoration-none
                "
              >
                BLOG
              </a>
            </div>
            <div class="d-flex mt-2">
              <v-btn
                outlined
                color="white primary-green--text"
                class="rounded mr-2"
              >
                <v-icon left class="mr-0 mr-lg-2 ml-0 -ml-lg-1">
                  mdi-cart
                </v-icon>
                <span class="d-none d-lg-flex">CART(0)</span>
              </v-btn>
                <v-btn
                  outlined
                  color="white primary-green--text"
                  class="rounded"
                >
                  <v-icon left class="mr-0 mr-lg-2 ml-0 -ml-lg-1">
                    mdi-account
                  </v-icon>
                  <span class="d-none d-lg-flex">LOGIN</span>
                </v-btn>
            </div>
            <div class="d-flex d-lg-none">
              <v-btn @click="isOpenMenu = true">
                <v-icon class="primary-green--text"> mdi-menu </v-icon>
              </v-btn>
            </div>
          </div>
        </v-container>
      </nav>
    </header>
    <transition name="slide-fade">
      <div v-if="isOpenMenu" class="mobile-menu">
        <div class="py-2 d-flex justify-space-between">
          <div class="primary-green--text pa-4">MENU</div>
          <v-btn :elevation="0" color="white" @click="closeMenu">
            <v-icon class="primary-green--text"> mdi-close </v-icon>
          </v-btn>
        </div>
        <v-list>
          <v-list-item link>
            <v-list-item-title>PRODUCTS</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>PROMOTIONS</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>BLOG</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isOpenMenu: false,
    }
  },
  methods: {
    closeMenu() {
      this.isOpenMenu = false
    },
  },
}
</script>
<style scoped>
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
.avatar {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: white;
  margin-left: 20px;
  margin-top: -10px;
  cursor: pointer;
}
</style>
