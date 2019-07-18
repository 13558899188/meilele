<template>
	<div class="modern-right">
		<a href="#">
			<img :src="rightReceive.rightImg" alt="" />
			<div class="mr-txt">
				<p><span>{{rightReceive.rightTit}}</span><span class='sheng' v-show="rightReceive.xianshi">{{rightReceive.rightSheng}}</span></p>
				<p>{{rightReceive.rightPrice | format('￥')}}</p>
			</div>
		</a>
	</div>
</template>
<script>
	import Banner from './banner'
	import jiajuSmallItem from './jiajuSmallItem'
	export default {
		name: 'jiajuItem',
		props:{
			rightReceive:{type:Object,default:function(){}}
		},
		filters:{
			format:function(val,arg1){
				return `${arg1}${val}`;   //￥10
			}
		}
	}
</script>

<style lang='less' scoped="scoped">
	.modern-right {
				position: relative;
				border: 1px solid #ccc;
				height: 381px;
				img{
				transition: all .3s ;
				&:hover{
					transform: translateX(-10px);
				}
			}
				.mr-txt {
					position: absolute;
					bottom: 20px;
					left: 20px;
					color: #333333;
					font-size: 14px;
					.sheng {
						margin-left: 5px;
						border: 1px solid red;
						color: red;
						font-size: 12px;
					}
					p:last-of-type {
						color: red;
					}
				}
			}
</style>