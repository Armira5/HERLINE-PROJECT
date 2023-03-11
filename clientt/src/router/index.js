import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import Header from "../components/Header.vue";
import store from "../store";
import Admin from "../views/admin/index.vue";
import HomeView from "../views/public/HomeView.vue";
import AdminLayout from "../components/AdminLayout.vue"
const role = store.state.userRole;
const routes = [
  {
    path: "/upload",
    name: "upload",
    component: () => import("../views/Upload.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminLayout,
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Admin,
      },
      {
        path: "/admin/case-management",
        name: "cases",
        component: () =>
          import(
            /* webpackChunkName: "cases" */ "../views/admin/caseManagement/Cases.vue"
          ),
      },
      {
        path: "/admin/case-management/create",
        name: "createCase",
        component: () =>
          import(
            /* webpackChunkName: "createCase" */ "../views/admin/caseManagement/CreateCaseManagement.vue"
          ),
      },
      {
        name: "editCase",
        path: "/admin/case-management/edit/:id",
        component: () =>
          import("../views/admin/caseManagement/EditCaseManagement.vue"),
      },
      {
        name: "transferCase",
        path: "/admin/case-management/transfer/:id",
        component: () =>
          import("../views/admin/caseManagement/TransferCase.vue"),
      },
      {
        name: "caseDetails",
        path: "/admin/case-management/details/:id",
        component: () =>
          import("../views/admin/caseManagement/CaseDetails.vue"),
      },
      {
        path: "evidence",
        name: "evidence",
        component: () => import("../views/admin/evidence/Evidences.vue"),
      },
      {
        path: "evidence/create",
        name: "creatEvidence",
        component: () => import("../views/admin/evidence/CreateEvidence.vue"),
      },
      {
        path: "evidence/edit/:id",
        name: "editEvidence",
        component: () => import("../views/admin/evidence/EditEvidence.vue"),
      },
      {
        path: "evidence/transfer/:id",
        name: "transferEvidence",
        component: () => import("../views/admin/evidence/TransferEvidence.vue"),
      },
      {
        path: "evidence/details/:id",
        name: "detailsEvidence",
        component: () => import("../views/admin/evidence/EvidenceDetails.vue"),
      },
      {
        path: "users",
        name: "users",
        component: () => import("../views/admin/users/Users.vue"),
      },
      {
        path: "transferedEvidences",
        name: "transferedEvidences",
        component: () => import("../views/admin/transferedEvidences.vue"),
      },
      {
        path: "transferedCases",
        name: "transferedCases",
        component: () => import("../views/admin/transferedCases.vue"),
      },
    ],
  },

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/public/AboutView.vue"),
  },
  // {
  //   path: "/create",
  //   name: "Create",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "create" */ "../views/public/CreatePostView.vue"
  //     ),
  // },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/user/RegisterView.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/user/LoginView.vue"),
  },
  // {
  //   path: "/employee",
  //   name: "employee",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "employee" */ "../views/public/EmployeeCrud.vue"
  //     ),
  // },
  {
    path: "/category",
    name: "categories",
    component: () =>
      import(
        /* webpackChunkName: "category-create" */ "../views/category/CategoryList.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/category",
    name: "createCategory",
    children: [
      {
        name: "category-create",
        path: "create",
        component: () =>
          import(
            /* webpackChunkName: "category-create" */ "../views/category/CreateCategory.vue"
          ),
        meta: {
          requiresAuth: true,
        },
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/category/update/:id",
    name: "update",
    component: () =>
      import(
        /* webpackChunkName: "category-update" */ "../views/category/UpdateCategory.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/post",
    name: "posts",
    component: () =>
      import(
        /* webpackChunkName: "category-create" */ "../views/PostsList.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/post",
    name: "post",
    children: [
      {
        name: "post-create",
        path: "create",
        component: () =>
          import(
            /* webpackChunkName: "post-create" */ "../views/CreatePost.vue"
          ),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/public/FourOFourView.vue"
      ),
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/public/Unauthorized.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const guestRouteNames = ["login", "register"];

const routeNames = routes.flatMap((route) =>
  route.children
    ? route.children.flatMap((route) => route.name).concat(route.name)
    : route.name
);
// router.beforeEach((to, from, next) => {
//   const auth = getAuth();
//   onAuthStateChanged(auth, (user) => {
//     if (guestRouteNames.includes(to.name) && user) {
//       next({ name: "home" });
//     } else if (!routeNames.includes(to.name)) {
//       next({ name: "404" });
//     } else {
//       next();
//     }
//   });
// });

// router.beforeEach((to, from, next) => {
//   const role = store.state.userRole;

//   if (to.matched.some((record) => record.meta.requiresAdmin)) {
//     if (role === "admin") {
//       next();
//     } else {
//       next({ path: "401" });
//     }
//   } else {
//     next();
//   }
// });
router.beforeEach((to, from, next) => {
  // const auth = getAuth();
  const role = store.state.userRole;
  const user = store.state.user;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin);

  // if (requiresAuth || requiresAdmin && !user) {
  //   next("/login")
  // } else {
  //   next()
  // }
  // if (requiresAdmin && role!="admin") {
  //   next("/unauthorized")
  // } else {
  //   next()
  // }

  if (requiresAuth && !user) {
    // Redirect to login page if user is not authenticated
    next({ name: "login" });
  }else if(requiresAdmin && role !=="admin"){
    // Proceed to the route
    next({ name: "unauthorized" });
  } else {
    next()
  }

});













// router.beforeEach((to, from, next) => {
//   if (store.state.user) {
//     next();
//   } else {
//     next("/login");
//   }
// });

// router.beforeEach((to, from, next) => {
//   const user = store.state.user;
//   const auth = getAuth();
//   if (to.meta.requiresAuth) {
//     if (!user) {
//       return next({ path: "/login" });
//     }

//     if (to.meta.requiresRole && to.meta.requiresRole !== user) {
//       return next({ path: "/401" });
//     }

//     return next();
//   }

//   return next();
// });
export default router;
