<template>
  <v-card :class="{'px-5':$vuetify.breakpoint.smAndUp}" flat>
          <v-card-title primary-title>
            <v-layout column wrap>
              <v-icon large>person_add</v-icon>
              <h3 class="headline mx-auto">SIGN UP</h3>
            </v-layout>
          </v-card-title>
          <v-card-text>
            <form>
              <v-text-field
                name="firstName"
                v-model="firstName"
                label="First Name"
                :error-messages="firstNameErrors"
                @input="$v.firstName.$touch()"
                @blur="$v.firstName.$touch()"
                required
              ></v-text-field>
              <v-text-field
                name="name"
                v-model="name"
                label="Name"
                :error-messages="nameErrors"
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
                required
              ></v-text-field>
              <v-text-field
                name="signUpEmail"
                v-model="signUpEmail"
                label="email address"
                :error-messages="signUpEmailErrors"
                @input="$v.signUpEmail.$touch()"
                @blur="$v.signUpEmail.$touch()"
                required
              ></v-text-field>
              <v-text-field
                name="signUpPassword"
                v-model="signUpPassword"
                label="password"
                type="password"
                :error-messages="signUpPasswordErrors"
                @input="$v.signUpPassword.$touch()"
                @blur="$v.signUpPassword.$touch()"
                required
              ></v-text-field>
              <v-text-field
                name="confirmPassword"
                v-model="confirmPassword"
                label="confirm password"
                type="password"
                :error-messages="confirmErrors"
                @input="$v.confirmPassword.$touch()"
                @blur="$v.confirmPassword.$touch()"
                required
              ></v-text-field>
              <v-btn
                @click="signUp"
                block 
                color="primary"
              >
                SIGN UP
              </v-btn>
            </form>
          </v-card-text>
        </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required },
      firstName: { required },
      signUpEmail: { required, email },
      signUpPassword: { required },
      confirmPassword: { required }
    },
    data () {
      return {
        hidePassword: true,
        password: 'Password',
        firstName: '',
        name: '',
        signUpEmail: '',
        signUpPassword: '',
        confirmPassword: ''
      }
    },
    computed: {
      confirmErrors () {
        const errors = []
        if (!this.$v.confirmPassword.$dirty) return errors
        !this.$v.confirmPassword.required && errors.push('Password is required')
        return errors
      },
      signUpPasswordErrors () {
        const errors = []
        if (!this.$v.signUpPassword.$dirty) return errors
        !this.$v.signUpPassword.required && errors.push('Password is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      firstNameErrors () {
        const errors = []
        if (!this.$v.firstName.$dirty) return errors
        !this.$v.firstName.required && errors.push('First name is required.')
        return errors
      },
      signUpEmailErrors () {
        const errors = []
        if (!this.$v.signUpEmail.$dirty) return errors
        !this.$v.signUpEmail.email && errors.push('Must be valid e-mail')
        !this.$v.signUpEmail.required && errors.push('E-mail is required')
        return errors
      }
    },
    methods: {
      signUp () {
        this.$v.$touch()
      }
    }
  }
</script>