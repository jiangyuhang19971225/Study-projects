<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="120px">
      <el-form-item prop="type" :label="label" :rules="rule" >
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group> </el-form-item
    ></el-form>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '多选框'
    },
    prop: {
      type: String,
      default: 'type'
    },
    rule: {
      type: Array,
      // default:()=>{return null}
      default: function() {
        return [{ type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }]
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
        type: []
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.change()
        } else {
          this.error()
          console.log('error submit!!')
          return false
        }
      })
    },
    change() {
      this.$emit('changeData', this.ruleForm.type, this.prop)
    },
    // 没有通过验证
    error() {
      this.$store.commit('error', 1)
    }
  }
}
</script>

<style scoped></style>
