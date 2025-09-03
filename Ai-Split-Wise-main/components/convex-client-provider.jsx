"use client";

import { ConvexReactClient } from "convex/react";
import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";

// Create a new ConvexReactClient instance using the environment variable
const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = new ConvexReactClient(convexUrl);

export function ConvexClientProvider({ children }) {
  return (
    <ConvexProviderWithClerk 
      client={convex} 
      useAuth={useAuth}
    >
      {children}
    </ConvexProviderWithClerk>
  );
}
