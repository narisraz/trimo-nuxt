<template>
  <v-app class="main" light>
    <Header />
    <nuxt />
  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
</style>