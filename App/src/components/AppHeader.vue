<template>
	<div class="header">
		<div class="container">
			<div class="logo">Mohmad Gamal</div>
			<ul class="text-right">
				<router-link to="/" tag="li" exact> <!-- exact ==> This To Put One [ Active Class ] -->
					<a> Home </a>
				</router-link>
				<router-link to="/blog" tag="li" exact>
					<a> Blog </a>
				</router-link>
				<router-link to="/about" tag="li">
					<a> About </a>
				</router-link>
				<router-link to="/help" tag="li" replace>
					<!-- replace ==> This Will Make Stop In This Link If You Make Forward Will Go To Home Page -->
					<a> Help </a>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "appHeader",
};
</script>

<style scoped lang="scss">
.header {
	background-color: #333;
	color: #fff;
	overflow: hidden;
	.logo {
		font-size: 24px;
		padding: 20px;
		float: left;
		width: 211px;
	}
	ul {
		float: left;
		width: calc(100% - 211px);
		li {
			padding: 10px;
			display: inline-block;
			font-size: 18px;
			margin-top: 16px;
			a {
				color: #fff;
				text-decoration: none;
			}
		}
	}
}
</style>
