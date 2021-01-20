<template>
<div class='container'>
<div class="header">
   {{title}}
</div>
</div>
</template>

<script>
export default {
  props:
    {
      title: {
        type: String,
        default: function () {
          return null
        }
      },
      num: {
        type: Number,
        default: 0
      }
    },
  data () {
    return {

    }
  },
  methods: {

  }

}
</script>

<style scoped>
.header {
    width: 100%;
    height:50px;
    line-height:50px;
    background-color: rgb(219, 216, 216);
}
</style>
