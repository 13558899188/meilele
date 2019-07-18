<template>
	<div class="footer-extend-box">
		<div class="footer-extend">
			<div class="footer-link">
				<span class="flink">友情链接</span>
				<a href="#" class="alink" v-for="(item,index) in footerLink" :key="index">{{item.youlink}}</a>
			</div>
		</div>
		<div class="footer-copyrights">
			<div class="footer-copyrightleft">
				<span v-for="(item1,index1) in footerCopy">
					<a href="#">{{item1.youlink}}</a> | 
				</span>
				<span class="copy"><a href="#">© 2005-2018 美乐乐 天津美维信息技术有限公司 版权所有，并保留所有权利。ICP备案证书号：粤ICP备08008334号</a></span>
			</div>
			<div class="footer-copyrightR">
                <span class="footericon" v-for="(item2,index2) in footerbar" :key="index2">
                	<a href="#">
                		<i :class="item2.cla"></i>
                		<span>{{item2.youlink}}</span>
                	</a>
                </span>
		    </div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "footerExtend",
		data() {
			return {
				footerLink: [{
					youlink: "中国水泥网"
				}, {
					youlink: "襄阳房产"
				}, {
					youlink: "薯条"
				}, {
					youlink: "掌上明珠家具"
				}, {
					youlink: "创意家居用批发"
				}, {
					youlink: "母婴用品加盟"
				}, {
					youlink: "重庆中国旅行社"
				}, {
					youlink: "家居饰品"
				}, {
					youlink: "宁波租房"
				}, {
					youlink: "随州好房网"
				}, {
					youlink: "六安房产网"
				}, {
					youlink: "蓝景商城"
				}, {
					youlink: "家具"
				}, {
					youlink: "青岛妈妈网"
				}, {
					youlink: "施耐德电气"
				}, {
					youlink: "合肥论坛"
				}, {
					youlink: "防腐木"
				}, {
					youlink: "高仿手表"
				}, {
					youlink: "万师傅家具服务平台"
				}, {
					youlink: "玩具咨询"
				}, {
					youlink: "职场"
				}, {
					youlink: "绍兴柯桥轻纺城"
				}, {
					youlink: "免费试用"
				}, {
					youlink: "房子装修效果图"
				}, {
					youlink: "别墅装修"
				}, {
					youlink: "汽车口碑网"
				}, {
					youlink: "室内装修效果图"
				}, {
					youlink: "皇朝翠玉赔翡翠"
				}, {
					youlink: "菲菲奶粉网"
				}, {
					youlink: "整体橱柜"
				}, {
					youlink: "中国家电市场网"
				}, {
					youlink: "服装企业"
				}, {
					youlink: "宠物网"
				}, {
					youlink: "win10应用商店"
				}, {
					youlink: "龙岩学院"
				}, {
					youlink: "钢铁价格"
				}, {
					youlink: "中国品牌加盟网"
				}, {
					youlink: "家具"
				}, {
					youlink: "福州租房"
				}, {
					youlink: "广州爱邦网"
				}, {
					youlink: "服装新款画册"
				}, {
					youlink: "休闲沙发"
				}, {
					youlink: "四度网"
				}, {
					youlink: "家居网"
				}, {
					youlink: "智能家具"
				}, {
					youlink: "大连房产网"
				}, {
					youlink: "中国空调解决方案"
				}, {
					youlink: "二手家具市场"
				}, {
					youlink: "全渥定制"
				}, {
					youlink: "免费开店"
				}, {
					youlink: "佛山地产"
				}, {
					youlink: "更多"
				}],
				footerCopy: [{
					youlink: "装修网"
				}, {
					youlink: "家具图片"
				}, {
					youlink: "家居资讯"
				}, {
					youlink: "生活百科"
				}, {
					youlink: "家私导购"
				}, {
					youlink: "品牌展厅"
				}, {
					youlink: "装修论坛"
				}, {
					youlink: "装修效果图"
				}, {
					youlink: "客服中心"
				}, {
					youlink: "网站地图"
				}, {
					youlink: "友情链接"
				}, {
					youlink: "更多"
				}],
				footerbar:[
				{youlink:"诚信网站",cla:"footericon1"},{youlink:"认证联盟品牌官网",cla:"footericon2"},{youlink:"可信网站信用评价",cla:"footericon3"},{youlink:"经营网站备案信息",cla:"footericon4"},
				]
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.footer-extend-box {
		width: 100%;
		padding: 21px 0 30px;
		background: #1f1f1f;
		font-size: 12px;
		.footer-extend {
			max-width: 1200px;
			margin: 0 auto;
			.footer-link {
				border-bottom: solid 1px #2e2e2e;
				padding-bottom: 20px;
				margin-bottom: 20px;
				text-align: left;
				.flink {
					color: #777;
					margin-right: 20px;
				}
				a {
					text-decoration: none;
					color: #777;
					margin-right: 20px;
					&:hover{
						color: #FF0000;
					}
				}
			}
		}
		.footer-copyrights {
				display: flex;
				flex-wrap: wrap;
				width: 1200px;
				margin: 0 auto;
				justify-content: space-between;
				align-items: center;
				text-align: left;
				.footer-copyrightleft {
					line-height: 20px;
					height: 20px;
					width:680px;
					span {
						a {
							text-decoration: none;
							color: #777;
							&:hover{
								color: #FF0000;
							}
						}
					}
				}
				.footer-copyrightR{
					display: flex;
					align-items: center;
					.footericon{
						display:flex;
						margin-left:16px;
						a{
							text-decoration: none;
							color: #777;
							i{
								display: inline-block;
								background: url(../assets/images/credit.png) no-repeat 0px 0px;
							}
							.footericon1{
								width: 27px;
								height: 22px;
								vertical-align: -6px;
							}
							.footericon2{
								width: 32px;
								height: 26px;
								background-position:0px -69px;
							}
							.footericon3{
								width: 27px;
								height: 21px;
								background-position:0px -47px;
								vertical-align: 3px;
							}
							.footericon4{
								width: 27px;
								height: 26px;
								background-position:0px -21px;
							}
							span{
								width: 48px;
								display: inline-block;
								line-height: 20px;
							}
							&:hover{
								color: #FF0000;
							}
						}
					}
				}
			}
	}
</style>