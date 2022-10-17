import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import useShopListStore from "./shoplist";

const useShoppingCartStore = defineStore('shoppingCartStore', () => {
    const shopListStore = useShopListStore()

    const shoppingcart = reactive([])

    const getAll = computed(() => shoppingcart)
    const getSum = computed(() => shoppingcart.length)

    const addItem = (id, edition, quantity) => {
        const item = { ...shopListStore.getItemById(id) }
        const i = shoppingcart.find((i) => i.id === id)

        if (i != undefined) {
            i.quantity += quantity
        } else {
            item.quantity = quantity
            item.editions = edition
            shoppingcart.push(item)
        }
    }

    const delItem = (id) => {
        shoppingcart.forEach(function (item, index, arr) {
            if (item.id == id) {
                arr.splice(index, 1);
            }
        });
    }

    return { shoppingcart, getAll, addItem, delItem }
})

export default useShoppingCartStore