<template>
  <v-layout row wrap>
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
