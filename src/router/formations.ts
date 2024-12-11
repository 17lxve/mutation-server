import { formationDB as database } from "../db";
import { Router } from "express";

function init() {
  const router = Router();
  router.get("/", async (req, res) => {
    res.send({
      data: await database.get(),
    });
  });
  router.post("/", async (req, res) => {
    res.send({
      data: await database.create(req.body),
    });
  });
  router.post("/:id", async (req, res) => {
    res.send({
      data: await database.update(req.params.id, req.body),
    });
  });

  return router;
}

export default init();
