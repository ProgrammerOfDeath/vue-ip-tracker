<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import SearchResultVue from './components/SearchResult.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheMap from '@/components/layout/TheMap.vue'
</script>

<template>
  <TheHeader />
  <main class="min-h-screen text-dark-gray">
    <div class="mx-auto absolute z-[1000] top-14 left-0 right-0 w-2/3">
      <div class="flex justify-center mb-5">
        <SearchBar />
      </div>
      <SearchResultVue />
    </div>
    <TheMap />
  </main>
</template>

<style scoped></style>
