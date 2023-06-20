<template >
  <div
    class="row justify-content-center"
    style="
      background-image: url('https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    "
  >
    <div class="col-6">
      <div class="card border-24 p-4 mt-5 rounded-2 shadow">
        <Form
          data-test="loginForm"
          class="form w-100"
          id="kt_login_signin_form"
          autocomplete="off"
          @submit="onSubmitLogin"
          :validation-schema="login"
        >
          <div class="row mt-2">
            <div class="col-md-12">
              <p class="required form-label">{{ $t("user_name") }}</p>
              <Field
                tabindex="1"
                class="form-control form-control-lg form-control-solid"
                type="text"
                name="email"
                maxlength="11"
                :placeholder="$t('user_name')"
                v-model="userName"
              />

              <div class="fv-help-block">
                <ErrorMessage name="taxNumber" />
              </div>
            </div>

            <div class="col-md-12 mt-4">
              <p class="required form-label">{{ $t("password") }}</p>
              <Field
                tabindex="1"
                class="form-control form-control-lg form-control-solid"
                type="password"
                name="password"
                :placeholder="$t('password')"
                autocomplete="off"
                v-model="password"
              />

              <div class="fv-help-block">
                <ErrorMessage name="taxTitle" />
              </div>
            </div>
          </div>
          <div class="d-grid gap-2 d-md-flex mt-4 justify-content-md-end">
            <el-button class="me-md-2" @click="login"> Giriş</el-button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useI18n } from "vue-i18n";
import { ElMessage, ElMessageBox } from "element-plus";
import User from "../../data";

export default {
  name: "login",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const userName = ref("");
    const password = ref("");
    const router = useRouter();
    const { t } = useI18n();

    onMounted(() => {
      localStorage.getItem("login") == "true"
        ? router.push({ name: "home" })
        : null;
    });

    const login = () => {
      if (password.value.length !== 0 && userName.value.length !== 0) {
        var index = User.getUserList().findIndex(
          (element) => element.userName === userName.value
        );

        if (index !== -1) {
          if (password.value === User.getUserList()[index].password) {
            ElMessage({
              type: "success",
              message: "Başarılı bir şekilde giriş yapıldı.",
            });
            localStorage.setItem("login", "true");
            router.push({ name: "home" });
            return;
          } else {
            ElMessage({
              type: "error",
              message: "Şifre yanlış.",
            });
            return;
          }
        } else {
          ElMessage({
            type: "error",
            message: "Böyle bir kullanıcı bulunamadı.",
          });
        }
      } else {
        ElMessage({
          type: "error",
          message: "İlgili alanları doldurunuz",
        });
      }
    };

    const onSubmitLogin = () => {};

    return {
      userName,
      password,
      login,
      onSubmitLogin,
    };
  },
};
</script>




