<template>
  <v-container>

    <section>
      <v-layout column align-center justify-center>
        <img class="aws-logo mt-5 mb-4" src="../../static/aws_cognito_vue.png">
        <v-alert v-if="$store.state.authenticated" outline type="success" class="mt-4 mb-4" :value="true">
          <div class="title mt-2 mb-2">You have signed in.</div>
        </v-alert>
        <transition appear name="fadeout">
        <v-btn v-if="$store.state.authenticated" @click="navSignOut()" color="amber accent-3" dark large>Sign Out</v-btn>
        </transition>
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
