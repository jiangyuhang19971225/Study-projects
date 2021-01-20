<template>
  <div class="home">
    <el-select v-model="value1" multiple placeholder="请选择" @change="changeData">
      <el-option style="height:auto" :value="SelectedArray">
        <el-tree
          :data="dataList"
          show-checkbox
          node-key="id"
          ref="tree"
          :check-strictly="true"
          highlight-current
          :props="defaultProps"
          @check="checkClick"
          :default-expanded-keys="setkey"
          :default-expand-all="false"
        >
        </el-tree>
      </el-option>
    </el-select>
  </div>
</template>

<script>
// highlight-current是否高亮当前选中节点，默认值是 false。
// check-strictly父子节点不相互关联

export default {
  data () {
    return {
      setkey: [1], // 默认展开节点
      dateList: [], // 遍历用
      SelectedArray: [12, 13], // 选中的数组
      dataList: [
        {
          id: 1,
          name: '总公司',
          parent_id: null,
          parent_name: null,
          has_children: true,
          children: [
            {
              id: 2,
              name: '1xxxx部门',
              parent_id: 1,
              parent_name: '总公司',
              has_children: true,
              children: [
                {
                  id: 12,
                  name: 'x1x项目',
                  parent_id: 1,
                  parent_name: '1xxxx部门',
                  has_children: false,
                  children: []
                },
                {
                  id: 13,
                  name: 'x22222x项目',
                  parent_id: 2,
                  parent_name: '1xxxx部门',
                  has_children: true,
                  children: [
                    {
                      id: 19,
                      name: 'xxx',
                      parent_id: 13,
                      parent_name: 'x22222x项目',
                      has_children: false,
                      children: []
                    }
                  ]
                }

              ]
            },
            {
              id: 15,
              name: '管理办公室',
              parent_id: 1,
              parent_name: '总公司',
              has_children: false,
              children: []
            },
            {
              id: 16,
              name: '技术中心',
              parent_id: 1,
              parent_name: '总公司',
              has_children: false,
              children: []
            }
          ]
        }
      ], // tree数据
      value1: [], // select绑定的值
      // 对应的字段
      defaultProps: {
        children: 'children',
        label: 'name'
      }
    }
  },
  methods: {
    async getTreeData () {
      try {
        const {
          data: { data }
        } = await this.$http.get('http://mockjs')
        console.log(data)
        this.dataList = data.data_list
        console.log(this.dataList)
      } catch (error) {
        console.log(error)
      }
    },
    // 点击关闭 this.value1v-model变化
    // e是传来的值
    changeData (e) {
      console.log('选中改变的值', e, this.dateList)
      const setkey = []
      for (let index = 0; index < this.dateList.length; index++) {
        for (let index1 = 0; index1 < e.length; index1++) {
          if (this.dateList[index].name === e[index1]) {
            setkey.push(this.dateList[index].id)
          }
        }
      }
      console.log(setkey)
      this.setkey = setkey
      // 重新 设置tree
      this.$refs.tree.setCheckedKeys(this.setkey)
    },
    // 点击复选框触发
    checkClick (checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys) {
      //   console.log(checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys)
      //   点击了复选框 使用this.$refs.tree.getCheckedNodes获取当前选中的节点
      const res = this.$refs.tree.getCheckedNodes(false, true) // 这里两个true，1. 是否只是叶子节点 2. 是否包含半选节点（就是使得选择的时候不包含父节点）
      console.log('点击树形图获取当前选中的节点', res)
      this.dateList = res
      // 这点要在外部定义 每次都是空的才不会重复
      const labelArr = []
      const valueArr = []
      res.forEach((element, index) => {
        console.log('第一个循环', element)
        labelArr.push(element.name)
        valueArr.push(element.id)
      })
      this.value1 = labelArr // 显示的
      this.SelectedArray = valueArr // 发送给后端的数据
      console.log(this.value1, this.SelectedArray)
    }
  },
  created () {
    // this.getTreeData()
  },
  // 默认选中
  mounted () {
    this.$refs.tree.setCheckedKeys(this.setkey)
  }
}
</script>

<style scoped>
.el-option /deep/ .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #fff;
}
.el-select /deep/ .el-select-dropdown__item {
  padding: 0;
}
</style>
