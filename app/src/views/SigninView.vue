<template>
  <div>
    <h1>Sign In</h1>
    <form v-if="!user" @submit.prevent="onSubmit">
      <label for="email">E-mail :</label>
      <input type="email" id="email" v-model="email" required><br><br>

      <label for="password">Password :</label>
      <input type="password" id="password" v-model="password" required><br><br>

      <button class="btn btn-primary" type="submit">Sign In</button>
    </form>
    <p v-else>Vous êtes deja connecté</p>
  </div>
</template>

<script>
import axios from "axios"
import { useUserStore } from '../stores/user.js'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  methods: {
    ...mapActions(useUserStore, ['getUser', 'logoutUser','loginUser']),
    async onSubmit() {
      try {
        const response = await axios.post('http://localhost:4200/users/login', {
          email: this.email,
          password: this.password
        });
        console.log('Réponse de l\'API:', response.data);
        const data_ = response.data
        const token = data_.token;
        this.loginUser("sign in vue" + data_);
        localStorage.setItem('token', token);
        this.$router.push("/home")
      } catch (error) {
        console.error('Erreur de la requête:', error);
      }
      console.log('E-mail:', this.email);
      console.log('Mot de passe:', this.password);
    }
  }
};
</script>