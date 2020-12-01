// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/RockPaperScissors/'
    : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Rock Paper Scissors";
                return args;
            })
    }
}