const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  // エントリーポイント
  entry:'./src/main.ts',
  // 出力先、ファイル名
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".vue", ".js", ".ts"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true, // ブラウザ起動
  },
  // モジュールに適用するルール設定
  module:{
    rules:[
      {　　　　　　　　　　　　　　　　　　　　
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },     
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};