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

interface MessageProps {
  id: number;
  content: string; // Message content should be a string
  author: string; // Author should be a string
  createdAt: number; // Timestamp should be a number (Unix timestamp or date string)
}

type Channel = {
  id: string;
  name: string;
};

const Logboard = () => {
  const { messages, load: loadingMessages } = UseLogChannel();
  const { channels } = useDiscordData();
  const { updateConfig } = useUpdateConfig();
  const SetLogChannel = (values: unknown) => {
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
                {channels.map((channel: Channel) => (
                  <SelectItem key={channel.id} value={channel.id}>
                    {channel.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        <div className=" border-white border-[1px] rounded overflow-y-scroll custom-scrollbar p-2 h-full ">
          {loadingMessages ? (
            <p>Loading messages...</p>
          ) : messages.length > 0 ? (
            messages.map((msg: MessageProps) => (
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

export default Logboard;
