<template>
	<div class="about">
		<h1 v-green> {{ pageName }} </h1>
		<p v-size="100"> {{ pageDisc }} </p>
	</div>
</template>

<script>

export default {
	data: function(){
		return {
			pageName: 'About-Us',
			pageDisc: 'This is about-us page'
		}
	},
	directives:{ // This Is Local Directive use Onlu Here
		green:function(el){
			el.style.color = 'green'
		},
		size:function(el , binding){
			el.style.fontSize = binding.value + "px"
		}
	}
};
</script>
