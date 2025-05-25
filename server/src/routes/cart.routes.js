import express from "express";

import {
  addTowishList,
  getWhishListItems,
} from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/addtowhislist", addTowishList);
router.get("/seewhislist/:student_id", getWhishListItems);
export default router;
