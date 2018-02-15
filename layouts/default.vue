<template>
  <v-app>

  <v-toolbar color="primary">
    <i class="material-icons white--text ml-2 ml-4">fingerprint</i>
    <v-toolbar-title class="white--text hidden-xs-only">Auth</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn class="white--text" @click="navDefault()" flat>Sign In</v-btn>
      <v-btn class="white--text mr-4" @click="navRegister()" flat>Register</v-btn>
    </v-toolbar-items>

     <v-menu bottom left class="hidden-sm-and-up">
      <v-btn icon slot="activator" >
        <v-icon class="white--text">more_vert</v-icon>
      </v-btn>
        <v-list>
          <v-list-tile @click="navDefault()">
            <v-list-tile-title>
              Sign In
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="navRegister()">
            <v-list-tile-title>
              Register
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
    </v-menu>

  </v-toolbar>

  <nuxt />

  <v-footer fixed app>
    <span>&copy; 2018 <a href="http://sonabstudios.com">SonabStudios&trade;</a> is a trademark of Jayson Nabor</span>
  </v-footer>

  </v-app>
</template>

<script>
export default {
  methods: {
    navDefault: function () {
      console.log('navigatig to sign in')
      this.$router.push('/')
    },
    navRegister: function () {
      console.log('navigatig to sign up')
      this.$router.push('/register')
    }
  }
}
</script>

<style>
.main-card {
  max-width: 1000px;
}
</style>
