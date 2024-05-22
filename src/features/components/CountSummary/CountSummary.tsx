import React from "react";

import styles from "./CountSummary.module.css";
import { Heading, Text } from "@chakra-ui/react";
import Section from "../Section/Section";

const CountSummary = (props: { title: string; count: number }) => {
  return (
    <Section>
      <Text className={styles.title}>{props.title}</Text>

      <Heading as="h2" size="lg" className={styles.count}>
        {props.count}
      </Heading>
    </Section>
  );
};

export default CountSummary;
