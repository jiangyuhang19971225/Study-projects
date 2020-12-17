<template>
  <div class="main" style="background-color: red;width:500px">
    <strong>子组件的内容,下面是插槽的使用 子组件使用slot占位置 父组件使用子组件</strong>
    <br>
    <!--    默认插槽-->
    <slot></slot>

    <!--      具名插槽-->
    <slot name='left'></slot>
    <slot name='right'></slot>
    <!--    作用于插槽-->
<!--    v-bind:users="user"-->
    <slot name='child' v-bind:users="user"></slot>

  </div>
</template>

<script>
export default {
  name: 'children',
  data () {
    return {
      user: {
        name: 'jyh',
        age: 18
      }
    }
  }
}
</script>

<style scoped>

</style>
