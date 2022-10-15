import { defineStore } from "pinia";
import { computed } from "vue";

const useShopListStore = defineStore('shopListStore', () => {
    const list = [
        {
            id: '1', big_title: '【至高24期免息】三星S22 Ultra 全新官方正品5G智能手机 Samsung Galaxy三星官方旗舰店', small_title: '月销 300+', shop: '三星官方旗舰店', money: '9699', item_src: require('@/assets/goods/images/1.jpg'), shop_src: require('@/assets/goods/images/shop_1.jpg'), editions: {
                color: ['绯影红',
                    '曜夜黑',
                    '羽梦白',
                    '雾松绿'], capacity: ['12GB+256GB',
                        '12GB+512GB']
            }
        },
        { id: 2, name: '不好' },
        { id: 3, name: '不好' },
        { id: 4, name: '不好' },
        { id: 5, name: '不好' }]

    const getAll = computed(() => list)
    const getItemById = computed((state) => {
        return (id) => list.find((item) => item.id === id)
    })
    
    return { list, getAll, getItemById }
})

export default useShopListStore