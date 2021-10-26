module.exports = {
    purge:    {content: ['./public/**/*.html', './src/**/*.vue']},
    darkMode: 'class', // or 'media' or 'class'
    theme:    {
        extend: {
            colors: {
                facebook:  '#4267b2',
                linkedin:  '#2867b2',
                twitter:   '#1da1f2',
                instagram: '#e1306c',
                github:    '#171515'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins:  []
    // prefix: 'tw-'
}
