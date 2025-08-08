import { defineStore } from 'pinia'

export const useApiDataStore = defineStore('apiData', {
  state: () => ({
    data: null as null | any,
    logoLineData: null as null | any,
    loading: false,
    error: null as null | string,
  }),
})