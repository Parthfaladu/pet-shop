import { getBrands } from '@/api/brands'

const getDefaultState = () => {
  return {
    brands: [],
  }
}

export const state = () => getDefaultState()

export const getters = {
  getBrands(state) {
    return state.brands
  },
}

export const mutations = {
  SET_BRANDS(state, payload) {
    state.brands = payload
  },
}

export const actions = {
  async GetBrands({ state, commit }) {
    try {
      const res = await getBrands({ limit: 20 })
      commit('SET_BRANDS', res.data.data)
    } catch (err) { }
  },
}
