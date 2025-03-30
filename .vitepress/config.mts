import { defineConfig } from "vitepress";

export default defineConfig({
  // 指定 Markdown 文件的根目錄
  title: "Aaron",
  description: "portfolio-vitepress-app",

  // 雙語系
  locales: {
    zh: {
      label: "中文",
      lang: "zh-TW",
      link: "/content/zh/",
      themeConfig: {
        nav: [
          { text: "關於我", link: "/content/zh/" },
          { text: "簡歷", link: "/content/zh/resume" },
          { text: "聯絡我", link: "/content/zh/contact" },
        ],
        footer: {
          message: "特別感謝 Vitepress 提供版型",
          copyright:
            'Copyright © 2025- <a href="https://github.com/ronkaotw" target="_blank">Aaron</a>',
        },
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/content/en/",
      themeConfig: {
        nav: [
          { text: "About", link: "/content/en/" },
          { text: "Resume", link: "/content/en/resume" },
          { text: "Contact", link: "/content/en/contact" },
        ],
      },
    },
  },

  themeConfig: {
    localeLinks: {
      text: "Language",
      items: [
        { text: "中文", link: "/content/zh/" },
        { text: "English", link: "/content/en/" },
      ],
    },

    footer: {
      message: "Special thanks to Vitepress for the template",
      copyright:
        'Copyright © 2025- <a href="https://github.com/ronkaotw" target="_blank">Aaron</a>',
    },
  },

  socialLinks: [{ icon: "github", link: "https://github.com/ronkaotw" }],
});
