import { defineStore } from 'pinia'
import axios from 'axios'
import jwt_decode from "jwt-decode"

const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  actions: {
    async getUser(token) {
      var id
      try {
        id = jwt_decode(token).userId
        const response = await axios.get(`http://localhost:4200/users/${id}`)
        this.user = response.data
        console.log("store"+this.user)
      } catch (error) {
        console.log(error)
      }
    },
    loginUser(data){
      this.user = data
      console.log("store"+this.user)
    },
    logoutUser(){
      this.user = null
      console.log("store"+this.user)
    }
  }
})

export { useUserStore }