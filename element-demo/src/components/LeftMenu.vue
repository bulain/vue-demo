<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu :collapse="isCollapse" default-active="1-3" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"/>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4">选项4</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"/>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"/>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 290px;
  }
  .el-menu-vertical-demo{
    min-height: 500px;
  }
</style>

<script>
export default {
  name: 'LeftMenu',
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
