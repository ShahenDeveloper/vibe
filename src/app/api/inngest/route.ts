import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { codeAgentFunction } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    codeAgentFunction,
  ],
  signingKey:"signkey-prod-d4fe7d1d9b506d9e48933f0fbee49e1db707a738deac7f23f3b61e7737b1a6dc"
});
