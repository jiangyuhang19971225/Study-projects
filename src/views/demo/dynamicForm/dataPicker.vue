<template>
  <div>
      <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item prop="date1" :label="label" :rules="rule" >
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"> </el-date-picker>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import moment from 'moment'
export default {
  props: {
    label: {
      type: String,
      default: '选择时间日期'
    },
    prop: {
      type: String,
      default: 'prop'
    },
    rule: {
      type: Array,
      // default:()=>{return null}
      default: function() {
        return [{ required: true, message: '请输入内容', trigger: 'blur' }]
      }
    }
  },
  watch: {
    '$store.state.value'(curVal, oldVal) {
      if (curVal) {
        this.submitForm()
      }
    }
  },
  data() {
    return {
      ruleForm: {
        date1: null
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log(this.ruleForm.data1)
          this.change()
        } else {
          this.error()
          console.log('error submit!!')
          return false
        }
      })
    },
    change() {
      this.$emit('changeData', moment(this.ruleForm.data1).format(), this.prop)
    },
    // 没有通过验证
    error() {
      this.$store.commit('error', 1)
    }
  }
}
</script>

<style scoped></style>
