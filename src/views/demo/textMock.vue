<template>
  <div>
    get
<span v-for="item in data" :key="item.id">
  {{item}} <br>
</span>
post
  </div>
</template>

<script>

export default {
  name: 'textMock',

  data () {
    return {
      data: []
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
  }

}
</script>

<style scoped>
</style>
