import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js';

// get all questions
export async function getQuestion(req,res){
    // res.json("Ques API get request");
    try{
        const q = await Questions.find();
        res.json(q);
    }catch(error){
        res.json({ error })
    }
}

// insert all questions
export async function insertQuestions(req, res){
    try{
        Questions.insertMany({questions : questions, answers: answers})
                    .then(function(err, data){
                        res.json({ msg : "Data inserted successfully...!"});
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
    }catch(error){
        res.json({ error })
    }
}

// delete all questions
export async function deleteQuestions(req, res){
    try{
        await Questions.deleteMany();
        res.json({ msg : "All data deleted...!"});
    }catch(error){
        res.json({ error })
    }
}


// get all result
export async function getResult(req, res){
    res.json("result api get request");
}

// post all result
export async function storeResult(req, res){
    res.json("result api post request");
}

// delete all result
export async function dropResult(req, res){
    res.json("result api delete request");
}