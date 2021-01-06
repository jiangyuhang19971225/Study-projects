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
