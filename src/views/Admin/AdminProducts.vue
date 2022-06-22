<template>
  <v-container class="grey">
    <div class="d-flex justify-space-between">
      <div class="text-h5">Товары</div>
      <v-btn color="blue white--text" to="/admin/products/add">Добавить товар</v-btn>
    </div>
    <v-data-table
      :headers="headers"
      :items="products"
      :loading="isLoading"
      class="mt-3"
    >
      <!-- eslint-disable-next-line -->
      <template #item.img_src="{ item }" >
        <v-img :src="item.img_src" max-height="70" max-width="70" />
      </template>
      <!-- eslint-disable-next-line -->
      <template #item.actions="{ item }">

        <v-btn icon :to="`/admin/products/edit/${item.id}`">
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
    name: 'AdminProducts',
    data() {
      return {
        products: [],
        dropzone: null,
        isLoading: false
      }
    },
    async created() {
      await this.fetchProducts()
    },
    computed: {
      headers () {
        return [
          { text: 'ID', value: 'id'},
          { text: 'Название', value: 'title'},
          { text: 'Цена', value: 'price' },
          { text: 'Изображение', value: 'img_src' },
          { text: 'Действия', value: 'actions' },
        ]
      },
    },
    methods: {
     async deleteItem(id) {
       this.isLoading = true
        try {
            await axios.post('http://gartonp3.beget.tech/api/products/delete', qs.stringify({ id }), {
                headers: { 
                    'authorization': `Bearer ${localStorage.getItem('api_token')}`
                },
            });
            await this.fetchProducts()
        } catch (error) {
            console.error('delete product error: ', error);
        }
        this.isLoading = false
      },
     async fetchProducts() {
        this.isLoading = true
        try { 
          await axios.get('http://gartonp3.beget.tech/api/products').then(resp => { 
            this.products = resp.data.products.items
          })
        } catch (error) {
          console.error('get products: ', error);
        }
        this.isLoading = false
      }
    }
  }
</script>
