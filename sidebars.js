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
      ],
    },
  ],
};

export default sidebars;
