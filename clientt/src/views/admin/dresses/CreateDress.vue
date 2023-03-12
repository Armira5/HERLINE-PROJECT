<script>
import Joi from "joi"
import Flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.css";
// import "flatpickr/dist/themes/dark.css";
import { mapGetters, mapState } from 'vuex';
import axios from "axios";
// require("flatpickr/dist/themes/dark.css");

export default {
    data() {
        return {
            title: "createDress",
            newDress:{
                name:'',
                color:'',
                size:'', 
                price:'',
                brand:'',
                // createdBy: this.currentUserEmail,
                createdAt: '',
                photo: '',
                photoName: '',
                status:'visible',
            },
            photoUploadError: '',
            dressSchema: Joi.object({
                name: Joi.string().min(3).max(30).required(),
                color: Joi.string().required(),
                size: Joi.string().min(3).max(30).required(),
                price: Joi.string().min(10).max(100).required(),
                brand: Joi.string().max(100),
                photo: Joi.any().required(),
                photoName: Joi.string().regex(/^(\d{2})(\d{2})(\d{4}):(\d{2})(\d{2})\.(jpeg|png)$/).required(),
                // createdBy: Joi.string().max(100),
                createdAt: Joi.any(),
                status: Joi.string().required(),
            }),
            errors: {},
        }
    },
    methods: {
        async handleCreateCase() {
            console.log(this.newDress)
            this.errors = {};
            let apiURL = "http://localhost:3000/dresses/create";
            const { error, value } = this.dressSchema.validate(this.newDress, { abortEarly: false });
            if (error) {
                error.details.forEach((detail) => {
                    console.log(this.errors)
                    this.errors[detail.path[0]] = detail.message;
                });
                return;
            }
            const formData = new FormData();
            formData.append('name', this.newDress.name);
            formData.append('color', this.newDress.color);
            formData.append('size', this.newDress.size);
            formData.append('price', this.newDress.price);
            formData.append('brand', this.newDress.brand);
            formData.append('notes', this.newDress.notes);
            formData.append('status', this.newDress.status);
            formData.append('photo', this.$refs.fileInput.files[0]);
            formData.append('photoName', this.newDress.photoName);
            // formData.append('createdBy', this.currentUserEmail);
            console.log(formData)
            const response = await axios.post(apiURL, formData, {})
                console.log(this.currentUserEmail)

            // this.$router.push('/admin/case-management');
        },
        validateFile(event) {
            const file = event.target.files[0];
            console.log(file)
            if (!file.type.includes('image/')) {
                alert('Invalid file type. Please upload a JPEG or PNG file.');
                this.$refs.fileInput.value = '';
                return;
            }
            this.newDress.photo = file;
            function generateFileName() {
                const date = new Date();
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear().toString();
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                return `${day}${month}${year}:${hours}${minutes}`;
            }
            this.newDress.photoName = `${generateFileName()}.${file.type.split('/')[1]}`;
        },
        clearErrors() {
            this.errors = {};
        },
    },
    mounted() {
        const options = {
            dateFormat: "d-m-Y H:i",
            maxDate: "today",
            enableTime: true,
            
            // add additional options here
        };
        const dateInput = this.$refs.dateInput;
        this.datePicker = new Flatpickr(dateInput, options);
    },
    computed: {
        ...mapGetters(['username', 'currentUserEmail']),
    }

}
</script>
<template >
    <router-link :to="`/admin/dresses`">
        <button type="button" class="bg-gray-800 text-white py-2 px-4 my-2 mx-2 rounded-lg" >
            Back
        </button>
    </router-link>
    <div class="flex justify-center pt-0 ">
        <form @submit.prevent="handleCreateCase" enctype="multipart/form-data" class="w-5/6 lg:w-4/6 xl:w-3/6 flex border-2 border-gray-600 bg-gray-700 p-6 rounded-xl flex-col justify-center">
                <div class="text-center text-gray-400 text-lg py-3">
                    <h2>Create Case</h2>
                </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                  <div class="relative z-0 w-full mb-6 group">
                      <input type="text" v-model="newDress.name" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                      <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                      <div v-if="this.errors.name" class="text-red-500">{{ this.errors.name }}</div>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                      <input type="text" v-model="newDress.color" name="color" id="color" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                      <label for="color" class="peer-fpocus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Color</label>
                      <div v-if="this.errors.color" class="text-red-500">{{ this.errors.color }}</div>
                  </div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                  <input type="text" v-model="newDress.size" name="size" id="floating_size" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                  <label for="floating_size" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Size of the dress</label>
                  <div v-if="this.errors.size" class="text-red-500">{{ this.errors.size }}</div>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                  <input type="text" v-model="newDress.price" name="price" id="floating_price" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                  <label for="floating_price" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price of the dress</label>
                  <div v-if="this.errors.price" class="text-red-500">{{ this.errors.price }}</div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <!-- <div class="relative z-0 w-full mb-6 group">
                    <input type="text" v-model="newDress.brand" name="brand" id="brand" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="brand" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand</label>
                    <div v-if="this.errors.brand" class="text-red-500">{{ this.errors.brand }}</div>
                </div> -->
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-6 group">
                    <input type="text" v-model="newDress.brand" name="brand" id="brand" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="brand" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Brand</label>
                    <div v-if="this.errors.brand" class="text-red-500">{{ this.errors.brand }}</div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="file" v-on:change="validateFile" name="photo" ref="fileInput" id="photo" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                    <label for="photo" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo/Video</label>
                    <div v-if="this.errors.photo" class="text-red-500">{{ this.errors.photo }}</div>
                </div>
              </div>
              <div class="flex justify-end w-full">
                <router-link :to="`/admin/dresses`">
                    <button type="button" class="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 mx-2 rounded-lg">
                        Back
                    </button>
                </router-link>
                <button type="reset" @click="clearErrors" class="text-white mr-3 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">Cancel</button>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </div>
        </form>
    </div>
</template>

<style >
    
</style>