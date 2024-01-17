import Vue from "vue";

import "@/styles.css";

import HeaderVue from "@/components/HeaderVue.js";
import FeatureProduct from "@/components/FeatureProduct.js";
import ResortForecast from "@/components/ResortForecast";

const vueInstance = element => {
  return new Vue({
    el: element,
    delimiters: ['${', '}'], // Change the delimiters
    // ... other options
  
    components: {
      HeaderVue,
      FeatureProduct,
      ResortForecast
    }
  });
}

const initVue = () => {
  document.querySelectorAll('[vue-app]').forEach(e => {
    vueInstance(e)
  })
}

initVue()

document.addEventListener('shopify:section:load', (event) => {
  initVue()
})