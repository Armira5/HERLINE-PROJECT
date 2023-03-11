<script>
export default {
    data() {
        return {
            newCategory: {
                title: '',
                description: ''
            },
            allCategories: this.$store.state.categories,
        }
    },
    methods: {
        async handleCreateCategory() {
            this.$store.dispatch('createCategory', { ...this.newCategory })
            this.$router.push('/category');
        }
    }
}
</script>

<template>
    <!-- <div v-for="cat in allCategories" :key="cat.id"> {{ cat.title }}</div> -->
<div class="flex justify-center">
    <form @submit.prevent="handleCreateCategory" class="bg-white p-6 rounded-lg">
  <div class="flex flex-col">
    <div class="from-group mb-4">
      <label for="name" class="block text-gray-700 font-medium mb-2">Name:</label>
      <input id="name" v-model="newCategory.title" class="bg-gray-200 p-2 rounded-lg" />
    </div>
    <div class="from-group">
      <label for="description" class="block text-gray-700 font-medium mb-2">Description:</label>
      <input id="description" v-model="newCategory.description" class="bg-gray-200 p-2 rounded-lg" />
    </div>
  </div>
  <button class="bg-indigo-500 text-white my-2 py-2 px-4 rounded-lg hover:bg-indigo-600">Create</button>
    <router-link to="/category"><button class="bg-indigo-500 text-white my-2 py-2 px-4 rounded-lg hover:bg-indigo-600">Back to list</button></router-link>
</form>
</div>
    


</template>
