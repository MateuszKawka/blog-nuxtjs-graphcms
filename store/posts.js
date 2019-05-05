import { allPosts, post } from './queries'

export const state = () => ({
	postsList: Array,
	postsListReady: false,
	post: Object,
	postReady: false
})

export const mutations = {
	SET_POSTS_LIST: (state, data) => (state.postsList = data),
	SET_POSTS_LIST_READY: (state, data) => (state.postsListReady = data),
	SET_POST: (state, data) => (state.post = data),
	SET_POST_READY: (state, data) => (state.postReady = data)
}

export const actions = {
	getAllPosts(context) {
		const client = this.app.apolloProvider.defaultClient
		client
			.query({
				query: allPosts
			})
			/* eslint-disable no-console */
			.then(v => context.commit('SET_POSTS_LIST', v.data.posts.edges))
			.then(() => context.commit('SET_POSTS_LIST_READY', true))
			.catch(error => console.error(error))
	},
	getPost(context, id) {
		const client = this.app.apolloProvider.defaultClient
		client
			.query({
				query: post,
				variables: {
					id: id
				}
			})
			/* eslint-disable no-console */
			.then(v => context.commit('SET_POST', v.data.posts.edges[0]))
			.then(() => context.commit('SET_POST_READY', true))
			.catch(error => console.error(error))
	}
}

export const getters = {
	getPost: state => {
		if (state.postReady) {
			return state.post.node
		}
	}
}
