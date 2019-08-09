<template>
  <div class="detailpage">
    <div class="header">
      <!-- 回退上一页 -->
      <van-icon name="arrow-left" @click="getBack" />
      <!-- 标签 -->
      
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // active: 2,
      // id: this.$route.params.id
    };
  },
  created() {},
  methods: {
    getBack() {
      //回退上一页
      // this.$router.go(-1);
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
    // background: #fff;
    font-size: 20px;
    display: flex;
    line-height: 48px;
    .van-icon {
      line-height: 48px;
      font-size: 24px;
      padding-left: 10px;
    }
  }
}
</style>
