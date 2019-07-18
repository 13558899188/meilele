<template>
		<ul class="publicAdr">
			<li class="publicAdrItem" v-for="(item, index) in listData" :key="index" @mouseenter="fn(index)" @mouseleave="fn1(index)" @click="backTop(index)">
				<div class="adrhidden" :class="{ active: tempnum == index }">{{ item.Iteml }}</div>
				<div class="publicAdrbox">
					<router-link :to="item.alink">
						<i :class="item.cla"></i>
						<span class="text">{{ item.Itemna }}</span>
						<span class="num" v-show="item.ishow">{{ item.Itemn }}</span>
					</router-link>
				</div>
			</li>
		</ul>
</template>
<script>
import $ from 'jquery';
export default {
	name: 'fixedAdr',
	data() {
		return {
			listData: [
				{ Itemna: '客服', Iteml: '咨询在线客服', cla: 'publicAdrIcon1', ishow: false, Itemn: '', alink: '',dianji:''},
				{ Itemna: '体验馆', Iteml: '发送体验馆地址', cla: 'publicAdrIcon2', ishow: false, Itemn: '', alink: '',dianji:''},
				{ Itemna: '购物车', Iteml: '参与本期抽奖', cla: 'publicAdrIcon3', ishow: true, Itemn: 0, alink: '',dianji:'backTop'},
				{ Itemna: '抽奖', Iteml: '参与本期抽奖', cla: 'publicAdrIcon4', ishow: false, Itemn: '', alink: '',dianji:''},
				{ Itemna: '', Iteml: '返回顶部', cla: 'publicAdrIcon5', ishow: false, IItemn: '', alink: '',dianji:'backTop'}
			],
			tempnum: -1,
			userlist:[]
		};
	},
	mounted() {
		window.addEventListener('scroll', this.scrollToTop);
		if(this.$store.state.shopnum>=1){
			this.listData[2].ishow=true;
			this.listData[2].Itemn=this.$store.state.shopnum;
		}else{
			this.listData[2].ishow=false;
			this.listData[2].Itemn=0;
		}
	},
	destroyed() {
		window.removeEventListener('scroll', this.scrollToTop);
	},
	methods: {
		fn(index) {
			this.tempnum = index;
		},
		fn1(index) {
			this.tempnum = -1;
		},
		// 点击图片回到顶部方法，加计时器是为了过渡顺滑
		backTop(index) {
			if(index==4){
				let that = this;
				let timer = setInterval(() => {
					let ispeed = Math.floor(-that.scrollTop / 5);
					document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed;
					if (that.scrollTop === 0) {
						clearInterval(timer);
					}
				}, 16);
			}else if(index==2){
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
		},

		// 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
		scrollToTop() {
			let that = this;
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			that.scrollTop = scrollTop;
		}
	}
}
</script>
<style lang="less" scoped="scoped">
.publicAdr {
	width: 74px;
	flex-wrap: wrap;
	position: fixed;
	top: 300px;
	right: 30px;
	background: #ffffff;
	z-index: 100;
	font-size: 12px;
	.publicAdrItem {
		list-style: none;
		width: 72px;
		height: 70px;
		border: 1px solid #ccc;
		border-bottom: none;
		position: relative;
		cursor: pointer;
		&:last-of-type {
			border-bottom: 1px solid #ccc;
		}
		.adrhidden {
			display: none;
			opacity: 0;
			position: absolute;
			right: 100px;
			top: 18px;
			width: 152px;
			line-height: 36px;
			filter: Alpha(opacity=0);
			color: #fff;
			font-size: 13px;
			text-align: center;
			width: 152px;
			height: 36px;
			background-image: url('http://static.mllres.com/mll/models/chat/i/chat_icon.png?v2');
			background-position: 0 -526px;
			z-index: 297;
			transition: all 0.3s;
		}
		.active {
			display: block;
			opacity: 1;
		}
		.publicAdrbox {
			a {
				display: block;
				text-decoration: none;
				color: rgb(153, 153, 153);
				font-size: 12px;
				text-align: center;
				.num {
					position: absolute;
					display: inline-block;
					width: 14px;
					height: 14px;
					border-radius: 50%;
					background: #ff0000;
					line-height: 14px;
					text-align: center;
					top: 18px;
					right: 16px;
					color: #fff;
					font-size: 11px;
				}
				.text {
					position: absolute;
					bottom: 4px;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			i {
				width: 40px;
				height: 44px;
				display: inline-block;
				background: url(../assets/images/chat_icon.png) no-repeat -19px 0px;
				position: absolute;
				top: 46%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			.publicAdrIcon1 {
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				top: -10px;
				width: 40px;
				height: 54px;
			}
			.publicAdrIcon2 {
				background-position: -19px -93px;
				height: 38px;
			}
			.publicAdrIcon3 {
				background-position: -23px -170px;
				width: 34px;
				height: 36px;
			}
			.publicAdrIcon4 {
				background-position: -20px -249px;
				width: 36px;
				height: 36px;
			}
			.publicAdrIcon5 {
				background-position: -25px -334px;
				width: 28px;
				height: 32px;
			}
		}
	}
}
</style>
