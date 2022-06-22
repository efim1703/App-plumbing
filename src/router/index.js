import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Index.vue'),
    meta: {
      title: 'Главная страница'
    }
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News/Index.vue'),
    meta: {
      title: 'Новости'
    }
  },
  {
    path: '/news/:id',
    name: 'FullNews',
    component: () => import('@/views/News/FullNews.vue'),
    meta: {
      title: 'Новость'
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/views/GalleryPage.vue'),
    meta: {
      title: 'Галерея'
    }
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('@/views/ContactsPage.vue'),
    meta: {
      title: 'Контакты'
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/views/Admin/Index.vue'),
    meta: {
      title: 'Админ панель',
    }
  },
  {
    path: '/admin/products',
    name: 'AdminProducts',
    component: () => import('@/views/Admin/AdminProducts.vue'),
    meta: {
      title: 'Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/products/add',
    name: 'AdminProductsAdd',
    component: () => import('@/views/Admin/AddProducts.vue'),
    meta: {
      title: 'Добавить товар | Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/products/edit/:id',
    name: 'AdminProductEdit',
    component: () => import('@/views/Admin/AdminProductEdit.vue'),
    meta: {
      title: 'Редактировать товар | Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/news',
    name: 'AdminNews',
    component: () => import('@/views/Admin/AdminNews.vue'),
    meta: {
      title: 'Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/news/add',
    name: 'AdminNewsAdd',
    component: () => import('@/views/Admin/AddNews.vue'),
    meta: {
      title: 'Добавить новость | Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/news/edit/:id',
    name: 'AdminNewsEdit',
    component: () => import('@/views/Admin/AdminNewsEdit.vue'),
    meta: {
      title: 'Редактировать новость | Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/gallery',
    name: 'AdminGallery',
    component: () => import('@/views/Admin/AdminGallery.vue'),
    meta: {
      title: 'Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/gallery/add',
    name: 'AdminGalleryAdd',
    component: () => import('@/views/Admin/AddGallery.vue'),
    meta: {
      title: 'Добавить изображение | Админ панель',
      isAdmin: true
    }
  },
  {
    path: '/admin/contacts',
    name: 'AdminContacts',
    component: () => import('@/views/Admin/AdminContacts.vue'),
    meta: {
      title: 'Админ панель',
      isAdmin: true
    }
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
