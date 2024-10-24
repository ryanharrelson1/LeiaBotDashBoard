"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import useLogin from "@/hooks/LoginHook";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the validation schema for the form
const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Define the props type for the PasswordChangeModal component
interface PasswordChangeModalProps {
  isVisible: boolean; // Change to isVisible for clarity
  onClose: () => void; // onClose should be a function
}

const PasswordChangeModal: React.FC<PasswordChangeModalProps> = ({
  isVisible,
  onClose,
}) => {
  const { changePassword, load } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    changePassword(values.newPassword);
    console.log(values, "form values");
    onClose();
  }

  if (!isVisible) return null; // Return null if the modal is not visible
  return (
    <div className="fixed flex flex-col bg-dark-dark-green top-[30vh] p-4 w-[300px] gap-2 border-light-lilly-green border-[1px] rounded-2xl">
      <h1 className="flex justify-center text-text-lilly-pad-white font-semibold">
        Change Password
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-light-petal-pink text-text-froggie-green"
                    type="password"
                    placeholder="New Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="border-light-petal-pink text-text-froggie-green"
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-light-petal-pink" type="submit" disabled={load}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PasswordChangeModal;
