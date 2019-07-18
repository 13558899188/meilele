<template>
	<div>
		<div class="dhz">
			<!--大盒子-->
			<div class="top-img">
				<img src="../../assets/images/1559782394598440707.jpg" alt="" />
			</div>
			<div class="left-img">
				<div class="click-img">

				</div>
				<h3>用户注册</h3>
				<div class="item">
					<router-link to="/index">返回首页</router-link>|
					<a href="#">帮助中心</a>
				</div>
			</div>
			<form class="login-box">
				<!--左边input登录框-->
				<div class="one">
					<p>&nbsp;&nbsp;&nbsp;&nbsp;<span>*</span>账户名:<input type="text" v-model="tr" @blur="logan()" :class="{border:active}" /></p>
					<div class="time" v-show="active">用户名可使用字母、汉字、数字、下划线或其组合，4～20个字符，且不能为纯数字</div>
				</div>
				<div class="two">
					<p><span>*</span>设置密码:<input type="password" v-model="one" @blur="logan1()" :class="{border:third}" /></p>
					<div class="fisz-one" v-show="third">6-20位，支持字母、数字或符号的组合，不可单独使用字母、数字或符号</div>
				</div>
				<div class="three">
					<p><span>*</span>确认密码:<input type="password" v-model="coocike" @blur="logan2()" :class="{border:err}" /></p>
					<div class="fisz-two" v-show="err">请确保两次输入的密码一致</div>
				</div>
				<div class="four">
					<p><span>*</span>手机号码:<input type="text" v-model="phone" @blur="logan3()" :class="{border:res}" /></p>
					<div class="fize-foure" v-show="res">请输入手机号码</div>
				</div>
				<div class="five">
					<p>&nbsp;&nbsp;&nbsp;<span>*</span>验证码:<input type="text" v-model="six" @blur="logan4()" /><img src="../../assets/images/1614517.png" v-show="thire" class="errimg"></p>
					<span class="yanzhma"><img :src="yzmqh" @click="qhimg"/></span>
				</div>
				<div class="checkbox">
					<p><input  type="checkbox" v-model="ckeckVal" @click.stop="clickMe"/> 请阅读《
						<a href="#">美乐乐用户注册协议</a>》</p>
				</div>
				<div class="button"  @click="checkForm()">
					<a href="javaScript:;">注册</a>
				</div>
				<div class="qrcode">
					<!--右边扫码登录-->
					<div class="click-button"><span>已注册?</span>
						<router-link to="/login"><button type="submit">登录</button></router-link>
					</div>
					<div class="index">
						<img src="../../assets/images/showqrcode.jpg" />
						<p>微信扫一扫，快速登录</p>
					</div>
					<div class="denlu">
						<p>使用合作账号登录:</p>
						<ul>
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
			</form>
			<div class="gif"><img src="../../assets/images/download.gif" /></div>
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
		data: function() {
			return {
				yzmqh:'',
				imgnum:0,
				zhuceyzm:[
					{urlimg:require('../../assets/images/getCaptcha1.jpg'),val:'fe48'},
					{urlimg:require('../../assets/images/getCaptcha2.jpg'),val:'5yy9'},
					{urlimg:require('../../assets/images/getCaptcha3.jpg'),val:'2475'},
					{urlimg:require('../../assets/images/getCaptcha4.jpg'),val:'7xc3'},
					{urlimg:require('../../assets/images/getCaptcha5.jpg'),val:'89jm'},
					{urlimg:require('../../assets/images/getCaptcha6.jpg'),val:'b6b2'},
					{urlimg:require('../../assets/images/getCaptcha7.jpg'),val:'1xy0'},
					{urlimg:require('../../assets/images/getCaptcha8.jpg'),val:'t22t'},
					{urlimg:require('../../assets/images/getCaptcha9.jpg'),val:'af80'},
					{urlimg:require('../../assets/images/getCaptcha10.jpg'),val:'f1n3'},
					{urlimg:require('../../assets/images/getCaptcha11.jpg'),val:'ma81'},
					{urlimg:require('../../assets/images/getCaptcha12.jpg'),val:'at51'},
					{urlimg:require('../../assets/images/getCaptcha13.jpg'),val:'cm46'},
					{urlimg:require('../../assets/images/getCaptcha14.jpg'),val:'93jh'},
					{urlimg:require('../../assets/images/getCaptcha15.jpg'),val:'90rj'}
				],
				tr: "",
				/*第一个表单*/
				reg: "",
				/*第一个表单*/
				active: false,
				/*第一个表单*/
				one: "",
				/*第二个表单*/
				two: "",
				/*第二个表单*/
				third: false,
				/*第二个表单*/
				coocike: "",
				/*第三个表单*/
				err: false,
				/*第三个表单*/
				phone: "",
				/*第四个表单*/
				iphone: "",
				/*第四个表单*/
				res: false,
				thire: false,
				six: "",
				yanze: [],
				count: 0,
				yztemp: '',
				ckeckVal:false,
				userData:[]
			}
		},
		mounted(){
			this.yzmqh=this.zhuceyzm[0].urlimg;
		},
		components: {
			footerIcon,
			footerHelp,
			footerExtend
		},
		methods: {
			qhimg(){
				this.imgnum = parseInt(Math.random()*15);
				this.yzmqh=this.zhuceyzm[this.imgnum].urlimg;
			},
			logan: function() {
				this.reg = /^[a-z-A-Z]{1}([a-z-A-Z0-9]|[._]){4,19}$/
				if(this.tr == "") {
					this.active = true;
					this.tr="";
					return false;
				} else if(!this.reg.test(this.tr)) {
					this.active = true;
					this.tr="";
					return false;
				} else {
					this.active = false;
					this.yanze.push('a');
				}
				
			},
			logan1: function() {
				this.two = /^[\x21-\x7E]{6,20}$/
				if(this.one == "") {
					this.third = true;
					this.one="";
					return false;
				} else if(!this.two.test(this.one)) {
					this.third = true;
					this.one="";
					return false;
				} else {
					this.third = false;
					this.yanze.push('a');
				}
			},
			logan2: function() {
				if(this.coocike == "") {
					this.err = true;
					this.coocike="";
					return false;
				} else if(!this.coocike == this.one) {
					this.err = true;
					this.coocike="";
					return false;
				} else if(this.coocike == this.one) {
					this.err = false;
					this.yanze.push('a');
				}
			},
			logan3: function() {
				this.iphone = /^1[3456789]\d{9}$/
				if(this.phone == "") {
					this.res = true;
					this.phone="";
					return false;
				} else if(!this.iphone.test(this.phone)) {
					this.res = true;
					this.phone="";
					return false;
				} else {
					this.res = false;
					this.yanze.push('a');
				}
			},
			logan4: function() {
				var  value = this.zhuceyzm[this.imgnum].val;
				if(this.six == value) {
					this.thire = false;
					this.yanze.push('a');
					return true;
				} else {
					this.thire = true;
					this.six="";
					return false;
				}
				
			},
			clickMe(){
				if(!this.ckeckVal){
					this.yanze.push('a');
				}
			},
			checkForm() {
                if(this.yanze.length==6){
                    var userId = 'S'+parseInt(Math.random()*1000000000);
					this.userData.push({usId:userId,username:this.tr,paw:this.one,tel:this.phone});
					var userStr=JSON.stringify(this.userData);  //将数组对象转为字符串的形式
					sessionStorage.userObj=sessionStorage.userObj + userStr+",,";      //将字符号存储到本地
                    this.yanze=[];
                    this.tr='';
                    this.one='';
                    this.coocike='';
                    this.phone='';
                    this.six='';
                    this.ckeckVal=false;
                    this.$router.push('/login');
				}
			}
		}
	}
</script>
<style scoped="scoped">
	a {
		text-decoration: none;
	}
	
	* {
		margin: 0px;
		padding: 0px;
	}
	
	.dhz {
		width: 1349px;
		height: 780px;
		margin: 0 auto;
	}
	
	.top-img {
		width: 1349px;
		height: 50px;
		background: #FEB292;
	}
	
	.top-img img {
		margin: 0 auto;
		display: block;
	}
	
	.left-img {
		width: 1160px;
		height: 116px;
		margin: auto;
	}
	
	.click-img {
		width: 176px;
		height: 72px;
		background-image: url(../../assets/images/logo2.png);
		background-repeat: no-repeat;
		background-position: 1% 1%;
		margin-top: 20px;
	}
	
	.left-img h3 {
		font-size: 25px;
		font-weight: 500;
		display: inline-block;
		width: 300px;
	}
	
	.login-box {
		width: 1190px;
		height: 544px;
		border: 1px solid rgb(215, 215, 215);
		margin: 0 auto;
	}
	
	.qrcode {
		width: 400px;
		height: 400px;
		border-left: 1px solid rgb(221, 221, 221);
		float: right;
		margin-top: -430px;
	}
	
	.one {
		width: 768px;
		height: 57px;
		margin-left: 20px;
		line-height: 57px;
		margin-top: 20px;
	}
	
	.two {
		width: 768px;
		height: 57px;
		margin-left: 20px;
		line-height: 57px;
		margin-top: 20px;
	}
	
	.three {
		width: 768px;
		height: 57px;
		margin-left: 20px;
		line-height: 57px;
		margin-top: 20px;
	}
	
	.four {
		width: 768px;
		height: 57px;
		margin-left: 20px;
		line-height: 57px;
		margin-top: 20px;
	}
	
	.five {
		width: 768px;
		height: 57px;
		margin-left: 20px;
		line-height: 57px;
		margin-top: 20px;
	}
	
	.five .yanzhma {
		width: 80px;
		line-height: 36px;
		display: inline-block;
	}
	
	.five .yanzhma img {
		width: 80px;
		height: 36px;
	}
	
	.one span {
		color: red;
	}
	
	.two span {
		color: red;
	}
	
	.three span {
		color: red;
	}
	
	.four span {
		color: red;
	}
	
	.five span {
		color: red;
	}
	
	.one input {
		width: 308px;
		height: 42px;
		margin-left: 20px;
		cursor: pointer;
		outline: none;
	}
	
	.two input {
		width: 308px;
		height: 42px;
		margin-left: 20px;
		cursor: pointer;
		outline: none;
	}
	
	.three input {
		width: 308px;
		height: 42px;
		margin-left: 20px;
		cursor: pointer;
		outline: none;
	}
	
	.four input {
		width: 308px;
		height: 42px;
		margin-left: 20px;
		cursor: pointer;
		outline: none;
	}
	
	.five input {
		width: 308px;
		height: 42px;
		margin-left: 20px;
		cursor: pointer;
		outline: none;
	}
	
	.one p {
		float: left;
		font-size: 13px;
	}
	
	.two p {
		float: left;
		font-size: 13px;
	}
	
	.three p {
		float: left;
		font-size: 13px;
	}
	
	.four p {
		float: left;
		font-size: 13px;
	}
	
	.five p {
		float: left;
		font-size: 13px;
	}
	
	.five img {
		width: 25px;
		height: 25px;
		position: relative;
		top: 10px;
		cursor: pointer;
		margin-left: 14px;
	}
	.five .errimg{
		margin-left: 14px;
	}
	.time {
		width: 267px;
		height: 42px;
		border: 1px solid rgb(255, 228, 228);
		text-align: left;
		float: right;
		font-size: 12px;
		color: rgb(215, 30, 30);
		margin-right: 100px;
		line-height: 21px;
		background-color: rgb(255, 243, 243);
		margin-top: 8px;
	}
	
	.fisz-one {
		width: 267px;
		height: 42px;
		border: 1px solid rgb(255, 228, 228);
		text-align: left;
		float: right;
		font-size: 12px;
		color: rgb(215, 30, 30);
		margin-right: 100px;
		line-height: 21px;
		background-color: rgb(255, 243, 243);
		margin-top: 8px;
	}
	
	.fisz-two {
		width: 267px;
		height: 42px;
		border: 1px solid rgb(255, 228, 228);
		text-align: left;
		float: right;
		font-size: 12px;
		color: rgb(215, 30, 30);
		margin-right: 100px;
		line-height: 42px;
		background-color: rgb(255, 243, 243);
		margin-top: 8px;
	}
	
	.fize-foure {
		width: 267px;
		height: 42px;
		border: 1px solid rgb(255, 228, 228);
		text-align: left;
		float: right;
		font-size: 12px;
		color: rgb(215, 30, 30);
		margin-right: 100px;
		line-height: 42px;
		background-color: rgb(255, 243, 243);
		margin-top: 8px;
	}
	
	.checkbox {
		width: 190px;
		height: 40px;
		font-size: 12px;
		line-height: 40px;
		margin-left: 95px;
		margin-top: 20px;
	}
	
	.checkbox a {
		font-size: 12px;
	}
	
	.checkbox a:hover {
		color: red;
	}
	
	.checkbox input {
		position: relative;
		top: 3px;
	}
	
	.button {
		width: 308px;
		height: 42px;
		border: 1px solid red;
		background-color: rgb(207, 0, 14);
		margin-left: 94px;
		margin-top: 10px;
		text-align: center;
		cursor: pointer;
	}
	
	.button a {
		line-height: 42px;
		font-size: 15px;
		color: rgb(255, 255, 255);
	}
	
	.index {
		width: 220px;
		height: 315px;
		border-top: 1px solid rgb(221, 221, 221);
		border-bottom: 1px solid red;
		margin-top: 15px;
		margin-left: 95px;
		text-align: center;
	}
	
	.index img {
		width: 120px;
		height: 120px;
		margin-top: 110px;
		cursor: pointer;
	}
	
	.index p {
		font-size: 14px;
	}
	
	.click-button {
		font-size: 13px;
		text-align: center;
		cursor: pointer;
	}
	
	.click-button a {
		display: inline-block;
	}
	
	.click-button button {
		width: 70px;
		height: 32px;
		border: 1px solid rgb(207, 0, 14);
		background-color: rgb(207, 0, 14);
		font-size: 14px;
		line-height: 32px;
		text-align: center;
		color: rgb(255, 255, 255);
		margin-left: 20px;
		cursor: pointer;
	}
	
	.border {
		border: 1px solid red;
		background-color: rgb(255, 243, 243);
	}
	
	.item {
		float: right;
		font-size: 12px;
		vertical-align: 10px;
	}
	
	.item a {
		color: black;
	}
	
	.denlu p {
		color: rgb(153, 153, 153);
		font-size: 12px;
		margin-top: 10px;
		text-align: center;
	}
	
	.denlu li {
		float: left;
		list-style-type: none;
		margin-left: 81px;
		margin-top: 10px;
		cursor: pointer;
	}
	
	.denlu li:nth-last-child(3) {
		width: 28px;
		height: 28px;
		border-radius: 50px;
		background-image: url(../../assets/images/1448734.png);
		background-repeat: no-repeat;
		background-position: 1% 1%;
		background-size: 100% 100%;
	}
	
	.denlu li:nth-last-child(2) {
		width: 28px;
		height: 28px;
		border-radius: 50px;
		background-color: red;
		background-image: url(../../assets/images/1448730.png);
		background-repeat: no-repeat;
		background-position: 1% 1%;
		background-size: 100% 100%;
	}
	
	.denlu li:nth-last-child(1) {
		width: 28px;
		height: 28px;
		border-radius: 50px;
		background-image: url(../../assets/images/1452090.png);
		background-repeat: no-repeat;
		background-position: 1% 1%;
		background-size: 100% 100%;
	}
	
	.gif {
		position: absolute;
		top: 0px;
		right: 0px;
		width: 100px;
		height: 100px;
	}
</style>