const { Router } = require("express");

const Category = require("../models/").category;
const Question = require("../models").question;
const Answer = require("../models").answer;

const router = new Router();

// Get All categories include questions
router.get("/", async (req, res, next) => {
	// console.log("req.body", req.body);
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
router.get("/:id", async (req, res, next) => {
	// console.log("req.body", req.body);
	const { id } = req.params;
	try {
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

module.exports = router;
