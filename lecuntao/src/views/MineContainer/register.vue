<template>
  <div class="MineContainer">
    <div class="register">
      <van-icon name="cross" @click="huiHome"/>
      <h2>注册</h2>
    </div>
    <div class="butTon">
      <button class="b1" @click="denglu">登录</button>
      <button class="b2" @click="zhuce">注册</button>
    </div>
    <!-- 用户名 -->
    <div class="namepwd">
      <input type="text" placeholder="输入手机号/用户名" class="username" name="username" id="username" autocomplete="off">
      <input type="password" placeholder="请输入密码" class="pwd pwd1" name="password" id="userpwd" autocomplete="off">
      <input type="password" placeholder="请确认密码" class="pwd" name="password" id="userpwd" autocomplete="off">
    </div>
    <!-- 登录 -->
    <p>
      <button >注册</button>
      <button class="b2">找回密码</button>
    </p>
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
      dengLu:true,
    };
  },
  created(){
  },
  methods: {
    denglu() {
      this.$router.push({
        name: "mine"
      })
    },
    zhuce() {
      //注册
      this.$router.push({
        name: "register"
      })
    },
    huiHome(){
      this.$router.push({
        name: "home"
      })
    }
  }
};
</script>
<style lang="scss">
.MineContainer {
  background: #f6f6f6;
  padding: 10px 10px 230px 10px;
  .register {
    //顶部
    display: flex;
    font-size: 20px;
    height: 48px;

    .van-icon {
      font-size: 28px;
      color: red;
    }
    h2 {
      width: 100%;
      line-height: 28px;
      text-align: center;
    }
  }
  .butTon {
    //按钮

    width: 100%;
    border: 1px solid red;
    border-radius: 5px;
    .b2 {
      background: #f81234;
      color: #fff;
    }
    .b1 {
      background: #fff;
      color: #808080;
    }
    button {
      color: #fff;
      width: 50%;
      height: 40px;
      border: 1px solid #f81234;
      font-size: 14px;
      // background: #f81234;
    }
  }
  .namepwd {
    //账号密码
    margin-top: 20px;
    // border: 1px solid #000;
    font-size: 16px;
    padding: 5px;
    background: #fff;
    border-radius: 5px;
    .username {
      width: 99%;
      height: 50px;
      border: 0px solid #000;
      border-bottom: 2px solid #d6d6d6;
    }
    
    .pwd {
      width: 99%;
      height: 50px;
      border: 0px solid #000;
    }
    .pwd1{
      border-bottom: 2px solid #d6d6d6;
    }
  }
  p {
    margin-top: 50px;
    button {
      margin-top: 5px;
      width: 100%;
      height: 45px;
      background: #f81234;
      border: 0px;
      color: #fff;
      font-size: 16px;
      border-radius: 5px;
    }
    .b2 {
      color: #808080;
      background: #fff;
      border-radius: 5px;
    }
  }
 
}
</style>

