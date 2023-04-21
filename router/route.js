import { Router } from "express";

const router = Router();

// Questions route API
router.get('/questions', (req,res) => {
    res.json("Ques API get request");
})


export default router;