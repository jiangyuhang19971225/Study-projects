<template>
  <div class="container">
    <div v-for="(item, index) in data" :key="index">
      {{ item.account }}
      <p>{{ item.total_cost }}</p>
      <el-collapse v-model="activeNames" @change="handleChange(index)">
        <el-collapse-item v-for="(item1, index1) in item.region" :key="index1" :name="item1.id">
          <template slot="title">
            {{ item1.region }}
            <p>{{ item1.total_cost }}</p>
          </template>
          <el-collapse-item v-for="(item2, index2) in detailData[index]" :key="index2" >
            <template slot="title">
              {{ item2.category }}
              <p>{{ item2.cost }}</p>
            </template>
            <el-collapse-item v-for="(item3, index3) in item2.list" :key="index3" >
              <template slot="title">
                {{ item3.name }}
                <p>{{ item3.cost }}</p>
              </template>
            </el-collapse-item>
          </el-collapse-item>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: [],
      data: [],
      params: {},
      detailData: []
    }
  },
  methods: {
    handleChange(id) {
      this.getRegionData(id)
    },
    async getRegionData(id) {
      // id是用来判断是什么云
      console.log(this.activeNames)
      const activeNames = JSON.parse(JSON.stringify(this.activeNames))
      const activeName = activeNames.pop()
      console.log(activeName, id)

      this.params = { account: this.data[id].account, region: this.data[id].region[activeName - 1].region }
      console.log(this.params) // account: "腾讯云"  region: '华南地区（广州）'

      const {
        data: { data }
      } = await this.$http.get('http://localhost:3002/data', {
        params: this.params
      })
      console.log('点击请求的数据', data, id)
      this.detailData[activeName] = data
      console.log('1111111111111111', this.detailData)
      //   this.$nextTick(() => {
      //     // 结构渲染完毕后执行
      //     this.activeNames.push(id) // 添加对应的name值
      //   })
      console.log(this.detailData, this.activeNames)
    }
  },
  async created() {
    const {
      data: { data }
    } = await this.$http.get(' http://localhost:3000/regionData')
    console.log('获取的数据', data)
    this.data = data
  }
}
</script>

<style scoped></style>
