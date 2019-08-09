<template>

  <div id="app">
    <!-- 顶部Header -->
    

    <!-- 中间，路由区域 -->
    <router-view></router-view>
   

    <!-- 底部Tabbar -->

    <van-tabbar v-model="active" active-color="#f81234">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="0" to="/shopping">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends" to="/mine">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style>
#app {
  background-color: #fff;
   padding-bottom: 50px;
}

</style>
