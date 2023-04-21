// get all questions
export async function getQuestion(req,res){
    res.json("Ques API get request");
}

// insert all questions
export async function insertQuestions(req, res){
    res.json("questions api post req")
}

// delete all questions
export async function deleteQuestions(req, res){
    res.json("questions api delete req")
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