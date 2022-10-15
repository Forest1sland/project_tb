<!-- 内容：中国大陆 t_1478752944458_0 手机逛淘宝 网页无障碍 我的淘宝 购物车 收藏夹 商品分类 免费开店 千牛卖家中心 联系客服 -->
<!-- 使用下拉菜单 -->

<!-- 1. 背景浅灰色
     2. 标题和背景颜色一致，当移动至当前标题时变成白色并弹出下拉菜单，菜单也为白色
        标题有a标签和div标签，a标签没有下拉菜单，div标签有下拉菜单。
        已设置了标题中的a标签的样式和触发事件
        每个标题为一个class。
     3. 当移动至下拉菜单里的选项时，选项背景变成深灰色。 -->
<template>
    <div class="h">
        <div class="title left">
            <span>中国大陆</span>
            <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2403" width="10" height="10">
                <path
                    d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                    p-id="2404"></path>
            </svg>
            <div class="title-hover">
                <a href="#">全球</a><br>
                <a href="#">中国大陆</a><br>
                <a href="#">中国香港</a><br>
                <a href="#">中国台湾</a><br>
                <a href="#">中国澳门</a><br>
                <a href="#">韩国</a><br>
                <a href="#">马来西亚</a><br>
                <a href="#">澳大利亚</a><br>
                <a href="#">新加坡</a><br>
                <a href="#">新西兰</a><br>
                <a href="#">加拿大</a><br>
                <a href="#">日本</a><br>
                <a href="#">越南</a><br>
                <a href="#">泰国</a><br>
            </div>
        </div>

        <div class="title left">
            <a href="#">B21044328吴江</a>

            <div class="title-hover profile">
                <div class="pro_head">
                    <img src="@/assets/head/head.jpg">

                </div>
                <div class="pro_options">
                    <a href="#">账号管理</a>
                    <a href="#" style="left:140px">退出</a>
                    <p><br>淘气值：800<br>
                        普通会员</p>
                </div>
                <div class="pro_a">
                    <a href="#">查看你的专属权益</a>
                </div>
            </div>
            <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2403" width="20" height="10">
                <path
                    d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                    p-id="2404"></path>
            </svg>
        </div>


        <div class="title left">
            <a href="#">手机逛淘宝</a>
        </div>

        <div class="title left">
            <a href="#">网页无障碍</a>
        </div>


        <div class="title right">
            <a href="#">淘宝网首页</a>
        </div>
        <div class="title right">
            <a href="#">我的淘宝</a>
            <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2403" width="10" height="10">
                <path
                    d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                    p-id="2404"></path>
            </svg>
            <div class="title-hover">
                <a href="#">已买到的宝贝</a><br>
                <a href="#">我的足迹</a>
            </div>
        </div>

        <div class="title right">
            <svg t="1665307415388" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="1492" width="10" height="10">
                <path
                    d="M372.621 553.482c9.956 3.259 20.07 5.063 29.8 5.063h330.768c38.24 0 83.85-27.375 102.323-61.988l179.143-335.66c18.271-34.235 1.886-61.988-37.394-61.988H236.612L180.364 0H0v89.15h104.116l7.027 9.76h-1.063l188.17 387.668-73.947 131.925c-35.473 63.285-5.366 120.324 53.498 126.06h641.472v-92.781h-588.5c-9.656 0-13.328-6.885-8.678-14.59l50.526-83.71z m-55.53 441.427c59.446 0 107.636-48.19 107.636-107.636s-48.19-107.637-107.636-107.637-107.636 48.19-107.636 107.637c0 59.446 48.19 107.636 107.636 107.636z m494.545 0c59.446 0 107.637-48.19 107.637-107.636s-48.19-107.637-107.637-107.637C752.19 779.636 704 827.826 704 887.273c0 59.446 48.19 107.636 107.636 107.636z"
                    fill="#FF0000" p-id="1493"></path>
            </svg>
            <a @click="toShoppingCart">购物车</a>
        </div>


        <div class="title right">
            <svg t="1665307857557" class="icon collection" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="1663" width="13" height="13">
                <path
                    d="M885.76 404.48c-5.12-17.92-23.04-30.72-40.96-33.28l-186.88-28.16-81.92-168.96c-7.68-17.92-25.6-28.16-46.08-28.16s-38.4 10.24-46.08 28.16l-81.92 168.96-186.88 28.16c-17.92 2.56-35.84 15.36-40.96 33.28-5.12 17.92-2.56 38.4 12.8 51.2l135.68 135.68-30.72 189.44c-2.56 17.92 5.12 38.4 20.48 48.64 7.68 5.12 20.48 10.24 30.72 10.24 7.68 0 17.92-2.56 25.6-5.12l163.84-87.04 163.84 87.04c7.68 5.12 15.36 5.12 25.6 5.12s20.48-2.56 30.72-10.24c15.36-10.24 25.6-30.72 20.48-48.64L742.4 591.36l135.68-135.68c7.68-12.8 12.8-33.28 7.68-51.2z"
                    p-id="1664" fill="#707070"></path>
            </svg>
            <a href="#">收藏夹</a>
            <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2403" width="10" height="10">
                <path
                    d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                    p-id="2404"></path>
            </svg>
            <div class="title-hover">
                <a href="#">收藏的宝贝</a><br>
                <a href="#">收藏的店铺</a>
            </div>
        </div>
        <div class="title right">
            <a href="#">商品分类</a>
        </div>
        <div class="title right">
            <a href="#">免费开店</a>

        </div>


        <div class="title right">
            <a href="#">千牛卖家中心</a>
            <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2403" width="10" height="10">
                <path
                    d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                    p-id="2404"></path>
            </svg>
            <div class="title-hover">
                <a href="#">开店入驻</a><br>
                <a href="#">已卖出的宝贝</a><br>
                <a href="#">出售中的宝贝</a><br>
                <a href="#">卖家服务市场</a><br>
                <a href="#">卖家培训中心</a><br>
                <a href="#">体检中心</a><br>
                <a href="#">电商学习中心</a>
            </div>
        </div>
        <div class="title right">
            <a href="#">联系客服</a>
            <svg t="1665308574663" class="icon array" viewBox="0 0 1024 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2403" width="10" height="10">
                <path
                    d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                    p-id="2404"></path>
            </svg>
            <div class="title-hover">
                <a href="#">消费者客服</a>
                <a href="#">卖家客服</a>
                <a href="#">意见反馈</a>
                <a href="#">网页版旺旺</a>
            </div>
        </div>

    </div>

</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const toShoppingCart = () => {
    router.push(
        '/ShoppingCart',
    )
}


</script>

<script >

</script>

<style lang="scss" scoped>
.h {
    background-color: #f5f5f5;
}

// a标签样式 
a {
    text-decoration: none;
    color: #6C6C6C;
    display: inline-block;
    width: 100%;
    padding: 10px 10px 10px 10px;
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}

// a标签 移动变色样式
a:hover {
    color: #fd4400;
}

//标题样式
.title {
    padding: 0px 10px 0px 10px;
    position: relative;
    display: inline-block;
}

//第一个标题为span
.title>span {
    color: #6C6C6C;
    display: inline-block;
    padding: 10px 10px 10px 10px;
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
}

//放置显示下拉菜单
.title:hover .title-hover {
    display: block;

}

//放置将背景设置为白色
.title:hover {
    background-color: #fff;
}

//放置改变收藏夹图标
.title:hover .collection>path {
    fill: #fd4400;
}

//放置改变a标签颜色
.title>a:hover {
    color: #fd4400;
}

//设置下拉菜单
.title-hover {
    display: none;
    position: absolute;
    right: 5px;
    min-width: 80px;
    background-color: #f9f9f9;
    z-index: 100;

}

//下拉菜单的样式
.title-hover>a {
    background-color: #fff;
}

//偏移
.left {
    left: 50px;
}

//偏移
.right {
    left: 300px;
    cursor: pointer;
}

//图标位置
.icon {
    position: absolute;
    top: 13px;
    left: 2px;

}

//设置箭头位置
.array {
    position: absolute;
    left: 80%;
}

//profile头像设置
img {
    // position: relative;
    margin: 20px;
    width: 40px;
    height: 40px;
}

//profile位置
.profile {
    position: absolute;
    left: 1px;
    min-width: 230px;
    background-color: #fff;
    padding: 10px;
}

.pro_options p {

    position: relative;
    color: #6C6C6C;
    display: inline-block;
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
    margin: 0px;
    margin-top: 2px;
}

.profile a {
    // position: absolute;
    text-align: right;
    display: inline;


}

.pro_head {
    float: left;
    margin-right: 10px;
    margin-left: 9px;
    width: 62px;
    height: 62px;
    padding: 9px;
    box-sizing: content-box;
}

.pro_options {
    height: 80px;
}

.pro_a a {
    width: auto;
    display: block;
    text-align: center;
    border: 1px solid #FFE8DE;
    background: #FFF0E8;
    font: 12px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-serif;
    color: #fd4400;
}
</style>