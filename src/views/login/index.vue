<template>
  <div class="iron-login">
    <div class="iron-login__inner">
      <p class="iron-login__title">
        <img class="logo" src="../../assets/iron-logo.png">
        <span class="text">Iron Push Man</span>
      </p>
      <div class="iron-login__subtitle">Iron Push Man 是...推送平台</div>
      <section class="iron-login__form">
        <h3 class="head">账号密码登录</h3>
        <el-input
          class="input-wrap"
          placeholder="账户"
          prefix-icon="el-icon-user"
          v-model="inputAccount"
        ></el-input>
        <el-input class="input-wrap" placeholder="密码" prefix-icon="el-icon-lock" v-model="inputPwd"></el-input>
        <el-button class="btn" type="primary" @click="loginHandle">登录</el-button>
      </section>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.9"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="6"
      linesColor="#BBCAD7"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.9"
      :linesDistance="200"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
  </div>
</template>

<script src="./login.js"></script>

<style lang="scss">
@include b(login) {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  position: relative;

  @include e(inner) {
    width: 368px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  @include e(title) {
    text-align: center;

    .logo {
      height: 44px;
      margin-right: 5px;
    }
    .text {
      font-size: 32px;
      line-height: 44px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: bold;
    }
  }

  @include e(subtitle) {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    text-align: center;
    margin: 12px 0 40px;
  }

  @include e(form) {
    .head {
      text-align: center;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.65);
      font-weight: normal;
      margin-bottom: 34px;
    }

    .input-wrap {
      margin-bottom: 24px;
    }

    .btn {
      width: 100%;
    }
  }
}
</style>