<template>
    <div class="w-full flex justify-center items-center p-5 my-11">
      <div class="lg:w-[700px] border rounded-sm shadow-sm p-5 py-11 lg:px-11 flex flex-col gap-3">
        <div class="w-full flex justify-center items-center">
          <img :src="imgLogo" alt="logo" class="w-32 pb-3" />
        </div>
        <div class="w-full text-black text-2xl font-semibold text-center tracking-wide">
          Selamat Datang
        </div>
        <div class="text-black text-base text-center tracking-tight">
          Belum punya akun Fazztrack? 
          <RouterLink to="/auth/register" class="text-primary font-bold">
            Daftar Disini
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

          <!-- <div class="w-full flex items-center justify-between">
            <div class="flex justify-start items-center gap-2">
              <input id="ingat-saya" type="checkbox" class="w-4 h-4" />
              <label htmlFor="ingat-saya" class="text-black">
                Ingat Akun Saya
              </label>
            </div>
            <RouterLink to='/' class="text-secondary text-base font-bold">
              Lupa Password?
            </RouterLink>
          </div> -->

          <div class="w-full">
            <button type="submit" class="btn btn-primary text-white text-lg font-semibold capitalize w-full">
              Masuk
            </button>
          </div>
          <!-- <div class="w-full text-center font-base text-black">
            Atau masuk menggunakan
          </div> -->
          <!-- <div class="w-full">
            <button class="btn btn-neutral hover:bg-slate-200 hover:border-slate-300 border-slate-200 bg-white w-full text-black capitalize text-lg font-semibold">
              <FcGoogle size={22} /> Google
            </button>
          </div> -->
        </form>
      </div>
    </div>
</template>
<script setup lang="ts">
  import imgLogo from '../../assets/images/fazztrack.svg'
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue'
  import http from '@/services/http.ts'

  const form = ref({
  username: '',
  password: ''
})

const login = async () => {
  try {
    const response = await http().post('http://localhost:3000/login', form.value)
    console.log('Login successful', response.data)
  } catch (error) {
    console.error('Error logging in', error)
  }
}

</script>