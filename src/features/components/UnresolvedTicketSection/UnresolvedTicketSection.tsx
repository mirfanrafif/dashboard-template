import Section from "@/features/components/Section/Section";
import {
  Heading,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

import styles from "./UnresolvedTicketSection.module.css";

const UnresolvedTicketSection = () => {
  return (
    <Section className="col-span-2">
      <Heading fontSize={"small"}>Unresolved Tickets</Heading>
      <Text fontSize={"small"} color={"var(--neutrals-grey)"} className="mt-2">
        Group: <b>Support</b>
      </Text>

      <Table fontSize={"small"} className="mt-4">
        <Tbody className={styles.tableBody}>
          <Tr>
            <Td>Waiting on Feature Request</Td>
            <Td>15</Td>
          </Tr>
          <Tr>
            <Td>Awaiting customer response</Td>
            <Td>15</Td>
          </Tr>
          <Tr>
            <Td>Awaiting developer fix</Td>
            <Td>15</Td>
          </Tr>
          <Tr>
            <Td>Pending</Td>
            <Td>15</Td>
          </Tr>
        </Tbody>
      </Table>
    </Section>
  );
};

export default UnresolvedTicketSection;
