<template>
    <h1>
        Créer un nouveau  post
    </h1>
    <form v-if="user" @submit.prevent="onSubmit">
          <label for="email">Votre Post :</label>
          <input type="text" id="text" v-model="text" required><br><br>

          <button class="btn btn-primary" type="submit">Partager</button>
        </form>
        <p v-else>Veuillez vous connecter pour accèder à cette page</p>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { usePostStore } from '../stores/post.js'
import { useUserStore } from '../stores/user.js'
import jwt_decode from "jwt-decode"

export default {
    data() {
        return {
            text: '',
        };
    },
    computed: {
        ...mapState(usePostStore, ['posts']),
        ...mapState(useUserStore, ['user']),

    },
    methods:{
        ...mapActions(usePostStore,['getAllPosts','savePost']),
        ...mapActions(useUserStore, ['getUser']),
        async onSubmit(){
            console.log("on est dans l'envoie du form")
            let token = localStorage.getItem('token');
            let userId = jwt_decode(token).userId
            console.log(userId);
            this.savePost({postedBy:userId, text:this.text})
            this.$router.push('/home');
        }
    }
};
</script>