<template>
	<div class="mt-4 row">
		<b-card
			:title="content.title"
			:sub-title="content.category"
			class="col-8 align-self-center offset-2"
		>
			<b-card-text>
				{{ content.entryText }}
			</b-card-text>

			<nuxt-link :to="`/post/${content.id}`" class="card-link float-right">
				Read more
			</nuxt-link>
		</b-card>
	</div>
</template>

<script>
export default {
	name: 'PreviewPost',
	props: {
		content: {
			type: Object,
			require: true
		}
	}
}
</script>
