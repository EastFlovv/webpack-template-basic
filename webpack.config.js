//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//export
module.exports = {
  //parcel main.js
  //파일을 읽는 진입점
  entry : './js/main.js',
  //결과물을 반환하는 설정
  output : {
    // path : path.resolve(__dirname, 'dist'),
    // filename : 'main.js',
    clean : true
  },
  module:{
    rules : [
      {
        //RegExp .css 혹은 scss로 끝나는 문자를 찾는다
        test : /\.s?css$/, 
        use : [//역순으로 적용된다.
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test : /\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },

  //번들링 후 경과물의 처리방식등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template : './index.html'
    }),
    new CopyPlugin({
      patterns : [
        {from : 'static'}
      ]
    })
  ],

  devServer : {
    host: 'localhost'
  }

};