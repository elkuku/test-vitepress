import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "KuKu's first TEST",
    description: "This is just a test..",
    ignoreDeadLinks: [
        // ignore exact url "/playground"
        //    '/playground',
        // ignore all localhost links
        /^https?:\/\/localhost/,
        // ignore all links include "/repl/""
        //  /\/repl\//,
        // custom function, ignore all links include "ignore"
        //  (url) => {
        //    return url.toLowerCase().includes('ignore')
        // }
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Tutorial',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: '1. Creating the Plugin', link: '/creating-the-plugin'},
                    {text: '4. The Dialog', link: '/the-dialog'},
                    {text: 'Runtime API Examples', link: '/api-examples'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/xxxx'}
        ],
        editLink: {
            pattern: 'https://github.com/xxx/yyy/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        externalLinkIcon: true
    }
})
