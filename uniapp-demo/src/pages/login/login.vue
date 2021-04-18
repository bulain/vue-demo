<template>
	<view class="content">
		<image class="logo" src="@/static/logo.png"></image>
		<uni-forms ref="form" :value="formData" :rules="formRules">
			<uni-forms-item label="账号" name="username">
				<uni-easyinput type="text" v-model="formData.username" placeholder="请输入账号" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>
			<button type="primary" @click="submit">登录</button>
		</uni-forms>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					username: "",
					password: ""
				},
				formRules: {
					username: {
						rules: [{
								required: true,
								errorMessage: '请输入账号',
							},
							{
								minLength: 3,
								maxLength: 20,
								errorMessage: '账号长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					password: {
						rules: [{
								required: true,
								errorMessage: '请输入密码',
							},
							{
								minLength: 8,
								maxLength: 30,
								errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
				}
			};
		},
		methods: {
			submit() {
				this.$refs.form.submit().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 50rpx auto 50rpx auto;
	}
</style>
