<script lang="ts" setup>
    import imgLogo from '../assets/images/fazztrack.svg'
    import { RouterLink } from 'vue-router';
</script>
<template>
    <section>
      <nav class="w-full flex flex-col justify-center items-center shadow-md">
        <div class="w-full max-w-[1080px] flex justify-between items-center px-5 xl:px-0 py-4">
          <div class="flex justify-start items-center gap-16">
            <img :src="imgLogo" alt="" class="w-32" />
            <div class="hidden lg-block">
              <ul class="menu lg:menu-horizontal rounded-box text-black">
                <li>
                  <details>
                    <summary class="font-bold">Kelas</summary>
                    <ul class="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary class="font-bold">Dukungan</summary>
                    <ul class="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary class="font-bold">Tentang</summary>
                    <ul class="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary class="font-bold">Corporate</summary>
                    <ul class="w-72">
                      <li>
                        <p>BOOTCAMP</p>
                      </li>
                      <li>
                        <a>Fullstack Mobile</a>
                      </li>
                      <li>
                        <a>Fullstack Web dan Golang</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
          <div class="hidden lg:flex gap-3 justify-center items-center">
            <RouterLink
              to="/auth/login"
              class="btn btn-neutral w-20 bg-slate-100 hover:bg-slate-200 hover:border-secondary capitalize text-secondary font-bold border border-secondary"
            >
              Masuk
            </RouterLink>
            <RouterLink
              to="/auth/register"
              class="btn btn-secondary w-20 capitalize text-white font-bold border border-secondary"
            >
              Daftar
            </RouterLink>
          </div>
        </div>
      </nav>
      <div class="w-full flex justify-center items-center py-3 bg-primary/30">
        <div class="text-black text-center">
          Belum siap ikut test?
          <RouterLink to='/' class="text-primary font-bold underline">
            Ikut Kelas Persiapan Bootcamp
          </RouterLink>
        </div>
      </div>
    </section>
</template>