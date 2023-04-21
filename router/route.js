import { Router } from "express";
import * as controller from '../controllers/controller.js';

const router = Router();

// Questions route API

// router.get('/questions', controller.getQuestion);
// router.post('/questions', controller.insertQuestions);
router.route('/questions')          //router chaining
        .get(controller.getQuestion)
        .post(controller.insertQuestions)
        .delete(controller.deleteQuestions);

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult);
export default router;