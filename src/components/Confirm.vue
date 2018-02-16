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
                    <h4 class="headline mb-0">Enter Confirmation Code</h4>
                  </div>
                </v-card-title>
                <v-card-text>

                  <v-form v-model="valid">
                    <v-text-field
                      label="Confirmation Code"
                      v-model="code"
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
                  </v-btn>
                  <div class="caption">
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

export default {
  data: () => ({
    valid: false,
    code: '',
    loader: false,
    loading: false
  }),
  methods: {
    onSubmit () {
      this.loader = 'loading'
      console.log('called')
      console.log(this.code)
      this.hide = !this.hide
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
a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
