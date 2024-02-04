<script lang="ts" setup>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

const { findOne } = useStrapi4()
const route = useRoute()

const { data: flower, pending, error } = useAsyncData('flower',
  () => findOne(`flowers/${route.params.slug}`)
)

onMounted(() => {
  console.log({flower, pending, error})
})

</script>

<template>
  <div class="w-[100vw] h-[100vh] flex flex-col items-center gap-y-4 bg-gradient-to-r from-[#FBDFCC] to-[#F3CBDE]">
    <TheHeader />


    <div v-if="flower" class="flex flex-col lg:flex-row justify-center flex-wrap" >
      <img class="w-[100vw] lg:w-1/2" :src=flower.data.image.url alt="">
      <div class="lg:w-1/2">
        <h1 class="p-4">{{ flower.data.name }}</h1> <br>
        <span class="p-4">Price at Enchanted Garden : {{ flower.data.price }}</span> <br>
        <span class="p-4">{{ flower.data.description }}</span>
      </div>
    </div>

    <div v-if="pending" class="flex flex-col items-center gap-y-4">Pending</div>

    <TheFooter /> 
  </div>
</template>