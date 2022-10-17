import { defineStore } from "pinia";
import { computed } from "vue";

const useDetailStore = defineStore('detailStore', () => {
    const currentState = {}
    // const currentState = { '': '', '': '' }

    const setCurrentState = (item) => {
        const key = Object.keys(item)
        currentState[key] = item[key]
        console.log(currentState)
    }
    const getCurrentState = computed(() => currentState)
    const getCurrentStateByKey = computed(() => {
        return currentState
    })
    const setEdition = () => {

    }

    return { currentState, setCurrentState, setEdition }
})

export default useDetailStore