module.exports = {
    pluginOptions: {
        i18n: {
            locale:         'it',
            fallbackLocale: 'en',
            localeDir:      'locales',
            enableInSFC:    undefined,
            enableBridge:   undefined
        }
    },

    publicPath: process.env.NODE_ENV === 'production' ? '/resume/' : '/',

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Daniele Sabre'
                return args
            })
    }
}
