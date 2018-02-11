<template>
  <v-container grid-list-md class="mt-3">
    <v-layout row wrap justify-center>
      <v-flex xs8>
        <v-card class="pa-4">
          <v-layout row >

            <v-flex xs4>
              <v-card class="elevation-0 pa-2">
                <v-card-media >
                <img class="aws-logo" src="/aws_cognito.png">
                </v-card-media>
              </v-card>
            </v-flex>

            <v-flex xs6>
              <v-card class="elevation-0 pa-2">
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
                </v-card-text>
              </v-card>
            </v-flex>

         </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password must be at least 8 characters'
      ],
      hidepw: true,
      loader: false,
      loading: false,
  }),
  methods: {
    onSubmit () {
      this.loader = 'loading'
      console.log("called");
      console.log(this.email);
      console.log(this.password);
      this.hide = !this.hide;
    },
    navRreset: function () {
      $router.push('/reset')
    },
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
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
