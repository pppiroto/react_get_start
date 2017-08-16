module.exports = {
    // ビルド起点ファイル
    entry: './src/entry.js',
    // 出力ファイルの設定
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    // ソースマップをファイル内に出力させる場合、以下
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/, // 対象ファイル
                loader: 'babel-loader', // 使用するLoader
                exclude: /node_modules/, // 除外ディレクトリ
                query: {
                    presets:['react','es2015']
                }
            }
        ]
    }
};
