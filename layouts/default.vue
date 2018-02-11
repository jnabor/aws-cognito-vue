<template>
  <v-app>

  <v-toolbar color="primary">
    <v-layout row wrap justify-center>
      <v-flex xs8>
        <v-toolbar color="primary elevation-0">
          <i class="material-icons white--text ml-2">fingerprint</i>
          <v-toolbar-title class="white--text">Auth</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items >
            <v-btn class="white--text" @click="navDefault()" flat>Sign In</v-btn>
            <v-btn class="white--text" @click="navRegister()" flat>Register</v-btn>
          </v-toolbar-items>
        </v-toolbar>
      </v-flex>
    </v-layout>
    </v-toolbar>

    <nuxt />

    <v-footer fixed app>
      <span>&copy; 2018 SonabStudios&trade;</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  methods: {
    navDefault: function () {
      this.router.push('/')
    },
    navRegister: function () {
      this.router.push('/')
    }
  }
}
</script>

<style>

</style>
