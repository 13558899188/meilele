<template>
	<div class="tuangou">
		<publicmlltop></publicmlltop>
		<publicguangao></publicguangao>
		<mllheaderbar></mllheaderbar>
		<br />
		<itemlogoSearch></itemlogoSearch>
		<br />
		<SearchNavbar></SearchNavbar>
		<credr></credr>
		<fixedAdr></fixedAdr>
		<choujian></choujian>
		<div class="xianshibox">
			<div class="xianshi">
				<div class="time">
					本场还剩
					<span>{{days}}:{{hours}}:{{minutes}}:{{seconds}}</span>
				</div>
				<div class="xianshii">
					<a href="#">抢家具</a>
					<a href="#">抢建材</a>
					<a href="#">抢家居家饰</a>
				</div>
			</div>
		</div>
		<div class="tgtimb">
			<div class="tgtimbx">
				<div class="tgtim" :class="{'active':ishow==index}" v-for="(item,index) in timer" :key="index" @mouseenter="aishow(index)">
					<span class="itemnum">10:00</span>
					<span class="itemit">{{item.txt}}</span>
				</div>
			</div>
		</div>
		<ul class="itembox">
			<li class="item" v-for="(item,index) in listData" :key="index">
				<a href="#">
					<img :src="item.urlimg" alt="">
				</a>
				<p>{{item.title}}</p>
				<img src="../../assets/images/qiang.png" alt="" class="jindu">
				<div class="pribox">
					<div class="left">
						<i>￥</i>{{item.pri}}
						<del>￥{{item.zpri}}</del>
					</div>
					<button type="button">马上抢</button>
				</div>
			</li>
		</ul>
		<div class="page">
			<a href="#" class="up">
				<span class="left"></span>
				上一场
			</a>
			<a href="#" class="down">
				下一场<span class="right"></span>
			</a>
		</div>
		<footerIcon></footerIcon>
		<footerHelp></footerHelp>
		<footerExtend></footerExtend>
	</div>
</template>

<script>
	import publicmlltop from '../../components/publicmlltop';
	import publicguangao from '../../components/publicguangao';
	import mllheaderbar from '../../components/mll-header-bar';
	import itemlogoSearch from '../../components/itemlogoSearchInput';
	import SearchNavbar from '../../components/SearchNavbar';
	import credr from '../../components/publicredr';
	import fixedAdr from '../../components/fixedAdr';
	import choujian from '../../components/choujian';
	import footerIcon from '../../components/footerIcon';
	import footerHelp from '../../components/footerHelp';
	import footerExtend from '../../components/footerExtend';
	
	export default{
		name:'tuangou',
		components: {
			publicmlltop,
			publicguangao,
			mllheaderbar,
			itemlogoSearch,
			SearchNavbar,
			credr,
			fixedAdr,
			choujian,
			footerIcon,
			footerHelp,
			footerExtend
		},
		mounted(){
			this.countTime()
		},
		data(){
			return {
				days:'',
				hours:'',
				minutes:'',
				seconds:'',
				ishow:'1',
				timer:[{txt:'已开抢'},{txt:'抢购中'},{txt:'明日开抢'}],
				listData:[
					{urlimg:'http://img002.mllres.com/images/small/303/width/300/height/300/mode/1/encrypt/b9702d4fb60c0764ee6d02babf3e9ca1/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp2HH0Q6fQFAPXo10axp2xp0FhcBOnCeFosMLmD__ImPFw==.jpg',title:'现代 小鸭造型 玻璃吊灯 卧室书房餐厅',pri:'119',zpri:'145'},
					{urlimg:'http://img002.mllres.com/images/small/344/width/300/height/300/mode/1/encrypt/1123cd8f3acdbb7da6b56eb792c761ea/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp3CPzxSAiyjSjK0kGzEC8ISxJQ3h7on9ptcT044JwwSnA==.jpg',title:'美式吊灯 客厅灯 全铜吊灯 个性卧室灯 餐厅吊灯 铜色',pri:'999',zpri:'1299'},
					{urlimg:'http://img004.mllres.com/images/small/286/width/300/height/300/mode/1/encrypt/3f9a6e128b81a65af320f906557ba794/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp1u+HryCjrgILx0NrEsaS0Elko0Rmm+2ihjJCuU2WSSDQ==.jpg',title:'现代 分段式吸顶灯 磨砂白玉玻璃 客厅餐厅',pri:'568',zpri:'724'},
					{urlimg:'http://image.meilele.com/images/small/327/width/300/height/300/mode/1/encrypt/8817761cffa13ac2e95fdada19c8f6f3/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp0MLGYlJWSMqEahuhGvJmuF_h2KRnFb4CX3rvH2Y99v3TOGwkI5XRE3ACJll8DT+ucSVXlQfWDruSk1OXp1BKhL.jpg',title:'心花怒放精美双耳花瓶 陶瓷花瓶配4束花套装 高档家居装饰品',pri:'89',zpri:'268'},
					{urlimg:'http://img001.mllres.com/images/small/161/width/300/height/300/mode/1/encrypt/060f273b4846f3cf7580e7c2ffce10b6/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp0LUHDqzebT50NRHAzNpdvK4YScvo4341JACU5flcT1PA==.jpg',title:'现代 黑色铁艺台灯  手工布艺灯罩 ',pri:'80',zpri:'99'},
					{urlimg:'http://image.meilele.com/images/small/412/width/300/height/300/mode/1/encrypt/7c6a37e8955d5617cf77dc162f395102/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp3D+fKqEoE4PnJaIBXF64LIdMPINFatHJb1Du8OsXwpUQVbFnyEBJXcfDEbJ5BdaMTKkT5AqPoDzJL1gu1wrFy0.jpg',title:'汽车收纳箱后备箱储物箱多功能塑料可折叠杂物整理车载置物箱用品',pri:'55',zpri:'69'},
					{urlimg:'http://img001.mllres.com/images/small/985/width/300/height/300/mode/1/encrypt/f9eec02bacca4291c23f8c8399141d4f/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp32ebHtK_N_Y0mdOkKk_feiynv0vPASGRP6avtoneCQDDXFibIZCE6ZGMb+rEiIRD8pMwBhBj5JBP8PoLh8aYuG.jpg',title:'【垃圾袋1包=100只】【一次买2单送1包】加厚垃圾袋家用一次性彩色厨房卫生间黑色塑料袋中大号',pri:'13.2',zpri:'16.5'},
					{urlimg:'http://img001.mllres.com/images/small/130/width/300/height/300/mode/1/encrypt/b3968902df5d8901f3e1b4b8f4d55828/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp3G42YwMJWM2pYrRJxkeobAhKelH1Aua45YURKCr5LaAi6i4GJvq3uj0Ur0ImPwBJLuGxhg23NsTLPjiq+RGCLd.jpg',title:'双层圆形水果篮洗菜篮淘米盆沥水篮 厨房洗米筛水果蔬菜盘果盘',pri:'24',zpri:'30'},
					{urlimg:'http://img003.mllres.com/images/small/178/width/300/height/300/mode/1/encrypt/fdbb570fc5c3aabd7c1ecd1b375cba12/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp0loD5X5UMFhygSreNfehc280fN3j3eVnjz166JMr50wdrbJHE0lAphPAWCUhf7hkRJZq6IMJeUjfJf+0xLB9ft.png',title:'办公升降椅 老板办公椅 经理椅 电脑椅 写字椅 网布旋转椅 写字椅 会议椅培训',pri:'188',zpri:'299'},
					{urlimg:'http://img002.mllres.com/images/small/352/width/300/height/300/mode/1/encrypt/f4f2ba1775985f82bb9c170e9f83bd57/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp0X5subPElQDheaG2IKIIsnZ8XJnn39HFB7UWVY2dNAHeW8jmJflovVa5h72ORF0K_dd2gVisjrrogXcDhfK6XD.png',title:'可升降转椅 办公椅 职员椅员工椅 家用电脑椅 办公室椅 网布旋转椅 写字椅 主播椅',pri:'258',zpri:'399'},
					{urlimg:'http://image.meilele.com/images/small/412/width/300/height/300/mode/1/encrypt/7c6a37e8955d5617cf77dc162f395102/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp3D+fKqEoE4PnJaIBXF64LIdMPINFatHJb1Du8OsXwpUQVbFnyEBJXcfDEbJ5BdaMTKkT5AqPoDzJL1gu1wrFy0.jpg',title:'汽车收纳箱后备箱储物箱多功能塑料可折叠杂物整理车载置物箱用品',pri:'55',zpri:'69'},
					{urlimg:'http://img001.mllres.com/images/small/985/width/300/height/300/mode/1/encrypt/f9eec02bacca4291c23f8c8399141d4f/path/Orgbj5bDqlXUMGZEYAnuJ7Lt+upDaEzTpQfGByDYCp32ebHtK_N_Y0mdOkKk_feiynv0vPASGRP6avtoneCQDDXFibIZCE6ZGMb+rEiIRD8pMwBhBj5JBP8PoLh8aYuG.jpg',title:'【垃圾袋1包=100只】【一次买2单送1包】加厚垃圾袋家用一次性彩色厨房卫生间黑色塑料袋中大号',pri:'13.2',zpri:'16.5'}
				]
			}
		},
		methods:{
			aishow(index){
				this.ishow=index;
			},
			countTime: function () {
                //获取当前时间
                var date = new Date();
                var now = date.getTime();
                //设置截止时间
                var endDate = new Date("2019-07-20 23:23:23");
                var end = endDate.getTime();
                //时间差
                var leftTime = end - now;
                //定义变量 d,h,m,s保存倒计时的时间
                if (leftTime >= 0) {
                    var d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
                    this.days = this.buling(d);
                    var h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
                    this.hours = this.buling(h); 
                    var m = Math.floor(leftTime / 1000 / 60 % 60);
                    this.minutes =  this.buling(m);  
                    var s = Math.floor(leftTime / 1000 % 60);
                    this.seconds = this.buling(s); 
                }
                //递归每秒调用countTime方法，显示动态时间效果
                setTimeout(this.countTime, 1000);
          },
          buling(num){
          	return num<=9?'0'+num:num
          }
		}
	}
	
</script>

<style lang="less" scoped="scoped">
	.tuangou{
		font-size: 12px;
		.xianshibox{
			width: 100%;
			height: 90px;
			background-color: #F44238;
			.xianshi{
				line-height: 90px;
				width: 1230px;
				margin: 0 auto;
				background: url('https://static.mllres.com/mll/mpg/sale/i/header.png') no-repeat 0px 0px;
				display: flex;
				justify-content: space-around;
				.time{
					color: #fff;
					font-size: 14px;
					width: 33%;
					text-align: right;
					span{
						font-size: 24px;
						font-weight: bold;
					}
				}
				.xianshii{
					width: 50%;
					a{
						font-size: 17px;
						color: #fff;
						margin-right: 20px;
						&:last-of-type{
							margin-right: none;
						}
					}
					
				}
				
			}
		}
		.tgtimb{
			width: 100%;
			line-height: 60px;
			background: #333;
			color: #fff;
			.tgtimbx{
				width: 1140px;
				line-height: 60px;
				margin:  0 auto;
				display: flex;
				.tgtim{
					width: 160px;
					padding: 8px 0;
					color: #999;
					text-align: center;
					cursor: pointer;
					.itemnum{
						font-size: 20px;
						display: block;
						line-height: 22px;
					}
					.itemit{
						font-size: 15px;
						display: block;
						line-height: 22px;
					}
				}
				.active{
					color: #fff;
					background-color: #111;
					border-bottom: solid 3px #f34a41;
				}
			}
		}
	    .itembox{
			width: 1200px;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			overflow: hidden;
			.item{
				list-style: none;
				width: 285px;
				height: 414px;
				a{
					display: block;
					img{
						width: 285px;
						height: 285px;
					}
				}
				p{
					width: 100%;
					font-size: 14px;
					color: #333;
					line-height: 1;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					padding: 0 20px;
					line-height: 36px;
				}
				.jindu{
					padding: 0 20px;
				}
				.pribox{
					margin-top: 10px;
					width: 285px;
					line-height: 40px;
					display: flex;
					justify-content: space-between;
					border: 1px solid #e62318;
					.left{
						color: #e62318;
						font-size: 20px;
						padding-left: 14px;
						i{
							font-style: normal;
							font-size: 14px;
						}
						del{
							color: #999;
							font-size: 15px;
						}
						
					}
					button{
							width: 102px;
							height: 42px;
							line-height: 42px;
							text-align: center;
							font-size: 17px;
							color: #fff;
							background-color: #e62318;
							border: none;
					}
				}
			}
		}
	    .page{
			width: 1200px;
			line-height: 44px;
			margin: 40px auto 60px;
			display: flex;
			justify-content: center;
			a{
				display: inline-block;
				width: 156px;
				line-height: 44px;
				text-align: center;
				font-size: 17px;
				color: #333;
				border-radius: 22px;
				display: flex;
				align-items: center;
				justify-content: center;
				.left{
					display: inline-block;
					width: 9px;
					height: 18px;
					background: url('https://static.mllres.com/mll/mpg/sale/i/index.png') no-repeat 0 0;
					margin-right: 10px;
				}
				.right{
					display: inline-block;
					width: 9px;
					height: 18px;
					background: url('https://static.mllres.com/mll/mpg/sale/i/index.png') no-repeat -9px 0;
					margin-left: 10px;
				}
				&:first-of-type{
					margin-right: 30px;
					background: #f5f5f5;
				}
				&:last-of-type{
					background: #e62318;
					color: #fff;
				}
			}
		}
	}
	
</style>