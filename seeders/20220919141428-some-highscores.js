"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"highscores",
			[
				{
					name: "Nio",
					score: 40,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Trinity",
					score: 30,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Morpheus",
					score: 60,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("highscores", null, {});
	},
};
