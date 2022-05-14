<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
          md="12"
        >
          <v-text-field
      label="Subject"
      :rules="rules"
      hide-details="auto"
    ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
          md="12"
        >
            <v-textarea
              color="teal"
            >
              <template v-slot:label>
                <div>
                  Bio <small>(optional)</small>
                </div>
              </template>
            </v-textarea>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
            <v-checkbox
              color="green"
            >
              <template v-slot:label>
                <div>
                  Do you accept the erms and conditions?
                </div>
              </template>
            </v-checkbox>
          </v-col>
      </v-row>
      <v-row>
          <v-col cols="12">
            <v-btn
                class="mr-4"
                type="submit"
                @click="submit"
            >
                submit
            </v-btn>
            <v-btn @click="clear">
                clear
            </v-btn>
          </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-snackbar
      v-model="snackbar"
      color="success"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      snackbar: false,
      snackbarText: `Thank you for your message, You'll soon be contacted by our agent.`,
    }),
    methods: {
      submit () {
          this.snackbar = true;
          setTimeout( () => {this.$router.push({ path: '/'})}, 2000);
      },
      clear () {
        this.firstname = ''
        this.lastname = ''
        this.email = ''
      },
    },
  }
</script>