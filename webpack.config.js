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
      }
    ]
  }
}
