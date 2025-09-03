// This configuration tells Convex to authenticate tokens from Clerk
export default {
  providers: [
    {
      domain: "relaxed-wahoo-3.clerk.accounts.dev",
      applicationID: "convex",
    },
    {
      domain: "https://relaxed-wahoo-3.clerk.accounts.dev",
      applicationID: "convex",
    },
    // Add common clerk domain formats that might be used in production
    {
      domain: "clerk.relaxed-wahoo-3.accounts.dev",
      applicationID: "convex",
    }
  ],
};
