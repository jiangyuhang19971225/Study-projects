<template>
  <div class="container">
    <h2>{{ $route.meta.title }}</h2>
    内容:
    <div>
      <component
        :ref="item.ref"
        :is="item.type"
        @changeData="getData"
        v-for="item in data"
        :key="item.id"
        :label="item.label"
        :prop="item.prop"
        :type="item.inputType"
        :rule="item.rule"
      ></component>

    </div>
    <div>

      <el-button @click="submit()">提交</el-button>
    </div>
  </div>
</template>

<script>
import input from './dynamicForm/input.vue'
import textarea from './dynamicForm/textarea.vue'
import select from './dynamicForm/select.vue'

export default {
  components: {
    input1: input,
    textarea1: textarea,
    select1: select
  },
  data() {
    return {
      error: true,
      tableData: [],
      activeNames: [],

      ruleForm: {},
      data: [
        /**
         * {id}  唯一
         * {type} 组件类型
         * {label} 标题
         * {prop} key 传给后端对象key
         * inputType 输入类型 text password
         * rule  表单验证
         */
        {
          id: 1,
          type: 'input1',
          label: '姓名',
          prop: 'name',
          inputType: 'text',
          rule: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
        },
        {
          id: 2,
          type: 'input1',
          label: '密码',
          prop: 'sex',
          inputType: 'password',
          rule: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        },
        {
          id: 3,
          type: 'select1',
          label: '多选地区',
          prop: 'region',
          rule: [{ required: true, message: '请选择区域', trigger: 'change' }]
        }
      ]
    }
  },
  computed: {},
  watch: {
    '$store.state.error'(curVal, oldVal) {
      console.log(curVal, oldVal)
      if (curVal) {
        this.error = false
        // alert('哟错误')
      }
    }
  },
  methods: {
    submit() {
      this.error = true
      this.addnum1()
      setTimeout(() => {
        // console.log('执行', this.ruleForm, this.$refs.one[0].$refs.ruleForm)
        // const p2 = new Promise((resolve, reject) => {
        //   this.$refs.one[0].$refs.ruleForm.validate(valid => {
        //     console.log('valid', valid)
        //     if (valid) resolve()
        //   })
        // })
        console.log(this.error)
        if (this.error) { alert('提交') }
      })
    },
    addnum1() {
      this.$store.commit('addNum', 1)
    },
    // 子传父
    getData(value, type) {
      this.ruleForm[type] = value
      console.log('子传父', this.ruleForm)
    }
  }
}
</script>

<style scoped></style>
