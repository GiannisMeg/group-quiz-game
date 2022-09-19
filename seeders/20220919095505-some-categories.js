"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"categories",
			[
				{
					name: "sport",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "food",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "places",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "science",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("categories", null, {});
	},
};
