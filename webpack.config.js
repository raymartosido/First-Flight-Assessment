const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/main.js', // Path to your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './assets'), // Output in Shopify's assets directory
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: [
                            require('tailwindcss'),
                            require('autoprefixer'),
                        ],
                    },
                },
            },
        ],
      }    
    ],
  },
  plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'styles.css', // Extract CSS into a separate file
      }),
  ],
  resolve: {
      alias: {
        "@": path.resolve("./src"),
        vue$: path.resolve("./node_modules/vue/dist/vue.esm.js"),
      },
      extensions: ['.js', '.vue', '.json'],
  },
};
