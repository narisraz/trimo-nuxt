import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      backendApiDomain: 'http://localhost:8080/',
      authDialogOpened: false,
      authToken: ''
    },
    mutations: {
      authDialog (state, value) {
        state.authDialogOpened = value
      },
      setAuthToken (state, value) {
        state.authToken = value
      }
    }
  })
}

export default createStore
