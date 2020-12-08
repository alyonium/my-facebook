<template>
  <v-container>
    <v-row>
      <v-col
        cols="8"
        offset="1"
        class="d-flex align-center mt-8">
        Quantity of users in my-facebook: {{ usersQuantity }}
      </v-col>
      <v-col
        cols="3"
        class="d-flex align-center mt-8 justify-end">
        <router-link to="/list/add" class="redirect-link">Add new user</router-link>
      </v-col>
    </v-row>
    <user @update-quantity="getQuantity"></user>
  </v-container>
</template>

<script>
import User from './User';

export default {
  name: 'List',
  components: {
    User,
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
</style>
