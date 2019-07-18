<template>
	<div class="dapaijiaju">
		<div class="dapai-header">
			<h1 class="dapaiTitle">
				<span>大牌家具</span><span>MAJOR SUIT</span>
			</h1>
			<ul class="dapaiBigList">
				<li :class="{'dapaiActive':index==currIndex}" v-for='(item,index) in navs' :key='index' @mouseenter="showCon(index)">
					{{item}}
				</li>
			</ul>
		</div>
		<div class="dapaiCon">
			<div class="bigCon">
				<div class="dapaiImg-left">
					<a href="#">
						<img :src="dapaiObj.left_img" />
						<div class="leftImg-title">
							<span>{{dapaiObj.left_title_one}}</span>
							<p>{{dapaiObj.left_title_two}}</p>
						</div>
					</a>
				</div>
				<div class="dapaiImg-right">
					<a href="#">
						<img :src="dapaiObj.right_img" alt="" />
						<div class="pinpai-jiedu">
							<span class="jiedu-tit">{{dapaiObj.right_tit_one}}</span>
							<p>{{dapaiObj.right_tit_two}}</p>
						</div>
						<div class="dr-name">
							<p class="first-name">{{dapaiObj.right_dr_firstname}}</p>
							<p class="sec-name">{{dapaiObj.right_dr_secname}}</p>
							<span class="three-txt">{{dapaiObj.right_dr_three_txt}}</span>
							<p class="four-price">
								{{dapaiObj.right_dr_four_price | format('￥')}}<span class="big_Buy">{{dapaiObj.right_dr_buy}}</span>
							</p>
						</div>
					</a>
				</div>
			</div>
			<!--下面的小图片-->
			<div class="daipaiSmallImg">
				<ul class="flexBox">
					<li class="smallItemWarp"  v-for='(item,index) in dapaiObj.dapaismallImgData' @mouseenter='buyshow(index)' @mouseleave='buyhide(index)'>
						<a href="#">
							<img :src="item.small_img" />
							<div class="small-text">
								<p><a href="#">{{item.small_title}}</a></p>
								<p class="small-price"><span>{{item.small_price | format('￥')}} </span><span v-show='seen&&index==buyIndex' class="jiajuBuy">{{item.small_buy}}</span></p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'dapaijiaju',
		data() {
			return {
				dapaiObj: {},
				currIndex: 0,
				buyIndex:0,
				seen:false,
				smallImgArr: [],
				navs: ['美宜经典', '北欧悠歌', '大牌宜华'],
				dapaijiajuArr: [{
						left_img: "//img003.mllres.com/images/201805/1526012204461251910.jpg",
						left_title_one: "让生活返璞归真",
						left_title_two: "[  原木之韵棉麻沙发  ]",
						right_img: "//image.meilele.com/images/201905/1556653143204492808.jpg",
						right_tit_one: "品牌解读",
						right_tit_two: "来自大自然的馈赠，不添加过多人为的修饰，为家还原天然的气息。温和的木色，舒爽的棉麻，给都市生活带来新方向，与自然更贴近！",
						right_dr_firstname: "EUROPEAN",
						right_dr_secname: "全实木软包床",
						right_dr_three_txt: "让生活更轻",
						right_dr_four_price: "6799",
						right_dr_buy: "立即购买",
						dapaismallImgData: [{
								small_img: "//img001.mllres.com/images/201905/1558659193887359851.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
							}, {
								small_img: "//image.meilele.com/images/201905/1557364465484302256.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
							}, {
								small_img: "//img004.mllres.com/images/201905/1556662641014747021.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
							}, {
								small_img: "//img003.mllres.com/images/201905/1556662759925497423.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
							}
						]
					}, {
						left_img: "//img001.mllres.com/images/201905/1556662394615228135.jpg",
						left_title_one: "让生活返璞归真",
						left_title_two: "[  原木之韵棉麻沙发  ]",
						right_img: "//img003.mllres.com/images/201805/1526012290659691752.jpg",
						right_tit_one: "品牌解读",
						right_tit_two: "来自大自然的馈赠，不添加过多人为的修饰，为家还原天然的气息。温和的木色，舒爽的棉麻，给都市生活带来新方向，与自然更贴近！",
						right_dr_firstname: "EUROPEAN",
						right_dr_secname: "全实木软包床",
						right_dr_three_txt: "让生活更轻",
						right_dr_four_price: "6799",
						right_dr_buy: "立即购买",
						dapaismallImgData: [{
								small_img: "//image.meilele.com/images/201905/1557364594907707083.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						},{
								small_img: "//img001.mllres.com/images/201811/1543517617478577448.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						},{
								small_img: "//image.meilele.com/images/201811/1543517735863105044.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						},{
								small_img: "//img001.mllres.com/images/201905/1557364768440686091.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						}]
					}, {
						left_img: "//img002.mllres.com/images/201905/1558655789839706097.jpg",
						left_title_one: "让生活返璞归真",
						left_title_two: "[  原木之韵棉麻沙发  ]",
						right_img: "//img001.mllres.com/images/201905/1558656160472154467.jpg",
						right_tit_one: "品牌解读",
						right_tit_two: "来自大自然的馈赠，不添加过多人为的修饰，为家还原天然的气息。温和的木色，舒爽的棉麻，给都市生活带来新方向，与自然更贴近！",
						right_dr_firstname: "EUROPEAN",
						right_dr_secname: "全实木软包床",
						right_dr_three_txt: "让生活更轻",
						right_dr_four_price: "6799",
						right_dr_buy: "立即购买",
						dapaismallImgData: [{
								small_img: "//img001.mllres.com/images/201904/1554334246880565608.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						},{
								small_img: "//img004.mllres.com/images/201904/1554334360481217036.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						},{
								small_img: "//image.meilele.com/images/201905/1558659691175617918.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						},{
								small_img: "//img001.mllres.com/images/201905/1557364768440686091.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
						}]
					}],
				bottomImgArr: [{

						dapaismallImgData: [{
								small_img: "//image.meilele.com/images/201905/1557364594907707083.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
							}, {
								small_img: "//image.meilele.com/images/201905/1557364594907707083.jpg",
								small_title: "森林童话实木双人床",
								small_price: 2199,
								small_buy: "立即购买"
							},

						]
					}, {
						dapaismallImgData: [{
							small_img: "//image.meilele.com/images/201905/1557364594907707083.jpg",
							small_title: "复古北美鹅掌楸框架床",
							small_price: "2199",
							small_buy: "立即购买"
						}]
					}
				]			
			}
		},
		filters:{
			format:function(val,arg1){
				return `${arg1}${val}`;   //￥10
			},
		},
		mounted() {
			this.dapaiObj = this.dapaijiajuArr[0];
		},
		methods: {
			showCon(index) {
				this.currIndex = index;
				if(index == 0) {
					this.dapaiObj = this.dapaijiajuArr[0];
				} else if(index == 1) {
					this.dapaiObj = this.dapaijiajuArr[1];
				} else {
					this.dapaiObj = this.dapaijiajuArr[2];
				}
			},
			buyshow(index) {
				this.seen = true;
				this.buyIndex = index;
//				console.log(111)
			},
			buyhide(index){
				this.seen = false;
				this.buyIndex = '';
			}
		}
	}
</script>

<style lang='less'>
	.dapaijiaju {
		max-width: 1190px;
		width: 100%;
		margin: 40px auto 0;
		position: relative;
	}
	
	.dapai-header {
		display: flex;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #333;
		color: #333;
		.dapaiTitle {
			width: 260px;
			font-weight: normal;
			font-size: 18px;
			span:nth-of-type(2) {
				color: #999;
				margin-left: 10px;
			}
		}
		.dapaiBigList {
			display: flex;
			margin-bottom: -1px;
			li {
				width: 80px;
				text-align: center;
				font-size: 14px;
				font-weight: bold;
				color: #333;
				list-style: none;
				cursor: pointer;
			}
			li.dapaiActive {
				border: 1px solid #333;
				border-bottom: 1px solid #fff;
				font-weight: bolder;
				color: black;
			}
		}
	}
	
	.dapaiCon {
		width: 1190px;
		margin-top: 10px;
		.bigCon {
			display: flex;
			height: 433px;
			.dapaiImg-left {
				width: 710px;
				position: relative;
				img {
					width: 100%;
				}
				.leftImg-title {
					position: absolute;
					bottom: 40px;
					left: 50%;
					transform: translateX(-50%);
					width: 240px;
					height: 80px;
					text-align: center;
					background: rgba(255, 255, 255, .8);
					padding: 15px 0;
					box-sizing: border-box;
					span {
						color: #666;
						font-size: 14px;
						border-bottom: 1px dashed #999;
						padding: 5px 0;
					}
					p {
						padding: 5px 0;
						border-bottom: none;
						font-size: 20px;
						color: #333;
						font-weight: bold;
					}
				}
			}
			.dapaiImg-right {
				width: 480px;
				height: 100%;
				position: relative;
				img {
					width: 480px;
					height: 433px;
				}
				.pinpai-jiedu {
					position: absolute;
					top: 120px;
					left: 35px;
					width: 120px;
					color: #fff;
					text-align: center;
					.jiedu-tit {
						display: inline-block;
						height: 25px;
						font-size: 14px;
						border-bottom: 2px solid #fff;
					}
					p {
						margin-top: 10px;
						font-size: 12px;
					}
				}
				.dr-name {
					position: absolute;
					top: 10px;
					left: 170px;
					width: 310px;
					text-align: center;
					.first-name {
						font-size: 48px;
						color: #999;
					}
					.sec-name {
						font-size: 30px;
						color: #666;
					}
					.three-txt {
						font-size: 16px;
						color: #666;
						display: inline-block;
						padding-bottom: 10px;
						border-bottom: 1px solid #666;
					}
					.four-price {
						color: #666;
						font-size: 16px;
						padding: 10px 0;
					}
					.big_Buy {
						padding: 3px 10px;
						color: #fff;
						font-size: 12px;
						background: red;
						border-radius: 20px;
						margin-left: 5px;
					}
				}
			}
		}
	}
	/*.daipaiSmallImg{
	width: 1190px;
	height: 229px;
}*/
.flexBox{
	display: flex;
	height: 229px;
	width: 1190px;
	box-sizing: border-box;
	border-right: 1px solid #ccc;
}
	.smallItemWarp {
		position: relative;
		width: 296px;
		height: 228px;
		border-left: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		list-style: none;
		overflow: hidden;
		img {
			width: 297px;
			height: 228px;
			transition: all 0.3s;
			&:hover{
				transform: translateX(-10px);
			}
		}
		.small-text {
			position: absolute;
			bottom: 30px;
			left: 30px;
			height: 30px;
			color: #666;
			font-size: 14px;
			p {
				margin-top: 5px;	
				a{
					color: #666;
					&:hover{
						color: red;
					}
				}			
			}
			.jiajuSheng{
				color: red;
				border: 1px solid red;
				margin-left: 5px;
			}
			.small-price {
				color: red;
				height: 20px;
				line-height:20px;
			}
			.jiajuBuy{
				display: inline-block;
				height: 20px;
				width: 80px;
				color: #fff;
				background: red;
				text-align: center;
				border-radius: 20px;
			}
		}
	}
</style>