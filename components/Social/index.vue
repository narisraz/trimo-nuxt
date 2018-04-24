<template>
  <v-container text-xs-center>
            <div>Or Sign with :</div>
            <v-btn outline color="primary" :icon="!withName">
              <span v-show="withName">Facebook</span>
              <v-icon :right="withName">fa-facebook</v-icon>
            </v-btn>
            <v-btn outline color="primary" :icon="!withName">
              <span v-show="withName">Google</span>
              <v-icon :right="withName">fa-google-plus</v-icon>
            </v-btn>
            <v-btn outline color="primary" :icon="!withName">
              <span v-show="withName">Twitter</span>
              <v-icon :right="withName">fa-twitter</v-icon>
            </v-btn>
          </v-container>
</template>

<script>
  export default {
    props: {
      withName: {
        type: Boolean
      }
    }
  }
</script>