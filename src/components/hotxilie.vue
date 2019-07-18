<template>
	<div class="hotXilie">
		<h2>热销套系</h2>
		<div class="hotflex">
			<div class="hotWrap" v-for="(item,index) in arr" :key="index">
				<div class="hotshang">
					<img class="hotimgbig" v-lazy="item.img_url"/>
				</div>
				<div class="hotTxt">
					<div class="arrow">
						<div></div>
					</div>
					<p class="hotP">{{item.hot_name}}</p>
					<span>{{item.hot_conent}}</span> <span class="hotxq">{{item.hot_more}}</span>
					<div class="hotxia">
						<div>
							<img  v-lazy="item.hot_img"/>
							<span>{{item.hot_money}}</span>
						</div>
						<div>
							<img v-lazy="item.hot_imgtwo"/>
							<span>{{item.hot_moneytwo}}</span>
						</div>
						<div>
							<img v-lazy="item.hot_imgthr"/>
							<span>{{item.hot_moneythr}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arr:[]
			}
		},
		mounted(){
			this.$axios.get('../../static/data/hotxilieData.json').then(
				res=>{
					this.arr = res.data.hotxilie
				},err=>{
					console.log("err",err)
				}
			)
		}
	}
</script>
<style lang="less" scoped>
	.hotXilie{
		width: 1200px;
		margin: 0 auto;
		text-align: left;
		h2{
			color: #000;
			margin: 20px 0;
		}
		.hotflex{
			display: flex;
			justify-content: space-between;
			.hotWrap{
				float: left;
				width: 390px;
				height: 507px;
				.hotshang{
					width: 390px;
					height: 278px;
					overflow: hidden;
					display: inline-block;
					.hotimgbig{
						width: 390px;
						height: 278px;
						display: block;
						cursor: pointer;
						transition: all 1s;
						&:hover{
							transform: scale(1.1);
						}
						}
					}
				.hotTxt{
					height: 189px;
					background: #f5f5f5;
					padding: 20px;
					font-family: "微软雅黑";
					position: relative;
					cursor: pointer;
					.arrow{
						position: absolute;
						top: -24px;
						left: 31px;
						div{
							width: 0px;
							height: 0px;
							border: 12px solid transparent;
							background: 0 0;
							border-bottom-color: #f5f5f5;
						}
					}
					.hotP{
						font-size: 18px;
						margin: 6px 0 5px;
						color: #333;
					}
					span{
						font-size: 14px;
						color: #999;
					}
					.hotxq{
						color: #e62318;
					}
					.hotxia{
						display: flex;
						justify-content: space-between;
						span{
							text-align: center;
							display: block;
						}
						img{
							width: 115px;
							height: 115px;
							transition: all 1s;
							&:hover{
								transform: scale(1.05);
								opacity: 0.9;
							}
						}
					}
				}
			}
		}
	}
</style>
