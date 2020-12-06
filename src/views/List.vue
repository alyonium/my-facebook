<template>
  <v-conteiner>
    <v-row>
      <v-col
        cols="6"
        class="d-flex align-center mt-8">
        Quantity of users in my-facebook: {{ quantity }}
      </v-col>
      <v-col
        cols="6"
        class="d-flex align-center mt-8">
        <a>Add new user</a>
      </v-col>
    </v-row>
    <v-row>
      <user></user>
    </v-row>
  </v-conteiner>
</template>

<script>
// eslint-disable-next-line import/extensions
import User from './User';

export default {
  name: 'List',
  components: {
    User,
  },
  props: {
    quantity: Number,
  },
};
</script>

<style scoped>

</style>
