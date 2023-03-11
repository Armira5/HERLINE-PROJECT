<template>
  <main>
    <!-- <section>
      <h3>Posts</h3>
      <article v-for="post in posts" v-bind:key="post.title">
        <h4>{{ post.title }}</h4>
        <p>{{ post.content }}</p>
      </article>
    </section> -->
    <!-- <div>
      <ul>
        <li v-for="category in categories" :key="category.id">
          {{ category.name }}
        </li>
      </ul>
    </div> -->
    <!-- <div v-for="cat in categories" :key="cat.id"> {{ cat.title }}</div> -->
    <h1>home</h1>
    <p>{{ userRole }}</p>

    <!-- <p>{{ this.username }}</p> -->
    <!-- <p>{{ this.currentUserEmail }}</p> -->

  </main>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex';
import { getAuth, signOut } from '@firebase/auth';

export default {
  data() {
    return {
      role: '',
    };
  },
  name: "HomeView",
  methods: {
    ...mapActions(['getUserRole'])
  },
  computed: {
    ...mapState(['userRole']),
    ...mapState(["posts"]),
    ...mapState(['user']),
    ...mapGetters(['username', 'currentUserEmail']),
  },
  created() {
    this.getUserRole().then(() => {
      this.role = this.userRole === 'admin' ? 'admin' : 'user';
      // console.log(this.role); // logs the user's role (e.g. 'admin' or 'user')
    });
  }
};
</script>

