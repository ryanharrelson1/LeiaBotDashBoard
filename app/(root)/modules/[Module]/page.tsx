"use client";

import { usePathname } from "next/navigation";
import { moduleComponet } from "@/components/ModuleComponet";
import withProtectedRoute from "@/utils/ProtectedComponet";

const page = () => {
  const pathname = usePathname();

  const moduleName = pathname.split("/").pop();
  const decodedModuleName = decodeURIComponent(moduleName || "").replace(
    /\s+/g,
    ""
  );

  const Module = moduleComponet[decodedModuleName];

  if (!Module) {
    return <p>Module not found</p>;
  }

  return (
    <main className="bg-gradient-to-r from-frog-green to-pond-blue p-2 rounded-2xl ">
      {Module ? <Module /> : <p>no componet found</p>}
    </main>
  );
};

export default withProtectedRoute(page);
