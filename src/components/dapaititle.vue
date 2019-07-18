<template>
	<div class="dapai-header">
		<h1 class="dapaiTitle">
			<span>{{dapaiName}}</span><span>{{EnglishName}}</span>
		</h1>
	</div>
</template>

<script>
	export default {
		name: 'dapaititle',	
	}
</script>

<style lang='less'>
	.dapai-header {
			display: flex;
			height: 40px;
			line-height: 40px;
			border-bottom: 1px solid #333;
			color: #333;
			.dapaiTitle {
				width: 260px;
				font-weight: normal;
				font-size: 18px;
				span:nth-of-type(2) {
					color: #999;
					margin-left: 10px;
				}
			}
		}	
</style>