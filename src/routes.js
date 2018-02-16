import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/Signin'
import Register from '@/components/Register'
import Reset from '@/components/Reset'
import Confirm from '@/components/Confirm'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/signin' },
    { path: '/signin', name: 'SignIn', component: SignIn },
    { path: '/register', name: 'Register', component: Register },
    { path: '/reset', name: 'Reset', component: Reset },
    { path: '/confirm', name: 'COnfirm', component: Confirm }
  ],
  mode: 'history'
})
