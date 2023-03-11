import { createStore } from "vuex";

const store = createStore({
  state: {
    cases: [],
  },
  getters: {},
  mutations: {
    setCases(state, cases) {
      state.cases = cases;
    },
    addCase(state, casee) {
      state.cases.push(casee);
    },
    removeCaseById(state, caseId) {
      state.cases = state.cases.filter((casee) => casee._id !== caseId);
    },
  },
  actions: {
    async fetchCases({ commit }) {
      const res = await fetch(" ");
      const cases = await res.json();
      commit("setCases", cases);
    },
    async createCase({ commit }, caseData) {
      const res = await fetch("http://localhost:3000/cases", {
        method: "post",
        body: JSON.stringify(caseData),
        headers: { "Content-Type": "application/json" },
      });
      const newCase = await res.json();
      commit("addCase", newCase);
    },
    async updateCase({ commit }, caseData ,caseId) {
      const res = await fetch(`http://localhost:3000/cases/${caseId}`, {
        method: "put",
        body: JSON.stringify(caseData),
        headers: { "Content-Type": "application/json" },
      });
      const newCase = await res.json();
      commit("addCase", newCase);
    },
    async deleteCase({ commit }, caseId) {
      await fetch(`http://localhost:3000/cases/${caseId}`, {
        method: "DELETE",
      });
      commit("removeCaseById", caseId);
    },
  },
});

export default store;
