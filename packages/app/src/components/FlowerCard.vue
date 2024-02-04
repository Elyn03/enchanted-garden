<script lang="ts" setup>
import type { IFlower } from '../models/flowers.model'

defineProps({
  flower: {
    type: Object as PropType<IFlower>,
    required: true,
  },
})
</script>

<template>
   <div class="flex flex-col items-center justify-center gap-2.5 h-[300px] w-[250px] border-solid">
      <img class="h-[80%] w-[90%] object-cover" :src=flower.image.url alt="">
      <span>
         {{ flower.name }} - 
         <NuxtLink class="no-underline color-black" :to="`/flower/${flower.slug}`">View more</NuxtLink>
      </span>
   </div>
</template>