<template>
  <v-container class="grey">
    <div class="d-flex justify-space-between">
      <div class="text-h5">Новости</div>
      <v-btn color="blue white--text" to="/admin/news/add">Добавить новость</v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="news"
      :loading="isLoading"
      class="mt-3"
    >
      <!-- eslint-disable-next-line -->
      <template #item.text="{ item }" >
        <v-card-text class="text text-truncate">
          {{ item.text }}
        </v-card-text>
      </template>
      <!-- eslint-disable-next-line -->
      <template #item.actions="{ item }">

        <v-btn icon :to="`/admin/news/edit/${item.id}`">
          <v-icon  small>
            mdi-pencil
          </v-icon>
        </v-btn>
        <v-btn icon @click="deleteItem(item.id)">
          <v-icon small >
            mdi-delete
          </v-icon>
        </v-btn>      
      </template>
      <template v-slot:no-data>
        No data avalibles
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'AdminNews',
    data() {
      return {
        news: [],
        isLoading: false
      }
    },
    async created() {
      await this.fetchNews()
    },
    computed: {
      headers () {
        return [
          { text: 'ID', value: 'id'},
          { text: 'Название', value: 'name'},
          { text: 'Текст', value: 'text' },
          { text: 'Действия', value: 'actions' }
        ]
      },
    },
    methods: {
      async deleteItem(id) {
       this.isLoading = true
        try {
          await axios.post('http://gartonp3.beget.tech/api/news/delete', qs.stringify({ id }), {
            headers: { 
              'authorization': `Bearer ${localStorage.getItem('api_token')}`
            },
          });
          await this.fetchNews()
        } catch (error) {
          console.log('delete news error: ', error);
        }
        this.isLoading = false
      },
      async fetchNews() {
        try { 
          this.isLoading = true
          await axios.get('http://gartonp3.beget.tech/api/news').then(resp => { 
            const item = resp.data.news.items.map(({ id, title, text }) => ({ 
                id: id,
                name: title, 
                text 
            }))
            this.news = item
            this.isLoading = false
          })
        } catch (error) {
          console.log('get news error: ', error);
        }
      }
    }
  }
</script>


<style scoped>
  .text {
    max-width: 350px;
  }
</style>