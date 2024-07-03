<script setup lang="ts">
    import imgLogo from '../assets/images/kaleb-image.png'
</script>

<template>
   <section class="w-full flex justify-center items-center px-2 md:px-0">
      <div class="w-full max-w-[1080px] flex flex-col justify-center items-center">
        <div class="w-full flex flex-col lg:flex-row justify-between items-start gap-11 py-11 border-b-2">
          <div class="w-full lg:w-96 flex flex-col gap-7">
            <div>
              <img :src="imgLogo" class="w-[320px]" alt="" />
            </div>
            <div class="text-black">
              Kaleb Furniture is a modern, dynamic, and flexible Indonesia Furniture Manufacturer Company that focuses on the International Market and was established in 2004 in Jakarta. It has an office in Jaya Building 9th Floor, JL. MH. Thamrin no 12, Menteng, Central Jakarta.

We design and manufacture bespoke furniture projects for our clients with a focus on quality, innovative design, and impeccable delivery. Our key divisions of scope include retail, residential, corporate, commercial, and hospitality furniture.
            </div>
          </div>
          
        </div>
        <div class="py-8 w-full flex flex-row justify-between lg:flex-row items-center">
          <div class="text-black w-full flex justify-start items-center">
            <div class="font-semibold">© 2020 - 2024 Kaleb.</div>
            <div>All Rights Reserved</div>
          </div>
          <div class="flex flex-col md:flex-row justify-end items-start text-black lg:gap-5 w-full pb-2 md:pb-0">
            <div>+6281132010888</div>
            <div>hello@kaleb.com</div>
          </div>
        </div>
      </div>
    </section>
</template>