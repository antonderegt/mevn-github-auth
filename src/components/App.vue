<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/counter">Counter</router-link> |
    <a v-if="this.$store.state.user.displayName" href="/logout" @click="signOut">Log Out</a>
    <router-link v-else to="/signin">Sign In</router-link>
    <h1>{{msg}}</h1>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'MEVN Boilerplate'
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut')
    }
  },
  mounted() {
    this.$store.dispatch('getUser')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
