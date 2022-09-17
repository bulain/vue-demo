import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import UserList from '@/components/user/UserList'
import UserForm from '@/components/user/UserForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/UserList',
      name: 'UserListx',
      component: UserList
    },
    {
      path: '/UserForm',
      name: 'UserForm',
      component: UserForm
    },
    {
      path: '/helloWord',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
