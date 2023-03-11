<template>
  <div class="bg-slate-300 h-screen overflow-y-scroll">
    <Header />
    <router-view />
    <Footer />
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
  export default {
    components: {
      Header,
      Footer
    },

    mounted() {
      this.$store.dispatch('fetchPosts');

      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        this.$store.commit('setUser', user);
      })
    }
  }

</script>

<!-- <style>
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
  font-family: sans-serif;
  color: #333;
  box-sizing: border-box;
}

header {
  padding: 3.5rem;
}

</style> -->
