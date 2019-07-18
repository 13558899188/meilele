<template>
	<div class="itemLi">	
		<a href="#">
			<img :src="myUrl" alt="" />
			<div class="small-text">				
				<a class="smallImg-tit">{{title}}<slot name="sheng"></slot></a>
				<p class="small-price">{{price | format('￥')}}</p>
			</div>
		</a>
	</div>
</template>

<script>
	export default {
		name: 'jiajuSmallItem',
		props: ['myUrl','title','sheng','price'],
		filters:{
			format:function(val,arg1){
				return `${arg1}${val}`;   //￥10
			}
		}
	}
</script>

<style lang='less' scoped="scoped">
.jiajuItemWrap {
		width: 1190px;
		margin: 80px auto 0;
	}
	
	.item-top {
		display: flex;
		height: 383px;
	}
	.jiajuSmallImg{
		width: 1190px;
		height: 229px;
		display: flex;
		box-sizing: border-box;
		.itemLi{
			position: relative;
			width:297px;
			height: 100%;
			border: 1px solid #ccc;
			border-top: none;
			border-right: none;	
			&:last-of-type{
				border-right: 1px solid #ccc;
			}
			a{
				display: block;
				overflow: hidden;
				box-sizing: border-box;
				img{
								transition: all .3s ;
								&:hover{
									transform: translateX(-10px);
								}
							}
				.small-text{
					position: absolute;
					bottom: 30px;
					left: 30px;
					height: 30px;
					color: #666;
					font-size: 14px;
					a:hover{
							color: red;
							
						}
					.smallImg-tit{
						display: inline-block;
						padding:5px 0;
						
						.shengqian{
							display: inline-block;
							color: red;
							border: 1px solid red;
							margin-left: 5px;
							font-size: 12px;
						}
					}
					.small-price{
						color: red;
						height: 20px;
						.jiaju_buy{
							display: inline-block;
							border: 1px solid red;
							color: #fff;
							height: 20px;
							padding: 0 12px;
							background: red;
							border-radius: 20px;
						}
					}
				}
			}
					
		}
	}
</style>