<template>
    <div class="admin-nav primary d-flex flex-column ">
        <div class="title-nav text-h5 pa-6 py-10 pr-14">PLUMBING</div>
        <router-link to="/admin/products" class="black--text global-text-none global-cursor-pointer text-h5 pa-6 pr-14">Товары</router-link>
        <router-link to="/admin/news" class="black--text global-text-none global-cursor-pointer text-h5 pa-6 pr-14">Новости</router-link>
        <router-link to="/admin/gallery" class="black--text global-text-none global-cursor-pointer text-h5 pa-6 pr-14">Галерея</router-link>
        <router-link to="/admin/contacts" class="black--text global-text-none global-cursor-pointer text-h5 pa-6 pr-14">Контакты</router-link>
    </div>
</template>

<script>
export default {
    name: 'AdminNavbar'
}
</script>

<style scoped>
    .admin-nav {
        width: fit-content;
        height: 100vh;
    }
    .admin-nav > a,
    .title-nav {
        border-bottom: 1px solid #212121;
    }
</style>