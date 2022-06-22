<template>
  <div>
    <v-img 
      class="d-flex align-center"
      src="@/assets/images/intro-bg.jpg" 
      max-height="450" 
    >
      <div class="title text-center white--text mx-auto pa-6">
        <div class="text-h5 text-sm-h4">
          Plumbing
        </div>
        <div class="text-subtitle-1 text-sm-h6 font-weight-light">
          Товары для сантехики на любой вкус
        </div>
      </div>
    </v-img>
    
    <v-container>
      <h2 class="text-center mt-4">Товары</h2>
      <v-row class="card-list pt-4 mb-10">
        <v-col 
          cols="6" 
          md="3" 
          sm="4" 
          v-for="productItem in products" 
          :key="productItem.id"
        >
          <product-card :productItem="productItem" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
import axios from 'axios'

export default {
  name: 'HomePage',
  components: {
    ProductCard
  },
  data: () => ({
    products: []
  }),
  async created() {
    await axios.get('http://gartonp3.beget.tech/api/products').then(resp => { 
      this.products = resp.data.products.items
    })
  }
}
</script>

<style scoped>
  .title {
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
  }
</style>