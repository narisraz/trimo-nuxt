<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat slot="activator" @click="login">Log in</v-btn>
    </v-toolbar-items>
    <v-dialog v-model="$store.state.authDialogOpened" max-width="500px">
      <v-card>
        <v-card-actions>
          <v-btn icon flat @click.native="$store.commit('authDialog', false)">
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-actions>  
      </v-card>
      <Login can-register />
    </v-dialog>
  </v-toolbar>  
</template>

<script>
  import Login from '@/components/Login'

  export default {
    components: {
      Login
    },
    methods: {
      login () {
        this.$store.commit('authDialog', true)
      }
    }
  }
</script>

<style scoped>
</style>
