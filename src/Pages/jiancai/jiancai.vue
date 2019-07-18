
<template>
	<div class="jiancai">
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
		<div class="jcbox">
			<div class="jcLeft">
				<div class="sideMenu">
					<jiajuShoppingList></jiajuShoppingList>
				</div>
				<a href="#" class="jcwx"><img src="http://img004.mllres.com/images/201511/1446698602364844138.jpg" alt="" /></a>
			</div>
			<div class="jcRight">
				<div id="banner">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<a href="#"><img src="http://img002.mllres.com/images/201905/1558291687349481109.jpg" /></a>
							</div>
							<div class="swiper-slide">
								<a href="#"><img src="http://img002.mllres.com/images/201807/1532998813425587248.jpg" /></a>
							</div>
							<div class="swiper-slide">
								<a href="#"><img src="http://img004.mllres.com/images/201809/1536282178381111142.jpg" /></a>
							</div>
							<div class="swiper-slide">
								<a href="#"><img src="http://img001.mllres.com/images/201811/1542742826796162716.jpg" /></a>
							</div>
							<div class="swiper-slide">
								<a href="#"><img src="http://img004.mllres.com/images/201809/1538002328469151879.jpg" /></a>
							</div>
							<div class="swiper-slide">
								<a href="#"><img src="http://img004.mllres.com/images/201906/1559587872331171315.jpg" /></a>
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
					<div class="bannernav">
						<a href="#" v-for="(item, index) in bannernav" :key="index" @mouseenter="fn1(index)" @mouseleave="fn2()" :class="{ active: bnishow == index }">
							{{ item }}
						</a>
					</div>
				</div>
				<div class="bright">
					<div class="title">
						<span class="icon"></span>
						<span class="txt">本周特惠</span>
					</div>
					<div class="bitem" v-for="(item, index) in bright" :key="index">
						<a href="#"><img :src="item.urlimg" alt="" /></a>
						<p class="tit">{{ item.tit }}</p>
						<p class="pri">
							特惠价：
							<span class="pric">{{ item.thpri }}</span>
						</p>
						<p class="timer">
							仅剩:
							<span class="color">{{ days }}</span> 天
							<span class="color">{{ hours }}</span> 时
							<span class="color">{{ minutes }}</span> 分
						</p>
						<span class="qiang">抢</span>
					</div>
				</div>
				<div class="banguang">
					<div class="banItem">
						<div class="banItemH">
							<span class="titl">今日团购</span>
							<a href="#">更多>></a>
						</div>
						<a href="#" class="imga"><img src="http://img003.mllres.com/images/201905/1558658179602557165.jpg" alt="" /></a>
						<p class="itemI">
							<a href="#">现代 水晶吊灯 镂空拼花 卧室</a>
						</p>
						<div class="cantuan">
							<span class="fuhao">￥</span>
							<span class="ctpri">49.00</span>
						</div>
						<p class="jiage">
							原价：
							<del>￥63</del> &nbsp;|&nbsp;折扣：
							<span class="zheg">7.8</span> 折
						</p>
					</div>
					<div class="renxiao">
						<span class="trqi" v-for="(item, index) in tabt" :key="index" :class="{'tabactive':shownum==index}" @mouseenter="tabshow(index)">
							{{ item.tabar }}
							<span class="trqIcon">{{ item.tabf }}</span>
						</span>
						<div class="tab_header">
							<ul class="tab-top" v-for="(item1, index1) in tablist" v-show="shownum==index1" :key="index1">
								<li class="tab-topI" v-for="(item2, index2) in item1.tabItem" :key="index2">
									<a href="#"><img :src="item2.urlimg" alt="" /></a>
									<p class="tab-tops">{{ item2.title }}</p>
									<p class="tab-toppri">
										本站价格：
										<span class="tabfh">￥</span>
										<span class="str">{{ item2.pri }}</span>
									</p>
									<span class="tabXiao" v-show="item2.xiaoshi">已售件{{ item2.xiaol }}</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="ownwbox" v-for="(item,index) in loulist" :key="index">
					<div class="ownwboxH">
						<span class="lou">{{item.title}}</span>
						<span class="tuijian">热门推荐：<a href="#" v-for="(item1,indexa) in item.top" :key="indexa">{{item1.txt}} | </a></span>
					</div>
					<div class="ownwbody">
						<div id="itemBanner" v-for="item5 in item.iban">
							<a href="">
								<img :src="item5.urlimg" alt="" />
							</a>
						</div>
						<div class="img-map">
							<div class="map-list" v-for="(item2,index2) in item.jrank" :key="index2">
								<a href="#" class="aimg"><img :src="item2.urlimg" alt=""></a>
								<div class="txt">
									<p class="tit">
										<a href="#">{{item2.tit}}</a>
									</p>
									<p class="title">{{item2.title}}</p>
									<p class="pri">包邮价:<i>￥</i><span>{{item2.pri}}</span></p>
								</div>
							</div>
						</div>
						<div class="jrank">
							<span class="jrankh">销量排行榜</span>
							<ul class="jrankbox">
								<li class="jrankitem" v-for="(item3,index3) in item.jkxl" :key="index3" @mouseenter="xshow(index,index3)">
									<span class="num">{{item3.num}}</span>
									<span class="title">{{item3.title}}</span>
									<div class="imgbox" v-show="item3.numa==index3">
										<a href="#" class="aimg">
											<img :src="item3.imgurl" alt="" />
										</a>
										<div class="tright">
											<p>本站价：<i>￥</i><span>{{item3.pri}}</span></p>
											<p>销量： {{item3.xiaol}} 件</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="ownwfoot">
						 <div class="title">{{item.itemtxt}}</div>
                         <ul class="ownwfootL">
                         	<li class="itema"  v-for="item7 in item.listm">
                         		<a href="#">{{item7.iist}}</a>
                         	</li>
                         </ul>
                         <div class="ownwfootR">
                            <a href="#" v-for="item8 in item.contimg">
                            	<img :src="item8.urlimg" alt="" />
                            </a>
                         </div>
					</div>
				</div>
			    <div class="newscxiao">
			    	<a href="#"><img src="../../assets/images/a.png"/></a>
			    </div>
			    <div class="zhishi">
			    	<a href="#"><img src="../../assets/images/b.png"/></a>
			    </div>
			</div>
		</div>
		<footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';

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
    import jiajuShoppingList from '../../components/jiajuShoppingList.vue'
	export default {
		name: 'jiancai',
		components: {
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
			footerExtend,
			jiajuShoppingList
		},
		data() {
			return {
				days:'',
				hours:'',
				minutes:'',
				seconds:'',
				bannernav: ['美式风格馆', '凯撒豪庭•灯饰', '赏心悦木 质感生活', '厨房用品专场', '卫浴生活馆', '遇见初夏'],
				bnishow: -1,
				bright: [{
					urlimg: 'http://img001.mllres.com/images/201905/1558894327963146303.jpg',
					tit: '创意个性铁艺吊灯',
					thpri: '¥ 139.00',
					jins: '7',
					th: '22',
					tm: '22'
				}, {
					urlimg: 'http://img003.mllres.com/images/201905/1558894402548126269.jpg',
					tit: '进口橡木实木浴室柜',
					thpri: '¥ 3688.00',
					jins: '7',
					th: '22',
					tm: '22'
				}],
				shownum: 0,
				tabt: [{
					tabar: '人气热销',
					tabf: 'HOT'
				}, {
					tabar: '新品推荐',
					tabf: 'NEW'
				}],
				tablist: [{
					tabItem: [{
						urlimg: 'http://image.meilele.com/images/201810/1539630105422639660.jpg',
						title: '欧式新古典 6头吊灯 树脂雕花',
						pri: 905,
						xiaol: 1965,
						xiaoshi: true
					}, {
						urlimg: 'http://img002.mllres.com/images/201812/1546036209090527625.jpg',
						title: '餐厅 卧室分段吸顶灯 可分段不',
						pri: 418,
						xiaol: 1148,
						xiaoshi: true
					}, {
						urlimg: 'http://image.meilele.com/images/201809/1537318437580221850.jpg',
						title: '现代 分段式吸顶灯 水晶玻璃 ',
						pri: 599,
						xiaol: '',
						xiaoshi: false
					}, {
						urlimg: 'http://img004.mllres.com/images/201905/1557081746544883151.jpg',
						title: '简欧 复古风扇吊灯 卧室客厅书',
						pri: 984,
						xiaol: 3814,
						xiaoshi: true
					}]
				}, {
					tabItem: [{
						urlimg: 'http://img003.mllres.com/images/201809/1537318685169767300.jpg',
						title: '现代简约 客厅灯 卧室灯 现代',
						pri: 1099,
						xiaol: '',
						xiaoshi: false
					}, {
						urlimg: 'http://img002.mllres.com/images/201812/1546036342366059816.jpg',
						title: ' 现代组合3头餐厅吊灯 简约创',
						pri: 359,
						xiaol: '',
						xiaoshi: false
					}, {
						urlimg: 'http://img002.mllres.com/images/201809/1537318792023311019.jpg',
						title: '美式客厅吊灯 全铜大气家用吊灯',
						pri: 1470,
						xiaol: '',
						xiaoshi: false
					}, {
						urlimg: 'http://img004.mllres.com/images/201811/1541697903733698042.jpg',
						title: ' 现代LED吸顶灯 卧室灯具 ',
						pri: 199,
						xiaol: '',
						xiaoshi: false
					}]
				}],
				loulist: [{
					top: [{
						txt: '吊灯'
					}, {
						txt: '落地灯'
					}, {
						txt: '壁灯'
					}, {
						txt: '吸顶灯'
					}, {
						txt: '台灯'
					}, {
						txt: 'LED灯/光源'
					}, {
						txt: '水晶灯'
					}],
					title: '1F 灯饰照明',
					itemtxt:'卫浴用品常识',
					iban: [{urlimg:'http://img001.mllres.com/images/201808/1533232901797371582.jpg'}],
					jrank: [{
						urlimg: 'http://img004.mllres.com/images/201904/1555969743585588630.jpg',
						tit: '欧式田园设计',
						title: '白玉芳兰系列5头吊灯',
						pri: '199'
					}, {
						urlimg: 'http://img001.mllres.com/images/201810/1539630418285049109.jpg',
						tit: '烤漆铁艺灯体',
						title: '烤漆铁艺灯体',
						pri: '479'
					}, {
						urlimg: 'http://img004.mllres.com/images/201812/1546036435558534898.jpg',
						tit: '一级铜材打造',
						title: '奢华6头铜灯',
						pri: '1250'
					}, {
						urlimg: 'http://image.meilele.com/images/201905/1557440866509278715.jpg',
						tit: '全铜内外包边',
						title: '全铜内外包边',
						pri: '829'
					}, ],
					jkxl: [{
						num: '1',
						title: '现代 亚克力圆形吸顶',
						pri: '55',
						imgurl: 'http://img004.mllres.com/images/201402/1392185248184289150.jpg',
						xiaol: '11392',
						numa: 0
					}, {
						num: '2',
						title: '现代 唯美吸顶灯 双面打沙玻璃 客厅书房卧室',
						pri: '195',
						imgurl: 'http://img004.mllres.com/images/201412/1419931985169428811.jpg',
						xiaol: '8833',
						numa: 0
					}, {
						num: '3',
						title: '欧美 六头玻璃灯罩吊灯 欧式餐厅客厅',
						pri: '599',
						imgurl: 'http://img002.mllres.com/images/201402/1392287015556037688.jpg',
						xiaol: '8795',
						numa: 0
					}, {
						num: '4',
						title: '欧美 玻璃印花罩吸顶灯 卧室客厅餐厅阳台',
						pri: '163',
						imgurl: 'http://img002.mllres.com/images/201505/1431673497540505754.jpg',
						xiaol: '8344',
						numa: 0
					}, {
						num: '5',
						title: '田园 米黄色蕾丝布艺灯罩台灯 卧室客厅',
						pri: '238',
						imgurl: 'http://img002.mllres.com/images/201306/1370940973239802492.jpg',
						xiaol: '8267',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					top: [{
						txt: '厨盆/水槽'
					}, {
						txt: '厨房挂件'
					}, {
						txt: '角阀'
					}, {
						txt: '厨房龙头'
					}],
					title: '2F 厨房五金',
					itemtxt:'卫浴用品常识',
					iban: [{urlimg:'http://image.meilele.com/images/201901/1546906998294990109.jpg'}],
					jrank: [{
						urlimg: 'http://img002.mllres.com/images/201810/1539641394519676122.jpg',
						tit: '超宽超大容量',
						title: '304不锈钢单槽水槽套餐',
						pri: '2499'
					}, {
						urlimg: 'http://img003.mllres.com/images/201905/1557081557869669245.jpg',
						tit: '多功能设计',
						title: '专业厨房挂件套装',
						pri: '299'
					}, {
						urlimg: 'http://img004.mllres.com/images/201812/1546036607288284642.jpg',
						tit: '304不锈钢',
						title: '厨房多功能收纳架',
						pri: '320'
					}, {
						urlimg: 'http://image.meilele.com/images/201810/1539632005665587272.jpg',
						tit: '加厚精通阀体',
						title: '加厚精通阀体',
						pri: '46'
					}, ],
					jkxl: [{
						num: '1',
						title: '九牧4分单冷洗衣机龙头 精铜快开阀芯水龙头拖把池水龙头7212-234',
						pri: '99',
						imgurl: 'http://img001.mllres.com/images/small/150/width/235/height/156/mode/1/encrypt/795000db8851441ee27abbc100256f3f/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPAcyCpj67xX0AbPmrqqnV9hPQcHvFSRXINphTMNyg0Ep33_Im6sL62IJAbnjmFqUJQZ76IyvD2uBeQnokG4CI6.jpg',
						xiaol: '557',
						numa: 0
					}, {
						num: '2',
						title: '(卓美欧包邮清仓)SUS304水槽带水龙头套装 带混水龙头水槽套装 双槽套装',
						pri: '388',
						imgurl: 'http://img001.mllres.com/images/201306/1370772113496099589.jpg',
						xiaol: '557',
						numa: 0
					}, {
						num: '3',
						title: '【包邮+送无铅龙头+下水配件+沥水篮】厨欲无限D系列 水槽单槽套装 55*45cm',
						pri: '699',
						imgurl: 'http://image.meilele.com/images/small/391/width/235/height/156/mode/1/encrypt/097c9176af5950254e72c229c9f046eb/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN+l4ACJcw2smKGiFPIbBnhoujYkZiCfnfXHbqgr6lemEYJaQWHWfmNXHb6wM_6xPxKv6n1HnSJ_Ka443t726mQ.jpg',
						xiaol: '72',
						numa: 0
					}, {
						num: '4',
						title: '九牧JOMMO龙头面盆龙头 洗脸盆单孔冷热水龙头3259-131',
						pri: '749',
						imgurl: 'http://img004.mllres.com/images/small/398/width/235/height/156/mode/1/encrypt/f6d22ca3d98e2e6276261f39f482f61d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPu1bdpXDuygPkVW22BUO3F7pDEHiZ5umoeh93tWZMLWF82ws7ont67cajCo7olejWMq_cGSD66tvtKDINw_Gup.jpg',
						xiaol: '61',
						numa: 0
					}, {
						num: '5',
						title: '【送龙头+下水配件+滤水篮+冷热角阀一对】厨房洗菜盆水槽 双槽进口304不锈钢 水槽套餐 02094',
						pri: '2499',
						imgurl: 'http://img004.mllres.com/images/small/398/width/235/height/156/mode/1/encrypt/f6d22ca3d98e2e6276261f39f482f61d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPu1bdpXDuygPkVW22BUO3F7pDEHiZ5umoeh93tWZMLWF82ws7ont67cajCo7olejWMq_cGSD66tvtKDINw_Gup.jpg',
						xiaol: '54',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					top: [{
						txt: '浴缸'
					}, {
						txt: '浴室柜'
					}, {
						txt: '淋浴房'
					}, {
						txt: '卫浴挂件'
					}, {
						txt: '座便器'
					}, {
						txt: '洗脸盆/洗手盆'
					}, {
						txt: '其他卫浴配件'
					}],
					title: '3F 卫浴用品',
					itemtxt:'卫浴用品常识',
					iban: [{urlimg:'http://img004.mllres.com/images/201905/1557441042793630924.jpg'}],
					jrank: [{
						urlimg: 'http://img002.mllres.com/images/201809/1537378786763954575.jpg',
						tit: '纳米智洁釉面',
						title: '摩普喷射虹吸式马桶连体座便器',
						pri: '1699'
					}, {
						urlimg: 'http://img001.mllres.com/images/201906/1560209337259350319.jpg',
						tit: '环保油漆涂层',
						title: '进口橡木浴室柜',
						pri: '3298'
					}, {
						urlimg: 'http://img002.mllres.com/images/201810/1539630889153957975.jpg',
						tit: 'ABS提拉式花洒',
						title: '双裙边冲浪按摩恒温浴缸',
						pri: '4366'
					}, {
						urlimg: 'http://img004.mllres.com/images/201810/1539630941882799712.jpg',
						tit: '优质太空铝',
						title: '卫生间带钩浴巾架',
						pri: '105'
					}, ],
					jkxl: [{
						num: '1',
						title: '进口橡木实木雕花浴室柜 黑金花天然大理石台面 93CM长实木浴室柜',
						pri: '3298',
						imgurl: 'http://img003.mllres.com/images/201504/1428465572902062369.jpg',
						xiaol: '1409',
						numa: 0
					}, {
						num: '2',
						title: '【送货入户+免费安装+送马桶配件】九牧节水静音喷射虹吸式抽水马桶11173',
						pri: '1980',
						imgurl: 'http://image.meilele.com/images/small/340/width/235/height/156/mode/1/encrypt/ebb6d189f726d9ca488a251326eea137/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNQHA9m3rdkrenyeQ2f_+py9CgkT9+un4wkuWuDmdukf4c7kdtmFehbf0J1PxkW4j9cLh0N0K1g+5gVJPEh5GZw.jpg',
						xiaol: '798',
						numa: 0
					}, {
						num: '3',
						title: '九牧卫浴 多功能手持花洒套装冷热淋浴器精铜主体 36277-147',
						pri: '1999',
						imgurl: 'http://img003.mllres.com/images/small/275/width/235/height/156/mode/1/encrypt/08c7a24b0b7bb3fc0672c1187873ae1a/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHObtAoLZUV1j9PbtCxmOf_TgkX4Fi8H7ZTjbZAPjUcruuIfO+8it3PeF2RTzeuvH8Opv6qSPM5KVVGVSIDOSoHn.jpg',
						xiaol: '752',
						numa: 0
					}, {
						num: '4',
						title: '樱桃黄色精美雕花进口橡木实木浴室柜 黑金花天然大理石台面奢华浴室柜 1.1米长落地浴室柜',
						pri: '5148',
						imgurl: 'http://img002.mllres.com/images/201403/1395478504776459454.jpg',
						xiaol: '478',
						numa: 0
					}, {
						num: '5',
						title: '白色进口橡木实木浴室柜 爵士白天然大理石台面豪华浴室柜 82CM长落地浴室柜',
						pri: '5150',
						imgurl: 'http://img002.mllres.com/images/201402/1393407956707984854.jpg',
						xiaol: '520',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					top: [{
						txt: '花洒'
					}, {
						txt: '卫浴龙头'
					}, {
						txt: '厨房龙头'
					}, {
						txt: '卫浴挂件'
					}, {
						txt: '地漏'
					}, {
						txt: '卫浴套装'
					}, {
						txt: '其他卫浴配件'
					}],
					title: '4F 花洒龙头',
					itemtxt:'卫浴用品常识',
					iban: [{urlimg:'http://image.meilele.com/images/201902/1551220389625424931.jpg'}],
					jrank: [{
						urlimg: 'http://image.meilele.com/images/201809/1537379891996348367.jpg',
						tit: '纳米智洁釉面',
						title: '摩普喷射虹吸式马桶连体座便器',
						pri: '1699'
					}, {
						urlimg: 'http://img002.mllres.com/images/201809/1537379948045434786.jpg',
						tit: '环保油漆涂层',
						title: '进口橡木浴室柜',
						pri: '3298'
					}, {
						urlimg: 'http://img003.mllres.com/images/201903/1551657602267500932.jpg',
						tit: 'title="ABS提拉式花洒"',
						title: '双裙边冲浪按摩恒温浴缸',
						pri: '4366'
					}, {
						urlimg: 'http://img004.mllres.com/images/201904/1554934127352443728.jpg',
						tit: '优质太空铝',
						title: '卫生间带钩浴巾架',
						pri: '105'
					}, ],
					jkxl: [{
						num: '1',
						title: '现代 亚克力圆形吸顶',
						pri: '55',
						imgurl: 'http://img004.mllres.com/images/201402/1392185248184289150.jpg',
						xiaol: '11392',
						numa: 0
					}, {
						num: '2',
						title: '现代 唯美吸顶灯 双面打沙玻璃 客厅书房卧室',
						pri: '195',
						imgurl: 'http://img004.mllres.com/images/201412/1419931985169428811.jpg',
						xiaol: '8833',
						numa: 0
					}, {
						num: '3',
						title: '欧美 六头玻璃灯罩吊灯 欧式餐厅客厅',
						pri: '599',
						imgurl: 'http://img002.mllres.com/images/201402/1392287015556037688.jpg',
						xiaol: '8795',
						numa: 0
					}, {
						num: '4',
						title: '欧美 玻璃印花罩吸顶灯 卧室客厅餐厅阳台',
						pri: '163',
						imgurl: 'http://img002.mllres.com/images/201505/1431673497540505754.jpg',
						xiaol: '8344',
						numa: 0
					}, {
						num: '5',
						title: '田园 米黄色蕾丝布艺灯罩台灯 卧室客厅',
						pri: '238',
						imgurl: 'http://img002.mllres.com/images/201306/1370940973239802492.jpg',
						xiaol: '8267',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					top: [{
						txt: '天然实木地板'
					}, {
						txt: '多层实木地板'
					}, {
						txt: '复合强化地板'
					}, {
						txt: '地面砖'
					}, {
						txt: '内墙砖'
					}, {
						txt: '全抛釉'
					}, {
						txt: '抛光砖'
					}],
					title: '5F 地板瓷砖',
					itemtxt:'五金选购常识',
					iban: [{urlimg:'http://image.meilele.com/images/201809/1537379728673547660.jpg'}],
					jrank: [{
						urlimg: 'http://image.meilele.com/images/201809/1537379891996348367.jpg',
						tit: '精铜主体',
						title: '九牧4分单冷洗衣机龙头',
						pri: '99'
					}, {
						urlimg: 'http://img002.mllres.com/images/201809/1537379948045434786.jpg',
						tit: '优质加厚不锈钢',
						title: '九牧浴室防臭地漏',
						pri: '78'
					}, {
						urlimg: 'http://img003.mllres.com/images/201903/1551657602267500932.jpg',
						tit: '拉丝工艺',
						title: '不锈钢淋浴花洒',
						pri: '698'
					}, {
						urlimg: 'http://img004.mllres.com/images/201904/1554934127352443728.jpg',
						tit: '全铜精造',
						title: '抽拉式面盆水龙头',
						pri: '299'
					}, ],
					jkxl: [{
						num: '1',
						title: '九牧卫浴 多功能手持花洒套装冷热淋浴器精铜主体 36277-147',
						pri: '1999',
						imgurl: 'http://img003.mllres.com/images/small/275/width/235/height/156/mode/1/encrypt/08c7a24b0b7bb3fc0672c1187873ae1a/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHObtAoLZUV1j9PbtCxmOf_TgkX4Fi8H7ZTjbZAPjUcruuIfO+8it3PeF2RTzeuvH8Opv6qSPM5KVVGVSIDOSoHn.jpg',
						xiaol: '752',
						numa: 0
					}, {
						num: '2',
						title: '九牧方形升降卫浴花洒 淋浴器花洒套装精铜主体龙头 36310-147',
						pri: '229',
						imgurl: 'http://image.meilele.com/images/small/351/width/235/height/156/mode/1/encrypt/0ff0b61f6ad9fe6301d64dc935d974ba/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOr95A_bPsO3pCSGiYZrjYSlj1Rhedq2w0h_bri4q5jqmNr1AH6Op5cyaZlEE8DMZ1X129kb85FdziCx_K1cx7J.jpg',
						xiaol: '237',
						numa: 0
					}, {
						num: '3',
						title: '淋浴套装 方形全铜大花洒 增压设计',
						pri: '880',
						imgurl: 'http://image.meilele.com/images/other_shop/639/44526/3f0fae22b02c936926fbcde2b5e8c5f1.jpg',
						xiaol: '214',
						numa: 0
					}, {
						num: '4',
						title: '【快递到家+免费安装】九牧恒温淋浴花洒套装浴室冷热水龙头淋浴器喷头26088-316 ',
						pri: '3998',
						imgurl: 'http://img001.mllres.com/images/small/389/width/235/height/156/mode/1/encrypt/ee0c1f386baf1ef585d2369e590b0922/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOjh0oEaKNrJv2BKCiTvayBdnuWVIhyhW0SSAG_zO2RQvJpudcVv23jKHqtM0KsKayr8gTKmBtQZJ_aFx0WiyU0.jpg',
						xiaol: '214',
						numa: 0
					}, {
						num: '5',
						title: '高增压节水型五功能花洒头三件套装',
						pri: '49',
						imgurl: 'http://image.meilele.com/images/other_shop/462/60192/c7cb89826dab6f04c52f785424d230d0.jpg',
						xiaol: '207',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					top: [{
						txt: '布艺墙纸'
					}, {
						txt: '无纺布墙纸'
					}, {
						txt: '墙布'
					}],
					title: '6F 门墙纸辅材',
					itemtxt:'卫浴用品常识',
					iban: [{urlimg:'http://img001.mllres.com/images/201809/1537380420050434687.jpg'}],
					jrank: [{
						urlimg: 'http://img001.mllres.com/images/201809/1537382228009606504.jpg',
						tit: '健康环保',
						title: 'E0级多层实木复合地板',
						pri: '490'
					}, {
						urlimg: 'http://img002.mllres.com/images/201809/1537382757493462924.jpg',
						tit: '大豆环保胶',
						title: '多层实木复合地板',
						pri: '490'
					}, {
						urlimg: 'http://img001.mllres.com/images/201809/1537382869893085366.jpg',
						tit: '耐磨防滑',
						title: '强化复合木地板',
						pri: '218'
					}, {
						urlimg: 'http://img003.mllres.com/images/201809/1537383147309980043.jpg',
						tit: '风格百搭',
						title: '黄色格子瓷砖釉面内墙砖 ',
						pri: '14'
					}, ],
					jkxl: [{
						num: '1',
						title: '九牧4分单冷洗衣机龙头 精铜快开阀芯水龙头拖把池水龙头7212-234',
						pri: '99',
						imgurl: 'http://img001.mllres.com/images/small/150/width/235/height/156/mode/1/encrypt/795000db8851441ee27abbc100256f3f/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPAcyCpj67xX0AbPmrqqnV9hPQcHvFSRXINphTMNyg0Ep33_Im6sL62IJAbnjmFqUJQZ76IyvD2uBeQnokG4CI6.jpg',
						xiaol: '557',
						numa: 0
					}, {
						num: '2',
						title: '(卓美欧包邮清仓)SUS304水槽带水龙头套装 带混水龙头水槽套装 双槽套装',
						pri: '388',
						imgurl: 'http://img001.mllres.com/images/201306/1370772113496099589.jpg',
						xiaol: '557',
						numa: 0
					}, {
						num: '3',
						title: '【包邮+送无铅龙头+下水配件+沥水篮】厨欲无限D系列 水槽单槽套装 55*45cm',
						pri: '699',
						imgurl: 'http://image.meilele.com/images/small/391/width/235/height/156/mode/1/encrypt/097c9176af5950254e72c229c9f046eb/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN+l4ACJcw2smKGiFPIbBnhoujYkZiCfnfXHbqgr6lemEYJaQWHWfmNXHb6wM_6xPxKv6n1HnSJ_Ka443t726mQ.jpg',
						xiaol: '72',
						numa: 0
					}, {
						num: '4',
						title: '九牧JOMMO龙头面盆龙头 洗脸盆单孔冷热水龙头3259-131',
						pri: '749',
						imgurl: 'http://img004.mllres.com/images/small/398/width/235/height/156/mode/1/encrypt/f6d22ca3d98e2e6276261f39f482f61d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPu1bdpXDuygPkVW22BUO3F7pDEHiZ5umoeh93tWZMLWF82ws7ont67cajCo7olejWMq_cGSD66tvtKDINw_Gup.jpg',
						xiaol: '61',
						numa: 0
					}, {
						num: '5',
						title: '【送龙头+下水配件+滤水篮+冷热角阀一对】厨房洗菜盆水槽 双槽进口304不锈钢 水槽套餐 02094',
						pri: '2499',
						imgurl: 'http://img004.mllres.com/images/small/398/width/235/height/156/mode/1/encrypt/f6d22ca3d98e2e6276261f39f482f61d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPu1bdpXDuygPkVW22BUO3F7pDEHiZ5umoeh93tWZMLWF82ws7ont67cajCo7olejWMq_cGSD66tvtKDINw_Gup.jpg',
						xiaol: '54',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					title: '6F 门墙纸辅材',
					itemtxt:'卫浴用品常识',
					iban: [{urlimg:'http://img002.mllres.com/images/201809/1537383266326147779.jpg'}],
					jrank: [{
						urlimg: 'http://img002.mllres.com/images/201809/1537383404101676867.jpg',
						tit: '不发霉发黄',
						title: '3D立体无缝刺绣墙布',
						pri: '68'
					}, {
						urlimg: 'http://img001.mllres.com/images/201808/1533234661626822114.jpg',
						tit: '花型渐变效果',
						title: '简约格纹无纺布墙纸',
						pri: '108'
					}, {
						urlimg: 'http://image.meilele.com/images/201812/1546037202377700368.jpg',
						tit: '3d精致深压纹',
						title: '欧式古典无纺布墙纸',
						pri: '158'
					}, {
						urlimg: 'http://image.meilele.com/images/201906/1560207367382110740.jpg',
						tit: '优雅轻奢',
						title: '3D浮雕无纺布壁纸',
						pri: '128'
					}, ],
					jkxl: [{
						num: '1',
						title: '进口橡木实木雕花浴室柜 黑金花天然大理石台面 93CM长实木浴室柜',
						pri: '3298',
						imgurl: 'http://img003.mllres.com/images/201504/1428465572902062369.jpg',
						xiaol: '1409',
						numa: 0
					}, {
						num: '2',
						title: '【送货入户+免费安装+送马桶配件】九牧节水静音喷射虹吸式抽水马桶11173',
						pri: '1980',
						imgurl: 'http://image.meilele.com/images/small/340/width/235/height/156/mode/1/encrypt/ebb6d189f726d9ca488a251326eea137/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNQHA9m3rdkrenyeQ2f_+py9CgkT9+un4wkuWuDmdukf4c7kdtmFehbf0J1PxkW4j9cLh0N0K1g+5gVJPEh5GZw.jpg',
						xiaol: '798',
						numa: 0
					}, {
						num: '3',
						title: '九牧卫浴 多功能手持花洒套装冷热淋浴器精铜主体 36277-147',
						pri: '1999',
						imgurl: 'http://img003.mllres.com/images/small/275/width/235/height/156/mode/1/encrypt/08c7a24b0b7bb3fc0672c1187873ae1a/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHObtAoLZUV1j9PbtCxmOf_TgkX4Fi8H7ZTjbZAPjUcruuIfO+8it3PeF2RTzeuvH8Opv6qSPM5KVVGVSIDOSoHn.jpg',
						xiaol: '752',
						numa: 0
					}, {
						num: '4',
						title: '樱桃黄色精美雕花进口橡木实木浴室柜 黑金花天然大理石台面奢华浴室柜 1.1米长落地浴室柜',
						pri: '5148',
						imgurl: 'http://img002.mllres.com/images/201403/1395478504776459454.jpg',
						xiaol: '478',
						numa: 0
					}, {
						num: '5',
						title: '白色进口橡木实木浴室柜 爵士白天然大理石台面豪华浴室柜 82CM长落地浴室柜',
						pri: '5150',
						imgurl: 'http://img002.mllres.com/images/201402/1393407956707984854.jpg',
						xiaol: '520',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					top: [{
						txt: '开关插座'
					}],
					title: '7F 五金电子',
					itemtxt:'电器选购常识',
					iban: [{urlimg:'http://img003.mllres.com/images/201901/1546907093437373569.jpg'}],
					jrank: [{
						urlimg: 'http://image.meilele.com/images/201812/1546037287744777515.jpg',
						tit: '德国高阻燃面板',
						title: '10A联体二三极插座',
						pri: '9'
					}, {
						urlimg: 'http://img002.mllres.com/images/201805/1525655407181647822.jpg',
						tit: '进口拜耳PC',
						title: '西门子电脑电视插座',
						pri: '68'
					}, {
						urlimg: 'http://image.meilele.com/images/201807/1531420628160458214.jpg',
						tit: '高精度锡磷青铜',
						title: '弹起式防水地插座',
						pri: '156'
					}, {
						urlimg: 'http://img004.mllres.com/images/201810/1539631257821449631.jpg',
						tit: '钢琴按键设计',
						title: '带单控开关面板',
						pri: '28'
					}, ],
					jkxl: [{
						num: '1',
						title: '现代 亚克力圆形吸顶',
						pri: '55',
						imgurl: 'http://img004.mllres.com/images/201402/1392185248184289150.jpg',
						xiaol: '11392',
						numa: 0
					}, {
						num: '2',
						title: '现代 唯美吸顶灯 双面打沙玻璃 客厅书房卧室',
						pri: '195',
						imgurl: 'http://img004.mllres.com/images/201412/1419931985169428811.jpg',
						xiaol: '8833',
						numa: 0
					}, {
						num: '3',
						title: '欧美 六头玻璃灯罩吊灯 欧式餐厅客厅',
						pri: '599',
						imgurl: 'http://img002.mllres.com/images/201402/1392287015556037688.jpg',
						xiaol: '8795',
						numa: 0
					}, {
						num: '4',
						title: '欧美 玻璃印花罩吸顶灯 卧室客厅餐厅阳台',
						pri: '163',
						imgurl: 'http://img002.mllres.com/images/201505/1431673497540505754.jpg',
						xiaol: '8344',
						numa: 0
					}, {
						num: '5',
						title: '田园 米黄色蕾丝布艺灯罩台灯 卧室客厅',
						pri: '238',
						imgurl: 'http://img002.mllres.com/images/201306/1370940973239802492.jpg',
						xiaol: '8267',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}, {
					top: [{
						txt: '热水器'
					}, {
						txt: '吸油烟机'
					}],
					title: '8F 生活电器',
					itemtxt:'门墙纸辅材常识',
					iban: [{urlimg:'http://img003.mllres.com/images/201904/1554859030086216860.jpg'}],
					jrank: [{
						urlimg: 'http://img001.mllres.com/images/201809/1537383908588311990.jpg',
						tit: '四季温暖',
						title: '5L储水即热式热水器',
						pri: '369'
					}, {
						urlimg: 'http://img004.mllres.com/images/201904/1554859400877179606.jpg',
						tit: '低音排烟',
						title: 'MD-TJ8035Q636B',
						pri: '2399'
					}, {
						urlimg: 'http://img004.mllres.com/images/201901/1547579949007038225.jpg',
						tit: '节能环保',
						title: '空气能热水器一体机',
						pri: '5599'
					}, {
						urlimg: 'http://img002.mllres.com/images/201810/1539631319019516148.jpg',
						tit: '迷你便携式',
						title: '小狗新品车载吸尘器',
						pri: '199'
					}, ],
					jkxl: [{
						num: '1',
						title: '进口橡木实木雕花浴室柜 黑金花天然大理石台面 93CM长实木浴室柜',
						pri: '3298',
						imgurl: 'http://img003.mllres.com/images/201504/1428465572902062369.jpg',
						xiaol: '1409',
						numa: 0
					}, {
						num: '2',
						title: '【送货入户+免费安装+送马桶配件】九牧节水静音喷射虹吸式抽水马桶11173',
						pri: '1980',
						imgurl: 'http://image.meilele.com/images/small/340/width/235/height/156/mode/1/encrypt/ebb6d189f726d9ca488a251326eea137/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNQHA9m3rdkrenyeQ2f_+py9CgkT9+un4wkuWuDmdukf4c7kdtmFehbf0J1PxkW4j9cLh0N0K1g+5gVJPEh5GZw.jpg',
						xiaol: '798',
						numa: 0
					}, {
						num: '3',
						title: '九牧卫浴 多功能手持花洒套装冷热淋浴器精铜主体 36277-147',
						pri: '1999',
						imgurl: 'http://img003.mllres.com/images/small/275/width/235/height/156/mode/1/encrypt/08c7a24b0b7bb3fc0672c1187873ae1a/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHObtAoLZUV1j9PbtCxmOf_TgkX4Fi8H7ZTjbZAPjUcruuIfO+8it3PeF2RTzeuvH8Opv6qSPM5KVVGVSIDOSoHn.jpg',
						xiaol: '752',
						numa: 0
					}, {
						num: '4',
						title: '樱桃黄色精美雕花进口橡木实木浴室柜 黑金花天然大理石台面奢华浴室柜 1.1米长落地浴室柜',
						pri: '5148',
						imgurl: 'http://img002.mllres.com/images/201403/1395478504776459454.jpg',
						xiaol: '478',
						numa: 0
					}, {
						num: '5',
						title: '白色进口橡木实木浴室柜 爵士白天然大理石台面豪华浴室柜 82CM长落地浴室柜',
						pri: '5150',
						imgurl: 'http://img002.mllres.com/images/201402/1393407956707984854.jpg',
						xiaol: '520',
						numa: 0
					}],listm:[{iist:'吊顶龙骨安装示意图解析'},
					{iist:'面盆下水安装'},
					{iist:'浴室柜批发厂家价格盘点'},
					{iist:'蹲便器改坐便器知识详解'},
					{iist:'浴缸什么材质好'},
					{iist:'卫浴挂件品牌'}
					],contimg:[{urlimg:'http://img003.mllres.com/images/201810/1540517090102868150.jpg'},
					{urlimg:'http://img002.mllres.com/images/201802/1517785710456097653.jpg'},
					{urlimg:'http://img001.mllres.com/images/201809/1537379271079930236.jpg'}
					]
				}]
			}
		},
		mounted() {
			new Swiper('.swiper-container', {
				loop: true,
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					type: 'bullets'
				}
			}),
			this.countTime()
		},
		methods: {
			fn1(index) {
				this.bnishow = index;
			},
			fn2() {
				this.bnishow = -1;
			},
			tabshow(index) {
				this.shownum = index;
			},
			xshow(index, index3) {
				console.log(index,index3);
				for(var i=0;i<=4;i++){
					this.loulist[index].jkxl[i].numa=-1;
				};
				if(index3 == 0){
					this.loulist[index].jkxl[index3].numa = 0;
				} else {
					this.loulist[index].jkxl[index3].numa = index3;
				}
			},
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
          	return num<9?'0'+num:num
          }
		}
	}
</script>

<style lang="less" scoped="scoped">
	.jiancai {
		font-size: 12px;
		.jcbox {
			display: flex;
			width: 1200px;
			margin: 0 auto;
			margin-top: 20px;
			.jcLeft {
				width: 205px;
				position: relative;
				.sideMenu {
					width: 201px;
					height: 410px;
					.jiajuShoppingList{
						width: 200px;
						height: 402px;
						top: 0px;
						left: 0px;
						border: 1px solid #ccc;
					}
					a{
						display: block;
						img{
							width: 202px;
							height: 410px;
						}
					}
				}
				.jcwx {
					display: inline-block;
					width: 205px;
					height: 253px;
					margin-top: 10px;
					img {
						width: 205px;
						height: 251px;
					}
				}
			}
			.jcRight {
				width: 990px;
				margin-left: 7px;
				display: flex;
				flex-wrap: wrap;
				#banner {
					width: 770px;
					.swiper-container {
						width: 770px;
						.swiper-slide {
							a {
								display: inline-block;
								width: 770px;
								height: 370px;
								img {
									width: 770px;
									height: 370px;
									display: inline-block;
								}
							}
						}
					}
					.bannernav {
						display: flex;
						margin-top: -3px;
						width: 100%;
						a {
							width: 130px;
							line-height: 30px;
							background: #3a3a3a;
							color: #fff;
							text-align: center;
							border-right: 1px solid #fff;
						}
						.active {
							background: #b74f6f;
						}
					}
				}
				.bright {
					width: 200px;
					height: 398px;
					border: 1px solid #ddd;
					margin-left: 7px;
					.title {
						background: #f1f1f1;
						padding: 0 10px;
						line-height: 35px;
						width: 100%;
						display: flex;
						box-sizing: border-box;
						.icon {
							height: 25px;
							width: 19px;
							margin-top: 5px;
							background: url('https://static.mllres.com/mll/mpg/jiancai/i/bg.png') no-repeat 0 -253px;
							display: inline-block;
							overflow: hidden;
							vertical-align: 4px;
						}
						.txt {
							margin-left: 10px;
							font-size: 15px;
							font-weight: bold;
							font-family: '微软雅黑';
							color: #333;
						}
					}
					.bitem {
						width: 100%;
						text-align: center;
						margin: 0 auto;
						height: 171px;
						border-bottom: 1px solid #ddd;
						margin-top: 10px;
						position: relative;
						p {
							line-height: 20px;
						}
						.tit {
							color: #666;
							font-weight: 700;
						}
						.pri {
							color: #999;
							.pric {
								color: #c9033b;
								font-weight: bold;
							}
						}
						.timer {
							color: #999;
							.color {
								background: #c9033b;
								color: #fff;
								padding: 0 2px;
							}
						}
						.qiang {
							position: absolute;
							right: 10px;
							top: 0px;
							display: inline-block;
							height: 40px;
							width: 40px;
							background: url('https://static.mllres.com/mll/mpg/jiancai/i/bg.png') no-repeat 0 -177px;
							font-weight: bold;
							color: #fff;
							font-size: 16px;
							line-height: 40px;
							text-align: center;
						}
					}
				}
				.banguang {
					margin-top: 20px;
					width: 980px;
					height: 265px;
					display: flex;
					.banItem {
						width: 220px;
						height: 263px;
						border: 1px solid #ddd;
						.banItemH {
							line-height: 34px;
							display: flex;
							justify-content: space-between;
							background: #f1f1f1;
							padding: 0 10px;
							.titl {
								font-weight: bold;
								font-size: 14px;
								color: #333;
							}
							a {
								text-decoration: none;
								color: #999;
							}
						}
						.imga {
							display: block;
							width: 192px;
							height: 132px;
							margin: 10px auto 0px;
							img {
								width: 100%;
								height: 100%;
							}
						}
						.itemI {
							a {
								display: block;
								text-align: center;
								color: #333;
								padding: 6px 0;
								&:hover {
									color: #c9033b;
								}
							}
						}
						.cantuan {
							width: 185px;
							height: 36px;
							line-height: 36px;
							font-size: 18px;
							color: #fff;
							margin: 0 auto;
							background: url('../../assets/images/111.png') no-repeat 0px 0px;
							background-size: 185px 36px;
							cursor: pointer;
							.fuhao {
								margin-left: 20px;
								font-size: 12px;
							}
							.ctpri {
								margin-left: 4px;
							}
						}
						.jiage {
							line-height: 26px;
							text-align: center;
							color: #999;
							.zheg {
								color: #c9033b;
								font-weight: bold;
								margin-right: 2px;
							}
						}
					}
					.renxiao {
						width: 740px;
						height: 265px;
						margin-left: 14px;
						.trqi {
							display: inline-block;
							line-height: 35px;
							font-family: '微软雅黑';
							font-size: 15px;
							font-weight: bold;
							text-align: center;
							width: 123px;
							border: 1px solid #ccc;
							border-bottom: none;
							cursor: pointer;
							&:first-of-type {
								border-right: none;
							}
							.trqIcon {
								font-size: 13px;
								font-weight: 500;
							}
						}
						.tabactive {
							background: #f1f1f1;
							color: #c9033b;
							border-bottom: 1px solid #c9033b;
						}
						.tab_header {
							border: 1px solid #ccc;
							width: 770px;
							height: 225px;
							.tab-top {
								display: flex;
								.tab-topI {
									list-style: none;
									width: 192px;
									height: 201px;
									text-align: center;
									position: relative;
									a {
										display: inline-block;
										width: 180px;
										height: 120px;
										margin-top: 36px;
										img {
											width: 180px;
											height: 120px;
										}
									}
									.tab-tops {
										line-height: 20px;
										color: #333;
									}
									.tab-toppri {
										color: #999;
										.tabfh {
											color: #c9033b;
										}
										.str {
											color: #c9033b;
											font-weight: bold;
											font-size: 17px;
										}
									}
									.tabXiao {
										width: 66px;
										height: 19px;
										line-height: 19px;
										padding-bottom: 4px;
										overflow: hidden;
										text-align: center;
										background: url('https://static.mllres.com/mll/mpg/jiancai/i/bg.png') 0 -62px no-repeat;
										color: #fff;
										position: absolute;
										top: 20px;
										right: 4px;
									}
								}
							}
						}
					}
				}
				.ownwbox {
					margin: 16px 0;
					width: 980px;
					height: 516px;
					overflow: hidden;
					.ownwboxH {
						line-height: 34px;
						width: 980px;
						border-bottom: 2px solid #b77320;
						color:#333;
						.lou{
							width: 200px;
						    font-size: 22px;
						    font-family: "微软雅黑";
						    height: 28px;
						    line-height: 28px;
						    display: inline-block;
						}
						.tuijian{
							color: #999;
							a{
								color: #999;
							}
						}
					}
					.ownwbody {
						width: 980px;
						height: 300px;
						display: flex;
						#itemBanner {
							width: 200px;
							height: 302px;
							a{
								display: inline-block;
								width: 200px;
								height: 302px;
								img{
									width: 200px;
									height: 302px;
								}
							}
						}
						.img-map {
							display: flex;
							flex-wrap: wrap;
							width: 562px;
							height: 302px;
							.map-list {
								width: 280px;
								height: 150px;
								list-style: none;
								border-right: 1px solid #ccc;
								border-bottom: 1px solid #ccc;
								display: flex;
								.aimg {
									display: inline-block;
									width: 150px;
									height: 150px;
									img {
										width: 150px;
										height: 149px;
									}
								}
								.txt {
									width: 130px;
									height: 150px;
									color: #999;
									padding-top: 25px;
									padding-left: 10px;
									font-family: "微软雅黑";
									p {
										line-height: 20px;
									}
									.tit {
										font-size: 14px;
										a {
											color: #333;
											&:hover {
												color: #c9033b;
											}
										}
									}
									.title {
										color: #c9033b;
									}
									.pri {
										color: #333;
										i {
											font-style: normal;
											color: #c9033b;
											font-size: 10px;
											padding: 0 2px;
										}
										span {
											font-size: 13px;
											font-weight: bold;
											color: #c9033b;
										}
									}
								}
							}
						}
						.jrank {
							width: 217px;
							height: 302px;
							overflow: hidden;
							border-right: 1px solid #ccc;
							.jrankh {
								line-height: 33px;
								width: 100%;
								font-size: 16px;
								font-weight: bold;
								padding: 0 9px;
								background: #f1f1f1;
								display: block;
								color: #555;
							}
							.jrankbox {
								width: 217px;
								height: 270px;
								.jrankitem {
									list-style: none;
									cursor: pointer;
									border-bottom: dotted 1px #ddd;
									padding: 8px;
									.num {
										width: 14px;
										height: 14px;
										line-height: 14px;
										text-align: center;
										color: #fff;
										float: left;
										font-family: arial;
										background: #64990d;
										margin-right: 6px;
									}
									.title {
										color: #333;
										width: 120px;
										display: block;
										overflow: hidden;
										white-space: nowrap;
										margin-bottom: 8px;
									}
									.imgbox {
										overflow: hidden;
										transition: all 0.3s;
										.aimg {
											display: inline-block;
											height: 65px;
											float: left;
											width: 95px;
											img {
												height: 65px;
												width: 95px;
											}
										}
										.tright {
											margin-left: 6px;
											float: left;
											p {
												color: #333;
												line-height: 20px;
												i {
													font-size: 8px;
													font-style: normal;
													color: #E62318;
												}
												span {
													color: #E62318;
													font-weight: bold;
												}
											}
										}
									}
								}
							}
						}
					}
					.ownwfoot {
						width: 980px;
						height: 180px;
						display: flex;
						.title{
							height: 180px;
							width: 29px;
							text-align: center;
							font-family: 微软雅黑;
						    font-size: 15px;
						    font-weight: 700;
						    line-height: 17px;
						    background-color: #72b7d8;
    						color: #eaf4f9;
    						padding-top: 30px;
    						box-sizing: border-box;
						}
						.ownwfootL{
							display: flex;
							width: 170px;
							height: 180px;
							flex-wrap: wrap;
							list-style: none;
							line-height: 20px;
							height: 20px;
							margin-top: 20px;
							padding-left: 14px;
							box-sizing: border-box;
							a{
								display:block;
								width: 170px;
								color: #999;
								white-space: nowrap;
								overflow: hidden;
								text-overflow: ellipsis;
								&:hover{
									color: red;
								}
							}
						}
						.ownwfootR{
							a{
								display: linline-block;
								&:last-of-type{
									width: 221px;
									height: 180px;
									img{
										width: 221px;
										height: 180px;
									}
								}
							}
						}
					}
				}
				.newscxiao{
					a{
						display: block;
					}
				}
				.zhishi{
					margin-top: 20px;
					margin-bottom: 40px;
					a{
						display: block;
					}
				}
			}
		}
	}
</style>