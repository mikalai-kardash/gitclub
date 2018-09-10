const path = require('path');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: path.resolve('./src/index.ts'),
    devtool: 'source-map',
    target: 'node',
    output: {
        path: path.resolve('./dist'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.ts$/i,
                exclude: /node_modules/
            },
            {
                use: [
                    {
                        loader: 'webpack-graphql-loader',
                        options: {
                            output: 'document'
                        }
                    }
                ],
                test: /\.graphql?$/i
            }
        ]
    },
    externals: nodeModules,
    resolve: {
        modules: [path.resolve(__dirname, '/src'), 'node_modules/'],
        descriptionFiles: ['package.json'],
        extensions: ['.js', '.ts', '.graphql']
    }
} 
