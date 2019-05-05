import gql from 'graphql-tag'

export const allPosts = gql`
	query content {
		posts: postsConnection {
			edges {
				node {
					id
					title
					category
					entryText
				}
			}
		}
	}
`

export const post = gql`
	query content($id: ID) {
		posts: postsConnection(where: { id: $id }) {
			edges {
				node {
					updatedAt
					id
					title
					content
					category
					entryText
				}
			}
		}
	}
`
