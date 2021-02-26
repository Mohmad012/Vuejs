<template>
	<div class="our-hep">
		<h1> {{ pageName }} </h1>
		<p> {{ pageDisc }} </p>
	</div>
</template>

<script>
export default {

	data: function(){
		return {
			pageName: 'help',
			pageDisc: 'This is help page'
		}
	},

	name: "help",
};
</script>

<style scoped lang="scss">
$color: red ;

h1{
	font-size: 50px ;
	color: $color ;
}

p{
	font-size: 25px ;
	color: $color ;
	line-height: 1.6 ;
}

</style>
