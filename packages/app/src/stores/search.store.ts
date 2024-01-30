import Fuse from 'fuse.js'
import type { IFlower, FlowersData } from '~/models/flowers.model'

export const useSearchStore = defineStore('search', () => {
  const { find } = useStrapi4()

  const { data: flowers, pending } = useAsyncData('flowers',
  () => find<FlowersData>('flowers',
    { populate: '*' }),
  )
  const query = ref('')
  const queryTags = ref<string[]>([])
  const elements = reactive<IFlower[]>(flowers.value?.data || [])
  const keys = ['name']

  const fuse = computed(() => new Fuse(Array.from(elements), {
    keys,
    threshold: 0.4,
  }))

  const sortedElements = computed(() => {
    return elements.sort((a, b) => {
      return a.name < b.name ? -1 : 1
    })
  })

  const results = computed(() => {
    if (!query.value)
      return Array.from(sortedElements.value)
    return [...fuse.value.search(query.value).map(r => r.item)]
  })

  const sortedByTags = computed(() => {
    if (!queryTags.value.length)
      return results.value
    return results.value.filter((flowers) => {
      return flowers.tags.some(tag => queryTags.value.includes(tag.slug))
    })
  })

  const resetTags = () => queryTags.value = []

  return { query, results, elements, pending, sortedByTags, queryTags, resetTags }
})