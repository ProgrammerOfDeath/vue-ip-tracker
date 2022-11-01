<script setup lang="ts">
interface Props {
  title: string
  value: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="result-part flex-1 relative after:bg-dark-gray">
    <div class="text-xs text-dark-gray uppercase mb-4">{{ props.title }}</div>
    <div class="text-very-dark-gray text-xl">{{ props.value }}</div>
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
