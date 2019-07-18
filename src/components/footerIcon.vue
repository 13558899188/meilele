<template>
	<div class="footer-icon-box">
		<ul class="footer-icon">
			<li v-for="(item,index) in footerData" :key="index" class="footer-icon-list">
				<a href="#">
					<i class="footerIcon" :class="item.cla"></i>
					<span>{{item.txt}}</span>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				footerData: [{
					cla: "footer-icon1",
					txt: "美乐乐O2O"
				}, {
					cla: "footer-icon2",
					txt: "全国体验馆"
				}, {
					cla: "footer-icon3",
					txt: "双重质检"
				}, {
					cla: "footer-icon4",
					txt: "售后无忧"
				}, {
					cla: "footer-icon5",
					txt: "原创设计"
				}, {
					cla: "footer-icon6",
					txt: "全球采购"
				}, {
					cla: "footer-icon7",
					txt: "千万服务"
				}, {
					cla: "footer-icon8",
					txt: "团队优势"
				}]
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.footer-icon-box{
		width: 100%;
		padding: 35px 0;
		background: #f8f8f8;
		border-bottom: 1px solid #CCCCCC;
		font-size: 12px;
		.footer-icon{
			max-width: 1200px;
			margin: 0 auto;
			display: flex;
			justify-content: space-around;
			.footer-icon-list{
				list-style: none;
				text-align: center;
				a{
					text-decoration: none;
					color: #000;
					.footerIcon{
						width: 50px;
						height: 50px;
						display: inline-block;
						background-image: url(../assets/images/footerIcon.png);
						background-position: 0px 0px;
						background-repeat: no-repeat;
					}
					.footer-icon2{
						background-position: -50px 0px;
					}
					.footer-icon3{
						background-position: -100px 0px;
					}
					.footer-icon4{
						background-position: -150px 0px;
					}
					.footer-icon5{
						background-position: 0px -50px;
					}
					.footer-icon6{
						background-position: -50px -50px;
					}
					.footer-icon7{
						background-position: -100px -50px;
					}
					.footer-icon8{
						background-position: -150px -50px;
					}
					span{
						display: inline-block;
					    width: 100%;
					    font-size: 14px;
					    text-align: center;
					    margin-top: 10px;
					}
				}
			}
		}
	}
</style>