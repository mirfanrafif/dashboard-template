import React from "react";

import styles from "./Topbar.module.css";
import { Text } from "@chakra-ui/react";

const Topbar = (props: { title: string }) => {
  return (
    <div className={styles.container}>
      <Text className="flex-1" fontWeight={"700"}>
        {props.title}
      </Text>

      <button className={styles.actions}>
        <i className="fa-solid fa-search"></i>
      </button>
      <button className={styles.actions}>
        <i className="fa-solid fa-bell"></i>
      </button>

      <div className={styles.profileGroup}>
        <Text>Irfan Rafif</Text>
        <img
          src="https://avatars.githubusercontent.com/u/61448418?v=4"
          alt="profile"
          className={styles.profile}
        />
      </div>
    </div>
  );
};

export default Topbar;
