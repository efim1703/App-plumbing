<template>
  <v-app >
    <div :class="{'d-flex': isAdminPage }" >
      <admin-navbar v-if="isAdminPage"/>
      <app-navbar v-if="!isAdminPage && !isAdminLoginPage"/>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import AdminNavbar from './components/AdminNavbar.vue';
import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: { AppNavbar, AdminNavbar },
  computed: {
    isAdminPage() {
      return !!this.$route.meta.isAdmin
    },
    isAdminLoginPage() {
      return this.$route.name === 'Admin'
    }
  }
}
</script>
