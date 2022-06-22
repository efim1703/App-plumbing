<template>
  <v-container class="grey">
    <div class="d-flex justify-space-between">
      <div class="text-h5">Галерея</div>
      <v-btn color="blue white--text d-flex ml-auto" to="/admin/gallery/add">Добавить изображение</v-btn>
    </div>
    <v-row class="mt-4">
      <v-col cols="2" v-for="galleryItem in gallery" :key="galleryItem.id">
        <v-card >
          <v-card-text class="pa-0">
            <v-img :src="galleryItem.img_src" :aspect-ratio="10/12" lazy-src="@/assets/images/load.png"/>
          </v-card-text>

          <v-card-actions class="d-flex pa-0 justify-center">
            <v-btn icon @click="deleteItem(galleryItem.id)">
              <v-icon >
                mdi-delete
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'AdminGallery',
  data() {
    return {
      gallery: []
    }
  },
  async created() {
    await this.fetchGallery()
  },
  methods: {
    async fetchGallery() {
      try { 
        await axios.get('http://gartonp3.beget.tech/api/gallery').then(resp => { 
          this.gallery = resp.data.gallery.items
        })
      } catch (error) {
        console.log('get gallery error: ', error);
      }
    },
    async deleteItem(id) {
      try {
        await axios.post('http://gartonp3.beget.tech/api/gallery/delete', qs.stringify({ id }), {
          headers: { 
            'authorization': `Bearer ${localStorage.getItem('api_token')}`
          },
        });
        await this.fetchGallery()
      } catch (error) {
        console.log('delete gallery error: ', error);
      }
    },
  }
}
</script>
