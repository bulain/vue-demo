<style>
</style>
<template>
    <div class="form">
        <Input v-model="value1" placeholder="Enter something..." style="width: 200px"></Input>
        <Input v-model="value2" placeholder="Enter something..." clearable style="width: 200px"></Input>
        <Input v-model="value3" placeholder="Enter something..." icon="calendar" style="width: 200px"></Input>
        <br>
        <Input v-model="value4" type="textarea" placeholder="Enter something..."></Input>
        <br>
        <Input v-model="value5" type="textarea" placeholder="Enter something..." :rows="4"></Input>
        <br>
        <Input v-model="value6">
            <span slot="prepend">http://</span>
            <span slot="append">.com</span>
        </Input>
        <br>
        <Input v-model="value7">
            <Select v-model="value8" slot="prepend" style="width: 80px">
                <Option value="http">http://</Option>
                <Option value="https">https://</Option>
            </Select>
            <Select v-model="value9" slot="append" style="width: 70px">
                <Option value="com">.com</Option>
                <Option value="org">.org</Option>
                <Option value="io">.io</Option>
            </Select>
        </Input>
        <br>
        <Input v-model="value10">
            <Select v-model="value11" slot="prepend" style="width: 80px">
                <Option value="day">Day</Option>
                <Option value="month">Month</Option>
            </Select>
            <Button slot="append" icon="ios-search"></Button>
        </Input>
        <br>
        <Radio v-model="value12">Radio</Radio>
        <br>
        <RadioGroup v-model="value13">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </RadioGroup>
        <br>
        <RadioGroup v-model="value14">
            <Radio label="金斑蝶" disabled></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
        </RadioGroup>
        <br>
        <RadioGroup v-model="value15" vertical>
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </RadioGroup>
        <br>
        <RadioGroup v-model="value16" type="button">
            <Radio label="北京"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </RadioGroup>
        <br>
        <RadioGroup v-model="value17" type="button">
            <Radio label="北京"></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </RadioGroup>
        <br>
        <RadioGroup v-model="value18" type="button" size="large">
            <Radio label="北京"></Radio>
            <Radio label="上海" disabled></Radio>
            <Radio label="深圳"></Radio>
            <Radio label="杭州"></Radio>
        </RadioGroup>
        <br>
        <Checkbox v-model="value19">Checkbox</Checkbox>
        <br>
        <CheckboxGroup v-model="value20">
            <Checkbox label="twitter">
                <Icon type="social-twitter"></Icon>
                <span>Twitter</span>
            </Checkbox>
            <Checkbox label="facebook">
                <Icon type="social-facebook"></Icon>
                <span>Facebook</span>
            </Checkbox>
            <Checkbox label="github">
                <Icon type="social-github"></Icon>
                <span>Github</span>
            </Checkbox>
            <Checkbox label="snapchat">
                <Icon type="social-snapchat"></Icon>
                <span>Snapchat</span>
            </Checkbox>
        </CheckboxGroup>
        <br>
        <CheckboxGroup v-model="value21">
            <Checkbox label="香蕉" disabled></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        <br>
        <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
            <Checkbox
                :indeterminate="indeterminate"
                :value="checkAll"
                @click.prevent.native="handleCheckAll">全选</Checkbox>
        </div>
        <CheckboxGroup v-model="value22" @on-change="checkAllGroupChange">
            <Checkbox label="香蕉"></Checkbox>
            <Checkbox label="苹果"></Checkbox>
            <Checkbox label="西瓜"></Checkbox>
        </CheckboxGroup>
        </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
      value10: "",
      value11: "",
      value12: "",
      value13: "",
      value14: "",
      value15: "",
      value16: "",
      value17: "",
      value18: "",
      value19: "",
      value20: "",
      value21: "",
      value22: "",
      value23: "",
      value24: "",
      value25: "",
      value26: "",
      value27: "",
      value28: "",
      value29: "",
    }
  },
    methods: {
        handleCheckAll () {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
            } else {
                this.checkAllGroup = [];
            }
        },
        checkAllGroupChange (data) {
            if (data.length === 3) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
        }
};
</script>
