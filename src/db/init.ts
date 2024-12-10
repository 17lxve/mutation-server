import mongoose from "mongoose";
import { dbMessages } from "../messages";
import { env } from "../assets";
import { seed } from ".";

let db: any;

const connector = {
  init: async function () {
    try {
      dbMessages.start();
      db = await mongoose
        .connect(env.mongo_uri)
        .then(() => dbMessages.success())
        .catch((err) => dbMessages.connection_error(err));
    } catch (err: any) {
      dbMessages.init_error(err);
    }
    await seed();
  },
  get: () => db,
  collection: (collection_name: string) =>
    mongoose.connection.db?.collection(collection_name),
};

export default connector;
