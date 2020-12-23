<template>
  <div class="home">
<span> {{$route.meta.title}} </span>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  method: {

  },
  //
  activated () {
    console.log('缓存组件激活', 'activated')
  },

  created () {
    // console.log(this.$route.meta.title)
    console.log('created')
  }

}
</script>

<style scoped>

</style>
