import express from 'express';
import { 
    getModulesByCourse,
    createModule,
    getModule,
    updateModule,
    deleteModule 
} from '../controllers/module.controller';
import videoRoutes from './video.routes';
const router = express.Router({mergeParams:true});

router.route('/')
    .get(getModulesByCourse)
    .post(createModule);
router.route('/:moduleid')
    .get(getModule)
    .put(updateModule)
    .delete(deleteModule);
router.use('/:moduleid/videos',videoRoutes);
export default router;