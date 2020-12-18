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
        <button class="redirect-button" @click="saveUser()">Save</button>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="4"
        offset="4"
        class="d-flex flex-column justify-center align-center add-user-card">
        <label for="name">Name: </label>
        <input id="name" type="text" v-model="name">

        <label for="age">Age: </label>
        <input id="age" type="number" v-model="age">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListEdit',
  data() {
    return {
      name: '',
      age: 0
    };
  },
  mounted() {
    axios
      .get(`https://facebook-back.herokuapp.com/get/${this.$route.params.id}`)
      .then(response => {
        this.name = response.data.name;
        this.age = response.data.age;
      });
  },
  methods: {
    saveUser() {
      axios
        .put(`https://facebook-back.herokuapp.com/edit/${this.$route.params.id}`, {
          name: this.name,
          age: this.age
        })
        .then(() => {
          this.$router.push('/list');
        });
    },
  }
};
</script>

<style scoped lang="scss">

.redirect-button {
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
