import Vue from "vue";
import VueRouter from "vue-router";
import ReportDashboard from "../components/report-dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/reports",
    name: "dashboard",
    component: ReportDashboard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
