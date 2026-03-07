import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/shared/lib/db/schema.ts",
  out: "./src/shared/lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});