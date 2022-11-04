<script lang="ts" setup>
import { useTrackingStore } from '@/stores/tracking'

const store = useTrackingStore()
</script>
<template>
  <div class="flex h-14 w-[550px] shadow-md z-10">
    <input
      class="py-4 flex-1 px-3 rounded-l-xl text-dark-gray"
      type="text"
      placeholder="Search for any IP address or domain"
      v-model="store.$state.ipAddress"
    />
    <button
      class="w-14 shrink-0 bg-black text-white rounded-r-xl active:bg-very-dark-gray transition-all ease-in-out duration-150"
      @click="store.getTrackingData"
    >
      >
    </button>
  </div>
</template>
<style lang="css"></style>
