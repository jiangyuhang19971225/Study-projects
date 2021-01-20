<template>
  <div>
    get
    <span v-for="item in data" :key="item.id">
  {{ item }} <br>
</span>
    post
    <hr>
    <p> {{ time }} </p>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'textMock',

  data () {
    return {
      data: [],
      time: null
    }
  },
  methods: {
    async getData () {
      const { data } = await this.$http.get('/dataList')
      console.log(data)
      this.data = data
    },
    async postData () {
      const { data } = await this.$http.post('/api/news/login', { username: 'jyh' })
      console.log('post', data)
    }

  },
  created () {
    this.getData()
    this.postData()
    // alert('1')
    this.time = dayjs().format()
    console.log(dayjs(1318781876406))
  }

}
</script>

<style scoped>
</style>
