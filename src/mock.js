// 引入mockjs
import Mock from 'mockjs'
// 延时200-600毫秒请求到数据
Mock.setup({
  timeout: '200-600'
})
// 使用mockjs模拟数据
Mock.mock('http://mockjs_two', {
  ret: 0,
  data: {
    mtime: '@datetime', // 随机生成日期时间
    'score|1-800': 800, // 随机生成1-800的数字
    'rank|1-100': 100, // 随机生成1-100的数字
    'stars|1-5': 5, // 随机生成1-5的数字
    nickname: '@cname' // 随机生成中文名字
  }
  // data里的属性看不懂，需要详细看语法规范,博客链接:https://www.jianshu.com/p/4579f40e6108
})
Mock.mock('/dataList', 'get', {
  status: 200,
  message: '获取数据成功',
  'data|5': [
    {
      'id|+1': 0,
      url: '@url("http", "baidu.com")', // url: http://www.baidu.com
      protocol: '@protocol', // 随机生成一个url协议
      domain: '@domain', // 随机生成一个域名,
      email: '@email', // 随机生成一个邮箱地址,
      ip: '@ip' // 随机生成一个ip地址
    }
  ]
})
const loginData = function (req) {
  console.log('req', req)
  const { username } = JSON.parse(req.body)
  if (username === 'xmyfsj') {
    return {
      result: 200,
      data: {
        uid: '@ip',
        type: 1,
        username: username,
        expire_in: '63666',
        token: '@email',
        logintime: '@time("HH:mm:ss")'
      }
    }
  } else {
    return {
      result: 0,
      data: {
        uid: '@ip',
        type: 1,
        username: username,
        expire_in: '63666',
        token: '@email',
        logintime: '@time("HH:mm:ss")'
      }
    }
  }
}

Mock.mock('/api/news/login', 'post', loginData)
Mock.mock('/select', 'get', {
  status: 200,
  message: '获取数据成功',
  'data|3': [
    {
      'id|+1': 0,
      label: '@ctitle',
      value: '@ctitle'
    }
  ]
})
Mock.mock('/getVisData', 'get', {
  status: 200,
  message: '获取数据成功',
  data:
    {
      prev: [
        {
          id: '',
          bk_obj_id: 'host',
          bk_obj_icon: 'icon-cc-host',
          bk_inst_id: 0,
          bk_obj_name: '主机',
          bk_inst_name: '',
          asso_id: 0,
          count: 1,
          children: [
            {
              id: '5560',
              bk_obj_id: 'host',
              bk_obj_icon: 'icon-cc-host',
              bk_inst_id: 5560,
              bk_obj_name: '主机',
              bk_inst_name: '5560',
              asso_id: 24800
            }
          ]
        }
      ],
      next: [
        {
          id: '',
          bk_obj_id: 'cntvcaigou',
          bk_obj_icon: 'icon-cc-group',
          bk_inst_id: 0,
          bk_obj_name: '项目采购',
          bk_inst_name: '',
          asso_id: 0,
          count: 1,
          children: [
            {
              id: '7404',
              bk_obj_id: 'cntvcaigou',
              bk_obj_icon: 'icon-cc-group',
              bk_inst_id: 7404,
              bk_obj_name: '项目采购',
              bk_inst_name: '7404',
              asso_id: 28430
            }
          ]
        },
        {
          id: '',
          bk_obj_id: 'bk_switch',
          bk_obj_icon: 'icon-cc-switch2',
          bk_inst_id: 0,
          bk_obj_name: '交换机',
          bk_inst_name: '',
          asso_id: 0,
          count: 3,
          children: [
            {
              id: '1369',
              bk_obj_id: 'bk_switch',
              bk_obj_icon: 'icon-cc-switch2',
              bk_inst_id: 1369,
              bk_obj_name: '交换机',
              bk_inst_name: '1369',
              asso_id: 24792
            },
            {
              id: '6015',
              bk_obj_id: 'bk_switch',
              bk_obj_icon: 'icon-cc-switch2',
              bk_inst_id: 6015,
              bk_obj_name: '交换机',
              bk_inst_name: '6015',
              asso_id: 24795
            }
          ]
        },
        {
          id: '',
          bk_obj_id: 'cntvjigui',
          bk_obj_icon: 'icon-cc-cabinet',
          bk_inst_id: 0,
          bk_obj_name: '机柜',
          bk_inst_name: '',
          asso_id: 0,
          count: 1,
          children: [
            {
              id: '7909',
              bk_obj_id: 'cntvjigui',
              bk_obj_icon: 'icon-cc-cabinet',
              bk_inst_id: 7909,
              bk_obj_name: '机柜',
              bk_inst_name: '7909',
              asso_id: 33271
            }
          ]
        }
      ],
      curr: {
        id: '3249',
        bk_obj_id: 'cntvfuwuqi',
        bk_obj_icon: 'icon-cc-server',
        bk_inst_id: 3249,
        bk_obj_name: '服务器',
        bk_inst_name: '819181866',
        asso_id: 0
      }
    }

})
Mock.mock('/getVisData1', 'get', {
  status: 200,
  message: '获取数据成功',
  data:

   {
     prev: [
       {
         id: '',
         bk_obj_id: 'cntvfuwuqi',
         bk_obj_icon: 'icon-cc-server',
         bk_inst_id: 0,
         bk_obj_name: '服务器',
         bk_inst_name: '',
         asso_id: 0,
         count: 10,
         children: [
           {
             id: '3247',
             bk_obj_id: 'cntvfuwuqi',
             bk_obj_icon: 'icon-cc-server',
             bk_inst_id: 3247,
             bk_obj_name: '服务器',
             bk_inst_name: '3247',
             asso_id: 32773
           },
           {
             id: '3294',
             bk_obj_id: 'cntvfuwuqi',
             bk_obj_icon: 'icon-cc-server',
             bk_inst_id: 3294,
             bk_obj_name: '服务器',
             bk_inst_name: '3294',
             asso_id: 32739
           }
         ]
       },
       {
         id: '',
         bk_obj_id: 'bk_switch',
         bk_obj_icon: 'icon-cc-switch2',
         bk_inst_id: 0,
         bk_obj_name: '交换机',
         bk_inst_name: '',
         asso_id: 0,
         count: 1,
         children: [
           {
             id: '6163',
             bk_obj_id: 'bk_switch',
             bk_obj_icon: 'icon-cc-switch2',
             bk_inst_id: 6163,
             bk_obj_name: '交换机',
             bk_inst_name: '6163',
             asso_id: 35591
           }
         ]
       }
     ],
     next: [
       {
         id: '',
         bk_obj_id: 'cntvidc',
         bk_obj_icon: 'icon-cc-engine-room',
         bk_inst_id: 0,
         bk_obj_name: '机房',
         bk_inst_name: '',
         asso_id: 0,
         count: 1,
         children: [
           {
             id: '11',
             bk_obj_id: 'cntvidc',
             bk_obj_icon: 'icon-cc-engine-room',
             bk_inst_id: 11,
             bk_obj_name: '机房',
             bk_inst_name: '11',
             asso_id: 30233
           }
         ]
       }
     ],
     curr: {
       id: '7909',
       bk_obj_id: 'cntvjigui',
       bk_obj_icon: 'icon-cc-cabinet',
       bk_inst_id: 7909,
       bk_obj_name: '机柜',
       bk_inst_name: '7909',
       asso_id: 0
     }
   }

})
