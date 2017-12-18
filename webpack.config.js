module.exports = {
  entry:'./src/index.js',
  output:{
    path:__dirname+'/dist/',
    filename:"bundle.js"
  },
  watch:true,
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        query:{
          presets:['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  }
}
