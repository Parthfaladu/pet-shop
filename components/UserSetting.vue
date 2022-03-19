<template>
  <v-row justify="center">
    <v-dialog
      v-model="isOpenUserSetting"
      persistent
      max-width="830px"
      @click:outside="isOpenUserSetting = false"
    >
      <v-card class="py-5">
        <v-card-title class="d-flex justify-center">
          <div class="headline">User settings</div>
        </v-card-title>
        <v-card-text>
          <v-container v-if="user">
            <v-row>
              <v-col cols="12" sm="6" md="3" class="border-r-1">
                <div class="col-10">
                  <img :src="user.avatar || defaultAvatar" class="w-100" />
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <div class="caption text--secondary">Name</div>
                <div class="body-1 text--primary">
                  {{ user.first_name }} {{ user.last_name }}
                </div>
                <div class="caption text--secondary mt-8">Date joined</div>
                <div class="body-1 text--primary">
                  {{ joinedDate(user.created_at) }}
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <div class="caption text--secondary">Phone number</div>
                <div class="body-1 text--primary">{{ user.phone_number }}</div>
                <div class="caption text--secondary mt-8">Email</div>
                <div class="body-1 text--primary">{{ user.email }}</div>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <div class="caption text--secondary">Address</div>
                <div class="body-1 text--primary">{{ user.address }}</div>
                <div class="caption text--secondary mt-8">
                  Marketing preferences
                </div>
                <div class="body-1 text--primary">
                  {{ user.is_marketing ? 'Yes' : 'No' }}
                </div>
              </v-col>
            </v-row>
            <!-- <latest-order /> -->
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import * as moment from 'moment'
// import LatestOrder from '~/components/Table/LatestOrder.vue'
import defaultAvatar from '@/assets/images/avatar.png'

export default {
  // components: { LatestOrder },
  name: 'UserSetting',
  async fetch() {
    const res = await this.$auth.fetchUser()
    this.user = res.data.data
  },
  data() {
    return {
      user: null,
      defaultAvatar,
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
  },
  methods: {
    joinedDate(date) {
      return moment(date).format('DD. MM. YYYY.')
    },
  },
}
</script>