// Imports
import { Router } from 'express';
import { exampleDB } from '../db';

function init() {
    const router = Router();
    
    router.post("/", async (req, res) => res.send(await exampleDB.create(req.body)));
    router.get("/", async (req, res) => res.send(await exampleDB.get()));
    router.get("/:id", async (req, res) => res.send(await exampleDB.getWithId(parseInt(req.params.id))));
    router.put("/:id", async (req, res) => res.send(await exampleDB.update(parseInt(req.params.id), req.body)));
    router.delete("/:id", async (req, res) => res.send(await exampleDB.delete(parseInt(req.params.id))));

    return router;
}

export default init();