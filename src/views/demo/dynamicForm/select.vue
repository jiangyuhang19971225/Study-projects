<template>
  <div class="main">
    <el-form :model="ruleForm" ref="ruleForm" label-width="120px" class="demo-dynamic">
      <el-form-item prop="region" :label="label" :rules="rule" >
        <el-select v-model="ruleForm.region" placeholder="请选择区域" >
          <el-option :label="item.label" :value="item.value" v-for="item in option" :key="item.id" ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
  props: {
    rule: {
      type: Array,
      // default:()=>{return null}
      default: function() {
        return [{ required: true, message: '请选择', trigger: 'change' }]
      }
    },
    label: {
      type: String,
      default: '多选框'
    },
    prop: {
      type: String,
      default: 'prop'
    }
  },
  computed: {
    ...mapState({
      counts: state => state.value
    })
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
        region: ''
      },
      option: []
    }
  },
  methods: {
    // 表单验证
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          console.log('通过验证', this.prop)
          // alert('submit!')
          this.change()
        } else {
          console.log('error submit!!')
          this.error()
          return false
        }
      })
    },
    // 传给父组件
    change() {
      this.$emit('changeData', this.ruleForm.region, this.prop)
    },
    // 没有通过验证
    error() {
      this.$store.commit('error', 1)
    }
  },
  async created() {
    const {
      data: { data }
    } = await axios.get('/select')
    console.log(data)
    this.option = data
  }
}
</script>

<style scoped>

</style>
