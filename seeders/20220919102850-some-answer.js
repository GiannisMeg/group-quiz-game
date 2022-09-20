"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"answers",
			[
				{
					answer: "Noodle soup",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 11,
				},
				{
					answer: "Pad Thai",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 11,
				},
				{
					answer: "Som tum",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 11,
				},
				{
					answer: "Green curry",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 11,
				},
				{
					answer: "Bubble tea",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 12,
				},
				{
					answer: "Matcha ",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 12,
				},
				{
					answer: "The iced tea",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 12,
				},
				{
					answer: "Vietnamese coffee ",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 12,
				},
				{
					answer: "Pocky",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 13,
				},
				{
					answer: "Momos",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 13,
				},
				{
					answer: "Botan Rice Candy",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 13,
				},
				{
					answer: "Choco Pie",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 13,
				},
				{
					answer: "Pocky",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 14,
				},
				{
					answer: "Yakult",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 14,
				},
				{
					answer: "White Rabbit Candy",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 14,
				},
				{
					answer: "Choco Pie",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 14,
				},
				{
					answer: "Pad Thai",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 15,
				},
				{
					answer: "Som tum",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 15,
				},
				{
					answer: "Green curry",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 15,
				},
				{
					answer: "Noodle soup",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 15,
				},
				{
					answer: "Naan",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 16,
				},
				{
					answer: "Biscotti",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 16,
				},
				{
					answer: "Milk bread",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 16,
				},
				{
					answer: "Chapati",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 16,
				},
				{
					answer: "Hot",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 17,
				},
				{
					answer: "Lukewarm",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 17,
				},
				{
					answer: "Cold",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 17,
				},
				{
					answer: "Burning hot",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 17,
				},
				{
					answer: "Rice",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 18,
				},
				{
					answer: "Barley",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 18,
				},
				{
					answer: "Rye",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 18,
				},
				{
					answer: "Wheat",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 18,
				},
				{
					answer: "Buns",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 19,
				},
				{
					answer: "Bread",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 19,
				},
				{
					answer: "Millet",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 19,
				},
				{
					answer: "Wheat",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 19,
				},
				{
					answer: "Touch your heart",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 20,
				},
				{
					answer: "Dish of satisfaction",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 20,
				},
				{
					answer: "Bite-sized food",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 20,
				},
				{
					answer: "Lovers bites",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 20,
				},
				{
					answer: "Beijing",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 21,
				},
				{
					answer: "Tokyo",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 21,
				},
				{
					answer: "Kabul",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 21,
				},
				{
					answer: "Baku",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 21,
				},
				{
					answer: "Beijing",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 22,
				},
				{
					answer: "Manila",
					questionId: 22,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Dili",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 22,
				},
				{
					answer: "Baku",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 22,
				},
				{
					answer: "Bishkek",
					questionId: 23,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tbilisi",
					questionId: 23,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 23,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 23,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bishkek",
					questionId: 24,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "tokyo",
					questionId: 24,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 24,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 24,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Pyongyang",
					questionId: 25,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 25,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 25,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Dili",
					questionId: 25,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tokyo",
					questionId: 26,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Nepal",
					questionId: 26,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Thimphu",
					questionId: 26,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 26,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bishkek",
					questionId: 27,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tbilisi",
					questionId: 27,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 27,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 27,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Jerusalem",
					questionId: 28,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 28,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 28,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Ankara",
					questionId: 28,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Pyongyang",
					questionId: 29,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 29,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 29,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bangkok",
					questionId: 29,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Kathmandu",
					questionId: 30,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Nicosia",
					questionId: 30,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Baku",
					questionId: 30,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Colombo",
					questionId: 30,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1951",
					questionId: 1,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1973",
					questionId: 1,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1966",
					questionId: 1,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "1946",
					questionId: 1,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "New Delhi, India",
					questionId: 2,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bangkok, Thailand",
					questionId: 2,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul, Korea",
					questionId: 2,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila, Philippines",
					questionId: 2,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Every other year",
					questionId: 3,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Every four years",
					questionId: 3,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: " Every five years",
					questionId: 3,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Every six years",
					questionId: 3,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Asian Sports Federation",
					questionId: 4,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: " Olympic Council of Asia",
					questionId: 4,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Wide World of Sports",
					questionId: 4,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "United Nations",
					questionId: 4,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 5,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "China",
					questionId: 5,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Indonesia",
					questionId: 5,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "India",
					questionId: 5,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Boxing",
					questionId: 6,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Basketball",
					questionId: 6,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Athletics",
					questionId: 6,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Swimming",
					questionId: 6,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: " Australia",
					questionId: 7,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "USA",
					questionId: 7,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: " Russia",
					questionId: 7,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Egypt",
					questionId: 7,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Israel",
					questionId: 8,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Taiwan",
					questionId: 8,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "North Korea",
					questionId: 8,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Myanmar",
					questionId: 8,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Sapporo",
					questionId: 9,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Sendai",
					questionId: 9,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Aomori",
					questionId: 9,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Hakodate",
					questionId: 9,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "table tennis",
					questionId: 10,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "soccer/football",
					questionId: 10,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "tennis",
					questionId: 10,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "hopscotch",
					questionId: 10,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Iran",
					questionId: 31,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					answer: "Iraq",
					questionId: 31,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					answer: "India",
					questionId: 31,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Indonesia",
					questionId: 31,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "China",
					questionId: 32,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Canada",
					questionId: 32,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Columbia",
					questionId: 32,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Cambodia",
					questionId: 32,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Iraq",
					questionId: 33,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Afghanistan",
					questionId: 33,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Israel",
					questionId: 33,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Uzbekistan",
					questionId: 33,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "China",
					questionId: 34,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Peru",
					questionId: 34,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Thailand",
					questionId: 34,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Vietnam",
					questionId: 34,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "India",
					questionId: 35,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Sri Lanka",
					questionId: 35,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bhutan",
					questionId: 35,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tibet",
					questionId: 35,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 36,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Philippians",
					questionId: 36,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "North Korea",
					questionId: 36,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Saudi Arabia",
					questionId: 36,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 37,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "USA",
					questionId: 37,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Malasiaya",
					questionId: 37,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					answer: "Jamaica",
					questionId: 37,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 38,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "India",
					questionId: 38,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Australia",
					questionId: 38,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Hongkong",
					questionId: 38,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "South Korea",
					questionId: 39,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 39,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 39,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 39,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "South Korea",
					questionId: 40,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 40,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Panama",
					questionId: 40,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Mexico",
					questionId: 40,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("answers", null, {});
	},
};
