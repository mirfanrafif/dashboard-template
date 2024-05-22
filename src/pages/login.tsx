import {
  Button,
  Card,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

import Image from "next/image";

const Page = () => {
  return (
    <Center height={"100vh"} bgColor={"gray.800"}>
      <Card padding={"2rem"}>
        <div className="flex flex-col gap-y-4 items-center">
          <Image src="/next.svg" alt="Logo" width={100} height={100} />

          <Heading
            size={"md"}
            textAlign={"center"}
            color={"var(--neutrals-grey)"}
          >
            Dashboard Kit
          </Heading>

          <div className="space-y-2 mt-4">
            <Heading textAlign={"center"} size={"lg"}>
              Log In to Dashboard Kit
            </Heading>
            <Text
              textAlign={"center"}
              fontSize={"sm"}
              color={"var(--neutrals-grey)"}
            >
              Enter your email and password below:
            </Text>
          </div>

          <FormControl className="mt-4">
            <FormLabel fontSize={"sm"} color={"var(--neutrals-grey)"}>
              Email
            </FormLabel>
            <Input placeholder="Enter your username" />
          </FormControl>

          <FormControl>
            <FormLabel fontSize={"sm"} color={"var(--neutrals-grey)"}>
              Password
            </FormLabel>
            <Input placeholder="Enter your password" type="password" />
          </FormControl>

          <Button colorScheme="blue" width={"100%"} className="mt-4">
            Log In
          </Button>

          <Flex className="mt-4" justifyContent={"center"}>
            <Text fontSize={"sm"} color={"var(--neutrals-grey)"}>
              Don&apos;t have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign Up
              </a>
            </Text>
          </Flex>
        </div>
      </Card>
    </Center>
  );
};

export default Page;
