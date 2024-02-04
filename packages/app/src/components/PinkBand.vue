<script lang="ts" setup>
defineProps({
  type: String,
  img: String,
  title: String,
  description1: String,
  description2: String
})
</script>

<template>
   <section class="h-1/2 md:h-1/3 relative my-10">
      <div class="back -z-3 h-2/2 md:h-3/4 w-[100%] bg-gradient-to-r from-[#FBDFCC] to-[#F3CBDE]"></div>
      <div class="p-4 flex justify-center items-center gap-10">
        <img v-if="type === 'left'" class="hidden md:flex h-[350px] w-[auto] p-2 border-solid border-[1.5px]" src="../assets/img/florist.jpg" alt="">
        <div class="md:w-2/5 flex flex-col gap-3 text-xs lg:text-base">
          <h2 class="m-0">{{ title }}</h2>
          {{ description1 }} <br>
          {{ description2 }}
        </div>
        <img v-if="type === 'right'" class="hidden md:flex h-[350px] w-[auto] p-2 border-solid border-[1.5px]" src="../assets/img/florist.jpg" alt="">
      </div>
    </section>
</template>

<style scoped>

.back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>