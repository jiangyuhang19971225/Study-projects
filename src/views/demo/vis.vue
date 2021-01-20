<template>
  <div class="home">
    <img :src="require('../../../static/svg/cc-activeMQ.svg')" alt="">
    {{ $route.meta.title }}
    <div class="demo"></div>
  </div>
</template>

<script>
import { DataSet, Network } from 'vis'
import axios from 'axios'
export default {
  data() {
    return {
      currObj: {}, // 当前
      data: null,
      next: null,
      prev: null,
      curr: null,
      rightArr: [], // 右侧
      leftArr: [], // 左侧
      nodes: [], // 数据
      edges: [] // fromto
    }
  },
  methods: {
    globalTrace() {
      // create an array with nodes
      var nodes = new DataSet([
        { id: 11, label: '111' },
        { id: 1369, label: '13691' },
        { id: 3247, label: '32471' },
        { id: 3429, label: '32491' },
        { id: 5560, label: '5560', image: require('../../../static/svg/cc-activeMQ.svg'), shape: 'image' },
        { id: 6163, label: '6163' },
        { id: 7404, label: '7404' },
        { id: 7909, label: '7909' }

      ])
      // var nodes = new DataSet(this.nodes)
      // var edges = new DataSet(this.edges)
      // create an array with edges
      var edges = new DataSet([
        // { from: 6163, to: 3247 }
        { from: 3429, to: 5560 },
        { from: 7404, to: 3429 },
        { from: 1369, to: 3429 },
        { from: 7909, to: 3429 },
        { from: 11, to: 7909 }

      ])
      // create a network
      var container = document.querySelector('.demo')

      // provide the data in the vis format
      var data = {
        nodes: nodes,
        edges: edges
      }
      var options = {
        // 节点样式
        nodes: {
          shape: 'box', // 设置节点node样式为矩形
          fixed: true, // 节点node固定不可移动
          font: {
            color: 'black', // 字体的颜色
            size: 30 // 显示字体大小
          },
          scaling: {
            min: 16,
            max: 32 // 缩放效果比例
          }
        },
        // 连接线的样式
        edges: {
          color: {
            color: 'red',
            highlight: 'rgb(97, 168, 224)',
            hover: 'green',
            inherit: 'from',
            opacity: 1.0
          },
          font: {
            align: 'top' // 连接线文字位置
          },
          smooth: true, // 是否显示方向箭头
          arrows: { to: true } // 箭头指向from节点
        },
        layout: {
          // 以分层方式定位节点
          hierarchical: {
            direction: 'RL', // 分层排序方向
            sortMethod: 'directed', // 分层排序方法
            levelSeparation: 400 // 不同级别之间的距离
          }
        },
        interaction: {
          navigationButtons: true,
          // hover: true, //鼠标移过后加粗该节点和连接线
          selectConnectedEdges: false // 选择节点后是否显示连接线
        }
      }
      // initialize your network!
      this.network = new Network(container, data, options)
      this.network.on('click', e => this.showDetail(e)) // 单击事件
      this.network.on('doubleClick', e => this.enterService(e)) // 双击事件
    },
    async showDetail(e) {
      this.data = []
      console.log('单击事件', e)
      // if (e.nodes[0] === 1369) {
      alert('1')
      // try {
      const {
        data: { data }
      } = await axios({
        methods: 'get',
        url: '/getVisData1'
      })
      console.log('第二个接口数据', data)

      this.click(data)
      // } catch (error) {
      //   console.log(error)
      // }
      // }
    },
    enterService(e) {
      console.log('双击事件', e)
    },
    click(data) {
      this.rightArr = []
      var Arr1 = []
      this.data = data
      this.curr = this.data.curr // dangqian
      this.next = this.data.next // 右侧
      this.prev = this.data.prev // 左侧
      this.currObj.id = this.curr.bk_inst_id
      this.currObj.label = this.curr.bk_inst_name
      // console.log('当前', this.currObj)
      // 左侧+++++++++++++++++++++
      var that = this

      console.log('点击next数据', this.next)
      this.next.forEach(element => {
        if (element.children) {
          element.children.forEach(item => {
            console.log(11, item)
            var nextObj = {}
            nextObj = {
              id: item.bk_inst_id,
              label: item.bk_inst_name
            }
            that.rightArr.push(nextObj)
          })
        } else {
          var nextObj = {}
          nextObj = {
            id: element.bk_inst_id,
            label: element.bk_inst_name
          }
          that.rightArr.push(nextObj)
        }
      })
      console.log('右侧', that.rightArr)
      // 左侧+++++++++++++++++++
      var prevObj = {}
      if (Array.isArray(this.prev) === false) {
        alert('对象')
        prevObj = {
          id: this.curr.bk_inst_id,
          label: this.curr.bk_inst_name
        }
        that.leftArr.push(prevObj)
      } else {
        alert('数组')
        console.log(this.prev)
        this.prev.forEach(element => {
          // alert(22)
          if (element.children) {
            element.children.forEach(item => {
              prevObj = {
                id: item.bk_inst_id,
                label: item.bk_inst_name
              }
              that.leftArr.push(prevObj)
            })
            // console.log('111111111111111', prevObj)
          } else {
            prevObj = {
              id: element.bk_inst_id,
              label: element.bk_inst_name
            }
            that.leftArr.push(prevObj)
          }
        })
      }
      console.log('点击左侧', that.leftArr)
      Arr1 = this.leftArr.concat(this.rightArr)
      Arr1.unshift(this.currObj)
      this.nodes = this.nodes.concat(Arr1)
      // console.log('++++++++++++++', this.nodes)
      var result = []
      var obj = {}
      var arr2 = this.nodes
      for (var i = 0; i < arr2.length; i++) {
        if (!obj[arr2[i].id]) {
          result.push(arr2[i])
          obj[arr2[i].id] = true
        }
      }
      console.log(result)
      this.nodes = result
      // from to
      var fromToArr = []
      this.rightArr.forEach(ele => {
        let obj = {}
        obj = {
          from: ele.id,
          to: this.currObj.id
        }
        fromToArr.push(obj)
      })
      // this.leftArr.forEach(ele => {
      //   let obj = {}
      //   obj = {
      //     from: ele.id,
      //     to: this.currObj.id
      //   }
      //   console.log(obj)
      //   // debugger
      //   fromToArr.unshift(obj)
      // })
      console.log('fromto', fromToArr, this.edges)
      this.edges = this.edges.concat(fromToArr)
      console.log(this.edges, this.nodes)
      this.globalTrace()
    },

    processingData(data) {
      this.data = JSON.parse(JSON.stringify(data))
      console.log(this.data)
      this.curr = this.data.curr // dangqian
      this.next = this.data.next // 右侧
      this.prev = this.data.prev // 左侧
      // console.log(this.prev, typeof (this.prev))
      // console.log(this.prev[0].children[0])
      var nextObj = {} // 右侧
      var prevObj = {} // 左侧
      var Arr = []
      this.currObj.id = this.curr.bk_inst_id
      this.currObj.label = this.curr.bk_inst_name
      console.log('当前', this.currObj)
      // console.log(this.next)
      // 右侧+++++++++++++++
      var that = this
      // console.log('右侧数据', this.next)
      this.next.forEach(element => {
        if (element.children) {
          nextObj = {
            id: element.children[0].bk_inst_id,
            label: element.children[0].bk_inst_name
          }
          console.log(that.rightArr, nextObj)
          that.rightArr.push(nextObj)
        } else {
          nextObj = {
            id: element.bk_inst_id,
            label: element.bk_inst_name
          }
          that.rightArr.push(nextObj)
        }
      })
      console.log('右侧', that.rightArr)
      // 左侧++++++++++++++++
      console.log(Array.isArray(this.prev), this.prev)
      if (Array.isArray(this.prev) === false) {
        prevObj = {
          id: this.curr.bk_inst_id,
          label: this.curr.bk_inst_name
        }
        that.leftArr.push(prevObj)
      } else {
        this.prev.forEach(element => {
          // alert(22)
          if (element.children) {
            prevObj = {
              id: element.children[0].bk_inst_id,
              label: element.children[0].bk_inst_name
            }
            // console.log('111111111111111', prevObj)
            that.leftArr.push(prevObj)
          } else {
            prevObj = {
              id: element.bk_inst_id,
              label: element.bk_inst_name
            }
            that.leftArr.push(prevObj)
          }
        })
      }
      console.log('左侧', that.leftArr)
      // 当前
      console.log(this.rightArr, this.leftArr)
      Arr = this.leftArr.concat(this.rightArr)
      console.log('左右', Arr)
      Arr.unshift(this.currObj)

      this.nodes = this.nodes.concat(Arr)
      console.log('++++++++++++++', this.nodes)
      // var result = []
      // var obj = {}
      // var arr1 = this.nodes
      // for (var i = 0; i < arr1.length; i++) {
      //   if (!obj[arr1[i].id]) {
      //     result.push(arr1[i])
      //     obj[arr1[i].id] = true
      //   }
      // }
      // console.log(result)
      // this.nodes = result
      // from to
      var fromToArr = []
      this.rightArr.forEach(ele => {
        let obj = {}
        obj = {
          from: ele.id,
          to: this.currObj.id
        }
        fromToArr.push(obj)
      })
      this.leftArr.forEach(ele => {
        let obj = {}
        obj = {
          from: this.currObj.id,
          to: ele.id
        }
        console.log(obj)
        // debugger
        fromToArr.unshift(obj)
      })
      console.log('fromto', fromToArr)
      this.edges = this.edges.concat(fromToArr)
      // this.edges = fromToArr
      console.log(this.edges, this.nodes)
      this.globalTrace()
    }
  },
  mounted() {},
  async created() {
    try {
      const {
        data: { data }
      } = await axios({
        methods: 'get',
        url: '/getVisData'
      })
      this.data = data
      this.processingData(this.data)
      // this.globalTrace()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.demo {
  width: 500px;
  height: 500px;
  background-color: rgb(160, 156, 156);
}
</style>
vue
