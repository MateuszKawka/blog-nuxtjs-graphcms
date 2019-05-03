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
