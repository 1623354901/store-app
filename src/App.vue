<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <!-- 2、顶部区域 -->
    <!-- 2.2 按需导入 -->
    <mt-header fixed title="我的商城"></mt-header>

    <!-- 中间的 路由 router-view 区域 -->
    <!-- 9.设置页面滑动 -->
    <!-- 9.1 将router-view 用transition将页面包裹起来 设置动画效果-->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域-->
    <!-- 3.2 拷贝，并修改内容，图标，在引入购物车图标时发现需要引入icon-extra.css文件 (查看MUI例子里看到) -->
    <!-- 4.3 设置路由：将a链接改为 router-link 将href改为 to ,并修改 to 后面路由地址-->
    <!-- 4.4 设置选中路由高亮 -->
    <!-- router.js中路由对象中设置：更改默认路由高亮的类，并去掉首页的 路由高亮 类 -->
    <!-- 5 点击对应的tabbar 展示对应的路由组件 -->
    <!-- 5.1 创建相应的组件 -->
    <!-- 5.2 组件和路由做对应的路由关系 -- > router.js -->
    <!-- 5.5 router-view 站坑-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" to="shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  overflow-x: hidden;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
