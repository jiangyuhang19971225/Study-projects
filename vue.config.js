module.exports = {
  devServer: {
    // host: 'localhost',
    port: '8848',
    open: true

    // proxy: { // 配置跨域
    //   '/api': {
    //     // https://paas.yzbk.cntv.net/o/cntv-workflow/aw_cloud/monitoring_data/
    //     target: 'https://paas.yzbk.cntv.net/o/cntv-workflow/aw_cloud/', // 这里后台的地址模拟的;应该填写你们真实的后台接口
    //     changOrigin: true, // 允许跨域
    //     secore: false,
    //     pathRewrite: {
    //       /* 重写路径，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
    //           实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 /api
    //          */
    //       '^/api': ''
    //     }
    //   }
    // }

  }
}
