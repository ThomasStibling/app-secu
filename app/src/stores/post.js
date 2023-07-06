import { defineStore } from 'pinia'
import axios from 'axios'

const usePostStore = defineStore('post', {
  state: () => ({
    post: null,
    posts:[]
  }),

  actions: {
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

    /*async addLike(post) {
      try {
        const response = await axios.patch('http://localhost:4200/posts/'+post._id,post)
        console.log(response.data)
        //this.post=post
      } catch (error) {
        console.log(error)
      }
    },*/
  }
})

export { usePostStore }