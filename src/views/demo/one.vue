<template>
  <div class="container">
    one
    <el-upload
      class="upload-demo"
      action
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :on-change="change"
      :file-list="fileList"
      :http-request="request"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
<multipane style="height:100px;background:red">
  <div>Pane 1</div>
  <multipane-resizer ></multipane-resizer>
  <div>Pane 2</div>
  <multipane-resizer></multipane-resizer>
  <div>Pane 3</div>
</multipane>

<div>
  <h1>echarts</h1>
  <div id="echarts" style="width:600px;height:400px"></div>
</div>

  </div>
</template>

<script>
import * as echarts from 'echarts'
import { Multipane, MultipaneResizer } from 'vue-multipane'

import axios from 'axios'
import XLSX from 'xlsx'
export default {
  // ...
  components: {
    Multipane,
    MultipaneResizer
  },
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  methods: {
    echartsInit() {
      const app = document.getElementById('echarts')
      var myChart = echarts.init(app)
      const option = {
        title: {
          text: '饼图程序调用高亮示例',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 40,
                shadowOffsetX: 1,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      myChart.setOption(option)
      app.currentIndex = -1

      setInterval(function () {
        // 获取数据的长度
        var dataLen = option.series[0].data.length
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        })
        app.currentIndex = (app.currentIndex + 1) % dataLen
        console.log('app.currentIndex', app.currentIndex, (app.currentIndex + 1) % dataLen)
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        })
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        })
      }, 1000)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    change(file, fileList) {
      console.log(file, file.raw, fileList)
      var formData = new FormData()
      // formData.append('file', file.raw)
      const arr = ['admin', 'role']
      formData.append('arr', arr)
      // var bytesPerPiece = 1024 * 1024 * 0.01// 每个文件切片大小定为1MB .
      // var totalPieces
      // var blob = document.getElementById('file').files[0]
      // var start = 0
      // var end
      // var index = 0
      // var filesize = blob.size
      // var filename = blob.name

      // // 计算文件切片总数
      // totalPieces = Math.ceil(filesize / bytesPerPiece)
      // while (start < filesize) {
      //   end = start + bytesPerPiece
      //   if (end > filesize) {
      //     end = filesize
      //   }

      //   var chunk = blob.slice(start, end)// 切割文件
      //   var sliceIndex = blob.name + index
      //   var formData = new FormData()
      //   formData.append('file', chunk, filename)
      //   console.log(formData)
      // }
      // 拿到所导入文件的名字
      // const fileName = file.name
      // console.log('fileName', fileName)
      // // 定义reader，存放文件读取方法
      // const reader = new FileReader()
      // // 启动函数
      // reader.readAsBinaryString(file.raw)
      // var that = this
      // // onload在文件被读取时自动触发
      // reader.onload = function(e) {
      //   // workbook存放excel的所有基本信息
      //   const workbook = XLSX.read(e.target.result, { type: 'binary' })
      //   console.log(workbook)
      //   const json = workbook.Strings
      //   console.log('json', json, json.length / 2, json.slice(0, json.length / 2), json.slice(json.length / 2))
      //   var arr = []
      //   arr.push(json.slice(0, json.length / 2))
      //   arr.push(json.slice(json.length / 2))
      //   // console.log(arr, JSON.parse(arr))
      //   // that.$store.commit('addArr', arr)
      //   // var form = new FormData()
      //   // form.append('file', arr)
      // }
      // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' // post json
      // axios
      //   .post('http://172.21.139.80:8000/yangjiapu/', {
      //     headers: {
      //       'Content-Type': 'application/json;charset=UTF-8'
      //     },
      //     formData
      //   }
      //   )
      //   .then(res => console.log(res))
      axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        headers: {
          'Content-type': 'multipart/form-data'
        },
        data: formData
      })
        .then(res => console.log(res))
        .catch(err => {
          console.log(err)
        })
    },
    request() {
      // axios.post('https://jsonplaceholder.typicode.com/posts/', form
      // ).then(res =>
      //   console.log(res))
    }
  },
  mounted() {
    this.echartsInit()
  }
}
</script>

<style scoped></style>
