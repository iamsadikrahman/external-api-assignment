import {createRouter, createWebHistory} from "vue-router";
import CategoryPage from "../views/CategoryPage.vue";

const Home = () => import('../views/HomePage.vue')
const Categories = () => import('../components/Categories.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            // dynamic category path
            path: '/category/:id',
            component: CategoryPage
        },
        {
            path: '/post/:id',
            component: () => import('../views/SinglePostPage.vue')
        }
    ]

})


export default router