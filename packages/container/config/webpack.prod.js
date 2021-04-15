const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = 'https://main.d1vbuz92d95o5v.amplifyapp.com';

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@marketing/latest/remoteEntry.js`,
                auth: `auth@auth/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}


module.exports = merge(commonConfig, prodConfig);