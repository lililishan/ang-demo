'user strict'
var webpack = require('webpack')
var EXTRACT_TEXT_PLUGIN = require('extract-text-webpack-plugin')
var HTML_WEBPACK_PLUGIN = require('html-webpack-plugin');//可以将打包好的文件动态加载到

var path = require('path')
var ROOT_PATH = path.join(__dirname, '/');
var ENV = process.env.npm_lifecycle_event;

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')

var config = {
    //入口公共文件
    //配置入口文件，有几个写几个。我这里有两个文件。一个是所有我需要引入的文件，一个是我的入口文件，app.js
    //支持数组形式，将加载数组中的所有模块，但以最后一个模块作为输出,比如下面数组里面的js,全部压缩在了vendor这个文件这里
    entry: {
        vendors: ['angular', 'angular-ui-router','angular-animate','moment'],
        app: path.join(ROOT_PATH + './src/app.js')
    },
    //入口文件输出配置
    output: {
        path: path.join(ROOT_PATH + './build'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它.名字可以随便起
        filename: ENV === 'build' ? 'js/[name].js':'js/[name].[hash].js',//每个页面对应的主js的生成配置。比如我的app.js打包后就为  js/app.bundle.js
        chunkFilename: 'js/[id].chunks.js'//bundle生成的配置
    },
    devServer: {
        port: 3321,
        contentBase: __dirname + '../',
        inline: true, //监控js变化
        hot: false, //热启动
        proxy: {
            '/rap/*': {
                target: 'http://192.168.0.30/mockjsdata/33/',
                pathRewrite: {
                    '^/rap': ''
                },
                changeOrigin: true,
                secure: false
            },
        }


    },
    //
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            'npm': ROOT_PATH  + '/node_modules'
            // 'npm': '/node_modules',
            // // 'jquery': 'jquery/dist/jquery.min.js',
            // 'angular-ui-router': 'angular-ui-router/release/angular-ui-router.min.js',
            // 'angular': 'angular/angular.min.js',
            // 'angular-animate': 'angular-animate/angular-animate.min.js',
            // 'moment': 'moment/moment.js'
        },
        extensions: ['', '.js', '.html', '.jade', '.css', '.styl']

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate?add=true', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: EXTRACT_TEXT_PLUGIN.extract("style-loader", "css-loader"),
                // exclude: /node_modules/
            },
            {
                include: /\.(pug|jade)/,
                // pass options to pug as a query ('pug-html-loader?pretty')
                loaders: ['html-loader', 'pug-html-loader?exports=false']
            },
            {
                test: /\.html$/i,
                loader: 'html',
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: "style-loader!css-loader!stylus-loader"
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)\??.*$/,
                loader: 'file?name=/images/font/[name]_[sha512:hash:base64:7].[ext]',
                // exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loader: 'file?name=images/[name]_[sha512:hash:base64:7].[ext]'
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',// 将公共模块提取，生成名为`vendors`bundle
            filename: 'js/vendors.js',
            chunks: ['app'],//提取哪些模块共有的部分,名字为上面的vendor
            // 对所有entry实行这个规则
            // minChunks: Infinity
        }),
        //ProvidePlugin插件主要是进行设置全局模块，
        // 比如jquery插件几乎所有的页面都用到，
        // 使用require('jquery')引用写起来比较多，
        // 这个时候就可以使用ProvidePlugin 把jquery设置为全局的，
        // 每个页面就可以 直接使用了。
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery'
        }),
        new EXTRACT_TEXT_PLUGIN('css/[name].css', {allChunks: true}),
        new HTML_WEBPACK_PLUGIN({
            // favicon: 'favicon.ico',
            filename: './index.html',//生成的html存放路径，相对于 path
            template: './src/index.jade',
            chunks: ['vendors', 'app'],//需要引入的chunk，不配置就会引入所有页面的资源.名字来源于你的入口文件
            inject: true,//允许插件修改哪些内容，包括head与body
            minify: {//压缩HTML文件
                removeComments: true,//移除HTML中的注释
                collapseWhitespace: true//删除空白符与换行符
            }
        }),
        // UglifyFun(),//生产压缩
        // new ngAnnotatePlugin({
        //     add: true
        //     // other ng-annotate options here
        // })
        //new webpack.HotModuleReplacementPlugin() 热加载
        //变量
        new webpack.DefinePlugin({
            API: ENV === 'build' ? '"/dataBase"':JSON.stringify('/dev')
        })
    ]
}
console.log(config.babel)
module.exports = config
