import { collection, getDocs } from "firebase/firestore";
import { createStore } from "vuex";
import db from "../firebase/db";
import loginUser from "../firebase/user/loginUser";
import signupUser from "../firebase/user/signupUser";
import apiRequest from "../utility/apiRequest";
import firebase from "../firebase/index";
import "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";


/* eslint-disable */
const store = createStore({
  state: {
    user: null,
    // users: [],
    posts: [],
    categories: [],
    posts: [],
    caseees: [],
    evidences: [],
    transferedEvidences: [],
    transferedCases: [],
    userRole: '',
    dresses:[],
  },
  getters: {
    userRole: (state) => {
      const role = state.user.role;
      return role;
    },
    username(state) {
      if (!state.user) return "";
      return state.user.displayName;
    },
    numberOfPosts(state) {
      return state.posts.length;
    },
    titlesOfPosts(state) {
      const titles = state.posts.map((post) => post.title);
      return titles;
    },
    currentUserEmail: (state) => {
      const email = state.user.email;
      return email;
    },
    usersEmail: (state) => {
      return state.users;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    addCategory(state, category) {
      state.categories.push(category);
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    setCases(state, caseees) {
      state.caseees = caseees;
    },
    setDresses(state, dresses) {
      state.dresses = dresses;
    },
    setEvidences(state, evidences) {
      state.evidences = evidences;
    },
    setTransferedEvidences(state, transferedEvidences) {
      state.transferedEvidences = transferedEvidences;
    },
    setTransferedCases(state, transferedCases) {
      state.transferedCases = transferedCases;
    },
    // addCase(state, casee) {
    //   state.cases.push(casee);
    // },
    removePostById(state, postId) {
      state.posts = state.posts.filter((post) => post._id !== postId);
    },
    setUserRole(state, role) {
      state.userRole = role;
    },
    clearUserRole(state) {
      state.userRole = null;
    },
    // removeCaseById(state, caseId) {
    //   state.cases = state.cases.filter((casee) => casee._id !== caseId);
    // },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const user = await loginUser(payload);
      commit("setUser", user);
    },
    async getUserRole({ commit, state }) {
      if (state.user) {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const idTokenResult = await user.getIdTokenResult();
            console.log(idTokenResult);
            const role = idTokenResult.claims.role;
            console.log(role)
            commit("setUserRole", role)
          }
        });
      }
    },
    async fetchUsers({ commit }) {
      const userRecords = await auth().listUsers();
      const users = userRecords.map((user) => {
        return {
          id: user.uid,
          email: user.email,
        };
      });
      commit("setUsers", users);
    },
    async registerUser({ commit }, payload) {
      await apiRequest.registerUser(payload);
    },
    async fetchCategories({ commit }) {
      const res = await fetch("http://localhost:3000/categories");
      const categories = await res.json();
      commit("setCategories", categories);
    },
    async createCategory({ commit }, categoryData) {
      const res = await fetch("http://localhost:3000/categories", {
        method: "post",
        body: JSON.stringify(categoryData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newCategory = await res.json();
      commit("addCategory", newCategory);
    },
    async updateCategory({ commit }, categoryData, categoryId) {
      const res = await fetch(
        `http://localhost:3000/categories/${categoryId}`,
        {
          method: "put",
          body: JSON.stringify(categoryData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const newCategory = await res.json();
      commit("updateCategory", newCategory);
    },
    async fetchPosts({ commit }) {
      // const res = await fetch("http://localhost:3000/posts");
      // const posts = await res.json();
      // commit("setPosts", posts);
    },
    async createPost({ commit }, postData) {
      const res = await fetch("http://localhost:3000/posts", {
        method: "post",
        body: JSON.stringify(postData),
        headers: { "Content-Type": "application/json" },
      });
      const newPost = await res.json();
      commit("addPost", newPost);
    },
    async deletePost({ commit }, postId) {
      await fetch(`http://localhost:3000/posts/${postId}`, {
        method: "DELETE",
      });
      commit("removePostById", postId);
    },
    async fetchCases({ commit }) {
      const res = await fetch("http://localhost:3000/cases");
      const caseees = await res.json();
      commit("setCases", caseees);
    },
    async fetchDresses({ commit }) {
      const res = await fetch("http://localhost:3000/dresses");
      const dresses = await res.json();
      commit("setDresses", dresses);
    },
    async fetchEvidences({ commit }) {
      const res = await fetch("http://localhost:3000/evidences");
      const evidences = await res.json();
      commit("setEvidences", evidences);
    },
    async fetchTransferedEvidences({ commit }) {
      const res = await fetch("http://localhost:3000/evidences/transfered");
      const transferedEvidences = await res.json();
      commit("setTransferedEvidences", transferedEvidences);
    },
    async fetchTransferedCases({ commit }) {
      const res = await axios.get("http://localhost:3000/cases/transfered");
      const transferedCases = await res.json();
      console.log(res);
      commit("setTransferedCases", transferedCases);
    },
    // async createCase({ commit }, caseData) {
    //   const res = await fetch("http://localhost:3000/cases", {
    //     method: "post",
    //     body: JSON.stringify(caseData),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const newCase = await res.json();
    //   commit("addCase", newCase);
    // },
    // async deleteCase({ commit }, caseId) {
    //   await fetch(`http://localhost:3000/cases/${caseId}`, {
    //     method: "DELETE",
    //   });
    //   commit("removeCaseById", caseId);
    // },
  },
  modules: {
    // categories: {
    //   state: {
    //     categories: [],
    //   },
    //   getters: {
    //     numberOfCategories(state) {
    //       return state.categories.length;
    //     },
    //     titlesOfCategories(state) {
    //       const titles = state.categories.map((category) => category.title);
    //       return titles;
    //     },
    //   },
    //   mutations: {
    //     setCategories(state, categories) {
    //       state.categories = categories;
    //     },
    //     addCategory(state, category) {
    //       state.categories.push(category);
    //     },
    //     removeCategoryById(state, categoryId) {
    //       state.categories = state.categories.filter(
    //         (category) => category._id !== categoryId
    //       );
    //     },
    //   },
    //   actions: {
    //     async fetchCategories({ commit }) {
    //       const res = await fetch("http://localhost:3000/categories");
    //       const categories = await res.json();
    //       commit("setCategories", categories);
    //     },
    //     async createCategory({ commit }, categoryData) {
    //       const res = await fetch("http://localhost:3000/categories", {
    //         method: "post",
    //         body: JSON.stringify(categoryData),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       });
    //       const newCategory = await res.json();
    //       commit("addCategory", newCategory);
    //     },
    //     async deleteCategory({ commit }, categoryId) {
    //       await fetch(`http://localhost:3000/categories/${categoryId}`, {
    //         method: "DELETE",
    //       });
    //       commit("removeCategoryById", categoryId);
    //     },
    //   },
    // },
  },
  created() {
    this.dispatch("getUserRole");
  },
});

export default store;
