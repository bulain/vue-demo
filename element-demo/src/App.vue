<template>
  <div id="app">
    <el-container>
      <el-header><top-menu /></el-header>
      <el-container>
        <el-aside><left-menu /></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopMenu from '@/components/TopMenu'
import LeftMenu from '@/components/LeftMenu'
export default {
  name: 'App',
  components: {
    TopMenu,
    LeftMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
