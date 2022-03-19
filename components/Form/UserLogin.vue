<template>
  <v-row justify="center">
    <v-dialog
      v-model="isOpenLoginForm"
      persistent
      max-width="500px"
      @click:outside="isOpenLoginForm = false"
    >
      <v-card class="py-5">
        <v-card-title class="d-flex justify-center">
          <div>
            <div class="login-head primary-green pa-4 pt-5">
              <nuxt-link to="/" class="d-flex text-decoration-none ml-5">
                <img src="@/assets/images/logo.svg" class="cursor-pointer"
              /></nuxt-link>
              <div class="white--text pl-1">petson</div>
            </div>
            <p class="text-center mt-3 pb-0 headline">Log in</p>
          </div>
        </v-card-title>
        <v-alert v-model="error" dense type="error" dismissible>
          {{ errorMsg }}
        </v-alert>
        <v-card-text>
          <v-container>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-row>
                <form @submit.prevent="submit" class="w-100">
                  <v-col class="py-0" cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Email Address"
                      rules="required|email"
                      vid="emaillogin"
                    >
                      <v-text-field
                        v-model="form.email"
                        :error-messages="errors"
                        outlined
                        required
                        name="email"
                        placeholder="Email Address *"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Password"
                      rules="required|min:8"
                      vid="passwordlogin"
                    >
                      <v-text-field
                        v-model="form.password"
                        :error-messages="errors"
                        outlined
                        required
                        name="password"
                        type="password"
                        placeholder="Password *"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-btn
                      color="primary-green white--text rounded"
                      class="col-12"
                      type="submit"
                      :disabled="invalid"
                      >LOGIN</v-btn
                    >
                  </v-col>
                </form>
              </v-row>
            </validation-observer>

            <v-row class="d-flex justify-space-between px-4 mt-5">
              <div class="primary-blue--text">Forgot password?</div>
              <div
                @click="openSignup"
                class="primary-blue--text cursor-pointer"
              >
                Don’t have an account? Sign Up
              </div>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { required, email, min } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'

setInteractionMode('eager')
extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})
extend('email', {
  ...email,
  message: 'Email must be valid',
})
extend('min', {
  ...min,
  message: '{_field_} may not be less than {length} characters',
})

export default {
  name: 'UserLogin',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  computed: {
    isOpenLoginForm: {
      get() {
        return this.$store.getters['authUser/getIsOpenLoginForm']
      },
      set(value) {
        this.$store.commit('authUser/SET_IS_OPEN_LOGIN_FORM', value)
      },
    },
    isOpenSignupForm: {
      get() {
        return this.$store.getters['authUser/getIsOpenSignupForm']
      },
      set(value) {
        this.$store.commit('authUser/SET_IS_OPEN_SIGNUP_FORM', value)
      },
    },
    error: {
      get() {
        return this.errorMsg !== null
      },
      set(value) {
        this.errorMsg = null
      },
    },
  },
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      errorMsg: null,
    }
  },
  methods: {
    openSignup() {
      this.isOpenLoginForm = false
      this.isOpenSignupForm = true
    },
    async submit(e) {
      try {
        this.errorMsg = null
        e.preventDefault()
        const valid = await this.$refs.observer.validate()
        if (valid) {
          // submit form
          const res = await this.$auth.loginWith('local', {
            data: this.form,
          })
          this.clear()
          this.$auth.setUser(res.data.data)
          this.isOpenLoginForm = false
        }
      } catch (err) {
        this.errorMsg = err.response.data.error
      }
    },
    clear() {
      this.$refs.observer.reset()
      this.form.email = null
      this.form.password = null
    },
  },
}
</script>
<style lang="scss" scoped>
.login-head {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>