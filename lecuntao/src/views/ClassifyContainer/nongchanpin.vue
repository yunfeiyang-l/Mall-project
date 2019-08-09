<template>

  <div class="nongchanpin">
    <div>
      <ul>
        <li v-for="i in chanpinlist.datas" :key="i.index">
          <img :src="i.cate_img" alt="">
          <p>{{i.gc_name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chanpinlist: []
    };
  },
  created() {
    //第一个生命周期
    this.nongChanget();
  },
  methods: {
    //事件
    async nongChanget() {
      let gethomes = await this.$axios(
        "https://www.easy-mock.com/mock/5d4c1ea6c11cc157dfe0ea09/hoem/nongchan"
      );
      this.chanpinlist = gethomes.data;
      // console.log(this.chanpinlist);
    }
  }
};
</script>

<style lang="scss">
.nongchanpin{
  div{
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        text-align: center;
        width: 33%;
        font-size: 14px;
        color: #333;
        img{
          width: 90px;
        }

      }
    }
  }
}
</style>
