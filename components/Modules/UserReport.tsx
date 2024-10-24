import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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
  reportchannel: z.string().nonempty("you must select a channel"),
});

type Channel = {
  id: string;
  name: string;
};

const UserReport = () => {
  const { updateConfig } = useUpdateConfig();
  const { channels } = useDiscordData();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reportchannel: "",
    },
  });

  // 2. Define a submit handler.
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
              User Reporting Module
            </h1>

            <div className="p-4">
              <h2 className="text-xl text-text-lilly-pad-white font font-bold">
                Report Channel
              </h2>
              <div className="p-4">
                <FormField
                  control={form.control}
                  name="reportchannel"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-[180px] bg-dark-dark-green text-text-lilly-pad-white border-light-petal-pink">
                            <SelectValue placeholder="channel" />
                          </SelectTrigger>
                          <SelectContent className="">
                            {channels.map((channel: Channel) => (
                              <SelectItem key={channel.id} value={channel.id}>
                                {channel.name}
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
        </form>
      </Form>
    </div>
  );
};

export default withProtectedRoute(UserReport);
