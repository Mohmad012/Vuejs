<template>
	<div container>
		<div class="sideBar-widgets">
			{{ title | Uppercase }}
		</div>
	</div>
</template>

<script>
export default {
	name: "blog_sideBar",
	data:function(){
		return {
			title: 'Testing BlogSideBar'
		}
	},
	filters:{
		Uppercase:function(v){
			return v.toUpperCase()
		}
	}
};
</script>
