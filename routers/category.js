const { Router } = require("express");

const Category = require("../models/").category;
const Question = require("../models").question;
const Answer = require("../models").answer;
const HighScore = require("../models").highscore;

const router = new Router();

// Get All categories include questions
router.get("/", async (req, res, next) => {
	try {
		const allCategories = await Category.findAll();

		if (!allCategories) {
			res.status(404).send("no category found");
		}

		res.json(allCategories);
	} catch (err) {
		next(err);
	}
});



//
router.get("/question/:id", async (req, res, next) => {
	// console.log("req.body", req.body);

	try {
		const {id} = req.params;
		console.log(id)
		const findQuestion = await Question.findAll({
			where: { categoryId: id },
			include: [Answer],
		});

		if (!findQuestion) {
			res.status(404).send("no category found");
		}
		res.json(findQuestion);
	} catch (err) {
		next(err);
	}
});

router.get("/table",async (req, res, next)=>{
	try {
		console.log("We are here")
		const highScoreTable = await HighScore.findAll({raw:true})
		res.send(highScoreTable)
	}
	catch (e) {
		console.log(e.message)
		next(e)
	}
});

router.post("/postscore", async (req, res, next)=>{
	try{
		const {name,score} = req.body;
		if(!name||!score){
			return res.status(400).send("missing information")
		}
		console.log("ok")
		const newHighScore = await HighScore.create({name, score})
		res.send(newHighScore)
	}
	catch (e){
		next(e)
	}
} );





module.exports = router;
