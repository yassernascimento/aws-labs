/* eslint-disable @typescript-eslint/no-var-requires */
const slsw = require('serverless-webpack');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: slsw.lib.entries,
  resolve: { extensions: ['.ts', '.js'] },
  target: 'node',
  module: { rules: [{ test: /.ts$/, use: 'ts-loader' }] },
  plugins: [
    new webpack.IgnorePlugin({
      checkResource(resource) {
        const lazyImports = [
          'cache-manager',
          'class-validator',
          'class-transformer',
          '@nestjs/websockets',
          '@nestjs/websockets/socket-module',
          '@nestjs/microservices',
          '@nestjs/microservices/microservices-module',
        ];

        if (!lazyImports.includes(resource)) {
          return false;
        }

        try {
          require.resolve(resource);
          return false;
        } catch (err) {
          return true;
        }
      },
    }),
  ],
};
