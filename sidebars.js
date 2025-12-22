// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Tech Docs",
    },
    {
      type: "category",
      label: "SOOL",
      items: [
        "sool/architecture",
          "sool/data-model",
          "sool/api",
          "sool/auth-design",
          "sool/analytics",
      ],
    },
  ],
};

export default sidebars;
