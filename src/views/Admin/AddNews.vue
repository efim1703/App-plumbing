<template>
    <v-container>
        <router-link to="/admin/products">
            <v-btn>
                Назад
            </v-btn>
        </router-link>
        <h2>Добавить новость</h2>
         <v-text-field 
            v-model="formData.title" 
            label="Название новости" 
            outlined 
            filled 
            dense 
            hide-details="auto" 
            class="my-3" 
            type="text" 
        />
        <v-textarea
            v-model="formData.text"
            outlined
            filled 
            dense
            label="Текст новости"
        />

        <v-btn 
            class="mt-4 blue white--text"
            @click.prevent="fetchData()"
        >
            Добавить
        </v-btn>
    </v-container>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: "AddNews",
  data: () => ({
    formData: {
        title: '',
        text: ''
    },
  }),
  methods: {
    async fetchData() {
        try {
            await axios.post('http://gartonp3.beget.tech/api/news/add', qs.stringify(this.formData), {
                headers: { 
                    'authorization': `Bearer ${localStorage.getItem('api_token')}`
                },
            });
        } catch (e) {
            console.log('added product error: ', e);
        }
        this.$router.push('/admin/news')
    }
  }
};
</script>
