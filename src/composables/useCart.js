import Vue, { ref } from "vue";
import axios from "axios";

const cart = ref(0);

export function useCart() {
  const isAddingToCart = ref(false)

  const addToCart = async (cart) => {
    isAddingToCart.value = true
    axios.post(window.Shopify.routes.root + 'cart/add.js', cart)
      .then(response => {
        fetchCart()
        isAddingToCart.value = false
        return response.data
      })
      .catch(error => {
        isAddingToCart.value = false
        console.error('Error adding to cart:', error)

        if (error.response && error.response.data) {
          alert(error.response.data.description || 'Error adding item to cart.')
        }
      })
  }

  const clearCart = async () => {
    const response = await axios.post(window.Shopify.routes.root + 'cart/clear.js');
    const { item_count } = response.data;
    cart.value = item_count;
    return response.data;
  }

  const fetchCart = async () => {
    const response = await axios.get(window.Shopify.routes.root + 'cart.js');
    const { item_count } = response.data;
    cart.value = item_count;
    return response.data;
  }

  return {
    cart,
    addToCart,
    fetchCart,
    clearCart,
    isAddingToCart
  }
}