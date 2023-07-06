<template>
    <button class="btn btn-primary">+ New Post</button>
    <li v-for="post in posts">
        <PostCard :postedBy="post.mail" :text="post.text" :like="post.like.length"/>
    </li>
</template>

<script>
import axios from "axios"
import PostCard from '../components/PostCard.vue'
import { usePostStore } from '../stores/post.js'
import { mapState, mapActions } from 'pinia'

export default {
    data() {
        return {

        };
    },
    async mounted() {
        await this.getAllPosts()
        for(let post of this.posts) {
            const response = await axios.get('http://localhost:4200/users/'+post.postedBy)
            var mail = response.data.email
            post.mail=mail
        }
    },
    computed: {
        ...mapState(usePostStore, ['posts']),
    },
    methods: {
        ...mapActions(usePostStore, ['getAllPosts','addLike']),
        /*addLike(postId){
            this.addLike(postId)
        }*/
    }
}
</script>

<style>
    li {
        list-style-type: none;
    }
</style>

