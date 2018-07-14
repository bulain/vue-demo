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
}];
export default routers;