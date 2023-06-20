<template>
  <nav class="navbar bg-primary navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <el-icon class="nav-link me-3" aria-current="page" @click="deneme"
              ><Grid
            /></el-icon>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/home"
              ><el-icon class="me-2"><HomeFilled /></el-icon>Anasayfa
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/users-list"
              ><el-icon class="me-2"><UserFilled /></el-icon>Kullanıcı
              Listesi</router-link
            >
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-danger w-100" type="submit" @click="logout">
            Çıkış Yap
          </button>
        </form>
      </div>
    </div>
    <el-drawer
      v-model="drawer"
      direction="ltr"
      :with-header="false"
      :before-close="handleClose"
    >
      <router-link class="nav-link" aria-current="page" to="/home"
        >Anasayfa</router-link
      >
      <router-link class="nav-link" aria-current="page" to="/users-list"
        >Kullanıcı Listesi</router-link
      >
    </el-drawer>
  </nav>
</template>


<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
import emitter from "@/core/plugins/emitter";

export default {
  name: "tab-bar",
  components: {},
  setup() {
    const router = useRouter();
    const drawer = ref(false);

    const logout = () => {
      localStorage.setItem("login", "false");
      router.push({ name: "login" });
    };

    const deneme = () => {
      drawer.value = !drawer.value;
    };

    return {
      logout,
      drawer,
      deneme,
    };
  },
};
</script>