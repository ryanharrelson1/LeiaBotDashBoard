import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import withProtectedRoute from "@/utils/ProtectedComponet";
import useDiscordData from "@/hooks/DiscordGuildHook";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useUpdateConfig from "@/hooks/UpdateConfigHook";

const formSchema = z.object({
  xppermessage: z.string().min(1).max(4),
  levelupmessage: z.string().min(5).max(500),
  midprestigerole: z.string().nonempty("you must select a role"),
  masterprestigerole: z.string().nonempty("you must select a role"),
});

export type Role = {
  id: string; // Unique identifier for the role
  name: string; // Display name of the role
};

const Leveling = () => {
  const { updateConfig } = useUpdateConfig();
  const { roles } = useDiscordData();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      xppermessage: "",
      levelupmessage: "",
      midprestigerole: "",
      masterprestigerole: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    updateConfig(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <section className="flex flex-col gap-[50px]">
            <h1 className="text-text-lilly-pad-white text-3xl font-bold underline">
              Leveling Module
            </h1>
            <div className="pl-3">
              <h2 className="text-xl text-text-lilly-pad-white font font-bold ">
                XP Per Message
              </h2>
              <div className="max-w-[200px] m-4">
                <FormField
                  control={form.control}
                  name="xppermessage"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="10"
                          className="bg-dark-dark-green border-light-petal-pink border-[2px] rounded-lg text-text-lilly-pad-white placeholder:text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="pl-3">
              <h2 className="text-xl text-text-lilly-pad-white font font-bold">
                Level up Message
              </h2>
              <div className="max-w-[450px] m-4">
                <FormField
                  control={form.control}
                  name="levelupmessage"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="you have leveled up"
                          className="bg-dark-dark-green border-light-petal-pink border-[2px] rounded-lg placeholder:text-white h-40 text-text-lilly-pad-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <section className="flex flex-col gap-[50px]">
              <h1
                className="text-text-lilly-pad-white text-3xl font-bold underline
    "
              >
                Prestige System
              </h1>
              <div className="p-4">
                <h2 className="text-xl text-text-lilly-pad-white font font-bold">
                  Master Prestige Role
                </h2>
                <div className="p-4">
                  <FormField
                    control={form.control}
                    name="masterprestigerole"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-[180px] bg-dark-dark-green text-text-lilly-pad-white border-light-petal-pink">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className="">
                              {roles.map((role: Role) => (
                                <SelectItem key={role.id} value={role.id}>
                                  {role.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-text-lilly-pad-white font font-bold">
                  Mid Prestige Role
                </h2>
                <div className="p-4">
                  <FormField
                    control={form.control}
                    name="midprestigerole"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="w-[180px] bg-dark-dark-green text-text-lilly-pad-white border-light-petal-pink">
                              <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent className="">
                              {roles.map((role: Role) => (
                                <SelectItem key={role.id} value={role.id}>
                                  {role.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="ml-10">
                <Button
                  type="submit"
                  className="w-40 bg-light-petal-pink text-text-lilly-pad-white"
                >
                  Save
                </Button>
              </div>
            </section>
          </section>
        </form>
      </Form>
    </div>
  );
};

export default withProtectedRoute(Leveling);
