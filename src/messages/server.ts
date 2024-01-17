import { en as lang } from "../locales";

export default {
  start: (port: string | number) => console.log(`${lang.Server.start}${port}`),
};
