<template>
    <div class="b">
        <div class="head">
            <div class="logo">
                <img src="@/assets/body/logo.png" alt="">
            </div>
            <div class="search">
                <div class="search-type">
                    <svg t="1665496772193" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2130" width="10" height="10" data-v-d71dc056="">
                        <path
                            d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z"
                            p-id="2131" fill="#3c3c3c" data-v-d71dc056=""></path>
                    </svg>
                    <p>
                        宝贝
                    </p>
                    <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2403" width="10" height="10">
                        <path
                            d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                            p-id="2404"></path>
                    </svg>
                    <div class="search-type-hover">
                        <p></p>
                        <p>天猫</p>
                        <p>店铺</p>
                    </div>
                </div>
                <div class="search-input">
                    <input type="text">
                </div>
                <div class="search-btn">
                    <button>搜索</button>
                </div>
            </div>
        </div>
        <div class="cart">
            <div class="cart-main">
                <div class="cart-head">
                    <p>购物车（全部{{items.length}}）</p>
                    <div class="cart-head-sum">
                        <p>已选商品（不含运费）</p>
                        <p>0.00{{}}</p>
                        <a href="#">结 算</a>
                    </div>
                </div>
                <div class="cart-head-title">
                    <div class="cart-head-title-checked">
                        <input type="checkbox">
                        全选
                    </div>
                    <div class="cart-head-title-item">商品信息</div>
                    <div class="cart-head-title-price">单价</div>
                    <div class="cart-head-title-amount">数量</div>
                    <div class="cart-head-title-sum">金额</div>
                    <div class="cart-head-title-op">操作</div>
                </div>
                <div class="cart-items">
                    <div v-for="(item ,index) in items" :key="index">
                        <div>
                            <div class="cart-item-shop">
                                <input type="checkbox">
                                <p>店铺：{{item.shop}}</p>
                            </div>
                            <div class="cart-item-detail">
                                <div>
                                    <input type="checkbox">
                                </div>
                                <div class="cart-item-img" @click="toDetail(item.id)">
                                    <img :src="item.item_src" alt="">
                                </div>
                                <div class="cart-item-title">
                                    <a @click="toDetail(item.id)">{{item.big_title}}</a>

                                </div>
                                <div class="cart-item-editions">
                                    <p v-for="(keys,index) in Object.keys(item.editions)" :key="index">
                                        {{keys}}:
                                        {{item.editions[keys]}}</p>
                                </div>
                                <div class="cart-item-price">
                                    {{item.money}}
                                </div>
                                <div class="cart-detail-quantity">
                                    <div class="cart-detail-minusBtn" :class="{disable:item.quantity<=1}"
                                        @click="minusBtn(item)">
                                        <span>
                                            -
                                        </span>
                                    </div>
                                    <div>
                                        <input type="text" :value="item.quantity" >
                                    </div>
                                    <div class="cart-detail-addBtn" @click="item.quantity++">
                                        <span>
                                            +
                                        </span>
                                    </div>
                                </div>
                                <div class="cart-item-sum">
                                    {{item.money*item.quantity}}
                                </div>
                                <div class="cart-item-op">
                                    <a href="#">移入收藏夹</a>
                                    <a @click="del(item)">删除</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart-footer">

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

import useShoppingCartStore from '@/stores/shoppingcart'
import { computed, reactive, inject } from 'vue';
import { useRouter } from 'vue-router'

const store = useShoppingCartStore()
const items = store.getAll
// console.log(items)

//选中的商品
// const checked = []
//总价
// const totalPrice = computed(() => {
//     return checked.reduce()
// })


const router = useRouter()
const toDetail = (id) => {
    router.push({
        path: '/Detail',
        query: {
            id: id,
        }
    })
}



// const isLastOne = computed(() => {
//     return quantity.value <= 1 ? true : false
// })

const minusBtn = (item) => {
    if (item.quantity > 1) {
        item.quantity--
    }
}

const myReload = inject("reload")
const del = (item) => {

    store.delItem(item.id)


    myReload
}

</script>

<script >

</script>

<style lang="scss" scoped>
.b {
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}

a {
    color: #6c6c6c;
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}


.head {
    height: 80px;
    background-color: #fff;
    display: flex;
}

.logo {
    width: 50px;
    height: 50px;
    left: 15%;
    position: relative;
    top: 10%;
}

.logo>img {
    width: stretch;
}

.cart {
    padding-top: 20px;
    background: repeat-y url('@/assets/body/bg.png');
    height: 1000px;
}

.search {
    display: flex;
    left: 50%;
    top: 25%;
    position: relative;
    width: 450px;
    height: 40px;
    background-color: #f3f3f3;
    border-radius: 20px;
}

.search-type {
    display: flex;
    padding: 0px 15px;
    z-index: 2;
}

.search-type-hover {
    display: none;
    position: absolute;
    min-width: 98px;
    top: 20px;
    left: 0px;
    z-index: -1;
}

.search-type-hover>p {

    padding: 10px 20px;
    background-color: #f3f3f3;
    margin: 0px;
}

.search-type:hover .search-type-hover {
    display: block;
}

.search-type>svg {
    padding: 15px 0px;
}

.search-type>p {
    margin: 0px;
    padding: 10px;

}

.search-input {
    width: 57%;
}

.search-input>input {
    text-decoration: none;
    outline: none;
    background-color: #ebebeb;
    border: none;
    height: stretch;
    width: stretch;
}

.search-btn {
    background-color: #ebebeb;
    width: 95px;
    height: stretch;
    border-radius: 0px 20px 20px 0px;
}

.search-btn>button {
    border-radius: 20px;
    background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
    border: none;
    height: 90%;
    width: 80%;
    position: relative;
    top: 2px;
    left: 16px;
    color: #fff;
}

.cart-main {

    width: stretch;
    height: stretch;
    border-radius: 25px;
    width: 1000px;
    margin: 0px auto;
}

.cart-main input {
    cursor: pointer;
}

.cart-main>div {
    width: 1000px;
    background-color: #fff;
    // margin-bottom: 1px;


}

.cart-head {
    height: 75px;
    border-radius: 30px 30px 0px 0px;
    display: flex;
    margin-bottom: 1px;
}

.cart-head-sum {
    position: relative;
    left: 49%;
    display: flex;
}

.cart-head-sum>p {
    padding: 12px 10px;
    font-size: 15px;
}

.cart-head-sum>p:not(:first-child) {
    padding: 0px 10px;
    font-size: 22px;
    color: #ff5000;
}

.cart-head-sum>a {
    border-radius: 30px;
    background-color: #aaa;
    margin: 15px 5px;
    width: 60px;
    text-align: center;
    text-decoration: none;
    padding: 10px;
    color: #fff;
    font-size: 16px;

}

.cart-head>p {
    padding: 6px 20px;
    font-size: 18px;
    font-weight: 700;
}

.cart-head-title {
    display: flex;
    height: 50px;
    font-size: 14px;
    font-weight: 700;
}

.cart-head-title-checked {
    position: relative;

    padding: 20px;
}

.cart-head-title-item {
    position: relative;
    left: 6%;
    padding: 20px;
}

.cart-head-title-price {
    position: relative;
    left: 33%;
    padding: 20px;
}

.cart-head-title-amount {
    position: relative;
    left: 37%;
    padding: 20px;
}

.cart-head-title-sum {
    position: relative;
    left: 43%;
    padding: 20px;

}

.cart-head-title-op {
    position: relative;
    left: 45%;
    padding: 20px;
}

.cart-items {
    height: 900px;
    color: #3c3c3c;
}

.cart-item-shop {
    display: flex;
}

.cart-item-detail {
    display: flex;
    height: 85px;
    background-color: #f5f5f5;
    border-radius: 32px;
    margin: 0px 30px;
    padding: 20px;
}

.cart-item-img {
    width: 80px;
    height: 80px;
    margin: 0px 10px;
    cursor: pointer;
}

.cart-item-img>img {
    width: stretch;
    height: stretch;
}

.cart-item-title {
    width: 25%;
}

.cart-item-detail a {
    cursor: pointer;
}

.cart-item-detail a:hover {
    color: #f40;
    text-decoration: underline;
}

.cart-item-editions {
    padding: 0px 10px;
    width: 130px;
}

.cart-item-editions>p {
    margin: 0px;
}

.cart-item-price {
    font-weight: 700;
}

.cart-detail-quantity {
    display: flex;
    margin: 0px 20px;
    left: 4%;
    position: relative;
}

.disable {
    cursor: not-allowed;
    color: #ccc;
    background-color: rgba(0, 0, 0, .06);
}

.cart-detail-quantity>div {
    height: 22px;
}

.cart-detail-quantity span {
    width: 20px;
    display: inline-block;
    text-align: center;
    background-color: #f0f0f0;
    border: 1px solid #e5e5e5;
    cursor: pointer;
    height: stretch;
}

.cart-detail-quantity input {
    width: 35px;
}

.cart-item-sum {
    left: 8%;
    position: relative;
    color: #ff5000;
    font-weight: 700;
}

.cart-item-op {
    left: 15%;
    position: relative;
}

.cart-item-op>a {
    display: block;
    text-decoration: none;

}

.cart-footer {
    bottom: 0px;
    position: fixed;
    height: 50px;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}
</style>