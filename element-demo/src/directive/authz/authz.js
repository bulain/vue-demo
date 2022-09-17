export default {
  bind(el, binding, vnode) {
    console.log('directive - bind')
  },
  inserted(el, binding, vnode) {
    console.log('directive - inserted')
  },
  update(el, binding, vnode) {
    console.log('directive - update')
  },
  componentUpdated(el, binding, vnode) {
    console.log('directive - componentUpdated')
  },
  unbind(el, binding, vnode) {
    console.log('directive - unbind')
  }
}
