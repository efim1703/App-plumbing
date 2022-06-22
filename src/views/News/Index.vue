<template>
  <v-container>
    <h2 class="text-center my-8">Новости</h2>

      <news-card 
        v-for="newsItem in news" 
        :key="newsItem.id" 
        :newsItem="newsItem"
        class="hover-card"
      />
  </v-container>
</template>

<script>
import axios from 'axios'
import NewsCard from './NewsCard.vue'

export default {
  name: 'NewsPage',
  components: {
    NewsCard
  },
  data: () => ({
    news: []
  }),
  async created() {
    await axios.get('http://gartonp3.beget.tech/api/news').then(resp => { 
      this.news = resp.data.news.items.map(newsItem => ({ 
          ...newsItem,
          date: new Date(newsItem.updated_at).toLocaleDateString() + '  ' + new Date(newsItem.updated_at).toLocaleTimeString()
      }))
    })
  }
}
</script>

<style>
.hover-card {
  transition: .3s
}
.hover-card:hover {
  background: #F1F1F1;
}
</style>
