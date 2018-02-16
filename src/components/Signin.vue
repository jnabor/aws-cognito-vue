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
                <v-card-title primary-title>
                  <div>
                    <h4 class="headline mb-0">Sign In to AWS Cognito</h4>
                  </div>
                </v-card-title>
                <v-card-text>

                  <v-form v-model="valid">

                    <v-text-field
                      label="E-mail"
                      v-model="email"
                      :rules="emailRules"
                      required>
                    </v-text-field>

                    <v-text-field
                      label="Password"
                      v-model="password"
                      :rules="passRules"
                      hint="At least 8 characters"
                      :append-icon="hidepw ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (hidepw = !hidepw)"
                      :type="hidepw ? 'password' : 'text'"
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
                    Sign In
                  </v-btn>
                  <div>
                    <router-link :to="'reset'">Forgot password?</router-link>
                  </div>
                  <div>
                    Message: {{ message }}
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

var AmazonCognitoIdentity = require('amazon-cognito-identity-js')

const poolData = {
  UserPoolId: 'us-east-2_ybx9ttSac',
  ClientId: '5gcb6n0l422h0a23p52j2jb8kj'
}

export default {
  data: () => ({
    valid: false,
    message: '',
    email: 'sonabstudios@gmail.com',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      // eslint-disable-next-line
      (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    password: 'Gr@ffiti22',
    passRules: [
      (v) => !!v || 'Password is required',
      (v) => v.length >= 8 || 'Password must be at least 8 characters'
    ],
    attributeList: [],
    cognitoUser: [],
    userPool: '',
    dataEmail: {
      Name: 'email',
      Value: ''
    },
    hidepw: true,
    loader: false,
    loading: false
  }),
  methods: {
    onSubmit: function () {
      this.loader = 'loading'
      console.log('register with ' + this.email + ' ' + this.password)
      this.dataEmail.Value = this.email
      var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(this.dataEmail)
      this.attributeList.push(attributeEmail)
      console.log('attributes: ' + this.attributeList)

      this.userPool.signUp(this.email, this.password, this.attributeList, null, function (err, result) {
        console.log('sign up callback')
        if (err) {
          console.log('sign up error: ' + err)
          this.message = err.message
          return
        }
        console.log('sign up success: ' + this.result)
        this.cognitoUser = result.user
        this.message = 'sign up successful'
        console.log('user name is ' + this.cognitoUser.getUsername())
      }.bind(this))
    },
    navRreset: function () {
      router.push('/reset')
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 1000)

      this.loader = null
    }
  },
  created () {
    this.userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)
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
