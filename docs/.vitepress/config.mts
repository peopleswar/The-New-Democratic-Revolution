import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/The-New-Democratic-Revolution/',
  title: "新民主主义革命是世界无产阶级革命的主力",
  description: "《新民主主义革命是世界无产阶级革命的主力》翻译计划",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '查看英文译本', link: '/en/0-summary' },
      { text: '查看中文译本（施工中）', link: '/zh/0-summary' }
    ],
    sidebar: [
      {
        text: '英文译本/English Translation',
        items: [
          { text: 'Summary', link: '/en/0-summary' },
          { text: 'I- Introduction', link: '/en/1-introduction' },
          { text: 'II- The law of contradiction: sole fundamental law of materialist dialectics', link: '/en/2-law' },
          { text: 'III- Imperialism and Democratic Revolution', link: '/en/3-imperialism' },
          { text: 'IV- The law of maximum profit and the principal contradiction in the imperialist epoch', link: '/en/4-profit' },
          { text: 'V- Unite under Maoism!', link: '/en/5-unite' },
          { text: 'References', link: '/en/6-references' },
        text: '中文译本（施工中）/Chinese Translation (Under construction)',
        ]
        items: [
          { text: '目录', link: '/zh/0-summary' },
          { text: '一 引言', link: '/zh/1-introduction' },
          { text: '二 矛盾规律：唯物辩证法的唯一根本规律', link: '/zh/2-law' },
          { text: '三 帝国主义和民主革命', link: '/zh/3-imperialism' },
          { text: '四 利润最大化的法则和帝国主义时代的主要矛盾', link: '/zh/4-profit' },
          { text: '五 团结在毛主义的旗帜下！', link: '/zh/5-unite' },
          { text: '参考文献', link: '/zh/6-references' },
        ]
      }
    ],
    outline: [2,5],
    editLink: {
      pattern: 'https://github.com/revtutorials/The-New-Democratic-Revolution/edit/pages/docs/:path',
      text: '在 Github 上编辑此页面'
    },
    socialLinks: [
      { icon: 'matrix', link: 'https://matrix.to/#/#gmp:matrix.org' }
    ]
  },
})
