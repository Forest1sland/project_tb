import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import useShopListStore from "./shoplist";

const useDetailStore = defineStore('detailStore', () => {
    const shopListStore = useShopListStore()
    const item = shopListStore

    const currentState = reactive({})
    // const currentState = { '': '', '': '' }

    const setCurrentState = (item) => {
        const key = Object.keys(item)
        currentState[key] = item[key]
        // console.log(currentState)
    }
    const getCurrentState = computed(() => currentState)

    //获取类型激活的下标
    const isActive = computed(() => {
        return (id, index, i) => {
            // console.log(item.getItemById(id).editions[i][index] == currentState[i])
            if (item.getItemById(id).editions[i][index] == currentState[i]) {
                return index
            }
        }
        // index
    })

    return { currentState, setCurrentState, isActive, getCurrentState }
})

export default useDetailStore