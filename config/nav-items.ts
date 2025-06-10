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
      href: "/docs/components/button",
    },
  ],
  navMain: [
    {
      title: "Components",
      url: "/docs/components/button",
      items: components.sort((a, b) => a.title.localeCompare(b.title)),
    },
  ],
};
