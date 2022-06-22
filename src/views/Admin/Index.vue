<template>
  <div class="greyLighten">
    <v-container class="height-full">
      <v-card class="rounded-lg mt-15 py-5 px-5">
        <v-card-title class="d-flex justify-center">
          <div class="mb-5 text-h4 black--text font-weight-medium">
            Админ панель
          </div>
        </v-card-title>
        <v-card-text>
          <v-sheet class="mx-auto" max-width="500">
            <v-text-field
              v-model="formData.login"
              label="Логин"
              outlined 
              filled
              dense
              hide-details="auto"
              class="mb-2"
              :error-messages="errorLogin"
            />
            <v-text-field
              v-model="formData.password"
              label="Пароль"
              outlined 
              filled
              dense
              hide-details="auto"
              class="mb-4"
              type="password"
              :error-messages="errorPassword"
            />
            <v-btn 
              depressed 
              block
              class="green white--text"
              @click="fetchAuth()"
            >
              Войти
            </v-btn>
          </v-sheet>
          
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      formData: {
        login: '',
        password: ''
      },
      errorLogin: null,
      errorPassword: null
    }
  },
  methods: {
    async fetchAuth() {
      const response = await fetch('http://gartonp3.beget.tech/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      }).then(response => response.json())

      if (response.error?.code === 401) {
        this.errorLogin = response.error.message
      }
      if (response.error?.code === 422) {
        this.errorLogin = response.error.errors.login
        this.errorPassword = response.error.errors.password
      }

      if (response.access_token) {
        localStorage.setItem('api_token', response.access_token)
        this.$router.push({ name: 'AdminProducts' })
      }
    }
  }
};
</script>