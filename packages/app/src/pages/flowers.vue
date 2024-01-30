<script lang="ts" setup>
import type { ITag } from '~/models/flowers.model'

const { find } = useStrapi4()
const search = useSearchStore()

const { data: tags } = useAsyncData(
  'tags',
  () => find<{ data: ITag[] }>('tags'),
)

</script>

<template>
  <div class="flex flex-col items-center gap-y-4">
    <h1>Enchanted Garden</h1>
    
    <form v-if="tags">
      <select name="" id="" >
        <option v-for="tag in tags.data" value="dog">{{ tag.color }}</option>
      </select>
    </form>
    
    <input v-model="search.query" class="px-4 py-2" type="search">

    <div class="p-4 flex justify-center flex-wrap gap-5" v-if="!search.pending && search.sortedByTags && search.sortedByTags.length">
      <div class="flex flex-col items-center justify-center gap-2.5 h-[300px] w-[250px] border-solid" v-for="flower in search.sortedByTags">
        <img class="h-[80%] w-[90%] object-cover" :src=flower.image.url alt="">
        <span>
          {{ flower.name }} - 
          <NuxtLink class="no-underline color-black" :to="`flower/${flower.slug}`">View more</NuxtLink>
        </span>
      </div>
    </div>

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