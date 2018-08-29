
const webpack = require('webpack');
const path = require('path');

module.exports = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  //Tell webpack the roo file of our
  //server application
  entry: './src/client/client.js',

  // Tell webpack where to put the output file
  //that is generated
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname, 'public')
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

  // Tell webpack to run babel on every file its run through

  module:{
    rules:[
      {
        test: /\.js?$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        options: {
          presets:[
            'react',
            'stage-0',
            ['env', {targets:{ browsers:['last 2 versions']}}]
          ]
        }
      }
    ]
  }
}
