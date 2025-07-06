import express from "express";
import { 
    getModulesByCourse,
    createModule,
    getModule,
    updateModule,
    deleteModule ,
    getAllModules
} from '../controllers/modules.controller';
const router=express.Router()
router.route("/")
  .get(getAllModules)     
  .post(createModule);    

router.get("/course/:courseid", getModulesByCourse);

router.route("/:moduleid")
  .get(getModule)
  .put(updateModule)
  .delete(deleteModule);

// router.use('/:moduleid/videos',videoRoutes);

export default router