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
import useDiscordOAuth from "@/hooks/DiscordHook";
import useLogin from "@/hooks/LoginHook";

const SigninForm = () => {
  const { redirectToDiscordOAuth, loading } = useDiscordOAuth();
  const { LoginUser, load } = useLogin();

  const formSchema = z.object({
    Username: z.string().min(2).max(50),
    Password: z.string().min(2).max(30),
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Username: "",
      Password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    LoginUser(values);
    console.log(values);
  }

  return (
    <main>
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
                name="Username"
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
                  {load ? "logging in..." : "Login"}
                </Button>
                <p className="text-light-petal-pink">
                  Forgot Login? Contact @Azn Daddy on Discord
                </p>
                <div className="flex">
                  <h2 className="text-text-lilly-pad-white font-semibold">
                    Need Access? Click the Button
                  </h2>
                  <Button onClick={redirectToDiscordOAuth} disabled={loading}>
                    {loading ? "redirecting..." : "Access"}
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default SigninForm;
