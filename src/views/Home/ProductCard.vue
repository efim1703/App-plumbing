<template>
  <v-hover
      v-slot="{ hover }"
  >
    <v-card 
      :class="[
        'card d-flex flex-column align-center primary', 
        { 'blue white--text': hover }
        ]"
    >
      <v-img :src="productItem.img_src" lazy-src="@/assets/images/load.png" width="100%" :aspect-ratio="10/12"/>
      <v-card-title >
          {{ productItem.title }}
      </v-card-title>
      <v-card-subtitle :class="{ 'white--text': hover }">
          {{ productItem.price }}
      </v-card-subtitle>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    productItem: {
      type: Object,
      required: true
    }
  }
}
</script>
