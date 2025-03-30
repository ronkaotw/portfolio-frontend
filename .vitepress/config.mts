import { defineConfig } from "vitepress";

export default defineConfig({
  // 指定 Markdown 文件的根目錄
  srcDir: "content",

  title: "Aaron",
  description: "portfolio-vitepress-app",

  // 雙語系
  locales: {
    zh: {
      label: "中文",
      lang: "zh-TW",
      link: "/zh/",
      themeConfig: {
        // ✅ 把 themeConfig 移進來
        nav: [
          { text: "關於我", link: "/zh/" },
          { text: "簡歷", link: "/zh/resume" },
          { text: "聯絡我", link: "/zh/contact" },
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
      link: "/en/",
      themeConfig: {
        // ✅ 把 themeConfig 移進來
        nav: [
          { text: "About", link: "/en/" },
          { text: "Resume", link: "/en/resume" },
          { text: "Contact", link: "/en/contact" },
        ],
      },
    },
  },

  themeConfig: {
    localeLinks: {
      text: "Language",
      items: [
        { text: "中文", link: "/zh/" },
        { text: "English", link: "/en/" },
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
