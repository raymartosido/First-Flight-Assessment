
import { skiResortHeaderConfig, skiResortApiURL } from "@/js/utils"
import debounce from 'lodash.debounce'
import axios from "axios"

export default {
	name: 'ResortForecast',

  data() {
    return {
      resort: {},
      debouncedFetchResorts: null,
      searchQuery: '',
      loading: false
    }
  },

  created() {
    this.debouncedFetchResorts = debounce(this.fetchResorts, 500);
    this.loadCurrentResort()
  },

  computed: {
    formattedResort() {
      if (!this.resort || Object.keys(this.resort).length === 0) {
        return {};
      }

      return {
        ...this.resort,
        googleMaps: `https://maps.google.com/?q=${this.resort.lat},${this.resort.lon}`
      };
    }
  },

  methods: {
    async fetchResorts(query) {
      this.loading = true

      try {
        const response = await axios.get(`${skiResortApiURL}/${encodeURIComponent(query)}/forecast`, {
          ...skiResortHeaderConfig,
          params: {
            units: 'm',
            el: 'top'
          }
        })
        
        this.resetResort()
        const { basicInfo } = response.data

        this.resort = basicInfo
        localStorage.setItem('resort', JSON.stringify(basicInfo))
      } catch (error) {
        console.error('Error fetching resorts:', error);
      }

      this.loading = false
    },

    handleInputSearch() {
      if(this.searchQuery.length >= 3) {
        this.debouncedFetchResorts(this.searchQuery)
      }
    },

    loadCurrentResort() {
      const resort = localStorage.getItem('resort')

      if (resort) {
        this.resort = JSON.parse(resort)
      }
    },

    resetResort() {
      this.resort = {};
    }
  },
} 