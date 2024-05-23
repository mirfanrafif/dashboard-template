import Section from "@/features/components/Section/Section";
import {
  Button,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import React from "react";

import Image from "next/image";

type TaskItem = {
  title: string;
  customer: {
    name: string;
    profilePhoto: string;
  };
  createdAt: string;
  updatedAt: string;
  priority: "low" | "medium" | "high";
};

const TaskListPage = () => {
  const tasks: TaskItem[] = [
    {
      title: "Finish Ticket Update",
      customer: {
        name: "John Doe",
        profilePhoto: "https://avatars.githubusercontent.com/u/43906580?v=4",
      },
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      priority: "high",
    },
    {
      title: "Create New Ticket",
      customer: {
        name: "John Doe",
        profilePhoto: "https://avatars.githubusercontent.com/u/43906580?v=4",
      },
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      priority: "low",
    },
    {
      title: "Update Ticket",
      customer: {
        name: "John Doe",
        profilePhoto: "https://avatars.githubusercontent.com/u/43906580?v=4",
      },
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      priority: "medium",
    },
  ];

  return (
    <Section>
      <div className="flex flex-row gap-x-4 items-center">
        <Heading>All Tickets</Heading>

        <Button
          variant={"ghost"}
          className="ml-auto"
          size={"sm"}
          color={"var(--neutrals-grey)"}
        >
          <i className="fa-solid fa-up-down mr-2"></i>
          Sort
        </Button>

        <Button variant={"ghost"} size={"sm"} color={"var(--neutrals-grey)"}>
          <i className="fa-solid fa-filter mr-2"></i>
          Filter
        </Button>
      </div>

      <Table fontSize={"small"}>
        <Thead>
          <Tr>
            <Th>Ticket Details</Th>
            <Th>Customer Name</Th>
            <Th>Date</Th>
            <Th>Priority</Th>
            <Th className="w-16"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {tasks.map((item) => (
            <Tr>
              <Td>
                <div className="flex flex-row gap-x-4">
                  <Image
                    width={32}
                    height={32}
                    src={item.customer.profilePhoto}
                    alt={item.customer.name}
                    className="h-8 w-8 rounded-full"
                  />

                  <div>
                    <Text fontWeight={"600"}>{item.title}</Text>
                    <Text color={"var(--neutrals-grey)"}>{item.updatedAt}</Text>
                  </div>
                </div>
              </Td>
              <Td>
                <Text fontWeight={"600"}>{item.customer.name}</Text>
                <Text color={"var(--neutrals-grey)"}>{item.createdAt}</Text>
              </Td>
              <Td>{item.createdAt}</Td>
              <Td>
                <Badge
                  colorScheme={
                    item.priority === "high"
                      ? "red"
                      : item.priority === "medium"
                      ? "yellow"
                      : "green"
                  }
                >
                  {item.priority}
                </Badge>
              </Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<i className="fa-solid fa-ellipsis-vertical" />}
                    variant="text"
                  />
                  <MenuList>
                    <MenuItem icon={<i className="" />} command="⌘T">
                      New Tab
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Section>
  );
};

export default TaskListPage;
