import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userPool: [],
    cognitoUser: '',
    username: '',
    authenticated: false
  },
  mutations: {
    getAuthenticatedUser (state) {
      state.userPool.getCurrentUser()
    },
    signOut (state) {
      this.getAuthenticatedUser().signOut()
      state.authenticated = false
      state.username = ''
      state.cognitoUser = ''
      state.userPool = []
      console.log('store: signed out')
    },
    isAuthenticated (state) {
      const user = this.getAuthenticatedUser()
      user.getSession((err, session) => {
        if (err) {
          console.log(err)
          state.authenticated = false
        } else {
          if (session.isValid()) {
            console.log(session)
            state.authenticated = true
          }
        }
      })
    }
  }
})
