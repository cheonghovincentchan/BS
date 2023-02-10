// style files regexes
// const cssRegex = /\.css$/;
// const cssModuleRegex = /\.module\.css$/;
// const sassRegex = /\.(scss|sass)$/;
// const sassModuleRegex = /\.module\.(scss|sass)$/;
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { Configuration } from 'webpack';
const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    clean: true,
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
    // @ts-ignore
    // new DotEnv({
    //   path: `.env.${env.mode}`,
    //   defaults: '.env',
    // }),
  ],
  module: {
    // exclude node_modules
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin()],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: { sourceMap: true },
      }),
      new CssMinimizerPlugin(),
    ],
    // splitChunks: {
    //   chunks: 'all',
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/](******)[\\/]/,
    //       name: 'vendor',
    //       chunks: 'all',
    //     },
    //   },
    // },
    usedExports: true,
  },
  // @ts-ignore
  devServer: {
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true,
    allowedHosts: 'all',
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: { react: 'React', 'react-dom': 'ReactDOM' },
};

export default config;
