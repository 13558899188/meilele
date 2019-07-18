<template>
	<div class="paybox">
		<publicmlltop></publicmlltop>
		<publicguangao></publicguangao>
		<mllheaderbar></mllheaderbar>
		<div class="schead">
			<div class="left">
				<a href="#"><img src="https://static.mllres.com/mll/mpg/flow/i/flow2.png" alt="" /></a>
			</div>
			<div class="right"></div>
		</div>
		<div class="contbox">
			<div class="cont">
				<div class="dingdan">
					<div class="ddleft">
						<span class="icon"></span>
						<div class="iconright">
							<p class="stron">订单提交成功！</p>
							<p>在线支付订单编号：
							<span class="textcolor">
								{{dingdan}}
							</span>
							， 应付款金额：
							<span class="textcolor">¥{{alljin+'.00'}}</span>
							</p>
							<p>
								请您在<span class="textcolor">{{days}}天{{hours}}小时{{minutes}}分{{seconds}}秒</span>内完成支付，否则订单会被自动取消。
							</p>
						</div>
					</div>
				    <div class="ddright">
				    	<p>
				    		<span class="textcolor">订单还需支付： {{alljin+'.00'}} 元</span>
				    	</p>
				    	<div class="queding">
				    		支持部分付款，本次付款金额：
				    		<input type="text"  v-model="alljin" class="shuru"/>元
				    		<input type="submit" value="确定" class="btn"/>
				    	</div>
				    	<p class="fukuanqx">
				    		 <a href="#">订单付款详情</a>                       
				    	</p>
				    </div>
				</div>
				<div class="weixin">
					<div class="wxleft">
						<!--<img src="../../assets/images/pay2.png"/>-->
						<p class="pay-money">付款金额：<i>¥</i><span>{{alljin+'.00'}}</span></p>
					</div>
					<div class="zfright">
						<!--<img src="../../assets/images/pay5.png"/>-->
						<p class="pay-money">付款金额：<i>¥</i><span>{{alljin+'.00'}}</span></p>
					</div>
				</div>
				<img src="../../assets/images/pay3.png" alt="">
				<img src="../../assets/images/pay4.png" alt="">
			</div>
		</div>
		<footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
	</div>
</template>

<script>
	import publicmlltop from '../../components/publicmlltop';
	import publicguangao from '../../components/publicguangao';
	import mllheaderbar from '../../components/mll-header-bar';
	import footerIcon from '../../components/footerIcon';
	import footerHelp from '../../components/footerHelp';
	import footerExtend from '../../components/footerExtend';
	
	export default{
		name:'pay',
		components: {
			publicmlltop,
			publicguangao,
			mllheaderbar,
			footerIcon,
			footerHelp,
			footerExtend
		},
		data(){
			return{
				dingdan:'',
				alljin:0,
				days:'',
				hours:'',
				minutes:'',
				seconds:'',
			}
		},
		mounted(){
			this.dingdan=parseInt(Math.random()*1000000000000);
			var str = window.sessionStorage.getItem('xcart');
            this.shopList =JSON.parse(str);
            this.alljin=0;
            for(var i=0;i<this.shopList.length;i++){
            	this.alljin+=parseInt(this.shopList[i].pri);
            };
            this.countTime();
		},
		methods:{
			countTime: function () {
                //获取当前时间
                var date = new Date();
                var now = date.getTime();
                //设置截止时间
                var endDate = new Date("2019-07-20 23:23:23");
                var end = endDate.getTime();
                //时间差
                var leftTime = end - now;
                //定义变量 d,h,m,s保存倒计时的时间
                if (leftTime >= 0) {
                    var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                    this.days = this.buling(d);
                    var h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                    this.hours = this.buling(h); 
                    var m = Math.floor(leftTime / 1000 / 60 % 60);
                    this.minutes =  this.buling(m);  
                    var s = Math.floor(leftTime / 1000 % 60);
                    this.seconds = this.buling(s); 
                }
                //递归每秒调用countTime方法，显示动态时间效果
                setTimeout(this.countTime, 1000);
          },
          buling(num){
          	return num<=9?'0'+num:num
          }
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	.paybox{
		
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
				background: url('https://static.mllres.com/mll/mpg/flow/i/flow_step.png?20150104') 0 -133px no-repeat;
			}
		}
		.contbox{
			width: 100%;
			background: #f2f2f2;
			padding-bottom: 30px;
			.cont{
				width: 1200px;
				margin: 0 auto;
				text-align: center;
				align-items: center;
				.dingdan{
					width: 980px;
					margin: 0 auto;
					display: flex;
					justify-content: space-between;
					height: 90px;
					font-size: 14px;
					padding-top: 20px;
					.textcolor{
							color: #E62318;
						}
						p{
								line-height: 24px;
							}
					.ddleft{
						display: flex;
						text-align:left;
						.icon{
							display: inline-block;
							height: 60px;
							width: 60px;
							background: url('https://image.meilele.com/images/flow/success.png') no-repeat;
						}
						.iconright{
							
							
							.stron{
								font-size: 16px;
								font-weight: bold;
							}
						}
					}
					.ddright{
						text-align: right;
						p{
							line-height: 26px;
						}
						.fukuanqx{
							
							a{
								color: #2ea7e7;
								font-size: 12px;
							}
						}
						.queding{
							
							.shuru{
								width: 100px;
								height: 20px;
								outline: none;
								text-indent: 1em;
								margin-right: 4px;
							}
							.btn{
								width: 64px;
							    height: 26px;
							    background: #cf000e;
							    text-align: center;
							    line-height: 26px;
							    color: #fff;
							    display: inline-block;
							    margin-left: 10px;
							    border: none;
							    cursor: pointer;
							}
						}
					}
				}
				.weixin{
					width: 980px;
					height: 460px;
					margin: 0 auto 20px;
					display: flex;
					justify-content: space-between;
					font-size: 16px;
					background: #f2f2f2;
					.wxleft{
						background: url(../../assets/images/pay2.png) no-repeat 0 0;
						height:460px;
						width:470px;
						position: relative;
						margin-left:-17px;
						.pay-money{
							position: absolute;
							right: 0px;
							bottom: 9px;
							line-height: 46px;
							background: #fff;
							display: inline-block;
							width: 452px;
	                        i{
	                        	font-style: normal;
	                        	color: red;
	                        	margin: 0 3px;
	                        }
	                        span{
	                        	font-size: 22px;
	                        	font-weight: bold;
	                        	color: red;
	                        }       
						}
					}
					.zfright{
						height:460px;
						width:470px;
						background: url(../../assets/images/pay5.png) no-repeat 0 0;
						position: relative;
						.pay-money{
							line-height: 46px;
							position: absolute;
							right: 0px;
							bottom: 9px;
							line-height: 46px;
							background: #fff;
							display: inline-block;
							width: 452px;
							i{
	                        	font-style: normal;
	                        	color: red;
	                        	margin: 0 3px;
	                        }
	                        span{
	                        	font-size: 22px;
	                        	font-weight: bold;
	                        	color: red;
	                        } 
						}
					}
				}
			}
			
		}
	}
	
</style>