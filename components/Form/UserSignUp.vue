<template>
  <v-row justify="center">
    <v-dialog
      v-model="isOpenSignupForm"
      persistent
      max-width="500px"
      @click:outside="isOpenSignupForm = false"
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
            <p class="text-center mt-3 pb-0 headline">Sign Up</p>
          </div>
        </v-card-title>
        <v-alert v-model="error" dense type="error" dismissible>
          <div v-for="(msg, index) in errorMessages" :key="index">
            {{ msg }}
          </div>
        </v-alert>
        <v-card-text>
          <v-container>
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-row>
                <form @submit.prevent="submit" class="w-100">
                  <v-row class="d-flex pa-3">
                    <v-col class="py-0" cols="12" sm="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="First Name"
                        rules="required"
                        vid="first_name"
                      >
                        <v-text-field
                          v-model="form.first_name"
                          :error-messages="errors"
                          outlined
                          required
                          placeholder="First Name *"
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                    <v-col class="py-0" cols="12" sm="6">
                      <validation-provider
                        v-slot="{ errors }"
                        name="Last Name"
                        rules="required"
                        vid="last_name"
                      >
                        <v-text-field
                          v-model="form.last_name"
                          :error-messages="errors"
                          outlined
                          required
                          placeholder="Last Name *"
                        ></v-text-field>
                      </validation-provider>
                    </v-col>
                  </v-row>
                  <v-col class="py-0" cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Email Address"
                      rules="required|email"
                      vid="emailsignup"
                    >
                      <v-text-field
                        v-model="form.email"
                        :error-messages="errors"
                        outlined
                        required
                        placeholder="Email Address *"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Password"
                      rules="required|min:8"
                      vid="password"
                    >
                      <v-text-field
                        v-model="form.password"
                        :error-messages="errors"
                        outlined
                        required
                        type="password"
                        placeholder="Password *"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Confirmed Password"
                      rules="required|min:8|confirmed:password"
                      vid="password_confirmation"
                    >
                      <v-text-field
                        v-model="form.password_confirmation"
                        :error-messages="errors"
                        outlined
                        required
                        type="password"
                        placeholder="Confirmed Password *"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Address"
                      rules="required"
                      vid="address"
                    >
                      <v-text-field
                        v-model="form.address"
                        :error-messages="errors"
                        outlined
                        required
                        type="text"
                        placeholder="Address *"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Phone number"
                      rules="required"
                      vid="phone_number"
                    >
                      <v-text-field
                        v-model="form.phone_number"
                        :error-messages="errors"
                        outlined
                        required
                        type="text"
                        placeholder="Phone number *"
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-checkbox
                      class="mt-0"
                      v-model="form.marketing"
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    ></v-checkbox>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-btn
                      color="primary-green white--text rounded"
                      class="col-12"
                      type="submit"
                      :disabled="invalid"
                      >SIGN UP</v-btn
                    >
                  </v-col>
                </form>
              </v-row>
            </validation-observer>
            <v-row class="d-flex justify-center px-4 mt-5">
              <div @click="openLogin" class="primary-blue--text cursor-pointer">
                Already have an account? Log in
              </div>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import _ from 'lodash'
import { required, email, min, confirmed } from 'vee-validate/dist/rules'
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from 'vee-validate'
import { signup } from '@/api/users'

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

extend('confirmed', {
  ...confirmed,
  message: 'Password Confirm does not match',
})

export default {
  name: 'UserSignUp',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null,
        address: null,
        phone_number: null,
        marketing: false,
      },
      errorMessages: [],
    }
  },
  computed: {
    isOpenSignupForm: {
      get() {
        return this.$store.getters['authUser/getIsOpenSignupForm']
      },
      set(value) {
        this.$store.commit('authUser/SET_IS_OPEN_SIGNUP_FORM', value)
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
    error: {
      get() {
        return this.errorMessages && this.errorMessages.length > 0
      },
      set(value) {
        this.errorMessages = []
      },
    },
  },
  methods: {
    openLogin() {
      this.isOpenSignupForm = false
      this.isOpenLoginForm = true
    },
    async submit() {
      try {
        const valid = await this.$refs.observer.validate()
        if (valid) {
          // submit form
          const res = await signup(this.form)
          this.clear()
          this.$auth.setUserToken(res.data.data.token)
          await this.$auth.setUser(res.data.data)
          this.isOpenSignupForm = false
        }
      } catch (err) {
        if (err.response && err.response.data.errors) {
          const errors = []
          _.forOwn(err.response.data.errors, (error, key) => {
            errors.push(error[0])
          })
          this.errorMessages = errors
        } else if (err.response && err.response.data.error) {
          this.errorMessages.push(err.response.data.error)
        }
      }
    },
    clear() {
      this.$refs.observer.reset()
      this.form.first_name = null
      this.form.last_name = null
      this.form.email = null
      this.form.password = null
      this.form.password_confirmation = null
      this.form.address = null
      this.form.phone_number = null
      this.form.marketing = false
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