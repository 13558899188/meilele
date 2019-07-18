<template>
	<div class="guangao" v-show="ishow">
		<a href="#" class="guangaol">
			<img src="http://image.meilele.com/images/201906/1559784028422771082.gif" alt="" />
		</a>
		<span class="guangaoc" @click="close">×</span>
	</div>
</template>
<script>
	export default {
		name: 'publicguangao',
		data(){
			return{
				ishow: true
			}
		},
		methods:{
			close() {
				this.ishow = false;
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.guangao {
		position: absolute;
		top: 0;
		right: 0;
		width: 100px;
		height: 100px;
		font-size: 12px;
		.guangaol {
			display: block;
		}
		.guangaoc {
			display: block;
			width: 14px;
			height: 14px;
			font-size: 13px;
			line-height: 14px;
			background: #bababc;
			color: #fff;
			text-align: center;
			line-height: 1;
			cursor: pointer;
			position: absolute;
			z-index: 2;
			right: 0px;
			top: 0px;
		}
	}
</style>