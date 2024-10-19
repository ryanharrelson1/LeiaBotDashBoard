"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withProtectedRoute = (WrappedComponent: React.ComponentType) => {
  const HOC = (props: any) => {
    const { user, loading }: any = useAuth();

    const router = useRouter();

    useEffect(() => {
      if (loading) return;

      if (!user) {
        router.push("/sign-in");
      }
    }, [loading, user, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return HOC;
};

export default withProtectedRoute;
