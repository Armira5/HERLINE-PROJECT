<template>
  <!-- <nav class="bg-gray-800">
    <div class="container mx-auto px-6 py-4 flex items-center justify-between">
      <div class="w-1/5">
        <router-link to="/" class="text-white font-medium text-2xl">My App</router-link>
      </div>
      <div class="w-4/5 flex justify-end">
        <router-link to="/" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Home</router-link>
        <router-link to="/admin" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Admin</router-link>
        <router-link to="/about" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">About</router-link>
        <router-link to="/category" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Category</router-link>
        <router-link to="/post" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Post</router-link>
        <router-link to="/register" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg" v-if="!user">Register</router-link>
        <router-link to="/login" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg" v-if="!user">Login</router-link>
        <button class="text-white font-medium px-4 py-2 hover:bg-red-500 rounded-lg" v-if="user" @click="handleLogout">Logout</button> 
        <label for="check" class="float-right text-white"></label>
      </div>
    </div>
  </nav> -->




  <!-- <nav class="bg-gray-800">
  <div class="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
    <div class="w-full md:w-auto">
      <router-link to="/" class="text-white font-medium text-2xl">My App</router-link>
    </div>
    <div class="w-full md:w-auto  flex justify-end">
        <router-link to="/" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Home</router-link>
        <router-link to="/admin" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Admin</router-link>
        <router-link to="/about" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">About</router-link>
        <router-link to="/category" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Category</router-link>
        <router-link to="/post" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Post</router-link>
        <router-link to="/register" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg" v-if="!user">Register</router-link>
        <router-link to="/login" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg" v-if="!user">Login</router-link>
        <button class="text-white font-medium px-4 py-2 hover:bg-red-500 rounded-lg" v-if="user" @click="handleLogout">Logout</button> 
      
      <button class="md:hidden text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg focus:outline-none" id="menu-btn">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="!showMenu" class="heroicon-ui" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          <path v-if="showMenu" class="heroicon-ui" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="md:hidden " id="hidden">
  <nav class="md:hidden md:flex-grow">
    <router-link to="/" class="block md:inline-block text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Home</router-link>
    <router-link to="/admin" class="block md:inline-block text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Admin</router-link>
    <router-link to="/about" class="block md:inline-block text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">About</router-link>
    <router-link to="/category" class="block md:inline-block text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Category</router-link>
    <router-link to="/post" class="block md:inline-block text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg">Post</router-link>
  </nav>
  <div class="lg:hidden flex lg:items-center md:justify-center mt-4 md:mt-0">
    <router-link to="/register" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg" v-if="!user">Register</router-link>
    <router-link to="/login" class="text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg" v-if="!user">Login</router-link>
    <button class="text-white font-medium px-4 py-2 hover:bg-red-500 rounded-lg" v-if="user" @click="handleLogout">Logout</button> 
  </div>
</div>

</nav> -->




  <!-- <nav class="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </router-link>
      <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <router-link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/admin" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin</router-link>
          </li>
          <li>
            <router-link to="/about" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</router-link>
          </li>
          <li>
            <router-link to="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->



  <div class="py-3.5 px-6 shadow md:flex justify-between items-center bg-gray-800">
    <div class="flex items-left cursor-pointer px-3">
      <router-link to="/"><h1 class="head__title">{{ title }}</h1>
    <img class="head__logo" alt="Vue logo" src="../assets/logo.png"/></router-link>
    </div>

    <span class="absolute md:hidden right-6 top-1.5 cursor-pointer text-white" @click="MenuOpen()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round"  :d="[open ? 'M6 18L18 6M6 6l12 12': 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5']" />
      </svg>
    </span>

    <ul class="md:flex md:items-center md:px-0 px-8 md:pb-0 pb-15 md:static absolute bg-gray-800 md:w-auto w-full top-14 duration-200 ease-in" :class="[open ? 'left-0 top-14 pb-5 z-10' : 'top-[-100%] left-0']">
      <li class=" md:my-0 my-6 pl-6"><router-link @click="MenuOpen()" to="/" class=" font-medium text-white dark:hover:text-gray-400">Home</router-link></li>
      <li v-if="userRole=='admin'" class=" md:my-0 my-6 pl-6"><router-link @click="MenuOpen()" to="/admin/dashboard"  class=" font-medium text-white dark:hover:text-gray-400">Admin</router-link></li>
      <li class=" md:my-0 my-6 pl-6"><router-link @click="MenuOpen()" to="/about" class=" font-medium text-white dark:hover:text-gray-400">About</router-link></li>
      <li class=" md:my-0 my-6 pl-6"><router-link @click="MenuOpen()" to="/register" class=" font-medium text-white dark:hover:text-gray-400" v-if="!user">Register</router-link></li>
      <li class=" md:my-0 my-6 pl-6"><router-link @click="MenuOpen()" to="/login" class=" font-medium text-white dark:hover:text-gray-400" v-if="!user">Login</router-link></li>
      <li class=" md:my-0"><button to="/login" class="text-white font-medium px-4 py-1.5 bg-red-500 hover:bg-red-700 rounded-lg" v-if="user" @click="handleLogout">Logout</button> </li>
    </ul>
  </div>
</template> 

<script>
import { getAuth, signOut } from '@firebase/auth';
import { mapGetters, mapState } from 'vuex';
import { ref } from 'vue';
export default {
  data() {
    return {
      itle: 'New ubt site',
      showMenu: false,
      sMenuOpen: false,
    }
  },
  methods: {
    handleLogout() {
      console.log(this.currentUserEmail)
      signOut(getAuth());
      this.$router.push('/login');
    }
  },
  computed: {
    ...mapGetters(['numberOfPosts', 'currentUserEmail', 'username']),
    // user: this.$store.state.user,
    ...mapState(['user']),
    ...mapState(['userRole']),
  },
  setup() {
    let open = ref(true)
    function MenuOpen() {
      open.value = !open.value;
    }
    return{open,MenuOpen}
  }
};
</script>

<style>
 .head__title{
        font-size: 2rem;
    }
    .head__logo{
        max-width: 100px;
        margin-left: 1rem;
    }

</style>