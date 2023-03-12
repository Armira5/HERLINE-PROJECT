<template>
    <h1>This is Product page</h1>
    <div class="w-full sm:w-1/2 ">
        <img v-bind:src="photoUrl" width="372px" height="372px" alt="Photo"
             class="w-full h-auto object-fill  rounded-lg shadow-md">
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            Dress: {},
            // photoName:Dress.photoName,
        }
    },
    methods: {
        formattedDate() {
            const date = this.Dress.createdAt
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            };
            return date.toLocaleString('en-US', options);
        },
    },
    created() {
        let apiURL = `http://localhost:3000/dresses/640d244ef662001d7798fbc0`;

        axios.get(apiURL).then((res) => {
            this.Dress = res.data;
            // console.log(res.data)
        });
    },
    computed: {
        photoUrl() {
            return `http://localhost:3000/uploads/dresss/${this.Dress.photoName}`; // Construct the photo URL
        }
    }
}
</script>