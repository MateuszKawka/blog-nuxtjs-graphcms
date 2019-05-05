<template>
	<div>
		<transition name="fade" mode="in-out">
			<FullPost v-if="postReady" />
		</transition>
		<transition name="fade" mode="in-out">
			<div v-if="!postReady" class="text-center mt-5">
				<b-spinner variant="success" label="Spinning"></b-spinner>
			</div>
		</transition>
	</div>
</template>

<script>
import FullPost from '@/components/FullPost'

export default {
	name: 'Post',
	components: {
		FullPost
	},
	computed: {
		postReady() {
			return this.$store.state.posts.postReady
		}
	},
	validate({ params }) {
		return /^\w+$/.test(params.id)
	},
	mounted() {
		this.$store.dispatch('posts/getPost', this.$route.params.id)
	}
}
</script>
