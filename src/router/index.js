import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Details from "@/components/ProductDetails.vue";
import ContactUs from "@/components/ContactUs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:id",
    name: "Details",
    component: Details,
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: ContactUs,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
