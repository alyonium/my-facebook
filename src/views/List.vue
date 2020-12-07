<template>
  <v-container>
    <v-row>
      <v-col
        cols="6"
        class="d-flex align-center mt-8">
        Quantity of users in my-facebook: {{ usersQuantity }}
      </v-col>
      <v-col
        cols="6"
        class="d-flex align-center mt-8">
        <router-link to="/list/add">Add new user</router-link>
      </v-col>
    </v-row>
      <user @update-quantity="getQuantity"></user>
  </v-container>
</template>

<script>
// eslint-disable-next-line import/extensions
import User from './User';
// eslint-disable-next-line import/extensions
import ListAdd from './ListAdd';

export default {
  name: 'List',
  components: {
    User,
    ListAdd,
  },
  data() {
    return {
      usersQuantity: null
    };
  },
  methods: {
    getQuantity(quantity) {
      this.usersQuantity = quantity;
    },
  },
};
</script>

<style scoped>

</style>
