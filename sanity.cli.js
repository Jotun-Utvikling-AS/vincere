import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "4ppfjuhw",
    dataset: "production",
  },
  server: {
    hostname: "localhost",
    port: 3333,
  },
});
