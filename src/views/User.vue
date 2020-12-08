<template>
  <v-row>
  <v-col
    cols="3"
    offset="1"
    v-for="user in users"
    :key="user.id"
    class="d-flex flex-column user-card mt-8 mb-8">
    <div
      class="user-buttons d-flex justify-space-between">
      <button @click="deleteUser(user)">Delete</button>
      <button @click="editUser(user)">Edit</button>
    </div>
      <span>name: {{ user.name }}</span>
      <span>age: {{ user.age }}</span>
  </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'User',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/getAll')
      .then(response => {
        this.users = response.data;
        this.$emit('update-quantity', this.users.length);
      });
  },
  methods: {
    deleteUser(user) {
      axios
        .delete(`http://localhost:3000/remove/${user.id}`)
        .then(() => {
          axios
            .get('http://localhost:3000/getAll')
            .then(response => {
              this.users = response.data;
              this.$emit('update-quantity', this.users.length);
            });
        });
    },
    editUser(user) {
      this.$router.push(`/list/edit/${user.id}`);
    }
  }
};
</script>

<style scoped lang="scss">

button {
  background-color: $button-background;
  color: $button-color;
  outline: none;
  padding: $button-padding;
  margin: $button-margin;
  border-radius: $button-border-radius;

  &:hover {
    background-color: $button-hover;
  }

  &:active {
    background-color: $button-active;
  }
}

.user-card {
  width: 300px;
  background-color: $card-background;
}
</style>
