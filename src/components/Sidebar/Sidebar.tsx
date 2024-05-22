import React from "react";

import styles from "./Sidebar.module.css";
import { Heading } from "@chakra-ui/react";
import { useSidebarViewModel } from "./Sidebar.viewModel";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { sidebarItems } = useSidebarViewModel();

  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <Heading size={"md"}>Dashbord UI</Heading>
      </div>
      {sidebarItems.map((item) => (
        <SidebarItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default Sidebar;
