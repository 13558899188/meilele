<template>
	<div class="swiper-container">
		<div class="swiper-wrapper" >    <!--@mouseenter="isshow" @mouseleave="isHide"-->
			<div class="swiper-slide"  v-for="(item2,index2) in receive.bannerCon" :key='index2'>   
				<a href="">
					<img :src="item2.bannerImg" />
					<div class="bannerimg_name">
						<span class="imgName_tit">{{item2.BImgTit}}</span>
						<p class="imgName_price">
							<span>{{item2.BImgTxt}}</span><span>{{item2.BImgPrice | format("￥")}}</span>
						</p>
					</div>
				</a>
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

		<!-- 如果需要导航按钮 -->
		<div :class="{'swiper-button-prev':navigationShow}"></div>
		<div :class="{'swiper-button-next':navigationShow}"></div>

	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default {
		props: {
			receive: {
				type: Object,
				default: function() {}
			},
			navigationShow:{type:Boolean,default:true}  //是否需要前进后退按钮
		},
//		data(){
//			return{
//				navigationShow:false
//			}
//		},
		filters:{
			format:function(val,arg1){
				return `${arg1}${val}`;
			}
		},
		mounted() {
			var mySwiper = new Swiper('.swiper-container', {
				loop: true, // 循环模式选项
				autoplay: {
					delay: 1000,

				},
				effect: 'fade',
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
				},
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			})			
		},
		methods:{
			isshow(){
				console.log(111);
				this.navigationShow = true;
			},
			isHide(){
				console.log(222);
				this.navigationShow = false;
			}
		}

	}
</script>

<style lang='less' scoped="scoped">
	.swiper-container {
		width: 681px;
		height: 383px;
		overflow: hidden;
		position: relative;
		.bannerimg_name {
			position: absolute;
			bottom: 40px;
			left: 50%;
			transform: translateX(-50%);
			width: 260px;
			height: 80px;
			padding-top: 10px;
			box-sizing: border-box;
			background: rgba(255, 255, 255, .8);
			text-align: center;
			.imgName_tit {
				display: inline-block;
				height: 35px;
				line-height: 35px;
				color: #333;
				font-size: 20px;
				border-bottom: dashed 1px #333;
			}
			.imgName_price {
				font-size: 14px;
				color: #666;
				span:last-of-type {
					padding-left: 5px;
					color: red;
				}
			}
		}
		.swiper-pagination-bullet {
			width: 10px;
			height: 10px;
			border-radius: 50%;
		}
		.swiper-pagination-bullet-active {
			background: rgba(255, 255, 255, .8);
		}
		.swiper-button-prev {
			width: 30px;
			height: 60px;
			background: rgba(0, 0, 0, .4);
			left: 0;
			transform: translateY(-25%);
		}
		.swiper-button-next {
			width: 30px;
			height: 60px;
			background: rgba(0, 0, 0, .4);
			right: 0;
			transform: translateY(-25%);
		}
	}
</style>