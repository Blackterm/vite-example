<template>
  <div class="container-md border-3 p-4 mt-5 rounded-2 shadow">
    <table class="table mt-2">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Mail</th>
          <th scope="col">User Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in usersList" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import titleHeader from "../companet/header.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "user-list",
  components: {
    titleHeader,
  },
  setup() {
    const store = useStore();

    const usersList = computed(() => {
      return store.getters["data"];
    });

    const userName = computed(() => {
      return store.getters["name"];
    });

    onMounted(() => {
      store.dispatch("fectData");
      store.dispatch("getName","Deneme");
    });

    return {
      usersList,
      userName,
    };
  },
};
</script>




