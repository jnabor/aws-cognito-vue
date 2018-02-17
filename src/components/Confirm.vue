<template>
  <v-container grid-list-md class="mt-3">
    <v-layout row justify-space-around>

        <v-card class="main-card pa-4 ml-4 mr-4">
          <v-layout row wrap justify-space-around>

            <v-flex md1 class="hidden-sm-and-down">
            </v-flex>
            <v-flex md4 class="hidden-sm-and-down">
              <v-card class="elevation-0 pa-2">
                <v-card-media >
                <img class="aws-logo" src="../../static/aws_cognito.png">
                </v-card-media>
              </v-card>
            </v-flex>

            <v-flex md6>
              <v-card class="elevation-0 pa-2 ml-1 mr-1">
                <v-alert outline type="error" dismissible class="ml-3 mr-3" v-model="showerr">
                  {{ errmsg }}
                </v-alert>
                <v-card-title primary-title>
                  <div>
                    <h4 class="headline mb-0">Enter Confirmation Code</h4>
                  </div>
                </v-card-title>
                <v-card-text>

                  <v-form v-model="valid">
                    <v-text-field
                      label="Confirmation Code"
                      v-model="code"
                      :rules="codeRules"
                      required>
                    </v-text-field>
                  </v-form>

                  <v-btn
                    block
                    :loading="loading"
                    @click.native="onSubmit()"
                    :disabled="!valid"
                    class="mt-3 mb-3"
                    light
                    color="secondary">
                    Confirm
                    <span slot="loader">Connecting...</span>
                  </v-btn>
                  <div>
                    A confirmation code was sent to your email address.
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex md1 class="hidden-sm-and-down">
            </v-flex>

         </v-layout>
        </v-card>

    </v-layout>
  </v-container>
</template>

<script>
import router from '../routes'
import * as config from './config'
var AmazonCognitoIdentity = require('amazon-cognito-identity-js')
var userPool = []

export default {
  data: () => ({
    callback: false,
    confirmed: false,
    showerr: false,
    errcode: '',
    errmsg: '',
    valid: false,
    code: '',
    codeRules: [
      (v) => !!v || 'Code is required'
    ],
    loader: false,
    loading: false
  }),
  methods: {
    onSubmit () {
      this.loader = 'loading'
      const l = this.loader
      this[l] = !this[l]

      userPool = new AmazonCognitoIdentity.CognitoUserPool(config.poolData)
      var userData = {
        Username: this.$store.state.username,
        Pool: userPool
      }
      console.log('confirmation code for ' + userData.Username + ': ' + this.code)
      var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)

      cognitoUser.confirmRegistration(this.code, true, (err, result) => {
        if (!this.callback) {
          this.callback = true
          console.log('confirm callback')
          if (err) {
            console.log('confirmation error: ' + JSON.stringify(err))
            this.errcode = JSON.stringify(err.code)
          } else {
            console.log('confirmation success: ' + JSON.stringify(result))
            this.confirmed = true
          }
          this[l] = false
          this.loader = null
        }
      })
    }
  },
  watch: {
    confirmed () {
      if (this.confirmed === true) {
        router.push('/signin')
      }
    },
    errcode () {
      console.log('watched error code: ' + this.errcode)
      if (this.errcode !== '') {
        if (this.errcode === '"CodeMismatchException"') {
          this.errmsg = 'Invalid verification code provided'
        } else if (this.errcode === '"NotAuthorizedException"') {
          this.errmsg = 'The user has already been confirmed'
        } else if (this.errcode === '"UserNotFoundException"') {
          this.errmsg = 'Username id not found!'
        } else if (this.errcode === '"LimitExceededException"') {
          this.errmsg = 'Attempt limit exceeded, please try after some time'
        } else {
          this.errmsg = 'An error has occured!'
        }
        this.showerr = true
      }
    }
  }
}

</script>

<style scoped>
.aws-logo {
  width: 100%;
    height: 100%;
    object-fit: contain;
}
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

</style>
