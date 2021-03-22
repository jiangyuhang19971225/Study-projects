<template>
  <div style="height:100%" @click="hidePanel">
    "
    <div class="topNav" id="myPanel">
      <span>菜单</span>
      <div style="width:100px;background:pink;z-index:667777">
        <li v-for="item in Arr" :key="item" @mouseenter="moveLi(item)">{{ item }}</li>
      </div>
      <transition name="carHistory">
        <div style="width:300px;height:150px;background:red;  position: absolute;top:20px;left:100px;z-index:55" v-if="panelShow">
          <div><b>标题标题标题标题标题标题标题标题标题标题标题</b></div>
          <div>内容:{{ Arr[index - 1] }}</div>
        </div>
      </transition>
    </div>

    <hr />
    <div>
      <div class="search"  v-close>
        <div v-if="newArr.length > 0" style="float:left">
          <el-tag type="info" size="small" closable v-for="(item, index) in newArr" :key="index"> {{ item.key }} :{{ item.value }} </el-tag>
        </div>
        <div class="tag_title" style="float:left">
          <span class="fl"> {{ tag_title }} </span>

          <el-input v-model="input" @keyup.enter.native="enter()" @focus="foucs()" class="fl" width="60px" slot="reference" />
          <div v-if="xuanzeisShow" style="background:red">
            <li @click="xuanze(item)" v-for="(item, index) in data" :key="index">{{ item }}</li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var that = this
export default {
  data() {
    return {
      panelShow: false,
      Arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      input: '',
      inputFalse: true,
      tag_title: '',
      xuanzeisShow: false,
      data: ['实例名', '实例类型', '可选取'],
      newArr: []
    }
  },
  directives: {
    close: {
      inserted(el, binding, vnode) {
        window.addEventListener('click', e => {
          if (!el.contains(e.target)) {
            console.log(vnode.context)
            vnode.context.xuanzeisShow = false
          }
        })
      }
    }
  },
  methods: {
    foucs() {
      this.xuanzeisShow = true
    },
    xuanze(item) {
      this.xuanzeisShow = false
      this.tag_title = item
      if (this.tag_title === '可选取') {
        this.data = ['北京一区', '北京二区']
      }
    },
    enter() {
      const obj = {}
      console.log(this.tag_title)
      obj.key = this.tag_title
      obj.value = this.input
      // obj[this.tag_title] = this.input
      this.newArr.push(obj)
      this.xuanzeisShow = true
      this.tag_title = ''
      this.input = ''
    },
    moveLi(index) {
      console.log(index)
      this.panelShow = false
      if (index) {
        this.panelShow = true
        this.index = index
      }
    },
    hidePanel: function(event) {
      var sp = document.getElementById('myPanel')
      console.log(sp)

      if (sp) {
        if (!sp.contains(event.target)) {
          // 这句是说如果我们点击到了id为myPanel以外的区域
          this.panelShow = false
        }
      }
    }
  }
}
</script>

<style scoped>
.search {
  width: 70%;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  border-color: #006eff;
}
.el-input {
  width: 60px;
}
.el-input /deep/ .el-input__inner {
  height: 20px;
  line-height: 20px;
  border: 0px;
  width: 100%;
}
.topNav {
  width: 70%;

  background-color: rgb(30, 120, 223);
  color: palegoldenrod;
  position: relative;
}
.carHistory-enter {
  animation: carHistory-dialog-fade-in 0.3s ease;
}
.carHistory-leave {
  animation: carHistory-dialog-fade-out 0.3s ease forwards;
}
.carHistory-enter-active {
  animation: carHistory-dialog-fade-in 0.3s ease;
}
.carHistory-leave-active {
  animation: carHistory-dialog-fade-out 0.3s ease forwards;
}

@keyframes carHistory-dialog-fade-in {
  0% {
    transform: translate3d(-100%, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes carHistory-dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 0, 0);
    opacity: 1;
  }
}
</style>
