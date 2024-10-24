"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Define the type for the props of the wrapped component
type WithProtectedRouteProps = {
  [key: string]: unknown; // Use `unknown` for a more type-safe approach
};

const withProtectedRoute = <P extends WithProtectedRouteProps>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOC: React.FC<Omit<P, keyof WithProtectedRouteProps>> = (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (loading) return;

      // Redirect to the sign-in page if the user is not authenticated
      if (!user) {
        router.push("/sign-in");
      }
    }, [loading, user, router]);

    // Show a loading indicator while checking auth status
    if (loading) {
      return <div>Loading...</div>;
    }

    // Render the wrapped component if the user is authenticated
    return <WrappedComponent {...(props as P)} />;
  };

  return HOC;
};

export default withProtectedRoute;
