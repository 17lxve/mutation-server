import { env } from "../assets";
import * as locales from "../locales";
let lang: { Database: any; Server?: any };
if (env.language == "en-US") {
  lang = locales.en;
} else {
  lang = locales.fr;
}
export default {
  start: () => console.log(`${lang.Database.start}`),
  success: () => console.log(`${lang.Database.success}`),
  connection_error: (err: Error) =>
    console.error(`${lang.Database.connection_error}${err.message}`),
  init_error: (err: Error) =>
    console.error(`${lang.Database.init_error}${err.message}`),
  seed_done: () => console.log(`${lang.Database.seed_done}`),
  seed_error: (err: Error) =>
    console.log(`${lang.Database.seed_error} ${err.message}`),
};
