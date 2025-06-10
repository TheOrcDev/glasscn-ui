const components = [
  {
    title: "Button",
    url: "/docs/components/button",
  },
];

export const navItems = {
  header: [
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Components",
      href: "/docs/components/accordion",
    },
    {
      label: "Blocks",
      href: "/blocks/authentication",
    },
    {
      label: "Themes",
      href: "/themes",
    },
  ],
  navMain: [
    {
      title: "Components",
      url: "/components/accordion",
      items: components.sort((a, b) => a.title.localeCompare(b.title)),
    },
  ],
};
