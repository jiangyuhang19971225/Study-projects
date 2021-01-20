<template>
  <div>
    title:
    <h2>{{$route.meta.title}}</h2>
    内容:
    <form-create
      ref="fc"
      v-model="fApi"
      :rule="rule"
      :option="option"
    ></form-create>
    <!-- <ElButton type="primary" plain @click="onSubmit">提交</ElButton>
        <ElButton aligen="center" plain @click="reset">重置</ElButton> -->
  </div>
</template>

<script>
// import { maker } from 'form-create'
export default {
  data () {
    return {
      // porps: {

      //   // 按钮类型，可选值为primary、ghost、dashed、text、info、success、warning、error或者不设置
      //   type: 'text',
      //   // 按钮大小，可选值为large、small、default或者不设置
      //   size: 'small',
      //   // 按钮形状，可选值为circle或者不设置
      //   shape: undefined,
      //   // 开启后，按钮的长度为 100%
      //   // long: '50%',
      //   // 设置button原生的type，可选值为button、submit、reset
      //   htmlType: 'button',
      //   // 设置按钮为禁用状态
      //   disabled: false,
      //   // 设置按钮的图标类型
      //   icon: 'ios-upload',
      //   // 按钮文字提示
      //   innerText: '提交',
      //   // 设置按钮为加载中状态
      //   loading: false

      // },

      fApi: {},
      model: {},
      rule: [
        {
          type: 'input',
          title: '商品名称',
          field: 'goods_name',
          value: 'iphone 7',

          props: {
            type: 'text'
          },
          validate: [
            { required: true, message: '请输入goods_name', trigger: 'blur' }
          ]
        },
        // maker.input('goods_name', 'goods_name'),
        // maker.date('create_at', 'created_at'),
        {
          type: 'DatePicker', // 使用的组件类型
          field: 'section_day', // 传递的参数
          title: '活动日期', // 默认显示的值
          value: ['2018-02-20 09:00:00', new Date()], // 传给后端
          // 设置属性
          props: {
            type: 'datetimerange',
            format: 'yyyy-MM-dd HH:mm:ss',
            placeholder: '请选择活动日期'
          },
          col: {
            span: 12
          }
        },
        {
          type: 'checkbox',
          title: '标签',
          field: 'label',
          value: ['1', '2', '3'],
          // 数据
          options: [
            { value: '1', label: '好用', disabled: true },
            { value: '2', label: '方便', disabled: false },
            { value: '3', label: '实用', disabled: false },
            { value: '4', label: '有效', disabled: false }
          ]
        },
        {
          type: 'select',
          field: 'cate_id',
          title: '产品分类',
          value: ['104', '105'],
          //
          options: [
            { value: '104', label: '生态蔬菜', disabled: false },
            { value: '105', label: '新鲜水果', disabled: false }
          ],
          props: {
            multiple: true
          },

          validate: [
            { required: true, message: '请输入商品简介', trigger: 'blur' }
          ]
        },
        {
          type: 'tree',
          title: '权限',
          field: 'rule',
          value: ['1'],
          props: {
            data: [{
              title: 'parent 1',
              expand: true,
              selected: false,
              id: 1,
              children: [
                {
                  title: 'parent 1-1',
                  expand: true,
                  id: 2,
                  children: [
                    {
                      title: 'leaf 1-1-1',
                      disabled: true,
                      id: 11
                    },
                    {
                      title: 'leaf 1-1-2',
                      selected: true,
                      id: 12
                    }
                  ]
                },
                {
                  title: 'parent 1-2',
                  expand: true,
                  id: 3,
                  children: [
                    {
                      title: 'leaf 1-2-1',
                      checked: true,
                      id: 13
                    },
                    {
                      title: 'leaf 1-2-1',
                      id: 14
                    }
                  ]
                }
              ]
            }],
            props: {
              children: 'children',
              label: 'title'
            }
          }
        }
      ],
      option: {
        submitBtn: {
          type: 'primary',
          size: 'medium',
          plain: false,
          round: false,
          circle: false,
          loading: false,
          disabled: false,
          icon: 'el-icon-upload',
          width: '80px',
          autofocus: false,
          nativeType: 'button',
          innerText: '提交表单',
          show: true,
          col: undefined,
          click: undefined
        },
        onSubmit: function (formData) {
          console.log(JSON.stringify(formData))
        //   alert(JSON.stringify(formData))
        }
      }
    }
  },
  //   methods: {
  //     onSubmit: function (formData) {
  //       console.log(JSON.stringify(formData))
  //       //   alert(JSON.stringify(formData))
  //     }
  //   },
  mounted: function () {
    this.model = this.fApi.model()
  }
}
</script>

<style scoped >
</style>
