<script>
import axios from "axios"
    export default {
        data() {
            return {
                    name: '',
                    email: '',
                    password: '',
                loading: false,
            }
        },
        methods: {
            async handleRegisterUser() {
                 this.$store.dispatch('registerUser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });
                this.$router.push('/login');    
            }
        },
    }
</script>

<template>
<!-- <div class="flex justify-center items-center py-36">
    <div class="w-full max-w-xs mx-auto ">
        <form @submit.prevent="handleRegisterUser"  class=" p-6 rounded-lg bg-slate-500">
            <h2 class="text-lg font-medium mb-4 text-center">Register</h2>
            <div class="form-group mb-4">
                <label class="block text-white font-medium mb-2" for="name">Name</label>
                <input lass="bg-gray-200 p-2 rounded-lg w-full" id="name" v-model="name" />
            </div>
            <div class="form-group mb-4">
                <label class="block text-white font-medium mb-2" for="email">Email</label>
                <input lass="bg-gray-200 p-2 rounded-lg w-full" id="email" type="email" required v-model="email" />
            </div>
            <div class="form-group mb-4">
                <label class="block text-white font-medium mb-2" for="password">Password</label>
                <input lass="bg-gray-200 p-2 rounded-lg w-full" id="password" type="password" required v-model="password" />
            </div>
            <div class="flex items-center justify-between">
                <button :disabled="loading" class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                    Register
                </button>
                <a class="inline-block align-baseline font-medium text-sm text-black hover:text-indigo-800" href="/login">
                    New here? Login
                </a>
            </div>
        </form>
    </div>
</div> -->
    <section class="text-white-400 bg-red-100 body-font w-full px-20 ">
          <form @submit.prevent="handleRegisterUser" class="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 class="title-font font-medium text-3xl text-white">Fashion is what you're offered four times a year by designers. And style is what you choose.</h1>
              <p class="leading-relaxed mt-4">How can you live the high life if you do not wear the high heels?</p>
            </div>
            <div class="lg:w-2/6 md:w-1/2 bg-gray-600 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 class="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-white">Name</label>
                <input v-model="name" type="text" id="name" name="name" class="w-full bg-pink-100 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-100 rounded border border-red-300 focus:border-red-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
              <div class="relative mb-4">
                <label for="email" class="leading-7 text-sm text-white">Email</label>
                <input v-model="email" type="email" id="email" name="email" class="w-full bg-pink-100 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-100 rounded border border-red-300 focus:border-red-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
              <div class="relative mb-4">
                <label for="password" class="leading-7 text-sm text-white">Password</label>
                <input v-model="password" type="password" id="password" name="password" class="w-full bg-pink-100 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-pink-100 rounded border border-red-300 focus:border-red-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
              <button  class="text-white bg-red-300 border-0 py-2 px-8 focus:outline-none hover:bg-red-400 rounded text-lg">Register</button>
              <p class="text-xs mt-3"></p>
            </div>
          </form>
        </section>
</template>
