<template>
	<div>
	   <button type="button" @click="duqu">读取本地存储信息</button>
	   <button type="button" @click="bendi">sessionStorage</button>
	</div>
</template>

<script>
	export default{
		name:'ceshi',
		data(){
			return{
				userDate:'',
				imgObj:'',
				titleObj:'',
				priObj:'',
				shopList:[]
			}
		},
		methods:{
			duqu(){
                console.log(this.shopList);
			},
			bendi(){
              
			}
		},
		 mounted(){
			this.shopList=[];
			var str = window.sessionStorage.getItem('cart');
            this.shopList =JSON.parse(str);
		}
		
	}
</script>

<style lang="less" scoped="scoped">
	
</style>