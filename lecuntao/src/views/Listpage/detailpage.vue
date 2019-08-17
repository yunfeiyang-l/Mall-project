<template>
  <!-- 详情页 -->
  <div class="detailpage">
    <div class="header">
      <!-- 回退上一页 -->
      <van-icon name="arrow-left" @click="getBack" />
      <!-- 标签 -->
      <div class="labelSpan">
        <span>商品</span>
        <span>详情</span>
        <span>推荐</span>
        <span>营业执照</span>
      </div>
    </div>
    <!-- 轮播 -->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="i in bund_goods.img_list" :key="i.index">
        <img :src="i.goods_image" alt="">
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/
        <span>5</span>
      </div>
    </van-swipe>
    <div class="jieshao">
      <p style="width: 80%; font-size:16px ; margin-bottom: 20px;">{{goods_name}}</p>
      <span style="font-size: 0.48rem;color: #ff4b4b;">￥{{this.goods_price}}</span>
      <p style="color: #808080;font-size: 10px; margin-top: 15px;">运费：{{fare_title}}</p>
    </div>
    <!-- 图片 -->
    <div class="picture" v-html="goods_body">
      <!-- {{ this.goodsDetails}} -->
    </div>

    <!-- 底部 -->
     <!-- <van-action-sheet v-model="show" title="标题" style="z-index: 999;">
      <p>内容</p>
    </van-action-sheet> -->
    
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" info="0" text="购物车" @click="onClickIcon" to='/shopping'/>
      <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" ></van-goods-action-button>
       
      <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      active: 0,
      current: 0,
      bund_goods: [],
      goods_name: "",
      goods_price: "",
      fare_title: "",
      // id: this.$route.params.id
      goods_body: ""
    };
  },
  created() {
    this.detApage();
  },
  methods: {
    onClickIcon() {
      // Toast('点击图标');
    },
    onClickButton() {
      // Toast('点击按钮');
    },
    getBack() {
      //回退上一页
      this.$router.go(-1);
    },
    onChange(index) {
      //轮播图页码
      this.current = index;
    },
    async detApage() {
      //发送axions
      let bund_goods = await this.$axios(
        "https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/xiangqing"
      );
      this.bund_goods = bund_goods.data.datas;
      this.goods_name = this.bund_goods.goods_info.goods_name;
      this.goods_price = this.bund_goods.goods_info.goods_price;
      this.fare_title = this.bund_goods.goods_info.fare_title;

      //  图片
      let goodsDetail = await this.$axios(
        "https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/tupian"
      );
      this.goods_body = goodsDetail.data.datas.goodsDetail.goods_body;
    }
  }
};
</script>

<style lang="scss">
.detailpage {
  .headerTob {
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
  }
  .header {
    height: 48px;
    font-size: 20px;
    display: flex;
    line-height: 48px;
    border-bottom: 1px solid #d5d5d5;
    .van-icon {
      line-height: 48px;
      font-size: 24px;
      padding-left: 10px;
    }
  }
  //标签
  .labelSpan {
    width: 100%;
    font-size: 14px;
    padding-right: 50px;
    display: flex;
    justify-content: space-around;
    span {
      flex: 1;
      text-align: center;
      line-height: 48px;
      //  border-bottom: 2px solid #000;
    }
  }
  //轮播

  .van-swipe {
    .custom-indicator {
      position: absolute;
      right: 20px;
      bottom: 35px;
      background: #ddd;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      
    }
  }
  .jieshao {
    margin: 10px 9px 0px;
  }
  // 图片
  .picture {
    img {
      width: 100%;
    }
  }
  // 底部
  .van-goods-action-button--first {
    margin-left: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  .van-goods-action-button {
    height: 50px;
  }
  .van-goods-action-button--last {
    margin-right: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}
</style>
