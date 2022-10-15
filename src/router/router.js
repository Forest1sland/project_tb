import { createRouter } from "vue-router";
import tb_detail from '@/components/tb_detail.vue'
import tb_main from '@/components/tb_main.vue'
import { createWebHashHistory } from 'vue-router'
import tb_shoppingcart from '@/components/tb_shoppingcart.vue'

const routes = [
    { path: '/', component: tb_main },
    { path: '/Detail', component: tb_detail },
    { path: '/ShoppingCart', component: tb_shoppingcart },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router