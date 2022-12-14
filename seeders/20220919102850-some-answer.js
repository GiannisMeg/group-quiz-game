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
					questionId: 21,
				},
				{
					answer: "Pad Thai",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 21,
				},
				{
					answer: "Som tum",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 21,
				},
				{
					answer: "Green curry",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 21,
				},
				{
					answer: "Bubble tea",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 22,
				},
				{
					answer: "Matcha ",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 22,
				},
				{
					answer: "The iced tea",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 22,
				},
				{
					answer: "Vietnamese coffee ",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 22,
				},
				{
					answer: "Pocky",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 23,
				},
				{
					answer: "Momos",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 23,
				},
				{
					answer: "Botan Rice Candy",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 23,
				},
				{
					answer: "Choco Pie",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 23,
				},
				{
					answer: "Pocky",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 24,
				},
				{
					answer: "Yakult",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 24,
				},
				{
					answer: "White Rabbit Candy",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 24,
				},
				{
					answer: "Choco Pie",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 24,
				},
				{
					answer: "Pad Thai",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 25,
				},
				{
					answer: "Som tum",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 25,
				},
				{
					answer: "Green curry",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 25,
				},
				{
					answer: "Noodle soup",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 25,
				},
				{
					answer: "Naan",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 26,
				},
				{
					answer: "Biscotti",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 26,
				},
				{
					answer: "Milk bread",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 26,
				},
				{
					answer: "Chapati",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 26,
				},
				{
					answer: "Hot",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 27,
				},
				{
					answer: "Lukewarm",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 27,
				},
				{
					answer: "Cold",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 27,
				},
				{
					answer: "Burning hot",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 27,
				},
				{
					answer: "Rice",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 28,
				},
				{
					answer: "Barley",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 28,
				},
				{
					answer: "Rye",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 28,
				},
				{
					answer: "Wheat",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 28,
				},
				{
					answer: "Buns",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 29,
				},
				{
					answer: "Bread",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 29,
				},
				{
					answer: "Millet",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 29,
				},
				{
					answer: "Wheat",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 29,
				},
				{
					answer: "Touch your heart",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 30,
				},
				{
					answer: "Dish of satisfaction",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 30,
				},
				{
					answer: "Bite-sized food",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 30,
				},
				{
					answer: "Lovers bites",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 30,
				},
				{
					answer: "Beijing",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 31,
				},
				{
					answer: "Tokyo",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 31,
				},
				{
					answer: "Kabul",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 31,
				},
				{
					answer: "Baku",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 31,
				},
				{
					answer: "Beijing",
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 32,
				},
				{
					answer: "Manila",
					questionId: 32,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Dili",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 32,
				},
				{
					answer: "Baku",
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
					questionId: 32,
				},
				{
					answer: "Bishkek",
					questionId: 33,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tbilisi",
					questionId: 33,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 33,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 33,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bishkek",
					questionId: 34,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "tokyo",
					questionId: 34,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 34,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 34,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Pyongyang",
					questionId: 35,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 35,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 35,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Dili",
					questionId: 35,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tokyo",
					questionId: 36,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Nepal",
					questionId: 36,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Thimphu",
					questionId: 36,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 36,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bishkek",
					questionId: 37,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tbilisi",
					questionId: 37,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Astana",
					questionId: 37,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 37,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Jerusalem",
					questionId: 38,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 38,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 38,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Ankara",
					questionId: 38,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Pyongyang",
					questionId: 39,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Manila",
					questionId: 39,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Seoul",
					questionId: 39,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bangkok",
					questionId: 39,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Kathmandu",
					questionId: 40,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Nicosia",
					questionId: 40,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Baku",
					questionId: 40,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Colombo",
					questionId: 40,
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
					questionId: 11,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					answer: "Iraq",
					questionId: 11,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					answer: "India",
					questionId: 11,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Indonesia",
					questionId: 11,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "China",
					questionId: 12,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Canada",
					questionId: 12,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Columbia",
					questionId: 12,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Cambodia",
					questionId: 12,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Iraq",
					questionId: 13,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Afghanistan",
					questionId: 13,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Israel",
					questionId: 13,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Uzbekistan",
					questionId: 13,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "China",
					questionId: 14,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Peru",
					questionId: 14,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Thailand",
					questionId: 14,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Vietnam",
					questionId: 14,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "India",
					questionId: 15,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Sri Lanka",
					questionId: 15,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Bhutan",
					questionId: 15,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Tibet",
					questionId: 15,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 16,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Philippians",
					questionId: 16,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "North Korea",
					questionId: 16,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Saudi Arabia",
					questionId: 16,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 17,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "USA",
					questionId: 17,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Malasiaya",
					questionId: 17,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					answer: "Jamaica",
					questionId: 17,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 18,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "India",
					questionId: 18,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Australia",
					questionId: 18,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Hongkong",
					questionId: 18,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "South Korea",
					questionId: 19,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 19,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 19,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 19,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "South Korea",
					questionId: 20,
					correct: true,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Japan",
					questionId: 20,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Panama",
					questionId: 20,
					correct: false,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					answer: "Mexico",
					questionId: 20,
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
