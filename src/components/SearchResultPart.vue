<script setup lang="ts">
interface Props {
  title: string
  value: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="flex-1 pr-5 after:right-0 after:h-3">
    <div class="text-sm text-dark-gray uppercase mb-4">{{ props.title }}</div>
    <div class="text-very-dark-gray text-lg">{{ props.value }}</div>
  </div>
</template>

<style scoped></style>
