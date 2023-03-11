<template>
    <div>
        <form @submit.prevent="handleCreateEvidence" enctype="multipart/form-data">
            <input v-on:change="validateFile" type="file" name="photo" ref="photo">
            <button type="submit" >submit</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            upload:{
                photo:'',
                photoName:'',
            },
        }
    },
    methods:{
        async handleCreateEvidence() {
            const formData = new FormData();
            formData.append('photo', this.$refs.photo.files[0])
            console.log(this.upload.photo)
            const response = await axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
        },
        validateFile(event) {
            const file = event.target.files[0];
            if (!file.type.includes('image/')) {
                alert('Invalid file type. Please upload a JPEG or PNG file.');
                this.$refs.photo.value = '';
                return;
            }
            this.upload.photo = file;
            function generateFileName() {
                const date = new Date();
                const day = date.getDate().toString().padStart(2, '0');
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const year = date.getFullYear().toString();
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                return `${day}${month}${year}:${hours}${minutes}`;
            }
            this.upload.photoName = `${generateFileName()}.${file.type.split('/')[1]}`;
        },
    }
}
</script>
<style>
    
</style>