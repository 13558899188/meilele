<template>
	<div class="logo-search">
		<router-link to="/index" href="#" class="logo">
			<img src="../assets/images/logo2.png" alt="">
		</router-link>
		<a href="#" class="ad-position">
			<img src="../assets/images/guixiao.gif" alt="">
		</a>
		<div class="searchbox">
			<form action="" class="search">
				<input type="text" :placeholder="conent" class="searchinput" @focus="fn" @blur="fn2" @keydown.enter="sousuo()">
				<img src="" alt="">
			</form>
			<div class="kuaijie">
				<a href="#" class="hot-shop">美乐乐10元抢半价</a>
				<a href="#">床</a>
				<a href="#">沙发</a>
				<a href="#">餐桌椅</a>
				<a href="#">实木床</a>
				<a href="#" class="hot-shop">床垫大促</a>
				<a href="#">转角沙发</a>
				<a href="#">灯饰</a>
			</div>
			<div class="searchPublic" v-show="ishow">
				<dl class="searchPublicLeft">
					<dt>最近搜索</dt>
					<div class="searchPublicTag">还没搜索记录</div>
				</dl>
				<dl class="searchPublicRight">
					<dt>正在热搜中</dt>
					<dd class="searchPublicitem">
						<a href="#">五一大促销</a>
						<a href="#">皮沙发</a>
						<a href="#">云水瑶系列</a>
						<a href="#">真皮软床</a>
						<a href="#">格调系列</a>
						<a href="#">床垫</a>
						<a href="#">莱克星顿系列</a>
						<a href="#">楠林系列</a>
						<a href="#">实木系列</a>
						<a href="#">简奢·家系列</a>
						<a href="#">弗丽嘉系列</a>
						<a href="#">现代餐桌</a>
						<a href="#">香榭丽舍系列</a>
						<a href="#">北欧床</a>
						<a href="#">轻奢</a>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
 export default{
 	data(){
 		return {
 			ishow:false,
 			conent:"超值组合4件7.5折 > > >"
 		}
 	},
 	methods:{
 		fn(){
 			this.ishow=true;
 			this.conent="";
 		},
 		fn2(){
 			this.ishow=false;
 			this.conent="超值组合4件7.5折 > > >";
 		},
 		sousuo(){
 			this.$router.push('/search')
 		}
 	}
 }
</script>
<style scoped lang="less">
.logo-search{
	max-width: 1200px;
	margin: 0 auto;
	height: 112px;
	display: flex;
	align-items: center;
	font-size: 12px;
	.logo{
		margin-right: 40px;
	}
	.ad-position{
		margin-right: 40px;
	}
	.searchbox{
       background: #f0f0f0;
       width: 490px;
       height: 36px;
       display: flex;
       align-items: center;
       flex-wrap: wrap;
       position: relative;
		.search{
          background: #FF0000;
          .searchinput{
          	width: 390px;
          	height: 30px;
            outline: none;
            border: none;
            color: black;
            background: #fff;
            text-indent: 1em;
            font-size: 14px;
            border: 3px solid #FF0000;
            &::-webkit-input-placeholder{
            	color: rgb(0,0,0);
            	font-size: 13px;
            }
          }
          &:after{
          	position: absolute;
          	right: 0;
          	top: 0;
          	content: "搜 索";
          	display: inline-block;
          	height: 36px;
          	line-height: 36px;
          	font-size: 16px;
          	text-align: center;
          	width: 95px;
          	color: #fff;
          	background: #e62318;
          }
		} 
		.kuaijie{
		   display: flex;
		   width: 100%;
		   line-height: 36px;
		   font-size: 14px;
		   a{
		   	color: #999;
		   	text-decoration: none;
		   	padding-right: 12px;
		   }
		   .hot-shop{
		   	color: #FF6600;
		   }
		}
		.searchPublic{
			position: absolute;
			top: 42px;
			left: 0;
			width: 490px;
			background: #fff;
			display: flex;
			box-sizing: border-box;
			box-shadow: rgba(0,0,0,.1) 0 10px 5px;
			z-index: 1000;
			.searchPublicLeft{
				width: 50%;
				padding-left: 16px;
				border-right:1px solid #ccc;
				color: #999;
				dt{
					text-align: left;
					line-height: 32px;
				}
			   .searchPublicTag{
			   	line-height: 200px;
			   	width: 100%;
			   	text-align: center;
			   }
			}
			.searchPublicRight{
				width: 50%;
				padding-left: 16px;
				dt{
					text-align: left;
					line-height: 32px;
                    color: #999;
				}
				.searchPublicitem{
					margin-top: 6px;
					display: flex;
					flex-wrap: wrap;
					a{
						font-family: '微软雅黑';
					    color: #333;
					    background: #f5f5f5;
					    border-color: #f5f5f5;
					    margin-bottom: 10px;
					    margin-right: 6px;
					    padding: 0 9px;
    					border: solid 1px #ddd;
    					display: inline-block;
					    height: 24px;
					    line-height: 24px;
					    text-decoration: none;
					    &:hover{
					    	color: #fff;
					    	background: #E62318;
					    }
					}
				}
			}
		}
	}
}
</style>