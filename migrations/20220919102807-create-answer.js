"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("answers", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			answer: {
				type: Sequelize.STRING,
			},
			correct: {
				type: Sequelize.BOOLEAN,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			questionId: {
				type: Sequelize.INTEGER,
				references: {
					model: "questions",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("answers");
	},
};
