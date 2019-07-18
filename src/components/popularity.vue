<template>
	<div class="popWrap">
		<h2>人气推荐</h2>
		<div class="popList">
			<div class="popLeft">
				<router-link to="/detail" style="display: block;">
				<div class="popTxt">
					<p class="popDescribe">罗马柱设计餐桌椅</p>
					<p class="popDepict">劲省1847</p>
					<p class="popPrice">￥5899</p>
				</div>
				</router-link>
			</div>
			<div class="popMiddle">
				<router-link to="/detail" style="display: block;">
				<div class="popMid">
					<p class="popSofa">头层黄牛油蜡皮沙发</p>
					<p class="popXian"><span class="popSheng">限时省9000</span> <span class="popMoney">￥24999</span></p>
				</div>
				</router-link>
			</div>
			<div class="popRight">
				<div class="popRighttop">
					<router-link to="/detail" style="display: block;">
					<div class="popTxt">
						<p class="popDescribe">精美雕花真皮床</p>
						<p class="popDepict">狂省800</p>
						<p class="popPrice">￥3499</p>
					</div>
					</router-link>
				</div>
				<div class="popRightxia">
					<router-link to="/detail" style="display: block;">
					<div class="popTxt">
						<p class="popDescribe">独立弹簧双面床垫</p>
						<p class="popDepict">参团省700</p>
						<p class="popPrice">￥2699</p>
					</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="less" scoped>
	.popWrap{
		width: 1200px;
		margin: 0 auto;
		h2{
			margin: 20px 0;
			color: #000;
		}
		.popList{
			display: flex;
			justify-content: space-between;
			.popLeft{
				width: 270px;
				height: 450px;
				background: url(../assets/images/popularityImg/pop01.jpg) no-repeat;
				cursor: pointer;
				transition: all 0.3s;
				&:hover{
					transform: scale(1.03);
				}
			}
			.popMiddle{
				width: 520px;
				height: 450px;
				background: url(../assets/images/popularityImg/pop02.jpg) no-repeat;
				cursor: pointer;
				transition: all 0.3s;
				&:hover{
					transform: scale(1.03);
				}
				.popMid{
					height: 100px;
					width: 260px;
					background: #fff;
					opacity: 0.9;
					margin: 303px 0 0 124px;
					text-align: center;
				}
				p{
					margin: 0;
				}
				.popSofa{
					font-size: 20px;
					color: #333;
					height: 26px;
					padding: 20px 0 6px 0;
				}
				.popXian{
					margin: 0 30px;
					padding-top: 8px;
					border-top: 1px dashed #333;
					.popSheng{
						font-size: 14px;
						color: #333;
					}
					.popMoney{
						font-size: 14px;
						color: #E62318;
					}
				}
			}
			.popRight{
				
				.popRighttop{
					width: 390px;
					height: 220px;
					background: url(../assets/images/popularityImg/pop03.jpg) no-repeat;
					margin-bottom: 11px;
					cursor: pointer;
					transition: all 0.3s;
					&:hover{
						transform: scale(1.03);
					}
				}
				.popRightxia{
					width: 390px;
					height: 220px;
					background: url(../assets/images/popularityImg/pop04.jpg) no-repeat;
					cursor: pointer;
					transition: all 0.3s;
					&:hover{
						transform: scale(1.03);
					}
				}
			}
		}
		
	}
	.popTxt{
		text-align: left;
		padding: 45px 0 0 45px;
		p{
			margin: 3px 0;
		}
		.popDescribe{
			color: #333;
			font-size: 20px;
		}
		.popDepict{
			font-size: 14px;
			color: #666;
		}
		.popPrice{
			font-size: 14px;
			color: #E62318;
		}
	}
</style>