import { createI18n } from "vue-i18n";


const messages = {

    tr: {
        user_name: "Kullanıcı Adı",
        password: "Şifre",
    },
    en: {}
}




const i18n = createI18n({
    legacy: false,
    locale: "tr",
    fallbackLocale: "tr",
    globalInjection: true,
    messages
});

export default i18n;