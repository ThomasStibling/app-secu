import { defineStore } from 'pinia'
import axios from 'axios'

const usePostStore = defineStore('post', {
  state: () => ({
    post: null,
    posts:[]
  }),

  actions: {
    async getPost(postId){
      try {
        const response = await axios.get('http://localhost:4200/posts/'+postId);
        console.log(response.data)
        this.post = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async getAllPosts() {
      try {
        const response = await axios.get('http://localhost:4200/posts')
        console.log(response.data)
        this.posts = response.data
      } catch (error) {
        console.log(error)
      }
    },

    async savePost(post) {
      if (post._id) {
        try {
          const response = await axios.patch(`http://localhost:4200/posts/${post._id}`, post)
          console.log('patch response ', response.data)
          this.$reset()
        } catch (error) {
          console.log(error)
        }
      } else {
        console.log("création d'une nouveau post")
        try {
          const response = await axios.post(`http://localhost:4200/posts`, post)
          console.log('post response ', response.data)
          this.$reset()
        } catch (error) {
          console.log(error)
        }
      }
    },

    async likePost(userId) {
      try {
        const likes = this.post.like
        likes.push(userId)
        await axios.patch("http://localhost:4200/posts/" + this.post._id, { like: likes }) 
        console.log("post like")
      } catch (error) {
        console.log(error)
      }
    },

    async unlikePost(userId) {
    console.log("dans le post store")
      try {
        console.log("debut unlike")
        const likes = this.post.like
        let index = likes.indexOf(userId);
        if (index !== -1) {
          likes.splice(index, 1);
        } 
        console.log("avant axios request")
        await axios.patch("http://localhost:4200/posts/" + this.post._id, { like: likes })
        console.log("post unlike")
      } catch (error) {
        console.log(error)
      }
    }
  },
})

export { usePostStore }