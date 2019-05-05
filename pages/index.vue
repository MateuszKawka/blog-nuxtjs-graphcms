<template>
	<section class="container">
		<div v-if="postsListReady">
			<PreviewPost
				v-for="item in posts"
				:key="item.node.id"
				:content="item.node"
			/>
		</div>
		<div v-if="!postsListReady" class="text-center mt-5">
			<b-spinner variant="success" label="Spinning"></b-spinner>
		</div>
	</section>
</template>

<script>
import PreviewPost from '@/components/PreviewPost'

export default {
	name: 'DefaultLayout',
	components: {
		PreviewPost
	},
	computed: {
		postsListReady() {
			return this.$store.state.posts.postsListReady
		},
		posts() {
			return this.$store.state.posts.postsList
		}
	},
	beforeMount() {
		this.$store.dispatch('posts/getAllPosts')
		this.$store.commit('posts/SET_POST_READY', false)
	}
}
</script>
