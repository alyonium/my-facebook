<template>
  <v-col
    cols="4">
    <div
      v-for="user in users"
      class="d-flex flex-column">
      <button>Delete</button>
      <button>Save</button>
      <span>name: {{ user.name }}</span>
      <span>age: {{ user.age }}</span>
    </div>
  </v-col>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      users: [{
        name: 'Alona',
        age: 19
      },
      {
        name: 'Dima',
        age: 18
      }]
    };
  }
};
</script>

<style scoped>

</style>
