<template>
  <div>
    <el-table
      :data="tableData"
      :row-class-name="tableRowClassName"
      border
      style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"/>
      <el-table-column prop="name" label="姓名" width="180"/>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
    <el-pagination
      :current-page="1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      :total="450"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    const data = []
    for (let i = 0; i < 30; i++) {
      data.push(
        {
          date: new Date(2017, 2, i + 1).toLocaleDateString(),
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        })
    }
    return {
      tableData: data
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
