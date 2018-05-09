<template>
  <v-card :class="{'px-5':$vuetify.breakpoint.smAndUp}" flat>
          <v-card-title primary-title>
            <v-layout column wrap>
              <v-icon large>lock_open</v-icon>
              <h3 class="headline mx-auto">SIGN IN</h3>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                name="userName"
                v-model="userName"
                label="User name"
                :error-messages="userNameErrors"
                @input="$v.userName.$touch()"
                @blur="$v.userName.$touch()"
                required
              ></v-text-field>
              <v-text-field
                name="signInPassword"
                v-model="signInPassword"
                label="password"
                :append-icon="hidePassword ? 'visibility' : 'visibility_off'"
                :append-icon-cb="() => (hidePassword = !hidePassword)"
                :type="hidePassword ? 'password' : 'text'"
                :error-messages="signInPasswordErrors"
                @input="$v.signInPassword.$touch()"
                @blur="$v.signInPassword.$touch()"
                required
              ></v-text-field>
              <v-checkbox
                label="Remember me"
                v-model="remember"
              ></v-checkbox>
              <v-btn @click="signIn" block color="primary">Log In</v-btn>
              <v-btn block color="secondary">Forgot password?</v-btn>
              <v-btn @click="register" v-if="canRegister" to="authentication" block color="accent">Register</v-btn>
            </v-form>
          </v-card-text>
          <Social />
        </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'
  import Social from '@/components/Social'
  import axios from 'axios'

  export default {
    mixins: [validationMixin],
    validations: {
      userName: { required },
      signInPassword: { required }
    },
    props: {
      canRegister: {
        type: Boolean
      }
    },
    components: {
      Social
    },
    data () {
      return {
        remember: false,
        hidePassword: true,
        password: 'Password',
        userName: '',
        signInPassword: ''
      }
    },
    computed: {
      signInPasswordErrors () {
        const errors = []
        if (!this.$v.signInPassword.$dirty) return errors
        !this.$v.signInPassword.required && errors.push('Password is required')
        return errors
      },
      userNameErrors () {
        const errors = []
        if (!this.$v.userName.$dirty) return errors
        !this.$v.userName.required && errors.push('E-mail is required')
        return errors
      }
    },
    methods: {
      signIn () {
        this.$v.$touch()
        var bodyFormData = new FormData()
        bodyFormData.set('name', this.userName)
        bodyFormData.set('password', this.signInPassword)
        axios({
          method: 'post',
          url: this.$store.state.backendApiDomain + 'login',
          data: bodyFormData
        })
          .then(res => {
            this.$cookie.set(this.$store.state.authCookieName, res.headers.authorization)
            this.$store.commit('authDialog', false)
          })
          .then(res => {
            const auth = this.$cookie.get(this.$store.state.authCookieName)
            axios({
              method: 'get',
              url: this.$store.state.backendApiDomain + 'api/private/users/name/' + this.userName,
              headers: {
                'Authorization': auth
              }
            })
              .then(res => {
                this.$cookie.set('t-user', res.data.name)
              })
              .catch(ex => {
                console.error('Error finding user. ' + ex)
              })
          })
          .catch(ex => {
            console.error(ex)
          })
      },
      register () {
        this.$store.commit('authDialog', false)
      }
    }
  }
</script>