<template>
	<div class="bannerSwiper">
		<!--由于整个项目可能存在多个轮播图，一般会传入一个轮播图唯一id-->
		<div :class="swriperId">
			<div class="swiper-wrapper">				
				<slot name='swiper-con'></slot>				
			</div>
			<!-- 如果需要分页器 -->
			<div :class="{'swiper-pagination':paginationShow}"></div>
			<!-- 如果需要导航按钮 -->
			<div :class="{'swiper-button-prev':navigationShow,btnStyle:true}"></div>
			<div :class="{'swiper-button-next':navigationShow,btnStyle:true}"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css';
	export default {
		name: 'banner',
		props:{
			swriperId:{type:String,default:''},//唯一标识
			loopShow:{type:Boolean,default:true},// 循环模式选项
			autoplayShow:{type:Boolean,default:true},//是否自动轮播
			effectType:{type:String,default:'fade'},//  轮播效果
			paginationShow:{type:Boolean,default:true},//是否显示分页器
			paginationType:{type:String,default:'bullets'},//分页器样式
			navigationShow:{type:Boolean,default:false},//是否显示前进后退按钮	
//			delayTime:{type:number,default:2000}//自动切换的时间间隔
		},
		mounted() {
			var mySwiper = new Swiper('.'+this.swriperId, {
				loop: this.loopShow, // 循环模式选项
				effect:this.effectType,
				autoplay: { //自动轮播
					type:this.autoplayShow,
					delay: 2000
//					delay:this.delayTime
				},
				
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',//显示分页器
					type:this.paginationType  //分页器样式
				},

				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}				
			})
		}
	}
</script>

<style lang='less' scoped="scoped">

	.bannerSwiper {
		margin: 0 auto;
		width: 1190px;
		height: 400px;
		overflow: hidden;
		position: relative;
		
		.swiper-slide a{
			display: block;
			width: 100%;
			/*img {
				width: 100%;
			}*/
		} 
		
		
		.swiper-pagination-bullet {
			width: 10px;
			height: 10px;
			border: 2px solid #fff;
			border-radius: 50%;
		}
		.swiper-pagination-bullet-active {
			background: #fff;
		}
		.swiper-button-prev{
			width: 30px;
			height: 60px;
			background: rgba(0,0,0,.2);
			left: 0;
			transform: translateY(-25%);
		}
		.swiper-button-next{
			width: 30px;
			height: 60px;
			background: rgba(0,0,0,.2);
			right: 0;
			transform: translateY(-25%);
		}
	}
	
	
	
</style>