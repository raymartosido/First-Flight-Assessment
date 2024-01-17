import Vue, { ref, onMounted } from 'vue';
import axios from 'axios';
import { storeFrontApiURL, storefrontHeaderConfig } from '@/js/utils.js';
import { transformAwardMetaObjects } from '@/js/data-transform.js';
import { useCart } from '@/composables/useCart';

export default {
  name: 'FeatureProduct',

  props: {
    product: {
      type: Object,
      required: true
    },
    awardIds: {
      type: Array,
      default: () => []
    }
  },

  setup(props) {
    const awards = ref([])
    const loadingAwards = ref(false)
    const error = ref(null)

    const { cart, addToCart, clearCart, isAddingToCart } = useCart()

    const getProductAwards = async () => {
      if (!props.awardIds.length) return;

      loadingAwards.value = true;

      const awardIds = props.awardIds.map(award => `"${btoa(award)}"`)

      const graphqlQuery = `
        {
          nodes(ids: [${awardIds}]) {
            id
            ... on Metaobject {
              handle
              id
              type
              fields {
                key
                value
                reference {
                  ... on MediaImage {
                    id
                    alt
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `

      try {
        const response = await axios.post(storeFrontApiURL, graphqlQuery, storefrontHeaderConfig)
        awards.value = response.data.data.nodes.filter(node => node).map(award => transformAwardMetaObjects(award))
      } catch (err) {
        console.error('Error fetching awards:', err)
        error.value = err;
      } finally {
        loadingAwards.value = false;
      }
    };

    const handleAddToCart = () => {
      const formData = {
        //sold out variant 44189602381962
        items: [
          {
            id: props.product.variants[0].id,
            quantity: 1
          }
        ]
      }
      addToCart(formData)
    }

    onMounted(() => {
      getProductAwards()
    })

    return {
      awards,
      loadingAwards,
      error,
      getProductAwards,
      cart,
      handleAddToCart,
      clearCart,
      isAddingToCart
    };
  }
}