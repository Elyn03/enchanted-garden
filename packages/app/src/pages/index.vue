<script lang="ts" setup>
import TheHeader from '~/components/TheHeader.vue'
import FlowerCard from '~/components/FlowerCard.vue'
import PinkBand from '~/components/PinkBand.vue'
import TheFooter from '~/components/TheFooter.vue'

const { find } = useStrapi4()
const search = useSearchStore()

</script>

<template>
  <div class="flex flex-col items-center gap-y-4">
    <TheHeader /> 
    
    <PinkBand
      type="left"
      title="Welcome to Enchanted Garden - Where Blooms Come to Life!"
      description1="Nestled in the heart of Paris, our boutique is more than just a flower shop, it's a magical haven where nature's beauty meets artistic expression.
          As you wander through our Enchanted Garden, let the vibrant colors and delicate fragrances transport you to a realm of beauty and serenity."
      description2="Embrace the beauty of nature with us!"
    />

    <section class="p-4 flex flex-col items-center flex-wrap gap-10">
      <h2 class="m-0">News arrivals</h2>
      <div class="p-4 flex justify-center flex-wrap gap-5" v-if="!pending">
        <FlowerCard
        v-for="flower in search.newArrival.slice(0, 3)"
        :key="flower.id"
        :flower="flower"
      />
      </div>

      <div class="p-4 flex justify-center flex-wrap gap-5" v-if="pending">
        Pending
      </div>

      <div class="p-4 flex justify-center flex-wrap gap-5" v-if="!search.newArrival">
        No flowers
      </div>

      <NuxtLink class="no-underline color-black" to="flowers">View more flowers</NuxtLink>
    </section>

    <PinkBand
      type="right"
      title="Book a bouquet"
      description1="Whether you're celebrating life's special moments, expressing love, or simply seeking to bring a touch of nature indoors, Enchanted Garden has the perfect bouquet for every occasion."
      description2="Embrace the beauty of nature with us!"
    />

    <section class="p-4 my-5 flex justify-center flex-wrap gap-5">
      <div class="w-1/4 flex flex-col justify-start items-center gap-3">
        <h2 class="m-0">Map</h2>
        <img class="w-1/2" src="../assets/img/map.png" alt="">
      </div>
      <div class="w-1/4 flex flex-col justify-start items-center gap-3">
        <h2 class="m-0">Location</h2>
        <div>
          <p class="p-1 m-0">Enchanted Garden</p>
          <p class="p-1 m-0">22 Rue Lumière</p>
          <p class="p-1 m-0">75003 Paris, France</p>
        </div>
      </div>
      <div class="w-1/4 flex flex-col justify-start items-center gap-3">
        <h2 class="m-0">Access</h2>
        <div>
          <p class="p-1 m-0">Metro line 9: République</p>
          <p class="p-1 m-0">Metro line 4: Réaumur Sébastopom</p>
          <p class="p-1 m-0">Bus: No. 38</p>
        </div>
      </div>
    </section>

    <section class="h-1/3 w-full flex relative my-10 bg-gradient-to-r from-[#FBDFCC] to-[#F3CBDE]">
      <img class="h-[370px] object-cover w-1/2" src="../assets/img/send-flower.jpg" alt="">
      <div class="w-1/2 p-10 flex flex-col gap-3">
        <h2 class="m-0">Contact us</h2>
        <p class="m-0">If you have any question, send us a message and we'll reply as fast as we can.</p>
        <form action="" class="flex flex-col gap-2">
          <div>
            <label for="">Full name: </label>
            <input class="border-t-none border-x-none border-black bg-transparent focus:outline-none" type="text" placeholder="first and last name">
          </div>

          <div>
            <label for="">Email address: </label>
            <input class="border-t-none border-x-none border-black bg-transparent focus:outline-none" type="mail" placeholder="email">
          </div>

          <div>
            <label for="">Message : </label>
            <input class="border-t-none border-x-none border-black bg-transparent focus:outline-none" type="mail" placeholder="message">
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>

    <TheFooter /> 
  </div>
</template>