import { defineStore } from "pinia";
import { computed } from "vue";
import useShopListStore from "./shoplist";

const useShoppingCartStore = defineStore('shoppingCartStore', () => {
    const shopListStore = useShopListStore()

    const shoppingcart = [{
        id: '1', big_title: '【至高24期免息】三星S22 Ultra 全新官方正品5G智能手机 Samsung Galaxy三星官方旗舰店', small_title: '月销 300+', shop: '三星官方旗舰店', money: '9699', item_src: require('@/assets/goods/images/1.jpg'), shop_src: require('@/assets/goods/images/shop_1.jpg'), editions: {
            '机身颜色': '雾松绿', '存储容量': '12GB+256GB',
        }, quantity: 1,
    }, {
        id: '2', big_title: '【WHITT EPURE】WP 白川 灯芯绒混纺双排扣大衣风衣外套男秋冬', small_title: '', shop: 'WP 白川', money: '589', item_src: require('@/assets/goods/images/2.jpg'), shop_src: require('@/assets/goods/images/2.jpg'), editions: {
            '尺码':
                'L',
            '颜色': '黑色',

        }, quantity: 1,
    }
    ]

    const getAll = computed(() => shoppingcart)
    const getSum = computed(() => shoppingcart.length)

    const addItem = (id) => {
        shoppingcart.push(shopListStore.getItemById(id))
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