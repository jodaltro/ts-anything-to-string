import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;
