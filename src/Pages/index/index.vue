<template>
	<div class="indexWrap">
		<mllheaderbar></mllheaderbar>
		<br />
		<IndexInput></IndexInput>
		<br />
		<InSearchNavbar></InSearchNavbar>
		<fixedAdr></fixedAdr>
		<choujian></choujian>
		<div class="banbox">
			<indexbanner></indexbanner>
			<div class="address">
				<a href="#" class="title">
					深圳体验店
					<span class="txtcoloe">1</span>
					家
				</a>
				<a href="#" class="item">
					全国体验店
					<span class="txtcoloe">121</span>
					家
				</a>
				<a href="#" class="ditu"><span class="ditufind" @click="openMap"></span></a>
				<p class="mll">美乐乐10年</p>
				<p>
					已服务
					<span class="txtcoloe">1,000,000</span>
					个
				</p>
				<p>中国家庭</p>
			</div>
		</div>
		<br />
		<newfirst></newfirst>
		<popularity></popularity>
		<hotxilie></hotxilie>
		<indexroomlist></indexroomlist>
		<indexbedroomlist></indexbedroomlist>
		<shai></shai>
		<selected></selected>
		<div class="mllSZ">
			<div class="mllview">
				<div class="mllviewTop">
					<h1><a href="#">美乐乐深圳体验馆（1家）</a></h1>
					<p><a href="#">全国134家体验馆</a></p>
				</div>
				<ul class="mllviewImg">
					<li class="img-margin">
						<a href="#"><img src="../../assets/images/mllviewImg01.jpg" /></a>
					</li>
					<li class="expr-item">
						<a href="#"><img src="../../assets/images/mllviewImg02.jpg" /></a>
						<div class="expr-div">
							<div class="expr-text">
								<p class="expr-shenz"><a href="#">深圳龙华新区体验馆</a></p>
								<p class="expr-time">09:00-18:30(节假日19:30)</p>
								<p class="expr-num">
									<i></i>
									0755-23158611
								</p>
								<p class="expr-add"><a href="#">地址:广东省深圳市龙华新区布龙路与民治大道交汇处向东200米骏景华庭D栋2楼202-245号（万众城家居广场附近）</a></p>
								<p class="expr-send"><a href="#">发送地址到手机</a></p>
							</div>
						</div>
					</li>
					<li class="mll-expr">
						<a href="#"><img src="../../assets/images/mllviewImg03.jpg" /></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="mapboxz" v-show="mapShow">
			<div class="mapbox">
				<baidu-map class="map" :center="{ lng: 113.96, lat: 22.544 }" :zoom="15">
					<bm-marker :position="{ lng: 113.96, lat: 22.544 }" :dragging="true" animation="BMAP_ANIMATION_BOUNCE"></bm-marker>
				</baidu-map>
				<div class="header">
					<div class="left">
						<span class="icon"></span>
						<span class="title">免费获取深圳龙华新区体验馆地址</span>
					</div>
					<span class="fuhao" @click="clearMap">X</span>
				</div>
			</div>
		</div>
		<footericon></footericon>
		<footerhelp></footerhelp>
		<footerextend></footerextend>
	</div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import indexbanner from '../../components/indexbanner.vue';
import mllheaderbar from '../../components/mll-header-bar';
import IndexInput from '../../components/IndexlogoSearchInput';
import indexroomlist from '../../components/indexroomlist';
import indexbedroomlist from '../../components/indexbedroomlist';
import newfirst from '../../components/newfirst';
import popularity from '../../components/popularity';
import hotxilie from '../../components/hotxilie';
import shai from '../../components/shai';
import selected from '../../components/selected';
import footericon from '../../components/footerIcon';
import footerhelp from '../../components/footerHelp';
import footerextend from '../../components/footerExtend';
import InSearchNavbar from '../../components/InSearchNavbar';
import fixedAdr from '../../components/fixedAdr';
import choujian from '../../components/choujian';
export default {
	name: 'index',
	data() {
		return {
			center: { lng: 0, lat: 0 },
			zoom: 3,
			mapShow: false,
		};
	},
	components: {
		mllheaderbar,
		IndexInput,
		indexroomlist,
		indexbedroomlist,
		newfirst: resolve => {
			require(['../../components/newfirst.vue'], resolve);
		},
		hotxilie: resolve => {
			require(['../../components/hotxilie.vue'], resolve);
		},
		shai: resolve => {
			require(['../../components/shai.vue'], resolve);
		},
		selected: resolve => {
			require(['../../components/selected.vue'], resolve);
		},
		popularity: resolve => {
			require(['../../components/popularity.vue'], resolve);
		},
		footericon,
		footerhelp,
		footerextend,
		InSearchNavbar,
		fixedAdr,
		choujian,
		indexbanner
	},
	methods: {
		clearMap() {
			this.mapShow = false;
		},
		openMap() {
			this.mapShow = true;
		}
	},
	mounted() {}
};
</script>
<style lang="less" scoped="scoped">
.banbox {
	position: relative;
	.address {
		position: absolute;
		width: 180px;
		height: 360px;
		right: 10%;
		top: 50px;
		background: rgba(255, 255, 255, 0.8);
		z-index: 2000;
		padding: 26px 0;
		box-sizing: border-box;
		text-align: center;
		a {
			display: block;
			color: rgb(51, 51, 51);
		}
		.txtcoloe {
			color: #e62318;
		}
		.title {
			font-size: 18px;
			font-weight: bold;
			cursor: pointer;
			.txtcoloe {
				font-size: 19px;
				margin: 0 2px;
			}
			&:hover {
				color: #e62318;
			}
		}
		.item {
			font-size: 14px;
			margin-top: 4px;
			cursor: pointer;
			&:hover {
				color: #e62318;
			}
		}
		.ditu {
			width: 130px;
			height: 130px;
			margin: 26px auto 0px;
			background: url(https://static.mllres.com/mll/mpg/index/i/index.png?20180717) no-repeat 0 -599px;
			position: relative;
			.ditufind {
				position: absolute;
				bottom: -20px;
				left: 50%;
				transform: translateX(-50%);
				display: inline-block;
				width: 124px;
				height: 32px;
				line-height: 32px;
				background: url(https://static.mllres.com/mll/mpg/index/i/index.png?20180717) no-repeat 0 -730px;
				&:hover {
					background: url(https://static.mllres.com/mll/mpg/index/i/index.png?20180717) no-repeat 0 -762px;
				}
			}
		}
		.mll {
			margin-top: 32px;
		}
		p {
			color: #999;
			font-size: 14px;
			line-height: 20px;
			font-family: '微软雅黑';
		}
	}
}
.mllSZ {
	background: url('../../assets/images/back.jpg') top center no-repeat;
	background-color: #353741;
	.mllview {
		background: url('../../assets/images/exprBack.jpg') 0 0 no-repeat;
		background-color: #353741;
		width: 1200px;
		height: 715px;
		margin: 0 auto;
		.mllviewTop {
			text-align: center;
			padding: 50px 0 20px 0;
			font-family: '微软雅黑';
			h1 {
				font-weight: normal;
			}
			a {
				text-decoration: none;
				color: #fff;
				&:hover {
					color: #e62318;
				}
			}
		}
		.mllviewImg {
			li {
				float: left;
				width: 285px;
				height: 441px;
			}
			.img-margin {
				overflow: hidden;
				margin-left: 149px;
			}
			.expr-item {
				margin-left: 20px;
				border: 4px solid #333;
				&:hover {
					border: 4px solid #e62318;
				}
				img {
					width: 285px;
					height: 226px;
					display: block;
				}
				.expr-div {
					background: #f5f5f5;
					width: 285px;
					height: 215px;
					.expr-text {
						padding: 16px 13px 25px 20px;
						font-family: '微软雅黑';
						.expr-shenz {
							a {
								color: #333;
								text-decoration: none;
								font-size: 18px;
								&:hover {
									color: #e62318;
								}
							}
						}
						.expr-time {
							color: #999;
							font-size: 13px;
							line-height: 17px;
						}
						.expr-num {
							color: #666;
							font-size: 14px;
							height: 20px;
							line-height: 20px;
							margin: 10px 10px;
							i {
								background: url('../../assets/images/index.png')-87px -252px no-repeat;
								width: 15px;
								height: 16px;
								display: inline-block;
								margin: 0 5px 0 0;
							}
						}
						.expr-add {
							font-size: 14px;
							a {
								text-decoration: none;
								color: #333;
								display: -webkit-box;
								overflow: hidden;
								text-overflow: ellipsis;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 2;
								&:hover {
									color: #e62318;
								}
							}
						}
						.expr-send {
							margin-top: 10px;
							background: #eb4d4e;
							border: 1px solid #fc0203;
							width: 240px;
							height: 42px;
							line-height: 42px;
							text-align: center;
							a {
								font-size: 12px;
								color: #fff;
							}
						}
					}
				}
			}
			.mll-expr {
				margin-left: 20px;
			}
		}
	}
}

.swiper-con {
	background: url('../../assets/images/banner/1558827390322114952.jpg') no-repeat;
}

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
		background: #503a25;
	}
	.second {
		background: #de3435;
	}
	.third {
		background: #fff;
	}
	.fourth {
		background: #333d1b;
	}
	.sixth {
		background: #2993dd;
	}
	.seventh {
		background: #f1b778;
	}
}
.mapboxz {
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100%;
	z-index: 10000;
	.mapbox {
		width: 890px;
		height: 579px;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: #fff;
		z-index: 10001;
		.map {
			width: 848px;
			height: 498px;
			margin:60px 21px 21px 21px;
		}
		.header{
			position: absolute;
			height: 36px;
			line-height: 36px;
			top: 12px;
			left: 0;
			display: flex;
			justify-content: space-between;
			width: 100%;
			box-sizing: border-box;
			padding: 0 21px;
			color: #000;
			.left{
				font-size: 19px;
				.icon{
					display: inline-block;
					height: 36px;
					width: 36px;
					background: url(https://image.meilele.com/images/common/tdcodesms.png?v2) -179px 0 no-repeat;
					vertical-align: -8px;
				}
			}
			.fuhao{
				font-size: 20px;
				cursor: pointer;
			}
		}
	}
}
</style>
