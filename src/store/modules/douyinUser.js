const state = {
  userInfo: {}
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('SET_USERINFO', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

