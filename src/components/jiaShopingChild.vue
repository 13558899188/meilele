<template>
	<div class="shoppingChild">
		<div class="shoppingChildType" v-for="(childItem,childIndex) in childObj" :key="childIndex">
			<div class="childLeft">
				<a href="#">{{childItem.child_left}}</a>
			</div>
			<div class="childRight">
				<a href="#" :class="itemA.child_color" v-for="(itemA,indexA) in childItem.childRight" :key="indexA">
					<span>{{itemA.child_type}}</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			childObj: {
				type: Array,
				default: []
			}
		}
	}
</script>

<style lang='less' scoped="scoped">
	.shoppingChild {
		position: absolute;
		left: 200px;
		top: 0;
		width: 430px;
		height: 400px;
		background: #fff;
		background: rgba(255, 255, 255, .95);
		z-index: 666;
		box-sizing: border-box;
		.shoppingChildType {
			display: flex;
			padding-left: 20px;
			padding-right: 20px;
			padding-top: 15px;
			.childLeft {
				width: 90px;
				a {
					color: #333;
					font-size: 14px;
					font-weight: 700;
				}
			}
			.childRight {
				width: 380px;
				border-bottom: 1px dotted #999;
				padding-bottom: 15px;
				a {
					width: 100%;
					display: inline-block;
					width: 75px;
					height: 20px;
					color: #787878;
					font-size: 12px;
					&:hover {
						color: red;
					}
					&.childColor {
						color: #cf000e;
						&:hover {
							color: red;
						}
					}
				}
			}
		}
	}
</style>