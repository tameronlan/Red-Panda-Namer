const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    publicPath: '',
    outputDir: 'app/',
    css: {
        extract: false,
    },
    configureWebpack: {
        plugins: [
            new HtmlWebpackPlugin({
                inlineSource: '.(js|css)$', // embed all javascript and css inline
                template: '/public/index.html'
            }),
            new HtmlWebpackInlineSourcePlugin()
        ],
        optimization: {
            splitChunks: false
        }
    },
    chainWebpack: config => {
        config.plugins.delete('prefetch');

        const svgRule = config.module.rule('svg');

        svgRule.uses.clear();
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .options({
                svgo: {
                    plugins: [{removeDimensions: false}, {removeViewBox: false}, {prefixIds: true}]
                }
            });
    }
};
