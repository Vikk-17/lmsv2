import express from "express";

import {
  addToWishList,
  getWishListItems,
  deleteAllWishListItems,
  deleteWishListItem,
} from "../controllers/whishlist.controller";

const router = express.Router();

router.post("/addtowhislist", addToWishList);
router.get("/seewhislist/:student_id", getWishListItems);
router.delete("/remove_whistlist_item", deleteWishListItem);
router.delete("/delete_all_whishlist_items", deleteAllWishListItems);
export default router;
