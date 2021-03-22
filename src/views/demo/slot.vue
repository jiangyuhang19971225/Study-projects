<template>
  <div>
    <TITLE :title="title"></TITLE>
    <div>
      <div style="background-color: antiquewhite;margin:0 auto" >
        <header>匿名插槽头部</header>
        <children>
          我是在父组件里面调用组件直接填入的数据 使用slot占用位置
        </children>
      </div>
      <div style="background: #42b983">
        <header>具名插槽头部</header>
        <children>
        <p>Home组件通过在template上写v-slot:name来使用具名插槽</p>
        <template #left>具名插槽左部#left</template>
        <template v-slot:right>具名插槽又不v-slot:right</template>
        </children>
      </div>
      <div>
        <header>作用域插槽:子组件:语法：v-bind:users="user"  父组件语法：v-slot:default="随意取的名字"  // default可省略，简写为v-slot="随意取的名字"?????
          <br>
          解构插槽 Prop  父组件v-slot:child="{users}  子组件name='child' v-bind:users="user" √√√√√
        </header>
        <children>
<!--          <template v-slot:child="slotData">-->
<!--            <p> {{slotData.users.name}} </p>-->
<!--          </template>-->
          <template v-slot:child="{users}">
            <p> {{users.name}} </p>
          </template>
<!--          重命名&#45;&#45;&#45;&#45;更改users这个名字-->
<!--          <template v-slot:child="{users:person}">-->
<!--            {{person.name}}-->
<!--          </template>-->
        </children>
      </div>
    </div>
  </div>
</template>

<script>
import children from '@/views/demo/slotComponent/children'

export default {
  name: 'slotDemo',
  components: {
    children
  },

  data () {
    return {
      title: '插槽'
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
</style>
