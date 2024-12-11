import { dbMessages } from "../messages";
// import { livreDB, formationDB, fakes } from ".";
import { formationDB, fakes } from ".";

async function seed() {
  let seeded = false;
  try {
    // const books = await livreDB.get();
    const formations = await formationDB.get();

    // if (books.length == 0) {
    //   seeded = true;
    //   await livreDB.create(fakes.livres);
    // }
    if (formations.length == 0) {
      seeded = true;
      await formationDB.create(fakes.formations);
    }
    if (seeded) dbMessages.seed_done();
  } catch (err: any) {
    dbMessages.seed_error(err);
  }
}

export default seed;
