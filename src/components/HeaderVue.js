import { useCart } from "@/composables/useCart"
import { onMounted, watch } from "vue"

export default {
	name: 'Header',

	setup() {
		const { cart, fetchCart } = useCart()

		onMounted(() => {
			fetchCart()
		})

		return { cart }
	}
} 