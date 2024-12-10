import { Router, Request, Response } from "express";

function init() {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    res.send({ data: "Initial Test" });
  });

  return router;
}

export default init();
