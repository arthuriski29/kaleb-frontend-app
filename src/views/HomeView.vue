<!-- eslint-disable vue/require-v-for-key -->


<template>
  <HeaderComponent/>

  <div class="w-full flex flex-col  p-5 my-11">
    <div class="justify-center items-center border rounded-sm shadow-sm p-5 py-11 lg:px-11 flex flex-col gap-3">
      <div>Daftar Account</div>
    </div>
    <!-- <div class="grid gap-4 grid-cols-3 grid-rows-3 w-full p-[10px]">
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
    </div> -->
    <UserList/>
  </div>


  <FooterComponent/>
</template>


<script setup lang="ts">

import UserList from '@/components/data/UserList.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>




