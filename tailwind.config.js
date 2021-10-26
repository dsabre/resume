module.exports = {
    purge:    {content: ['./public/**/*.html', './src/**/*.vue']},
    darkMode: 'class', // or 'media' or 'class'
    theme:    {
        extend: {
            colors: {
                facebook: {
                    DEFAULT: '#4267b2'
                },
                linkedin: {
                    DEFAULT: '#2867b2'
                },
                twitter: {
                    DEFAULT: '#1da1f2'
                },
                instagram: {
                    DEFAULT: '#e1306c'
                },
                github: {
                    DEFAULT: '#171515'
                }
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins:  []
    // prefix: 'tw-'
}
