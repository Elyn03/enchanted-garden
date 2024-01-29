<script lang="ts" setup>

const { find } = useStrapi()

const { data: flowers, pending, error } = useAsyncData('flowers',
  () => find('flowers', {
    populate: '*',
  })
)

onMounted(() => {
  console.log({flowers, pending, error})
})

</script>

<template>
  <div class="container">
    <div class="flex flex-col items-center gap-y-4">
      <h1>Flowers</h1>
      <div class="p-4 flex justify-center flex-wrap gap-5" v-if="flowers">
          <div class="flex flex-col items-center justify-center gap-2.5 h-[300px] w-[250px] border-solid" v-for="flower in flowers.data">
            <img class="h-[80%] w-[90%] object-cover" :src=flower.image.formats.small.url alt="">
            <span>{{ flower.name }}</span>
            <NuxtLink :to="`flower/${flower.slug}`">Voir la fleur</NuxtLink>
          </div>
      </div>
    </div>
  </div>
</template>

<style>

.flower  img{
  height: 80%;
  width: 90%;
  object-fit: cover;
}
</style>