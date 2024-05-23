import React from "react";
import Section from "../Section/Section";
import {
  Badge,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import styles from "./NewTaskSection.module.css";

const NewTaskSection = () => {
  const tasks = [
    {
      title: "Finish Ticket Update",
      tags: ["Urgent", "New"],
      isDone: false,
    },
    {
      title: "Create New Ticket",
      tags: ["New"],
      isDone: true,
    },
    {
      title: "Update Ticket",
      tags: ["Urgent"],
      isDone: false,
    },
  ];

  return (
    <Section className="col-span-2">
      <Heading fontSize={"small"}>Unresolved Tickets</Heading>
      <Text fontSize={"small"} color={"var(--neutrals-grey)"} className="mt-2">
        Today
      </Text>
      <Table>
        <Tbody className={styles.tableBody}>
          <Tr>
            <Td>
              <Text fontSize={"small"}>Create New Task</Text>
            </Td>
            <Td>
              <IconButton aria-label="Add task">
                <i className="fa-solid fa-add"></i>
              </IconButton>
            </Td>
          </Tr>
          {tasks.map((task, index) => (
            <Tr key={index}>
              <Td>
                <Text fontSize={"small"}>{task.title}</Text>
              </Td>
              <Td>
                {task.tags.map((tag, index) => (
                  <Badge key={index} colorScheme="green" className="mr-1">
                    {tag}
                  </Badge>
                ))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Section>
  );
};

export default NewTaskSection;
