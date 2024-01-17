// Imports
import { Router } from "express";

function init() {
  // Create a router for specific subfolders of requests
  const router = Router();

  // Define sub-routes
  router.get("/", (req, res) => res.send({ msg: "This is the test route" }));

  // Return the router
  return router;
}

//Exports
export default init();
