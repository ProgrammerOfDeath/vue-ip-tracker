<script setup lang="ts">
import SearchBar from './components/SearchBar.vue'
import SearchResultVue from './components/SearchResult.vue'
</script>

<template>
  <header>
    <h1 class="text-3xl text-very-dark-gray">IP Tracker</h1>
  </header>
  <main class="min-h-screen bg-very-dark-gray text-dark-gray">
    <div class="mx-auto w-2/3 pt-3">
      <div class="flex justify-center mb-5">
        <SearchBar />
      </div>
      <SearchResultVue />
    </div>
  </main>
</template>

<style scoped></style>
