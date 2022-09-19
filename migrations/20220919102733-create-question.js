"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("questions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			question: {
				type: Sequelize.TEXT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				references: {
					model: "categories",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "SET NULL",
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("questions");
	},
};
