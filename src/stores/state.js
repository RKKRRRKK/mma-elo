import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', {
  state: () => ({
    page_loaded: false
  }),
  actions: {
    setPageLoaded(value) {
      this.page_loaded = value
      console.log('pageloaded is: ', value)
    }
  }
})
