import authz from './authz'

const install = function(Vue) {
  Vue.directive('authz', authz)
}

if (window.Vue) {
  window['authz'] = authz
  Vue.use(install); // eslint-disable-line
}

authz.install = install
export default authz
