<template>
  <div class="w-full flex justify-center items-center p-5 my-11">
      <div class="lg:w-[700px] border rounded-sm shadow-sm p-5 py-11 lg:px-11 flex flex-col gap-3">
        <div class="w-full flex justify-center items-center">
          <img :src="imgLogo" alt="logo" class="w-[300px] pb-3" />
        </div>
        <div class="w-full text-black text-2xl font-semibold text-center tracking-wide">
          Daftar & Mulai Menjelajah
        </div>
        <div class="text-black text-base text-center tracking-tight">
          Sudah punya akun Kaleb? 
          <RouterLink to="/auth/login" class="text-primary font-bold">
            Login Disini
          </RouterLink>
        </div>

        <form @submit.prevent="register" class="w-full flex flex-col gap-6 text-black">
          <div class="w-full flex flex-col gap-2">
            <label htmlFor="input-name" class="text-black">
              <span class="text-red-600">*</span> Name
            </label>
            <input
              v-model="form.name"
              @blur="handleNameInput"
              type="text"
              id="input-name"
              class="input input-bordered input-accent border-slate-300"
              placeholder="Masukan nama lengkap..."
            />
          </div>
          <p v-if="errors.name" class="text-red-500 text-xs italic">{{ errors.name }}</p>
          <div class="w-full flex flex-col gap-2">
            <label htmlFor="input-username" class="text-black">
              <span class="text-red-600">*</span> Username
            </label>
            <input
              v-model="form.username"
              @blur="handleUsernameInput"
              type="text"
              id="input-email"
              class="input input-bordered input-accent border-slate-300"
              placeholder="Masukan username..."
            />
          </div>
          <p v-if="errors.username" class="text-red-500 text-xs italic">{{ errors.username }}</p>
          <div class="w-full flex flex-col gap-2">
            <label htmlFor="input-password" class="text-black">
              <span class="text-red-600">*</span> Password
            </label>
            <input
              v-model="form.password"
              @input="handlePasswordInput"
              id="input-password"
              type="password"
              class="input input-bordered input-accent border-slate-300"
              placeholder="Masukan kata sandi..."
            />
          </div>
          <p v-if="errors.password" class="text-red-500 text-xs italic">{{ errors.password }}</p>

          <div class="w-full">
            <button type="submit" class="btn btn-primary text-white text-lg font-semibold capitalize w-full">
              Register
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
    name: '',
    username: '',
    password: '',
  })

  const errors = ref({
    name: '',
    username: '',
    password: ''
  })

  const validateName = (name: string) => {
    // Check if name is empty
    if (!name.trim()) {
      return false
    }
    
    return true
  }

  const validateUsername = (username: string) => {
    // Check if username is empty
    if (!username.trim()) {
      return false
    }
    // Check if username contains spaces
    if (username.indexOf(' ') !== -1) {
      return false
    }
    return true
  }

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return regex.test(password)
  }

  // Event listeners for input fields
  const handleNameInput = (event: Event) => {
    const input = event.target as HTMLInputElement
    errors.value.name = validateName(input.value)
  }

  const handleUsernameInput = (event: Event) => {
    const input = event.target as HTMLInputElement
    errors.value.username = validateUsername(input.value)
  }

  const handlePasswordInput = (event: Event) => {
    const input = event.target as HTMLInputElement
    errors.value.password = validatePassword(input.value) ? '' : 'Password must be at least 8 characters long and include a number, an uppercase letter, a lowercase letter, and a special character'
  }

  const register = async() => {

    // Reset errors
    errors.value.name = ''
    errors.value.username = ''
    errors.value.password = ''

    // Validate name
    if (!validateName(form.value.name)) {
      errors.value.name = 'Name cannot be empty and must not contain spaces'
    }
    // Validate email
    if (!validateUsername(form.value.username)) {
      errors.value.username = 'Username cannot be empty and must not contain spaces'
    }

    // Validate password
    if (!validatePassword(form.value.password)) {
      errors.value.password = 'Password must be at least 8 characters long and include a number, an uppercase letter, a lowercase letter, and a special character'
    }

    try {
      const response = await http().post('http://localhost:3000/register', form.value)
      console.log('Registration successful', response.data)
      router.push('/auth/login')
    } catch (error) {
      console.log('Error registering', error)
    }
  }
</script>