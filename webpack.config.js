const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports =(env,options)=>{
    
   return {

    entry: './src/index.ts',
    mode: options.mode,
    node: { __dirname: true},    
    target: 'node',
    externals: [nodeExternals()],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js'
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
          {
              test: /\.ts$/,
              use: [
                'ts-loader',
              ]
          },
          {
              // Transpiles ES6-8 into ES5
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader",
                  options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                  }
              },
          }
      ]
    },
    plugins: [
  
      new WebpackShellPlugin({
        onBuildEnd: ['npm run run:dev']
      })
    ],
    watch: env.NODE_ENV === 'development'
   } 
}