<template>
    <div v-if="user" class="post">
        <button @click="goToPost()" class="btn btn-primary">+ New Post</button>
            <li v-for="post in posts">
                <PostCard :postId="post._id" :postedBy="post.mail" :text="post.text" :like="post.like.length"/>
            </li>
    </div>
    <p v-else>Veuillez vous connecter pour accèder à cette page</p>

</template>

<script>
import axios from "axios"
import PostCard from '../components/PostCard.vue'
import { usePostStore } from '../stores/post.js'
import { useUserStore } from '../stores/user.js'
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
        ...mapState(useUserStore,['user']),
        ...mapState(usePostStore, ['posts']),
    },
    methods: {
        ...mapActions(usePostStore, ['getAllPosts']),

        goToPost(){
            this.$router.push('/post');
        }

    }
}
</script>

<style>
    li {
        list-style-type: none;
    }

    .post{
        position: absolute;
        left: 35%;

    }
</style>

