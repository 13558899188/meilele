<template>
	<div>
		<publicmlltop></publicmlltop>
		<publicguangao></publicguangao>
		<mllheaderbar></mllheaderbar>
		<br />
		<itemlogoSearch></itemlogoSearch>
		<br />
		<SearchNavbar></SearchNavbar>
		<credr></credr>
		<fixedAdr></fixedAdr>
		<choujian></choujian>
		<!--轮播图-->
		<div class="jiajuBannerBox">
			<Banner swriperId="jiajuTopBanner1">
				<div slot="swiper-con" class="swiper-slide">
					<a href="">
						<img src="//img002.mllres.com/images/201812/1544659092042586498.jpg" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="">
						<img src="//img004.mllres.com/images/201905/1558827390322114952.jpg" />
					</a>
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<img src="//img003.mllres.com/images/201808/1533086962642293451.jpg" alt="" />
				</div>
				<div slot="swiper-con" class="swiper-slide">
					<a href="">
						<img src="//img001.mllres.com/images/201906/1560912835611192981.jpg" alt="" />
					</a>
				</div>
			</Banner>
			<jiajuShoppingList></jiajuShoppingList>
		</div>
		<!--大牌家具-->
		<DapaiJiaju>
		</DapaiJiaju>
		<!--时尚现代-->
		<div class="jiajuItemWrap" v-for="(item2,index2) in jiajuData" :key="index2">
			<div class="item-top">
				<jiajuLeftItem :jieshou="item2.leftArr" :class="['bgColor'+index2]">
				</jiajuLeftItem>
				<jiajuBanner :receive="item2.CenterArr">
				</jiajuBanner>
				<jiajuRightItem :rightReceive="item2.rightMsg">
				</jiajuRightItem>
			</div>
			<ul class="jiajuSmallImg">
				<jiajuSmallItem v-for="(item,index) in item2.smallImgArr" :key="index" :myUrl="item.smallImg" :title="item.smallTit" :price="item.smallPrice">
					<span class="shengqian" slot="sheng" v-show='item.xianshi'>{{item.smallShengqian}}</span>
				</jiajuSmallItem>
			</ul>
		</div>

		<cainixihuan></cainixihuan>
		<meijia></meijia>
		<footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
	</div>
</template>

<script>
	import Banner from '../../components/banner.vue'
	import jiajuShoppingList from '../../components/jiajuShoppingList.vue'
	import DapaiJiaju from '../../components/dapaijiaju.vue'
	import jiajuLeftItem from '../../components/jiajuLeftItem.vue'
	import jiajuBanner from '../../components/jiajuBanner.vue'
	import jiajuRightItem from '../../components/jiajuRightItem.vue'
	import jiajuSmallItem from '../../components/jiajuSmallItem.vue'
	import cainixihuan from '../../components/cainixihuan.vue'
	import meijia from '../../components/meijia.vue'
	
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
		name: 'jiaju',
		components: {
			Banner,
			jiajuShoppingList,
			DapaiJiaju,
			jiajuLeftItem,
			jiajuBanner,
			jiajuRightItem,
			jiajuSmallItem,
			cainixihuan,
			meijia,
			publicmlltop,
			publicguangao,
			mllheaderbar,
			itemlogoSearch,
			SearchNavbar,
			credr,
			fixedAdr,
			choujian,
			footerIcon,
			footerHelp,
			footerExtend
		},
		data() {
			return {
				jiajuData: [{
						"leftArr": {
							"left_title1": "时尚现代",
							"left_title2": "MODERN",
							"myImg": "http://img002.mllres.com/images/201607/1467310571346905454.jpg",
							"jiajuType": [{
								"txt": "现代床",
								"myColor": "orange"
							}, {
								"txt": "现代床垫",
								"myColor": "orange"
							}, {
								"txt": "现代沙发",
								"myColor": ""
							}, {
								"txt": "现代餐桌",
								"myColor": ""
							}, {
								"txt": "现代书桌",
								"myColor": "orange"
							}, {
								"txt": "现代衣柜",
								"myColor": ""
							}, {
								"txt": "现代茶几",
								"myColor": ""
							}, {
								"txt": "现代电视柜",
								"myColor": ""
							}]
						},
						CenterArr: {
							"bannerCon": [{
								"bannerImg": "http://img004.mllres.com/images/201708/1504143455954270461.jpg",
								"BImgTit": "小户休闲风百变沙发",
								"BImgTxt": "轻柔麻布超透气 ",
								"BImgPrice": "2599"
							}, {
								"bannerImg": "http://img003.mllres.com/images/201801/1515608685822405646.jpg",
								"BImgTit": "高性价比时尚真皮床",
								"BImgTxt": "惊爆价2199",
								"BImgPrice": "2799"
							}, {
								"bannerImg": "http://image.meilele.com/images/201901/1548291470453331232.jpg",
								"BImgTit": "偶像级头层皮软床",
								"BImgTxt": "超值省500 ",
								"BImgPrice": "2799"
							}]
						},
						rightMsg: {
							"rightImg": "http://img002.mllres.com/images/201612/1480627344956482163.jpg",
							"rightTit": "格调灰•头枕可调绒布沙发",
							"rightSheng": "省700",
							"rightPrice": "2199",
							"xianshi":true
						},
						smallImgArr: [{
							"smallImg": "http://img001.mllres.com/images/201903/1551393486897094998.jpg",
							"smallTit": "澳洲进口牛皮潮座mini",
							"smallShengqian": "省1269",
							"smallPrice": 6599,
							"xianshi":false
						}, {
							"smallImg": "http://img003.mllres.com/images/201904/1554334628059273657.jpg",
							"smallTit": "素雅空间小户型餐厅套装",
							"smallShengqian": "省300",
							"smallPrice": 3999,
							"xianshi":true
						}, {
							"smallImg": "http://img004.mllres.com/images/201905/1557965965596777479.jpg",
							"smallTit": "别致火烧石面板餐厅套装",
							"smallShengqian": "",
							"smallPrice": 3499,
							"xianshi":false
						}, {
							"smallImg": "http://img002.mllres.com/images/201812/1544746785942988417.jpg",
							"smallTit": "天然乳胶独立弹簧床垫",
							"smallShengqian": "省200",
							"smallPrice": 3999,
							"xianshi":true
						}]
					}, {
						"leftArr": {
							"left_title1": "儒雅中式",
							"left_title2": "CHINESE",
							"myImg": "http://img002.mllres.com/images/201607/1467652549187611168.jpg",
							"jiajuType": [{
								"txt": "中式床",
								"myColor": "red"
							}, {
								"txt": "中式床垫",
								"myColor": "red"
							}, {
								"txt": "中式沙发",
								"myColor": ""
							}, {
								"txt": "中式餐桌",
								"myColor": ""
							}, {
								"txt": "中式书桌",
								"myColor": ""
							}, {
								"txt": "中式衣柜",
								"myColor": ""
							}, {
								"txt": "中式茶几",
								"myColor": "red"
							}, {
								"txt": "中式电视柜",
								"myColor": "red"
							}]
						},
						CenterArr: {
							"bannerCon": [{
								"bannerImg": "http://img003.mllres.com/images/201805/1527719229208764882.jpg",
								"BImgTit": "玲珑中国韵小转角沙发",
								"BImgTxt": "轻柔麻布超透气 ",
								"BImgPrice": "2599"
							}, {
								"bannerImg": "http://img003.mllres.com/images/201904/1555787856453271241.jpg",
								"BImgTit": "金丝檀木框架沙发",
								"BImgTxt": "惊爆价2199",
								"BImgPrice": "2799"
							}, {
								"bannerImg": "http://img003.mllres.com/images/201904/1554252967050876115.jpg",
								"BImgTit": "古韵新姿·中式真皮床",
								"BImgTxt": "超值省500 ",
								"BImgPrice": "2799"
							}]
						},
						rightMsg: {
							"rightImg": "http://image.meilele.com/images/201812/1544746961062678261.jpg",
							"rightTit": "进口金丝檀木气质型沙发",
							"rightSheng": "",
							"rightPrice": "2199",
							"xianshi":false
						},
						smallImgArr: [{
							"smallImg": "http://img004.mllres.com/images/201803/1521154762705270952.jpg",
							"smallTit": "返璞归真原生态双人床",
							"smallShengqian": "",
							"smallPrice": 2199,
							"xianshi":false
						}, {
							"smallImg": "http://img001.mllres.com/images/201806/1529637028775372853.jpg",
							"smallTit": "古味生香可伸缩餐厅套装",
							"smallShengqian": "省600",
							"smallPrice": 2199,
							"xianshi":true
						}, {
							"smallImg": "http://img002.mllres.com/images/201905/1557365414900582250.jpg",
							"smallTit": "马来西亚进口油楠木电视柜",
							"smallShengqian": "",
							"smallPrice": 2199,
							"xianshi":false
						}, {
							"smallImg": "http://img001.mllres.com/images/201904/1555011863624264443.jpg",
							"smallTit": "金丝檀木+杨木衣柜",
							"smallShengqian": "",
							"smallPrice": 2199,
							"xianshi":false
						}]
					}, {
						"leftArr": {
							"left_title1": "清新地中海",
							"left_title2": " MEDITERRANEAN",
							"myImg": "http://img003.mllres.com/images/201607/1467310729351314719.jpg",
							"jiajuType": [{
								"txt": "地中海床",
								"myColor": ""
							}, {
								"txt": "地中海床垫",
								"myColor": "blue"
							}, {
								"txt": "地中海沙发",
								"myColor": ""
							}, {
								"txt": "地中海餐桌",
								"myColor": ""
							}, {
								"txt": "地中海书桌",
								"myColor": "blue"
							}, {
								"txt": "地中海衣柜",
								"myColor": "blue"
							}, {
								"txt": "地中海茶几",
								"myColor": ""
							}, {
								"txt": "地中海电视柜",
								"myColor": ""
							}]
						},
						CenterArr: {
							"bannerCon": [{
								"bannerImg": "http://img002.mllres.com/images/201706/1496798480286379825.jpg",
								"BImgTit": "时尚拱形软靠床",
								"BImgTxt": "轻柔麻布超透气 ",
								"BImgPrice": "2599"
							}, {
								"bannerImg": "http://img003.mllres.com/images/201902/1550443062762941285.jpg",
								"BImgTit": "希腊传统蓝沙发组合",
								"BImgTxt": "惊爆价2199",
								"BImgPrice": "2799"
							}, {
								"bannerImg": "http://img002.mllres.com/images/201706/1496798480286379825.jpg",
								"BImgTit": "经典地中海风情双人床",
								"BImgTxt": "超值省500 ",
								"BImgPrice": "2799"
							}]
						},
						rightMsg: {
							"rightImg": "http://img003.mllres.com/images/201904/1555012216469854587.jpg",
							"rightTit": "多格收纳人气趟门衣柜",
							"rightSheng": "省500",
							"rightPrice": "2199",
							"xianshi":true
						},
						smallImgArr: [{
							"smallImg": "http://image.meilele.com/images/201905/1558648926711051212.jpg",
							"smallTit": "高人气进口实木床头柜",
							"smallShengqian": "省500",
							"smallPrice": 2199,
							"xianshi":true
						}, {
							"smallImg": "http://img004.mllres.com/images/201804/1523588390132519606.jpg",
							"smallTit": "迷你海滨风布艺沙发",
							"smallShengqian": "省200",
							"smallPrice": 2199,
							"xianshi":false
						}, {
							"smallImg": "http://img004.mllres.com/images/201810/1539300153753553706.jpg",
							"smallTit": "多格储物上下铺儿童床",
							"smallShengqian": "省200",
							"smallPrice": 2199,
							"xianshi":false
						}, {
							"smallImg": "http://img001.mllres.com/images/201903/1552605159505008671.jpg",
							"smallTit": "经典畅销款品质明星床",
							"smallShengqian": "省200",
							"smallPrice": 2199,
							"xianshi":false
						}]
					}, {
						"leftArr": {
							"left_title1": "田园混搭风",
							"left_title2": "PASTORAL",
							"myImg": "http://img002.mllres.com/images/201607/1467652809491717267.jpg",
							"jiajuType": [{
								"txt": "现代床",
								"myColor": "green"
							}, {
								"txt": "现代床垫",
								"myColor": "green"
							}, {
								"txt": "现代沙发",
								"myColor": ""
							}, {
								"txt": "现代餐桌",
								"myColor": ""
							}, {
								"txt": "现代书桌",
								"myColor": "green"
							}, {
								"txt": "现代衣柜",
								"myColor": ""
							}, {
								"txt": "现代茶几",
								"myColor": ""
							}, {
								"txt": "现代电视柜",
								"myColor": "green"
							}]
						},
						CenterArr: {
							"bannerCon": [{
								"bannerImg": "http://img002.mllres.com/images/201901/1548374468994483565.jpg",
								"BImgTit": "小户休闲风百变沙发",
								"BImgTxt": "轻柔麻布超透气 ",
								"BImgPrice": "2599"
							}, {
								"bannerImg": "http://img001.mllres.com/images/201712/1514422558673235616.jpg",
								"BImgTit": "高性价比时尚真皮床",
								"BImgTxt": "惊爆价2199",
								"BImgPrice": "2799"
							}, {
								"bannerImg": "http://img002.mllres.com/images/201903/1551395032753008846.jpg",
								"BImgTit": "偶像级头层皮软床",
								"BImgTxt": "超值省500 ",
								"BImgPrice": "2799"
							}]
						},
						rightMsg: {
							"rightImg": "http://img002.mllres.com/images/201811/1541965847792962335.jpg",
							"rightTit": "格调灰•头枕可调绒布沙发",
							"rightSheng": "省700",
							"rightPrice": "2199",
							"xianshi":false
						},
						smallImgArr: [{
							"smallImg": "http://img002.mllres.com/images/201803/1521164965171216770.jpg",
							"smallTit": "人气清新韩式田园床",
							"smallShengqian": "",
							"smallPrice": 4899,
							"xianshi":false
						}, {
							"smallImg": "http://img004.mllres.com/images/201902/1550192653334616488.jpg",
							"smallTit": "素白女神床 清新典雅",
							"smallShengqian": "省200",
							"smallPrice": 3199,
							"xianshi":false
						}, {
							"smallImg": "http://img003.mllres.com/images/201812/1544747411793403129.jpg",
							"smallTit": "经典畅销标准弹簧床垫",
							"smallShengqian": "",
							"smallPrice": 2899,
							"xianshi":false
						}, {
							"smallImg": "http://img003.mllres.com/images/201612/1482444873545936274.jpg",
							"smallTit": "甜美韩式网红衣柜",
							"smallShengqian": "省200",
							"smallPrice": 4599,
							"xianshi":true
						}]
					}

				]
			}
		}

	}
</script>

<style lang='less' scoped="scoped">
.jiajuBannerBox{
	position: relative;
	width: 1190px;
	margin: 0 auto;
}
	.jiajuItemWrap {
		width: 1190px;
		margin: 80px auto 0;
	}
	
	.item-top {
		display: flex;
		height: 383px;
	}
	
	.jiajuSmallImg {
		width: 1190px;
		height: 229px;
		display: flex;
		box-sizing: border-box;
		.itemLi {
			position: relative;
			width: 297px;
			height: 100%;
			border: 1px solid #ccc;
			border-top: none;
			border-right: none;
			&:last-of-type {
				border-right: 1px solid #ccc;
			}
			.small-text {
				position: absolute;
				bottom: 40px;
				left: 30px;
				height: 30px;
				color: #666;
				font-size: 14px;
				.smallImg-tit {
					display: inline-block;
					padding: 5px 0;
					.shengqian {
						display: inline-block;
						color: red;
						border: 1px solid red;
					}
				}
				.small-price {
					color: red;
					height: 20px;
					.jiaju_buy {
						display: inline-block;
						border: 1px solid red;
						color: #fff;
						height: 20px;
						padding: 0 12px;
						background: red;
						border-radius: 20px;
					}
				}
			}
		}
	}
</style>