<template>
	<div class="our-hep">
		<h1 v-format="70">{{ pageName }}</h1>
		<p v-format.bold>{{ pageDisc }}</p>
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="posts-area">
						<BlogPosts
							v-for="post in posts"
							:key="post.id"
							:views="post.views"
							:title="post.title"
							:date="post.date"
							:content="post.content"
							:author="post.author"
							:category="post.category"
						/>
					</div>
				</div>
				<div class="col-md-4">
					<div class="sidebar">
						<Blogsidebar />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts.vue";
import Blogsidebar from "@/components/Blog/Blogsidebar.vue";
import JsonPosts from "../json/blog_posts.json";

export default {
	data: function() {
		return {
			pageName: "Blog",
			pageDisc: "This is Blog page",
			posts: JsonPosts,
		};
	},

	name: "Blog",
	components: {
		BlogPosts,
		Blogsidebar,
	},
};
</script>

<style scoped lang="scss">
$color: red;

h1 {
	font-size: 50px;
	color: $color;
}

p {
	font-size: 25px;
	color: $color;
	line-height: 1.6;
}
</style>
