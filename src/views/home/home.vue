<template>
  <div class="container-sm border-3 p-4 mt-5 rounded-2 shadow">
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="kayit"
        role="tabpanel"
        aria-labelledby="nav-kayit"
        tabindex="0"
      >
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Kayıt
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Diğer kayıt
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              İrtibat Bilgileri
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            tabindex="0"
          >
            <Form
              data-test="loginForm"
              class="form w-100"
              id="kt_login_signin_form"
              autocomplete="off"
              @submit="onSubmitLogin"
              :validation-schema="login"
            >
              <div class="row mt-2">
                <div class="col-md-6">
                  <p class="required form-label">Kullanıcı Adı</p>
                  <Field
                    tabindex="1"
                    class="form-control form-control-lg form-control-solid"
                    type="text"
                    name="taxNumber"
                    data-test="email"
                    :placeholder="'Vergi Numarası'"
                    v-model="userName"
                  />

                  <div class="fv-help-block">
                    <ErrorMessage name="taxNumber" />
                  </div>
                </div>

                <div class="col-md-6">
                  <p class="required form-label">Şifre</p>
                  <Field
                    tabindex="1"
                    class="form-control form-control-lg form-control-solid"
                    type="text"
                    name="taxTitle"
                    data-test="email"
                    :placeholder="'Ünvan'"
                    autocomplete="off"
                    v-model="password"
                  />

                  <div class="fv-help-block">
                    <ErrorMessage name="taxTitle" />
                  </div>
                </div>
              </div>
            </Form>

            <Form
              data-test="loginForm"
              class="form w-100"
              id="kt_login_signin_form"
              autocomplete="off"
              @submit="onSubmitLogin"
              :validation-schema="login"
            >
              <div class="row mt-2">
                <div class="col-md-6">
                  <p class="required form-label">İsim Soyisim</p>
                  <Field
                    tabindex="1"
                    class="form-control form-control-lg form-control-solid"
                    type="text"
                    name="fullName"
                    data-test="email"
                    :placeholder="'İsim Soyisim'"
                  />

                  <div class="fv-help-block">
                    <ErrorMessage name="fullName" />
                  </div>
                </div>
              </div>
            </Form>
          </div>

          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            tabindex="0"
          >
            <div class="row mt-4">
              <div class="col">
                <p class="required form-label">Yetkili İsim</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Yetkili İsim"
                  aria-label="authorizedName"
                />
              </div>
              <div class="col">
                <p class="required form-label">Yetkili Soyisim</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Yetkili Soyisim"
                  aria-label="authorizedLastName"
                />
              </div>

              <div class="col">
                <p class="required form-label">Yetkili Numara</p>
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Yetkili Numara"
                  aria-label="authorizedNumber"
                />
              </div>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
            tabindex="0"
          >
            <div class="row mt-4">
              <div class="col">
                <p class="required form-label">İrtibat İsim Soyisim</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="İrtibat İsim Soyisim"
                  aria-label="contactFullName"
                />
              </div>
              <div class="col">
                <p class="required form-label">İrtibat Numara</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="İrtibat Numara"
                  aria-label="contactNumber"
                />
              </div>

              <div class="col">
                <p class="required form-label">İrtibat Mail</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="İrtibat Mail"
                  aria-label="contactMail"
                />
              </div>
            </div>
            <div class="row mt-4">
              <div class="col">
                <p class="required form-label">İrtibat Görev</p>
                <input
                  type="text"
                  class="form-control"
                  placeholder="İrtibat Görev"
                  aria-label="contactDuty"
                />
              </div>
            </div>
          </div>

          <p>
            {{ user.userName }}
          </p>

          <div class="d-grid gap-2 d-md-flex mt-4 justify-content-md-end">
            <el-button class="me-md-2" @click="listControl(2)">
              Liste Kontrol</el-button
            >
            <el-button
              class="me-md-2"
              @click="addUser(userName, password, false)"
            >
              Giriş</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { useRouter } from "vue-router";
import * as Yup from "yup";
import { ErrorMessage, Field, Form } from "vee-validate";
import { computed, ref, onMounted, watch } from "vue";
import titleHeader from "../companet/header.vue";
import User from "../../data";

export default {
  name: "home",
  components: {
    Field,
    Form,
    ErrorMessage,
    titleHeader,
  },
  setup() {
    const router = useRouter();
    const taxNumber = ref("");
    const userName = ref("");
    const password = ref("");
    const user = ref("");

    onMounted(() => {
      User.getOnlineList();
      userName.value = User.getUser(1).userName;
      password.value = User.getUser(1).password;
      localStorage.getItem("login") == "false"
        ? router.push({ name: "login" })
        : null;
    });

    const listControl = (value) => {
      user.value = User.getUserList()[value];
    };

    const login = computed(() => {
      if (taxNumber.value.length === 11) {
        return Yup.object().shape({
          taxNumber: Yup.string()
            .min(10)
            .required()
            .label("Vergi Numarası Gerekir"),
          fullName: Yup.string().required().label("İsim Soyisim"),
        });
      }

      return Yup.object().shape({
        taxNumber: Yup.string()
          .min(10)
          .required()
          .label("Vergi Numarası Gerekir"),
        taxTitle: Yup.string().required().label("Ünvan"),
      });
    });

    const onSubmitLogin = () => {};

    return {
      login,
      taxNumber,
      password,
      userName,
      user,
      listControl,
      onSubmitLogin,
      open,
    };
  },
};
</script>