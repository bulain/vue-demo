<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="活动名称">
      <el-input v-model="sizeForm.name"/>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"/>
        <el-option label="区域二" value="beijing"/>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker v-model="sizeForm.date1" type="date" placeholder="选择日期" style="width: 100%;"/>
      </el-col>
      <el-col :span="2" class="line">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="sizeForm.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;"/>
      </el-col>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="sizeForm.type">
        <el-checkbox-button label="美食/餐厅线上活动" name="type"/>
        <el-checkbox-button label="地推活动" name="type"/>
        <el-checkbox-button label="线下主题活动" name="type"/>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="sizeForm.resource" size="medium">
        <el-radio border label="线上品牌商赞助"/>
        <el-radio border label="线下场地免费"/>
      </el-radio-group>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'UserForm',
  data() {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
