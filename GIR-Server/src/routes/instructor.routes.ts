import express from "express";
import {instructorApplication } from "../controllers/instructor.controller"
const router=express.Router()

router.post("/instructor-apply",instructorApplication );

export default router