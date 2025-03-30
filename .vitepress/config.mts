import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 指定 Markdown 文件的根目錄
  srcDir: "./content/zh", // 如果你的 Markdown 文件在 `docs` 資料夾中

  title: "Aaron",
  description: "portfolio-vitepress-app",

  // 雙語系
  locales: {
    zh: {
      label: "中文",
      lang: "zh-TW",
      link: "/zh",
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en",
    },
  },

  themeConfig: {
    nav: [
      { text: "關於我", link: "/" },
      { text: "簡歷", link: "/zh/resume" },
      { text: "聯絡我", link: "/zh/contact" },
    ],
    localeLinks: {
      text: "Language",
      items: [
        { text: "中文", link: "/zh" },
        { text: "English", link: "/en" },
      ],
    },
  },

  socialLinks: [{ icon: "github", link: "https://github.com/ronkaotw" }],

  footer: {
    message: {
      zh: "特別感謝 Vitepress 提供版型 ",
      en: "Special thanks to Vitepress for the template",
    },
    copyright: {
      zh: 'Copyright © 2025- <a href="https://github.com/ronkaotw" target="_blank">Aaron</a>',
      en: 'Copyright © 2025- <a href="https://github.com/ronkaotw" target="_blank">Aaron</a>',
    },
  },
});
