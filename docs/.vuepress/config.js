module.exports = {
  title: '筆記',
  description: '瞭解筆記的創建並維護',
  serviceWorker: true,
  themeConfig: {
    nav: [
      {
        text: 'START',
        link: '/vue/vuepress/',
      },
      {
        text: '.NET CORE',
        link: '/NETCORE/',
      },
      {
        text: 'VUE',
        items: [
          { text: 'VuePress', link: '/VUE/VuePress/' },
          { text: 'Vuetify', link: '/VUE/Vuetify/' },
        ]
      }
    ]
  }
}