import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import ResumePage from '../views/ResumePage.vue';
import store from '../store/index';
import { 
  SET_HEADER_SHOW_HEADER,
  SET_HEADER_SHOW_TITLE
} from '../store/global.store';

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectPage
  },
  {
    path: "/projects/:id",
    name: "Project Details",
    component: ProjectDetails
  },
  {
    path: "/resume",
    name: "Resume",
    component: ResumePage
  }
];

const router = new VueRouter({
  routes,
});

router.afterEach((to) => {
  updateTitle(to.name);
  updateHeaderVisibility(to.name);
});

function updateTitle(toName) {
  document.title = `${toName} - Ryan Gehrlein`
}

function updateHeaderVisibility(toName) {
  const pagesWithHeaderTitle = [
      'Home'
  ];
  const pagesWithoutHeader = [];
  store.commit(`global/${SET_HEADER_SHOW_TITLE}`, pagesWithHeaderTitle.includes(toName));
  store.commit(`global/${SET_HEADER_SHOW_HEADER}`, !pagesWithoutHeader.includes(toName));
}

export default router;
