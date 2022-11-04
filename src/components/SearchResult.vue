<script setup lang="ts">
import SearchResultPart from './SearchResultPart.vue'
import { useTrackingStore } from '@/stores/tracking'
import { computed } from '@vue/reactivity'

const store = useTrackingStore()
</script>
<template>
  <div
    class="rounded-xl bg-white shadow-lg w-full h-[160px] px-9 py-10 flex gap-8 z-10 relative"
  >
    <SearchResultPart
      :title="'Ip address'"
      :value="store.$state.trackingData?.ip ?? ''"
    />
    <SearchResultPart
      :title="'Location'"
      :value="store.$state.trackingData?.location?.region ?? ''"
    />
    <SearchResultPart
      :title="'Timezone'"
      :value="'UTC ' + (store.$state.trackingData?.location?.timezone ?? '')"
    />
    <SearchResultPart
      :title="'ISP'"
      :value="store.$state.trackingData?.isp ?? ''"
    />
  </div>
</template>

<style scoped></style>
