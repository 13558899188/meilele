<template>
	<div class="footer-help-box">
		<div class="footer-help">
			<ul class="summary">
				<li class="s1">客服热线（9:00-22:00）</li>
				<li class="s2">4000098666</li>
				<li class="s3">
					美乐乐在全国体验店
					<span class="red">133</span>
					家、样板间
					<span class="red">1</span>
					家
				</li>
				<li class="s4">
					<a href="#">
						<i class="coord"></i>
						查看全国体验店
					</a>
				</li>
				<li class="s4">
					<a href="#">
						<i class="mobile"></i>
						免费发送到手机
					</a>
				</li>
			</ul>
			<dl class="article">
				<div class="articlelist" v-for="(item,index) in helpList" :key="index">
					<dt >{{item.itemTxt}}</dt>
					<dd v-for="(item1,index) in item.group">
						<a href="#">{{item1.itemCon}}</a>
					</dd>
				</div>
				<div class="weixin">
					<span>官方微信</span>
					<img src="../assets/images/erweima.jpg"/>
				</div>
			</dl>
		</div>
	</div>
</template>
<script>
	export default{
		name:"footerHelp",
		data(){
			return{
				helpList:[
				{itemTxt:"关于美乐乐",group:[
				{itemCon:"公司简介"},
				{itemCon:"媒体聚焦"},
				{itemCon:"体验馆"},
				{itemCon:"诚聘英才"},
				{itemCon:"招商加盟"},
				{itemCon:"联系我们"}
				]},
				{itemTxt:"新手指南",group:[
				{itemCon:"注册新用户"},
				{itemCon:"会员级别"},
				{itemCon:"金币说明"},
				{itemCon:"乐币说明"},
				{itemCon:"订购家具流程"},
				{itemCon:"体验馆购买指导"}
				]},
				{itemTxt:"配送安装",group:[
				{itemCon:"收货指南"},
				{itemCon:"一站式置家服务"},
				{itemCon:"家具体积估算表"}
				]},
				{itemTxt:"售后服务",group:[
				{itemCon:"如何申请退款"},
				{itemCon:"维修补件说明"},
				{itemCon:"订单保价"},
				{itemCon:"30天无忧退换货"},
				{itemCon:"建材保修政策"},
				{itemCon:"家具保修"}
				]},
				{itemTxt:"购物保障",group:[
				{itemCon:"正品保证"},
				{itemCon:"注册协议"},
				{itemCon:"隐私保护"},
				{itemCon:"免责声明"}
				]}
				]
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.footer-help-box{
		width: 100%;
		background: #f8f8f8;
    	padding: 35px 0 54px 0;
    	height: 177px;
    	font-size: 12px;
    	.footer-help{
    		max-width: 1460px;
    		margin: 0 auto;
    		height: 177px;
    		display:flex;
    		justify-content: space-around;
    		.summary{
    			width: 240px;
    			text-align: left;
    			background: url("https://static.mllres.com/mll/common/footer/i/footer.png") no-repeat 14px -125px;
    			background-size: 240px auto;
    			li{
    				list-style: none;
    				a{
    					text-decoration: none;
    				}
    				.red{
    					color: red;
    				}
    			}
    			.s1{
    				font-size: 14px;
    				color: #000;
    				line-height: 19px;
    			}
    			.s2{
    				font-size: 20px;
				    color: #e62318;
				    margin: 5px 0;
    			}
    			.s3{
    				color: #999;
    				margin-bottom: 30px;
    			}
    			.s4{
    				margin-bottom: 10px;
    				a{
    					display: inline-block;
					    color: #e62318;
					    border: 1px solid #e62318;
					    width: 106px;
					    height: 24px;
					    text-align: center;
					    line-height: 24px;
					    padding-left: 10px;
					    position: relative;
					    .coord{
					    	position: absolute;
					    	top: 50%;
					    	left: 4px;
					    	transform: translateY(-50%);
					    	display: inline-block;
					    	height: 14px;
					    	width: 11px;
					    	background: url('https://static.mllres.com/mll/common/header/nav/i/nav.png') no-repeat 0px -38px;
					    }
					    .mobile{
					        position: absolute;
					    	top: 50%;
					    	left: 4px;
					    	transform: translateY(-50%);
					    	display: inline-block;
					    	height: 14px;
					    	width: 11px;
					    	background: url('https://static.mllres.com/mll/common/header/nav/i/nav.png') no-repeat 0px -24px;
					    }
    				}
    			}
    		}
    		.article{
    		    height: 177px;
    		    display: flex;
    		    .articlelist{
    		    	width: 150px;
    		    	dt{
    		    		color: #444;
					    font-size: 14px;
					    padding: 3px 0 5px;
					    text-align: left;
    		    	}
    		    	dd{
    		    		display: block;
					    margin-top: 9px;
					    text-align: left;
					    a{
					    	text-decoration: none;
					    	color: #999;
					    	&:hover{
					    		color: red;
					    	}
					    }
    		    	}
    		    }
    		    .weixin{
    		    	span{
    		    		display: block;
    		    		color: #444;
						font-size: 14px;
						padding: 3px 0 5px;
						text-align: left;
    		    	}
    		    	img{
    		    		height: 96px;
    		    		width: 96px;
    		    		margin-top: 10px;
    		    	}
    		    }
    		}
    	}
	}
</style>