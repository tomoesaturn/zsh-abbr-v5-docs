import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { navbar } from "./configs/navbar";
import { sidebar } from "./configs/sidebar";

export default defineUserConfig<DefaultThemeOptions>({
  // https://v2.vuepress.vuejs.org/reference/config.html#head
  head: [
    // favicon generated by https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#fefefe",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],

    // social metas
    [
      "meta",
      { property: "og:title", content: "zsh-abbr" },
    ],
    [
      "meta",
      {
        property: "og:description",
        content: "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://zsh-abbr.netlify.com/",
      },
    ],
    ["meta", { property: "og:site_name", content: "zsh-abbr" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://zsh-abbr.netlify.com/images/share/zsh-abbr.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:title", content: "zsh-abbr" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://zsh-abbr.netlify.com/images/share/zsh-abbr.png",
      },
    ],

    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        'data-site': "PSZVZLUT",
        'defer': true,
      }
    ]
  ],

  // site config
  // https://v2.vuepress.vuejs.org/guide/configuration.html#site-config
  lang: "en-US",
  title: "zsh-abbr",
  description: "The zsh manager for auto-expanding abbreviations, inspired by fish shell.",

  // theme and its config
  theme: "@vuepress/theme-default",
  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  themeConfig: {
    logo: "/images/logo/zsh-abbr.png",
    repo: "olets/zsh-abbr",
    docsDir: "docs",
    docsRepo: "olets/zsh-abbr-docs",
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 1,
  },

  // plugins
  plugins: [
    // https://v2.vuepress.vuejs.org/reference/plugin/shiki.html
    [
      "@vuepress/plugin-shiki",
      {
        // only github-dark and slack-dark pass color accessibility
        theme: "github-dark",
      },
    ],
  ],
});
