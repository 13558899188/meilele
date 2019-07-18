<template>
  <div class="checkbox">
     <ul class="check">
     	<li class="checklist">
     		<div class="checklistT">
     			<a href="#"><strong>客厅</strong></a>
     		</div>
     		<div class="checklistC">
     			<span class="tstyle" :class="{'active':ishow==index}" @click="Tshow(index)" v-for="(item,index) in titleList" :key="index">
					<strong>{{item.txt}}</strong>
					<span :class="{'num':ishow==index}" class="num">({{item.snum}})</span>
				</span>
     		</div>
     	</li>
		<li class="checklist"  v-for="(item1,index1) in atitleList" :key="index1" v-show="item1.ishow2">
			<div class="checklistT" :class="{'checklistTs':!item1.itemmore==more}">
				<a href="#">{{item1.ftitle}}</a>
			</div>
			<div class="checklistC">
				<span class="tstyle" :class="{'active':item1.ishow1==index2}" @click="Tshowa(item1,index1,index2)" v-for="(item2,index2) in item1.titleList" :key="index2">
					{{item2.txt}}
				</span>
				<div class="checkbtn" v-show="!item1.itemmore==more"><button>确定</button><button @click="itemmorec(index1)">取消</button></div>
			</div>
			<span class="itemmore" v-show="item1.itemmore==more" @click="itemmore(index1)">+更多</span>
		</li>
     </ul>
     <div class="checkmore"  @click="morebtn">
     	<span class="morebtn">{{tempt}}<i :class="{'down':moredown}"></i><i :class="{'up':moreup}"></i></span>
     </div>
  </div>
</template>

<script>
  
  export default{
    name:'searchCheck',
	data(){
		return{
			ishow:-1,
			moredown:false,
			moreup:true,
			more:0,
			tempt:'客厅长、户型面积、价格',
			titleList:[
				{txt:'沙发',snum:575},{txt:'电视柜',snum:240},{txt:'茶几/边桌',snum:416},
				{txt:'酒柜/装饰柜',snum:122},{txt:'鞋柜',snum:82},{txt:'间厅/玄关柜',snum:34},
				{txt:'休闲椅/凳',snum:57},{txt:'花架/装饰架',snum:52},{txt:'屏风',snum:2},{txt:'客厅套装',snum:32}
				],
			atitleList:[{ftitle:'风格',ishow1:-1,ishow2:true,itemmore:0,titleList:[
					{txt:'现代风格'},{txt:'简美风格'},{txt:'中式风格'},{txt:'欧式风格'},{txt:'地中海风格'},{txt:'美式风格'},{txt:'欧式风格'},{txt:'新古典'}]},
					{ftitle:'类别',ishow1:-1,ishow2:true,itemmore:0,titleList:[
							{txt:'沙发套装'},{txt:'转交沙发'},{txt:'功能沙发'},{txt:'沙发床'},{txt:'单人沙发'},{txt:'双人沙发'},{txt:'三人沙发'},{txt:'四人沙发'},{txt:'贵妃'},{txt:'脚踏'}]},
					{ftitle:'材质',ishow1:-1,ishow2:true,itemmore:0,titleList:[
							{txt:'实木'},{txt:'皮艺'},{txt:'布艺'},{txt:'板木'},{txt:'红木'},{txt:'棉麻'},{txt:'其他材质'}]},
					{ftitle:'客厅长',ishow1:-1,ishow2:false,itemmore:0,titleList:[
							{txt:'2.5米以下'},{txt:'2.5-3米'},{txt:'3.1-4米'},{txt:'4.1-5米'}]},
					{ftitle:'户型面积',ishow1:-1,ishow2:false,itemmore:0,titleList:[
							{txt:'50㎡以下'},{txt:'50-70㎡'},{txt:'70-90㎡'},{txt:'90-120㎡'},{txt:'120-150㎡'}]},
					{ftitle:'价格',ishow1:-1,ishow2:false,itemmore:0,titleList:[
							{txt:'0-4999元'},{txt:'5000-9999元'},{txt:'10000-29999元'},{txt:'30000-49999'},{txt:'50000元以上'}]}
					]
		}
	},
	methods:{
		Tshow(index){
			if(index>=0){
				if(this.ishow==index){
					this.ishow=-1;
				}else{
					this.ishow=index;
				}
			}else{
				this.ishow=-1;
			}
		},
		Tshowa(item1,index1,index2){
			if(index2>=0){
				if(item1.ishow1==index2){
					this.atitleList[index1].ishow1=-1;
				}else{
					this.atitleList[index1].ishow1=index2;
				}
			}else{
				this.atitleList[index1].ishow1=-1;
			}
		},
		lishow(index1){
			if(index1<=2){
				return true;
			}else{
				return false;
			}
		},
		morebtn(){
			for(var i=3;i<=5;i++){
				this.atitleList[i].ishow2=!this.atitleList[i].ishow2;
			}
			if(this.tempt=="收起"){
				this.tempt="客厅长、户型面积、价格"
			}else{
				this.tempt="收起"
			}
			this.moredown=!this.moredown;
			this.moreup=!this.moreup;
		},
		itemmore(index1){
			if(this.atitleList[index1].itemmore>=0){
				this.atitleList[index1].itemmore=-1;
			}else{
				this.atitleList[index1].itemmore=index1;
			}
		},
		itemmorec(index1){
			this.atitleList[index1].itemmore=0;
		}
	}
  }
</script>

<style lang="less" scoped="scoped">
   .checkbox{
   	width: 1200px;
   	margin: 20px auto;
   	border: 1px solid #ccc;
   	box-sizing: border-box;
   	font-size: 13px;
   	.check{
   		width: 1198px;
   		.checklist{
   			list-style: none;
   			display: flex;
			align-items: center;
   			line-height: 36px;
   			border-bottom: 1px solid #ccc;
			position: relative;
   			.checklistT{
   				width: 125px;
				background: #F5F5F5;
				a{
					display: block;
					padding-left:18px;
					color: #666;
					font-weight: 700;
					
				}
   			}
			.checklistTs{
				a{
					height: 73px;
				}
			}
			.checklistC{
				padding-left: 10px;
				font-size: 12px;
				width: 1070px;
				.tstyle{
					margin-left: 20px;
					cursor: pointer;
					display: inline-block;
					line-height: 18px;
					.num{
						color: red;
						display: inline-block;
					}
					&:hover{
						color: red;
					}
				}
				.active{
					background: red;
					color: #fff;
					.num{
						color: #fff;
						&:hover{
							color: #fff;
						}
					}
					&:hover{
						color: #fff;
					}
				}
				.checkbtn{
					width: 100%;
					text-align: center;
					display: inline-block;
					button{
						padding: 2px 6px;
						background: #fff;
						border: 1px solid #ccc;
						border-radius: 3px;
						&:first-of-type{
							margin-right: 20px;
						}
					}
				}
			}
			.itemmore{
				border: 1px solid #ccc;
				height: 18px;
				padding: 0 4px;
				display: flex;
				align-items: center;
				font-size: 12px;
				cursor: pointer;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: 10px;
			}
			
   		}
   	}
   	.checkmore{
   		background: #eee;
   		height: 4px;
   		margin-top: -2px;
   		text-align: center;
   		 span{
	   		 	display: inline-block;
			    height: 18px;
			    line-height: 18px;
			    padding: 10px 27px 7px;
			    border: solid 1px #e8e8e8;
			    border-top: none;
			    background: #eee;
			    cursor: pointer;
			    color: #555;
			    .down{
			    	background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') -69px -232px no-repeat;
			    	width: 9px;
				    height: 5px;
				    overflow: hidden;
				    margin: 4px 0 0 8px;
				    display: inline-block;
			    }
				.up{
					background: url('https://static.mllres.com/mll/mpg/category/1.0/i/listicon.png') -79px -232px no-repeat;
					width: 9px;
					height: 5px;
					overflow: hidden;
					margin: 4px 0 0 8px;
					display: inline-block;
				}
   		 }
   	}
   }
</style>