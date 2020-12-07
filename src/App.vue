<template>
  <v-app id="app">
      <v-app-bar
        id="nav"
        max-height="60"
        class="d-flex justify-center">
        <router-link to="/list">List</router-link>
      </v-app-bar>
      <v-main>
        <router-view/>
      </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color: #f7bacf;
  box-shadow: 0 0 10px #c48b9f;
  a {
    font-weight: bold;
    margin: 0 10px;
    color: #560027;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ad1457;
    }

    &:hover {
      color: #bc477b;
    }
  }
}
</style>
