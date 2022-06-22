<template>
    <div class="flex-grow-1 grey">
      <v-container>
        <div class="text-h5 mb-6">Контакты</div>
        <v-text-field
              v-model="nameOrganization"
              label="Название организации"
              outlined 
              filled
              dense
              hide-details="auto"
              class="mb-3"
        />
        <v-text-field
              v-model="phoneOrganization"
              label="Номер телефона"
              outlined 
              filled
              dense
              hide-details="auto"
              class="mb-3"
        />
        <v-text-field
              v-model="emailOrganization"
              label="Почта"
              outlined 
              filled
              dense
              hide-details="auto"
              class="mb-3"
        />
          <v-btn class="d-flex ml-auto blue white--text" @click="saveChangedContacts()">
            Сохранить
          </v-btn>
      </v-container>  
      <v-snackbar
        v-model="snackbar"
        timeout="1500"
        color="green"
      >
        Данные успешно сохранены!
      </v-snackbar>
    </div>
</template>

<script>
  export default {
    name: 'AdminContacts',
    async created() {
      const response = await fetch('http://gartonp3.beget.tech/api/contacts').then(response => response.json())
      const contacts = response.contacts.items.find(({ id }) => id === 1)
      this.nameOrganization = contacts.address
      this.phoneOrganization = contacts.phone
      this.emailOrganization = contacts.email
    },
    data() {
      return {
        nameOrganization: '',
        phoneOrganization: '',
        emailOrganization: '',
        snackbar: false
      }
    },
    methods: {
      async saveChangedContacts() {
        const formContacts = {
          id: 1,
          phone: this.phoneOrganization,
          email: this.emailOrganization,
          address: this.nameOrganization
        }
        await fetch('http://gartonp3.beget.tech/api/contacts/update', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('api_token')}`
          },
          body: JSON.stringify(formContacts)
        }).then(() => {
          this.snackbar = true
        })
      }
    }
  }
</script>
