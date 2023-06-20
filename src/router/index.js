import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/home",
        component: () => import("@/views/layouts/Layout.vue"),
        children: [
            {
                path: "/home",
                name: "home",
                component: () => import("@/views/home/home.vue"),
            },
            {
                path: "/users-list",
                name: "users-list",
                component: () => import("@/views/users_list/users_list.vue"),
            },
        ]
    },
    {
        path: "/auth",
        redirect: "/login",
        component: () => import("@/views/layouts/AutLayout.vue"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("@/views/login/login.vue"),
            },

        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});



export default router;