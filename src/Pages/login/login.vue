<template>
	<div id="box">
		<div class="width">
			<!--大盒子-->
			<div class="topimg"></div>
			<!--top广告图-->
			<div class="leftimg">
				<!--美乐乐商标图-->
				<router-link to="/index"><div class="fanhui">返回首页|帮助中心</div></router-link>
			</div>
			<div class="among">
				<!--中间部分-->
				<div class="login">
					<!--登录框部分-->
					<div class="text" @click="logan()" :id="{ span: fa }"><a href="#">手机号登录/注册</a></div>
					<div class="text1" @click="logan2()" :id="{ span: gr }"><a href="#">账号登录</a></div>
					<div class="shift">
						<br><br><br>
						<div id="radio" v-show="fa">
							<span class="iphtishi" v-show="iphshow">
								<i class="tishiicon"></i>你输入的手机和验证码不匹配，是否忘记，<a href="#">去找回</a>
							</span>
							<div class="phone">
								<!--账号部分-->
								<input type="text" v-model="userPhone" :placeholder="yang" @blur="delect()" @focus="xiong()" />
							</div>
							<div class="password">
								<!--密码部分-->
								<input type="text" v-model="userYzm" :placeholder="qian" @blur="html()" @focus="name()" />
								<div class="code">
									<!--获取验证码专区-->
									<span class="yzmbtn" v-if="show" @click="getCode">获取短信验证码</span>
									<span v-else="!show" class="yzmnum">{{ count }} s</span>
								</div>
							</div>
							<div class="click-login">
								<!--button提交按钮部分-->
								<div><a href="JavaScript:;" @click="denglu">登录/注册</a></div>
							</div>

						</div>
					</div>

					<div id="radior" v-show="gr">
						<span class="iphtishi" v-show="nameshow">
							<i class="tishiicon"></i>你输入的用户名和密码不匹配，是否忘记，<a href="#">去找回</a>
						</span>
						<div class="phone">
							<!--账号部分-->
							<input type="text" :placeholder="oppo" v-model="username" @blur="end()" @focus="padn()" />
						</div>
						<div class="password">
							<!--密码部分-->
							<input type="password" :placeholder="mima" @blur="bmima" @focus="fmima" v-model="userPwd" />
						</div>
						<a href="#" class="wangji">忘记密码</a>`
						<div class="click-login">
							<!--button提交按钮部分-->
							<div><a href="JavaScript:;" @click="denglu">登录/注册</a></div>
						</div>
						<!--<div class="code">  <!--获取验证码专区-->
						<!--<button type="submit">获取短信验证码</button>
	    	</div>-->
					</div>

					<div class="third">
						<!--第三方登录部分-->
						<div class="icon"></div>
						<div class="fize">微信登录</div>
						<div class="icon2"></div>
						<div class="fize">APP扫码</div>
						<div class="icon3"></div>
						<div class="fize">QQ登录</div>
					</div>
				</div>
			</div>
		</div>
		<footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
	</div>
</template>
<script>
import footerIcon from '../../components/footerIcon';
import footerHelp from '../../components/footerHelp';
import footerExtend from '../../components/footerExtend';
export default {
	data() {
		return {
			show: true,
			count: '',
			timer: null,
			userPwd: '', //用户密码
			username: '', //用户名
			userYzm: '', //用户输入的验证码
			userPhone: '', //用户手机号码
			tr: true,
			err: '',
			fa: true,
			gr: false,
			yang: '手机号',
			qian: '短信验证码',
			oppo: '邮箱/用户名/已验证手机',
			mima: '密码',
			userDate: [],
			iphshow:false,
			nameshow:false
		};
	},
	components: {
		footerIcon,
		footerHelp,
		footerExtend
	},
	methods: {
		logan: function() {
			this.fa = true;
			this.gr = false;
		},
		logan2: function() {
			this.gr = true;
			this.fa = false;
		},
		xiong: function() {
			this.yang = '';
			this.iphshow = false;
			this.nameshow = false;
		},
		delect: function() {
			this.yang = '手机号';
		},
		html: function() {
			this.qian = '短信验证码';
		},
		name: function() {
			this.qian = '';
			this.iphshow = false;
			this.nameshow = false;
		},
		end: function() {
			this.oppo = '邮箱/用户名/已验证手机';
		},
		padn: function() {
			this.oppo = '';
			this.iphshow = false;
			this.nameshow = false;
		},
		bmima() {
			this.mima = '密码';
		},
		fmima() {
			this.mima = '';
			this.iphshow = false;
			this.nameshow = false;
		},
		denglu() {
			var reg = /^1[3456789]\d{9}$/;
			var namereg = /^[a-z-A-Z]{1}([a-z-A-Z0-9]|[._]){4,19}$/;
			for (var i = 0; i < this.userDate.length - 1; i++) {
				var arrtemp = this.userDate[i]
					.slice(2)
					.slice(0, -2)
					.replace(/"/g, '')
					.split(',');
				var denglu = 0;
				for (var t = 0; t < arrtemp.length; t++) {
					var arr = arrtemp[t].split(':');
					if (reg.test(this.userPhone) && this.userPhone == arr[1] && this.userYzm == '147258') {
						sessionStorage.uphone = this.userPhone;
						this.userPhone = '';
						this.userYzm = '';
						this.$router.push('/detail');
						return;
					} else if (namereg.test(this.username) && this.username == arr[1] || this.userPwd == arr[1]) {
						denglu++;
					}else{
						this.iphshow=true;
						this.nameshow=true;
					}
				}
				if (denglu == 2) {
					sessionStorage.uname = this.username;
					this.username = '';
					this.userPwd = '';
					this.$router.push('/detail');
				}else{
					this.iphshow=true;
					this.nameshow=true;
				}
			}
		},
		getCode() {
			const TIME_COUNT = 60;
			if (!this.timer) {
				this.count = TIME_COUNT;
				this.show = false;
				this.timer = setInterval(() => {
					if (this.count > 0 && this.count <= TIME_COUNT) {
						this.count--;
					} else {
						this.show = true;
						clearInterval(this.timer);
						this.timer = null;
					}
				}, 1000);
			}
		}
	},
	mounted() {
		if(sessionStorage.userObj){
			this.userDate = sessionStorage.userObj.slice(9).split(',,');
		}else{
			this.userDate=''
		}
	}
};
</script>
<style scoped="scoped">
* {
	margin: 0px;
	padding: 0px;
	text-decoration: none;
}
.width {
	width: 100%;
	height: 740px;
}
.topimg {
	width: 100%;
	height: 50px;
	float: left;
	background-image: url(../../assets/images/1559782394598440707.jpg);
	background-repeat: no-repeat;
	background-position: 50% 1%;
	background-color: rgb(254, 178, 146);
}
.leftimg {
	width: 100%;
	height: 140px;
	background-image: url(../../assets/images/logo2.png);
	background-repeat: no-repeat;
	background-position: 2% 85%;
	cursor: pointer;
}
.leftimg a {
	display: block;
	color: #333;
}
.leftimg div:nth-last-child(1) {
	float: right;
	font-size: 10px;
	line-height: 140px;
	cursor: pointer;
}
.among {
	width: 100%;
	height: 602px;
	background-color: rgb(230, 35, 24);
	background-image: url(../../assets/images/1559784220139710312.png);
	background-repeat: no-repeat;
	background-position: 11% 35%;
}
.login {
	width: 360px;
	height: 458px;
	float: right;
	background-color: rgb(255, 255, 255);
	margin-top: 67px;
	overflow: hidden;
	text-align: center;
}
.login .text a {
	width: 180px;
	height: 30px;
	border-right: 1px solid rgb(221, 221, 221);
	float: left;
	line-height: 30px;
	color: rgb(136, 136, 136);
	margin-top: 20px;
}
.login .text1 a {
	width: 178px;
	height: 30px;
	border-left: 1px solid rgb(221, 221, 221);
	float: right;
	line-height: 30px;
	color: rgb(136, 136, 136);
	margin-top: 20px;
}

.phone input {
	width: 282px;
	height: 40px;
	color: rgb(153, 153, 153);
	outline: none;
}
.password{
	margin-bottom: 16px;
	position: relative;
}
.password input {
	width: 282px;
	height: 40px;
	margin-top: 28px;
	color: rgb(153, 153, 153);
	outline: none;
}
.wangji{
	display: block;
	padding: 16px 42px 0;
	font-size: 13px;
	color: #777;
	text-align: right;
}
.click-login{
	margin-top: 20px;
}
.click-login div {
	width: 306px;
	background-color: rgb(230, 35, 24);
	border-radius: 2px;
	margin-left: 26px;
	margin-top: 8px;
}
.click-login div a {
	margin-top: 10px;
	line-height: 42px;
	font-size: 18px;
	color: rgb(255, 255, 255);
	display: block;
}
.code{
	position: absolute;
	right: 44px;
	top: 50%;
}
.code .yzmbtn,.code .yzmnum {
	display: inline-block;
	width: 122px;
	text-align: center;
	box-sizing: border-box;
	background-color: rgb(240, 240, 240);
	border: 1px solid rgb(240, 240, 240);
	border-radius: 4px;
	color: rgb(51, 51, 51);
	cursor: pointer;
	font-size: 14px;
	padding: 3px 6px;
}
.third {
	width: 360px;
	height: 50px;
	margin-top: 7px;
	display: flex;
	justify-content: space-around;
	cursor: pointer;
}
.third .icon3 {
	width: 30px;
	height: 30px;
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 50px;
	background-image: url(../../assets/images/service-icon.png);
	background-repeat: no-repeat;
	background-position: 70.6% 2.5%;
	background-color: rgb(94, 204, 248);
	background-size: 1700% 1300%;
	border-radius: 50px;
	margin-top: 11px;
}
.third .icon2 {
	width: 30px;
	height: 30px;
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 50px;
	background-image: url(../../assets/images/public.sprite.png);
	background-repeat: no-repeat;
	background-position: 48.6% 32.1%;
	background-color: rgb(94, 204, 248);
	background-size: 1522% 2055%;
	border-radius: 50px;
	margin-top: 11px;
}
.third .icon {
	width: 30px;
	height: 30px;
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 50px;
	background-image: url(../../assets/images/service-icon.png);
	background-repeat: no-repeat;
	background-position: 97.2% 2.5%;
	background-color: rgb(41, 207, 115);
	background-size: 1546% 1264%;
	border-radius: 50px;
	margin-top: 11px;
}
.fize {
	font-size: 10px;
	margin-top: 17px;
	margin-left: -33px;
}
#radio {
	width: 360px;
	height: 400px;
}
#radior {
	width: 360px;
	height: 284px;
	margin-top: -225px
}
.shift {
	width: 360px;
	height: 280px;
	margin-top: 10px;
}
#span a {
	color: red;
}
.iphtishi{
	display: inline-block;
	text-align: center;
	width: 286px;
	box-sizing: border-box;
	background: #fef2f2;
    color: #e62318;
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    border: 1px solid #e62318;
	margin-bottom: 6px;
	margin-top: 10px;
}
.iphtishi .tishiicon{
		background: url('https://static.mllres.com/mll/mpg/login/i/allPuzzle.png') -156px -30px no-repeat;
		width: 15px;
		height: 15px;
		vertical-align: middle;
		margin: 5px 5px 6px 0;
		display: inline-block;
}
.iphtishi a{
	color: #4a92f5;
}
</style>
