<script setup lang="ts">
import { useTrackingStore } from '@/stores/tracking'
interface Props {
  title: string
  value?: string
  placeholder?: string
}

const props = defineProps<Props>()
const store = useTrackingStore()
</script>
<template>
  <div class="result-part flex-1 relative after:bg-dark-gray pr-4">
    <div class="text-xs text-dark-gray uppercase mb-4">{{ props.title }}</div>
    <div
      v-if="store.$state.loading"
      class="w-full h-9 animate-pulse bg-slate-400 rounded-md"
    ></div>
    <div v-else class="text-very-dark-gray text-xl">
      {{ props.value || props.placeholder }}
    </div>
  </div>
</template>

<style scoped>
.result-part::after {
  content: '';
  display: block;
  position: absolute;
  width: 1px;
  height: 85%;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  right: 0;
}
.result-part:last-of-type::after {
  display: none;
}
</style>
