import { Router, Request, Response } from "express";
import livres from "./livres";
import formations from "./formations";

function init() {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.send({ data: "Initial Test" });
  });

  router.use("/livres", livres);
  router.use("/formations", formations);
  return router;
}

export default init();
