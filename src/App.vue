<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import SearchResultVue from './components/SearchResult.vue'
import TheHeader from '@/components/layout/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main class="min-h-screen text-dark-gray pt-12">
    <div class="mx-auto w-2/3 pt-3">
      <div class="flex justify-center mb-5">
        <SearchBar />
      </div>
      <SearchResultVue />
    </div>
  </main>
</template>

<style scoped></style>
