<!-- eslint-disable vue/require-v-for-key -->


<template>

  <div class="grid gap-4 grid-cols-3 w-full p-[10px]">
    <div v-for="post in postData" ::key="post._id" class="flex flex-col justify-start gap-4 border-2 border-black px-[10px] py-[15px]">
      <div class="flex gap-2">
        <div class="flex-1">id</div>
        <div class="flex-1">{{post._id}}</div>
      </div>
      <div class="flex gap-2">
        <div class="flex-1">name</div>
        <div class="flex-1">{{post.name}}</div>
      </div>
      <div class="flex gap-2">
        <div class="flex-1">email</div>
        <div class="flex-1">{{post.username}}</div>
      </div>
    </div>
  </div>


</template>


<script setup lang="ts">
import http from '@/services/http.ts'
import { onMounted, ref } from 'vue'

const postData = ref([])

const getPost = async() => {
  const response = await http().get('http://localhost:3000/getAccount')
  return response.data.results
}

onMounted(async()=>{
  postData.value = await getPost()

})
</script>




