<script>
// import { def } from '@vue/shared';
// import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut} from "firebase/auth"
    import LoadingIndicator from '@/components/LoadingIndicator.vue';
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
                this.loading = true;
                await this.$store.dispatch('registerUser', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });

                this.loading = false;
                this.$router.push('/login');

                
            }
        },
        components: {
            LoadingIndicator
        }
    }
</script>
<template>
    <main class="register-area">
        <h2>Register new user</h2>
        <form @submit.prevent="handleSubmit" class="register-form">
            <LoadingIndicator v-if="loading" />

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
    </main>
</template>

<style scoped>
    .register-area {
        border-radius: 5px;
        background-color: rgb(107, 144, 255);
        max-width: 350px;
        margin: 2rem auto;
        padding: 2rem;
        color: white;
    }
    .register-form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 1.25rem;
    }

    h2 {
        margin-bottom: 1.5rem;
    }

    label {
        min-width: 120px;
        display: inline-block;
    }

    input {
        padding: .5rem .75rem;
        border-radius: 20px;
        border: none;
    }

    .controlls > button {
        cursor: pointer;
        color: inherit;
        padding: 0.65rem 0.75rem;
        text-transform: uppercase;
        background-color: goldenrod;
        border: none;
        font-weight: 500;
        letter-spacing: 2px;
        border-radius: 20px;
        display: block;
        margin: 0 auto;
    }
</style>