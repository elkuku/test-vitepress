import {defineConfig} from 'vitepress'

const isProd = process.env.NODE_ENV === 'production'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: isProd ? '/test-vitepress/' : '/',
    title: "IITC PluginKit Tutorial",
    description: "This is a tutorial for the IITC PluginKit",
    lastUpdated: true,
    ignoreDeadLinks: [
        /^https?:\/\/localhost/,
    ],
    // put favicon.ico in public directory, if base is set, use /base/favicon.ico
    head: [['link', { rel: 'icon', href: '/base/favicon.ico' }]],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
//            {text: 'Home', link: '/'},
//            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: [
            {
                text: 'Tutorial',
                items: [
                    {text: '1. Creating the Plugin', link: '/1-creating-the-plugin'},
                    {text: '2. Starting Buttons', link: '/2-starting-buttons'},
                    {text: '3. The Calculation', link: '/3-the-calculation'},
                    {text: '4. The Dialog', link: '/4-the-dialog'},
                    {text: '5. Map Icons', link: '/5-map-icons'},
                    {text: '6. Hooks', link: '/6-hooks'},
                    {text: '7. Release', link: '/7-release'},
                    {text: '8. Debugging', link: '/8-debugging'}
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
