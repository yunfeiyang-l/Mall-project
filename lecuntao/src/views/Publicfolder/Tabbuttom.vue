<template>
  <div>
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
  data(){
    return{
       active: 0
    }
  }
}
</script>
