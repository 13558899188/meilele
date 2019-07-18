<template>
	<div class="indexRoomWrap">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><img src="../assets/images/livingroomImg/living01.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/images/livingroomImg/living02.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/images/livingroomImg/living03.jpg" /></div>
				<div class="swiper-slide"><img src="../assets/images/livingroomImg/living04.jpg" /></div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
		<!--轮播上的文字-->
		<div class="livingTxt">
			<div class="livingketing">
				<h1>客厅</h1>
				<p>LIVING ROOM</p>
			</div>
			<ul class="ketingList">
				<li v-for="(item,index) in arr" :key="index"><span>{{item}}</span></li>
			</ul>
		</div>
		<ul class="lunboBottom">
			<li v-for="(item,index) in navs" :key="index" @mouseenter="show(index)"><span>{{item}}</span></li>
		</ul>
		<ul class="botListmore">
			<li v-for="(item,index) in obj">
				<div class="imgbox"><img :src="item.img1" /></div>
				<p class="name">{{item.title}}</p>
				<p class="botpic">{{item.price}}</p>
				<span class="botlisheng">{{item.sheng}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css';
	export default {
		data() {
				return {
					arr: ['实木沙发', '布艺沙发', '真皮沙发', '转角沙发', '功能沙发', '沙发床', '实木茶几', '客厅地板', '装饰酒柜', '玄关鞋柜'],
					navs: ["优品推荐", "现代简约", "美式风情", "中式传承"],
					obj: [
						{
							img1:'https://image.meilele.com/images/small/463/width/285/height/285/mode/1/encrypt/2cf680940d293e38aaaa25741ed11ca4/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOmoamftJTxR6LQpeBeBx2K63Gg2SLb+D+SiOl_kWTYuA==.jpg',
							title: '舒适黄牛皮储物功能型转角沙发',
							sheng: '立省1201',
							price: '￥6599'
						},
						{
							img1:'https://image.meilele.com/images/small/136/width/285/height/285/mode/1/encrypt/bf60a8ea63bd8b09c8ae7c41d2e1015e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN1hmGJmJ+zRoA+wOGm0mW+yxKVn+zUzLGzjoQUuWDk5w==.jpg',
							title: '清新双色左右通用转角沙发',
							sheng: '立省900',
							price: '￥5799'
						},
						{
							img1:'https://image.meilele.com/images/small/770/width/285/height/285/mode/1/encrypt/59889e1fe5a5b63874932f61306d144c/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMDm+fsUWqj33HejsRCgu3rGNsyx4Br5QUkH3s5vsAiPA==.jpg',
							title: '简美风纳帕真皮沙发套装',
							sheng: '品质之选',
							price: '￥13509'
						},
						{
							img1:'https://image.meilele.com/images/small/160/width/285/height/285/mode/1/encrypt/28cd147bbab4fb5c207a44a888b5b946/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNC7B68cKF6MFagasc7RK9HUhEDl0UKef5l6RiCwNT2Ig==.jpg',
							title: '巴西进口牛皮五档调节转角沙发',
							sheng: '超值省1509',
							price: '￥7599'
						}
					]
				}
		},
			mounted() {
					var indexroom = new Swiper('.swiper-container', {
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
			},
			methods: {
				show(index) {
					if(index == 0) {
						this.obj = [
						{
							img1:'https://image.meilele.com/images/small/463/width/285/height/285/mode/1/encrypt/2cf680940d293e38aaaa25741ed11ca4/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOmoamftJTxR6LQpeBeBx2K63Gg2SLb+D+SiOl_kWTYuA==.jpg',
							title: '舒适黄牛皮储物功能型转角沙发',
							sheng: '立省1201',
							price: '￥6599'
						},
						{
							img1:'https://image.meilele.com/images/small/136/width/285/height/285/mode/1/encrypt/bf60a8ea63bd8b09c8ae7c41d2e1015e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN1hmGJmJ+zRoA+wOGm0mW+yxKVn+zUzLGzjoQUuWDk5w==.jpg',
							title: '清新双色左右通用转角沙发',
							sheng: '立省900',
							price: '￥5799'
						},
						{
							img1:'https://image.meilele.com/images/small/770/width/285/height/285/mode/1/encrypt/59889e1fe5a5b63874932f61306d144c/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMDm+fsUWqj33HejsRCgu3rGNsyx4Br5QUkH3s5vsAiPA==.jpg',
							title: '简美风纳帕真皮沙发套装',
							sheng: '品质之选',
							price: '￥13509'
						},
						{
							img1:'https://image.meilele.com/images/small/160/width/285/height/285/mode/1/encrypt/28cd147bbab4fb5c207a44a888b5b946/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNC7B68cKF6MFagasc7RK9HUhEDl0UKef5l6RiCwNT2Ig==.jpg',
							title: '巴西进口牛皮五档调节转角沙发',
							sheng: '超值省1509',
							price: '￥7599'
						}
					]
					} else if(index == 1) {
						this.obj =[
						{
							img1:'https://image.meilele.com/images/small/463/width/285/height/285/mode/1/encrypt/2cf680940d293e38aaaa25741ed11ca4/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOmoamftJTxR6LQpeBeBx2K63Gg2SLb+D+SiOl_kWTYuA==.jpg',
							title: '可拆洗储物功能沙发床',
							sheng: '立省700',
							price: '￥3999'
						},
						{
							img1:'https://image.meilele.com/images/small/920/width/285/height/285/mode/1/encrypt/60aaee1f958224e99b73141f1b440de9/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMn1c0U0D3N7qMJ4_mECOMFtiLsi6Ez6tyMEu3qVlR0Cg==.jpg',
							title: '透气棉麻布左右通用沙发',
							sheng: '送包装费',
							price: '￥5388'
						},
						{
							img1:'https://image.meilele.com/images/small/400/width/285/height/285/mode/1/encrypt/e9f1f02b0f2ef8bacde180c55d49b839/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOoAZMACDqyHbCYz4Dduc+xdfU3NHzaNuP7+ibn4yjv5A==.jpg',
							title: '从容有型布艺转角沙发',
							sheng: '立省500',
							price: '￥3599'
						},
						{
							img1:'https://image.meilele.com/images/small/238/width/285/height/285/mode/1/encrypt/45eeadc4e68115befb298654db5299f2/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNOsrWI8V_ZDwKh5gPlj47krhqsCMPWtQBI_M4bZkKCug==.jpg',
							title: '潮流格调黑色钢化玻璃茶几',
							sheng: '',
							price: '￥1699'
						}
					]
					} else if(index == 2) {
						this.obj = [
						{
							img1:'https://image.meilele.com/images/small/380/width/285/height/285/mode/1/encrypt/8e115efb2e66cd77663e6815f611a4c7/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNAskDbmtD_jwOaA_+6ehbL6124OnBf5Lb4KU92EzwNnQ==.jpg',
							title: '简约质感小户型电视柜',
							sheng: '',
							price: '￥1299'
						},
						{
							img1:'https://image.meilele.com/images/small/332/width/285/height/285/mode/1/encrypt/741f5a2a9840f02ac15719272821ffe0/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPXE1uJ_Np0JSsJzZXYSJV_egwGJ8kZIQOSdInzboJwDA==.jpg',
							title: '精美拉扣设计布艺沙发',
							sheng: '立省1090',
							price: '￥7599'
						},
						{
							img1:'https://image.meilele.com/images/small/287/width/285/height/285/mode/1/encrypt/1be22a4f25ba9fe025d53084baa0de97/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMHxz60OK49Mbbngic3haFNUsiogV5qMtoCdxPWjYS+WQ==.jpg',
							title: '带储物箱功能棉麻布沙发套装',
							sheng: '可存储',
							price: '￥8797'
						},
						{
							img1:'https://image.meilele.com/images/small/214/width/285/height/285/mode/1/encrypt/e92ce85a1c017655094f705ec0df3baa/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNPFd01d0F3Qm2TRyCbmuBWFfEZTMhvZPFw0PLWfKAZng==.jpg',
							title: '豪奢典范手工实木雕花沙发套装',
							sheng: '立省3198',
							price: '￥17999'
						}
					]
					} else {
						this.obj = [
						{
							img1:'https://image.meilele.com/images/small/327/width/285/height/285/mode/1/encrypt/279f09e225ac428d2abab2d8519f2192/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPYBrAfbdsn5AH3Y1xnLulvUBkrqg2fIuSy5pS+iNmN4A==.jpg',
							title: '舒适黄牛皮储物功能型转角沙发',
							sheng: '参团价2620',
							price: '￥4299'
						},
						{
							img1:'https://image.meilele.com/images/small/238/width/285/height/285/mode/1/encrypt/38744f32679352fe1de4270df53bb646/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOUYTyXySOZm81BKPNBQtUcCWvE0BcT3XwPTlwk4yfWmQ==.jpg',
							title: '清新双色左右通用转角沙发',
							sheng: '立省1510',
							price: '￥11588'
						},
						{
							img1:'https://image.meilele.com/images/small/213/width/285/height/285/mode/1/encrypt/9dea5d2f63d86c536d3bd4a2bd33351c/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMWl13geDd+XzbNPBRFB2HNI6rhOxtCHXznqyy6N6HCkA==.jpg',
							title: '简美风纳帕真皮沙发套装',
							sheng: '狂省3500',
							price: '￥19399'
						},
						{
							img1:'https://image.meilele.com/images/small/413/width/285/height/285/mode/1/encrypt/a3b6e6f9b362a289caef41184bfc85b6/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHO0YiS0q3vv7Asd5FZXnY_JeNLQo0ZRydx0taNnfmatZg==.jpg',
							title: '巴西进口牛皮五档调节转角沙发',
							sheng: '限时省350',
							price: '￥5799'
						}
					]
					}
				}
			}
	}
</script>
<style lang="less" scoped="scoped">
	.indexRoomWrap {
		width: 1200px;
		margin: 47px auto 0 auto;
		height: 770px;
		position: relative;
		.swiper-container {
			height: 400px;
			width: 1200px;
		}
		.livingTxt {
			position: absolute;
			width: 225px;
			height: 300px;
			background: #fff;
			top: 40px;
			z-index: 10;
			left: 50px;
			text-align: center;
			.livingketing {
				padding: 29px 0;
				font-family: '微软雅黑';
				h1 {
					color: #000;
					font-weight: normal;
					font-size: 36px;
				}
				p {
					color: #000;
					font-size: 12px;
					line-height: 18px;
					font-family: '微软雅黑';
					letter-spacing: 3px;
				}
			}
			.ketingList {
				padding: 0 15px;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li {
					list-style: none;
					cursor: pointer;
					span {
						color: #333;
						margin: 0 0 5px 0;
						display: block;
						width: 90px;
						height: 25px;
						line-height: 25px;
						background: #f5f5f5;
						font-size: 14px;
						font-family: "微软雅黑";
						cursor: pointer;
					}
					span:hover {
						background: #E62318;
						color: #fff;
					}
				}
			}
		}
		.lunboBottom {
			position: absolute;
			z-index: 5;
			display: flex;
			justify-content: space-around;
			align-items: center;
			right: 50px;
			bottom: 370px;
			width: 360px;
			height: 34px;
			line-height: 34px;
			li {
				width: 90px;
				background: #333;
				opacity: 0.8;
				list-style: none;
				cursor: pointer;
				span {
					display: block;
					color: #fff;
					text-align: center;
					font-size: 14px;
					font-family: "微软雅黑";
					cursor: pointer;
				}
			}
			li:hover {
				background: #fff;
				opacity: 1;
				span {
					color: #000;
				}
			}
		}
	}
	
	.botListmore {
		display: flex;
		justify-content: space-between;
		width: 1200px;
		height: 350px;
		margin: 20px auto;
		li {
			width: 285px;
			height: 350px;
			text-align: center;
			position: relative;
			list-style: none;
			cursor: pointer;
			.imgbox{
				width: 285px;
				height: 285px;
				box-sizing: border-box;
				overflow: hidden;
				display:inline-block;
			}
			img {
				width: 285px;
				height: 285px;
				transition: all 1s;
				&:hover{
					transform: scale(1.1);
				}
			}
			.name {
				margin: 16px 0 3px 0;
				color: #333;
				font-size: 14px;
				font-family: "微软雅黑";
			}
			.botpic {
				color: #E62318;
				font-size: 14px;
			}
			.botlisheng {
				position: absolute;
				display: inline-block;
				top: 10px;
				left: 10px;
				background: #ddb788;
				color: #fff;
				font-size: 13px;
				padding: 0 5px;
				border-radius: 2px;
				height: 18px;
				line-height: 18px;
				border: 1px solid #ddb788;
			}
		}
	}
</style>