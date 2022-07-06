import express from "express";
import { Diet_model } from "../config/mongoConfig.js";

const router = express.Router();

router.get("/", (req, res, next) => {
  const query = req.query.name;

  res.json({ name: query });
});

router.post("/", (req, res) => {
  const body = req.body;
  console.table(req.body);

  Diet_model.create(body).then((result) => res.send("OK"));
});

router.get("/list", (req, res) => {
  Diet_model.find({}).then((result) => res.json(result));
});

export default router;
