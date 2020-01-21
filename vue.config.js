const path = require('path'); //引入path模块
function resolve(dir) {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('styles', resolve('src/assets/styles'))
            .set('components', resolve('./src/components'))
        //set第一个参数：设置的别名，第二个参数：设置的路径
    },
    // 路由转发
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080/',
                pathRewrite: {
                    '^/api': '/mock', // rewrite path
                },
                ws: true,
                changeOrigin: true
            }
        }
    }
}
