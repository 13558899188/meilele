<template>
	<div class="jxWrap">
		<h1>精选风格</h1>
		<ul class="jxList">
			<li>
				<a href="#">
					<img src="http://img001.mllres.com//images/upload/201807/853fed4fd5c3480f1d26abfdd29bf6e6.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://img002.mllres.com//images/upload/201807/f3cc96bba6adac6945211d1d6fe8ddda.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://img004.mllres.com//images/upload/201807/94d4bac130dc0c72c7bf748e7e55da84.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://image.meilele.com//images/upload/201807/5bf18e0a3825ef0a1d24af64e293b029.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://img004.mllres.com//images/upload/201807/f2e24f661e656983278aa1abf6ce907b.jpg"/>
				</a>
			</li>
			<li>
				<a href="#">
					<img src="http://img004.mllres.com//images/upload/201807/79ff9e4affac0093a5625c39f5109165.jpg"/>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	
</script>
<style lang="less" scoped="scoped">
	.jxWrap{
		width: 1200px;
		margin: 0 auto;
		padding-bottom: 60px;
		h1{
			font-weight: normal;
			color: #000;
			text-align: center;
			margin: 20px 0;
		}
		.jxList{
			list-style: none;
			padding: 0;
			display: flex;
			justify-content: space-between;
			a{
				display:inline-block;
				border-radius: 3px;
				width: 181px;
				height: 220px;
				box-sizing: border-box;
				overflow: hidden;
				img{
					border-radius: 3px;
					width: 181px;
					height: 220px;
					transition: all 0.5s;
					&:hover{
						transform: scale(1.1);
					}
				}
			}
		}
	}
</style>