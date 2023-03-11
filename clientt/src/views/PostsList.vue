<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      allPosts: this.$store.dispatch("fetchPosts"),
    };
  },
  methods: {
    handleDeletePost(postId) {
      this.$store.dispatch("deletePost", postId);
    },
  },
  computed: {
    ...mapState(["posts"]),
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <label for="name">Title:</label>
        {{ post.name }}
        <label for="description">Description:</label>
        {{ post.description }}
        <label for="likes">Likes:</label>
        {{ post.likes }}
        <label for="author">Created By:</label>
        {{ post.createdBy }}
        <button @click="handleDeletePost(post._id)">Delete</button>

      </li>
    </ul>
    <router-link to="/post/create"><button class="bg-indigo-500 text-white my-2 py-2 px-4 rounded-lg hover:bg-indigo-600">create</button></router-link>
  </div>
</template>
