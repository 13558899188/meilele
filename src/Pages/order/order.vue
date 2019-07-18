<template>
	<div class="order">
		<publicmlltop></publicmlltop>
		<publicguangao></publicguangao>
		<mllheaderbar></mllheaderbar>
		<br />
		<fixedAdr></fixedAdr>
		<choujian></choujian>
		<div class="schead">
			<div class="left">
				<a href="#"><img src="https://static.mllres.com/mll/mpg/flow/i/flow2.png" alt="" /></a>
				<h3>确定订单</h3>
			</div>
			<div class="right"></div>
		</div>
		<div class="addres">
			<div class="addresH">
				<span class="adleft">收货地址</span>
				<span class="addr" @click="addzhi">
					<i></i>
					新增收货地址
				</span>
			</div>
			<div class="addresB" >
				<p   @click="addzhi" v-show="!dishow">
					<span class="adr"></span> 添加收货地址
				</p>
				<div class="youhuodizhi" v-show="dishow">
					<span class="icon"></span>
					<span class="txtcolor">寄送至</span>
					<input type="radio">
					<span class="username">{{this.temparr[0].name}}</span>
					<span>{{this.temparr[1].shenfen}}{{this.temparr[2].shixian}}{{this.temparr[3].quxian}}{{this.temparr[5].adress}}</span>
					<span class="useriphone">{{this.temparr[4].iphone}}</span>
				</div>
			</div>
		</div>
		<div class="qingdan">
			<p class="title">商品清单</p>
			<div class="qingdanbox">
				<div class="topbox">
					<div class="top">
						<span class="shang">商品</span>
						<span class="jia">单价</span>
						<span class="num">数量</span>
						<span class="pei">配送方式</span>
						<span class="jin">金额</span>
					</div>
				</div>
				<div class="item" v-for="(item,index) in shopList">
					<div class="shangjia">{{item.shangjia}}</div>
					<div class="title">
						<span class="shopimg"><a href="#"><img :src="item.imgurl" alt=""></a></span>
						<span class="shoptitle">{{item.title}}</span>
						<span class="kong"></span>
						<span class="pri">¥{{item.pri+'.00'}}</span>
						<span class="num">1个</span>
						<span class="xuanz">
							<select name="" id="">
								<option value="0">选择配送方式</option>
							</select>
						</span>
						<span class="msum">¥{{item.pri+'.00'}}</span>
					</div>
					<div class="goupub">
						<div class="youhui">
							<div class="youhuiit"><span class="jiaicon"></span>使用优惠卷</div>
							<div class="youhuiit"><span class="jiaicon"></span>使用乐币/金币抵扣</div>
						</div>
						<div class="service">
							<div clsss="theme" style="display: flex;">
								<span class="liuyan">给卖家留言：</span>
								<div class="liuyanbox">
									<textarea id="inputbox" cols="31" rows="4">
										
									</textarea>
									<span class="texts" style="display: block;width: 243px;;line-height: 24px;">温馨提示：请您确认好下单商品的尺寸是否可以上楼、进门、摆放。</span>
								</div>
							</div>
							<div class="sersel">
								<span class="helpicon"></span>服务方式：
								<a href="#">快递到家</a>
								<a href="#">物流点自提</a>
							</div>
							<div class="youhuinum">￥0</div>
						</div>
						<div class="countlist">
							<div class="countlistbox">
								<p class="shopnum">1件商品</p>
								<p class="alljin">总金额（含运费）：<span class="numcol">¥{{item.pri}}</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fuwuhao">
			<span class="fh">服务码</span>
			<div class="fulist">
				<span class="numc">2</span>件商品，总商品金额：<span class="allnum">¥{{alljin}}</span>
			</div>
		</div>
		<div class="ordernfo">
			<div class="order">
				<div class="orderT">
					<p>实付款：<span class="numcolor">¥{{alljin}}</span></p>
					<p>寄送至：<span>{{this.temparr[1].shenfen}}{{this.temparr[2].shixian}}{{this.temparr[3].quxian}}{{this.temparr[5].adress}}</span></p>
					<p>收件人：<span>{{this.temparr[0].name}}</span></p>
				</div>
				<div class="orderB">
					请选择商品的配送方式
					<button type="submit" @click="tijiao">提交订单</button>
				</div>
			</div>
		</div>
		<div class="shouhuodizhi" v-show="ishow">
			<div class="yudzbox">
				<div class="yhdzHead">
					<span>收货人信息</span>
					<span class="guanbi" @click="guanbi">X</span>
				</div>
				<div class="yhdzb">
					<p><span class="left"><i>*</i>收货人姓名 : </span><input type="text" v-model="username" @blur="yzname"><span class="yanzcolor" v-show="disname">只能输入2-15字，可以使用汉字、字母、数字</span></p>
					<p><span class="left"><i>*</i>所在地区 : </span><select name="" id="" v-model="shenfen"  @change="dizhi1">
					<option value="">请选择</option>
					<option value="广东省">广东省</option>
					<option value="湖南省">湖南省</option>
					<option value="广西省">广西省</option>
					<option value="江西省">江西省</option>
					<option value="福建省">福建省</option>
					<option value="云南省">云南省</option>
					<option value="贵州省">贵州省</option>
					<option value="湖北省">湖北省</option>
					<option value="江苏省">江苏省</option>
					<option value="浙江省">浙江省</option>
					<option value="上海市">上海市</option>
					</select>
					<select name="" id=""  v-model="shixian"  @blur="dizhi2">
					<option value="">请选择</option>
					<option value="广州市">广州市</option>
					<option value="深圳市">深圳市</option>
					<option value="东莞市">东莞市</option>
					<option value="惠州市">惠州市</option>
					<option value="珠海市">珠海市</option>
					<option value="中山市">中山市</option>
					<option value="佛山市">佛山市</option>
					<option value="清远市">清远市</option>
					<option value="汕头市">汕头市</option>
					<option value="茂名市">茂名市</option>
					<option value="湛江市">湛江市</option>
					</select>
					<select name="" id=""  v-model="quxian" @blur="dizhi3">
					<option value="">请选择</option>
					<option value="南山区">南山区</option>
					<option value="福田区">福田区</option>
					<option value="宝安区">宝安区</option>
					<option value="龙华区">龙华区</option>
					<option value="罗湖区">罗湖区</option>
					<option value="盐田区">盐田区</option>
					<option value="光明区">光明区</option>
					<option value="大鹏区">大鹏区</option>
					<option value="坪山区">坪山区</option>
					<option value="龙岗区">龙岗区</option>
					</select><span class="yanzcolor">请选择</span></p>
					<p><span class="left"><i>*</i>详细地址 : </span>{{this.shenfen}}{{this.shixian}}{{this.quxian}}<input type="text" v-model="adress" @blur="yzdizhi"><span class="yanzcolor" v-show="disdizhi">只能输入5-60字，不能全部为数字或字母或特殊字符</span></p>
					<p><span class="left"><i>*</i>手机号码 : </span><input type="text" v-model="iphone" @blur="yziphone"><span class="yanzcolor" v-show="disipho">请输入正确的11位手机号</span></p>
					<p><span class="left">备用电话 ：</span><input type="text" v-model="beiyongi"></p>
					<p><span class="left">电子邮箱 ：</span><input type="text" v-model="youxiang"><span>用来接收订单提醒邮件，便于您及时了解订单状态</span></p>
					<p><span class="left"></span><input type="submit" value="保存收货人信息" class="baocun" @click="baocund"></p>
				</div>
			</div>
		</div>
		<footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';

	import publicmlltop from '../../components/publicmlltop';
	import publicguangao from '../../components/publicguangao';
	import mllheaderbar from '../../components/mll-header-bar';
	import itemlogoSearch from '../../components/itemlogoSearchInput';
	import SearchNavbar from '../../components/SearchNavbar';
	import credr from '../../components/publicredr';
	import fixedAdr from '../../components/fixedAdr';
	import choujian from '../../components/choujian';
	import footerIcon from '../../components/footerIcon';
	import footerHelp from '../../components/footerHelp';
	import footerExtend from '../../components/footerExtend';

	export default {
		name: 'order',
		data(){
			return{
				shopList:[],
				alljin:0,
				iphone:'',
				adress:'',
				quxian:'',
				shixian:'',
				shenfen:'',
				username:'',
				ishow:false,
				dishow:false,
				disname:false,
				disipho:false,
				disdizhi:false,
				disxuanz:false,
				temparr:[
					{name:this.username},
					{shenfen:this.shenfen},
					{shixian:this.shixian},
					{quxian:this.quxian},
					{iphone:this.iphone},
					{adress:this.adress},
					{beiyongi:this.beiyongi},
					{youxiang:this.youxiang}
				],
				beiyongi:'',
				youxiang:''
			}
		},
		components: {
			publicmlltop,
			publicguangao,
			mllheaderbar,
			fixedAdr,
			choujian,
			footerIcon,
			footerHelp,
			footerExtend
		},
		mounted(){
			var str = window.sessionStorage.getItem('xcart');
            this.shopList =JSON.parse(str);
            this.alljin=0;
            for(var i=0;i<this.shopList.length;i++){
            	this.alljin+=parseInt(this.shopList[i].pri);
            }
		},
		methods:{
			guanbi(){
				this.ishow=false;
				this.dishow=true;
				this.iphone="";
				this.adress="";
				this.quxian="";
				this.shixian="";
				this.shenfen="";
				this.username="";
			},
			addzhi(){
				this.ishow=true;
				this.dishow=false;
			},
			yzname(){
				var reg=/^[\u4e00-\u9fa5A-Za-z0-9]{2,15}$/;
				if(reg.test(this.username)){
					this.disipho=false;
				}else{
					this.disname=true;
				}
			},
			yziphone(){
				var reg = /^1[356789]\d{9}$/;
				if(reg.test(this.iphone)){
					this.disipho=false;
				}else{
					this.disipho=true;
				}
			},
			yzdizhi(){
				var reg = /^[\d\\u4e00-\u9fa5\w]{5,60}$/;
				if(reg.test(this.adress)){
					this.disdizhi=false;
				}else{
					this.disdizhi=true;
				}
			},
			dizhi1(){
				if(this.shenfen){
					this.disxuanz=false;
				}else{
					this.disxuanz=true;
				}
			},
			dizhi2(){
				if(this.shixian){
					this.disxuanz=false;
				}else{
					this.disxuanz=true;
				}
			},
			dizhi3(){
				if(this.quxian){
					this.disxuanz=false;
				}else{
					this.disxuanz=true;
				}
			},
			baocund(){
				this.ishow=false;
				this.dishow=true;
				this.temparr[0].name=this.username;
				this.temparr[1].shenfen=this.shenfen;
				this.temparr[2].shixian=this.shixian;
				this.temparr[3].quxian=this.quxian;
				this.temparr[4].iphone=this.iphone;
				this.temparr[5].adress=this.adress;
				this.temparr[6].beiyongi=this.beiyongi;
				this.temparr[7].youxiang=this.youxiang;
			},
			tijiao(){
				this.$router.push('/pay');
			}
		}
	};
</script>

<style lang="less" scoped="scoped">
	.order {
		font-size: 12px;
		.schead {
			width: 1200px;
			margin: 30px auto 20px;
			line-height: 52px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				line-height: 52px;
				display: flex;
				a {
					display: block;
					width: 160px;
					line-height: 52px;
				}
				h3 {
					margin-top: 28px;
					margin-left: 20px;
					line-height: 24px;
					font-weight: 400;
					font-size: 22px;
					color: #555;
				}
			}
			.right {
				width: 520px;
				height: 44px;
				background: url('https://static.mllres.com/mll/mpg/flow/i/flow_step.png?20150104') 0 -45px no-repeat;
			}
		}
		.addres {
			width: 1200px;
			height: 186px;
			margin: 0 auto 40px;
			.addresH {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 37px;
				span {
					display: block;
				}
				.adleft {
					font-size: 16px;
					font-weight: 400;
					font-family: 'Microsoft Yahei';
					color: #555;
				}
				.addr {
					color: #e62318;
					line-height: 37px;
					cursor: pointer;
					i {
						display: inline-block;
						width: 9px;
						height: 9px;
						margin-top: 14px;
						margin-right: 3px;
						vertical-align: top;
						background: url('https://static.mllres.com/mll/mpg/flow/i/flow_pre_checkout_new.png') no-repeat 0 0;
					}
				}
			}
			.addresB {
				width: 100%;
				text-align: center;
				border: 1px solid #ddd;
				p {
					display: inline-block;
					line-height: 139px;
					font-size: 16px;
					color: #e62318;
					cursor: pointer;
					.adr {
						display: inline-block;
						width: 21px;
						height: 21px;
						margin-right: 5px;
						background: url('https://static.mllres.com/mll/mpg/flow/i/flow_pre_checkout_new.png') no-repeat 0 -60px;
						vertical-align: middle;
					}
				}
				.youhuodizhi{
					display: flex;
					align-items: center;
					line-height: 48px;
					background: #fefaf1;
					padding: 0 30px;
					.icon{
						display: inline-block;
						width: 12px;
						height: 16px;
						margin-right: 5px;
						background: url('https://static.mllres.com/mll/mpg/flow/i/flow_pre_checkout_new.png') no-repeat -15px 0;
					}
					.txtcolor{
						color: #e62318;
						margin-right: 6px;
					}
					.username{
						margin-right: 10px;
					}
					.useriphone{
						margin-left: 10px;
					}
				}
			}
		}
		.qingdan {
			width: 1200px;
			margin: 0 auto;
			font-family: 'Microsoft Yahei';
			color: #555;
			font-size: 16px;
			.title {
				line-height: 37px;
			}
			.qingdanbox {
				width: 100%;
				.topbox {
					.top {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 12px;
						color: #676767;
						background: #eee;
						line-height: 40px;
						.shang {
							width: 572px;
							padding-left: 25px;
						}
						.jia {
							width: 119px;
						}
						.num {
							width: 83px;
						}
						.pei {
							width: 261px;
						}
						.jin {
							width: 130px;
						}
					}
				}
				.item {
					margin-top: 20px;
					font-size: 12px;
					margin-bottom: 20px;
					.shangjia {
						padding-left: 16px;
						font-size: 14px;
						font-weight: 700;
						color: #333;
						line-height: 40px;
					}
					.title {
						border: 1px solid #ddd;
						height: 127px;
						width: 100%;
						display: flex;
						justify-content: center;
						padding-top: 30px;
						box-sizing: border-box;
						.shopimg {
							width: 147px;
							a {
								display: block;
								width: 121px;
								height: 70px;
								margin: 0 auto;
								img {
									width: 119px;
									height: 68px;
									border: 1px solid #ddd;
								}
							}
						}
						.shoptitle {
							width: 272px;
							line-height: 24px;
							padding-right: 80px;
							box-sizing: border-box;
						}
						.kong {
							width: 178px;
							color: #777;
						}
						.pri {
							width: 119px;
						}
						.num {
							width: 83px;
							color: #666;
						}
						.xuanz {
							width: 261px;
							select {
								width: 110px;
								height: 25px;
								border: 1px solid #ddd;
								color: #777;
							}
						}
						.msum {
							width: 130px;
							text-align: right;
							box-sizing: border-box;
							padding-right: 25px;
						}
					}
					.goupub {
						width: 100%;
						background: #f8f8f8;
						padding: 0px 16px 0;
						box-sizing: border-box;
						color: #777;
						.youhui {
							display: flex;
							align-items: center;
							height: 60px;
							.youhuiit {
								padding: 0 20px;
								cursor: pointer;
								.jiaicon {
									display: inline-block;
									width: 13px;
									height: 13px;
									margin-top: 2px;
									margin-right: 6px;
									vertical-align: top;
									background: url('https://static.mllres.com/mll/mpg/flow/i/flow_pre_checkout_new.png') no-repeat -80px 0;
								}
							}
						}
						.service {
							height: 116px;
							width: 100%;
							display: flex;
							border-top: 1px solid #eee;
							border-bottom: 1px solid #eee;
							padding: 15px 0;
							overflow: hidden;
							.sersel {
								width: 566px;
								padding-left: 30px;
								display: flex;
								align-items: center;
								position: relative;
								top: -44px;
								.helpicon {
									display: inline-block;
									width: 14px;
									height: 14px;
									margin-top: 2px;
									margin-right: 5px;
									vertical-align: top;
									background: url('https://static.mllres.com/mll/mpg/flow/i/flow_pre_checkout_new.png') no-repeat -42px 0;
								}
								a {
									display: inline-block;
									position: relative;
									padding: 5px;
									border: 1px solid #ccc;
									margin-right: 5px;
									line-height: 12px;
									vertical-align: middle;
									background-color: #fff;
									overflow: hidden;
									color: #777;
									cursor: pointer;
									&:first-of-type {
										margin: 0 8px 0 8px;
									}
								}
							}
							.youhuinum {
								font-weight: bold;
								color: #e62318;
							}
						}
						.countlist {
							overflow: hidden;
							.countlistbox {
								padding: 8px 0;
								width: 252px;
								float: right;
								p {
									line-height: 26px;
									.numcol {
										font-size: 16px;
										font-weight: bold;
										color: red;
									}
								}
							}
						}
					}
				}
			}
		}
		.fuwuhao {
			width: 1200px;
			margin: 0 auto;
			padding: 12px;
			height: 30px;
			display: flex;
			justify-content: space-between;
			color: #777;
			.fulist {
				.numc {
					color: red;
				}
				.allnum {
					display: inline-block;
					width: 97px;
					text-align: right;
				}
			}
			.fh {
				cursor: pointer;
				margin-right: 5px;
				height: auto;
				line-height: 30px;
				font-size: 14px;
				color: #666;
			}
		}
		.ordernfo {
			width: 1200px;
			margin: 10px auto 80px;
			height: 184px;
			text-align: right;
			overflow: hidden;
			.order {
				overflow: hidden;
				height: 184px;
				width: 450px;
				float: right;
				.orderT {
					width: 450px;
					height: 142px;
					border: 1px solid red;
					box-sizing: border-box;
					padding-right: 24px;
					padding-top: 20px;
					p {
						font-size: 16px;
						color: #333;
						line-height: 28px;
						.numcolor{
							font-size: 22px;
							color: #e62318;
							font-weight: bold;
						}
					}
				}
				.orderB{
					color: #555;
					line-height: 40px;
					button{
						display: inline-block;
					    width: 154px;
					    height: 40px;
					    line-height: 40px;
					    text-align: center;
					    font-size: 20px;
					    color: #fff;
					    background: #e62318;
					    border: none;
					    cursor: pointer;
					}
				}
			}
		}
		.shouhuodizhi{
			position: fixed;
			top: 0px;
			padding-top: 70px;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.5);
			font-family: 'Microsoft Yahei';
			color: #555;
			.yudzbox{
				width: 960px;
				height: 410px;
				box-sizing: border-box;
				margin: 0 auto;
				border: 5px solid rgba(200,200,200,.5);
				background: #fff;
				.yhdzHead{
					line-height: 40px;
					font-size: 16px;
					font-weight: 400;
					display: flex;
					justify-content: space-between;
					background: #F1F1F1;
					padding: 0 15px;
					.guanbi{
						font-size: 10px;
						cursor: pointer;
					}
					
				}
				
				.yhdzb{
					padding: 15px 15px 0px;
					color: #333;
					p{
						line-height: 50px;
						display: flex;
						align-items: center;
						.left{
							width: 120px;
							text-align: right;
							margin-right: 4px;
							i{
								color: #e62318;
								padding: 0 4px;
							}
						}
						input{
							line-height: 24px;
							height: 24px;	
							outline: none;
							margin-right: 6px;
							margin-left: 2px;
							border: 1px solid #777;
						}
						.baocun{
							background: #EE660B;
							color: #fff;
							border: none;
							height: 24px;
							line-height: 24px;
							padding: 0 6px;
							border-radius: 4px;
							cursor: pointer;
						}
						select{
							outline: none;
							line-height: 24px;
							height: 24px;
							margin-right: 8px;
						}	
						&:last-of-type{
							margin-top: 10px;
						}
						.yanzcolor{
							color:#e62318;
						}
					}
				}
			}
		}
	}
    
</style>