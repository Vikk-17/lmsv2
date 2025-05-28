import express from "express";

import {
  addTowishList,
  getWhishListItems,
  deleteAllWhishListItems,
  deleteWishListItem,
} from "../controllers/whishlist.controller.js";

const router = express.Router();

router.post("/addtowhislist", addTowishList);
router.get("/seewhislist/:student_id", getWhishListItems);
router.delete("/remove_whistlist_item", deleteWishListItem);
router.delete("/delete_all_whishlist_items", deleteAllWhishListItems);
export default router;
