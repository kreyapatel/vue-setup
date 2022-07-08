import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue"
import HelloWorld from '../components/HelloWorld.vue'
import FooterComponent from '../components/FooterComponent.vue'
import LoginPage from '../components/LoginPage.vue'
const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/world",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/footer",
    name: "FooterComponent",
    component: FooterComponent,
  },

];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior() {
  //   return { x: 0, y: 0 };
  // },
});
export default router;