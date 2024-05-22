import { SidebarItemProps } from "./SidebarItem";

export const useSidebarViewModel = () => {
  const sidebarItems: SidebarItemProps[] = [
    {
      title: "Dashboard",
      icon: "fa-chart-pie",
      href: "/",
    },
  ];

  return {
    sidebarItems,
  };
};
