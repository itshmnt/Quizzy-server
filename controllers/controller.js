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
    try{
        const r = await Results.find();
        res.json(r);
    }catch(error){
        res.json({ error })
    }
}

// post all result
export async function storeResult(req, res){
    try{
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data not provided...!');

        Results.create({ username, result, attempts, points, achived })
                .then(function(err, data){
                    res.json({ msg : "Result data inserted successfully...!"});
                })
                .catch(function (err) {
                    console.log(err);
                });
    }catch(error){
        res.json({ error })
    }
}

// delete all result
export async function dropResult(req, res){
    try{
        await Results.deleteMany();
        res.json({ msg : "All result data deleted...!"});
    }catch(error){
        res.json({ error })
    }
}