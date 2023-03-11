<script>
import moment from "moment";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      newPost: {
        name: "",
        description: "",
        likes: "",
        createdAt: new Date(),
        createdBy: "",
      },
      // allPosts: this.$store.state.posts,
    };
  },
  methods: {
    async handleSubmit() {
      this.createdAt = moment().format("HH:mm/DD/MM/YYYY");
      this.createdBy = this.user.email;
      this.$store.dispatch("createPost", { ...this.newPost });

      console.log(this.createdAt)
      console.log(this.createdBy)
      this.$router.push('/post');
    },
  },
  computed: {
    ...mapState(["user"]),
  },
  // mounted(){
  //   this.newPost.createdBy = this.user.email;
  // },
};
</script>

<template>
  <!-- <div v-for="cat in allCategories" :key="cat.id"> {{ cat.title }}</div> -->
  <div class="flex justify-center">
    <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg">
      <input type="hidden" v-model="createdAt" />
      <input type="hidden" v-model="createdBy" />
      <div class="flex flex-col">
        <div class="from-group mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">Name:</label>
          <input id="name" required v-model="newPost.name" class="bg-gray-200 p-2 rounded-lg" />
        </div>
        <div class="from-group">
          <label for="description" class="block text-gray-700 font-medium mb-2">Description:</label>
          <input id="description" required v-model="newPost.description" class="bg-gray-200 p-2 rounded-lg" />
        </div>
        <div class="from-group">
          <label for="description" class="block text-gray-700 font-medium mb-2">Likes:</label>
          <input id="description" type="number" required v-model="newPost.likes" class="bg-gray-200 p-2 rounded-lg" />
        </div>
      </div>
      <button class="bg-indigo-500 text-white my-2 py-2 px-4 rounded-lg hover:bg-indigo-600" > Create </button>
      <router-link to="/category"><button class="bg-indigo-500 text-white my-2 py-2 px-4 rounded-lg hover:bg-indigo-600" >Back to list</button></router-link
      >
    </form>
  </div>
</template>
