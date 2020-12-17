<template>
  <div class="home">
    <p>时间: {{date}} </p>
    <p>距离2020元旦:{{timeList[0]}} </p>
    <p>距离2020春节: {{timeList[1]}} </p>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'countDown',
  data () {
    return {
      date: null,
      timer: null,
      timer1: null,
      endTime: [
        { time: '2021-01-01 00:00:00' },
        { time: '2021-02-12 00:00:00' }
      ],
      timeList: []
    }
  },
  methods: {
    countDate () {
      this.date = moment().format('YYYY-MM-DD HH:mm:ss')
    },
    // 倒计时
    getDjs () {
      this.timeList = [] // 循环之前清空上一秒存入的数据，让数组始终保持最新一条的数据
      for (var i = 0; i < this.endTime.length; i++) {
        // console.log(moment().format('X'));//获取当前时间的时间戳
        // console.log(moment(this.endTime[i].time).format('X'));//获取指定时间的时间戳
        // console.log(moment(this.endTime[i].time).format('X') - moment().format('X'));//获取时间戳的差值
        const timeVal = moment(this.endTime[i].time).format('X') - moment().format('X')
        console.log('插值时间戳', timeVal)
        const hours = Math.floor(timeVal / (3600))// 小时
        const minute = Math.floor((timeVal - 3600 * hours) / 60)
        const second = Math.floor((timeVal - 3600 * hours - 60 * minute))

        console.log('小时', hours, '分钟', minute, '秒', second)
        // 时间戳转换
        var d = Math.floor(timeVal / (24 * 3600))
        var h = Math.floor((timeVal - 24 * 3600 * d) / 3600)
        var m = Math.floor((timeVal - 24 * 3600 * d - h * 3600) / 60)
        var s = Math.floor((timeVal - 24 * 3600 * d - h * 3600 - m * 60))
        // console.log(d + '天' + hh + '时' + mm + '分' + ss + '秒'); // 打印出转换后的时间
        //  当时分秒小于10的时候补0
        var hh = h < 10 ? '0' + h : h
        var mm = m < 10 ? '0' + m : m
        var ss = s < 10 ? '0' + s : s
        this.timeList.push(d + '天' + hh + '时' + mm + '分' + ss + '秒') // 将三个倒计时日期添加到一个空的数组中
      }
      // console.log(this.timeList) // 打印结果
    }
  },
  mounted () {
    console.log('时间戳', moment().format('X'))
    // 现在时间
    this.countDate()
    this.timer = setInterval(() => {
      this.countDate()
    }, 1000)
    // 倒计时
    this.getDjs()
    this.timer1 = setInterval(() => {
      this.getDjs()
    })
  },
  beforeDestroy () {
    clearInterval(this.timer)
    clearInterval(this.timer1)
  },
  async created () {
    const data = await axios.get('/api/monitoring_data/')
    console.log('数据', data)
  }
}
</script>

<style scoped>
</style>
