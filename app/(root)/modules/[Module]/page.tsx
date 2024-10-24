"use client";

import { usePathname } from "next/navigation";
import { moduleComponet } from "@/components/ModuleComponet";
import withProtectedRoute from "@/utils/ProtectedComponet";
import { FC } from "react";

// Type definition for moduleComponet
type ModuleComponentMap = {
  [key: string]: FC | undefined;
};

const Page: FC = () => {
  const pathname = usePathname();

  // Extract and decode the module name from the pathname
  const moduleName = pathname.split("/").pop();
  const decodedModuleName = decodeURIComponent(moduleName || "").replace(
    /\s+/g,
    ""
  );

  // Fetch the corresponding module component
  const Module = (moduleComponet as ModuleComponentMap)[decodedModuleName];

  if (!Module) {
    return <p>Module not found</p>;
  }

  return (
    <main className="bg-gradient-to-r from-frog-green to-pond-blue p-2 rounded-2xl">
      <Module />
    </main>
  );
};

export default withProtectedRoute(Page);
