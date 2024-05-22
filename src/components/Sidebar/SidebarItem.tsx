import React from "react";

import styles from "./Sidebar.module.css";

export type SidebarItemProps = {
  icon: string;
  title: string;
  href: string;
};

const SidebarItem = (props: SidebarItemProps) => {
  return (
    <a href={props.href} className={styles.sidebarItem}>
      <i className={`fa-solid ${props.icon} mr-4`}></i>
      {props.title}
    </a>
  );
};

export default SidebarItem;
