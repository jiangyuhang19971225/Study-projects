<template>
  <div>
    <div>
      <h3>
        原生复制按钮
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleCopy(scope.$index, scope.row)">复制</el-button>
            </template>
          </el-table-column>
        </el-table>
      </h3>
    </div>
    <div>
      <h3>clicpboard</h3>
      npm install clipboard --save
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{ name: '小明' }],

      copyData: null
    }
  },
  methods: {
    //
    handleCopy(index, row) {
      this.copyData = row.name
      this.copy(this.copyData)
    },
    copy(data) {
      const url = data
      const oInput = document.createElement('input')
      oInput.value = url
      console.log('oInput' + oInput)
      document.body.appendChild(oInput)
      oInput.select() // 选择对象;
      console.log(oInput.value)
      document.execCommand('Copy') // 执行浏览器复制命令
      this.$message({
        message: '复制成功',
        type: 'success'
      })
      oInput.remove()
    }
  }
}
</script>

<style></style>
