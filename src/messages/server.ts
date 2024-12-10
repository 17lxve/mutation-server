import { language, port } from "../assets/env";
import * as locales from "../locales";
let lang: { Database?: any; Server: any };
if (language == "en-US") {
  lang = locales.en;
} else {
  lang = locales.fr;
}
export default {
  start: () => console.log(`${lang.Server.start}${port}`),
};
