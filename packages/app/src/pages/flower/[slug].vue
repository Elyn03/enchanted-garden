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
  <div class="flex flex-col items-center gap-y-4">
    <TheHeader /> 
    <div v-if="pending" class="flex flex-col items-center gap-y-4">Pending</div>
    <div class="p-4 flex justify-center flex-wrap gap-5" v-if="flower">
      <span>{{ flower.data.name }}</span>
      <span>{{ flower.data.image.url }}</span>
    </div>
    <TheFooter /> 
  </div>
</template>