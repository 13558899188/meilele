<template>
	<div class="shoppCart">
		<publicmlltop></publicmlltop>
		<publicguangao></publicguangao>
		<mllheaderbar></mllheaderbar>
		<br />
		<fixedAdr></fixedAdr>
		<choujian></choujian>

		<div class="shoppCartbox">
			<div class="scbTop">
				<a href="#">全部商品2</a>
				<a href="#">降价商品0</a>
			</div>
			<ul class="scbtitle">
				<li><input type="checkbox"  v-model="allcheck" @click="quanxuan"/></li>
				<li>全选</li>
				<li>商品</li>
				<li>单价</li>
				<li>数量</li>
				<li>金额</li>
				<li>操作</li>
			</ul>
			<div class="scbitem" v-for="(item,index) in shopList">
				<div class="scbitemTop">
					<input type="checkbox" v-model="item.checkx" @click="fenxuan(index)"/>
					<a href="#">{{item.shangjia}}</a>
					<button>客服</button>
				</div>
				<div class="scbitemBody">
					<div class="tou"></div>
					<div class="scbic">
						<div class="shuru"><input type="checkbox" v-model="item.checkx" @click="fenxuan(index)"/></div>
						<a href="#" class="aimg">
							<img :src="item.imgurl" alt="" />
						</a>
						<div class="title">
							<p>{{item.title}}</p>
							<span class="byt">包邮</span>
						</div>
						<div class="stype">
							<p>类型：1.5/1.8米床用</p>
							<p>颜色：似水流年</p>
						</div>
						<div class="youhuipri">
							<p>¥{{item.pri}}</p>
							<span>不参加优惠活动</span>
						</div>
						<div class="snum">
							<span class="jian" @click="jianshao(index)">-</span>
							<input type="text" v-model="item.shopsl"/>
							<span class="add" @click="zengjia(index)">+</span>&nbsp;套
						</div>
						<div class="spri">¥{{item.pri*item.shopsl}}</div>
						<div class="delshop">
							<span class="shanchu" @click="delshop(index)">删除</span>
						</div>
					</div>
				</div>
			</div>
			<div class="linaxi">
				<input type="checkbox"  v-model="allcheck" @click="quanxuan"/>
				<button>客服</button>
			</div>
			<div class="cart-extra ">
				<div class="left">
					<input type="checkbox" v-model="allcheck" @click="quanxuan"/>
					<ul>
						<li class="all">全选</li>
						<li @click="delshan">删除选中商品</li>
						<li>移入收藏夹</li>
						<li>清除失效商品</li>
					</ul>
				</div>
				<div class="right" @click="xiad">
					<span class="yixuan">
						已选择<i class="numc">{{num}}</i>件商品<i class="icon"></i>
					</span>
					<span class="zongjia">
						总价(不含费用)：{{alljin+".00"}}<i class="znumc"></i>
					</span>
					<span  class="xiadan" @click="xiad">去下单</span>
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
		name: 'shoppCart',
		data(){
			return{
				allcheck:false,
				shopList:[],
				num:0,
				alljin:0,
				templist:[]
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
		methods:{
			quanxuan(){
			   this.num=0;
			   this.alljin=0;
               this.allcheck=!this.allcheck;
			   if(this.allcheck){
				   this.allcheck=true
				    for(var i =0;i<this.shopList.length;i++){
				   		this.num+=this.shopList[i].shopsl;
				   		this.shopList[i].checkx=true;
						this.alljin+=this.shopList[i].shopsl*this.shopList[i].pri
				   	}
			   }else{
				   this.allcheck=false
				    for(var i =0;i<this.shopList.length;i++){
				   		this.shopList[i].checkx=false;
				   	}
			   }    
			},
			fenxuan(index){
				this.num=0;
				this.alljin=0;
                this.shopList[index].checkx=!this.shopList[index].checkx;
				 for(var i =0;i<this.shopList.length;i++){
					if(this.shopList[i].checkx){
						this.num+=this.shopList[i].shopsl;
						this.alljin+=this.shopList[i].shopsl*this.shopList[i].pri
					}
				}
			},
			zengjia(index){
				this.num=0;
				this.alljin=0;
                this.shopList[index].shopsl+=1;
                var v = JSON.stringify(this.tempList);
				window.sessionStorage.setItem('cart',v);
				for(var i =0;i<this.shopList.length;i++){
					if(this.shopList[i].checkx){
						this.num+=this.shopList[i].shopsl;
						this.alljin+=this.shopList[i].shopsl*this.shopList[i].pri
					}
				}
			},
			jianshao(index){
				this.num=0;
				this.alljin = 0;
                if(this.shopList[index].shopsl<=1){
                	this.shopList[index].shopsl=1;
                }else{
                	this.shopList[index].shopsl-=1;
                }
                var v = JSON.stringify(this.tempList);
				window.sessionStorage.setItem('cart',v);
				for(var i =0;i<this.shopList.length;i++){
					if(this.shopList[i].checkx){
						this.num+=this.shopList[i].shopsl;
						this.alljin+=this.shopList[i].shopsl*this.shopList[i].pri
					}
				}
			},
			delshop(index){
				this.num=0;
				this.alljin = 0;
				this.shopList.splice(index,1);
				var v = JSON.stringify(this.tempList);
				window.sessionStorage.setItem('cart',v);
				for(var i =0;i<this.shopList.length;i++){
					this.num+=this.shopList[i].shopsl;
					this.alljin+=this.shopList[i].shopsl*this.shopList[i].pri
				}
			},
			delshan(){
				if(this.allcheck){
					this.shopList=[];
					var v = JSON.stringify(this.tempList);
					window.sessionStorage.setItem('cart',v);
					return;
				}else{
					for(var i=0;i<this.shopList.length;i++){
						if(this.shopList[i].checkx){
							this.shopList.splice(i,1);
						}
					}
					var v = JSON.stringify(this.tempList);
					window.sessionStorage.setItem('cart',v);
				}
			},
			xiad(){
				console.log(1111);
				this.templist=[];
				for(var i=0;i<this.shopList.length;i++){
					if(this.shopList[i].checkx){
						this.templist.push(this.shopList[i]);
						var v = JSON.stringify(this.templist);
						window.sessionStorage.setItem('xcart',v);
						this.$router.push('/order');
					}
				}
			}
		},
		mounted() {
			this.shopList=[];
			var str = window.sessionStorage.getItem('cart');
				this.shopList =JSON.parse(str);
	            this.num=0;
	            this.alljin=0;
		}
	}
</script>

<style lang="less" scoped="scoped">
	.shoppCart {
		.shoppCartbox {
			width: 1200px;
			margin: 20px auto;
			.scbTop {
				width: 100%;
				line-height: 30px;
				font-size: 16px;
				padding-top: 11px;
				a {
					color: #555;
					display: inline-block;
					border-bottom: 2px solid transparent;
					padding: 0 6px;
					&:last-of-type {
						margin-left: 20px;
					}
					&:first-of-type {
						border-bottom: 2px solid #e62318;
					}
				}
			}
			.scbtitle {
				width: 100%;
				display: flex;
				line-height: 40px;
				background: #EEEEEE;
				font-size: 12px;
				color: #676767;
				li {
					list-style: none;
					text-align: center;
					&:first-of-type {
						width: 73px;
						input {
							vertical-align: -3px;
						}
					}
					&:nth-of-type(2) {
						width: 80px;
						text-align: left;
					}
					&:nth-of-type(3) {
						width: 385px;
					}
					&:nth-of-type(4) {
						width: 160px;
					}
					&:nth-of-type(5) {
						width: 164px;
					}
					&:nth-of-type(6) {
						width: 176px;
					}
					&:nth-of-type(7) {
						width: 130px;
					}
				}
			}
			.scbitem {
				margin-bottom: 20px;
				.scbitemTop {
					line-height: 66px;
					display: flex;
					align-items: center;
					padding-left: 30px;
					input {
						vertical-align: -2px;
					}
					a {
						font-size: 14px;
						color: #333;
						font-weight: bold;
						margin: 0 20px;
					}
					button {
						height: 24px;
						width: 68px;
						border-radius: 12px;
						border: none;
						background: #f96b6f url('https://static.mllres.com/mll/mpg/flow/i/flow_cart_bg_new.png') no-repeat 7px -16px;
						cursor: pointer;
						color: #fff;
						padding-left: 14px;
					}
				}
				.scbitemBody {
					width: 100%;
					border: 1px solid #ccc;
					border-top: 1px solid #aaa;
					height: 169px;
					.tou {
						border-bottom: 1px solid #ccc;
						height: 36px;
						width: 100%;
						overflow: hidden;
					}
					.scbic {
						height: 131px;
						width: 100%;
						box-sizing: border-box;
						display: flex;
						padding-top: 16px;
						font-size: 13px;
						.shuru {
							width: 73px;
							text-align: center;
						}
						a {
							display: inline-block;
							width: 150px;
							height: 82px;
							text-align: center;
							img {
								width: 121px;
								height: 80px;
								border: 1px solid #ccc;
							}
						}
						.title {
							width: 185px;
							color: #555;
							p {
								line-height: 17px;
							}
							.byt {
								display: inline-block;
								margin-top: 3px;
								padding: 1px 3px;
								background: #f96b6f;
								color: #fff;
								text-align: center;
								line-height: 16px;
								white-space: nowrap;
							}
						}
						.stype {
							color: #999;
							width: 120px;
							margin-right: 10px;
							p {
								line-height: 16px;
							}
						}
						.youhuipri {
							width: 160px;
							color: #333;
							text-align: center;
							span {
								display: inline-block;
								width: 118px;
								padding-left: 4px;
								padding-right: 16px;
								border: none;
								outline: 0;
								height: 18px;
								line-height: 16px;
								appearance: none;
								-webkit-appearance: none;
								-moz-appearance: none;
								text-align: center;
								font-size: 12px;
								color: #f96b6f;
								border: 1px solid #f96b6f;
								margin-top: 6px;
							}
						}
						.snum {
							width: 180px;
							display: flex;
							justify-content: center;
							line-height: 20px;
							color: #999;
							.jian {
								border: 1px solid #ccc;
								width: 20px;
								height: 20px;
								line-height: 20px;
								border-right: none;
								text-align: center;
								cursor: pointer;
							}
							.add {
								border: 1px solid #ccc;
								height: 20px;
								width: 20px;
								line-height: 20px;
								border-left: none;
								text-align: center;
								cursor: pointer;
							}
							input {
								width: 40px;
								height: 18px;
								text-align: center;
								outline: none;
							}
						}
						.spri {
							width: 160px;
							text-align: center;
							font-weight: 700;
							color: #555;
						}
						.delshop {
							width: 123px;
							color: #FFF;
							text-align: center;
							.shanchu {
								display: inline-block;
								width: 40px;
								height: 18px;
								line-height: 18px;
								background: #f96b6f;
								cursor: pointer;
							}
						}
					}
				}
			}
			.linaxi {
				line-height: 66px;
				display: flex;
				align-items: center;
				padding-left: 30px;
				input {
					vertical-align: -2px;
				}
				button {
					height: 24px;
					width: 68px;
					border-radius: 12px;
					border: none;
					background: #f96b6f url('https://static.mllres.com/mll/mpg/flow/i/flow_cart_bg_new.png') no-repeat 7px -16px;
					cursor: pointer;
					color: #fff;
					padding-left: 14px;
					margin-left: 20px;
				}
			}
			.cart-extra{
				line-height: 60px;
				width: 100%;
				background: #eee;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #666;
				font-size: 12px;
				margin-top: 20px;
				margin-bottom: 60px;
				.left{
					width: 361px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					ul{
						width: 319px;
						display: flex;
						li{
							list-style: none;
							margin-right: 20px;
							cursor: pointer;
							&:last-of-type{
								margin-right: 0;
							}
							&:hover{
								color: #E62318;
							}
						}
					}
					input{
						margin-left: 30px;
						margin-right: 6px;
					}

				}
				.right{
					width: 450px;
				    line-height:60px;
				    text-align: right;
				    color: #666;
				    .xiadan{
						display: inline-block;
				    	width: 120px;
				    	height: 100%;
				    	background: #e62318;
				    	color: #fff;
				    	font-size: 20px;
						text-align: center;
				    	border: none;
						cursor: pointer;
				    }
				    .zongjia{
				    	display: inline-block;
				    	width: 200px;
				    	text-align: center;
				    	.znumc{
				    		font-size: 20px;
				    		color: #e62318;
				    		font-style: normal;
				    	}
				    }
				    .yixuan{
				    	
				    	.numc{
				    		font-style: normal;
				    		font-weight: bold;
				    		color: #e62318;
				    		font-size: 15px;
				    		padding: 0 4px 0 2px;
				    		vertical-align: -1px;
				    	}
				    	.icon{
				    		display: inline-block;
						    width: 9px;
						    height: 5px;
						    margin-top: 4px;
						    margin-left: 4px;
						    vertical-align: top;
						    background: url('https://static.mllres.com/mll/mpg/flow/i/flow_cart_bg_new.png') no-repeat -47px 0;
						    vertical-align: 3px;
						    margin-left: 10px;
				    	}
				    }
				}
			}
		}
	}
</style>