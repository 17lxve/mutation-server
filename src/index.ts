import { env } from "./assets";
import { serverMessages } from "./messages";
import server from "./app";

const main = () => {
  server.listen(env.port, () => serverMessages.start());
};

main();
