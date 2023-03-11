<script>
import { getAuth, signInUserWithEmailAndPassword,updateProfile } from '@firebase/auth';
export default {
    methods:{
        async handleSubmit(){
                const auth = getAuth();
                const result = await signInUserWithEmailAndPassword(auth,this.email,this.password);
                console.log(result)
                await updateProfile(result.user,{
                    displayName:this.name
                })

                // thi
            }
    },
    data() {
        return {
            user:null,
            email:"",
            password:""
        }
    },
}
</script>
<template >
    <div>
        <form @submit.prevent="handleSubmit" class="register-form">
            <div class="form-group">
                <label for="name" >Name</label>
                <input id="name" v-model="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" type="password" v-model="password" required />
            </div>

            <div class="controlls">
                <button>Register</button>
            </div>
        </form>
    </div>
</template>

<style >
    
</style>