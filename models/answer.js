"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class answer extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			answer.belongsTo(models.question);
		}
	}
	answer.init(
		{
			answer: DataTypes.STRING,
			correct: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "answer",
		}
	);
	return answer;
};
