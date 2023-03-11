<script>
import axios from 'axios';
export default {
    data() {
        return {
            categories:[],
        }
    },
    methods: {
        async handleUpdateCategory() {
            // let apiURL = `http://localhost:3000/categories/${this.$route.params.id}`;

            // axios.put(apiURL, this.student).then((res) => {
            //     console.log(res);
            //     this.$router.push("/view");
            //     }).catch((error) => {
            //     console.log(error);
            //     });
            const res = await fetch(`http://localhost:3000/categories/${this.$route.params.id}`, {
                method: "put",
                body: JSON.stringify(this.categories),
                headers: {
                "Content-Type": "application/json",
                },
            });
          this.$router.push("/category");
        }
    },
    created() {
    let apiURL = `http://localhost:3000/categories/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.categories = res.data;
    });
  },
}
</script>

<template>
    <!-- <div v-for="cat in allCategories" :key="cat.id"> {{ cat.title }}</div> -->
<div class="flex justify-center">
    <form @submit.prevent="handleUpdateCategory" class="bg-white p-6 rounded-lg">
  <div class="flex flex-col">
    <div class="from-group mb-4">
      <label for="name" class="block text-gray-700 font-medium mb-2">Name:</label>
      <input id="name" v-model="categories.title" class="bg-gray-200 p-2 rounded-lg" />
    </div>
    <div class="from-group">
      <label for="description" class="block text-gray-700 font-medium mb-2">Description:</label>
      <input id="description" v-model="categories.description" class="bg-gray-200 p-2 rounded-lg" />
    </div>
  </div>
  <button class="bg-indigo-500 text-white my-2 py-2 px-4 rounded-lg hover:bg-indigo-600">Update</button>
    <router-link to="/category"><button class="bg-indigo-500 text-white my-2 py-2 px-4 rounded-lg hover:bg-indigo-600">Back to list</button></router-link>
</form>
</div>
    


</template>
