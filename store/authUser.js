
const getDefaultState = () => {
  return {
    isOpenLoginForm: false,
    isOpenSignupForm: false,
    isOpenUserSetting: false
  }
}

export const state = () => getDefaultState()

export const getters = {
  getIsOpenLoginForm(state) {
    return state.isOpenLoginForm
  },
  getIsOpenSignupForm(state) {
    return state.isOpenSignupForm
  },
  getIsOpenUserSetting(state) {
    return state.isOpenUserSetting
  }
}

export const mutations = {
  SET_IS_OPEN_LOGIN_FORM(state, payload) {
    state.isOpenLoginForm = payload
  },
  SET_IS_OPEN_SIGNUP_FORM(state, payload) {
    state.isOpenSignupForm = payload
  },
  SET_IS_OPEN_USER_SETTING(state, payload) {
    state.isOpenUserSetting = payload
  },
}

export const actions = {

}
