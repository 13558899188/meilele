<template>
	<div class="jiajuBottomWrap">
		<div class="jaijuB-tit">
			<h2>
				<span>美家攻略</span>				
			</h2>
		</div>
		<div class="meijia-text">
			<Banner swriperId="meijia-banner" class='meijialeft'>
				<div slot="swiper-con" class="swiper-slide">
					<a href="">
						<img src="http://img001.mllres.com/images/201608/1469991649765807864.jpg" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="">
						<img src="http://img002.mllres.com/images/201608/1469991742860169642.jpg" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="">
						<img src="http://img003.mllres.com/images/201608/1469991707564277024.jpg" alt="" />
					</a>
				</div>
			</Banner>
			<div class="meijiaRight">
				<h2 class="meijiaTit"><a href="#">创意家居</a></h2>
				<div class="chaungyi">
					<a href="#"><img src="http://img002.mllres.com//images/upload/1(38117).jpg" alt="" /></a>
					<div class="chuangyiRight">
						<a href="#" class="chaungyi-tit">智能水杯品牌介绍_智能水杯哪个牌子好</a>
						<div class="chaungyi-content">
							<a href="#">
								生活中水杯是一个陪伴我们的常用工具，传统的水杯就是玻璃的制品。但是现在都在讲究智能家居，所以水杯也开始发展成了智能水杯。
							</a>
						</div>
					</div>
				</div>
				<ul class="chaungyiList">
					<li>
						<a href="#">[单品导购]</a>
						<a href="#">环保垃圾桶分类有哪些_环保垃圾桶价格介绍</a>
					</li>
					<li>
						<a href="#">[单品导购]</a>
						<a href="#">环保垃圾桶分类有哪些_环保垃圾桶价格介绍</a>
					</li>
					<li>
						<a href="#">[单品导购]</a>
						<a href="#">环保垃圾桶分类有哪些_环保垃圾桶价格介绍</a>
					</li>
					<li>
						<a href="#">[单品导购]</a>
						<a href="#">环保垃圾桶分类有哪些_环保垃圾桶价格介绍</a>
					</li>
					<li>
						<a href="#">[单品导购]</a>
						<a href="#">环保垃圾桶分类有哪些_环保垃圾桶价格介绍</a>
					</li>
					<li>
						<a href="#">[单品导购]</a>
						<a href="#">环保垃圾桶分类有哪些_环保垃圾桶价格介绍</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Banner from './banner.vue'
	export default {
		name: 'meijia',
		components: {
			Banner
		}
	}
</script>

<style lang='less' scoped="scoped">
	.jiajuBottomWrap {
		.meijia-text {
			display: flex;
			justify-content: space-between;
			width: 100%;
			margin-bottom:60px;
			.meijialeft {
				width: 750px;
				img {
					width: 750px;
				}
			}
			.meijiaRight {
				margin-left: 20px;
				width: 440px;
				height: 390px;
				border: 1px solid #ccc;
				padding: 20px;
				box-sizing: border-box;
				a {
					color: #333;
					font-size: 14px;
					&:hover{
						color: red;
					}
				}
				.meijiaTit {
					color: #333;					
					font-weight: normal;
					height: 35px;
					a{
						font-size: 18px;
					}
				}
				.chaungyi {
					display: flex;
					img {
						width: 200px;
					}
					.chuangyiRight {
						margin-left: 20px;
						.chaungyi-tit {
							width: 100%;
							height: 15px;
							display: inline-block;
							overflow: hidden;
						}
						.chaungyi-content {
							margin-top: 10px;
							a {
								font-size: 12px;
							}
						}
					}
				}
				.chaungyiList {
					li {
						margin-top: 10px;
						list-style: none;
					}
				}
			}
		}
	}
</style>