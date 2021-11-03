module.exports = {
    pluginOptions: {
        i18n: {
            locale:         'en',
            fallbackLocale: 'en',
            localeDir:      'locales',
            enableInSFC:    undefined,
            enableBridge:   undefined
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/resume-site/' : '/'
}
