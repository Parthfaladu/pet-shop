import { getCategories } from '@/api/categories'

const getDefaultState = () => {
  return {
    categories: [],
  }
}

export const state = () => getDefaultState()

export const getters = {
  getCategories(state) {
    return state.categories
  },
}

export const mutations = {
  SET_CATEGORIES(state, payload) {
    state.categories = payload
  },
}

export const actions = {
  async GetCategories({ state, commit }) {
    try {
      const res = await getCategories({ limit: 20 })
      commit('SET_CATEGORIES', res.data.data)
    } catch (err) { }
  },
}
