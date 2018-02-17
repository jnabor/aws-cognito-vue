<template>
  <v-container>

    <section>
      <v-layout column align-center justify-center>
        <img class="aws-logo mt-5 mb-4" src="../../static/aws_cognito_vue.png">
        <h1 class="mb-2 display-2 text-xs-center black--text hidden-xs-only">AUTHENTICATION DEMO</h1>
        <h3 class="mb-3 text-xs-center grey--text hidden-xs-only">using Amazon Cognito and Vue.js with Material Design</h3>
        <v-btn v-if="!$store.state.authenticated" color="amber accent-3" dark large @click="navRegister()">Get Started</v-btn>
      </v-layout>
    </section>

  </v-container>
</template>

<script>
import router from '../routes'

export default {
  methods: {
    navRegister: function () {
      console.log('navigatig to sign up')
      router.push('/register')
    }
  }
}
</script>

<style>
.aws-logo {
  max-height: 80px;
}
</style>
