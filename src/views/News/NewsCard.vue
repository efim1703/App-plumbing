<template>
  <v-card class="pa-2 mb-4" :to="newsIsSingle ? '' : buttonOption.route">
    <v-card-title>
      <div>{{ newsItem.title }}</div>
      <v-spacer />
      <span class="text-overline text--disabled">{{ newsItem.date }}</span>
    </v-card-title>

    <v-card-text :class="{ 'text-truncate': !newsIsSingle }">
      {{ newsItem.text }}
    </v-card-text>

    <v-card-actions>
      <v-spacer />
      <v-btn 
        class="blue white--text" 
        :to="buttonOption.route"
      >
        {{ buttonOption.label }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    newsItem: {
      type: Object,
      required: true
    },
    newsIsSingle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonOption() {
      if(this.newsIsSingle) {
        return { label: 'Назад', route: `/news` } 
      } else {
        return { label: 'Подробнее', route: `/news/${this.newsItem.id}` }
      }
    }
  }
}
</script>
