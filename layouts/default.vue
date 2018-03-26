<template>
  <v-app class="main" light>
    <Header />
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
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