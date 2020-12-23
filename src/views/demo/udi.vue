<template>
  <div>
    <h2>{{ $route.meta.title }}</h2>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed prop="date" label="日期" width="150"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
        <el-table-column prop="province" label="省份" width="120"> </el-table-column>
        <el-table-column prop="city" label="市区" width="120"> </el-table-column>
        <el-table-column prop="zip" label="邮编" width="120"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small" v-has="look">查看</el-button>
            <el-button type="text" size="small" @click="handleClick(scope.row)" v-has="edit">编辑</el-button>
            <el-button type="text" size="small" @click="handleClick(scope.row)" v-has="del">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      look: 'look',
      edit: 'edit',
      del: 'del',
      tableData: [
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',

          zip: 200333
        }
      ]
    }
  },

  methods: {}
}
</script>

<style></style>
