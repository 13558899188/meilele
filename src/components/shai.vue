<template>
	<div class="shaiWrap">
		<div class="shaiTop">
			<h1>大家都在晒</h1>
			<p>更多晒家></p>
		</div>
		<ul class="shaiList">
			<li v-for="(item,index) in arr" :key="index">
				<div class="imgbox"><img class="shaiBig" :src="item.img_url"/></div>
				<div class="shaiLi">
					<img class="shaiPic" :src="item.shai_img"/>
					<div class="shaiTxt">
						<p class="shaiName">{{item.shai_name}}</p>
						<p class="shaiTall">{{item.shai_conent}}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				arr:[]
			}
		},
		mounted(){
			this.$axios.get('../../static/data/shaiData.json').then(
				res=>{
					this.arr = res.data.shai
				},err=>{
					console.log("err",err)
				}
			)
		}
	}
</script>
<style lang="less" scoped>
	.shaiWrap{
		width: 1200px;
		margin: 0 auto;
		font-family: "微软雅黑";
		background: #F5F5F5;
		.shaiTop{
			padding-top: 50px;
			text-align: center;
			h1{
				margin: 10px 0;
				font-weight: normal;
				color: #000;
			}
			p{
				margin: 6px 0;
				font-size: 12px;
			}
		}
		.shaiList{
			display: flex;
			justify-content: space-around;
			list-style: none;
			height: 327px;
			padding: 0;
			li{
				width: 283px;
				height: 327px;
				background: #fff;
				cursor: pointer;			
				.imgbox{
					width: 283px;
					height: 212px;
					box-sizing: border-box;
					overflow: hidden;
					img{
						width: 283px;
						height: 212px;
						transition: all 0.5s;
						&:hover{
							transform: scale(1.1);
							opacity: 0.9;
						}
					}
				}
				
				.shaiBig{
					display: block;
				}
				.shaiLi{
					display: flex;
					align-items: center;
					padding: 6px 18px 0 0;
					.shaiPic{
						width: 56px;
						height: 56px;
						border-radius: 50%;
						margin-left: 15px;
					}
					.shaiTxt{
						padding-left: 20px;
						p{
							margin: 0;
							padding: 3px 0;
						}
						.shaiName{
							color: #999;
							font-size: 13px;
						}
						.shaiTall{
							width: 157px;
							color: #444;
							font-size: 14px;
							overflow: hidden;  
						    text-overflow: ellipsis;
						    display: -webkit-box;  
						    -webkit-line-clamp: 2;  
						    -webkit-box-orient: vertical;
						}
					}
				}
			}
		}
	}
</style>