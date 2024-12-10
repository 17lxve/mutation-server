import { dbMessages } from "../messages";

async function seed() {
  try {
    dbMessages.seed_done();
  } catch (err: any) {
    dbMessages.seed_error(err);
  }
}

export default seed;
