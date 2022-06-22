<template>
  <header class="primary black--text">
    <v-container class="d-flex justify-space-between align-center">
      <router-link to="/" class="black--text global-text-none font-weight-medium">PLUMBING</router-link>

      <nav :class="[
        'd-flex',
        { 'align-center': !isMobile, 'flex-column': isMobile }
      ]">
        <router-link to="/" class="black--text global-text-none mr-5 text-body-2">Главная страница</router-link>
        <router-link to="/news" class="black--text global-text-none  mr-5 text-body-2">Новости</router-link>
        <router-link to="/gallery" class="black--text global-text-none  mr-5 text-body-2">Галерея</router-link>
        <router-link to="/contacts" class="black--text global-text-none  mr-5 text-body-2">Контакты</router-link>
      </nav>
    </v-container>
  </header>
</template>

<script>
export default {
  name: "AppNavbar",
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs;
    }
  }
};
</script>
