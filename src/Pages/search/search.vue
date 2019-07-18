<template>
	<div class="box">
		<publicmlltop></publicmlltop>
        <publicguangao></publicguangao>
		<mllheaderbar></mllheaderbar>
		<br />
		<SearchInput></SearchInput>
		<br />
		<SearchNavbar></SearchNavbar>
        <publicredr></publicredr>
		<searchCheck></searchCheck>
		<br/><br/>
		<div class="xuanz">
			<div class="xuanzT">
				<div class="xuanzTF">
					<span class="acitve xuanztitle" v-for="(item,index) in title" :key="index">{{item}}</span>
				</div>
				<div class="xuanzTR">
					共<span class="colorNum">591</span>件商品
					<span class="fenye">1/17</span>
					<span class="xuanzleftI"></span>
					<span class="xuanzRightI"></span>
				</div>
			</div>
			<div class="xuanzF">
				配送至
				<div class="peisong">
					请选择配送地区<span class="psdown"></span>
				</div>
				<div class="peradio">
					类型 <span class="peradioi"><input type="radio" name="myradio">全部</span>
					<span class="peradioi"><input type="radio" name="myradio">美乐乐美乐乐自营</span>
					<span class="peradioi"><input type="radio" name="myradio">第三方卖家</span>
				</div>
				<div class="pscheckbox">
					<span class="pscheck"><input type="checkbox">包邮</span>
					<span class="pscheck"><input type="checkbox">折扣</span>
				</div>
			</div>
		</div>
		<div class="searchConent">
			<div class="searchItemd" v-for="(item,index) in searchList" :key="index">
				<div class="searchItem">
					<div class="searchItemC">
						<router-link to="/detail">
							<div class="imgl">
								<img v-lazy="item.imgurl" alt="">
								<div class="searchAdr">
									<img v-lazy="item.cuxiaoI" alt="" />
								</div>
								<div class="xiangshi">找相似</div>
							</div>
						</router-link>
						<div class="searchMoney">
							<span class="Mnum"><span class="Mfhao">￥</span>{{item.pri}}<del>{{item.cuxiaop}}</del></span>
							<span :class="item.cuxiaob">{{item.cuxiaobt}}</span>
							<span class="searchCuxiao">优选</span>
						</div>
						<span class="searchti">{{item.title}} </span>
						<div class="searchTags">
							<div class="searchTagsLeft">
								<span class="searchTagsI">已售<span class="xiaoliang">{{item.xiaol}}</span></span>|
								<span class="searchTagsI">评论<span class="pinglun">{{item.pingl}}</span></span>
							</div>
							<div class="searchTagsRight">
								<img v-lazy="item.ziying" alt="" />
							</div>
						</div>
						<div class="duibi">
							<div class="sdb">
								<input type="checkbox" />&nbsp;对比
							</div>
							<div class="shuocang">
								<span class="shuocangIcon"></span>&nbsp; 收藏
							</div>
							<div class="gouwu" @click="addToCart(index)">
								<span class="gouwuIcon"></span>&nbsp; 加入购物车
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="page">
			<div class="pagebox">
				<span class="nextpage"><<上一页</span>
				<span class="numpage pageActive">1</span>
				<span class="numpage">2</span>
				<span class="numpage">3</span>
				<span class="numpage1">···</span>
				<span class="numpage">17</span>
				<span class="nextpage nexActive">>>下一页</span>
				<span class="allpage">
	    	   	共 17 页 到第
	    	   </span>
				<input type="text" class="shunum" value="1" />页
				<button type="submit">确定</button>
			</div>
		</div>
		<div class="caiLike">
			<div class="caiLiketop">
				<div class="left">
					<span class="like"><strong>猜您喜欢</strong></span>
					<span class="lfen">您关注的分类：&nbsp;&nbsp;沙发</span>
				</div>
				<div class="right" @click="huanyipi">
					<i class="huan"></i><span>换一批</span>
				</div>
			</div>
			<div class="caiLikeb">
				<div class="caiLikeBox" v-for="(item,index) in huanyipd" :key="index">
					<div class="caiLikeItem">
				       <a href="#">
				       	<img :src="item.imgurl" alt="" />
				       	<div class="caipri"><span class="fhao">￥</span><span class="pri">{{item.pri}}</span><del>{{item.cuxiaop}}</del></div>
				       	<div class="title">{{item.title}}</div>
				         <div class="caiTags">
				         	<span class="caiTagsI">已售<span class="xiaoliang">{{item.xiaol}}</span></span>|
				         	<span class="caiTagsI">评论<span class="pinglun">{{item.pingl}}</span></span>
				         </div>
				       </a>
					</div>
				</div>
			</div>
		</div>
	    <div class="qitabox">
			<div class="qitaRight">
				<div class="qitahead">
					<span @click="tmishow(0)">建材<i></i>
					</span>
					<span @click="tmishow(1)">推荐家饰</span>
					<a href="#">更多</a>
				</div>
				<div class="qitabody">
					<div class="tuijian" v-for="(item,index) in tuijian" :key="index" v-show="tishow==index">
						<div class="tuijianh">
							<a href="#" class="aimg">
								<img :src="item.cont.imgurl" alt="">
							</a>
							<p class="tuijianhs">
							  <a href="#">{{item.cont.title}} </a>
							  <span>本站价：<i>{{item.cont.pri}}</i></span>
							  <span>月销量：{{item.cont.xiaol}}</span>
							</p>
						</div>
						<ul class="tuilist" v-for="(item1,index1) in item.cont.list">
							<li><a href="#">{{item1.ltit}}</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="qitaRight">
				<div class="qitahead">
					<span @click="rmishow(0)">最热文章<i></i>
					</span>
					<span @click="rmishow(1)">最新文章</span>
					<a href="#">更多</a>
				</div>
				<div class="qitabody">
					<ul class="listbox" v-for="(item,index) in listData" :key="index" v-show="rishow==index">
						<li class="listItem" v-for="(item1,index1) in item.title" :key="index1">
							<a href="#">{{item1.txt}}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="qitaRight">
				<div class="qitahead">
					<span>热销产品<i></i>
					</span>
					<span>家具</span>
					<a href="#">更多</a>
				</div>
				<div class="qitabody">
					<a href="#" v-for="(item,index) in tags" :key="index" class="qitabodyR">{{item}}</a>
				</div>
			</div>
		</div>
	    <footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
		<choujian></choujian>
		<fixedAdr></fixedAdr>
	</div>
</template>
<script>
	import mllheaderbar from '../../components/mll-header-bar'
	import SearchInput from '../../components/searchlogoSearchInput'
	import SearchNavbar from '../../components/SearchNavbar'
	import searchCheck from '../../components/searchCheck'
	import footerIcon from '../../components/footerIcon'
	import footerHelp from '../../components/footerHelp'
	import footerExtend from '../../components/footerExtend'
	import choujian from '../../components/choujian'
	import fixedAdr from '../../components/fixedAdr'
    import publicmlltop from '../../components/publicmlltop'
    import publicguangao from '../../components/publicguangao'
    import publicredr from '../../components/publicredr'
    
	export default {
		name: 'search',
		data() {
			return {
				rishow:0,
				tishow:0,
				title: ['综合', '销量', '价格', '评论数', '上架时间'],
				tags:['实木床','实木家具','沙发床','榻榻米床','榻榻米','整体衣柜','双人床','现代家具',
				'欧式沙发','隔断','简约家具','布艺沙发','转角沙发','儿童家具','客厅吸顶灯','松木家具',
				'欧式家具','实木衣柜','沙发茶几','美式家具','客厅灯','卫浴洁具'],
				tuijian:[{cont:{
					imgurl:'//img003.mllres.com/images/small/888/width/235/height/156/mode/1/encrypt/f73ceba9fccbc85b7370aed2320c0a03/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNWOoIpfUY2qoK_xst_HSYqU0seQ0MZODdJvtyMfFCVsh2Cnz0kE+mPpzS1BUrXSAC0owICU3XU0oWJpY4mBBwl.jpg',
					title:'简约现代无纺布墙纸竖条纹壁纸客厅沙发卧室电视背景',
					pri:'￥118',
					xiaol:226,
					list:[{ltit:'环保型 墙纸基膜   渗透性  环保无无异味 墙纸辅'},
					{ltit:'灯具套装（客厅吸顶灯+卧室吸顶灯）'},
					{ltit:'灯具套装（客厅吊灯+卧室吊灯+卧室台灯*2+餐厅吊灯'}]
				}},{cont:{
					imgurl:'http://img003.mllres.com/images/201707/1499909084744166202.jpg',
					title:'【梦坊•颗粒按摩乳胶枕】 天然乳胶 舒适 透气 ',
					pri:'￥188',
					xiaol:32,
					list:[{ltit:'【梦坊•狼牙按摩乳胶枕】 天然乳胶 舒适 透气 天鹅'},
					{ltit:'3D健康护颈枕'},
					{ltit:'梦鸢印花夏凉被 200*230cm'}]
				}}],
				listData:[{
					title:[
						{txt:'你想自己设计新家吗？告诉你怎么做'},
						{txt:'确认过眼神，这才是好看的美式乡村风！'},
						{txt:'利用好收纳，再多东西也装得下。'},
						{txt:'超希望家里有张工作台！不止为了工作！'},
						{txt:'搞定墙面收纳与装饰，也就一块洞洞板的事儿'},
						{txt:'轻巧有质感的藤编家具，任何人看了都想顺一个回家'},
						{txt:'16w半包高效装89㎡婚房，小户型摒弃了餐桌与飘窗'}
					]},{title:[
					{txt:'怎么挑选沙发_2019挑选沙发的注意事项'},
					{txt:'功能沙发，真的不只沙发变床这种“功能”而已……'},
					{txt:'一样是客厅，为什么你家的那么优秀！'},
					{txt:'皮沙发不保养，跟吃大餐不拍照有什么区别？'},
					{txt:'怎样选购皮沙发？怎么辨真假？'},
					{txt:'选沙发，别只看颜值，看不见的填充物更重要！'},
					{txt:'沙发形状/组合那么多，到底该怎么摆？！'},
					{txt:'哪些家具其实根本没必要买？'}
				]}],
				huanyipd:[],
				num:0,
				searchList: [{
					shopId:"sf0001",
					imgurl: '//img004.mllres.com//images/201803/1521424764267529527.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558919641855299766.png',
					pri: 24999.00,
					cuxiaop: '',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '莱克星顿系列 简美风格 沙发套装 典雅舒适 黄牛头层油蜡皮 进口橡胶木 高弹海绵 人性化设计 皮布沙发套装（1+2+3）',
					xiaol: 4369,
					pingl: 106,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0002",
					imgurl: '//img001.mllres.com//images/201605/1464689158740124589.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921116905653737.png',
					pri: '6599.00',
					cuxiaop: '￥7800',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '蒂美悦  现代风格 舒适黄牛真皮沙发 高弹性公仔棉真皮腰枕 带储物功能L型皮艺左/右转角沙发',
					xiaol: 94483,
					pingl: 5980,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0003",
					imgurl: '//img004.mllres.com//images/201710/1508207174239348923.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921588373983328.png',
					pri: '17799',
					cuxiaop: '￥20698',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '弗丽嘉系列  欧式田园 实木框架 高回弹海绵轻松倚靠皮艺沙发套装（1+2+3）',
					xiaol: 780,
					pingl: 9,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0004",
					imgurl: '//img002.mllres.com//images/201410/1413541726849464112.jpg',
					cuxiaoI: '',
					pri: '39898.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '托斯卡纳系列	 新古典风格 王者之巅 头层黄牛真皮 立体雕花手工描金沙发套装（1+2+3）',
					xiaol: 3036,
					pingl: 141,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0005",
					imgurl: '//img003.mllres.com//images/201703/1489464005238036821.jpg',
					cuxiaoI: '',
					pri: '39798',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '普莱森系列  美式古典 皇家御品 立体拉扣设计 覆盖性立体手工雕花 超强承重桦木框架 高档头层黄牛皮沙发组合【1+2+3】 ',
					xiaol: 2115,
					pingl: 39,
					shopsl:1,
					checkx:false,
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0006",
					imgurl: '//img002.mllres.com//images/201612/1482732205817547128.jpg',
					cuxiaoI: '',
					pri: '2599.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '良品LIFE 现代风格 布艺沙发 舒适棉麻 休闲沙发床 小户型多功能沙发组合（三人位+脚踏）含抱枕',
					xiaol: 5613,
					pingl: 139,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0007",
					imgurl: '//img001.mllres.com//images/201706/1497491910136230594.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920025809277712.png',
					pri: '23299.00',
					cuxiaop: '￥29799.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '香榭丽舍系列	新古典风格 全实木手工雕刻 香槟金 头层黄牛皮（1+2+3）组合沙发 ',
					xiaol: 1656,
					pingl: 34,
					shopsl:1,
					checkx:false,
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0008",
					imgurl: '//img002.mllres.com//images/201803/1521424764553327707.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920281111413793.png',
					pri: '3599.00',
					cuxiaop: '￥4299.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '良品LIFE 现代风格 沙发 从容有型 可调节靠背厚实座包经典灰色布艺转角沙发（1+2+左贵妃）',
					xiaol: 3450,
					pingl: 147,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0009",
					imgurl: '//img004.mllres.com//images/201803/1521424764267529527.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558919641855299766.png',
					pri: 24999.00,
					cuxiaop: '',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '莱克星顿系列 简美风格 沙发套装 典雅舒适 黄牛头层油蜡皮 进口橡胶木 高弹海绵 人性化设计 皮布沙发套装（1+2+3）',
					xiaol: 4369,
					pingl: 106,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0010",
					imgurl: '//img001.mllres.com//images/201605/1464689158740124589.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921116905653737.png',
					pri: '6599.00',
					cuxiaop: '￥7800',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '蒂美悦  现代风格 舒适黄牛真皮沙发 高弹性公仔棉真皮腰枕 带储物功能L型皮艺左/右转角沙发',
					xiaol: 94483,
					pingl: 5980,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0011",
					imgurl: '//img004.mllres.com//images/201710/1508207174239348923.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921588373983328.png',
					pri: '17799',
					cuxiaop: '￥20698',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '弗丽嘉系列  欧式田园 实木框架 高回弹海绵轻松倚靠皮艺沙发套装（1+2+3）',
					xiaol: 780,
					pingl: 9,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0012",
					imgurl: '//img002.mllres.com//images/201410/1413541726849464112.jpg',
					cuxiaoI: '',
					pri: '39898.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '托斯卡纳系列	 新古典风格 王者之巅 头层黄牛真皮 立体雕花手工描金沙发套装（1+2+3）',
					xiaol: 3036,
					pingl: 141,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0013",
					imgurl: '//img003.mllres.com//images/201703/1489464005238036821.jpg',
					cuxiaoI: '',
					pri: '39798',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '普莱森系列  美式古典 皇家御品 立体拉扣设计 覆盖性立体手工雕花 超强承重桦木框架 高档头层黄牛皮沙发组合【1+2+3】 ',
					xiaol: 2115,
					pingl: 39,
					shopsl:1,
					checkx:false,
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0014",
					imgurl: '//img002.mllres.com//images/201612/1482732205817547128.jpg',
					cuxiaoI: '',
					pri: '2599.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '良品LIFE 现代风格 布艺沙发 舒适棉麻 休闲沙发床 小户型多功能沙发组合（三人位+脚踏）含抱枕',
					xiaol: 5613,
					pingl: 139,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0015",
					imgurl: '//img001.mllres.com//images/201706/1497491910136230594.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920025809277712.png',
					pri: '23299.00',
					cuxiaop: '￥29799.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '香榭丽舍系列	新古典风格 全实木手工雕刻 香槟金 头层黄牛皮（1+2+3）组合沙发 ',
					xiaol: 1656,
					pingl: 34,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0016",
					imgurl: '//img002.mllres.com//images/201803/1521424764553327707.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920281111413793.png',
					pri: '3599.00',
					cuxiaop: '￥4299.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '良品LIFE 现代风格 沙发 从容有型 可调节靠背厚实座包经典灰色布艺转角沙发（1+2+左贵妃）',
					xiaol: 3450,
					pingl: 147,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0017",
					imgurl: '//img004.mllres.com//images/201803/1521424764267529527.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558919641855299766.png',
					pri: 24999.00,
					cuxiaop: '',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '莱克星顿系列 简美风格 沙发套装 典雅舒适 黄牛头层油蜡皮 进口橡胶木 高弹海绵 人性化设计 皮布沙发套装（1+2+3）',
					xiaol: 4369,
					pingl: 106,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0018",
					imgurl: '//img001.mllres.com//images/201605/1464689158740124589.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921116905653737.png',
					pri: '6599.00',
					cuxiaop: '￥7800',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '蒂美悦  现代风格 舒适黄牛真皮沙发 高弹性公仔棉真皮腰枕 带储物功能L型皮艺左/右转角沙发',
					xiaol: 94483,
					pingl: 5980,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0019",
					imgurl: '//img004.mllres.com//images/201710/1508207174239348923.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921588373983328.png',
					pri: '17799',
					cuxiaop: '￥20698',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '弗丽嘉系列  欧式田园 实木框架 高回弹海绵轻松倚靠皮艺沙发套装（1+2+3）',
					xiaol: 780,
					pingl: 9,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0020",
					imgurl: '//img002.mllres.com//images/201410/1413541726849464112.jpg',
					cuxiaoI: '',
					pri: '39898.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '托斯卡纳系列	 新古典风格 王者之巅 头层黄牛真皮 立体雕花手工描金沙发套装（1+2+3）',
					xiaol: 3036,
					pingl: 141,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0021",
					imgurl: '//img003.mllres.com//images/201703/1489464005238036821.jpg',
					cuxiaoI: '',
					pri: '39798',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '普莱森系列  美式古典 皇家御品 立体拉扣设计 覆盖性立体手工雕花 超强承重桦木框架 高档头层黄牛皮沙发组合【1+2+3】 ',
					xiaol: 2115,
					pingl: 39,
					shopsl:1,
					checkx:false,
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0022",
					imgurl: '//img002.mllres.com//images/201612/1482732205817547128.jpg',
					cuxiaoI: '',
					pri: '2599.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '良品LIFE 现代风格 布艺沙发 舒适棉麻 休闲沙发床 小户型多功能沙发组合（三人位+脚踏）含抱枕',
					xiaol: 5613,
					pingl: 139,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0023",
					imgurl: '//img001.mllres.com//images/201706/1497491910136230594.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920025809277712.png',
					pri: '23299.00',
					cuxiaop: '￥29799.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '香榭丽舍系列	新古典风格 全实木手工雕刻 香槟金 头层黄牛皮（1+2+3）组合沙发 ',
					xiaol: 1656,
					pingl: 34,
					shopsl:1,
					checkx:false,
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0024",
					imgurl: '//img002.mllres.com//images/201803/1521424764553327707.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920281111413793.png',
					pri: '3599.00',
					cuxiaop: '￥4299.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '良品LIFE 现代风格 沙发 从容有型 可调节靠背厚实座包经典灰色布艺转角沙发（1+2+左贵妃）',
					xiaol: 3450,
					pingl: 147,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0025",
					imgurl: '//img004.mllres.com//images/201803/1521424764267529527.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558919641855299766.png',
					pri: 24999.00,
					cuxiaop: '',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '莱克星顿系列 简美风格 沙发套装 典雅舒适 黄牛头层油蜡皮 进口橡胶木 高弹海绵 人性化设计 皮布沙发套装（1+2+3）',
					xiaol: 4369,
					pingl: 106,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0026",
					imgurl: '//img001.mllres.com//images/201605/1464689158740124589.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921116905653737.png',
					pri: '6599.00',
					cuxiaop: '￥7800',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '蒂美悦  现代风格 舒适黄牛真皮沙发 高弹性公仔棉真皮腰枕 带储物功能L型皮艺左/右转角沙发',
					xiaol: 94483,
					pingl: 5980,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0027",
					imgurl: '//img004.mllres.com//images/201710/1508207174239348923.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558921588373983328.png',
					pri: '17799',
					cuxiaop: '￥20698',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '弗丽嘉系列  欧式田园 实木框架 高回弹海绵轻松倚靠皮艺沙发套装（1+2+3）',
					xiaol: 780,
					pingl: 9,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0028",
					imgurl: '//img002.mllres.com//images/201410/1413541726849464112.jpg',
					cuxiaoI: '',
					pri: '39898.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '托斯卡纳系列	 新古典风格 王者之巅 头层黄牛真皮 立体雕花手工描金沙发套装（1+2+3）',
					xiaol: 3036,
					pingl: 141,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0029",
					imgurl: '//img003.mllres.com//images/201703/1489464005238036821.jpg',
					cuxiaoI: '',
					pri: '39798',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '普莱森系列  美式古典 皇家御品 立体拉扣设计 覆盖性立体手工雕花 超强承重桦木框架 高档头层黄牛皮沙发组合【1+2+3】 ',
					xiaol: 2115,
					pingl: 39,
					shopsl:1,
					checkx:false,
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0030",
					imgurl: '//img002.mllres.com//images/201612/1482732205817547128.jpg',
					cuxiaoI: '',
					pri: '2599.00',
					cuxiaop: '',
					cuxiaob: '',
					cuxiaobt: '',
					title: '良品LIFE 现代风格 布艺沙发 舒适棉麻 休闲沙发床 小户型多功能沙发组合（三人位+脚踏）含抱枕',
					xiaol: 5613,
					pingl: 139,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}, {
					shopId:"sf0031",
					imgurl: '//img001.mllres.com//images/201706/1497491910136230594.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920025809277712.png',
					pri: '23299.00',
					cuxiaop: '￥29799.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '香榭丽舍系列	新古典风格 全实木手工雕刻 香槟金 头层黄牛皮（1+2+3）组合沙发 ',
					xiaol: 1656,
					pingl: 34,
					shopsl:1,
					checkx:false,
					shangjia:'梦婉茹家纺旗舰店',
					
					ziying: ''
				}, {
					shopId:"sf0032",
					imgurl: '//img002.mllres.com//images/201803/1521424764553327707.jpg',
					cuxiaoI: 'http://image.meilele.com/images/201905/1558920281111413793.png',
					pri: '3599.00',
					cuxiaop: '￥4299.00',
					cuxiaob: 'searchmcx',
					cuxiaobt: '惊爆价',
					title: '良品LIFE 现代风格 沙发 从容有型 可调节靠背厚实座包经典灰色布艺转角沙发（1+2+左贵妃）',
					xiaol: 3450,
					pingl: 147,
					shopsl:1,
					checkx:false,
					shangjia:'美乐乐自营',
					ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7'
				}],
				tempList:[]
			}		
		},
		components: {
			mllheaderbar,
			SearchInput,
			SearchNavbar,
			searchCheck,
			footerIcon,
			footerHelp,
			footerExtend,
			choujian,
			fixedAdr,
			publicmlltop,
			publicguangao,
			publicredr

		},
		methods: {
			huanyipi(){
				if(this.num>31){
					this.num=0;
				}
				console.log(this.num);
				this.huanyipd=[];
				for(var i=this.num;i<this.num+4;i++){
					this.huanyipd.push(this.searchList[i]);
				}
				this.num=this.num+4;
			},
			rmishow(index){
				if(index==0){
					this.rishow=1
				}else{
					this.rishow=0
				}
			},
			tmishow(index){
				if(index==0){
					this.tishow=1
				}else{
					this.tishow=0
				}
			},
			addToCart(index){
				var goods = this.searchList[index];
				if(this.tempList.length==0){
					this.tempList.push(goods);
				}else{
					for(var i=0;i<this.tempList.length;i++){
						if(this.tempList[i].shopId!=goods.shopId){
							this.tempList.push(goods);	
						}else if(this.tempList[i].shopId==goods.shopId){
							this.tempList[i].shopsl+=1;
							break;
						}
					}
				}
				var v = JSON.stringify(this.tempList);
				window.sessionStorage.setItem('cart',v);
			}
		},
		mounted(){
			this.huanyipi();
		}
	}
</script>
<style lang="less" scoped="scoped">
	.box {
		font-family: Microsoft YaHei;
		font-size: 12px;
		.xuanz {
			width: 1200px;
			margin: 0 auto;
			border: 1px solid #e6e6e6;
			.xuanzT {
				height: 25px;
				line-height: 24px;
				padding: 6px 10px 5px;
				border-bottom: solid 1px #e6e6e6;
				background: #f3f3f3;
				display: flex;
				justify-content: space-between;
				.xuanztitle {
					height: 21px;
					padding: 0 9px;
					border: 1px solid #e6e6e6;
					border-left: none;
					text-align: center;
					display: inline-block;
					color: #666;
					&:first-of-type {
						border-left: 1px solid #e6e6e6;
					}
				}
			}
			.xuanzTR {
				color: #999;
				display: flex;
				align-items: center;
				.colorNum {
					color: red;
					font-weight: bold;
					margin: 0 3px;
				}
				.fenye {
					margin-left: 10px;
					font-size: 13px;
				}
				.xuanzleftI {
					display: inline-block;
					width: 21px;
					height: 21px;
					margin: 0 4px;
					background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') no-repeat -21px -191px;
				}
				.xuanzRightI {
					display: inline-block;
					width: 21px;
					height: 21px;
					background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') no-repeat -46px -191px;
				}
			}
			.xuanzF {
				padding: 0 10px;
				line-height: 35px;
				background: #fcfcfc;
				display: flex;
				align-items: center;
				.peisong {
					height: 22px;
					line-height: 22px;
					color: #666;
					border: 1px solid #e6e6e6;
					padding: 0 4px;
					margin-left: 4px;
					cursor: pointer;
					.psdown {
						display: inline-block;
						height: 5px;
						width: 9px;
						margin: 0 3px 0 6px;
						background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') -89px -232px no-repeat;
					}
				}
				.peradio {
					display: flex;
					margin-left: 12px;
					align-items: center;
					line-height: 35px;
					.peradioi {
						margin-left: 12px;
						input {
							margin-right: 4px;
							vertical-align: -2px;
						}
					}
				}
				.pscheckbox {
					margin-left: 30px;
					display: flex;
					.pscheck {
						margin-right: 14px;
						input {
							vertical-align: -2px;
							margin-right: 4px;
							background: #fff;
						}
					}
				}
			}
		}
		.searchConent {
			width: 1200px;
			margin: 20px auto 10px;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.searchItemd {
				position: relative;
				height: 294px;
				width: 280px;
				background: #fff;
				.searchItem {
					height: 294px;
					width: 280px;
					margin-right: 20px;
					margin-bottom: 15px;
					border: 1px solid #f5f5f5;
					position: relative;
					z-index: 1;
					box-sizing: border-box;
					background: #fff;
					.searchItemC {
						width: 266px;
						margin-bottom: 0;
						background: #fff;
						position: absolute;
						z-index: 2;
						a {
							display: inline-block;
							height: 100%;
							width: 100%;
							.imgl {
								height: 182px;
								width: 266px;
								position: relative;
								img {
									width: 266px;
									height: 177px;
									display: block;
									margin-left: 5px;
									margin-top: 5px;
								}
								.searchAdr {
									position: absolute;
									height: 70px;
									width: 80px;
									top: 0;
									right: 0;
									img {
										height: 70px;
										width: 80px;
									}
								}
								.xiangshi {
									position: absolute;
									bottom: 5px;
									left: 5px;
									line-height: 30px;
									width: 266px;
									background: rgba(0, 0, 0, 0.4);
									text-align: center;
									color: #fff;
									font-size: 14px;
									display: none;
								}
							}
						}
						.searchMoney {
							line-height: 26px;
							font-size: 18px;
							color: red;
							margin-left: 5px;
							.Mnum {
								font-family: Arial;
								.Mfhao {
									font-size: 14px;
								}
								del {
									font-size: 12px;
									margin-left: 4px;
									margin-right: 4px;
									color: #999;
								}
							}
							.searchmcx {
								font-size: 12px;
								line-height: 17px;
								color: #fff;
								background: #FC6670;
								padding: 1px 2px;
							}
							.searchCuxiao {
								font-size: 12px;
								line-height: 17px;
								color: #fff;
								background: #D2B770;
								padding: 1px 2px;
							}
						}
						.searchti {
							display: -webkit-box;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2;
							overflow: hidden;
							margin-left: 7px;
							line-height: 18px;
							cursor: pointer;
							&:hover {
								color: red;
							}
						}
						.searchTags {
							margin: 0 7px;
							display: flex;
							align-items: center;
							line-height: 36px;
							justify-content: space-between;
							.searchTagsLeft {
								line-height: 36px;
								color: #999;
								.searchTagsI {
									cursor: pointer;
									.xiaoliang {
										margin-right: 4px;
										margin-left: 4px;
										color: #38b;
										font-weight: bold;
									}
									.pinglun {
										margin-right: 4px;
										margin-left: 4px;
										color: #999;
										font-weight: bold;
									}
									&:last-of-type {
										margin-left: 2px;
									}
									&:hover {
										color: red;
										.xiaoliang {
											&:hover {
												color: #f60;
											}
										}
										.pinglun {
											&:hover {
												color: #f60;
											}
										}
									}
								}
							}
							.searchTagsRight {
								line-height: 36px;
								display: flex;
								align-items: center;
							}
						}
						.duibi {
							font-size: 13px;
							line-height: 28px;
							cursor: pointer;
							margin: 0 7px;
							z-index: 2;
							display: none;
							.sdb {
								width: 73px;
								border: 1px solid #ccc;
								border-right: none;
								float: left;
								text-align: center;
								input {
									vertical-align: -2px;
								}
								&:hover {
									color: red;
								}
							}
							.shuocang {
								width: 73px;
								border: 1px solid #ccc;
								border-right: none;
								text-align: center;
								transition: all 0.2s;
								cursor: pointer;
								float: left;
								.shuocangIcon {
									display: inline-block;
									width: 17px;
									height: 13px;
									background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') no-repeat -34px -3px;
									vertical-align: -1px;
								}
								&:hover {
									color: red;
									.shuocangIcon {
										background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') no-repeat -34px -27px;
									}
								}
							}
							.gouwu {
								width: 102px;
								border: 1px solid #ccc;
								text-align: center;
								color: red;
								cursor: pointer;
								float: left;
								.gouwuIcon {
									display: inline-block;
									width: 16px;
									height: 16px;
									background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') no-repeat -73px 0px;
									vertical-align: -2px;
								}
							}
						}
					}
					&:nth-of-type(4) {
						margin-right: 0;
					}
					&:nth-of-type(8) {
						margin-right: 0;
					}
					&:nth-of-type(12) {
						margin-right: 0;
					}
					&:nth-of-type(16) {
						margin-right: 0;
					}
					&:nth-of-type(20) {
						margin-right: 0;
					}
					&:nth-of-type(24) {
						margin-right: 0;
					}
					&:nth-of-type(28) {
						margin-right: 0;
					}
					&:nth-of-type(32) {
						margin-right: 0;
					}
					&:hover {
						border: 2px solid red;
						height: 334px;
						position: absolute;
						top: 0;
						left: 0;
						z-index: 100;
						.searchItemC {
							padding-right: 1px;
							padding-top: -2px;
							.duibi {
								display: block;
							}
							a {
								.xiangshi {
									display: block;
								}
							}
						}
					}
				}
			}
		}
		.page {
			width: 1190px;
			padding: 0 5px;
			margin: 0 auto;
			line-height: 38px;
			text-align: center;
			font-size: 15px;
			color: #333;
			margin-top: 38px;
			.pagebox {
				span {
					display: inline-block;
					border: 1px solid #ddd;
					padding: 0 14px;
					margin-right: 6px;
					cursor: pointer;
				}
				.nextpage {
					color: #999;
				}
				.numpage1 {
					border: none;
				}
				.numpage {
					&:hover {
						color: red;
					}
				}
				.allpage {
					border: none;
					color: #666;
				}
				input {
					height: 36px;
					width: 36px;
					text-align: center;
					vertical-align: 2px;
					border: 1px solid #ddd;
					margin-right: 8px;
				}
				button {
					width: 50px;
					height: 40px;
					vertical-align: 2px;
					color: #666;
					border: 1px solid #ddd;
					background: #F5F5F5;
					margin-left: 5px;
					font-size: 14px;
					cursor: pointer;
				}
				.pageActive {
					background: red;
					color: #fff;
					&:hover {
						color: #fff;
					}
				}
				.nexActive {
					border: 2px solid red;
					color: #666;
				}
			}
		}
		.caiLike {
			width: 1190px;
			margin: 30px auto 20px;
			padding: 0 7px;
			.caiLiketop {
				justify-content: space-between;
				align-items: center;
				display: flex;
				line-height: 40px;
				.left {
					.like {
						font-size: 15px;
						margin-right: 30px;
					}
					.lfen {
						color: #666;
					}
				}
				.right{
					color: #666;
					font-size: 13px;
					cursor: pointer;
					.huan{
						display:inline-block;
						height: 15px;
						width: 16px;
						background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') no-repeat -102px -77px;
					    vertical-align: -3px;
					    margin-right: 6px;
					}
				}
			}
			.caiLikeb{
				display: flex;
				.caiLikeBox{
					width: 280px;
					height: 284px;
					margin-right: 20px;
					border: 1px solid #ddd;
					.caiLikeItem{
						width: 266px;
						height: 276px;
						margin: 7px auto 0px;
						a{
							display: block;
							img{
								width: 266px;
								height: 177px;
							}
							.caipri{
								margin-top: 4px;
								font-size: 18px;
								color: red;
								font-family: Arial;
								.fhao{
									font-size: 12px;
								}
								del{
									font-size: 12px;
									color: #999;
									margin-left: 6px;
								}
							}
							.title{
								line-height: 18px;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								overflow: hidden;
								line-height: 18px;
								cursor: pointer;
								color: #333;
							}
							.caiTags{
								color: #888;
								line-height: 26px;
								.caiTagsI{
									display: inline-block;
									&:first-of-type{
										margin-right: 14px;
									}
									&:last-of-type{
										margin-left: 14px;
									}
									.xiaoliang{
										color: #38b;
										font-weight: bold;
										display: inline-block;
										margin-left: 4px;
									}
									.pinglun{
										color: #999;
										display: inline-block;
										font-weight: bold;
										margin-left: 4px;
									}
								}
							}
						}
					}
					&:nth-of-type(4) {
						margin-right: 0;
					}
				}
			}
			
		}
	    .qitabox{
			display: flex;
			justify-content: space-between;
			width: 1148px;
			height: 233px;
			padding: 35px 20px;
			border: solid 1px #ddd;
			margin: 30px auto 60px;
			overflow: hidden;
			.qitaRight{
				width: 370px;
				height: 236px;
				.qitahead{
					line-height: 34px;
					border-bottom: solid 1px #ddd;
					font-size: 14px;
					color: #333;
					span{
						display: inline-block;
						line-height: 33px;
						padding: 0 24px;
						cursor: pointer;
						position: relative;
						&:hover{
							border-bottom: 1px solid red;
							font-weight: bold;
						}
						i{
							display: inline-block;
							position: absolute;
							top: 2px;
							right: 0px;
							width: 23px;
							height: 14px;
							background: url('https://static.mllres.com/mll/mpg/category/i/hot.gif') no-repeat 0px 0px;
						}
					}
					a{
						display: inline-block;
						width: 60px;
						text-align: right;
						font-size: 13px;
						color: #666;
						cursor: pointer;
						float: right;
					}
				}
				.qitabody{
					margin-top: 14px;
					display: flex;
					flex-wrap: wrap;
					.qitabodyR{
						font-size: 12px;
						margin-bottom: 10px;
						font-family: '微软雅黑';
						background-color: #f5f5f5;
						color: #666;
						display: inline-block;
						overflow: hidden;
						text-decoration: none;
						border-radius: 2px;
						line-height: 12px;
						height: 12px;
						text-align: center;
						padding: 8px 10px;
						-moz-border-radius: 2px;
						-webkit-border-radius: 2px;
						vertical-align: middle; 
						margin-right: 10px;
						cursor: pointer;
						&:hover{
							color: #fff;
							background: red;
						}
					}
					.listbox{
						list-style:disc !import;
						margin-left: 16px;
						line-height: 24px;
						a{
							color: #333;
							text-decoration: none;
							&:hover{
								color: red;
							}
						}
					}
					.tuijian{
						
						.tuijianh{
							display: flex;
							margin-bottom: 20px;
							.aimg{
								width: 146px;
								height: 97px;
								img{
									width: 146px;
									height: 97px;
								}
							}
							.tuijianhs{
								margin-left: 16px;
								a{
									display: block;
									line-height: 18px;
									color: #333;
									&:hover{
										color: red;
									}
								}
								span{
									display: block;
									color: #999;
									line-height: 20px;
									i{
										font-style: normal;
										color: red;
										font-weight: bold;
									}
								}
							}
						}
						.tuilist{
							margin-left: 16px;
							li{
								line-height: 20px;
	                            a{
									color: #333;
									text-decoration: none;
									&:hover{
										color: red;
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>