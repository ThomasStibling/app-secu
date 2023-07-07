<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ postedBy }}</h5>
      <p class="card-text">{{ text }}</p>
      <button @click="addLike()" class="btn btn-primary">like</button>
      <p class="card-text"> {{ like }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { useUserStore } from '../stores/user.js'
import { usePostStore } from '../stores/post.js'
import { mapState, mapActions } from 'pinia'

export default {
  props: {
    postId:null,
    postedBy: null,
    text: null,
    like: 0,
  },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(usePostStore,['post'])
  },
  methods: {
    ...mapActions(usePostStore,['getAllPosts','getPost','likePost','unlikePost']),

    async addLike(){
      await this.getPost(this.postId)
      const likes = this.post.like
      const userId = this.user._id
      if(!likes.includes(userId)){
        await this.likePost(userId)
        await this.getAllPosts()
      }else{
        console.log("tentative unlike post")
        await this.unlikePost(userId)
        await this.getAllPosts()
        console.log("unlike ! ")
      }
    }
  }
}
</script>