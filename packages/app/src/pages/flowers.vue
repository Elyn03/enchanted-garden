<script lang="ts" setup>
import type { ITag } from '~/models/flowers.model'
import TheHeader from '~/components/TheHeader.vue'
import FlowerCard from '~/components/FlowerCard.vue'
import TheFooter from '~/components/TheFooter.vue'

const { find } = useStrapi4()
const search = useSearchStore()

const { data: tags } = useAsyncData(
  'tags',
  () => find<{ data: ITag[] }>('tags'),
)

function addTag(tag: string) {
  console.log(search.results);
  if (!search.queryTags.includes(tag))
    search.queryTags.push(tag);
  else search.queryTags = search.queryTags.filter(t => t !== tag);
  console.log("2");
}

onMounted(() => {
  console.log(search.sortedByTags);
});

</script>

<template>
  <div class="flex flex-col items-center gap-y-4">
    <TheHeader />
    
    <div class="w-[100%] flex justify-around p-4 bg-gradient-to-r from-[#FBDFCC] to-[#F3CBDE]">
      
      <div class="form-group flex gap-2 items-center justify-center">
        <button
          v-for="tag in tags?.data" :key="tag.id"
          :class="[search.queryTags.includes(tag.slug) ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-900']"
          :title="tag.color"
          class="py-1 px-2 border-none cursor-pointer"
          @click="addTag(tag.slug)" >
          {{ tag.color }}
        </button>

        <button class="h-[auto] appearance-none border-none bg-transparent p-0 underline cursor-pointer" @click="search.resetTags" >
          Reset
        </button>
      </div>

      <input placeholder="Search a flower" v-model="search.query" class="px-4 py-2 focus:outline-none" type="search">
    </div>

    <div class="p-4 flex justify-center flex-wrap gap-5" v-if="!search.pending && search.sortedByTags && search.sortedByTags.length">
      <FlowerCard
        v-for="flower in search.sortedByTags"
        :key="flower.id"
        :flower="flower"
      />
    </div>
    <p v-else>
      No result found
    </p>
    <TheFooter /> 
  </div>
</template>