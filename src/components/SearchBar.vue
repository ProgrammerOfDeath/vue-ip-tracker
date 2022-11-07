<script lang="ts" setup>
import { useTrackingStore } from '@/stores/tracking'
import { ref } from 'vue'

const store = useTrackingStore()
const searchInput = ref<HTMLElement | null>(null)
const hasBeenClicked = ref(false)

const searchAddress = () => {
  if (!store.$state.ipAddress) {
    hasBeenClicked.value = true
    searchInput.value?.focus()
    return
  }
  store.getTrackingData()
}
</script>
<template>
  <div class="flex h-14 w-full shadow-md z-10">
    <input
      class="py-4 flex-1 px-3 rounded-l-xl text-dark-gray"
      type="text"
      placeholder="Search for any IP address or domain"
      v-model="store.$state.ipAddress"
      required
      ref="searchInput"
    />
    <button
      class="w-14 shrink-0 bg-black text-white rounded-r-xl active:bg-very-dark-gray transition-all ease-in-out duration-150"
      @click="searchAddress"
    >
      >
    </button>
  </div>
  <div
    v-if="hasBeenClicked && !store.$state.ipAddress"
    class="text-red-400 text-center mt-2"
  >
    Pleas type in an ip address or a domain
  </div>
</template>
<style lang="css"></style>
