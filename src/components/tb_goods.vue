<!-- 此页面包含多种图片,不能设置通有样式, -->
<template>
    <div class="b">
        <!-- 头 -->
        <div class="head">
            <div class="head-logo">
                <img src="@/assets/body/logo.png">
            </div>
            <div class="head-input">
                <svg t="1665496772193" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2130" width="20" height="20">
                    <path
                        d="M934.242232 884.637975 738.287281 695.561689l1.836835-2.302439c52.767807-65.338101 81.829703-147.602709 81.829703-231.593636 0-203.716728-165.742858-369.473913-369.411491-369.473913-203.731054 0-369.505635 165.757185-369.505635 369.473913 0 203.715705 165.774581 369.45754 369.505635 369.45754 89.26607 0 175.511339-32.450063 242.841817-91.288123l2.209318-1.929955 195.485253 186.963159 1.959631 0 0.031722 1.61887c4.947685 3.483334 10.517541 5.319146 16.5837 5.319146 16.180518 0 29.308513-13.192464 29.308513-29.310559C940.96126 896.276037 938.72329 890.239554 934.242232 884.637975zM452.541305 772.413008c-171.358763 0-310.74637-139.388631-310.74637-310.74637 0-171.34239 139.387607-310.700321 310.74637-310.700321 171.309644 0 310.700321 139.357931 310.700321 310.700321C763.241626 633.024377 623.851972 772.413008 452.541305 772.413008z"
                        p-id="2131" fill="#3c3c3c"></path>
                </svg>
                <input placeholder="搜索宝贝" type="text">
            </div>
            <div class="head-btn">
                <button>
                    <div class="head-btn-text">搜天猫</div>
                </button>
                <button>
                    <div class="head-btn-text">搜本店</div>
                </button>
            </div>
        </div>
        <!-- main -->
        <div class="body">
            <div class="main">
                <!-- 店铺 -->
                <div class="shop">
                    <!-- 店名 包含一个hover事件 -->
                    <div class="shop-info">
                        <div class="shop-icon">
                            <img :src="item.shop_src">
                        </div>
                        <div class="shop-name">
                            <p>{{item.shop}}</p>
                            <p></p>
                        </div>

                        <div class="shop-info-hover">
                            <p>{{item.shop}}</p>
                            <div>
                                综合体验：
                                <!-- 星 -->
                                <div class="shop-info-hover-star" v-for="item in 5" :key="item">

                                </div>
                            </div>
                            <div>
                                掌柜：
                                {{item.shop}}
                            </div>
                            <div>
                                客服：

                            </div>
                            <div class="shop-info-hover-score">
                                <div>
                                    <p>宝贝</p>
                                    <p>4.8</p>
                                </div>

                                <div>
                                    <p>卖家</p>
                                    <p>4.9</p>
                                </div>
                                <div>
                                    <p>物流</p>
                                    <p>4.8</p>
                                </div>
                            </div>

                            <button class="shop-info-hover-btn">
                                <span>
                                    进店逛逛
                                </span>
                            </button>

                        </div>
                    </div>

                    <!-- 评分 -->
                    <div class="shop-score">
                        <div>
                            <p class="shop-score-key">宝贝描述</p>
                            <p class="shop-score-value">4.8</p>
                        </div>
                        <div>
                            <p class="shop-score-key">卖家描述</p>
                            <p class="shop-score-value">4.9</p>
                        </div>
                        <div>
                            <p class="shop-score-key">物流服务</p>
                            <p class="shop-score-value">4.8</p>
                        </div>
                    </div>
                    <!-- 按钮 -->
                    <div class="shop-btn">
                        <button>
                            <img src="@/assets/goods/aliwangwang.png">
                            联系客服</button>
                        <button>
                            <img src="@/assets/goods/dianpu.png">
                            进入店铺</button>
                    </div>
                </div>
                <!-- 商品简介 -->
                <div class="goods-info">
                    <!-- 预览图 -->
                    <!-- 1. 需要一个zoom_area 悬浮在图片表面 作为将放大的区域
                    2. 需要一个zoom_image 在右侧 绝对位置 和原图片宽高一致 作为放大后的结果显示 display:none
                    3. 在鼠标放置时显示area区域 及image区域 -->
                    <div class="goods-info-image" @click="moveZoomArea">
                        <img :src="item.item_src">
                        <div id="goods-info-image-zoom-area" :style="zoom_area_style"></div>
                        <div id="goods-info-image-zoom-image">
                            <img :src="item.item_src" :style="zoom_image_style">
                        </div>
                    </div>
                    <!-- 产品标题 -->
                    <div class="goods-title">
                        <p class="goods-title-big">{{item.big_title}}</p>
                        <p class="goods-title-small">{{item.small_title}}</p>
                        <p class="goods-title-money">￥{{item.money}}</p>
                        <div class="goods-title-trigger">
                            <div class="opt">优惠</div>
                            <div class="opt">保障</div>
                            <div class="opt">参数</div>
                            <div class="opt">资质
                                <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2403" width="14" height="14">
                                    <path
                                        d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                                        p-id="2404"></path>
                                </svg>
                            </div>
                            <div class="goods-title-trigger-hover-qr">
                                <!-- qr -->
                                <img src="@/assets/body/qr.png" alt="">
                            </div>
                            <div class="goods-title-trigger-hover">
                                <div>
                                    <p>优惠：
                                    </p>
                                    <p>保障：</p>
                                    <p>宝贝参数：</p>
                                    <p>资质：</p>
                                </div>
                            </div>
                        </div>
                        <!-- 产品配置选择 -->
                        <!-- 获取该商品的每个版本信息 -->
                        <div class="goods-options" v-for="(i,index) in Object.keys(item.editions)" :key="index">
                            <!-- <div>
                                <div>
                                    配送：
                                </div>
                                <div>

                                </div>
                            </div> -->

                            <div class="goods-option goods-option-flex">
                                <div>
                                    {{i}}
                                </div>
                                <!-- 获取该版本信息的每个类别 -->
                                <div class="goods-option-item goods-option-flex">
                                    <div v-for="(c,index) in item.editions[i]" :key="index"
                                        :class="{current:index == detailStore.isActive(route.query.id,index,i)}"
                                        @click="setCurrent({[i]:c},index,$event)">{{c}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="goods-item-quantity goods-option-flex">
                            <div>
                                数量：
                            </div>

                            <div class="goods-item-quantity-btn goods-option-flex">
                                <div class="goods-item-quantity-minusBtn">

                                    <span class="">-</span>
                                </div>
                                <div class="goods-item-quantity-change">
                                    <input type="text">
                                </div>
                                <div class="goods-item-quantity-addBtn">
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div class="goods-item-btn goods-option-flex">
                            <div>
                                <button class="goods-item-btn-buy">
                                    立即购买
                                </button>

                                <button class="goods-item-btn-add">
                                    加入购物车
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- 商品详情 可用router-->
                <div>
                    <RouterView></RouterView>
                </div>
            </div>

        </div>
        <!-- 侧边栏 -->
        <div class="toolkit">
            <div class="toolkit-icon">
                <a href="#">
                    <svg t="1665464860513" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3483" width="30" height="30">
                        <path
                            d="M821.333333 800H547.584l-86.464 96.074667a32 32 0 1 1-47.573333-42.816l96-106.666667A32 32 0 0 1 533.333333 736h288a53.333333 53.333333 0 0 0 53.333334-53.333333V234.666667a53.333333 53.333333 0 0 0-53.333334-53.333334H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333334v448a53.333333 53.333333 0 0 0 53.333334 53.333333h138.666666a32 32 0 0 1 0 64H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V234.666667c0-64.8 52.533333-117.333333 117.333334-117.333334h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333334v448c0 64.8-52.533333 117.333333-117.333334 117.333333zM704 341.333333a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h384zM512 512a32 32 0 0 1 0 64H320a32 32 0 0 1 0-64h192z"
                            p-id="3484" fill="#3c3c3c"></path>
                    </svg>
                </a>
                <a href="#">消息</a>
            </div>
            <div class="toolkit-icon">
                <a href="#">
                    <svg t="1665464903623" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="4515" width="30" height="30">
                        <path
                            d="M927.616 465.6C923.328 236.704 745.888 51.808 528 51.808h-32c-217.888 0-395.328 184.896-399.616 413.76C58.112 487.744 32 528.672 32 576v64c0 70.592 57.408 128 128 128s128-57.408 128-128v-64a128.064 128.064 0 0 0-126.784-127.872C173.728 262.688 318.912 115.808 496 115.808h32c177.12 0 322.272 146.88 334.784 332.32A128.064 128.064 0 0 0 736 576v64c0 57.792 38.72 106.176 91.392 122.016a337.504 337.504 0 0 1-191.936 124.48A79.712 79.712 0 0 0 560 832a80 80 0 1 0 0 160 79.68 79.68 0 0 0 67.872-38.112 402.432 402.432 0 0 0 278.24-193.6C955.968 742.816 992 695.776 992 640v-64c0-47.328-26.112-88.256-64.384-110.4zM224 576v64c0 35.296-28.704 64-64 64s-64-28.704-64-64v-64c0-35.296 28.704-64 64-64s64 28.704 64 64z m704 64c0 34.304-27.2 62.176-61.12 63.712l-2.496-1.184c-0.224 0.512-0.576 0.928-0.8 1.408A64 64 0 0 1 800 640v-64c0-35.296 28.704-64 64-64s64 28.704 64 64v64z"
                            p-id="4516" fill="#3c3c3c"></path>
                    </svg>
                </a>
                <a href="#">官方客服</a>
            </div>
            <div class="toolkit-icon">
                <a href="#">
                    <svg t="1665464940346" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5552" width="30" height="30">
                        <path
                            d="M800.037628 960.010751 223.962372 960.010751c-52.980346 0-95.983874-43.003528-95.983874-95.983874l0-639.892491c0-52.980346 43.003528-95.983874 95.983874-95.983874l447.924744 0c17.717453 0 31.994625 14.277171 31.994625 31.994625s-14.277171 31.994625-31.994625 31.994625L223.962372 192.139761c-17.545439 0-31.994625 14.449185-31.994625 31.994625l0 639.892491c0 17.717453 14.449185 31.994625 31.994625 31.994625l575.903242 0c17.717453 0 31.994625-14.277171 31.994625-31.994625L831.860239 351.94087c0-17.717453 14.277171-31.994625 31.994625-31.994625 17.717453 0 31.994625 14.277171 31.994625 31.994625l0 511.913993C896.021502 916.835209 852.84596 960.010751 800.037628 960.010751z"
                            p-id="5553" fill="#3c3c3c"></path>
                        <path
                            d="M612.026205 447.924744c-8.256677 0-16.341341-3.096254-22.705863-9.460776-12.55703-12.55703-12.55703-32.682681 0-45.239711L907.374433 75.34218c12.55703-12.55703 32.682681-12.55703 45.239711 0s12.55703 32.682681 0 45.239711L634.560054 438.635982C628.367546 444.82849 620.110868 447.924744 612.026205 447.924744z"
                            p-id="5554" fill="#3c3c3c"></path>
                        <path
                            d="M479.919368 447.924744 287.951621 447.924744c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625L479.919368 383.935495c17.717453 0 31.994625 14.277171 31.994625 31.994625C511.913993 433.647573 497.636822 447.924744 479.919368 447.924744z"
                            p-id="5555" fill="#3c3c3c"></path>
                        <path
                            d="M672.05913 639.892491 287.951621 639.892491c-17.717453 0-31.994625-14.277171-31.994625-31.994625s14.277171-31.994625 31.994625-31.994625l383.935495 0c17.717453 0 31.994625 14.277171 31.994625 31.994625S689.604569 639.892491 672.05913 639.892491z"
                            p-id="5556" fill="#3c3c3c"></path>
                    </svg>
                </a>
                <a href="#">反馈</a>
            </div>
            <div class="toolkit-icon">
                <a href="#">
                    <svg t="1665464989378" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6740" width="30" height="30">
                        <path d="M480 256h64v384h-64z" p-id="6741" fill="#3c3c3c"></path>
                        <path d="M512 736m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" p-id="6742" fill="#3c3c3c">
                        </path>
                        <path
                            d="M512 0C229.76 0 0 229.76 0 512s229.76 512 512 512 512-229.76 512-512-229.76-512-512-512z m0 960c-247.04 0-448-200.96-448-448s200.96-448 448-448 448 200.96 448 448-200.96 448-448 448z"
                            p-id="6743" fill="#3c3c3c"></path>
                    </svg>
                </a>
                <a href="#">举报</a>
            </div>
            <div class="toolkit-icon to-up">
                <a href="#"><svg t="1665465076091" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="7914" width="30" height="30">
                        <path
                            d="M557.654996 981.669904c-6.499999 59.041994-88.986991 53.776995-92.179991 0-0.083-40.896996-0.083-641.390937-0.083-641.390937l-283.839972 273.963973c-44.472996 38.308996-97.43499-22.922998-64.344994-63.215994 125.709988-121.895988 351.289966-340.004967 356.507965-345.049966 20.810998-22.608998 53.572995-23.779998 75.721993 0 41.406996 40.037996 348.700966 336.328967 358.028965 346.989966 31.166997 38.741996-19.223998 96.073991-62.242994 63.773994C834.109969 607.310941 557.739996 340.267967 557.739996 340.267967M116.396039 3.332l786.487923 0 0 89.285991L116.396039 92.617991 116.396039 3.332z"
                            p-id="7915" fill="#3c3c3c"></path>
                    </svg></a>
                <a href="#">回顶部</a>
            </div>
        </div>
    </div>

</template>

<script setup>
import { reactive, getCurrentInstance, ref } from 'vue'
import { useRoute } from 'vue-router';
import useShopListStore from '@/stores/shoplist'
import useDetailStore from '@/stores/detail'

const route = useRoute();
const detailStore = useDetailStore()
const shopListStore = useShopListStore()
const item = shopListStore.getItemById(route.query.id)



//图片放大镜
//1. zoom_area的显示位置
//2. zoom_image中图片位置
const currentInstance = getCurrentInstance()

const zoom_area_style = reactive({ top: '', left: '' });
const zoom_image_style = reactive({ top: '', left: '' })


document.addEventListener('mousemove', function (e) {

    let mouse_x = e.clientX;
    let mouse_y = e.clientY;

    // console.log(mouse_x, mouse_y)
    // console.log(currentInstance.ctx.$options.__name)
    moveZoomArea(mouse_x, mouse_y)

})
const moveZoomArea = (mouse_x, mouse_y) => {

    if (document.getElementsByClassName('goods-info-image') != null) {
        const pos = document.getElementsByClassName('goods-info-image')[0].getBoundingClientRect()

        // let area_x = window.event.clientX - pos.left
        // let area_y = window.event.clientY - pos.top

        let area_x = mouse_x - pos.left - 100
        let area_y = mouse_y - pos.top - 100

        if (area_x > 0 && area_x < 200) {
            zoom_area_style.left = area_x + 'px'
            zoom_image_style.left = '-' + 2 * area_x + 'px'
        }

        if (area_y > 0 && area_y < 200) {
            zoom_area_style.top = area_y + 'px'
            zoom_image_style.top = '-' + 2 * area_y + 'px'
        }
    }
    // console.log(pos.left, pos.top, window.event.clientX, window.event.clientY)
    // console.log(zoom_image_style.top, zoom_image_style.left)
}



//设置current类型
// const isCurrent = ref(false)

const setCurrent = (item) => {
    // const exist = detailStore.currentState[Object.keys(item)] == Object.values(item)
    // console.log(detailStore.currentState[Object.keys(item)], Object.keys(item), index)

    // detailStore.currentState[Object.keys(item)] = undefined ? !exist : exist
    detailStore.setCurrentState(item)
    // e.path[0].className = 'current' ?
    // console.log(Object.keys(item), index, e)

    // isCurrent.value = !isCurrent.value
}


//添加购物车
const addCart = () => {

}


</script>

<script >

</script>

<style lang="scss" scoped>
input {
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}

input::-webkit-input-placeholder {
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
    font-size: 15px;
}

.head {
    display: flex;

    padding: 10px 0px 0px 0px;
    height: 60px;
}

.head-logo {

    left: 10%;
    position: relative;
}

.head-logo>img {
    width: 50px;
    height: 50px;

}

.head-input {
    left: 50%;
    position: relative;
    background-color: #f3f3f3;
    width: 310px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    margin: 5px;
}

.head-input>svg {
    padding: 10px;
}

.head-input>input {
    padding: 10px;
    outline-style: none;
    border: 0;
    background-color: transparent;

}

.head-btn {
    left: 50%;
    position: relative;

}

.head-btn>button {
    height: 40px;
    margin: 5px;
    border-radius: 20px;
    border: 1px solid #f3f3f3;
    width: min-content;
    background-color: #fff;
    cursor: pointer;
}

.head-btn-text {
    height: min-content;
    width: 85px;
}

.body {
    background: url(@/assets/body/bg.png);
    padding-bottom: 3000px;
}

.main {
    margin: 0px 120px;
    padding: 20px 0px;
}

.shop {
    border-radius: 50px;
    height: 80px;
    background-color: #fff;
    border: 1px;
    display: flex;
}

.shop-info {
    display: flex;
    width: 200px;
}

.shop-icon {
    width: 80px;
    height: 80px;
    text-align: center;
    border-radius: 40px;
}

.shop-icon>img {
    border-radius: 40px;
    padding: 10px;
    width: stretch;
    height: stretch;

}

.shop-info-hover {
    display: none;
    min-width: 200px;
    background-color: #fff;
    position: absolute;
    top: 208px;
    border-radius: 20px;
    padding: 10px;
    z-index: 1;
}

.shop-info-hover>div {
    font: 16px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}

.shop-info-hover-score {
    display: flex;
    padding: 10px 18px;
}

.shop-info-hover-score>div {
    padding: 16px;
}

.shop-info-hover-score p {
    font-size: 14px;
    color: #7f7f7f;
    text-align: center;
    margin: 0px;

}

.shop-info-hover-btn {
    padding: 8px 79px;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #7f7f7f;
    cursor: pointer;
    font: 14px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}

.shop-info:hover .shop-info-hover {
    display: block;
}



.shop-score {
    display: flex;
    padding: 0px 10px;
}

.shop-score>div {

    padding: 6px 10px;
}

.shop-score-key {
    font-family: PingFangSC-Regular;
    color: #7f7f7f;
    font-size: 14px;
    margin: 10px 0px;
}

.shop-score-value {
    margin: 10px 0px;
}

.shop-btn {
    display: flex;
    left: 40%;
    position: relative;
}

.shop-btn>button {
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;
    border: 1px solid #f3f3f3;
    margin: 20px 10px;
    cursor: pointer;
}

.shop-btn img {
    width: 10px;
    height: 10px;
}

.goods-info {
    height: 1000px;
    width: stretch;
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    margin-top: 20px;
    display: flex;
    padding: 20px;
}

.goods-info-image {
    width: 400px;
    height: 400px;

    position: relative;
    display: flex;

    margin-right: 20px;
}

.goods-info-image>img {
    width: stretch;
    border-radius: 10px;
}

.goods-info-image:hover div {
    display: block;

}

.goods-info-image>div {
    position: absolute;
    display: none;

}

#goods-info-image-zoom-area {
    width: 200px;
    height: 200px;
    background-color: #7f7f7f;
    opacity: 0.3;
    cursor: move;
}

#goods-info-image-zoom-image {
    width: 400px;
    height: 400px;
    left: 400px;
    overflow: hidden;
    margin: 0px 15px;
    border-radius: 10px;
    z-index: 1;
}

#goods-info-image-zoom-image>img {
    position: relative;

}

.goods-title {
    width: stretch;
}



.goods-title-big {
    font-weight: 700;
    font-size: 20px;
    margin-top: 0px;
}

.goods-title-small {
    font-weight: 400;
    font-size: 14px;
    color: #7f7f7f;
}

.goods-title-money {
    color: #ff5000;
}

.goods-title-trigger {
    display: flex;
    border-radius: 20px;
    border: 1px solid #f3f3f3;
    width: min-content;
    transition: color .3s, background-color .3s;
    cursor: pointer;
    position: relative;
}

.goods-title-trigger>.opt {
    padding: 10px 20px;
    width: max-content;
    font-size: 14px;
}

.goods-title-trigger-hover,
.goods-title-trigger-hover-qr {
    display: none;
    position: absolute;
}


.goods-title-trigger-hover-qr {
    display: none;
    box-shadow: 0 12px 24px 0 rgba(#000000, 0.06);
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50px;
    left: -110px;
    border-radius: 10px;
    border: 1px solid rgba(#000000, 0.06);
}

.goods-title-trigger-hover-qr img {
    width: stretch;
    border-radius: 10px;
}

.goods-title-trigger-hover {
    width: 500px;
    height: 600px;
    background-color: #fff;
    position: absolute;
    top: 50px;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.06);
    /* left: 110px; */
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.goods-title-trigger:hover .goods-title-trigger-hover,
.goods-title-trigger:hover .goods-title-trigger-hover-qr {
    display: block;

}

.goods-title-trigger:hover {
    background-color: #f3f3f3;


}

.goods-title-trigger:hover .opt {
    color: #ff5000;

}

.goods-title-trigger path {
    transition: fill .3s;
}

.goods-title-trigger:hover svg {
    transform: scale(1, -1);
}

.goods-title-trigger:hover path {
    fill: #ff5000;

}

.goods-option-flex {
    display: flex;
}

.goods-options {
    padding-top: 15px;
}


.goods-option>div:first-child {
    padding: 20px 0px;
    width: 80px;
    cursor: pointer;
}



.goods-option-item>div {
    background-color: #f3f3f3;
    padding: 10px;
    border-radius: 10px;
    margin: 10px;
    font: 14px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
    cursor: pointer;
    transition: background-color .3s;
}

.goods-option-item>div:hover {
    background-color: #e0e0e0;
}

.goods-item-quantity {
    padding-top: 15px;
}

.goods-item-quantity>div:first-child {
    width: 80px;
    padding: 5px 0px;
}



.goods-item-quantity-btn>div:not(.goods-item-quantity-change) {
    height: 36px;
    width: 36px;
    background-color: #f3f3f3;
    text-align: center;
    cursor: pointer;
}

.goods-item-quantity-btn span {
    display: inline-block;
    padding: 4px 0px;

}

.goods-item-quantity-minusBtn {
    border-top-left-radius: 5.645px;
    border-bottom-left-radius: 5.645px;

}

.goods-item-quantity-change {
    height: 36px;
    width: 48.75px;
    margin: 0px 1px;
    background-color: #f3f3f3;
    text-align: center;
}

.goods-item-quantity-change>input {
    text-decoration: none;
    background-color: inherit;
    border: 0;
    outline: none;
    width: stretch;
    text-align: center;
    padding: 4px 2px;
    width: 44px;
    background-color: transparent;
    font-size: 16px;
}

.goods-item-quantity-addBtn {
    border-top-right-radius: 5.645px;
    border-bottom-right-radius: 5.645px;

}

.current {
    border: 1px solid #ff5000;
    background-color: #fff7f3;
}

.goods-item-btn {
    margin: 25px 20px;
}

.goods-item-btn button {
    border: 0;
    height: 50px;
    width: 125px;
    color: #fff;
    box-shadow: rgba(255, 203, 0, 0.2) 0px 9px 13px 0px;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
}


.goods-item-btn-buy {
    background: linear-gradient(90deg, rgb(255, 119, 0), rgb(255, 73, 0));
    border-radius: 30px 0px 0px 30px;
}

.goods-item-btn-add {
    background: linear-gradient(90deg, rgb(255, 203, 0), rgb(255, 148, 2));
    border-radius: 0px 30px 30px 0px;
}

.toolkit {
    width: 70px;
    height: min-content;
    position: fixed;
    background-color: #fff;
    right: 0px;
    bottom: 50%;
    transform: translateY(50%);
    border-radius: 20px 0px 0px 20px;
    font: 14px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;

}

.toolkit a {
    text-decoration: none;
    display: inline-block;
    color: #6C6C6C;
}

.toolkit-icon {
    width: 50px;
    margin: 20px 10px 20px 10px;
    text-align: center;
}
</style>