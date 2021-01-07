<template>
  <div class="container">
    <el-container style="height: 100%">
      <el-aside width="200px">
        <el-menu
          style="height:100%;text-align:left"
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router

        >
          <el-menu-item index="home">
            <i class="el-icon-menu"></i>
            <span slot="title">home</span>
          </el-menu-item>
          <el-menu-item v-for="(item,index) in arr" :key="index" :index="item.path">
            <i class="el-icon-setting"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
            <!--router-view组件是一个 functional 组件，渲染路径匹配到的视图组件-->
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <!--不需要缓存组件-->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [
        {
          path: 'slot',
          name: '插槽'
        },
        {
          path: 'countDown',
          name: '倒计时'
        },
        {
          path: 'treeSelect',
          name: '树状图select组合'
        },
        {
          path: 'textMock',
          name: '使用mock'
        },
        {
          path: '/keepalive',
          name: 'keepalive'
        },
        {
          path: '/udi',
          name: '自定义指令'
        },
        {
          path: '/vuex',
          name: 'vuex语法糖的使用'
        },
        {
          path: '/dynamicForm',
          name: '测试动态表单'
        },
        {
          path: '/OwndynamicForm',
          name: '自己写动态表单'
        },

        {
          path: '/collapse',
          name: '折叠面板点击请求数据'
        },
        {
          path: '/form',
          name: 'form'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.container {
  height: 100%;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  // text-align: center;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  // text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  // text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
