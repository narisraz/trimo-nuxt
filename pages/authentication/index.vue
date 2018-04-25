<template>
  <div>
    <v-layout row wrap class="hidden-xs-only">
      <v-flex sm6>
        <Login />
      </v-flex>
      <v-btn
        color="secondary"
        :ripple="false"
        fab
        depressed
        absolute
        class="or hidden-sm-and-down"
      >
        Or
      </v-btn>
      <v-flex sm6>
        <Registration />
      </v-flex>
    </v-layout>
    <v-tabs dark grow centered class="hidden-sm-and-up" color="primary">
      <v-tabs-slider color="success"></v-tabs-slider>
      <v-tab href="#tab-login">
        Login
      </v-tab>
      <v-tab href="#tab-register">
        Register
      </v-tab>
      <v-tab-item
        id="tab-login"
      >
        <Login />
      </v-tab-item>
      <v-tab-item
        id="tab-register"
      >
        <Registration />
      </v-tab-item>
    </v-tabs>
  </div>
  

</template>

<script>
  import Registration from '@/components/Registration'
  import Login from '@/components/Login'
  import Social from '@/components/Social'

  export default {
    components: {
      Registration,
      Login,
      Social
    }
  }
</script>

<style>
.or {
  cursor: default;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 115px;
}
</style>
