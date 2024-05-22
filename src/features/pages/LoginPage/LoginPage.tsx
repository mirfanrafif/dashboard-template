import {
  Center,
  Card,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Flex,
  Input,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";

import Image from "next/image";
import { useLoginPageViewModel } from "./LoginPage.viewModel";

const LoginPage = () => {
  const { form, onSubmit } = useLoginPageViewModel();

  return (
    <form onSubmit={onSubmit}>
      <Center height={"100vh"} bgColor={"gray.800"}>
        <Card padding={"2rem"}>
          <div className="flex flex-col gap-y-4 items-center">
            <Image src="/next.svg" alt="Logo" width={100} height={100} />

            <Heading
              size={"sm"}
              textAlign={"center"}
              color={"var(--neutrals-grey)"}
            >
              Dashboard Kit
            </Heading>

            <div className="space-y-2 mt-4">
              <Heading textAlign={"center"} size={"md"}>
                Log In to Dashboard Kit
              </Heading>
              <Text
                textAlign={"center"}
                fontSize={"sm"}
                color={"var(--neutrals-grey)"}
                fontWeight={"600"}
              >
                Enter your email and password below:
              </Text>
            </div>

            <FormControl
              className="mt-4"
              isInvalid={form.formState.errors.email !== undefined}
            >
              <FormLabel fontSize={"sm"} color={"var(--neutrals-grey)"}>
                Email
              </FormLabel>
              <Input
                placeholder="Enter your username"
                {...form.register("email", {
                  required: "This field is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {form.formState.errors.email && (
                <FormErrorMessage>
                  {form.formState.errors.email.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={form.formState.errors.password !== undefined}
            >
              <FormLabel fontSize={"sm"} color={"var(--neutrals-grey)"}>
                Password
              </FormLabel>
              <Input
                placeholder="Enter your password"
                type="password"
                {...form.register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {form.formState.errors.password && (
                <FormErrorMessage>
                  {form.formState.errors.password.message}
                </FormErrorMessage>
              )}
            </FormControl>

            <Button
              colorScheme="blue"
              width={"100%"}
              className="mt-4"
              type="submit"
            >
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
    </form>
  );
};

export default LoginPage;
