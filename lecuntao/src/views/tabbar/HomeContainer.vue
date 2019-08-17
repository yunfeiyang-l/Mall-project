 <template>

  <div class="homePage">
    <meta name="viewports" content="width-device-width" />
    <!-- 搜索 -->
    <van-search placeholder="请输入搜索关键词" />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="#111">
      <!-- 渲染轮播 -->
      <van-swipe-item v-for="item in lunbohome" :key="item.id">
        <img :src="item.adv_image" alt=""></van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <ul class="navigation">
      <!-- 渲染导航图片 -->
      <li v-for="i in platform" :key="i.index"><img :src="i.cate_image" alt="">
        <p v-text="i.cate_name"></p>
      </li>
    </ul>
    <!-- 渲染乐6集 -->
    <div class="main1">
      <div style="height:30px; background:#ddd;text-align:center; line-height: 30px;font-size: .40rem; ">
        <a href="###">乐6集</a>
      </div>
      <!-- 渲染乐6集 -->
      <img :src="le6ji.le6ji_img" alt="">
      <div>
        <ul>
          <!-- 渲染乐6图片 商品等  价格  -->
          <li v-for="i in le6ji.recommend_goods" :key="i.index">
            <img :src="i.goods_image" alt="">
            <p>{{i.goods_name}}</p>
            <span>￥{{i.goods_price}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 渲染特色馆 -->
    <div class="main1">
      <div style="height:30px; background:#ddd;text-align:center; line-height: 30px;font-size: .40rem; ">
        <a href="###">特色馆</a>
      </div>
      <img :src="feature.feature_img" alt="">
      <div>
        <ul>
          <li v-for="i in feature.recommend_goods" :key="i.index">
            <img :src="i.goods_image" alt="">
            <p>{{i.goods_name}}</p>
            <span>￥{{i.goods_price}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 按钮 -->
    <div style="height:10px; background:#ddd;"></div>
    <van-sticky :offset-top="44">

      <ul class='navButton'>
        <van-button type="warning">
          <van-button round type="primary" size="small">小型按钮</van-button>
          <van-button round type="primary" size="small">小型按钮</van-button>
          <van-button round type="primary" size="small">小型按钮</van-button>
          <van-button round type="primary" size="small">小型按钮</van-button>
          <van-button round type="primary" size="small">小型按钮</van-button>
        </van-button>
      </ul>

    </van-sticky>

    <!-- 商品 电器-日用品 -->
    <!-- 循环生成 -->
    <div class="dianqi" v-for="i in category_goods" :key="i.index">
      <div class="dianqititle" style="height:30px; background:#ddd; line-height: 30px;font-size: 12px; ">
        <span>{{i.cate_info.cate_name}}</span>
        <span style="color:#666">更多</span>
      </div>
      <ul>
        <li v-for="k in i.goods_list" :key="k.index">
          <!-- 渲染图片 -->
          <img :src="k.goods_image" alt="">
          <!-- 渲染详情 -->
          <p>{{k.goods_name}}</p>
          <div>
            <!-- 渲染价格 -->
            <span class="s1">{{k.goods_price}}元</span>
            <!-- 渲染件数 -->
            <span class="s2">已售{{k.goods_salenum}}件</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 热门推荐 -->

    <div class="dianqi">
      <div class="dianqititle" style="height:30px; background:#ddd; line-height: 30px;font-size: 12px; ">
        <span>热门推荐</span>
        <span style="color:#666">更多</span>
      </div>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getRecomm">
        <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        <ul>
          <li v-for="k in Recomm" :key="k.index">
            <!-- 渲染图片 -->
            <img :src="k.goods_image" alt="">
            <!-- 渲染详情 -->
            <p>{{k.goods_name}}</p>
            <div>
              <!-- 渲染价格 -->
              <span class="s1">{{k.goods_price}}元</span>
              <!-- 渲染件数 -->
              <span class="s2">已售{{k.goods_salenum}}件</span>
            </div>
          </li>
        </ul>
      </van-list>
    </div>

    <!-- 底部 -->
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
      lunbohome: [], //轮播
      platform: [], //标签
      le6ji: [], //乐6集
      feature: [], //特色馆
      category_goods: [], //内容二 电器-日用品
      Recomm: [], //热门推荐
      list: [],
      loading: false,
      finished: false
    };
  },
  created() {
    //第二个vue生命周期
    this.getHome(); //调用数据

    this.getRecomm(); //首次触发，进来页面就触发
  },
  methods: {
    //事件放置
    async getHome() {
      //首页数据
      // 发送axios
      let gethomes = await this.$axios(
        "https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/home"
      );
      this.lunbohome = gethomes.data.datas.adv;

      this.platform = gethomes.data.datas.platform.list;
      this.le6ji = gethomes.data.datas.le6ji;
      this.feature = gethomes.data.datas.feature;
      this.category_goods = gethomes.data.datas.category_goods;
    },
    async getRecomm() {
      //底部触发
      //热门推荐
      let gethot = await this.$axios(
        "https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/lanjiazai"
      );
      let getgot1 = await this.$axios(
        "https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/xinlajz"
      );
      this.Recomm = [...gethot.data.datas.list, ...getgot1.data.datas.list]; //旧数据
      // 加载状态结束
      this.loading = false;
      if (this.Recomm.length >= 1) {
        this.finished = true;
      }
    }
  }
};
</script>

<style lang="scss">
.homePage {
  .van-search {
    //搜索 !important
    background: #000;

    width: 100%;
    position: fixed;
    opacity: 0.8;
    z-index: 99;
    color: #000;
  }
  .van-swipe__track {
    img {
      //轮播图
      width: 100%;
    }
  }
  .navigation {
    //导航
    display: flex;
    li {
      text-align: center;
      width: 20%;
      font-size: 0.26rem;
      color: rgb(85, 85, 85);
      padding: 20px 0;
      img {
        display: inline-block;
        width: 55%;
        margin-bottom: 5px;
      }
    }
  }
  .main1 {
    //特色馆和乐6
    overflow: hidden;
    img {
      width: 100%;
      height: 100px;
    }
    ul {
      width: 100%;
      display: flex;
      li {
        text-align: center;
        p {
          width: 87px;
          height: 35px;
          overflow: hidden;
        }
        span {
          color: red;
        }
      }
    }
  }
  .navButton {
    //按钮
    // display: flex;
    // justify-content: space-between;

    .van-button::before {
      padding: 0;
    }
    .van-button--normal {
      padding: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      padding: 10px 0px;
      border: 0px;
      .van-button__text {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 100%;
      }
    }
  }
  .dianqi {
    //电器->日用品
    width: 100%;
    .dianqititle {
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        img {
          width: 150px;
          margin: 15px 19px 20px;
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
}
</style>





 