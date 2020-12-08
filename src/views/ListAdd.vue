<template>
  <v-container>
    <v-row>
      <v-col
        cols="8"
        offset="1"
        class="d-flex align-center mt-8">
        Add new user
      </v-col>
      <v-col
        cols="3"
        class="d-flex align-center mt-8 justify-end">
        <router-link to="/list" class="redirect-link">Save</router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="4"
        offset="4"
        class="d-flex flex-column justify-center align-cadd-user-card">
        <label for="name">Name: </label>
        <input id="name" type="text">

        <label for="age">Age: </label>
        <input id="age" type="text">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ListAdd',
};
</script>

<style scoped lang="scss">

.redirect-link {
  color: $link;
  text-decoration: none;
  padding: $link-padding;
  border: 1px solid $link;

  &:hover {
    color: $link-hover;
  }

  &:active {
    color: $link-active;
  }
}

.add-user-card {
  background-color: $card-background;
  padding: $card-padding;
}

input {
  border: 1px solid #000;
  outline: none;
  background-color: $input-background;
  width: 200px;
}
</style>
