<template>
 
  <titleHeader></titleHeader>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";
import titleHeader from "/src/views/companet/header.vue";
import emitter from "@/core/plugins/emitter";

export default defineComponent({
  name: "MainLayout",

  components: {
    titleHeader,
  },
  setup() {},
});
</script>

