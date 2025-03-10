import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import BooksView from "@/views/BooksView.vue"
import ContactView from "@/views/ContactView.vue"
import LoginView from "@/views/LoginView.vue"
import RegisterView from "@/views/RegisterView.vue"

const routes = [
  { name: "home", path: "/", component: HomeView },
  { name: "books", path: "/books", component: BooksView },
  { name: "contact", path: "/contact", component: ContactView },
  { name: "login", path: "/login", component: LoginView },
  { name: "register", path: "/register", component: RegisterView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active-link",
})

export default router
