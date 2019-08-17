<template>
  <div>
    <div class="header">
        <van-icon name="arrow-left" @click="getBack"/>
        <h2>购物车</h2>
      </div>
    <van-checkbox-group class="card-goods" v-model="checkedGoods">
      <van-checkbox
        class="card-goods__item"
        v-for="item in goods"
        :key="item.id"
        :name="item.id"
      >
        <van-card
          :title="item.title"
          :desc="item.desc"
          :num="item.num"
          :price="formatPrice(item.price)"
          :thumb="item.thumb"
        />
      </van-checkbox>
    </van-checkbox-group>
    <van-submit-bar
      :price="totalPrice"
      :disabled="!checkedGoods.length"
      :button-text="submitBarText"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup, Card, SubmitBar, Toast } from 'vant';
export default {
  components: {
    [Card.name]: Card,
    [Checkbox.name]: Checkbox,
    [SubmitBar.name]: SubmitBar,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data() {
    return {
      checkedGoods: ['1', '2', '3'],
      goods: [{
        id: '1',
        title: '乡村风情纯红薯粉丝1200g礼盒纯手工欧阳修故乡江西吉安永丰特产',
        // desc: '约250g，2根',
        price: 3880,
        num: 1,
        thumb: 'https://img.lecuntao.com/data/upload/shop/store/goods/3144/2018/09/17/3144_05905124380086013_360.jpg'
      }, {
        id: '2',
        title: '【特色馆】骏枣 5斤/袋 （运费另计） 5斤 袋 骏枣 甘甜',
        // desc: '约600g',
        price: 2900,
        num: 1,
        thumb: 'https://img.lecuntao.com/data/upload/shop/store/goods/1520/2019/04/03/1520_06076212278530423_360.jpg'
      }, {
        id: '3',
        title: '农家纯手工粉条 10斤 ',
        // desc: '约680g/3个',
        price: 8000,
        num: 1,
        thumb: 'https://img.lecuntao.com/data/upload/shop/store/goods/3735/2018/07/08/3735_05843779611363818_360.jpg'
      }]
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast('点击结算');
    },
    getBack(){ //回退
      this.$router.go(-1)
      
    }
  }
};
</script>

<style lang="scss">
.card-goods {
  padding: 10px 0;
  background-color: #fff;
  &__item {
    position: relative;
    background-color: #fafafa;
    .van-checkbox__label {
      width: 100%;
      height: auto; // temp
      padding: 0 10px 0 15px;
      box-sizing: border-box;
    }
    .van-checkbox__icon {
      top: 50%;
      left: 10px;
      z-index: 1;
      position: absolute;
      margin-top: -10px;
    }
    .van-card__price {
      color: #f44;
      font-size: 14px;
    }
  }
}
  .header {
    height: 48px;
    background: #d6d6d6;
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
  .van-card__title{
    margin-top: 25px;
    font-size: 14px;
  }
  
</style>