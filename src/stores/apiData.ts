import { defineStore } from 'pinia'
import axios from 'axios'

export const useApiDataStore = defineStore('apiData', {
  state: () => ({
    data: null as null | any,
    logoLineData: null as null | any,
    loading: false,
    error: null as null | string,
  }),
  getters: {
    heroData: (state) => {
      return state.data?.data?.[0] || null
    },
    logoLine: (state) => {
      return state.logoLineData?.data || null
    },
  },
  actions: {
    async fetchData() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('http://localhost:1337/api/home-heroes?populate=*', {
          headers: {
              Authorization: `Bearer 10ab89d7ead2a887e7dbe387c7af195228d5344dde832a1cffe84dd17cdfe7d704c9d8c010593fa029efa041e47cdadb03ffcdcc4573b88271783635ef73405e461d698e09097953094db378ecc6e07611845c677113edddcc4e7aea0004ebd20f7a2c84ba0c1ab540b413eb24631b29bd00830f80e2628e13ba6ac26b415901`
            }
        })
        console.log('API Response:', response.data)
        this.data = response.data
      } catch (err: any) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },
    async fetchLogoLineData() {
      try {
        const response = await axios.get('http://localhost:1337/api/hero-logo-lines?populate=*', {
          headers: {
            Authorization: `Bearer 10ab89d7ead2a887e7dbe387c7af195228d5344dde832a1cffe84dd17cdfe7d704c9d8c010593fa029efa041e47cdadb03ffcdcc4573b88271783635ef73405e461d698e09097953094db378ecc6e07611845c677113edddcc4e7aea0004ebd20f7a2c84ba0c1ab540b413eb24631b29bd00830f80e2628e13ba6ac26b415901`
          }
        })
        console.log('Logo Line API Response:', response.data)
        this.logoLineData = response.data
      } catch (err: any) {
        console.error('Logo Line API Error:', err.message)
      }
    },
  },
})