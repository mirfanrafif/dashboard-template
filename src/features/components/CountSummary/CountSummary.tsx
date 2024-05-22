import React from "react";

import styles from "./CountSummary.module.css";
import { Heading, Text } from "@chakra-ui/react";

const CountSummary = (props: { title: string; count: number }) => {
  return (
    <div className={styles.container}>
      <Text className={styles.title}>{props.title}</Text>

      <Heading as="h2" size="lg" className={styles.count}>
        {props.count}
      </Heading>
    </div>
  );
};

export default CountSummary;
