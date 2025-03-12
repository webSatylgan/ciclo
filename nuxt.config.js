// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    pages: false,

    router: {
        base: "/"
    },

    css: ["@/assets/styles/global.css"],
    app: {
        baseURL: "/Ciclo/",

        head: {
            // title
            title: "Ciclo",

            // meta tags
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ],

            // links
            link: [
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"},
                {rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"}
            ]
        }
    },

    compatibilityDate: '2024-11-01',
    devtools: { enabled: true }
})
