//const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: 3001,
        proxy: {
            '/app': {
                target: 'http://127.0.0.1:3000',  // 请求本地 需要后台项目
                ws: true
            },
            '/foo': {
                target: '<other_url>'
            }
        }
    },
    // 打包时不生成.map文件 避免看到源码
    productionSourceMap: true,
    // 部署优化
    configureWebpack: {
        // 使用CDN
        externals: {
            // vue: 'Vue',
            // 'vue-i18n': 'VueI18n',
            // axios: 'axios',
            // 'vue-router': 'VueRouter',
            // vuex: 'Vuex',
            // iview: 'iview',
            // echarts: 'echarts',
            // apexcharts: 'ApexCharts',
            // 'vue-apexcharts': 'VueApexCharts',
            // xlsx: 'XLSX',
            // dplayer: 'DPlayer',
            // gitalk: 'Gitalk'
        },
        // GZIP压缩
        plugins: [
            // new CompressionPlugin({
            //     test: /\.js$|\.html$|\.css/, // 匹配文件
            //     threshold: 10240 // 对超过10k文件压缩
            // })
        ]
    }
}