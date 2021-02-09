<template>
  <div>
    <div class="hello">
      <button @click="setMessage">添加属性</button>
      {{ student.name }}
      <input type="text" v-model="student.age">
      <span @click="add">增加</span>
      {{student.sex}}
    </div>

<div>

</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      student: {
        name: '张三'
      }
    }
  },
  methods: {

    setMessage() {
      // this.student.age = 15
      // console.log(this.student)
      this.$set(this.student, 'age', 15)
      console.log(this.student)
    },
    add() {
      this.$set(this.student, 'sex', '男')
      console.log(this.student)
    }
  }
}
</script>

<style scoped>

</style>
