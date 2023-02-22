<script setup lang="ts">
import { onMounted } from 'vue'
import Leaf from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  var someVar = "hello world";
  const titleLayer = Leaf.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }
  )
  const map = Leaf.map('map', {
    center: [54.368992, 12.726375],
    zoom: 15,
    layers: [titleLayer],
  })
})
</script>
<template>
  <div id="map" class="w-full h-[800px]"></div>
</template>

<style scoped></style>
