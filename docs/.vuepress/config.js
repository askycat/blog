module.exports = {
  title: '筆記',
  description: '筆記的創建並維護',
  serviceWorker: true,
  themeConfig: {
    nav: [
      {
        text: 'START',
        link: '/vue/vuepress/',
      },
      {
        text: 'NET CORE',
        link: '/netcore/',
      },
      {
        text: 'VUE',
        items: [
          { text: 'VuePress', link: '/vue/vuepress/' },
          { text: 'Vuetify', link: '/vue/vuetify/' },
        ]
      }
    ]
  }
}