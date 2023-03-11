<script>
    export default {
        methods: {
            async handleLoginUser() {
                this.$store.dispatch('loginUser', {
                    email: this.email,
                    password: this.password
                });
                this.$router.push('/');

            }
        },
        data() {
            return {
                email: '',
                password: '',
                errors:{},
            }
        }
    }
</script>

<template>
    <!-- <h1>Login view</h1> -->

    <!-- <form @submit.prevent="handleLoginUser">
        <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" type="email" required v-model="email">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" required v-model="password">
        </div>
        <div class="controlls">
            <button>Login</button>
        </div>
    </form> -->
<!-- <div class="flex justify-center">
    <form class="bg-white p-6 rounded-lg" @submit.prevent="handleLoginUser">
        <h2 class="text-lg font-medium mb-4">Login</h2>
        <div class="from-group mb-4">
            <label for="email" class="text-gray-700 font-medium mb-2">Email:</label>
            <input id="email" type="email" required v-model="email" class="bg-gray-200 p-2 rounded-lg w-full" />
        </div>
        <div class="from-group mb-4">
            <label for="password" class="text-gray-700 font-medium mb-2">Password:</label>
            <input id="password" type="password" required v-model="password" class="bg-gray-200 p-2 rounded-lg w-full" />
        </div>
        <button class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">Log In</button>
    </form>
</div> -->
<div class="flex justify-center  h-screen">
    <!-- <div class="w-full max-w-xs mx-auto ">
        <form @submit.prevent="handleLoginUser" class=" p-6 rounded-lg bg-slate-500" >
            <h2 class="text-lg font-medium mb-4 text-center">Login</h2>
            <div class="from-group mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email:</label>
                <input id="email" type="email" required v-model="email" class="bg-gray-200 p-2 rounded-lg w-full" />
            </div>
            <div class="from-group mb-4">
                <label for="password" class="block text-gray-700 font-medium mb-2">Password:</label>
                <input id="password" type="password" required v-model="password" class="bg-gray-200 p-2 rounded-lg w-full" />
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600">
                    Log In
                </button>
                <a class="inline-block align-baseline font-medium text-sm text-black hover:text-indigo-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    </div> -->
    <section class="text-gray-400 bg-gray-900 body-font w-full px-20 ">
      <form @submit.prevent="handleLoginUser" class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-white">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
          <p class="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-600 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-white text-lg font-medium title-font mb-5">Sign In</h2>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
            <input v-model="email" type="email" id="email" name="email" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="password" class="leading-7 text-sm text-gray-400">Password</label>
            <input v-model="password" type="password" id="password" name="password" class="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <button type="submit" class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
          <p class="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p>
        </div>
      </form>
    </section>
</div>


        

    
</template>