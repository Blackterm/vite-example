import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import i18n from "@/core/plugins/i18n";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons-vue'
import '@fortawesome/vue-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'



const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(store);
app.use(ElementPlus);
app.use(router);
app.use(i18n);
app.mount("#app");