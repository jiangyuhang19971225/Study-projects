<template>
  <div class="home">
      title:
      <h3>{{$route.meta.title}}</h3>
      内容:
     <p>{{counts}}</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState({
      counts: (state) => state.count
    })

    // 等同于下面
    // counts () {
    //   return this.$store.state.count
    // }
    //  ...mapGetters({
    //   getternum:'doneTodos'
    // }),
    // //mapGetters就等于下面的这个
    // // getternum(){
    // //   return this.$store.getters.doneTodos
    // // }
  },
  methods: {
    // ...mapMutations({
    //   addnum: 'addNum'
    // }),
    // addnum1 () {
    //   this.addnum()
    // },
    // // mapMutations就等于下面的这个
    // // addnum1(){
    // //   this.$store.commit('addNum')
    // // },

    // ...mapActions({
    //   actionnum: 'actionNumAdd'
    // }),
    // actionnum6 () {
    //   this.actionnum()
    // }
    // // mapActions就等于下面的这个
    // //  actionnum6(){
    // //   this.$store.dispatch('actionNumAdd')
    // // }
  }
}
</script>

<style>

</style>
