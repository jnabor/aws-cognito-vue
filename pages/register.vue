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
                    <h3 class="headline mb-0">Register to AWS Cognito</h3>
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
                      hint="At least 8 characters"
                      :append-icon="e1 ? 'visibility' : 'visibility_off'"
                      :append-icon-cb="() => (e1 = !e1)"
                      :type="e1 ? 'password' : 'text'"
                      min="8"
                      counter
                      required>
                    </v-text-field>

                  </v-form>

                  <v-btn
                    block
                    :loading="loading"
                    @click.native="loader = 'loading'"
                    :disabled="!valid"
                    class="mt-4"
                    light
                    color="secondary">
                    Sign In
                  </v-btn>

                  <br />
                  forgot password?  link

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
      hide: true,
      valid: false,
      email: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      name: '',
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      e1: false,
      password: '',
      loader: false,
      loading: false,
  }),
  methods: {
    toggleHide () {
      console.log("called");
      this.hide = !this.hide;
    }
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

.card-footer{
  background-color:blueviolet;
}
</style>
