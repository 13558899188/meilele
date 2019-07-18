<template>
	<div class="jiajuShoppingList">
		<ul class="jiajuUl">
			<!--:class="{'shoppingItemActive':index==currIndex}"-->
			<li class="shoppingItem" :class="{'shoppingItemActive':show&&index==shoppingIndex}" @mouseenter="shoppingShow(index)"  @mouseleave="shoppingHide(index)" v-for="(item,index) in jiajuShopping.jiajuShoppingData" :key="index">
				<h2 class="shoppingItemTit">
					<i class="icon"></i>{{item.shopping_title}}
				</h2> 
				<div class="jiajuItemType">
					<a href="#" :class="item2.myColor" v-for="(item2,index2) in item.shopping_type">
						<span>{{item2.shopping_name}}</span>
					</a>
				</div>
			</li>
		</ul>
		<div v-for="(item2,index2) in jiajuShopping.childContainer" :key="index2" @mouseenter="childShow(index2)"  @mouseleave="childHide(index2)">
			<jiaShopingChild :childObj="item2.shopppingChildArr" v-show="show&&index2==shoppingIndex" ></jiaShopingChild>
		</div>		
	</div>
</template>

<script>
	import jiaShopingChild from './jiaShopingChild.vue'
	export default {
		name:'jiajuShoppingList',
		components:{
			jiaShopingChild
		},
		data() {
			return {
				jiajuShopping:{},
				shoppingIndex:0,
				show:false
			}
	},
	mounted(){
		this.getShoppingData();
	},
		methods:{
			getShoppingData(){
				this.$axios.get("../../../static/data/jiajuShoppingData.json")				
				.then(
					res=>{
						this.jiajuShopping=res.data
				}).catch(
					err=>{
						console.log('err',err)
				})
			},
			shoppingShow(index){
				this.shoppingIndex = index;
				this.show = true;
			},
			shoppingHide(index){
				this.shoppingIndex = index;
				this.show = false;
			},
			childShow(index2){
				this.shoppingIndex = index2;
				this.show = true;
			},
			childHide(index2){
				this.shoppingIndex = index2;
				this.show = false;
			}
		}
	}
</script>

<style lang='less' scoped="scoped">
	.jiajuShoppingList {
		position: absolute;
		left:-5px;
		top: 0;
		z-index: 100;
		.jiajuUl {
			height: 400px;
			width: 200px;
			.shoppingItemActive {
				background-color: #efefef;
				border-left: 3px solid #cf000e;
			}
			.shoppingItem {
				height: 67px;
				box-sizing: border-box;
				padding: 10px 5px 8px 15px;
				background-color: #fff;
				border-bottom: 1px solid #efefef;
				list-style: none;
				&:last-of-type {
					border-bottom: none;
				}
				.shoppingItemTit {
					display: flex;
					padding-bottom: 10px;
					font-size: 14px;
					font-weight: 700;
					&:hover{
						color: red;
					}
					.icon {
						display: block;
						width: 20px;
						height: 25px;	
						margin-right: 5px;
						background: url("https://static.mllres.com/mll/mpg/furniture/i/imenu.png")0 0 no-repeat;										
						
					}					
				}
				&:nth-of-type(1){
						.icon{
							background-position: 0px 0px;
						}
					}
					&:nth-of-type(2){
						.icon{
							background-position: -20px 0px;
						}
					}
					&:nth-of-type(3){
						.icon{
							background-position: -40px 0px;
						}
					}
					&:nth-of-type(4){
						.icon{
							background-position: -60px 0px;
						}
					}
					&:nth-of-type(5){
						.icon{
							background-position: -80px 0px;
						}
					}
					&:nth-of-type(6){
						.icon{
							background-position: -100px 0px;
						}
					}
				.jiajuItemType {
					font-size: 12px;
					a {
						color: #787878;
						font-weight: 700;
						padding-right: 5px;
						&:hover {
							color: red;
						}
						&.ShoppingRed {
							color: #cf000e;
							&:hover{
								color: red;
							}
						}
					}
				}
			}
		}
	}
</style>