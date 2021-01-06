<template>
  <div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-dynamic">
      <el-form-item prop="name" :label="label" :rules="rule">
        <el-input placeholder="请输入内容" v-model="ruleForm.name" :type="type"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    label: {
      type: String,
      default: '输入框'
    },
    prop: {
      type: String,
      default: 'prop'
    },
    type: {
      type: String,
      default: 'text'
    },
    rule: {
      type: Array,
      // default:()=>{return null}
      default: function () {
        return [{ required: true, message: '请输入内容', trigger: 'blur' }]
      }
    }
  },
  computed: {
    ...mapState({
      counts: state => state.value
    })
  },
  data() {
    return {
      ruleForm: {
        name: ''
      }
    }
  },
  watch: {
    '$store.state.value'(curVal, oldVal) {
      console.log(curVal, oldVal)
      if (curVal) {
        console.log(this.$refs.submit)
        // this.$refs.submit.click()
        this.submitForm()
      }
    }
  },
  methods: {
    submitForm() {
      // console.log('111', this.$refs.ruleForm)
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('通过验证', this.prop)
          // alert('submit!')
          this.change()
        } else {
          this.error()
          console.log('error submit!!')
          return false
        }
      })
    },
    change() {
      this.$emit('changeData', this.ruleForm.name, this.prop)
    },
    // 没有通过验证
    error() {
      this.$store.commit('error', 1)
    }
  }
}
</script>

<style scoped></style>
