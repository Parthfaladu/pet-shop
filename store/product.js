import { getProducts } from '@/api/products'

const getDefaultState = () => {
  return {
    productsData: null,
    currentCategoryUid: null,
    selectedBrand: null,
    limit: 15,
    page: 1,
    sortBy: 'price',
    desc: false,
    price: 100,
    title: null,
  }
}

export const state = () => getDefaultState()

export const getters = {
  getProducts(state) {
    return state.productsData ? state.productsData.data : []
  },
  getProductsData(state) {
    return state.productsData
  },
  getLimit(state) {
    return state.limit
  },
  getPage(state) {
    return state.page
  },
  getSort(state) {
    return state.desc
  },
  getSelectedBrand(state) {
    return state.selectedBrand
  },
  getPrice(state) {
    return state.price
  },
  getTitle(state) {
    return state.title
  }
}

export const mutations = {
  SET_PRODUCTS(state, payload) {
    state.productsData = payload
  },
  SET_CATEGORY_UID(state, payload) {
    state.currentCategoryUid = payload
  },
  SET_LIMIT(state, payload) {
    state.limit = payload
  },
  SET_PAGE(state, payload) {
    state.page = payload
  },
  SET_SORT(state, payload) {
    state.desc = payload
  },
  SET_SELECTED_BRAND(state, payload) {
    state.selectedBrand = payload
  },
  SET_PRICE(state, payload) {
    state.price = payload
  },
  SET_TITLE(state, payload) {
    state.title = payload
  },
}

export const actions = {
  async GetProducts({ state, commit }, params) {
    try {
      const res = await getProducts({ page: state.page, limit: state.limit, sortBy: 'price', desc: state.sort, category: state.currentCategoryUid, brand: state.selectedBrand, price: state.price, title: state.title })
      commit('SET_PRODUCTS', res.data)
    } catch (err) { }
  },
}
