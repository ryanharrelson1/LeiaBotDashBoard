import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Textarea } from "../ui/textarea";
import withProtectedRoute from "@/utils/ProtectedComponet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import useDiscordData from "@/hooks/DiscordGuildHook";
import useUpdateConfig from "@/hooks/UpdateConfigHook";

const formSchema = z.object({
  birthdaymessage: z.string().min(20).max(100),
  bdayrole: z.string().nonempty("you need to select a role"),
});

export type Role = {
  id: string; // Unique identifier for the role
  name: string; // Display name of the role
};

const Bday = () => {
  const { roles } = useDiscordData();
  const { updateConfig } = useUpdateConfig();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      birthdaymessage: "",
      bdayrole: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    updateConfig(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <section className="flex flex-col gap-[50px]">
            <h1 className="text-text-lilly-pad-white text-3xl font-bold underline">
              Birthday Module
            </h1>

            <div className="pl-3"></div>
            <div className="pl-3">
              <h2 className="text-xl text-text-lilly-pad-white font font-bold">
                Birthday Message
              </h2>
              <div className="max-w-[450px] m-4">
                <FormField
                  control={form.control}
                  name="birthdaymessage"
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

            <div className="p-4">
              <h2 className="text-xl text-text-lilly-pad-white font font-bold">
                Birthday Role
              </h2>
              <div className="p-4">
                <FormField
                  control={form.control}
                  name="bdayrole"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-[180px] bg-dark-dark-green text-text-lilly-pad-white border-light-petal-pink">
                            <SelectValue placeholder="Select Role" />
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
        </form>
      </Form>
    </div>
  );
};

export default withProtectedRoute(Bday);
