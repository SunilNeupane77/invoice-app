

import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({
    path:'./.env.local'
})
if(typeof process.env.XATA_DATABASE_URL !== "string"){
    throw new Error("Please Insert the database Url")
}
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: "./src/db/migrations",
  dbCredentials:{
    url:process.env.XATA_DATABASE_URL
  }
});

