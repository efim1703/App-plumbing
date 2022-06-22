<template>
    <v-container>
        <router-link to="/admin/products">
            <v-btn>
                Назад
            </v-btn>
        </router-link>
        <h2>Добавить товар</h2>
         <v-text-field 
            v-model="formData.title" 
            label="Название товара" 
            outlined 
            filled 
            dense 
            hide-details="auto" 
            class="mb-3" 
            type="text" 
        />
        <v-text-field 
            v-model="formData.price" 
            label="Цена" 
            outlined 
            filled 
            dense 
            hide-details="auto" 
            class="mb-3" 
            type="number" 
        />
        <div ref="upload" class="upload">Добавить изображение</div>
        <v-btn 
            class="mt-4 blue white--text"
            @click.prevent="fetchData()"
        >
            Добавить
        </v-btn>
    </v-container>
</template>

<script>
import Dropzone from 'dropzone'
import axios from 'axios'
import qs from 'qs'

export default {
  name: "AddProducts",
  data: () => ({
    formData: {
        price: null,
        title: '',
        img: null
    },
    dropzone: null
  }),
  mounted() {
      this.dropzone = new Dropzone(this.$refs.upload, {
          url: 'qwerty',
          autoProcessQueue: false,
      })
  },
  methods: {
    getData() {
        const files = this.dropzone.getAcceptedFiles()
             this.formData.img = files[0] ? files[0].dataURL : ''
    },
    async fetchData() {
        this.getData()
        try {
            await axios.post('http://gartonp3.beget.tech/api/products/add', qs.stringify(this.formData), {
                headers: { 
                    'authorization': `Bearer ${localStorage.getItem('api_token')}`
                },
            });
        } catch (e) {
            console.log('added product error: ', e);
        }
        this.$router.push('/admin/products')
    }
  }
};
</script>

<style scoped>
.upload {
    border: 1px dashed #212121;
    text-align: center;
    padding: 8px 12px;
    cursor: pointer;
}
.upload:hover {
    background: #F4F4F4;
}

::v-deep .dz-error-message,
::v-deep .dz-success-mark, 
::v-deep .dz-error-mark {
  display: none !important
}
</style>
