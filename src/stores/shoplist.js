import { defineStore } from "pinia";
import { computed } from "vue";

const useShopListStore = defineStore('shopListStore', () => {
    const list = [
        {
            id: '1', big_title: '【至高24期免息】三星S22 Ultra 全新官方正品5G智能手机 Samsung Galaxy三星官方旗舰店', small_title: '月销 300+', shop: '三星官方旗舰店', money: '9699', item_src: require('@/assets/goods/images/1.jpg'), shop_src: require('@/assets/goods/images/shop_1.jpg'), editions: {
                '机身颜色': ['绯影红',
                    '曜夜黑',
                    '羽梦白',
                    '雾松绿'], '存储容量': ['12GB+256GB',
                        '12GB+512GB']
            }
        },
        {
            id: '2', big_title: '【WHITT EPURE】WP 白川 灯芯绒混纺双排扣大衣风衣外套男秋冬', small_title: '', shop: 'WP 白川', money: '589', item_src: require('@/assets/goods/images/2.jpg'), shop_src: require('@/assets/goods/images/2.jpg'), editions: {
                '尺码': ['S',
                    'M',
                    'L',
                    'XL'], '颜色': ['黑色',
                        '驼色']
            }
        },
        {
            id: '3', big_title: 'Hoegaarden福佳白啤酒比利时风味小麦白啤酒果啤246ml*24瓶装', small_title: '果味浓郁 泡沫绵密', shop: '福佳旗舰店', money: '223', item_src: require('@/assets/goods/images/3.jpg'), shop_src: require('@/assets/goods/images/shop_3.jpg'), editions: {
                '颜色分类': ['白啤酒246ml*24瓶', '白啤酒330ml*18瓶']
            }
        },
        { id: 4, name: '不好' },
        { id: 5, name: '不好' }]

    const getAll = computed(() => list)
    const getItemById = computed((state) => {
        return (id) => list.find((item) => item.id === id)
    })

    // const getIndexByNmae = computed(() => {
    //     return(id,item,type)=>{}

    // })

    return { list, getAll, getItemById }
})

export default useShopListStore