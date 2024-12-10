import { config } from "dotenv";

process.env.node_env !== "production" ? config() : "";
export const port = process.env.PORT || 3000;
export const mongo_uri =
  `${process.env.MONGO_URI}/${process.env.APP_NAME}?${process.env.DB_OPTIONS}` ||
  "mongodb://localhost:27017/test";
export const language = process.env.LANGUAGE;
