<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header>
      <router-link tag="div" class="iron-main__logo" to="/">
        <img class="logo" src="../../assets/iron-logo.png">
        <span class="text">Iron Push Man</span>
      </router-link>
      <div class="iron-main__nav">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 8px; font-size: 18px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleLogout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>小旋风</span>
      </div>
    </el-header>
    <el-container>
      <el-aside width="250px">
        <el-menu
          router
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航一</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">导航三</span>
          </el-menu-item>-->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/page1">选项1</el-menu-item>
              <el-menu-item index="/page2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/page3">选项1</el-menu-item>
              <el-menu-item index="/page4">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/page5">选项1</el-menu-item>
              <el-menu-item index="/page6">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script src="./main.js"></script>

<style lang="scss">
.el-aside {
  background-color: rgb(84, 92, 100);
  padding-top: 16px;
}
.el-button--primary {
  background-color: #fbb03a;
  border-color: #fbb03a;
}
.el-button--primary:hover {
  background: #fcc061;
  border-color: #fcc061;
}
.el-button--primary:focus {
  background: #fcc061;
  border-color: #fcc061;
}
.el-header {
  color: rgba(80, 80, 80, 1);
  line-height: 60px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  padding-left: 0;
}
.el-col-12 {
  width: 16%;
}
.el-menu {
  border-right: none;
}
.el-menu-item {
  &.is-active {
    background-color: rgb(67, 74, 80) !important;
  }
}

@include b(main) {
  @include e(logo) {
    float: left;
    height: 40px;
    width: 230px;
    padding: 10px;
    line-height: 40px;
    cursor: pointer;
    background-color: rgb(84, 92, 100);

    .logo {
      height: 36px;
      margin-right: 5px;
      margin-top: 2px;
    }

    .text {
      font-size: 18px;
      font-weight: bold;
      color: white;
    }
  }

  @include e(nav) {
    float: right;
    font-size: 16px;
    margin-right: 10px;
  }
}
</style>
