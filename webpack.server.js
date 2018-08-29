const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require(',/webpack.base.js');
const path = require('path');

const config= {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  //Tell webpack the roo file of our
  //server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  //that is generated
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname, 'build')
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}

module.exports = merge(baseConfig, config);
