<template>
  <div class="container">
    <video style="width:90%" controls :src="src">
      <!-- <source /> -->
    </video>
    <!-- // 使video支持ios的AirPlay功能，需要终端支持 -->
    <video
      class="ppq-video video-hidden"
      :src="src"
      webkit-playsinline="true"
      playsinline="true"
      x-webkit-airplay="allow"
      x5-playsinline
      controls
    ></video>
     <!-- poster="https://img02.sogoucdn.com/app/a/200692/42345752787911E8BB8FD89EF30F789D?m-wh=960*540" -->
<!--  -->
    二维码
    <img
      style="width:150px;height:150px"
      src="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGa7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySW81UXBOUzRmYkMxZHNwSk53Y1UAAgRU0i1gAwQIBwAA"
      alt=""
    />
    <!-- <images  style="width:100px;height:100px" img="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQGa7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySW81UXBOUzRmYkMxZHNwSk53Y1UAAgRU0i1gAwQIBwAA">

    </images> -->
    <div class="hello" v-on:click="hidePanel" style="width:200px;height:200px;background:green">
      11111111111111
      <br />
      222222222222
      <div id="myPanel" v-if="panelShow" style="width:100px;height:100px;background:red">3333333333</div>
    </div>
    <el-dropdown split-button type="primary">
      更多菜单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
    one
    <el-tree ref="tree" :data="data" check-strictly show-checkbox node-key="id" :default-checked-keys="['1-True', '1-False']" :props="defaultProps">
    </el-tree>
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
      <multipane-resizer></multipane-resizer>
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
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  // ...
  components: {
    Multipane,
    MultipaneResizer
  },

  data() {
    return {
      src: 'http://edge.ivideo.sina.com.cn/31360210703.mp4?KID=sina,viask&Expires=1613750400&ssig=UsdrAsQM%2B7&reqid=',
      panelShow: true,
      aa: [],
      data: [
        {
          id: '1-False',
          parent_id: null,
          has_children: true,
          name: '总公司',
          is_user: false,
          children: [
            {
              id: '2-False',
              parent_id: 1,
              has_children: true,
              name: '技术事业群',
              is_user: false,
              children: [
                {
                  id: '12-False',
                  parent_id: 2,
                  has_children: false,
                  name: '管理线',
                  is_user: false,
                  children: [],
                  users_num: 0
                },
                {
                  id: '13-False',
                  parent_id: 2,
                  has_children: true,
                  name: '平台技术中心',
                  is_user: false,
                  children: [
                    {
                      id: '19-False',
                      parent_id: 13,
                      has_children: false,
                      name: '平台开发部',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '20-False',
                      parent_id: 13,
                      has_children: false,
                      name: '应用开发部',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '21-False',
                      parent_id: 13,
                      has_children: false,
                      name: '应用管理部',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '22-False',
                      parent_id: 13,
                      has_children: false,
                      name: '数据平台部',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '23-False',
                      parent_id: 13,
                      has_children: false,
                      name: '央视新闻项目组',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '24-False',
                      parent_id: 13,
                      has_children: false,
                      name: '管理线',
                      is_user: false,
                      children: [],
                      users_num: 0
                    }
                  ],
                  users_num: 0
                },
                {
                  id: '14-False',
                  parent_id: 2,
                  has_children: true,
                  name: '技术运维中心',
                  is_user: false,
                  children: [
                    {
                      id: '25-False',
                      parent_id: 14,
                      has_children: false,
                      name: '系统运维部',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '26-False',
                      parent_id: 14,
                      has_children: true,
                      name: '平台运维部',
                      is_user: false,
                      children: [
                        {
                          id: '2-True',
                          name: 'yanziyu(闫子煜)',
                          is_user: true,
                          has_children: false
                        },
                        {
                          id: '13-True',
                          name: 'yanziyu01(yanziyu)',
                          is_user: true,
                          has_children: false
                        },
                        {
                          id: '16-True',
                          name: 'songmingzhou(宋明周)',
                          is_user: true,
                          has_children: false
                        }
                      ],
                      users_num: 3
                    },
                    {
                      id: '27-False',
                      parent_id: 14,
                      has_children: false,
                      name: '网络安全部',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '28-False',
                      parent_id: 14,
                      has_children: false,
                      name: '基础设施部',
                      is_user: false,
                      children: [],
                      users_num: 0
                    },
                    {
                      id: '29-False',
                      parent_id: 14,
                      has_children: false,
                      name: '管理线',
                      is_user: false,
                      children: [],
                      users_num: 0
                    }
                  ],
                  users_num: 0
                },
                {
                  id: '15-False',
                  parent_id: 2,
                  has_children: false,
                  name: '技术管理办公室',
                  is_user: false,
                  children: [],
                  users_num: 0
                },
                {
                  id: '16-False',
                  parent_id: 2,
                  has_children: false,
                  name: '视频技术中心',
                  is_user: false,
                  children: [],
                  users_num: 0
                },
                {
                  id: '17-False',
                  parent_id: 2,
                  has_children: false,
                  name: '用户数据运营中心',
                  is_user: false,
                  children: [],
                  users_num: 0
                },
                {
                  id: '18-False',
                  parent_id: 2,
                  has_children: false,
                  name: '多媒体制作部',
                  is_user: false,
                  children: [],
                  users_num: 0
                }
              ],
              users_num: 0
            },
            {
              id: '3-False',
              parent_id: 1,
              has_children: false,
              name: '合作单位',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '4-False',
              parent_id: 1,
              has_children: false,
              name: '新媒体创新孵化中心',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '5-False',
              parent_id: 1,
              has_children: false,
              name: '易橙天下',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '6-False',
              parent_id: 1,
              has_children: false,
              name: '项目办公室',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '7-False',
              parent_id: 1,
              has_children: false,
              name: '品牌部',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '8-False',
              parent_id: 1,
              has_children: false,
              name: '央视影音事业群',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '9-False',
              parent_id: 1,
              has_children: false,
              name: '分子公司',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '10-False',
              parent_id: 1,
              has_children: false,
              name: '总编室',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '11-False',
              parent_id: 1,
              has_children: false,
              name: '海洋经济办公室',
              is_user: false,
              children: [],
              users_num: 0
            },
            {
              id: '1-True',
              name: 'admin(admin)',
              is_user: true,
              has_children: false
            },
            {
              id: '3-True',
              name: 'chenchen(陈辰)',
              is_user: true,
              has_children: false
            },
            {
              id: '4-True',
              name: 'guojipeng(郭继鹏)',
              is_user: true,
              has_children: false
            },
            {
              id: '5-True',
              name: 'yangjiapu(杨家璞)',
              is_user: true,
              has_children: false
            },
            {
              id: '6-True',
              name: 'jiangyuhang(蒋宇航)',
              is_user: true,
              has_children: false
            },
            {
              id: '7-True',
              name: 'caienjun(蔡恩骏)',
              is_user: true,
              has_children: false
            },
            {
              id: '8-True',
              name: 'yangyong(杨永)',
              is_user: true,
              has_children: false
            },
            {
              id: '9-True',
              name: 'zhangliang(张亮)',
              is_user: true,
              has_children: false
            },
            {
              id: '10-True',
              name: 'renjinyue(renjinyue)',
              is_user: true,
              has_children: false
            },
            {
              id: '11-True',
              name: 'testuser(测试专用)',
              is_user: true,
              has_children: false
            },
            {
              id: '12-True',
              name: 'canway(嘉为)',
              is_user: true,
              has_children: false
            },
            {
              id: '14-True',
              name: 'duoronghua(多荣华)',
              is_user: true,
              has_children: false
            },
            {
              id: '15-True',
              name: '18911853349(陈辰)',
              is_user: true,
              has_children: false
            },
            {
              id: '17-True',
              name: 'hanshiqin(hanshiqin)',
              is_user: true,
              has_children: false
            }
          ],
          users_num: 14
        }
      ],

      defaultProps: {
        children: 'children',
        label: 'name'
      },

      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
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
    hidePanel: function(event) {
      var sp = document.getElementById('myPanel')

      if (sp) {
        console.log(sp.contains)
        if (!sp.contains(event.target)) {
          // 这句是说如果我们点击到了id为myPanel以外的区域
          this.panelShow = false
        }
      }
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      console.log(this.checkedCities, this.cities)
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
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

      setInterval(function() {
        // 获取数据的长度
        var dataLen = option.series[0].data.length
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        })
        app.currentIndex = (app.currentIndex + 1) % dataLen
        // console.log('app.currentIndex', app.currentIndex, (app.currentIndex + 1) % dataLen)
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
    setTimeout(() => {
      // this.$refs.tree.setCheckedKeys([15])
    }, 2000)
    this.aa = ['1-True', '1-False']
  }
}
</script>

<style scoped></style>
