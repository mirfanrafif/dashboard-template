import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import styles from "./DashboardContainer.module.css";
import Topbar from "../Topbar/Topbar";

export type DashboardContainerProps = {
  children?: React.ReactNode;
};

const DashboardContainer = (props: DashboardContainerProps) => {
  return (
    <div>
      <Sidebar />
      <div className={styles.wrapper}>
        <Topbar />
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardContainer;
