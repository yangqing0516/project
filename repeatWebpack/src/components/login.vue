<template>
	<div class="login">
		<h2>登陆页面</h2>
		<form action="">
			<p>
				<label for="">用户名：</label>
				<input type="text" v-model="username" />
			</p>
			<p>
				<label for="">密码：</label>
				<input type="password" v-model="password" />
			</p>
			<p>
				<label for="checkbox">是否记住密码:</label>
				<input type="checkbox" id="checkbox" v-model="isRemeber" />
			</p>
			<p>
				<button :class="cls" @click="goLogin">登陆</button>
				<button>注册</button>
			</p>
		</form>
	</div>
</template>

<script>
	// 引入axios
	import axios from 'axios';
	export default {
		data() {
			return {
				// 定义变量与模板中v-model相对应
				username: '',
				password: '',
				isRemeber: false,
				cls: ''
			}
		},
		methods: {
			goLogin() {
				// 判断此时按钮是否可以点击------？
				if(!this.cls) {
					return;
				}
				// 判断是否记住密码
				if(this.isRemeber) {
					window.localStorage.setItem('account',
						JSON.stringify({
							username: this.username,
							password: this.password
						}).then(res => {
							console.log('res....', res);
							if(res.data.code === 1) {
								window.location = 'http://www.baidu.com'
							} else {
								alert(res.data.msg)
							}
						}).catch(err => {
							console.log('error', err)
						}))
				}
			}
		},
		watch: {
			username () {
				if (this.username && this.password) {
						this.cls = 'active'
				} else {
					this.active = ''
				}
				this.username = this.username.toUpperCase()
			},
			password () {
				if (this.username && this.password){
                    this.cls = 'active'
                }else{
                    this.cls = '';
                }
			}
		},
		mounted() {
			let store = window.localStorage.getItem('account');
            if (store){
                store = JSON.parse(store);
                if (store.username){
                    this.username = store.username;
                    this.password = store.password;
                }
            }
		}
	}
</script>

<style>
	h2 {
		font-size: .3rem;
		font-weight: bolder;
		text-align: center;
		line-height: .4rem;
		font-family: "楷体";
	}
	
	form {
		margin-top: .2rem;
		width: 100%;
		height: auto;
	}
	
	form p {
		padding: .15rem 0;
		border-bottom: 1px solid #ccc;
	}
	
	form p label {
		display: inline-block;
		padding-left: .05rem;
		font-size: .14rem;
	}
	
	form p:nth-of-type(1) label,
	form p:nth-of-type(2) label {
		width: .7rem;
		vertical-align: middle;
	}
	
	form p:nth-of-type(1) input,
	form p:nth-of-type(2) input {
		width: 2rem;
		height: .3rem;
		border: 0;
		border: 1px solid #ccc;
	}
	
	form p:nth-of-type(3) input {
		margin-left: .6em;
		width: .25rem;
		height: .25rem;
		vertical-align: middle;
	}
	
	form p:nth-of-type(4) {
		display: flex;
		justify-content: space-between;
		padding:
	}
	
	form p:nth-of-type(4) button {
		width: 45%;
		height: .4rem;
		font-size: .2rem;
		text-align: center;
		border: 0;
		margin: 0 2.5%;
	}
	
	form p:nth-of-type(4) button:nth-of-type(1) {
		background: skyblue;
	}
	
	form p:nth-of-type(4) button:nth-of-type(2) {
		background: palegreen;
	}
	
	button.active{
        background: lightgreen;
    }
</style>