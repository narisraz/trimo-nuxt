import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      authDialogOpened: false
    },
    mutations: {
      authDialog (state, value) {
        state.authDialogOpened = value
      }
    }
  })
}

export default createStore
