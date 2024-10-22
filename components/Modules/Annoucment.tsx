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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useUpdateConfig from "@/hooks/UpdateConfigHook";

const formSchema = z.object({
  annoucmentchannel: z.string().nonempty("please select a channel"),
});

const Annoucment = () => {
  const { load, updateConfig } = useUpdateConfig();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      annoucmentchannel: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    updateConfig(values);
  }

  const { channels, loading } = useDiscordData();

  if (loading) {
    return (
      <div>
        <p>Loading channels...</p>
      </div>
    );
  }

  return (
    <div>
      <section className="flex flex-col gap-[50px]">
        <h1 className="text-text-lilly-pad-white text-3xl font-bold underline">
          Announcement Module
        </h1>

        <div className="p-4">
          <h2 className="text-xl text-text-lilly-pad-white font-bold">
            Annoucement Channel
          </h2>
          <div className="p-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="annoucmentchannel"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-[180px] bg-dark-dark-green text-text-lilly-pad-white border-light-petal-pink">
                            <SelectValue placeholder="Select Channel" />
                          </SelectTrigger>
                          <SelectContent>
                            {channels.map((channel) => (
                              <SelectItem key={channel.id} value={channel.id}>
                                {channel.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="pl-2 pt-10">
                  <Button
                    type="submit"
                    className="w-40 bg-light-petal-pink text-text-lilly-pad-white"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default withProtectedRoute(Annoucment);
