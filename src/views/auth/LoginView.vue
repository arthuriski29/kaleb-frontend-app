<template>
    <div class="w-full flex justify-center items-center p-5 my-11">
      <div class="lg:w-[700px] border rounded-sm shadow-sm p-5 py-11 lg:px-11 flex flex-col gap-3">
        <div class="w-full flex justify-center items-center">
          <img :src="imgLogo" alt="logo" class="w-[300px] pb-3" />
        </div>
        <div class="w-full text-black text-2xl font-semibold text-center tracking-wide">
          Selamat Datang
        </div>
        <div class="text-black text-base text-center tracking-tight">
          Belum punya akun Kaleb? 
          <RouterLink to="/auth/register" class="text-primary font-bold">
            Register Disini
          </RouterLink>
        </div>

        <form @submit.prevent="login" class="w-full flex flex-col gap-6 text-black">
          <div class="w-full flex flex-col gap-2">
            <label htmlFor="input-email" class="text-black">
              <span class="text-red-600">*</span> Email
            </label>
            <input
              v-model="form.username"
              type="text"
              id="input-email"
              class="input input-bordered input-accent border-slate-300"
              placeholder="Masukan email anda"
            />
          </div>
          <div class="w-full flex flex-col gap-2">
            <label htmlFor="input-password" class="text-black">
              <span class="text-red-600">*</span> Password
            </label>
            <input
              v-model="form.password"
              id="input-password"
              type="password"
              class="input input-bordered input-accent border-slate-300"
              placeholder="Masukan kata sandi"
            />
          </div>

          
          <p v-if="error" class="text-red-500 text-xs italic">{{ error }}</p>
          <div class="w-full">
            <button type="submit" class="btn btn-primary text-white text-lg font-semibold capitalize w-full">
              Login
            </button>
          </div>
         
        </form>
      </div>
    </div>
</template>
<script setup lang="ts">
  import imgLogo from '../../assets/images/kaleb-image.png'
  import { RouterLink, useRouter } from 'vue-router';
  import { ref } from 'vue'
  import http from '@/services/http.ts'

  const router = useRouter()

  const form = ref({
    username: '',
    password: ''
  })

  const error = ref('')

const login = async () => {
  try {
    const response = await http().post('http://localhost:3000/login', form.value)
    const token = response.data.token
    console.log('Login successful', response.data)
    localStorage.setItem('token', token)
    router.push('/')
  } catch (error) {
    console.error('Error logging in', error)
    error.value = error.response.data.message[0] || 'Failed to log in'
  }
}

</script>