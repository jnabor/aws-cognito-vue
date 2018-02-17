<template>
  <v-container>

    <section>
      <v-layout column align-center justify-center>
        <img class="aws-logo mt-5 mb-4" src="../../static/aws_cognito_vue.png">
        <h3 v-if="$store.state.authenticated" class="mb-3 text-xs-center grey--text hidden-xs-only">You have signed in!</h3>
        <v-btn v-if="$store.state.authenticated" @click="navSignOut()" color="amber accent-3" dark large>Sign Out</v-btn>
      </v-layout>
    </section>

  </v-container>
</template>

<script>
import router from '../routes'

export default {
  methods: {
    navSignOut: function () {
      console.log('signing out')
      this.$store.state.authenticated = false
      router.push('/home')
    }
  }
}
</script>
