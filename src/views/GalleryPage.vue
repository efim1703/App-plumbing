<template>
  <div>
    <v-container>
      <h2 class="text-center mt-8 mb-5">Галерея</h2>

      <v-divider />
      <div class="mt-8 text-center" v-if="!gallery.length">
        Фотографии загружаются...
      </div>
      <v-row class="mx-auto mt-2">
        <v-col 
          cols="6" 
          sm="4" 
          md="3" 
          v-for="image in gallery" 
          :key="image.id"
        >
          <v-img 
            :src="image.img_src" 
            class="hover-img"
            lazy-src="@/assets/images/load.png"
            :aspect-ratio="10/12" 
          />
        </v-col>   
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GalleryPage',
  data: () => ({
    gallery: []
  }),
  async created() {
    await axios.get('http://gartonp3.beget.tech/api/gallery').then(resp => { 
      this.gallery = resp.data.gallery.items
    })
  },
}
</script>

<style>
.hover-img {
  transition: .6s;
}
.hover-img:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
