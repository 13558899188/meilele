<template>
		<div class="modern-left">
			<img :src="jieshou.myImg" alt="" />
			<div class="modern-tit">
				<a href="#">{{jieshou.left_title1}}</a>
				<a href="#">{{jieshou.left_title2}}</a>
			</div>
			<ul class="modern-list">
				<li v-for="(item1,index1) in jieshou.jiajuType" :key="index1">
					<a href="#" :class="[item1.myColor]" class="myBgColor">{{item1.txt}}</a>
				</li>
			</ul>
	</div>
</template>
<script>
	import Banner from './banner'
	import jiajuSmallItem from './jiajuSmallItem'
	export default {
		name: 'jiajuItem',
		props: {
			jieshou: {
				type: Object,
				default: function() {}
			}
		},
		components: {
			Banner,
			jiajuSmallItem
		}
	}
</script>

<style lang='less' scoped="scoped">
	
	.modern-left {
		position: relative;
		width: 210px;
		height: 383px;
		&.bgColor0{
			.modern-list{
				a{
					&:hover{
					background-color: orange;	
					}
				}
			}
		}
		&.bgColor1{
			.modern-list{
				a{
					&:hover{
					background-color: #c0391c;	
					}
				}
			}
		}
		&.bgColor2{
			.modern-list{
				a{
					&:hover{
					background-color: #2a9de4;	
					}
				}
			}
		}
		&.bgColor3{
			.modern-list{
				a{
					&:hover{
					background-color: #44b262;	
					}
				}
			}
		}
		.modern-tit {
			position: absolute;
			top: 20px;
			a {
				display: block;
				color: #fff;
				width: 210px;
				text-align: center;
				&:hover{
					color: red;
				}
				&:nth-of-type(1) {
					font-size: 20px;
					font-weight: 700;
					margin-bottom: 5px;
				}
				&:nth-of-type(2) {
					font-size: 16px;
					color: rgba(255, 255, 255, .5);
					&:hover{
					color: red;
				}
				}
			}
		}
		.modern-list {
			position: absolute;
			top: 100px;
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			li {
				width: 50%;
				height: 30px;
				box-sizing: border-box;
				padding-left: 10px;
				list-style: none;
				a {
					display: inline-block;
					padding: 1px 4px;
					color: #666;
					font-size: 14px;
					&:hover{
							color:#fff !important;
						}				
					&.orange {
						color: orange;
						&:hover{
							background-color: orange;
						}
					}
					
					
					&.red{
						color: #c0391c;
						&:hover {
							background-color: #c0391c;
						}
					}
					&.blue{
						color:#2a9de4;
						&:hover {
							background-color: #2a9de4;
						}
					}
					&.green{
						color:#44b262;
						&:hover {
							background-color: #44b262;
						}
					}
				}
			}
		}
	}
	
</style>