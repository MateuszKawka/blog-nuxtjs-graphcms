<template>
	<div class="container mt-5">
		<h2 class="h4 mt-5">
			{{ content.title }}
		</h2>
		<p>{{ content.category }}</p>
		<h3 class="h6 mt-4">{{ content.entryText }}</h3>
		<vue-markdown>{{ content.content }}</vue-markdown>
	</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
	name: 'FullPost',
	components: {
		VueMarkdown
	},
	computed: {
		content() {
			return this.$store.getters['posts/getPost']
		}
	}
}
</script>
