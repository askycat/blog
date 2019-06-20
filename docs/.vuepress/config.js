module.exports = {
  title: '筆記',
  description: '筆記的創建並維護',
  serviceWorker: false,
  themeConfig: {
    sidebar: 'auto',
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
          { text: 'Vue', link: '/vue/vue/' },
          { text: 'VuePress', link: '/vue/vuepress/' },
          { text: 'Vuetify', link: '/vue/vuetify/' },
        ]
      }
    ],
    sidebar:{
      '/vue/vue/':getVueSidebar(),
      '/vue/vuepress':getVuepressSidebar(),
      '/vue/vuetify':getVuetifySidebar()
    }
  }
}

function getVueSidebar () {
  return [  
    {
      title: "Vue",
      collapsable: true,
      children: [
        'router'
      ]
    }
  ]
}
function getVuepressSidebar () {
  return [
  
  ]
}
function getVuetifySidebar () {
  return [
    
  ]
}
