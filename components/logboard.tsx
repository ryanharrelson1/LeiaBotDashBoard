import React from "react";
import Message from "./message";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDiscordData from "@/hooks/DiscordGuildHook";
import useUpdateConfig from "@/hooks/UpdateConfigHook";
import UseLogChannel from "@/hooks/DiscordLogChannelHook";

const logboard = () => {
  const { messages, load: loadingMessages } = UseLogChannel();
  const { channels, loading } = useDiscordData();
  const { updateConfig, load } = useUpdateConfig();
  const SetLogChannel = (values: any) => {
    updateConfig({ logchannel: values });
  };

  return (
    <section className="bg-dark-dark-green w-[500px] px-5  h-full py-8 rounded-lg ">
      <div className="flex flex-col flex-1 gap-4 h-full">
        <section className="flex justify-between items-center">
          <h1 className="text-text-lilly-pad-white font-bold text-2xl">
            Log Channel
          </h1>
          <div>
            <Select onValueChange={SetLogChannel}>
              <SelectTrigger className="w-[180px] border-light-lilly-green bg-light-petal-pink text-text-lilly-pad-white">
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
          </div>
        </section>

        <div className=" border-white border-[1px] rounded overflow-y-scroll custom-scrollbar p-2  ">
          {loadingMessages ? (
            <p>Loading messages...</p>
          ) : messages.length > 0 ? (
            messages.map((msg) => (
              <Message
                key={msg.id}
                content={msg.content}
                author={msg.author}
                timestamp={msg.createdAt}
              />
            ))
          ) : (
            <p>No log messages available for this channel.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default logboard;
