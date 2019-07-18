<template>
	<div class="mll-header-bar-box">
		<div class="mll-header-bar">
			<ul class="mllHdBLeft">
				<li class="mllHdBLeftList" v-for="(item,index) in mllHdBLeftList" :key="index"  v-show="item.ishow" @click="clickT(index)">
					<router-link  :class="item.cla" :to="item.dizhi">{{item.select}}</router-link>
				</li>
			</ul>
			<ul class="mllHdBRight">
				<li class="mllHdBRList"  v-for="(item,index) in mllHeaderBList" :key="index" @mouseenter="menter(index)" @mouseleave="mleave(index)">
					<router-link href="#" :to="item.dizhi">
						<i :class="item.cla1"></i>
						{{item.select}} {{item.cartNum}}
						<i :class="item.cla2"></i>
					</router-link>
					<ul class="mllHdBitemlist" v-show="item.ishow" :class="item.cla3">
						<li class="mllHdBitem" v-for="(item1,index1) in item.itemList" :key="index1">
							<a href="#" >{{item1.select}}</a>
							<img src="../assets/images/saoyisao.png" alt="" v-show="index==2">
						</li>
					</ul>
					
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name:"mllHeaderBar",
	data(){
		return{
			mllHeaderBList:[
				{select:'我的美乐乐',cla2:"arrow",cartNum:"",cla3:"mymll",ishow:false,dizhi:"",itemList:[{select:"我的订单"},
				{select:"我的金币"},{select:"我的红包"},{select:"我的收藏"},{select:"我的评价"},
				{select:"申请保价"},]},
			    {select:'购物车',cla1:"cart",cla2:"arrow",cartNum:"0",cla3:"mycart",ishow:false,dizhi:'/shoppCart',itemList:[{select:"购物车中还没有商品，赶紧选购吧！"}]},
				{select:'关注美乐乐',cla1:"guanzhu",cla2:"arrow",cla3:"gzmll",cartNum:"",ishow:false,dizhi:"",itemList:[{select:""}]},
				{select:'帮助中心',cla2:"arrow",cartNum:"",cla3:"hmll",ishow:false,dizhi:"",itemList:[{select:"购买流程"},{select:"在线帮助"},{select:"企业采购"}]},
				{select:'收藏本站',cartNum:"",ishow:false,dizhi:""},
				{select:'全国热线：4000098666',cla3:"mlltel",cartNum:"",ishow:false,dizhi:"",itemList:[{select:"龙华新区体验馆：0755-"}]}
			],
			mllHdBLeftList:[
				{select:"深圳站",cla:"adr",dizhi:'',ishow:true},
				{select:"[切换]",cla:"mllHdBqie",dizhi:'',ishow:true},
				{select:"请登录",cla:"login",dizhi:'/login',ishow:true},
				{select:"免费注册",cla:"resgin",dizhi:'/zhuce',ishow:true},
				{select:"mll_13558899188",cla:"zhanghao",dizhi:'/shoppCart',ishow:false},
				{select:"[退出]",cla:"tuichu",dizhi:'',ishow:false}
			]
		}
	},
	methods:{
		menter(index){
			this.mllHeaderBList[index].ishow=true;
		},
		mleave(index){
			this.mllHeaderBList[index].ishow=false;
		},
		clickT(index){
			if(index==5){
				this.mllHdBLeftList[2].ishow=true;
				this.mllHdBLeftList[3].ishow=true;
				this.mllHdBLeftList[4].ishow=false;
				this.mllHdBLeftList[5].ishow=false;
				sessionStorage.uname='';
				sessionStorage.uphone='';
			}
		}
	},
	mounted(){
		this.mllHeaderBList[3].cartNum=sessionStorage.shopNum
		var indexname = sessionStorage.uname;
		var indexuphone = sessionStorage.uphone;
		    if(indexname){
		    	this.mllHdBLeftList[4].select = indexname;
		    	this.mllHdBLeftList[2].ishow=false;
				this.mllHdBLeftList[3].ishow=false;
				this.mllHdBLeftList[4].ishow=true;
				this.mllHdBLeftList[5].ishow=true;
		    }else if(indexuphone){
				this.mllHdBLeftList[4].select = 'mll_'+indexuphone;
				this.mllHdBLeftList[2].ishow=false;
				this.mllHdBLeftList[3].ishow=false;
				this.mllHdBLeftList[4].ishow=true;
				this.mllHdBLeftList[5].ishow=true;
			}else{
		    	this.mllHdBLeftList[2].ishow=true;
				this.mllHdBLeftList[3].ishow=true;
				this.mllHdBLeftList[4].ishow=false;
				this.mllHdBLeftList[5].ishow=false;
		  };
		  window.sessionStorage.setItem('zhuangtai',this.mllHdBLeftList[5].ishow)
	}
};
</script>

<style lang="less" scoped="scoped">
.mll-header-bar-box {
	width: 100%;
	line-height: 30px;
	background: #f8f8f8;
	color: #717174;
	font-size: 12px;
	.mll-header-bar {
		display: flex;
		max-width: 1200px;
		margin: 0 auto;
		line-height: 30px;
		justify-content: space-between;
		.mllHdBLeft {
			display: flex;
			align-items: center;
			.mllHdBLeftList{
				list-style: none;
				a {
					text-decoration: none;
					color: #717174;
					&:hover {
						color: red;
					}
				}
				.adr {
					margin-right: 8px;
					font-weight: bold;
					color: #e62318;
					&:before {
						content: '';
						width: 11px;
						height: 14px;
						display: inline-block;
						background: url('https://static.mllres.com/mll/common/header/nav/i/nav.png') no-repeat 0 -38px;
						margin-right: 6px;
						vertical-align: -2px;
					}
				}
				.mllHdBqie {
					margin-right: 8px;
				  cursor: pointer;
					&:hover {
						color: #e62318;
					}
				}
				.login {
					margin-right: 8px;
				}
				.resgin {
				}
				.tuichu{
					color: red;
					margin-left: 6px;
				}
				.zhanghao{
					color: #333;
				}
			}
		}
		.mllHdBRight {
			display: flex;
			.mllHdBRList {
				list-style: none;
				padding: 0 8px;
				box-sizing: border-box;
				cursor: pointer;
				position: relative;
				&:hover {
					background: #fff;
					border-left: 1px solid #ccc;
					border-right: 1px solid #ccc;
				}
				a {
					text-decoration: none;
					color: #717174;
					.arrow {
						display: inline-block;
						width: 7px;
						height: 4px;
						background: url('https://static.mllres.com/mll/common/header/nav/i/nav.png') no-repeat 0 -4px;
						margin-left: 4px;
						vertical-align: 2px;
					}
					.cart {
						display: inline-block;
						width: 17px;
						height: 14px;
						background: url('https://static.mllres.com/mll/common/header/nav/i/nav.png') no-repeat 0 -53px;
						margin-right: 6px;
						vertical-align: -2px;
					}
					.guanzhu {
						display: inline-block;
						width: 17px;
						height: 14px;
						background: url('https://static.mllres.com/mll/common/header/nav/i/nav.png') no-repeat 0 -9px;
						margin-right: 4px;
						vertical-align: -2px;
					}
					&:hover{
						color: red;
					}
				}
				.mllHdBitemlist{
					position: absolute;
					top: 30px;
					left: 0;
					width: 100%;
					border: 1px solid #ccc;
					border-top: none;
					margin-left: -1px;
					background: #fff;
					z-index: 10;
					.mllHdBitem{
						list-style: none;
						background: #fff;
						a{
							&:hover{
								color: #e62318;
							}
						}
					}
				}
				.mymll{
					left: 0;
					.mllHdBitem{
						text-align: left;
						margin-left: 9px;
						line-height: 24px;
					}
				}
				.mycart{
					left: 0;
					width: 245px;
					line-height:90px;
					.mllHdBitem{
            
					}
				}
				.guanzhu{
				  left: 0;
					margin-left: -1px;
					.mllHdBitem{
				    text-align: left;
						margin-left: 9px;
					}
				}
				.hmll{
					left: 0;
					.mllHdBitem{
				    text-align: left;
						margin-left: 9px;
					}
				}
				.mlltel{
					width: 190px;
					line-height:30px;
					right: 0;
					margin-right: -1px;
					.mllHdBitem{
				    
					}
				}
				.gzmll{
					padding: 14px 30px;
					text-align: center;
				}
			}
		}
	}
}
</style>
