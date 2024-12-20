import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
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

// Define your form schema with zod
const formSchema = z.object({
  maxspam: z.string().min(1).max(2),
  timedurt: z.string().min(1).max(2),
  spamlog: z.string().nonempty("You must select a channel"),
});

type Channel = {
  id: string;
  name: string;
};

const Spam = () => {
  const { updateConfig } = useUpdateConfig();
  const { channels } = useDiscordData();

  // Initialize form with useForm and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      maxspam: "",
      timedurt: "",
      spamlog: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateConfig(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <section className="flex flex-col gap-[50px]">
            <h1 className="text-text-lilly-pad-white text-3xl font-bold underline">
              Spam Monitor Module
            </h1>

            <div className="pl-3">
              <h2 className="text-xl text-text-lilly-pad-white font-bold">
                Max Spam Messages
              </h2>
              <div className="max-w-[200px] m-4">
                <FormField
                  control={form.control}
                  name="maxspam"
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
              <h2 className="text-xl text-text-lilly-pad-white font-bold">
                Timeout Duration
              </h2>
              <div className="max-w-[200px] m-4">
                <FormField
                  control={form.control}
                  name="timedurt"
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

            <div className="p-4">
              <h2 className="text-xl text-text-lilly-pad-white font-bold">
                Log Channel
              </h2>
              <div className="p-4">
                <FormField
                  control={form.control}
                  name="spamlog"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-[180px] bg-dark-dark-green text-text-lilly-pad-white border-light-petal-pink">
                            <SelectValue placeholder="Select a channel" />
                          </SelectTrigger>
                          <SelectContent>
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

export default withProtectedRoute(Spam);
