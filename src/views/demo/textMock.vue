<template>
  <div>
    get
    <span v-for="item in data" :key="item.id"> {{ item }} <br /> </span>
    post
    <hr />
    <p>{{ time }}</p>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import axios from 'axios'

export default {
  name: 'textMock',

  data() {
    return {
      data: [],
      time: null,
      i: 0,
      setTime: null
    }
  },
  methods: {
    // for() {
    //   console.log(111)
    //   var i = 0
    //   for (let index = 0; index < 3; index++) {
    //     new Promise((resolve, reject) => {
    //       var setTime = setInterval(async () => {
    //         console.log(i++)
    //         if (i > 3) {
    //           clearInterval(setTime)
    //         } else {
    //           const lgqdata = await axios.get('http://localhost:3000/data')
    //           console.log(lgqdata)
    //           resolve()
    //         }
    //       }, 2000)
    //     })
    //   }
    // },
    for() {
      var i = 0
      for (let index = 0; index < 3; index++) {
        var p = new Promise((resolve, reject) => {
          var setTime = setInterval(async () => {
            console.log(i++)
            if (i > 3) {
              clearInterval(setTime)
            } else {
              console.log('执行请求', i)
              const lgqdata = await axios.get('http://localhost:3000/data')
              resolve(lgqdata)
            }
          }, 2000)
        })
        p.then(res => {
          console.log(res)
        })
      }
    },
    clearTime() {
      console.log(this.setTime)
      clearInterval(this.setTime)
    },
    async getData() {
      const { data } = await this.$http.get('/dataList')
      console.log(data)
      this.data = data
    },
    async postData() {
      const { data } = await this.$http.post('/api/news/login', { username: 'jyh' })
      console.log('post', data)
    }
  },
  created() {
    // this.getData()
    // this.postData()
    // alert('1')
    // this.time = dayjs().format()
    // console.log(dayjs(1318781876406))
    this.for()
  }
}
</script>

<style scoped></style>
