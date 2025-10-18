import { serve } from "inngest/next";

import { inngest } from "@/inngest/client";
import { codeAgentFunction } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    codeAgentFunction,
  ],
  signingKey:"signkey-prod-9fad2be2ae44ef70cc879af2b17a46324c901f609cac7c83a703c548c1bb310d"
});
