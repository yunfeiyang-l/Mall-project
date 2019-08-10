<template>
  <div class="listpage">
    <!-- 头部 -->
    <div class="headerTob">
      <div class="header">
        <van-icon name="arrow-left" @click="getBack"/>
        <h2>干货</h2>
      </div>
      <!-- 标签 -->
      <div class="label">
        <span>全部</span>
        <span>销量优先</span>
        <span>价格</span>
        <span>人气</span>
      </div>
    </div>
    <!-- 内容 -->
    <ul class="main">
      <li v-for="i in getlistPages.list" :key="i.index" :id="i.goods_id" @click="skipDeta(i.goods_id)">
        <!-- 渲染图片 -->
        <img :src="i.goods_image" alt="">
        <!-- 渲染详情 -->
        <p v-text="i.goods_name"></p>
        <div>
          <!-- 渲染价格 -->
          <span class="s1">{{i.goods_price}}元</span>
          <!-- 渲染件数 -->
          <span class="s2">{{i.goods_salenum}}人付款</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getlistPages: []
    };
  },
  created() {
    this.listPage();  //进来就发送axios
  },
  methods: {
    async listPage() {  //发送axios请求数据
      let getlistPage = await this.$axios(
        "https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/listpage"
      );
      this.getlistPages = getlistPage.data.datas;
      // console.log(this.getlistPages);
    },
    getBack(){//回退
      this.$router.go(-1);
    },
    skipDeta(id){//跳转详情页
      this.$router.push({
        name:'detailpage',
        params:{id}
      })

    }

  }
};
</script>

<style lang="scss">
.listpage {
  .headerTob{
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
   
  }
  .header {
    height: 48px;
    // background: #fff;
    font-size: 20px;
    display: flex;
    line-height: 48px;
    .van-icon {
      line-height: 48px;
      font-size: 24px;
      padding-left: 10px;
    }
    h2 {
      width: 100%;
      text-align: center;
      line-height: 48px;
    }
  }
  .label {
    height: 30px;
    display: flex;
    justify-content: space-around;
    span {
      font-size: 15px;
      line-height: 30px;
    }
  }
  .main {
    padding: 75px 0 5px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #f0f0f0;
    li {
      width: 48.5%;
      background: #fff;
      margin-top: 5px;
      margin-left: 3.5px;
      img {
        width: 180px;
        height: 160px;
       
      }
      p {
        width: 168px;
        height: 36px;
        margin: 0 10px;
        overflow: hidden;
        font-size: 14px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      div {
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        .s1 {
          font-size: 14px;
          color: red;
        }
        .s2 {
          color: #666;
        }
      }
    }
  }
}
</style>
