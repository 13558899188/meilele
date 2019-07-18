<template>
	<div class="indexRoomWrap">
		<div class="swiper-container"> 
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(item,index) in arrimg"><img :src="item"/></div>
		    </div>
		    <!-- 如果需要分页器 -->
   			<div class="swiper-pagination"></div>
		</div>
		<!--轮播上的文字-->
   		<div class="livingTxt">
   			<div class="livingketing">
   				<h1>卧室</h1>
   				<p>BEDROOM</p>
   			</div>
   			<ul class="ketingList">
   				<li v-for="(item,index) in arr" :key="index"><span>{{item}}</span></li>
   			</ul>
   		</div>
   		<ul class="lunboBottom">
   			<li v-for="(item,index) in navs" :key="index" @mouseenter="show(index)"><span>{{item}}</span></li>
   		</ul>
   		<ul class="botListmore">
			<li v-for="(item,index) in obj">
				<img :src="item.img1"/>
				<p class="name">{{item.title}}</p>
				<p class="botpic">{{item.price}}</p>
				<span class="botlisheng">{{item.sheng}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import Swiper from 'swiper'
	import 'swiper/dist/css/swiper.min.css';
	export default{
		data(){
			return {
				arr:['实木床','布艺床','真皮床','高箱床','乳胶床垫','进口床垫','趟门衣柜','四门衣柜','实木妆台','五斗柜'],
				navs:["中式传承","欧式典雅","原木北欧","现代简约"],
				obj:[{
					img1:'https://image.meilele.com/images/small/110/width/285/height/285/mode/1/encrypt/0d59227940f9746ef3237fc1af8326da/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNb_RFvyE3d0oLtbo9DxQIgpxFWNpNiaYrL3__lsO3kiA==.jpg',
					title:'马来西亚油楠木大床',
				    sheng:'立省760',
				    price:'￥3999'
				},{
					img1:'https://image.meilele.com/images/small/395/width/285/height/285/mode/1/encrypt/b59b2ae71876c94dba833025b6049b4d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOj6PbHct0bOtK2MYHqY5v6t1pgpXlKOeWi6aEpdzxErA==.jpg',
					title:'进口金丝檀木全实木床',
				    sheng:'立省600',
				    price:'￥3699'
				},{
					img1:'https://image.meilele.com/images/small/330/width/285/height/285/mode/1/encrypt/2a09249f12e9b74565590c90f7d10096/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN37vJkWb6_RqUpoq6EQwBjjNv6jQRFNrn12JTmUcIbNQ==.jpg',
					title:'高雅新中式白椿木床',
				    sheng:'实木精品',
				    price:'￥3999'
				},{
					img1:'https://image.meilele.com/images/small/192/width/285/height/285/mode/1/encrypt/f01c8ef609b14652dac341ea02082d6d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNpl222FfkT87cJVROFQD7QFovN97_0s1aEdysfyFEhwg==.jpg',
					title:'实用百搭单抽床头柜',
				    sheng:'',
				    price:'￥1045'
				}],
				arrimg:[
						"//img001.mllres.com/images/201904/1555869197016742572.jpg",
						"//image.meilele.com/images/201904/1554056194837241249.jpg",
						"//img002.mllres.com/images/201904/1554056299764021467.jpg",
						"//image.meilele.com/images/201904/1554056394776454253.jpg"
				]
					
			}
		},
		
		mounted(){
		var indexbed = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,  //循环模式选择
			    autoplay: true,//可选选项，自动滑动
    			effect:'fade',
    			pagination: {
						el: '.swiper-pagination',
						clickable: true,
						type: 'bullets'
				}
			})
		},
		methods:{
			show(index){
				if(index==0){
					this.obj = [{
					img1:'https://image.meilele.com/images/small/110/width/285/height/285/mode/1/encrypt/0d59227940f9746ef3237fc1af8326da/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNb_RFvyE3d0oLtbo9DxQIgpxFWNpNiaYrL3__lsO3kiA==.jpg',
					title:'马来西亚油楠木大床',
				    sheng:'立省760',
				    price:'￥3999'
				},{
					img1:'https://image.meilele.com/images/small/395/width/285/height/285/mode/1/encrypt/b59b2ae71876c94dba833025b6049b4d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOj6PbHct0bOtK2MYHqY5v6t1pgpXlKOeWi6aEpdzxErA==.jpg',
					title:'进口金丝檀木全实木床',
				    sheng:'立省600',
				    price:'￥3699'
				},{
					img1:'https://image.meilele.com/images/small/330/width/285/height/285/mode/1/encrypt/2a09249f12e9b74565590c90f7d10096/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN37vJkWb6_RqUpoq6EQwBjjNv6jQRFNrn12JTmUcIbNQ==.jpg',
					title:'高雅新中式白椿木床',
				    sheng:'实木精品',
				    price:'￥3999'
				},{
					img1:'https://image.meilele.com/images/small/192/width/285/height/285/mode/1/encrypt/f01c8ef609b14652dac341ea02082d6d/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNpl222FfkT87cJVROFQD7QFovN97_0s1aEdysfyFEhwg==.jpg',
					title:'实用百搭单抽床头柜',
				    sheng:'',
				    price:'￥1045'
				}]
				}else if(index ==1){
					this.obj =[{
					img1:'https://image.meilele.com/images/small/365/width/285/height/285/mode/1/encrypt/a5f069e2013173421d32ff23e627d300/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPStr_OPoqN5z6bsHnwHRIoZs9yeTn8FXlFQoABe+rraw==.jpg',
					title:'头层珠光真皮雕花女王床',
				    sheng:'',
				    price:'￥4599'
				},{
					img1:'https://image.meilele.com/images/small/226/width/285/height/285/mode/1/encrypt/7da04affdec514887f35a59a9f80df19/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHP1lJ_xHmcmpeQVCDjPYSb3YN2Vn7lXfbpiX+PnD8KehA==.jpg',
					title:'经典款头层真皮雕花床',
				    sheng:'立省700',
				    price:'￥3399'
				},{
					img1:'https://image.meilele.com/images/small/113/width/285/height/285/mode/1/encrypt/11f9f533308c90e3d97fb441b12c6a47/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMo2GaJVOifW2gVnne9MfUfjcUdnfb2adv7sDN3UeMAdQ==.jpg',
					title:'优雅从容头层黄牛皮床',
				    sheng:'立省1100',
				    price:'￥6799'
				},{
					img1:'https://image.meilele.com/images/small/150/width/285/height/285/mode/1/encrypt/b3679096e24c7eb77971701d23d1875a/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMDuGnS6Z6L15WRHUh72B0zfz5TRyo6nvv+WRICLih8sw==.jpg',
					title:'尊贵华美描金床头柜',
				    sheng:'',
				    price:'￥820'
				}]
				}else if(index ==2){
					this.obj = [{
					img1:'https://image.meilele.com/images/small/262/width/285/height/285/mode/1/encrypt/3a65212757668b52b211085812fe36d2/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPJ49Vo+p4VZivzk06jfq9_oU6wKgl1J8fddEOLWL2bvQ==.jpg',
					title:'造木系列白蜡木双人床',
				    sheng:'限时省700',
				    price:'￥2199'
				},{
					img1:'https://image.meilele.com/images/small/306/width/285/height/285/mode/1/encrypt/926a427db623da878cb253c6fa9d78b4/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHOrL6pE0RM63Gxn6_DLcfpYwwrcS7VRORIe9mCCt0aFcQ==.jpg',
					title:'1.5米环保简约高箱床',
				    sheng:'多功能储物盒',
				    price:'￥2869'
				},{
					img1:'https://image.meilele.com/images/small/357/width/285/height/285/mode/1/encrypt/d366ff72210b610794604c35eb486891/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHMw_HnsmKcqcdOOPEv+Ig3DSth02vzjc09305iQzHE6yA==.jpg',
					title:'内凹拉手白蜡木床头柜',
				    sheng:'立省140',
				    price:'￥789'
				},{
					img1:'https://image.meilele.com/images/small/260/width/285/height/285/mode/1/encrypt/c8f82e78eff84f5b7d03868fb9a1990f/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPYkR2f6zy0ZTHt_Cn60DJRn2bJKp8fSmfjlWlF8p+ikg==.jpg',
					title:'素雅之作1.5米实木布艺床',
				    sheng:'参团省500',
				    price:'￥2399'
				}]
				}else{
					this.obj = [{
					img1:'https://image.meilele.com/images/small/178/width/285/height/285/mode/1/encrypt/075d63ebb29c8dbc83a67b9b8d2b5dc5/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHO4TlRj1nL08JIe0X_t+_TrJvKJlnCP7sdFGKob51vGLQ==.jpg',
					title:'简约时尚头层黄牛皮大床',
				    sheng:'立省500',
				    price:'￥2899'
				},{
					img1:'https://image.meilele.com/images/small/316/width/285/height/285/mode/1/encrypt/6edbd089e965a1609836094e3f03f8ec/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHPh7rKUg9aTXSjbi68e+PytlvmdQ0ZKNSbq3gbeql2abg==.jpg',
					title:'精选人气爆款1.8米头层真皮软床',
				    sheng:'立省400',
				    price:'￥2799'
				},{
					img1:'https://image.meilele.com/images/small/359/width/285/height/285/mode/1/encrypt/86bfe8b1b9e6d74efa7b14e29c8930a5/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHNZKpASNK_6bLAm_dRVuLgT2sKJtYmtF7DpABkF+XRdhg==.jpg',
					title:'澳洲进口黄牛皮软床',
				    sheng:'省包装',
				    price:'￥4899'
				},{
					img1:'https://image.meilele.com/images/small/236/width/285/height/285/mode/1/encrypt/a4138a2627c8aacfd356f4677de7d80e/path/YKkxtD0+l8CT6mdTP0jUTosXyzGqRaYb484nDncYwHN6QEpNSnLScVBxPgRyNvBVbpPOu1fYfwgd1dKVRn4n_w==.jpg',
					title:'百搭实用1.8米滑门衣柜',
				    sheng:'',
				    price:'￥2699'
				}]
				}
			}
		}
	}
</script>
<style lang="less" scoped="scoped">
	.indexRoomWrap{
		width: 1200px;
		margin: 47px auto 0 auto;
		height: 770px;
		position: relative;
		.swiper-container{
			height: 400px;
			width: 1200px;
		}
		.livingTxt{
			position: absolute;
			width: 225px;
			height: 300px;
			background: #fff;
			top: 40px;
			z-index: 10;
			left: 50px;
			text-align: center;
			.livingketing{
				padding: 29px 0;
				font-family: '微软雅黑';
				h1{
					color: #000;
					font-weight: normal;
					font-size: 36px;
				}
				p{
					color: #000;
				    font-size: 12px;
				    line-height: 18px;
				    font-family: '微软雅黑';
				    letter-spacing: 3px;
				}
			}
			.ketingList{
				padding: 0 15px;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				li{
					list-style:none;
					span{
						color: #333;
						margin: 0 0 5px 0;
						display: block;
						width: 90px;
						height: 25px;
						line-height: 25px;
						background: #f5f5f5;
						font-size: 14px;
						font-family: "微软雅黑";
						
					}
					span:hover{
						background: #E62318;
						color: #fff;
					}
				}
			}
		}
		.lunboBottom{
			position: absolute;
			z-index: 5;
			display: flex;
			justify-content: space-around;
			align-items: center;
			right: 50px;
			bottom: 370px;
			width: 360px;
			height: 34px;
			line-height: 34px;
			li{
				width: 90px;
				background: #333;
				opacity: 0.8;
				list-style: none;
				cursor: pointer;
				span{
					display: block;
					color: #fff;
					text-align: center;
					font-size: 14px;
					font-family: "微软雅黑";
				}
			}
			li:hover{
				background: #fff;
				opacity: 1;
				span{
					color: #000;
					
				}
			}
		}
	}
	.botListmore{
			display: flex;
			justify-content: space-between;
			width: 1200px;
			height: 350px;
			margin: 20px auto;
			li{
				width: 285px;
				height: 350px;
				text-align: center;
				position: relative;
				list-style: none;
				overflow: hidden;
				cursor: pointer;
				box-sizing: border-box;
				img{
					width: 285px;
					height: 285px;
					transition: all 0.5s;
					&:hover{
						transform: scale(1.06);
					}
				}
				.name{
					margin: 16px 0 3px 0;
					color: #333;
					font-size: 14px;
					font-family: "微软雅黑";
				}
				.botpic{
					color: #E62318;
					font-size: 14px;
				}
				.botlisheng{
					position: absolute;
					display: inline-block;
					top: 10px;
					left: 10px;
					background: #ddb788;
					color: #fff;
					font-size: 13px;
					padding: 0 5px;
					border-radius: 2px;
					height: 18px;
					line-height: 18px;
					border: 1px solid #ddb788;
				}
			}
		}
</style>