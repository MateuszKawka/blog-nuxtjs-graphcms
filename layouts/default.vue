<template>
	<div>
		<Navigation />
		<nuxt />
	</div>
</template>

<script>
import Navigation from '@/components/UI/Navigation'

export default {
	name: 'DefaultLayout',
	components: {
		Navigation
	}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 2;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
