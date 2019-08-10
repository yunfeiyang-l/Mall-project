<template>
  <div class="ClassifyContainer">
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action />
    </form>
    <!-- 左侧标签 -->
    <div class="nav">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item v-for="item in this.nav" :key="item.index" :title="item.title" :to="item.url" />
      </van-sidebar>
    </div>
    <!-- 路由内容 -->
    <div class="nav-router">
      <router-view></router-view>
    </div>
    <Tabbuttom/>
  </div>
</template>

<script>
import Tabbuttom from "../Publicfolder/Tabbuttom.vue";
export default {
  components: {
    Tabbuttom
  },
  data() {
    return {
      value: "",
      activeKey: 0,
      nav: [
        {
          title: "农产品",
          url: "nongchan"
        },
        {
          title: "农用物资",
          url: "nongyong"
        },
        {
          title: "通讯/办公",
          url: "commun"
        },
        {
          title: "个护/化妆",
          url: "maquillage"
        },
        { title: "家具/建材" },
        { title: "服装/饰品" },
        { title: "鞋帽/箱包" }
      ]
    };
  }
};
</script>
<style lang="scss">
.ClassifyContainer {
  margin-top: 54px;
  display: flex;
  .van-search {
    top: 0px;
    position: absolute;
    z-index: 99;
    width: 100%;
  }
  .nav {
    .van-sidebar-item {
      text-align: center;
      border: 0px;
      text-decoration: none;
    }
    .van-sidebar-item--select {
      color: red;
      border: #fff 0px;
    }
  }
  .nav-router {
    width: 100%;
    height: 100%;
    // background: pink;
  }
}
</style>
