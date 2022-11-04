import { defineStore } from 'pinia'
import type { TrackingData } from '@/types/Tacking'

export const useTrackingStore = defineStore('tracking', {
  state: () => ({
    trackingData: {} as TrackingData | null,
    ipAddress: '',
  }),
  getters: {},
  actions: {
    async getTrackingData() {
      try {
        const apiRes = await fetch(
          `${import.meta.env.VITE_API_URL}/country?apiKey=${
            import.meta.env.VITE_API_KEY
          }&ipAddress=${this.$state.ipAddress}`
        )

        if (!apiRes.ok) throw new Error('API response was not ok')

        const apiResData: TrackingData = await apiRes.json()

        if (!apiResData) throw Error('no data given')

        this.$state.trackingData = apiResData
      } catch (e) {
        console.log(e)
      }
    },
  },
})
