import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { codeAgentFunction } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    codeAgentFunction,
  ],
  signingKey:"signkey-prod-6526a24c610883c9df06b0141547517a9804a2f6250b38f8399a6625d65533e9"
});
