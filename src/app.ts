import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import router from "./router";
import { db } from "./db";

const init = () => {
  const app = express();
  const dependencies = [
    cors({ origin: true }),
    helmet(),
    morgan("dev"),
    express.json(),
    express.text({ type: "text/html" }),
    router,
  ];
  for (const dependency of dependencies) app.use(dependency);
  db.init();
  return app;
};

export default init();
