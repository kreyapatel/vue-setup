import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import HomePage from "../components/HomePage.vue";
import AboutPage from "../components/AboutPage.vue"
import HelloWorld from '../components/HelloWorld.vue'
import FooterComponent from '../components/FooterComponent.vue'
import LoginPage from '../components/LoginPage.vue'
import PromoCode from '../components/PromoCode.vue'
import ProfileComponent from '../components/ProfileComponent.vue'
import AdminControl from '../components/AdminControl.vue'
import WeeklyStatement from '../components/WeeklyStatement.vue'
import VehicleType from '../components/VehicleType.vue'
import ProviderTypes from "../components/ProviderTypes.vue";


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
  {
    path: "/promo-code",
    name: "PromoCode",
    component: PromoCode,
  },
  {
    path: "/profile",
    name: "ProfileComponent",
    component: ProfileComponent,
  },
  {
    path: "/admin-control",
    name: "AdminControl",
    component: AdminControl,
  },
  {
    path: "/WeeklyStatement",
    name: "WeeklyStatement",
    component: WeeklyStatement,
  },
  {
    path: "/types",
    name: "VehicleType",
    component: VehicleType,
  },
  {
    path: "/provider-types",
    name: "ProviderTypes",
    component: ProviderTypes,
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