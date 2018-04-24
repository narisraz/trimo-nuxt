<template>
  <v-layout row wrap>
      <v-flex sm6>
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
                name="signInEmail"
                v-model="signInEmail"
                label="email address"
                :error-messages="signInEmailErrors"
                @input="$v.signInEmail.$touch()"
                @blur="$v.signInEmail.$touch()"
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
            </v-form>
          </v-card-text>
          <v-container text-xs-center>
            <div>Or Sign with :</div>
            <v-btn outline color="primary">
              Facebook
              <v-icon right>fa-facebook</v-icon>
            </v-btn>
            <v-btn outline color="primary">
              Google
              <v-icon right>fa-google-plus</v-icon>
            </v-btn>
            <v-btn outline color="primary">
              Twitter
              <v-icon right>fa-twitter</v-icon>
            </v-btn>
          </v-container>
        </v-card>
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
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
  import Registration from '@/components/Registration'

  export default {
    mixins: [validationMixin],
    validations: {
      signInEmail: { required, email },
      signInPassword: { required }
    },
    components: {
      Registration
    },
    data () {
      return {
        remember: false,
        hidePassword: true,
        password: 'Password',
        signInEmail: '',
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
      signInEmailErrors () {
        const errors = []
        if (!this.$v.signInEmail.$dirty) return errors
        !this.$v.signInEmail.email && errors.push('Must be valid e-mail')
        !this.$v.signInEmail.required && errors.push('E-mail is required')
        return errors
      }
    },
    methods: {
      signIn () {
        this.$v.$touch()
      }
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
