const components = [
  {
    title: "Alert",
    url: "/docs/components/alert",
  },
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
      href: "/docs/components/alert",
    },
  ],
  navMain: [
    {
      title: "Components",
      url: "/docs/components/alert",
      items: components.sort((a, b) => a.title.localeCompare(b.title)),
    },
  ],
};
