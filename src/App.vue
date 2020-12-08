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
}

#nav {
  background-color:$header-background;
  box-shadow: 0 0 10px $header-box-shadow;
  a {
    font-weight: bold;
    color: $link;
    text-decoration: none;

    &.router-link-exact-active {
      color: $link-active;
    }

    &:hover {
      color: $link-hover;
    }
  }
}
</style>
