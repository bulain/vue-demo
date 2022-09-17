<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="4"><img src="../assets/logo.png" class="logo"></el-menu-item>
      <el-menu-item index="1"><a href="#/">处理中心</a></el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1"><a href="#/UserList">用户列表</a></el-menu-item>
        <el-menu-item index="2-2"><a href="#/UserForm">用户表单</a></el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="#/helloWord">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.logo {
  width: 80px;
  height: 60px;
}
</style>
