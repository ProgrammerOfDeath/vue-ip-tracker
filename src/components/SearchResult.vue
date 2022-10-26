<script setup lang="ts">
import SearchResultPart from './SearchResultPart.vue'
</script>
<template>
  <div
    class="rounded-xl bg-white shadow-lg w-[1000px] h-[160px] px-9 py-10 flex"
  >
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
    <SearchResultPart :title="'Ip address'" :value="'Some Value'" />
  </div>
</template>

<style scoped></style>
