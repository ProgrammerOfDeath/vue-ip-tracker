<script setup lang="ts">
import SearchResultPart from './SearchResultPart.vue'
</script>
<template>
  <div
    class="rounded-xl bg-white shadow-lg w-full h-[160px] px-9 py-10 flex gap-8 z-10 relative"
  >
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
  </div>
</template>

<style scoped></style>
