const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: '/grid',
    component: (resolve) => require(['./views/demo/grid.vue'], resolve)
}, {
    path: '/layout',
    component: (resolve) => require(['./views/demo/layout.vue'], resolve)
}, {
    path: '/button',
    component: (resolve) => require(['./views/demo/button.vue'], resolve)
}, {
    path: '/icon',
    component: (resolve) => require(['./views/demo/icon.vue'], resolve)
}, {
    path: '/form',
    component: (resolve) => require(['./views/demo/form.vue'], resolve)
}, {
    path: '/table',
    component: (resolve) => require(['./views/demo/table.vue'], resolve)
}];
export default routers;