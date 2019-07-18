<template>
	<div class="public-nav-bar">
		<ul class="nav-bar">
			<li class="nav-bar-item" @mouseenter="boxshow" @mouseleave="boxhidden">
				<span>商品分类<i class="navdown"></i></span>
				<ul class="itemlistbox" v-show="listShow">
					<li v-for="(item,index) in itemlist" :class="{'active':item.ishow}" @mouseenter="f1(index)" @mouseleave="f2(index)" :key="index">
						<i :class="item.cla"></i>
						<span class="itembox" v-for="(item1,index1) in item.item" :key="index1">
							<router-link to="/search">{{item1.txt}}</router-link>
						</span>
						<div class="sub-cat" v-show="item.ishow">
							<div class="sub-cat-left">
								<div class="sub-cat-left-box" v-for="(item2,index2) in item.cont" :key="index2">
									<span class="title">
							    		<router-link to="/search">{{item2.title}}</router-link>
							    	</span>
									<div class="itemboxr">
										<router-link to="/search" v-for="(item3,index3) in item2.listitem" :key="index3">{{item3.contxt}}</router-link>
									</div>
								</div>
							</div>
							<div class="sub-cat-right">
								<div class="sub-cat-right-box" v-for="(item4,index4) in item.contr">
									<span class="scrtitle"><router-link to="/search">{{item4.title}}</router-link></span>
									<a href="#" v-for="(item5,index5) in item4.listitem">{{item5.contxt}}</a>
								</div>
								<router-link to="/search" class="aimg"><img :src="item.srcImages" /></router-link>
							</div>
						</div>
					</li>
				</ul>
			</li>
			<li v-for="(item,index) in navbarlist" :key="index" :class="item.cla" class="nav-bar-daohang">
				<router-link href="#" :to="item.dizhi">{{item.txt}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "SearchNavbar",
		data() {
			return {
				listShow:false,
				navbarlist: [{
					txt: "首页",dizhi:'/index'
				}, {
					txt: "家具城",dizhi:'/Jiaju'
				}, {
					txt: "建材城",dizhi:'/jiancai'
				}, {
					txt: "家居家饰",dizhi:'/shipin'
				}, {
					txt: "团购",dizhi:'/tuangou'
				}, {
					txt: "体验馆",dizhi:'/Jiaju'
				}, {
					txt: "阅木",dizhi:'/jiancai'
				}, {
					txt: "晒家",dizhi:'/shipin'
				}, {
					txt: "图览家居",dizhi:'/tuangou'
				}, {
					txt: "装修网",dizhi:'/Jiaju'
				}],
				itemlist: [{
					item: [{
						txt: '家具'
					}],
					cla: "jiajuicon",
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '客厅',
						listitem: [{
							contxt: "沙发"
						}, {
							contxt: "电视柜"
						}, {
							contxt: "茶几/边桌"
						}, {
							contxt: "酒柜/装饰柜"
						}, {
							contxt: "鞋柜"
						}, {
							contxt: "间厅/玄关柜"
						}, {
							contxt: "休闲椅/凳"
						}, {
							contxt: "花架/装饰架"
						}, {
							contxt: "屏风"
						}, {
							contxt: "客厅套装"
						}]
					}, {
						title: '餐厅',
						listitem: [{
							contxt: "餐桌"
						}, {
							contxt: "餐椅"
						}, {
							contxt: "餐边柜"
						}, {
							contxt: "餐厅套装"
						}]
					}, {
						title: '书房',
						listitem: [{
							contxt: "书桌/工作台"
						}, {
							contxt: "书椅/转椅"
						}, {
							contxt: "书柜/书架"
						}, {
							contxt: "书房套装"
						}]
					}, {
						title: '儿童房',
						listitem: [{
							contxt: "儿童床"
						}, {
							contxt: "儿童床垫"
						}, {
							contxt: "儿童床头柜"
						}, {
							contxt: "儿童桌"
						}, {
							contxt: "儿童椅"
						}, {
							contxt: "儿童柜类"
						}]
					}, {
						title: '户外椅',
						listitem: [{
							contxt: "户外柜"
						}, {
							contxt: "遮阳伞"
						}, {
							contxt: "户外套装"
						}, {
							contxt: "吊篮/吊椅"
						}, {
							contxt: "折叠床"
						}, {
							contxt: "户外椅"
						}, {
							contxt: "藤艺家具"
						}]
					}, {
						title: '办公家具',
						listitem: [{
							contxt: "办公桌"
						}, {
							contxt: "办公椅"
						}, {
							contxt: "办公沙发"
						}, {
							contxt: "文件柜"
						}, {
							contxt: "保险柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "凯撒豪庭"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "白金宫殿"
						}, {
							contxt: "法兰西玫瑰"
						}, {
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "蓝旗家具"
						}, {
							contxt: "卡洛琳"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}]
					}],
					srcImages: 'http://img003.mllres.com/images/201603/1459276000034257693.jpg'
				}, {
					item: [{
						txt: '卧室 /'
					}, {
						txt: '床 /'
					}, {
						txt: '床垫 /'
					}, {
						txt: '衣柜'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '热门搜索',
						listitem: [{
							contxt: "实木床"
						}, {
							contxt: "布艺床"
						}, {
							contxt: "乳胶床垫"
						}, {
							contxt: "进口床垫"
						}, {
							contxt: "简美床"
						}, {
							contxt: "欧式床"
						}, {
							contxt: "美式床"
						}, {
							contxt: "北欧床"
						}, {
							contxt: "榻榻米"
						}, {
							contxt: "高箱床"
						}, {
							contxt: "床板床"
						}, {
							contxt: "排骨床架"
						}, {
							contxt: "真皮床"
						}, {
							contxt: "趟门衣柜"
						}, {
							contxt: "拉门衣柜"
						}, {
							contxt: "四门衣柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "蓝琦家居"
						}, {
							contxt: "艾玛诗"
						}, {
							contxt: "美宜经典"
						}, {
							contxt: "彼岸阳光"
						}, {
							contxt: "苏美尔"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}, {
							contxt: "达美风情"
						}, {
							contxt: "凤凰天"
						}]
					}],
					srcImages: 'http://img003.mllres.com/images/201603/1459277421555846685.jpg'
				}, {
					item: [{
						txt: '客厅 /'
					}, {
						txt: ' 沙发 /'
					}, {
						txt: ' 电视柜'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '客厅',
						listitem: [{
							contxt: "沙发"
						}, {
							contxt: "电视柜"
						}, {
							contxt: "茶几/边桌"
						}, {
							contxt: "酒柜/装饰柜"
						}, {
							contxt: "鞋柜"
						}, {
							contxt: "间厅/玄关柜"
						}, {
							contxt: "休闲椅/凳"
						}, {
							contxt: "花架/装饰架"
						}, {
							contxt: "屏风"
						}, {
							contxt: "客厅套装"
						}]
					}, {
						title: '餐厅',
						listitem: [{
							contxt: "餐桌"
						}, {
							contxt: "餐椅"
						}, {
							contxt: "餐边柜"
						}, {
							contxt: "餐厅套装"
						}]
					}, {
						title: '书房',
						listitem: [{
							contxt: "书桌/工作台"
						}, {
							contxt: "书椅/转椅"
						}, {
							contxt: "书柜/书架"
						}, {
							contxt: "书房套装"
						}]
					}, {
						title: '儿童房',
						listitem: [{
							contxt: "儿童床"
						}, {
							contxt: "儿童床垫"
						}, {
							contxt: "儿童床头柜"
						}, {
							contxt: "儿童桌"
						}, {
							contxt: "儿童椅"
						}, {
							contxt: "儿童柜类"
						}]
					}, {
						title: '户外椅',
						listitem: [{
							contxt: "户外柜"
						}, {
							contxt: "遮阳伞"
						}, {
							contxt: "户外套装"
						}, {
							contxt: "吊篮/吊椅"
						}, {
							contxt: "折叠床"
						}, {
							contxt: "户外椅"
						}, {
							contxt: "藤艺家具"
						}]
					}, {
						title: '办公家具',
						listitem: [{
							contxt: "办公桌"
						}, {
							contxt: "办公椅"
						}, {
							contxt: "办公沙发"
						}, {
							contxt: "文件柜"
						}, {
							contxt: "保险柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "凯撒豪庭"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "白金宫殿"
						}, {
							contxt: "法兰西玫瑰"
						}, {
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "蓝旗家具"
						}, {
							contxt: "卡洛琳"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}]
					}],
					srcImages: 'http://img001.mllres.com/images/201603/1459277508760209931.jpg'
				}, {
					item: [{
						txt: '餐厅 /'
					}, {
						txt: ' 餐桌 /'
					}, {
						txt: ' 餐椅'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '热门搜索',
						listitem: [{
							contxt: "实木床"
						}, {
							contxt: "布艺床"
						}, {
							contxt: "乳胶床垫"
						}, {
							contxt: "进口床垫"
						}, {
							contxt: "简美床"
						}, {
							contxt: "欧式床"
						}, {
							contxt: "美式床"
						}, {
							contxt: "北欧床"
						}, {
							contxt: "榻榻米"
						}, {
							contxt: "高箱床"
						}, {
							contxt: "床板床"
						}, {
							contxt: "排骨床架"
						}, {
							contxt: "真皮床"
						}, {
							contxt: "趟门衣柜"
						}, {
							contxt: "拉门衣柜"
						}, {
							contxt: "四门衣柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "蓝琦家居"
						}, {
							contxt: "艾玛诗"
						}, {
							contxt: "美宜经典"
						}, {
							contxt: "彼岸阳光"
						}, {
							contxt: "苏美尔"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}, {
							contxt: "达美风情"
						}, {
							contxt: "凤凰天"
						}]
					}],
					srcImages: 'http://img004.mllres.com/images/201603/1459277717813693756.jpg'
				}, {
					item: [{
						txt: '书房 /'
					}, {
						txt: ' 书桌 /'
					}, {
						txt: ' 书柜'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '客厅',
						listitem: [{
							contxt: "沙发"
						}, {
							contxt: "电视柜"
						}, {
							contxt: "茶几/边桌"
						}, {
							contxt: "酒柜/装饰柜"
						}, {
							contxt: "鞋柜"
						}, {
							contxt: "间厅/玄关柜"
						}, {
							contxt: "休闲椅/凳"
						}, {
							contxt: "花架/装饰架"
						}, {
							contxt: "屏风"
						}, {
							contxt: "客厅套装"
						}]
					}, {
						title: '餐厅',
						listitem: [{
							contxt: "餐桌"
						}, {
							contxt: "餐椅"
						}, {
							contxt: "餐边柜"
						}, {
							contxt: "餐厅套装"
						}]
					}, {
						title: '书房',
						listitem: [{
							contxt: "书桌/工作台"
						}, {
							contxt: "书椅/转椅"
						}, {
							contxt: "书柜/书架"
						}, {
							contxt: "书房套装"
						}]
					}, {
						title: '儿童房',
						listitem: [{
							contxt: "儿童床"
						}, {
							contxt: "儿童床垫"
						}, {
							contxt: "儿童床头柜"
						}, {
							contxt: "儿童桌"
						}, {
							contxt: "儿童椅"
						}, {
							contxt: "儿童柜类"
						}]
					}, {
						title: '户外椅',
						listitem: [{
							contxt: "户外柜"
						}, {
							contxt: "遮阳伞"
						}, {
							contxt: "户外套装"
						}, {
							contxt: "吊篮/吊椅"
						}, {
							contxt: "折叠床"
						}, {
							contxt: "户外椅"
						}, {
							contxt: "藤艺家具"
						}]
					}, {
						title: '办公家具',
						listitem: [{
							contxt: "办公桌"
						}, {
							contxt: "办公椅"
						}, {
							contxt: "办公沙发"
						}, {
							contxt: "文件柜"
						}, {
							contxt: "保险柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "凯撒豪庭"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "白金宫殿"
						}, {
							contxt: "法兰西玫瑰"
						}, {
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "蓝旗家具"
						}, {
							contxt: "卡洛琳"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}]
					}],
					srcImages: 'http://img002.mllres.com/images/201603/1459277798944333843.jpg'
				}, {
					item: [{
						txt: '儿童房 /'
					}, {
						txt: ' 儿童床 /'
					}, {
						txt: ' 儿童桌'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '热门搜索',
						listitem: [{
							contxt: "实木床"
						}, {
							contxt: "布艺床"
						}, {
							contxt: "乳胶床垫"
						}, {
							contxt: "进口床垫"
						}, {
							contxt: "简美床"
						}, {
							contxt: "欧式床"
						}, {
							contxt: "美式床"
						}, {
							contxt: "北欧床"
						}, {
							contxt: "榻榻米"
						}, {
							contxt: "高箱床"
						}, {
							contxt: "床板床"
						}, {
							contxt: "排骨床架"
						}, {
							contxt: "真皮床"
						}, {
							contxt: "趟门衣柜"
						}, {
							contxt: "拉门衣柜"
						}, {
							contxt: "四门衣柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "蓝琦家居"
						}, {
							contxt: "艾玛诗"
						}, {
							contxt: "美宜经典"
						}, {
							contxt: "彼岸阳光"
						}, {
							contxt: "苏美尔"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}, {
							contxt: "达美风情"
						}, {
							contxt: "凤凰天"
						}]
					}],
					srcImages: 'http://img004.mllres.com/images/201603/1459278022227398145.jpg'
				}, {
					item: [{
						txt: '户外 /'
					}, {
						txt: ' 阳台 /'
					}, {
						txt: ' 办公家具'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '客厅',
						listitem: [{
							contxt: "沙发"
						}, {
							contxt: "电视柜"
						}, {
							contxt: "茶几/边桌"
						}, {
							contxt: "酒柜/装饰柜"
						}, {
							contxt: "鞋柜"
						}, {
							contxt: "间厅/玄关柜"
						}, {
							contxt: "休闲椅/凳"
						}, {
							contxt: "花架/装饰架"
						}, {
							contxt: "屏风"
						}, {
							contxt: "客厅套装"
						}]
					}, {
						title: '餐厅',
						listitem: [{
							contxt: "餐桌"
						}, {
							contxt: "餐椅"
						}, {
							contxt: "餐边柜"
						}, {
							contxt: "餐厅套装"
						}]
					}, {
						title: '书房',
						listitem: [{
							contxt: "书桌/工作台"
						}, {
							contxt: "书椅/转椅"
						}, {
							contxt: "书柜/书架"
						}, {
							contxt: "书房套装"
						}]
					}, {
						title: '儿童房',
						listitem: [{
							contxt: "儿童床"
						}, {
							contxt: "儿童床垫"
						}, {
							contxt: "儿童床头柜"
						}, {
							contxt: "儿童桌"
						}, {
							contxt: "儿童椅"
						}, {
							contxt: "儿童柜类"
						}]
					}, {
						title: '户外椅',
						listitem: [{
							contxt: "户外柜"
						}, {
							contxt: "遮阳伞"
						}, {
							contxt: "户外套装"
						}, {
							contxt: "吊篮/吊椅"
						}, {
							contxt: "折叠床"
						}, {
							contxt: "户外椅"
						}, {
							contxt: "藤艺家具"
						}]
					}, {
						title: '办公家具',
						listitem: [{
							contxt: "办公桌"
						}, {
							contxt: "办公椅"
						}, {
							contxt: "办公沙发"
						}, {
							contxt: "文件柜"
						}, {
							contxt: "保险柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "凯撒豪庭"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "白金宫殿"
						}, {
							contxt: "法兰西玫瑰"
						}, {
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "蓝旗家具"
						}, {
							contxt: "卡洛琳"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}]
					}],
					srcImages: 'http://img003.mllres.com/images/201807/1532538552645266754.jpg'
				}, {
					item: [{
						txt: '家具建材 '
					}],
					cla: "jiacaiicon",
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '热门搜索',
						listitem: [{
							contxt: "实木床"
						}, {
							contxt: "布艺床"
						}, {
							contxt: "乳胶床垫"
						}, {
							contxt: "进口床垫"
						}, {
							contxt: "简美床"
						}, {
							contxt: "欧式床"
						}, {
							contxt: "美式床"
						}, {
							contxt: "北欧床"
						}, {
							contxt: "榻榻米"
						}, {
							contxt: "高箱床"
						}, {
							contxt: "床板床"
						}, {
							contxt: "排骨床架"
						}, {
							contxt: "真皮床"
						}, {
							contxt: "趟门衣柜"
						}, {
							contxt: "拉门衣柜"
						}, {
							contxt: "四门衣柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "蓝琦家居"
						}, {
							contxt: "艾玛诗"
						}, {
							contxt: "美宜经典"
						}, {
							contxt: "彼岸阳光"
						}, {
							contxt: "苏美尔"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}, {
							contxt: "达美风情"
						}, {
							contxt: "凤凰天"
						}]
					}],
					srcImages: 'http://img002.mllres.com/images/201603/1459277094986530669.jpg'
				}, {
					item: [{
						txt: '灯饰照明 /'
					}, {
						txt: ' 吊灯 /'
					}, {
						txt: ' 吸顶灯'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '客厅',
						listitem: [{
							contxt: "沙发"
						}, {
							contxt: "电视柜"
						}, {
							contxt: "茶几/边桌"
						}, {
							contxt: "酒柜/装饰柜"
						}, {
							contxt: "鞋柜"
						}, {
							contxt: "间厅/玄关柜"
						}, {
							contxt: "休闲椅/凳"
						}, {
							contxt: "花架/装饰架"
						}, {
							contxt: "屏风"
						}, {
							contxt: "客厅套装"
						}]
					}, {
						title: '餐厅',
						listitem: [{
							contxt: "餐桌"
						}, {
							contxt: "餐椅"
						}, {
							contxt: "餐边柜"
						}, {
							contxt: "餐厅套装"
						}]
					}, {
						title: '书房',
						listitem: [{
							contxt: "书桌/工作台"
						}, {
							contxt: "书椅/转椅"
						}, {
							contxt: "书柜/书架"
						}, {
							contxt: "书房套装"
						}]
					}, {
						title: '儿童房',
						listitem: [{
							contxt: "儿童床"
						}, {
							contxt: "儿童床垫"
						}, {
							contxt: "儿童床头柜"
						}, {
							contxt: "儿童桌"
						}, {
							contxt: "儿童椅"
						}, {
							contxt: "儿童柜类"
						}]
					}, {
						title: '户外椅',
						listitem: [{
							contxt: "户外柜"
						}, {
							contxt: "遮阳伞"
						}, {
							contxt: "户外套装"
						}, {
							contxt: "吊篮/吊椅"
						}, {
							contxt: "折叠床"
						}, {
							contxt: "户外椅"
						}, {
							contxt: "藤艺家具"
						}]
					}, {
						title: '办公家具',
						listitem: [{
							contxt: "办公桌"
						}, {
							contxt: "办公椅"
						}, {
							contxt: "办公沙发"
						}, {
							contxt: "文件柜"
						}, {
							contxt: "保险柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "凯撒豪庭"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "白金宫殿"
						}, {
							contxt: "法兰西玫瑰"
						}, {
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "蓝旗家具"
						}, {
							contxt: "卡洛琳"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}]
					}],
					srcImages: 'http://image.meilele.com/images/201808/1534300465041567667.jpg'
				}, {
					item: [{
						txt: '卫浴 /'
					}, {
						txt: ' 墙地面 /'
					}, {
						txt: ' 地板'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '热门搜索',
						listitem: [{
							contxt: "实木床"
						}, {
							contxt: "布艺床"
						}, {
							contxt: "乳胶床垫"
						}, {
							contxt: "进口床垫"
						}, {
							contxt: "简美床"
						}, {
							contxt: "欧式床"
						}, {
							contxt: "美式床"
						}, {
							contxt: "北欧床"
						}, {
							contxt: "榻榻米"
						}, {
							contxt: "高箱床"
						}, {
							contxt: "床板床"
						}, {
							contxt: "排骨床架"
						}, {
							contxt: "真皮床"
						}, {
							contxt: "趟门衣柜"
						}, {
							contxt: "拉门衣柜"
						}, {
							contxt: "四门衣柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "蓝琦家居"
						}, {
							contxt: "艾玛诗"
						}, {
							contxt: "美宜经典"
						}, {
							contxt: "彼岸阳光"
						}, {
							contxt: "苏美尔"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}, {
							contxt: "达美风情"
						}, {
							contxt: "凤凰天"
						}]
					}],
					srcImages: 'http://img003.mllres.com/images/201603/1459278260457957838.jpg'
				}, {
					item: [{
						txt: '优选风格'
					}],
					cla: "youxuanicon",
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '客厅',
						listitem: [{
							contxt: "沙发"
						}, {
							contxt: "电视柜"
						}, {
							contxt: "茶几/边桌"
						}, {
							contxt: "酒柜/装饰柜"
						}, {
							contxt: "鞋柜"
						}, {
							contxt: "间厅/玄关柜"
						}, {
							contxt: "休闲椅/凳"
						}, {
							contxt: "花架/装饰架"
						}, {
							contxt: "屏风"
						}, {
							contxt: "客厅套装"
						}]
					}, {
						title: '餐厅',
						listitem: [{
							contxt: "餐桌"
						}, {
							contxt: "餐椅"
						}, {
							contxt: "餐边柜"
						}, {
							contxt: "餐厅套装"
						}]
					}, {
						title: '书房',
						listitem: [{
							contxt: "书桌/工作台"
						}, {
							contxt: "书椅/转椅"
						}, {
							contxt: "书柜/书架"
						}, {
							contxt: "书房套装"
						}]
					}, {
						title: '儿童房',
						listitem: [{
							contxt: "儿童床"
						}, {
							contxt: "儿童床垫"
						}, {
							contxt: "儿童床头柜"
						}, {
							contxt: "儿童桌"
						}, {
							contxt: "儿童椅"
						}, {
							contxt: "儿童柜类"
						}]
					}, {
						title: '户外椅',
						listitem: [{
							contxt: "户外柜"
						}, {
							contxt: "遮阳伞"
						}, {
							contxt: "户外套装"
						}, {
							contxt: "吊篮/吊椅"
						}, {
							contxt: "折叠床"
						}, {
							contxt: "户外椅"
						}, {
							contxt: "藤艺家具"
						}]
					}, {
						title: '办公家具',
						listitem: [{
							contxt: "办公桌"
						}, {
							contxt: "办公椅"
						}, {
							contxt: "办公沙发"
						}, {
							contxt: "文件柜"
						}, {
							contxt: "保险柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "凯撒豪庭"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "白金宫殿"
						}, {
							contxt: "法兰西玫瑰"
						}, {
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "蓝旗家具"
						}, {
							contxt: "卡洛琳"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}]
					}],
					srcImages: 'http://img004.mllres.com/images/201810/1540173307661680020.jpg'
				}, {
					item: [{
						txt: '美式 /'
					}, {
						txt: ' 欧式 /'
					}, {
						txt: ' 现代 /'
					}, {
						txt: ' 中式'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '热门搜索',
						listitem: [{
							contxt: "实木床"
						}, {
							contxt: "布艺床"
						}, {
							contxt: "乳胶床垫"
						}, {
							contxt: "进口床垫"
						}, {
							contxt: "简美床"
						}, {
							contxt: "欧式床"
						}, {
							contxt: "美式床"
						}, {
							contxt: "北欧床"
						}, {
							contxt: "榻榻米"
						}, {
							contxt: "高箱床"
						}, {
							contxt: "床板床"
						}, {
							contxt: "排骨床架"
						}, {
							contxt: "真皮床"
						}, {
							contxt: "趟门衣柜"
						}, {
							contxt: "拉门衣柜"
						}, {
							contxt: "四门衣柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "蓝琦家居"
						}, {
							contxt: "艾玛诗"
						}, {
							contxt: "美宜经典"
						}, {
							contxt: "彼岸阳光"
						}, {
							contxt: "苏美尔"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}, {
							contxt: "达美风情"
						}, {
							contxt: "凤凰天"
						}]
					}],
					srcImages: 'http://image.meilele.com/images/201804/1524105673711351352.jpg'
				}, {
					item: [{
						txt: '北欧 /'
					}, {
						txt: ' 新古典 /'
					}, {
						txt: ' 法式 /'
					}, {
						txt: ' 地中海'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '客厅',
						listitem: [{
							contxt: "沙发"
						}, {
							contxt: "电视柜"
						}, {
							contxt: "茶几/边桌"
						}, {
							contxt: "酒柜/装饰柜"
						}, {
							contxt: "鞋柜"
						}, {
							contxt: "间厅/玄关柜"
						}, {
							contxt: "休闲椅/凳"
						}, {
							contxt: "花架/装饰架"
						}, {
							contxt: "屏风"
						}, {
							contxt: "客厅套装"
						}]
					}, {
						title: '餐厅',
						listitem: [{
							contxt: "餐桌"
						}, {
							contxt: "餐椅"
						}, {
							contxt: "餐边柜"
						}, {
							contxt: "餐厅套装"
						}]
					}, {
						title: '书房',
						listitem: [{
							contxt: "书桌/工作台"
						}, {
							contxt: "书椅/转椅"
						}, {
							contxt: "书柜/书架"
						}, {
							contxt: "书房套装"
						}]
					}, {
						title: '儿童房',
						listitem: [{
							contxt: "儿童床"
						}, {
							contxt: "儿童床垫"
						}, {
							contxt: "儿童床头柜"
						}, {
							contxt: "儿童桌"
						}, {
							contxt: "儿童椅"
						}, {
							contxt: "儿童柜类"
						}]
					}, {
						title: '户外椅',
						listitem: [{
							contxt: "户外柜"
						}, {
							contxt: "遮阳伞"
						}, {
							contxt: "户外套装"
						}, {
							contxt: "吊篮/吊椅"
						}, {
							contxt: "折叠床"
						}, {
							contxt: "户外椅"
						}, {
							contxt: "藤艺家具"
						}]
					}, {
						title: '办公家具',
						listitem: [{
							contxt: "办公桌"
						}, {
							contxt: "办公椅"
						}, {
							contxt: "办公沙发"
						}, {
							contxt: "文件柜"
						}, {
							contxt: "保险柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "凯撒豪庭"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "白金宫殿"
						}, {
							contxt: "法兰西玫瑰"
						}, {
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "蓝旗家具"
						}, {
							contxt: "卡洛琳"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}]
					}],
					srcImages: 'http://image.meilele.com/images/201603/1459278409269108574.jpg'
				}, {
					item: [{
						txt: '床垫 /'
					}, {
						txt: ' 新中式 /'
					}, {
						txt: ' 韩式  /'
					}],
					ishow: false,
					cont: [{
						title: '卧室',
						listitem: [{
							contxt: "床"
						}, {
							contxt: "床垫"
						}, {
							contxt: "床头柜"
						}, {
							contxt: "美规床"
						}, {
							contxt: "衣柜"
						}, {
							contxt: "斗柜"
						}, {
							contxt: "妆台镜/妆凳"
						}, {
							contxt: "穿衣镜/衣帽间"
						}, {
							contxt: "床尾凳"
						}, {
							contxt: "卧室套装"
						}]
					}, {
						title: '热门搜索',
						listitem: [{
							contxt: "实木床"
						}, {
							contxt: "布艺床"
						}, {
							contxt: "乳胶床垫"
						}, {
							contxt: "进口床垫"
						}, {
							contxt: "简美床"
						}, {
							contxt: "欧式床"
						}, {
							contxt: "美式床"
						}, {
							contxt: "北欧床"
						}, {
							contxt: "榻榻米"
						}, {
							contxt: "高箱床"
						}, {
							contxt: "床板床"
						}, {
							contxt: "排骨床架"
						}, {
							contxt: "真皮床"
						}, {
							contxt: "趟门衣柜"
						}, {
							contxt: "拉门衣柜"
						}, {
							contxt: "四门衣柜"
						}]
					}],
					contr: [{
						title: '推荐品牌',
						listitem: [{
							contxt: "韩菲尔"
						}, {
							contxt: "卡富亚"
						}, {
							contxt: "北欧悠歌"
						}, {
							contxt: "蓝琦家居"
						}, {
							contxt: "艾玛诗"
						}, {
							contxt: "美宜经典"
						}, {
							contxt: "彼岸阳光"
						}, {
							contxt: "苏美尔"
						}, {
							contxt: "青春城堡"
						}, {
							contxt: "宜化"
						}, {
							contxt: "达美风情"
						}, {
							contxt: "凤凰天"
						}]
					}],
					srcImages: 'http://image.meilele.com/images/201905/1557112904563929839.jpg'
				}]
			}
		},
		methods: {
			f1(index) {
				this.itemlist[index].ishow = true;
			},
			f2(index) {
				this.itemlist[index].ishow = false;
			},
			boxshow(){
				this.listShow=true;
			},
			boxhidden(){
				this.listShow=false;
			}
		},

	}
</script>
<style lang="less" scoped="scoped">
	.public-nav-bar {
		max-width: 1200px;
		margin: 0 auto;
		font-size: 12px;
		.nav-bar {
			display: flex;
			.nav-bar-daohang {
				list-style: none;
				line-height: 36px;
				a {
					font-size: 16px;
					color: #333;
					text-decoration: none;
					padding-left: 28px;
					&:hover{
						color: red;
					}
				}
			}
			.nav-bar-item {
				background: #e62318;
				color: #fff;
				width: 200px;
				font-size: 15px;
				position: relative;
				line-height: 36px;
				transition: all 0.2s 0.2s;
				span {
					display: block;
					text-align: center;
					cursor: pointer;
					.navdown{
						display: inline-block;
						height: 7px;
						width: 11px;
						background: url('https://static.mllres.com/mll/common/header/menu/i/menu.png') -13px -254px no-repeat;
						margin-left: 6px;
					}
				}
				.itemlistbox {
					width: 200px;
					height: 460px;
					box-sizing: border-box;
					position: absolute;
					top: 36px;
					left: 0px;
					background: rgba(00, 00, 00, .8);
					z-index: 101;
					padding-top: 10px;
					li {
						list-style: none;
						display: flex;
						z-index: 102;
						line-height: 30px;
						padding-left: 12px;
						cursor: pointer;
						.jiajuicon {
							display: inline-block;
							height: 20px;
							width: 20px;
							background: url(../assets/images/navitem.png) no-repeat -55px -48px;
							margin-right: 8px;
							margin-top: 5px;
						}
						.jiacaiicon {
							display: inline-block;
							height: 20px;
							width: 20px;
							background: url(../assets/images/navitem.png) no-repeat -55px -84px;
							margin-right: 8px;
							margin-top: 3px;
						}
						.youxuanicon {
							display: inline-block;
							height: 20px;
							width: 20px;
							background: url(../assets/images/navitem.png) no-repeat -55px -122px;
							margin-right: 8px;
							vertical-align: 4px;
							margin-top: 3px;
						}
						.itembox {
							z-index: 103;
							a {
								color: #c8c8c8;
								font-size: 13px;
								text-decoration: none;
								margin-right: 3px;
								&:hover {
									color: #FF0000;
								}
							}
						}
						.sub-cat {
							width: 616px;
							height: 427px;
							padding: 9px 30px 25px 0;
							left: 200px;
							top: 0px;
							background: rgba(255, 255, 255, .95);
							z-index: 105;
							position: absolute;
							color: #333;
							font-size: 12px;
							display: flex;
							.sub-cat-left {
								width: 410px;
								padding-left: 16px;
								.sub-cat-left-box {
									display: flex;
									.title {
										padding: 9px 0px;
										text-align: left;
										width: 70px;
										a {
											color: #333;
											font-weight: bold;
											display: inline-block;
											&:hover{
												color: red;
											}
										}
									}
									.itemboxr {
										display: flex;
										flex-wrap: wrap;
										flex: 1;
										padding: 9px 0px;
										border-bottom: 1px dashed #ccc;
										a {
											color: #666;
											margin-right: 10px;
											line-height: 24px;
											&:hover{
												color: red;
											}
										}
									}
								}
							}
							.sub-cat-right {
								display: flex;
								width: 190px;
								padding-left: 16px;
								flex-wrap: wrap;
								.sub-cat-right-box {
									margin-bottom: 10px;
									.scrtitle {
										font-weight: bold;
										display: block;
										text-align: left;
										a {
											color: #333;
											font-size: 13px;
											&:hover{
												color: red;
											}
										}
									}
									a {
										color: #666666;
										padding-right: 10px;
										display: inline-block;
										&:hover{
												color: red;
											}
									}
								}
								.aimg{
									display: inline-block;
									width: 190px;
									height: 260px;
								}
							}
							.tempbox{
								margin-left: -10px;
							}
						}
					}
					.active {
						background: #EEE;
						padding-left: 24px;
						transition: all 0.2s;
						.itembox {
							a {
								color: #333;
							}
						}
					}
				}
				&:hover{
					
					span{
						
						.navdown{
							background-position: 0 -254px;
						}
					}
				}
			}
		}
	}
</style>