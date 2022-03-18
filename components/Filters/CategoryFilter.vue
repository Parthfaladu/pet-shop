<template>
  <v-expansion-panels v-model="panel" flat>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <span class="font-weight-medium">CATEGORY</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list class="filter">
          <v-list-item-group
            color="primary"
            :value="selectedCategory"
            @change="changeCategory"
          >
            <v-list-item v-for="(category, index) in categories" :key="index">
              <v-list-item-content>
                <v-list-item-title>
                  <div
                    class="
                      d-flex
                      justify-space-between
                      text--secondary text-capitalize
                    "
                  >
                    {{ category.title }}
                  </div>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'BrandFilter',
  async fetch() {
    await this.getCategories()
  },
  data() {
    return {
      panel: 0,
    }
  },
  computed: {
    categories() {
      // get all filter categories
      return this.$store.getters['category/getCategories']
    },
    selectedCategory() {
      // current selected category details
      if (this.$route.query.uid && this.categories) {
        return _.findIndex(
          this.categories,
          (category) => category.uuid === this.$route.query.uid
        )
      }
      return null
    },
  },
  methods: {
    async getCategories() {
      await this.$store.dispatch('category/GetCategories')
    },
    changeCategory(value) {
      this.$router.push({
        path: `/category/${this.categories[value].slug}`,
        query: { uid: this.categories[value].uuid },
      })
    },
  },
}
</script>