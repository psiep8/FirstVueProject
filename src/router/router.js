import {createRouter, createWebHistory} from "vue-router";
import UserView from "@/components/UserView.vue";
import homePageView from "@/components/HomePageView.vue";


const routes = [
    {
        path: '/users',
        name: 'users',
        component: UserView
    }, {
        path: '/',
        name: 'homepage',
        component: homePageView
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;