<template>
  <v-container>
    <v-btn to="/admin/products">
      Назад
    </v-btn>
    <h2>Редактирование новости [ID: #{{ idNews }}]</h2>
    <v-text-field 
      v-model="formData.title" 
      label="Название новости" 
      outlined 
      filled 
      dense 
      hide-details="auto" 
      class="my-3" 
      type="text" 
    />
    <v-textarea
      v-model="formData.text"
      outlined
      filled 
      dense
      label="Текст новости"
    />
    <v-btn 
      class="mt-4 blue white--text"
      @click.prevent="fetchUpdateProduct()"
    >
      Сохранить
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'AdminProductEdit',
  data: () => ({
    formData: {
      id: null,
      title: '',
      text: ''
    }
  }),
  async created() {
    await axios.get(`http://gartonp3.beget.tech/api/news/${this.idNews}`).then(resp => { 
      const item = resp.data.news
      this.formData = {
        id: item.id,
        title: item.title,
        text: item.text
      }
    })
  },
  computed: {
    idNews() {
      return this.$route.params.id
    }
  },
  methods: {
    async fetchUpdateProduct() {
      this.isLoading = true
      try {
        await axios.post('http://gartonp3.beget.tech/api/news/update', qs.stringify(this.formData), {
          headers: { 
            'authorization': `Bearer ${localStorage.getItem('api_token')}`
          },
        });
      } catch (error) {
        console.log('updated news error: ', error);
      }
      this.isLoading = false
      this.$router.push('/admin/news')
    }
  }
}
</script>
