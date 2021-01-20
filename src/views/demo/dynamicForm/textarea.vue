<template>
  <div>
    <!-- <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm"> -->
      <!-- <el-form-item label="文本框" > -->
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      <!-- </el-form-item> -->
    <!-- </el-form> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        desc: ''
      }
    }
  },
  watch: {
    '$store.state.value'(curVal, oldVal) {
      if (curVal) {
        this.change()
      }
    }
  },
  methods: {
    // submit(formName) {
    //   this.$refs[formName].validate(valid => {
    //     console.log('文本域valid', valid)
    //     if (valid) {
    //       alert('submit!')
    //       this.change()
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // },
    change() {
      this.$emit('changeData', this.ruleForm.desc, 'desc')
    }
  }
}
</script>

<style scoped></style>
