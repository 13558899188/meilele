<template>
	<div class="indexbanner">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide firstb">
					<router-link to="/search"><img src="../assets/images/banner/1533086962642293451.jpg" /></router-link>
				</div>
				<div class="swiper-slide second">
					<router-link to="/search"><img src="../assets/images/banner/1544659092042586498.jpg" /></router-link>
				</div>
				<div class="swiper-slide third">
					<router-link to="/search"><img src="../assets/images/banner/1548136519849614855.jpg" /></router-link>
				</div>
				<div class="swiper-slide fourth">
					<router-link to="/search"><img src="../assets/images/banner/1556417657090487677.jpg" /></router-link>
				</div>
				<div class="swiper-slide sixth">
					<router-link to="/search"><img src="../assets/images/banner/1561169883561418174.jpg" /></router-link>
				</div>
				<div class="swiper-slide seventh">
					<router-link to="/search"><img src="../assets/images/banner/1561312332345645647.jpg" /></router-link>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css';
	export default {
		name: 'indexbanner',
		mounted() {
				var indexbanner = new Swiper('.swiper-container', {
					direction: 'horizontal',
					loop: true, //循环模式选择
					autoplay: true, //可选选项，自动滑动
					effect: 'fade',
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						type: 'bullets'
					}
				})

		}
	}
</script>

<style lang="less" scoped="scoped">
	.swiper-container {
		width: 100%;
		height: 460px;
		.swiper-slide {
			width: 100%;
			height: 460px;
			a {
				display: block;
				width: 100%;
				img {
					width: 1200px;
					height: 460px;
					margin: 0 auto;
					display: block;
				}
			}
		}
		.firstb {
			background: #503A25;
		}
		.second {
			background: #DE3435;
		}
		.third {
			background: #fff;
		}
		.fourth {
			background: #333D1B;
		}
		.sixth {
			background: #2993DD;
		}
		.seventh {
			background: #F1B778;
		}
	}
</style>