<template>
  <v-container class="mt-8">
    <news-card 
      :newsItem="fullNewsItem"
      news-is-single
    />
  </v-container>
</template>

<script>
import axios from 'axios'
import NewsCard from './NewsCard.vue'

export default {
  name: 'FullNews',
  components: {
    NewsCard
  },
  computed: {
    getRouteId() {
      return this.$route.params.id
    }
  },
  async created() {
    await axios.get(`http://gartonp3.beget.tech/api/news/${this.getRouteId}`).then(response  => {
      this.fullNewsItem = response.data.news
      const convertDate = new Date(response.data.news.updated_at).toLocaleDateString() + '  ' + new Date(response.data.news.updated_at).toLocaleTimeString()
      this.fullNewsItem.date = convertDate
    })
  },
  data: () => ({
    fullNewsItem: {}
  }),
}
</script>
