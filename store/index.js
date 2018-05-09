import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      backendApiDomain: 'http://localhost:8080/',
      authDialogOpened: false,
      authCookieName: 'tA'
    },
    mutations: {
      authDialog (state, value) {
        state.authDialogOpened = value
      }
    }
  })
}

export default createStore
