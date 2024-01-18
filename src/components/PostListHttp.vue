<template>
    <div>
        <!-- <button @click="getPost">Get Request</button> -->
        <h3 v-if="errorMsg">{{ errorMsg }}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }} {{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
   

<script>
import axios from 'axios';
export default {
    name: 'PostListHttp',
    data() {
        return {
            posts: [],
            errorMsg : '',
        }
    },
    created(){
        this.getPost();
    },
    methods: {
        getPost() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                this.posts = response.data;
            }).catch((error) => {
                console.log(error);
                this.errorMsg = error;
            })
        }
    }
}
</script>

<style scoped></style>