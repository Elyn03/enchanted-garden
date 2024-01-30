<script lang="ts" setup>

const { find } = useStrapi4()

const { data: flowers, pending, error } = useAsyncData('flowers',
  () => find('flowers', {
    populate: '*',
  })
);

onMounted(() => {
  console.log(flowers);
});

</script>

<template>
  <div class="flex flex-col items-center gap-y-4">
    <h1>Enchanted Garden</h1>
    
    <section class="h-1/3 relative my-10">
      <div class="back -z-3 h-3/4 w-[100%] bg-gradient-to-r from-[#FBDFCC] to-[#F3CBDE] "></div>
      <div class="p-4 flex justify-center items-center gap-10">
        <img class="h-[350px] w-[auto] p-2 border-solid border-[1.5px]" src="../assets/img/florist.jpg" alt="">
        <div class="w-2/5 flex flex-col gap-3">
          <h2 class="m-0">Welcome to Enchanted Garden - Where Blooms Come to Life!</h2>
          Nestled in the heart of Paris, our boutique is more than just a flower shop, it's a magical haven where nature's beauty meets artistic expression.<br>
          As you wander through our Enchanted Garden, let the vibrant colors and delicate fragrances transport you to a realm of beauty and serenity.<br><br>
          Embrace the beauty of nature with us!
        </div>
      </div>
    </section>

    <div class="p-4 flex justify-center flex-wrap gap-5" v-if="!pending">
      <h2 class="m-0">News arrivals</h2>
      <div class="p-4 flex justify-center flex-wrap gap-5" v-if="!pending">

        <div class="flex flex-col items-center justify-center gap-2.5 h-[300px] w-[250px] border-solid" v-for="flower in flowers.data">
          <img class="h-[80%] w-[90%] object-cover" :src=flower.image.url alt="">
          <span>
            {{ flower.name }} - 
            <NuxtLink class="no-underline color-black" :to="`flower/${flower.slug}`">View more</NuxtLink>
          </span>
        </div>
        </div>
    </div>
    <NuxtLink class="no-underline color-black" to="flowers">View more flowers</NuxtLink>

    <section class="h-1/3 relative my-10">
      <div class="back -z-3 h-3/4 w-[100%] bg-gradient-to-r from-[#FBDFCC] to-[#F3CBDE] "></div>
      <div class="p-4 flex justify-center items-center gap-10">
        <div class="w-2/5 flex flex-col gap-3">
          <h2 class="m-0">Book a bouquet</h2>
          <span>
            Whether you're celebrating life's special moments, expressing love, or simply seeking to bring a touch of nature indoors, Enchanted Garden has the perfect bouquet for every occasion.
          </span>
          <NuxtLink class="bg-transparent py-2 px-1 border-solid border-black border-[1.5px] no-underline color-black hover:bg-white hover:color-black hover:border-white" to="flowers">Book</NuxtLink>
        </div>
        <img class="h-[300px] p-2 border-solid border-[1.5px]" src="../assets/img/florist.jpg" alt="">
      </div>
    </section>
  </div>
</template>

<style scoped>

.back {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>