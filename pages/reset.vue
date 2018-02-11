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
                    <h4 class="headline mb-0">Reset Password</h4>
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

                  </v-form>

                  <v-btn
                    block
                    :loading="loading"
                    @click.native="onSubmit()"
                    :disabled="!valid"
                    class="mt-3 mb-3"
                    light
                    color="secondary">
                    Reset
                  </v-btn>
                  <div class="caption">
                    A reset link will be sent to the email address provided.
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
      loader: false,
      loading: false,
  }),
  methods: {
    onSubmit () {
      this.loader = 'loading'
      console.log("called");
      console.log(this.email);
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
