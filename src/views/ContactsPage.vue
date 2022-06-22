<template>
  <div>
    <h2 class="pt-8 mb-2 ml-auto fill-width text-center">Контакты</h2>
    <v-container class="d-flex flex-column align-center flex-md-row align-md-start pb-15 black--text">
      <div class="title d-flex flex-column mt-1">
        <a href="/" class="text-button black--text global-text-none my-1">Организация:  {{ contacts.address }}</a>
        <a href="tel:+79173235416" class="text-button black--text global-text-none my-1">Наш номер телефона:  {{ contacts.phone }}</a>
        <a href="mailto:admin@mail.ru" class="text-button black--text global-text-none my-1">Наша почта:  {{ contacts.email }}</a>
      </div>
      <div class="map d-flex my-4 flex-column align-center" style="width: 80%;">
        <iframe :height="$vuetify.breakpoint.xs ? 200 : 400" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18000.2846103138!2d37.552447315624995!3d55.670981499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54cc96887c7f3%3A0x21548ec93d761034!2z0J3Qn9CaINCQ0LrQstCw0LvQsNC50L0!5e0!3m2!1sru!2sru!4v1654239451489!5m2!1sru!2sru" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactsPage',
  data: () => ({
    contacts: {}
  }),
  async created() {
     await axios.get('http://gartonp3.beget.tech/api/contacts').then(resp => { 
          this.contacts = resp.data.contacts.items[0]
      })
  }
}
</script>
