"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const signinpage = () => {
  const formSchema = z.object({
    UserId: z.string().min(2).max(2),
    Password: z.string().min(2).max(10),
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      UserId: "",
      Password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <main className=" h-full w-[600px] flex flex-col justify-center items-center p-20">
      <div className="glass rounded-lg p-10 px-20">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-bold text-text-lilly-pad-white text-3xl">
            Moderator Login
          </h1>
          <img src="froggylogonew1.png" alt="logo" height={100} width={100} />
          <h1 className="text-text-froggie-green font-bold text-2xl">
            Sign In
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="UserId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text-lilly-pad-white">
                      UserId
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-text-lilly-pad-white text-text-froggie-green rounded-xl"
                        placeholder="UserId"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text-lilly-pad-white">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="placeholder:text-text-lilly-pad-white text-text-froggie-green rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col justify-center w-full gap-2">
                <Button
                  type="submit"
                  className="bg-light-petal-pink text-text-lilly-pad-white font-bold w-full"
                >
                  Login
                </Button>
                <p className="text-light-petal-pink">
                  Forgot Login? Contact @Azn Daddy on Discord
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default signinpage;
