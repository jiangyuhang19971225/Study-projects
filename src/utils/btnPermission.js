// import Vue from 'vue'
// 注册一个全局自定义指令`v-auth`
// const btnpermiss = Vue.directive('btnpermiss', {
//   // 当被绑定的元素插入dom中
//   inserted: (el, binding, vnode) => {
//     // const value = binding.value

//     console.log('执行自定义组件', el, binding, vnode)

//     // el.parentNode!.removeChild(el);
//   }
// })
// export default btnpermiss

export default vue => {
  vue.directive('has', {
    // 当被绑定的元素插入dom中
    inserted: (el, binding, vnode) => {
      // const value = binding.value
      const permis = ['look', 'edit', 'del']
      console.log('执行自定义组件', el, binding, vnode, el.parentNode)
      console.log(permis.includes(binding.value))
      if (binding.value) {
        if (!permis.includes(binding.value)) {
          console.log('删除dom')
          el.parentNode.removeChild(el)
        }
      }
      // el.parentNode!.removeChild(el);
    }
  })
}
