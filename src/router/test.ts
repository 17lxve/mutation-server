// Imports
import { Router } from "express";
import livres from "../db/livres";

function init() {
  // Create a router for specific subfolders of requests
  const router = Router();

  // Define sub-routes
  router.get("/", (req, res) => res.send({ msg: "This is the test route" }));
  router.get("/livres", async (req, res) => res.send(await livres.get()));

  // Return the router
  return router;
}

//Exports
export default init();
