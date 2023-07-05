<template>
  <div>
    <h1>Sign Up</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">E-mail :</label>
      <input type="email" id="email" v-model="email" required><br><br>

      <label for="password">Password :</label>
      <input type="password" id="password" v-model="password" required><br><br>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async onSubmit() {
      try {
        const response = await axios.post('http://localhost:4200/users/create', {
          email: this.email,
          password: this.password
        });
        console.log('Réponse de l\'API:', response.data);
        this.$router.push("/")
      } catch (error) {
        console.error('Erreur de la requête:', error);
      }
      console.log('E-mail:', this.email);
      console.log('Mot de passe:', this.password);
    }
  }
};
</script>