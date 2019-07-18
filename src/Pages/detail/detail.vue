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
		<div class="nav" v-bind:style="{ height: gaodu + 'px' }">
			<!--大盒子-->
			<div class="arr"><!--上导航栏--></div>
			<div class="lbt">
				<!--轮播图放大镜区域-->

				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOKE6qeMzPP_QIt0qh1cO9nXdfUn8I1vVrNjwEzPH7B5g==.jpg" />
						</div>
						<div class="swiper-slide">
							<img
								src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPloHfZJBI4_sDHaZOUAnaKgWu_RQEy6NvmG8HAKi0dkmNpXOO+R1qL0KAwp3b9OhCndJVKCkWPy6M4o_Py3A6r.jpg"
							/>
						</div>
						<div class="swiper-slide">
							<img
								src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNurp1lcKYgzpxW9K+gGiLjTTXFjvffDmqxhEDXC7r+nVgfJ6PXGhGEYEL8adSSx7GUQJMuStLr6JylkhSqZHLy.jpg"
							/>
						</div>
						<div class="swiper-slide">
							<img
								src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMdF4uG6Zb2b1fynqMHI5PxQ4tmGea7ADi+NDYuFPT1cPHXJxoJi73DRQBcsxFRmW49gmFw1vnMCoWHkqbWNoe6.jpg"
							/>
						</div>
						<div class="swiper-slide">
							<img
								src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN6xcbZbXZ87z0HV8Zv_6HeL8UkQzdV160L3l0XVQMSrViKWxe5IYDRdZA_uFGHxAWqN18aoO79lXlB_6FK1ijD.jpg"
							/>
						</div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>

					<!-- 如果需要导航按钮 -->
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>
			<div class="this">
				<div class="h3">
					<span>纳德威 现代风格</span>
					皮布结合 功能性头枕 高档绒布 靠包可拆洗时尚转角沙发（1+3+左贵妃）
				</div>
				<div class="text"><a href="#">【618年中大促】6.1起购自营正价商品满5K减400！更有经典热卖单品直降！速览>>></a></div>
				<div class="img"></div>
				<div class="err">
					<div class="left">
						<ul>
							<li>本站价</li>
							<li>¥4999.00</li>
							<li>降价通知</li>
						</ul>
					</div>
					<div class="top">
						<ul>
							<li>领劵</li>
							<li></li>
							<li></li>
						</ul>
					</div>
				</div>
				<div class="bottom">
					<ul>
						<li>配送</li>
						<li>广东省深圳市罗湖区罗湖区</li>
					</ul>
				</div>
				<div class="time">
					<p>
						该商品由
						<span>美乐乐代运营旗舰店 发货</span>
						，并提供售后服务
					</p>
				</div>
				<div class="button">
					<ul>
						<li>类型</li>
						<li :class="{ acitve: xuanshow }" @click="disxuan">转角沙发（1+3+左贵妃</li>
						<li :class="{ acitve: !xuanshow }" @click="disxuan">转角沙发（1+3+右贵妃</li>
					</ul>
				</div>
				<div class="click">
					<ul>
						<li>规格</li>
						<li>转角:长3390*宽1850*高860mm;单人位:长690*宽1000*高860mm;三人位:长</li>
						<li>1700*宽1000*高860mm;贵妃位:长1850*宽1000*高860mm</li>
					</ul>
				</div>
				<div class="en">
					<ul>
						<li>数量</li>
					</ul>
					<div class="click-left" @click="jian()">
						-
						<a href="#"></a>
					</div>
					<input type="text" value="1" v-model="num" />
					<div class="click-rigth" @click="jia()">
						+
						<a href="#"></a>
					</div>
				</div>
				<div class="li">
					<ul>
						<li @click="shoptoCart">加入购物车</li>
						<li>
							<a href="#"><img src="../../assets/images/1546823044975371308.png" /></a>
						</li>
						<li>收藏</li>
					</ul>
				</div>
				<div class="orr">
					<ul>
						<li>服务</li>
						<li>30天无忧退换货</li>
						<li>质保三年</li>
						<li>贵就赔</li>
					</ul>
				</div>
			</div>
			<div class="rigth">
				<div class="timer">
					<span>------</span>
					看了又看
					<span>------</span>
				</div>
				<div class="rigth-img1" @mouseenter="logan()" @mouseleave="logan1()">
					<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMl04YmXakFf+Tngk_ksIC59ybdhTY+OX1IPpaZI_jmHQ==.jpg" />
					<p>¥6599</p>
					<div class="rigth-imgone" v-show="tr"><a>舒适黄牛真皮沙发高弹性公仔棉真皮</a></div>
				</div>

				<div class="rigth-img2" @mouseenter="yang()" @mouseleave="xiong()">
					<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMpJhDpY4GTl2GBboxWZTTaZR4pv7j5HDwZHqEde6tvzQ==.jpg" />
					<p>¥7599</p>
					<div class="rigth-imgtwo" v-show="ten"><a href="#">舒适黄牛真皮沙发高弹性公仔棉真皮</a></div>
				</div>

				<div class="rigth-img3" @mouseenter="yang()" @mouseleave="xiong()">
					<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMLcVJPIKDYwOKd_1JCMfLv8Vhhw6zKJv67uW2+gVDbtA==.jpg" />
					<p>¥3599</p>
					<div class="rigth-imgthi" v-show="ten"><a href="#">舒适黄牛真皮沙发高弹性公仔棉真皮</a></div>
				</div>

				<div class="rigth-img4" @mouseenter="yang()" @mouseleave="xiong()">
					<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPAxo7dLHZePHbNUQL7csTRKwbXWlSsCmyJB1oMGmpQPA==.jpg" />
					<p>¥2599</p>
					<div class="rigth-imgerr" v-show="ten"><a href="#">舒适黄牛真皮沙发高弹性公仔棉真皮</a></div>
				</div>
			</div>
			<div class="name">
				<div class="nametow">
					<div>
						<span class="six1">门店导购</span>
						&nbsp; 深圳共
						<span class="two1">1</span>
						家门店|家居搭配选购 + 线下全程服务
					</div>
				</div>
				<div class="nameone">
					<div class="crr">
						深圳龙华新区体验馆
						<span class="ninety">获取地址</span>
					</div>
					<img src="../../assets/images/1515032381153136378.jpg" />
					<span class="ten">店长:曾俊丽</span>
					<div class="eleven"><a href="#">去门店找TA</a></div>
					<!--<span class="dozen">【金牌导购】</span>-->
				</div>
			</div>
			<div class="fixe" v-show="jj"><img src="../../assets/images/1559784028422771082.gif" /></div>

			<div class="fourteen"><div class="fifleen">人气搭配</div></div>
			<div class="teen">
				<div class="activeq">
					<ul>
						<li v-for="(item, index) in navs" @click="show(index)" :class="{ active: index == 0 }">{{ item.name }}</li>
					</ul>
					<div class="expere">
						<div class="caps">
							<div class="flex" @mouseenter="yang()" @mouseleave="xiong()">
								<img :src="obj.img1" alt="" />
								<div v-html="obj.title"></div>
								<p v-show="ten">{{ obj.age }}</p>
							</div>
							<div class="flextwo" @mouseenter="yang()" @mouseleave="xiong()">
								<img :src="obj.img2" alt="" />
								<div v-html="obj.title1"></div>
								<p v-show="ten">{{ obj.age1 }}</p>
							</div>
							<div class="flexone" @mouseenter="yang()" @mouseleave="xiong()">
								<img :src="obj.img3" alt="" />
								<div v-html="obj.title2"></div>
								<p v-show="ten">{{ obj.age2 }}</p>
							</div>
							<div class="flexerr" @mouseenter="yang()" @mouseleave="xiong()">
								<img :src="obj.img4" alt="" />
								<div v-html="obj.title3"></div>
								<p v-show="ten">{{ obj.age3 }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="merelyy" @mouseenter="yang()" @mouseleave="xiong()">
				<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHM0dXSDeGsXOpaAEofZ3PhghBAZYjzqtyZSuwCjoTCdkg==.jpg" />
				<p>¥4999</p>
				<div class="fear" v-show="ten"><a href="#">皮布结合 功能性枕头高档绒布 可拆洗时尚转角</a></div>
			</div>

			<div class="thier">
				<div class="until"><span>猜您喜欢</span></div>
				<ul>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMl04YmXakFf+Tngk_ksIC59ybdhTY+OX1IPpaZI_jmHQ==.jpg" />
							<div>
								<div class="lefttwo">1</div>
								<div class="leftone">
									已售1342440
									<span>¥6599</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPL9mvftEzY7S6qt0R8nZZSVn3MITF8leuPbI4yAQLymw==.jpg" />
							<div>
								<div class="lefttwo">2</div>
								<div class="leftone">
									已售300
									<span>¥6999</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMpJhDpY4GTl2GBboxWZTTaZR4pv7j5HDwZHqEde6tvzQ==.jpg" />
							<div>
								<div class="lefttwo">3</div>
								<div class="leftone">
									已售108960
									<span>¥7599</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNhu22s9NxsKw+w8syNyu+SVPV73laK3c5XOasqBjJaPQ==.jpg" />
							<div>
								<div class="lefttwo">4</div>
								<div class="leftone">
									已售270
									<span>¥6999</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
				</ul>
			</div>

			<div class="thierr">
				<div class="until"><span>本月热销榜</span></div>
				<ul>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPn93IiLEJeLODj0XQdwhdNPfw9Xi+x+6Jc_oZ72MHvTw==.jpg" />
							<div>
								<div class="lefttwo">1</div>
								<div class="leftone">
									热销44647
									<span>¥999</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPrB0_TsRhrYUNKx7VYqMs4YmVrKdM5wgnsc++Vvb5V0w==.jpg" />
							<div>
								<div class="lefttwo">2</div>
								<div class="leftone">
									热销32738
									<span>¥790</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMHcN8GmtW3YzvsaBKuJ0Z7sPpPOfEWr12A2MWjKHdVcA==.jpg" />
							<div>
								<div class="lefttwo">3</div>
								<div class="leftone">
									热销24641
									<span>¥21699</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHM2Mp7F1tOIBo2KGnbAI9GZEJfD6oTbT3r2Q5zPC_1bkA==.jpg" />
							<div>
								<div class="lefttwo">4</div>
								<div class="leftone">
									热销12630
									<span>¥1388</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPWZ6kWy5RBc8IwTBFqIdCzEbodxGSKw0mgCLGuSqjZzg==.jpg" />
							<div>
								<div class="lefttwo">5</div>
								<div class="leftone">
									热销11689
									<span>¥22</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
					<li>
						<div class="ends" @mouseenter="yang()" @mouseleave="xiong()">
							<img src="../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOmwsfc4y1S37PswMr74_Psp5o5zwI35222vP4KhMto3Q==.jpg" />
							<div>
								<div class="lefttwo">6</div>
								<div class="leftone">
									热销10345
									<span>¥1650</span>
								</div>
							</div>
							<div class="such" v-show="ten"><a href="#">蒂美悦 现代风格 舒适黄...</a></div>
						</div>
					</li>
				</ul>
			</div>
			<div class="toptwo"><img src="../../assets/images/1558838229422063255.jpg" /></div>
			<div class="toptwo"><img src="../../assets/images/1446698602364844138.jpg" /></div>
			<div class="bottomtwo">
				<ul>
					<li v-for="(radio, index) in nave" @click="tab(index)">{{ radio.name }}</li>
				</ul>
			</div>
			<div class="topone">
				<div :class="{ fnone: wang }">
					<span>{{ obje.nba22 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home1: wang }">{{ obje.nba }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba1 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home: wang }">{{ obje.nba2 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba3 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home2: wang }">{{ obje.nba4 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba5 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home3: wang }">{{ obje.nba6 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba7 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home4: wang }">{{ obje.nba8 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba9 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home5: wang }">{{ obje.nba10 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba11 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home6: wang }">{{ obje.nba12 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba13 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home7: wang }">{{ obje.nba14 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba15 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home8: wang }">{{ obje.nba16 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba17 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home9: wang }">{{ obje.nba18 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba19 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home10: wang }">{{ obje.nba20 }}</span>
					<span :class="{ arr1: wang }">{{ obje.nba21 }}</span>
				</div>

				<div :class="{ fnone: wang }">
					<span>{{ obje.and10 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ tcl: wang }">{{ obje.and }}</span>
					<span :class="{ tcl1: wang }">{{ obje.and1 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home1: wang }">{{ obje.and2 }}</span>
					<span :class="{ arr1: wang }">{{ obje.and3 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ home1: wang }">{{ obje.and4 }}</span>
					<span :class="{ arr1: wang }">{{ obje.and5 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ tcl2: wang }">{{ obje.and6 }}</span>
					<span :class="{ arr1: wang }">{{ obje.and7 }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<span :class="{ tcl3: wang }">{{ obje.and8 }}</span>
					<span :class="{ arr1: wang }">{{ obje.and9 }}</span>
				</div>

				<div :class="{ fnone: wang }">
					<span>{{ obje.tween }}</span>
				</div>
				<div :class="{ fntwo: wang }">
					<div>
						<span :class="{ tcl8: wang }">{{ obje.tween1 }}</span>
						<span :class="{ arr1: wang }">{{ obje.tween2 }}</span>
					</div>
				</div>
				<div :class="{ fntwo: wang }">
					<div>
						<span :class="{ tcl10: wang }">{{ obje.tween3 }}</span>
						<span :class="{ arr1: wang }">{{ obje.tween4 }}</span>
					</div>
				</div>
				<div :class="{ fntwo: wang }">
					<div>
						<span :class="{ tcl10: wang }">{{ obje.tween5 }}</span>
						<span :class="{ arr1: wang }">{{ obje.tween6 }}</span>
					</div>
				</div>
				<div :class="{ fntwo: wang }">
					<div>
						<span :class="{ tcl9: wang }">{{ obje.tween7 }}</span>
						<span :class="{ arr1: wang }">{{ obje.tween8 }}</span>
					</div>
				</div>
				<div :class="{ fntwo: wang }">
					<div>
						<span :class="{ tcl4: wang }">{{ obje.tween9 }}</span>
						<span :class="{ arr1: wang }">{{ obje.tween10 }}</span>
					</div>
				</div>
				<div :class="{ fntwo: wang }">
					<div>
						<span :class="{ tcl5: wang }">{{ obje.tween11 }}</span>
						<span :class="{ arr1: wang }">{{ obje.tween12 }}</span>
					</div>
				</div>

				<div :class="{ bottomone: ctrl }">
					<div :class="{ thisone: ctrl }">
						<ul>
							<li>{{ obje.shift }}</li>
							<li>{{ obje.shift1 }}</li>
							<li>{{ obje.shift2 }}</li>
						</ul>
					</div>
					<div :class="{ thistwo: ctrl }">
						<ul>
							<li>{{ obje.shift3 }}</li>
							<li>{{ obje.shift4 }}</li>
							<li>{{ obje.shift5 }}</li>
						</ul>
					</div>
				</div>

				<div :class="{ errone: ctrl }"><img :src="obje.img" /></div>
				<div :class="{ errtwo: ctrl }"><img :src="obje.img1" /></div>

				<div :class="{ endstwo: ctrl }"><img :src="obje.img5" /></div>
				<div :class="{ endstwo: ctrl }"><img :src="obje.img6" /></div>
				<div :class="{ endstwo: ctrl }"><img :src="obje.img7" /></div>
				<div :class="{ endstwo: ctrl }"><img :src="obje.img8" /></div>
				<div :class="{ endstwo: ctrl }"><img :src="obje.img9" /></div>

				<div>
					<img :src="obje.zxc" />
					<img :src="obje.zxc1" />
					<img :src="obje.zxc2" />
					<img :src="obje.zxc3" />
					<img :src="obje.zxc4" />
					<img :src="obje.zxc5" />
					<img :src="obje.zxc6" />
				</div>
				<div>
					<img :src="obje.uu" />
					<img :src="obje.uu1" />
					<img :src="obje.uu2" />
					<img :src="obje.uu3" />
					<img :src="obje.uu4" />
					<img :src="obje.uu5" />
					<img :src="obje.uu6" />
				</div>
				<div>
					<img :src="obje.qwe" />
					<img :src="obje.qwe1" />
					<img :src="obje.qwe2" />
					<img :src="obje.qwe3" />
					<img :src="obje.qwe4" />
					<img :src="obje.qwe5" />
					<img :src="obje.qwe6" />
				</div>
				<div>
					<img :src="obje.oppo" />
					<img :src="obje.oppo1" />
					<img :src="obje.oppo2" />
					<img :src="obje.oppo3" />
					<img :src="obje.oppo4" />
					<img :src="obje.oppo5" />
				</div>
				<div>
					<img :src="obje.vivo1" />
					<img :src="obje.vivo2" />
					<img :src="obje.vivo3" />
					<img :src="obje.vivo4" />
					<img :src="obje.vivo5" />
				</div>

				<div class="wer" @click="shanchu()" v-show="jj"><a href="#">x</a></div>
			</div>
		</div>
		<footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
	</div>
</template>
<script>
import swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

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
	data: function() {
		return {
			num: 1,
			tr: false,
			shows: '1',
			ten: false,
			ctrl: false,
			wang: false,
			navs: [{ name: '客厅(4)', spin: false }, { name: '卧室(4)', spin: false }, { name: '餐厅(4)', spin: false }],
			nave: [{ name: '商品详情' }, { name: '规格参数' }, { name: '评价(3)' }, { name: '已售(176)' }, { name: '深圳体验馆(1)' }, { name: '服务保障' }],
			obj: {},
			obje: {},
			jj: true,
			gaodu: 5194,
			xuanshow: true,
			shop:{
				shopId:"sf0002",
				imgurl: 'https://image.meilele.com/images/small/215/width/520/height/344/mode/1/encrypt/01308954ef559b3ab14aa77d8aa4bbca/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOKE6qeMzPP_QIt0qh1cO9nXdfUn8I1vVrNjwEzPH7B5g==.jpg',
				cuxiaoI: 'http://image.meilele.com/images/201905/1558920281111413793.png',
				pri: '4999.00',
				cuxiaop: '￥4299.00',
				cuxiaob: 'searchmcx',
				cuxiaobt: '惊爆价',
				title: '纳德威 现代风格 皮布结合 功能性头枕 高档绒布 靠包可拆洗时尚转角沙发（1+3+左贵妃）',
				xiaol: 3450,
				pingl: 147,
				shopsl:1,
				checkx:false,
				shangjia:'美乐乐自营',
				ziying: 'data:image/gif;base64,R0lGODlhLAARAMQAAPxmcP////2Ynv/u7/7d3/xveP2tsv/y8/xncf/4+Pxwef7U1/7Lzf2mrP2yt/xtd/2Di/7Q0/7Y2/xocv/w8f2RmP7i5P2rsP7Kzvx4gf/+/gAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAsABEAAAWmICCOZGmeaBqsbNumcOwGBzWfQSyzyYUgjcOrNBDAcgADAbeKZEgPR2I1GsxWRsa1ZRStCiLIwlIRFaiiwYnQHSGVTBFGw5J4kQDrtbtdLd1INwBoeWtdRX9VAomDgQEFZ45VhiMCM2olaJqSaVttOnehjQqRkyZsgDOMjaKChadtmCSLmZwjpZ17qS6rK6QrEyS4ryWoaSa0JH0uoM27y87R0tMnIQA7',
				shopnum:1
			},
			shopList:[],
		}
	},
	components: {
		publicmlltop,
		publicguangao,
		mllheaderbar,
		fixedAdr,
		choujian,
		footerIcon,
		footerHelp,
		footerExtend,
		itemlogoSearch,
		credr,
		SearchNavbar
	},
	mounted() {
		this.tab();
		this.show();
		new swiper('.swiper-container', {
			loop: true, // 循环模式选项
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination'
			},
			// 如果需要前进后退按钮
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
		var str = window.sessionStorage.getItem('cart');
        this.shopList =JSON.parse(str);
	},
	methods: {
		disxuan() {
			this.xuanshow = !this.xuanshow;
		},
		jian: function() {
			this.num--;
			this.shop.shopsl=this.num;
			if (this.num <= 1) {
				this.num = 1;
				this.shop.shopsl=1;
			}
		},
		jia: function() {
			this.num++;
			this.shop.shopsl=this.num;
		},
		logan: function() {
			this.tr = true;
		},
		logan1: function() {
			this.tr = false;
		},
		yang: function() {
			this.ten = true;
		},
		xiong: function() {
			this.ten = false;
		},
		shanchu: function() {
			this.jj = false;
		},
		show: function(index) {
			if (index == 0) {
				this.obj = {
					img1: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNESaVEvFe+Hon0wT0uG9E5VYLB9umxvDc5lGPEr+f3hA==.jpg'),
					img2: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHM8SGdih_Y9UBPAnp108CqcvllLKtCxR9+ZoX_zdDX4+A==.jpg'),
					title: "<input type='checkbox' value='¥1699'/>¥1699",
					title1: "<input type='checkbox' value='¥1780'/>¥1780",
					title2: "<input type='checkbox' value='¥2290'/>¥2290",
					title3: "<input type='checkbox' value='¥2760'/>¥2760",
					age: '名流之选 时尚百搭茶几',
					age1: '名流之选 时尚百搭电视柜',
					age2: '多功能实用两抽仿大理石台面1.3茶几',
					age3: '美观时尚 多功能实用可伸缩电视柜',
					img3: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMNCanxDBCFbjZLaa_R+Pbtge5usvNGi3WUuWmyXKOgbg==.jpg'),
					img4: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNsjaVzeHrZEwDDGL737GTVfKBLbUt7LdW1WrcGw0gIyA==.jpg')
				};
			} else if (index == 1) {
				this.obj = {
					img1: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNX8E2YblJ_4smr4DiRogLXblnmFGSzHOUp5eFirpkKIw==.jpg'),
					img2: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMy7PfRTP5tjWoHF03KJCXffPFcMZfT_+aXXEwtueZghA==.jpg'),
					img3: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMBLKHNzStYdcIdaJeT+uikfx3yRVg3DepodNMKuOjlcA==.jpg'),
					img4: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPT43R3pr3NYKYB27ElVA1hzTHdFm2vzyUco5OMvtZRqw==.jpg'),
					title: "<input type='checkbox' value='¥2799'/>¥2799",
					title1: "<input type='checkbox' value='¥2799'/>¥2799",
					title2: "<input type='checkbox' value='¥2890'/>¥2890",
					title3: "<input type='checkbox' value='¥4899'/>¥4899",
					age: '卡富亚 现代风格 人气爆款 1.8米头层真皮软床 婚床 软体床',
					age1: '卡富亚 现代风格 人气爆款 可拆卸靠包 精选头层珠光真皮1.8米床',
					age2: '卡富亚 现代风格 简约舒适家居 休闲时尚1.8米真皮软体婚床 排骨架双人大床 精选高档头层黄牛皮',
					age3: '喜临门·睡美人 现代风格 品牌优选 澳洲进口头层黄牛真皮软床 1.8米落叶松木框架婚床'
				};
			} else {
				this.obj = {
					img1: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrk2zvGCPz0IIS0q_fkkMOAF_5zgDUxb2ZKON1rgomrA==.jpg'),
					img2: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMtbhLnodbgUgyF_H8WQSilasuoBppO0cvBhc6s8t5g7Q==.jpg'),
					img3: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPVxO3lZBuZW9v9Tfbh5qmonq8f5oU1IVsCW60k7abG_g==.jpg'),
					img4: require('../../assets/images/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPBsXVdNEyrIf4A2F_d6hWGGknjKRtJF59ayhqSnmFQjg==.jpg'),
					title: "<input type='checkbox' value='¥4020'/>¥4020",
					title1: "<input type='checkbox' value='¥6999'/>¥6999",
					title2: "<input type='checkbox' value='¥2799'/>¥2799",
					title3: "<input type='checkbox' value='¥4699'/>¥4699",
					age: '纳德威 现代风格 多功能实用两抽仿大理石台面1.4米餐台套装（1桌+4椅）【此套装搭配的是白色餐椅】',
					age1: '韩木居 现代风格 性价比之王 环保双层大理石桌面 1.35米自带旋转托盘餐厅标配（1桌+6椅',
					age2: '蒂美悦▪恩嘉依 现代风格 独特双色拼接设计 黑白亮光漆钢化玻璃台面1.3米餐厅套装（1餐桌+4餐椅）',
					age3: '蒂美悦▪恩嘉依 现代风格 圆润设计 自然优美 钢化玻璃桌面 优质钢材餐椅 餐厅套装（1桌+4椅）'
				};
			}
		},
		tab: function(index) {
			if (index == 0) {
				this.gaodu = 5200;
				this.ctrl = true;
				this.wang = false;
				this.obje = {
					shift: '商品编号：NDW-SHA01-ZZJ',
					shift1: '商品材质：布艺',
					shift2: '商品品牌：纳德威',
					shift3: '商品体积：3.8 m³	',
					shift4: '商品清单：转角沙发（1+3+贵妃）+净色抱枕*4',
					shift5: '产地：广东佛山',
					title: '面板一',
					img: require('../../assets/images/1559783814514581875.jpg'),
					img1: require('../../assets/images/2019-06-22_170428.png'),
					img5: require('../../assets/images/1537523390903421829.jpg'),
					img6: require('../../assets/images/1537523390992501639.jpg'),
					img7: require('../../assets/images/1537523390947206760.jpg'),
					img8: require('../../assets/images/1537523390368168297.jpg'),
					img9: require('../../assets/images/1537523390372975326.jpg')
				};
			} else if (index == 1) {
				this.gaodu = 4689;
				this.ctrl = false;
				this.wang = true;
				this.obje = {
					nba: '品牌：',
					nba1: '纳德威',
					nba2: '型号：',
					nba3: 'NDW-SHA01-ZZJ',
					nba4: '风格：',
					nba5: '现代风格',
					nba6: '包件：',
					nba7: '3件',
					nba8: '体积：',
					nba9: '3.8m³',
					nba10: '类型：',
					nba11: '皮布沙发',
					nba12: '类别：',
					nba13: '转角沙发',
					nba14: '软硬度：',
					nba15: '适中',
					nba16: '产地：',
					nba17: '广东佛山',
					nba18: '上市时间：',
					nba19: '2018-8',
					nba20: '产品包含：',
					nba21: '转角沙发（1+3+贵妃）+净色抱枕*4',
					nba22: '基本信息',
					and: '规格：',
					and1: '转角:长3390*宽1850*高860mm;单人位:长690*宽1000*高860mm;三人位:长1700*宽1000*高860mm;贵妃位:长1850*宽1000*高860mm',
					and2: '坐高：',
					and3: '410mm',
					and4: '坐深：',
					and5: '550mm',
					and6: '进门尺寸：',
					and7: '800mm',
					and8: '扶手高度：',
					and9: '800mm',
					and10: '产品尺寸',
					tween: '产品构造',
					tween1: '靠背：',
					tween2: '绒布布料填充公仔棉',
					tween3: '坐垫：',
					tween4: '绒布布料填充海绵',
					tween5: '扶手：',
					tween6: '绒布布料填充海绵',
					tween7: '框架：',
					tween8: '抛光实木框架（桉木为主）',
					tween9: '沙发脚：',
					tween10: '实木',
					tween11: '抱枕：',
					tween12: '绒布布料，填充3A公仔棉',
					zxc: require('../../assets/images/2019-06-23_153118.png'),
					zxc1: require('../../assets/images/2019-06-23_153424.png'),
					zxc2: require('../../assets/images/2019-06-23_153454.png'),
					zxc3: require('../../assets/images/2019-06-23_153527.png'),
					zxc4: require('../../assets/images/2019-06-23_153621.png'),
					zxc5: require('../../assets/images/2019-06-23_153651.png'),
					zxc6: require('../../assets/images/2019-06-23_153728.png')
				};
			} else if (index == 2) {
				this.gaodu = 3959;
				this.wang = false;
				this.ctrl = false;
				this.obje = {
					uu: require('../../assets/images/2019-06-23_155033.png'),
					uu1: require('../../assets/images/2019-06-23_155112.png'),
					uu2: require('../../assets/images/2019-06-23_153424.png'),
					uu3: require('../../assets/images/2019-06-23_153527.png'),
					uu4: require('../../assets/images/2019-06-23_153621.png'),
					uu5: require('../../assets/images/2019-06-23_153651.png'),
					uu6: require('../../assets/images/2019-06-23_153728.png')
				};
			} else if (index == 3) {
				this.gaodu = 3880;
				this.wang = false;
				this.ctrl = false;
				this.obje = {
					qwe: require('../../assets/images/2019-06-23_162921.png'),
					qwe1: require('../../assets/images/2019-06-23_153424.png'),
					qwe2: require('../../assets/images/2019-06-23_153527.png'),
					qwe3: require('../../assets/images/2019-06-23_153621.png'),
					qwe4: require('../../assets/images/2019-06-23_153651.png'),
					qwe5: require('../../assets/images/2019-06-23_153728.png')
				};
			} else if (index == 4) {
				this.gaodu = 3553;
				this.wang = false;
				this.ctrl = false;
				this.obje = {
					oppo: require('../../assets/images/2019-06-23_162835.png'),
					oppo1: require('../../assets/images/2019-06-23_153424.png'),
					oppo2: require('../../assets/images/2019-06-23_153527.png'),
					oppo3: require('../../assets/images/2019-06-23_153621.png'),
					oppo4: require('../../assets/images/2019-06-23_153651.png'),
					oppo5: require('../../assets/images/2019-06-23_153728.png')
				};
			} else {
				this.gaodu = 3292;
				this.wang = false;
				this.ctrl = false;
				this.obje = {
					vivo1: require('../../assets/images/2019-06-23_153424.png'),
					vivo2: require('../../assets/images/2019-06-23_153527.png'),
					vivo3: require('../../assets/images/2019-06-23_153621.png'),
					vivo4: require('../../assets/images/2019-06-23_153651.png'),
					vivo5: require('../../assets/images/2019-06-23_153728.png')
				};
			}
		},
		shoptoCart(){
				var goods = this.shop;
				this.shopList=[];
				if(this.shopList.length==0){
					this.shopList.push(goods);
				}else{
					for(var i=0;i<this.shopList.length;i++){
						if(this.shopList[i].shopId!=goods.shopId){
							this.shopList.push(goods);	
						}else if(this.shopList[i].shopId==goods.shopId){
							this.shopList[i].shopsl+=1;
							break;
						}
					}
				}
				var v = JSON.stringify(this.shopList);
				window.sessionStorage.setItem('cart',v);
				var userzt = window.sessionStorage.zhuangtai;
				var arrstr = window.sessionStorage.userObj;
				if(arrstr==undefined){
					this.$router.push('/zhuce');
					return
				}else if(!userzt){
					 this.$router.push('/login');
					 return
				}else{
					this.$router.push('/shoppCart');
					return
				}
		}
	}
}
</script>
<style scoped="scoped">
li {
	list-style-type: none;
}
a {
	text-decoration: none;
}
* {
	margin: 0px;
	padding: 0px;
}
.nav {
	width: 1190px;
	height: 5194px;
	margin: auto;
}
.arr {
	width: 1190px;
	height: 30px;
}
.lbt {
	width: 470px;
	height: 311px;
	float: left;
}
.lbt img {
	width: 470px;
	height: 311px;
}
.this {
	width: 520px;
	height: 667px;
	float: left;
	margin-left: 30px;
}
.this .h3 {
	text-align: left;
	width: 500px;
	height: 40px;
	font-size: 16px;
	margin-left: 12px;
}
.this .h3 span {
	color: red;
}
.rigth {
	width: 164px;
	height: 700px;
	float: left;
}
.text {
	text-align: left;
	margin-top: 10px;
	margin-left: 8px;
}
.text a {
	color: red;
	font-size: 14px;
}
.text a:hover {
	text-decoration: underline;
}
.img {
	width: 510px;
	height: 37px;
	background-image: url(../../assets/images/1558828245781208058.jpg);
	background-repeat: no-repeat;
	background-position: 1% 1%;
	margin-top: 20px;
	cursor: pointer;
}
.err {
	width: 510px;
	height: 115px;
	background-color: rgb(247, 247, 247);
}
.left {
	width: 510px;
	height: 30px;
	margin-top: 20px;
}
.left li {
	float: left;
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 10px;
	margin: 10px;
}
.left li:nth-last-child(2) {
	color: red;
	font-size: 25px;
}
.left li:nth-last-child(1) {
	color: red;
	margin-left: -5px;
}
.top {
	width: 510px;
	height: 30px;
	margin-top: 20px;
}
.top li {
	float: left;
	line-height: 30px;
	color: rgb(153, 153, 153);
	font-size: 13px;
	cursor: pointer;
}
.top li:nth-last-child(2) {
	background-image: url(../../assets/images/1559286945710653248.png);
	background-repeat: no-repeat;
	background-position: 1% 1%;
	width: 144px;
	height: 23px;
	margin-left: 38px;
	margin-top: 3px;
}
.top li:nth-last-child(1) {
	background-image: url(../../assets/images/1559286945710653248.png);
	background-repeat: no-repeat;
	background-position: 1% 1%;
	width: 144px;
	height: 23px;
	margin-left: 20px;
	margin-top: 3px;
}
.top li:nth-last-child(3) {
	margin-left: 11px;
}
.bottom {
	width: 510px;
	height: 30px;
	margin-top: 20px;
}
.bottom li {
	float: left;
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 30px;
}
.bottom li:nth-last-child(2) {
	margin-left: 11px;
}
.bottom li:nth-last-child(1) {
	margin-left: 41px;
}
.time {
	width: 510px;
	height: 30px;
	margin-top: 20px;
}
.time p {
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 30px;
	margin-left: 9px;
}
.time span {
	color: #f60;
}
.button {
	width: 510px;
	height: 30px;
	margin-top: 20px;
	text-align: center;
}
.button li {
	float: left;
	color: rgb(153, 153, 153);
	line-height: 30px;
	font-size: 13px;
	cursor: pointer;
}
.button li:nth-last-child(1) {
	width: 161.88px;
	height: 30px;
	border: 1px solid rgb(153, 153, 153);
	margin-left: 10px;
}
.button li:nth-last-child(1) .acitve {
	border: 1px solid red;
}
.button li:nth-last-child(2) {
	width: 161.88px;
	height: 30px;
	margin-left: 40px;
	border: 1px solid rgb(153, 153, 153);
}
.button li:nth-last-child(2) .acitve {
	border: 1px solid red;
}
.button li:nth-last-child(3) {
	margin-left: 11px;
}
.button li.acitve {
	border: 1px solid red;
}
.click {
	width: 510px;
	height: 40px;
	margin-top: 20px;
}
.click ul {
	overflow: hidden;
	height: 40px;
	widows: 510px;
}
.click li {
	float: left;
	color: rgb(153, 153, 153);
	line-height: 30px;
	font-size: 13px;
}
.click li:nth-last-child(1) {
	margin-left: 75px;
	margin-top: -15px;
}
.click li:nth-last-child(2) {
	margin-left: 39px;
}
.click li:nth-last-child(3) {
	margin-left: 11px;
}
.en {
	width: 510px;
	height: 32px;
	margin-top: 30px;
}
.en {
	float: left;
}
.en li:nth-last-child(1) {
	float: left;
	margin-left: 11px;
	line-height: 32px;
	font-size: 13px;
	color: rgb(153, 153, 153);
}
.en input {
	width: 47px;
	height: 30px;
	text-align: center;
	margin-top: -20px;
	position: relative;
	top: -28px;
	margin-left: 110px;
}
.en .click-left {
	width: 32px;
	height: 32px;
	line-height: 32px;
	border: 1px solid rgb(153, 153, 153);
	text-align: center;
	margin-left: 77px;
	position: relative;
	top: -1px;
	cursor: pointer;
}
.en .click-rigth {
	width: 32px;
	height: 32px;
	line-height: 32px;
	border: 1px solid rgb(153, 153, 153);
	text-align: center;
	margin-left: 160px;
	margin-top: -62px;
	cursor: pointer;
}
.li {
	width: 510px;
	height: 46px;
	margin-top: 20px;
}
.li li {
	float: left;
	text-align: center;
	cursor: pointer;
}
.li li:nth-last-child(3) {
	width: 177px;
	height: 46px;
	border: 1px solid red;
	color: red;
	line-height: 46px;
	margin-left: 75px;
	margin-top: 20px;
	background-image: url(../../assets/images/1156976.gif);
	background-repeat: no-repeat;
	background-size: 15% 38%;
	background-position: 7% 45%;
}
.li li:nth-last-child(2) {
	width: 177px;
	height: 46px;
	line-height: 46px;
	margin-left: 10px;
	margin-top: 20px;
}
.li li:nth-last-child(1) {
	width: 51px;
	height: 46px;
	border: 1px solid rgb(153, 153, 153);
	line-height: 46px;
	color: rgb(153, 153, 153);
	margin-left: 10px;
	margin-top: 20px;
	font-size: 12px;
}
.orr {
	width: 510px;
	height: 30px;
	margin-top: 80px;
}
.orr li {
	float: left;
	font-size: 12px;
	color: rgb(153, 153, 153);
	line-height: 30px;
	margin: 4px;
}
.orr li:nth-last-child(4) {
	margin-left: 12px;
}
.orr li:nth-last-child(3) {
	margin-left: 35px;
	color: rgb(102, 102, 102);
}
.orr li:nth-last-child(2) {
	margin-left: 30px;
	color: rgb(102, 102, 102);
}
.orr li:nth-last-child(1) {
	margin-left: 30px;
	color: rgb(102, 102, 102);
	font-size: 12px;
}
.timer {
	font-size: 13px;
	color: rgb(153, 153, 153);
	width: 164px;
	height: 20px;
	line-height: 20px;
	text-align: center;
}

.rigth-imgone {
	width: 154px;
	height: 25px;
	background-color: rgba(0, 0, 0, 0.4);
	margin-top: -44px;
	margin-left: 1px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	line-height: 25px;
	position: relative;
	padding: 0 10px;
	box-sizing: border-box;
}
.rigth-imgone a {
	color: rgb(255, 255, 255);
	font-size: 13px;
}
.rigth-img1 p {
	font-size: 13px;
	color: rgb(154, 154, 154);
	margin-left: 10px;
	text-align: center;
}
.rigth-img1 {
	width: 141px;
	height: 132px;
	margin-left: 10px;
}

.rigth-imgtwo {
	width: 155px;
	height: 25px;
	background-color: rgba(0, 0, 0, 0.4);
	position: relative;
	margin-top: -44px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	line-height: 25px;
	padding: 0 10px;
	box-sizing: border-box;
}
.rigth-imgtwo a {
	color: rgb(255, 255, 255);
	font-size: 13px;
}
.rigth-img2 p {
	font-size: 13px;
	color: rgb(154, 154, 154);
	margin-left: 10px;
	text-align: center;
}
.rigth-img2 {
	width: 141px;
	height: 132px;
	margin-left: 10px;
}

.rigth-imgthi {
	width: 155px;
	height: 25px;
	background-color: rgba(0, 0, 0, 0.4);
	position: relative;
	margin-top: -44px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	line-height: 25px;
	padding: 0 10px;
	box-sizing: border-box;
}
.rigth-imgthi a {
	color: rgb(255, 255, 255);
	font-size: 13px;
}
.rigth-img3 p {
	font-size: 13px;
	color: rgb(154, 154, 154);
	margin-left: 10px;
	text-align: center;
}
.rigth-img3 {
	width: 141px;
	height: 132px;
	margin-left: 10px;
}
.rigth-img3 img {
	width: 155px;
}
.rigth-imgerr {
	width: 155px;
	height: 25px;
	background-color: rgba(0, 0, 0, 0.4);
	position: relative;
	margin-top: -44px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	line-height: 25px;
	padding: 0 10px;
	box-sizing: border-box;
}
.rigth-imgerr a {
	color: rgb(255, 255, 255);
	font-size: 13px;
}
.rigth-img4 p {
	font-size: 13px;
	color: rgb(154, 154, 154);
	margin-left: 10px;
	text-align: center;
}
.rigth-img4 {
	width: 141px;
	height: 132px;
	margin-left: 10px;
}
.rigth-img4 img {
	width: 155px;
}
.name {
	width: 470px;
	height: 140px;
	border: 1px solid rgb(255, 244, 225);
	float: left;
	margin-top: -313px;
}
.nametow {
	width: 470px;
	height: 42px;
	border: 1px solid rgb(255, 244, 225);
	float: left;
	background-color: rgb(255, 244, 225);
	background-image: url(../../assets/images/nkCngIMAJGYBzmXpkxVAAAAAElFTkSuQmCC.png);
	background-repeat: no-repeat;
	background-position: 7% 49%;
}
.nametow {
	font-size: 13px;
	line-height: 42px;
}
.nameone {
	width: 470px;
	height: 98px;
	border: 1px solid rgb(255, 244, 225);
	float: left;
	background-image: url(../../assets/images/1538706406809.jpg), url(../../assets/images/landmark.png), url(../../assets/images/star.png);
	background-repeat: no-repeat;
	background-position: 9% 72%, 37% 17%, 56% 67%;
	background-size: 27% 84%, 3% 19%, 18% 15%;
}
.six1 {
	font-size: 20px;
	font-weight: 600;
	color: black;
}
.nametow .two1 {
	color: red;
}
.nametow div {
	margin-left: 58px;
}
.nameone .crr {
	font-size: 13px;
	font-size: 15px;
	font-weight: 600;
	margin-top: 15px;
	margin-left: 189px;
}
.nameone .ninety {
	color: rgb(207, 0, 14);
	font-size: 13px;
	font-weight: 500;
}
.nameone img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-left: 164px;
	margin-top: 8px;
}
.ten {
	font-size: 13px;
	margin-top: 1px;
}
.eleven {
	width: 95px;
	height: 23px;
	border: 1px solid rgb(122, 122, 122);
	line-height: 22px;
	text-align: center;
	margin-left: 310px;
	margin-top: -28px;
}
.eleven a {
	font-size: 10px;
	font-weight: 500;
	color: rgb(122, 122, 122);
}
.dozen {
	font-size: 13px;
	margin-left: 1px;
}
.fixe {
	position: fixed;
	top: 0px;
	right: 0px;
}
.teen {
	width: 1190px;
	height: 199px;
}
.teen li {
	float: left;
	margin: 33px;
	font-size: 13px;
	margin-top: -28px;
	line-height: 24px;
}
.active {
	width: 86px;
	height: 24px;
	border: 1px solid red;
	color: red;
}
.teen ul {
	margin-left: 230px;
}
.fourteen {
	width: 1190px;
	height: 42px;
	border: 1px solid rgb(238, 238, 238);
	background-color: rgb(250, 250, 250);
	margin-top: 698px;
}
.fifleen {
	width: 65px;
	height: 40px;
	border-bottom: 3px solid red;
	line-height: 40px;
	color: red;
	font-size: 14px;
	margin-left: 20px;
}
.activeq {
	width: 1190px;
	height: 24px;
	margin-top: 1px;
	text-align: center;
	cursor: pointer;
}
.merelyy {
	width: 155px;
	height: 130px;
	margin-top: -168px;
	margin-left: 20px;
	position: relative;
	top: -11px;
}
.merelyy img {
	margin-top: -17px;
	margin-left: 1px;
}
.merelyy p {
	font-size: 13px;
	text-align: center;
}
.fear {
	width: 155px;
	height: 20px;
	background-color: rgba(0, 0, 0, 0.7);
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	font-size: 13px;
	line-height: 20px;
	margin-top: -45px;
}
.fear a {
	color: rgb(255, 255, 255);
}

.expere {
	width: 740px;
	height: 130px;
	margin-left: 261px;
	margin-top: 45px;
}
.expere img {
	margin-left: -873px;
	margin-top: 14px;
}

.caps div {
	font-size: 12px;
}
/*.caps p{font-size:13px;width:141px;height:25px;background-color: rgba(0,0,0,0.4);color: rgb(255,255,255);line-height:25px;
    margin-top:-46px;position: relative;}*/
.caps {
	width: 740px;
	height: 130px;
	display: flex;
	justify-content: space-between;
	position: relative;
	top: -30px;
}
.flex {
	width: 155px;
	height: 130px;
	text-align: center;
}
.flex img {
	margin-left: 1px;
	margin-top: 1px;
}
.flex p {
	width: 155px;
	height: 20px;
	margin-top: -40px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	position: relative;
	background-color: rgba(0, 0, 0, 0.4);
	color: rgb(255, 255, 255);
	font-size: 12px;
	line-height: 20px;
}
.flexone {
	width: 155px;
	height: 130px;
	margin-left: 20px;
	text-align: center;
}
.flexone p {
	width: 155px;
	height: 20px;
	margin-top: -40px;
	margin-left: 0.5px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	position: relative;
	background-color: rgba(0, 0, 0, 0.4);
	color: rgb(255, 255, 255);
	font-size: 12px;
	line-height: 20px;
}
.flexone img {
	margin-left: 1px;
	margin-top: 1px;
}
.flextwo {
	width: 155px;
	height: 130px;
	margin-left: 20px;
	text-align: center;
}
.flextwo img {
	margin-top: 1px;
	margin-left: 1px;
}
.flextwo p {
	width: 155px;
	height: 20px;
	margin-top: -40px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	position: relative;
	background-color: rgba(0, 0, 0, 0.4);
	color: rgb(255, 255, 255);
	font-size: 12px;
	line-height: 20px;
}
.flexerr {
	width: 155px;
	height: 130px;
	margin-left: 20px;
	text-align: center;
}
.flexerr img {
	margin-top: 1px;
	margin-left: 1px;
}
.flexerr p {
	width: 155px;
	height: 20px;
	margin-top: -40px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	position: relative;
	background-color: rgba(0, 0, 0, 0.4);
	color: rgb(255, 255, 255);
	font-size: 12px;
	line-height: 20px;
}
.thier {
	width: 195px;
	height: 647px;
	border: 1px solid rgb(238, 238, 238);
	margin-top: 10px;
}
.thierr {
	width: 195px;
	height: 956px;
	border: 1px solid rgb(238, 238, 238);
	margin-top: 10px;
}
.until {
	width: 193px;
	height: 41px;
	border: 1px solid rgb(238, 238, 238);
	line-height: 41px;
	background-color: rgb(250, 250, 250);
}
.until span {
	margin-left: 14px;
	font-size: 15px;
	color: rgb(68, 68, 68);
}
.ends {
	width: 155px;
	height: 126px;
	margin-left: 20px;
	margin-top: 20px;
}
.ends div {
	color: rgb(153, 153, 153);
	font-size: 13px;
}
.ends .lefttwo {
	width: 14px;
	height: 14px;
	background-color: red;
	border-radius: 14px;
	color: rgb(255, 255, 255);
	text-align: center;
	margin-left: 2px;
}
.ends .leftone {
	margin-top: -14px;
	margin-left: 16px;
}
.leftone span {
	color: red;
	margin-left: 25px;
}
.such {
	width: 155px;
	height: 20px;
	margin-top: -40px;
	background-color: rgba(0, 0, 0, 0.4);
	position: relative;
	line-height: 20px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.such a {
	color: rgb(255, 255, 255);
}
.toptwo {
	width: 195px;
	height: 260px;
	margin-top: 10px;
}
.toptwo img {
	width: 195px;
	height: 260px;
}
.bottomtwo {
	width: 980px;
	height: 42px;
	margin-left: 208px;
	margin-top: -2157px;
	background-color: rgb(250, 250, 250);
}
.bottomtwo li {
	float: left;
	line-height: 42px;
	font-size: 14px;
	margin-left: 33px;
	cursor: pointer;
}
.topone {
	width: 980px;
	height: 600px;
	float: right;
	margin-top: 1px;
}
.bottomone {
	width: 980px;
	height: 126px;
}
.errone {
	width: 980px;
	height: 100px;
}
.errtwo {
	width: 980px;
	height: 450px;
	margin-top: 10px;
}
.thisone {
	width: 980px;
	height: 20px;
	margin-top: 32px;
	margin-left: 30px;
}
.thistwo {
	width: 980px;
	height: 20px;
	margin-top: 12px;
	margin-left: 27px;
}
.thisone li {
	float: left;
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 20px;
}
.thisone li:nth-last-child(2) {
	margin-left: 180px;
}
.thisone li:nth-last-child(1) {
	margin-left: 271px;
}
.html {
	color: red;
}
.thistwo li {
	float: left;
	margin: 1px;
	font-size: 13px;
	color: rgb(153, 153, 153);
	line-height: 20px;
}
.thistwo li:nth-last-child(2) {
	margin-left: 244px;
}
.thistwo li:nth-last-child(1) {
	margin-left: 117px;
}
.endstwo {
	width: 980px;
	height: 678px;
	margin-top: 10px;
}
.endstwo img {
	width: 980px;
	height: 678px;
}
.fnone {
	width: 979px;
	height: 31px;
	border: 1px solid rgb(230, 230, 230);
	margin-top: 10px;
	background-color: rgb(248, 248, 248);
}
.fnone span {
	font-size: 13px;
	line-height: 31px;
	font-weight: 600;
	margin-left: -861px;
}
.fntwo {
	width: 979px;
	height: 31px;
	border: 1px solid rgb(230, 230, 230);
}
.fntwo span {
	font-size: 12px;
	line-height: 31px;
	color: rgb(102, 102, 102);
}
.fntwo .home {
	margin-left: 130px;
}
.home1 {
	margin-left: 130px;
}
.home2 {
	margin-left: 130px;
}
.home3 {
	margin-left: 130px;
}
.home4 {
	margin-left: 130px;
}
.home5 {
	margin-left: 130px;
}
.home6 {
	margin-left: 130px;
}
.home7 {
	margin-left: 130px;
}
.home8 {
	margin-left: 130px;
}
.home9 {
	margin-left: 130px;
}
.home10 {
	margin-left: 130px;
}
.arr1 {
	margin-left: 130px;
}
.tcl {
	margin-left: 130px;
}
.tcl1 {
	margin-left: 90px;
}
.tcl2 {
	margin-left: 130px;
}
.tcl3 {
	margin-left: 130px;
}
.tcl8 {
	margin-left: 130px;
}
.tcl9 {
	margin-left: 130px;
}
.tcl10 {
	margin-left: 130px;
}
.tcl4 {
	margin-left: 130px;
}
.tcl5 {
	margin-left: 130px;
}
.wer {
	position: fixed;
	top: 0px;
	right: 0px;
	width: 10px;
	height: 10px;
	text-align: center;
	line-height: 10px;
	background-color: rgba(0, 0, 0, 0.2);
	color: rgb(153, 153, 153);
}
.wer a {
	color: rgb(153, 153, 153);
}
.swiper-container {
	width: 520px;
	height: 344px;
	margin-left: -25px;
}
.swiper-button-prev {
	margin-left: 0px;
	top: 40%;
}
.swiper-button-next {
	margin-right: 48px;
	top: 40%;
}
</style>
