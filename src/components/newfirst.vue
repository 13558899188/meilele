<template>
	<div class="newsWrap">
		<div class="newTuan">
			<div class="newstuangou">
				<div class="newfff">
					<router-link to="/tuangou">
					<div class="newsxin">
						<p>团购</p>
						<p class="newpJIA">底价成团 限时抢购</p>
					</div>
					</router-link>
				</div>
			</div>
			<div class="newwh newdi">
				<div class="newp">
					<router-link to="/detail">
					<p>低至2折</p>
					<p class="newpJIA">现货特卖中 数量有限</p>
					</router-link>
				</div>
			</div>
			<div class="newwh newqw">
				<div class="newp">
					<router-link to="/detail">
					<p>全屋优选</p>
					<p class="newpJIA">精挑好货  性价比超高</p>
					</router-link>
				</div>
			</div>
			<div class="newwh newjiaju">
				<div class="newp">
					<router-link to="/detail">
					<p>家具热卖TOP榜</p>
					<p class="newpJIA">好家具  用数据说话</p>
					</router-link>
				</div>
			</div>
		</div>
		<div class="newFirst">
			<h2>新品首发</h2>
			<ul class="newsList">
				<li v-for="(item,index) in arr" :key="index">
					<router-link to="/detail">
					<img v-lazy="item.img_url"/>
					<div class="newsP">
						<p>{{item.news_name}}</p>
						<p class="newsXinpin"><span>{{item.news_conent}}>></span><span class="newspri">{{item.new_pri}}</span></p>
					</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				arr:[]
			}
		},
		mounted(){
			this.$axios.get('../../static/data/newfirstData.json').then(
				res=>{
					this.arr = res.data.newFirst
				},err=>{
				}
			)
		}
	}
</script>
<style lang="less" scoped>
	.newsWrap{
		width: 1200px;
		margin: 0 auto;
		.newTuan{
			display: flex;
			justify-content: space-between;
			.newstuangou{
				width: 393px;
				height: 300px;
				position: relative;
				background: url('http://image.meilele.com/images/201904/1555968968259138826.jpg') no-repeat;
				cursor: pointer;
				transition: all 0.3s;
				.newfff{
					position: absolute;
					width: 220px;
					height: 110px;
					background: #fff;
					top: 40px;
					left: 80px;
					a{
						display: block;
					.newsxin{
						margin: 15px;
						border: 1px solid #ccc;
						padding-bottom: 10px;
						text-align: center;
					}
					p{
						margin: 6px 0;
						font-size: 22px;
						color: #333;
						font-family: "微软雅黑";
					}
					.newpJIA{
						border-top: 1px dashed #ccc;
						font-size: 14px;
						color: #666;
					}
				}
				}
				&:hover{
					transform: scale(1.04);
				}
			}
			.newwh{
				width: 259px;
				height: 300px;
				cursor: pointer;
				transition: all 0.3s;
				&:hover{
					transform: scale(1.06);
				}
			}
			.newdi{
				background: url('http://image.meilele.com/images/201904/1555969228536841261.jpg') no-repeat;
			}
			.newqw{
				background: url('http://img003.mllres.com/images/201905/1559182861343201772.png') no-repeat;
			}
			.newjiaju{
				background: url('//img003.mllres.com/images/201904/1555969276535411962.jpg') no-repeat;
			}
		}
	}
	.newp{
		padding-top: 50px;
		text-align: center;
		a{
			display: block;
		p{
			font-size: 22px;
			color: #333;
			font-family: "微软雅黑";
			margin: 6px 0 ;
		}
		.newpJIA{
			font-size: 14px;
			color: #666;
		}
		}
	}
	/*新品部分*/
	.newFirst{
		h2{
			color: #000;
			margin: 20px 0;
		}
		.newsList{
			display: flex;
			justify-content: space-around;
			list-style: none;
			padding: 0;
			li{
				width: 393px;
				height: 393px;
				position: relative;
				a{
					text-decoration: none;
					color: #ffff;
					display: inline-block;
					width: 393px;
					height: 393px;
					overflow: hidden;
					img{
						width: 393px;
						height: 393px;
						transition:all 1s;
						&:hover{
							transform: scale(1.1);
						}
					}
					.newsP{
						position: absolute;
						bottom: 25px;
						left: 90px;
						p{
							color: #fff;
							font-family: "微软雅黑";
							font-size: 24px;
							margin: 6px 0;
						}
						.newsXinpin{
							padding-top: 10px;
							font-size: 14px;
							border-top: 2px solid #fff;
							text-align: center;
							.newspri{
								color: #E62318;
							}
						}
					}
				}
			}
		}
	}
</style>