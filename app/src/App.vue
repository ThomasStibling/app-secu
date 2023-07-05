<template>
  <header>
    <div id="nav">
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand">Hess tagram</a>
      <div class="navbar" id="navbarSupportedContent">
          <div class="navbar-nav mr-auto">
              <RouterLink to="/" class="nav-item nav-link">Sign In</RouterLink>
              <RouterLink to="/signup" class="nav-item nav-link">Sign Up</RouterLink>
              <!--<RouterLink v-if="user" to="/home" class="nav-item nav-link">Home</RouterLink>-->
              <button v-if="this.user" @click="logout">Log Out</button>
          </div>
      </div>
  </nav>
   </div>
  </header>

  <RouterView />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/user.js'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      //connect: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ['user']),
  },
  async mounted() {
    this.checkUser();
  },
  methods: {
    ...mapActions(useUserStore, ['getUser','logoutUser','loginUser']),
    
    async checkUser() {
      const jwt = localStorage.getItem('token');
      await this.getUser(jwt);
      console.log("app vue "+this.user)
      /*if(this.user !== null){
        this.connect=true
      }*/
    },

    logout() {
      localStorage.removeItem('token');
      this.logoutUser();
      //this.connect=false
      console.log(this.user)
      this.$router.push("/")
    }
  }
};
</script>


<style scoped>
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: whitesmoke;
  background: crimson;
  border-radius: .5rem;
}
</style>
