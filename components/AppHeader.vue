<template>
  <div>
    <header>
      <nav class="py-4 primary-green rounded main-header">
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
              <div v-if="!$store.state.auth.loggedIn">
                <v-btn
                  outlined
                  color="white primary-green--text"
                  class="rounded"
                  @click.stop="isOpenLoginForm = true"
                >
                  <v-icon left class="mr-0 mr-lg-2 ml-0 -ml-lg-1">
                    mdi-account
                  </v-icon>
                  <span class="d-none d-lg-flex">LOGIN</span>
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                  outlined
                  color="white primary-green--text"
                  class="rounded"
                  @click.stop="logout"
                >
                  <v-icon left class="mr-0 mr-lg-2 ml-0 -ml-lg-1">
                    mdi-logout
                  </v-icon>
                  <span class="d-none d-lg-flex logout-btn">LOGOUT</span>
                </v-btn>
              </div>
              <div
                v-if="$store.state.auth.loggedIn"
                class="avatar"
                @click="isOpenUserSetting = true"
              >
                <img src="@/assets/images/avatar.png" class="w-100" />
              </div>
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
    <user-login v-show="isOpenLoginForm" />
    <user-sign-up />
    <user-setting v-if="$store.state.auth.loggedIn" />
  </div>
</template>
<script>
import UserLogin from '~/components/Form/UserLogin.vue'
import UserSignUp from '~/components/Form/UserSignUp.vue'
import UserSetting from '~/components/UserSetting.vue'

export default {
  components: { UserLogin, UserSignUp, UserSetting },
  name: 'AppHeader',
  data() {
    return {
      isOpenMenu: false,
    }
  },
  computed: {
    isOpenUserSetting: {
      get() {
        return this.$store.getters['authUser/getIsOpenUserSetting']
      },
      set(value) {
        this.$store.commit('authUser/SET_IS_OPEN_USER_SETTING', value)
      },
    },
    isOpenLoginForm: {
      get() {
        return this.$store.getters['authUser/getIsOpenLoginForm']
      },
      set(value) {
        this.$store.commit('authUser/SET_IS_OPEN_LOGIN_FORM', value)
      },
    },
  },
  methods: {
    closeMenu() {
      this.isOpenMenu = false
    },
    async logout() {
      await this.$auth.logout()
      // HACK - sometime nuxt auth package not updating state so refreshing page
      this.$router.go()
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
