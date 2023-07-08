import { DefinePlugin } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export const mode = 'development';
export const devtool = 'eval-source-map';
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: [/\.vert$/, /\.frag$/],
      use: 'raw-loader',
    },
    {
      test: /\.(gif|png|jpe?g|svg|xml)$/i,
      use: 'file-loader',
    },
  ],
};
export const plugins = [
  new CleanWebpackPlugin({
    // eslint-disable-next-line no-undef
    root: resolve(__dirname, '../'),
  }),
  new DefinePlugin({
    CANVAS_RENDERER: JSON.stringify(true),
    WEBGL_RENDERER: JSON.stringify(true),
  }),
  new HtmlWebpackPlugin({
    template: './index.html',
  }),
];
