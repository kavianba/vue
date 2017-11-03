import Vue from 'vue'
import Router from 'vue-router'
import VeeValidate from 'vee-validate'
import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/SignUp'

Vue.use(Router)
Vue.use(VeeValidate)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
		path: '/signup',
		name: 'SignUp',
		component: SignUp
	}
  ]
})
