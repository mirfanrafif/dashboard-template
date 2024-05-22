import { useForm } from "react-hook-form";

export type LoginForm = {
  email: string;
  password: string;
};

export const useLoginPageViewModel = () => {
  const form = useForm<LoginForm>();

  const onSubmit = form.handleSubmit((data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    }).then(() => {
      alert("Form submitted!");
    });
  });

  return {
    form,
    onSubmit,
  };
};
