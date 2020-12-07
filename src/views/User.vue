<template>
  <v-row>
  <v-col
    cols="3"
    v-for="user in users"
    :key="user.id"
    class="d-flex flex-column user-card mt-8 ml-8 mb-8 mr-8">
    <div
      class="user-buttons d-flex justify-space-between">
      <button>Delete</button>
      <button>Edit</button>
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
};
</script>

<style scoped>
.user-buttons {

}

.user-card {
  width: 300px;
  background-color: #42b983;
}
</style>
