<template>
	<!--<div class="jiajuBottomWrap">
		<div class="jaijuB-tit">
			<span>猜你喜欢</span>
			<slot name="huan">换一批</slot>
		</div>						
		<slot name="button-text"></slot>
	</div>-->
	<div class="jiajuBottomWrap">
		<div class="jaijuB-tit">
			<h2>
				<span>猜你喜欢</span>
				<span class="huan">换一批</span>
			</h2>
			
		</div>						
		<div class="button-text">
			<ul class="xihuanList">
				<li>
					<a href="#" class="aimg"><img src="http://image.meilele.com/images/201803/1521424764894353148.jpg" alt="" /></a>
					<br />
					<a class="xihuan-tit" href="">名流之选 巴西进口头层黄牛皮 五档调节头枕左/右转角沙发 三色可选</a>
					<p>￥<span>7599</span></p>
				</li>
				<li>
					<a href="#" class="aimg"><img src="http://image.meilele.com/images/201807/1531459848358927398.jpg" alt="" /></a>
					<br />
					<a class="xihuan-tit" href="">人气爆款 栅栏式简约设计 臻选美国进口白杨木1.2米/1.5米/1.8米床</a>
					<p>￥<span>7599</span></p>
				</li>
				<li>
					<a href="#" class="aimg"><img src="http://image.meilele.com/images/201901/1547434011903259913.jpg" alt="" /></a>
					<br />
					<a class="xihuan-tit" href="">名流之选 巴西进口头层黄牛皮 五档调节头枕左/右转角沙发 三色可选</a>
					<p>￥<span>7599</span></p>
				</li>
				<li>
					<a href="#" class="aimg"><img src="http://image.meilele.com/images/201510/1444648767191305668.jpg" alt="" /></a>
					<br />
					<a class="xihuan-tit" href="">名流之选 巴西进口头层黄牛皮 五档调节头枕左/右转角沙发 三色可选</a>
					<p>￥<span>7599</span></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

	export default {
		name: 'cainixihuan',
	}
</script>

<style lang='less'>
		.jiajuBottomWrap{
			width: 1190px;
			margin: 0 auto;
			margin-top: 50px;
			.jaijuB-tit{
				position: relative;
				width: 100%;
				height: 50px;
				border-top: 1px solid #ccc;
				>h2{
					position: absolute;
					left: 50%;
					top: -25%;
					transform: translateX(-50%);
					padding: 0 20px;
					height: 50px;
					background: #fff;
					color: #333;
					font-size: 20px;
					font-weight: normal;
					.huan{
						margin-left: 10px;
						color: #999;
						font-size: 14px;
					}
				}
			}
			.button-text{
				width: 1190px;
				.xihuanList{
					display: flex;
					justify-content: space-between;
					li{
						width:270px;
					    list-style: none;
						.aimg{
							display: inline-block;
							width: 270px;
							height: 180px;
							box-sizing: border-box;
							overflow: hidden;
							img{
								width: 270px;
								height: 180px;
								transition: all 1s;
								&:hover{
									transform: scale(1.08);
								}
							}
						}				
						.xihuan-tit{
							display: inline-block;
							height: 30px;
							line-height: 30px;
							width: 100%;
							color: #333;
							font-size: 14px;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							
						}
						p{
							color: red;
							font-size: 14px;
						}
					}
					
				}
			}
		}
</style>