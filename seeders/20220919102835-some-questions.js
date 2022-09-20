"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"questions",
			[
				{
					question:
						"The Asian Games, a sports competition for athletes from all across Asia, were first held in what year?",
					categoryId: 1, //1
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"The Asian Games have been hosted by many countries in Asia. Where were the first games held?",
					categoryId: 1, //2
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "How often are the Asian Games held?",
					categoryId: 1, //3
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"The Asian Games are under the authority of which governing body?",
					categoryId: 1, //4
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"One country dominated the Asian Games the first eight times they were held, leading in the medal count. Which country was this?",
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"Of the many sports in the Asian Games, which of the following was not part of the competition at the initial Games?",
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"Following the break-up of the Soviet Union, several former Soviet Republics began to take part in the Asian Games, including Kazakhstan, Kyrgystan, Tajikistan, Turkmenistan, and Uzbekistan. In 1996, which nation outside of Asia was officially denied entry to the games?",
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"The Asian Games have not been without controversy. Which Asian nation has been officially excluded from the Olympic Council of Asia, and therefore unable to participate in Asiad",
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"The first Asian Winter Games were held in 1986 in which Japanese city?",
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question:
						"This immensely popular sport is as ubiquitous as Kimchi in Korea. It involves kicking a ball into a netted goal. Which sport is it?",
					categoryId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					question: "Where was soap invented in BCE 2800?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					question: "Where was ink Invented in BCE 2500?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Which country invented cartography in BCE2300?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Which country invevted Kites in BCE 1000?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Which country invented the Number 0?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Which country invented QR code technology?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Which country made emjoi characters?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Where was Cassette Player invented?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Which country first made Sentry guard robot?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "Where was 3D hologram invented?",
					categoryId: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					question:
						"There's only one food that would stop most people in their tracks. Who can name this classic Asian street food?",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question:
						"Can you name this textured beverage that is popular all over Asia? ",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question:
						"Cookie sticks dipped in a sweet coating? Yes, please! Which Asian fave are we talking about?",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question:
						"What is this Korean chocolate favorite that delivers big flavor? ",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question:
						"There's only one food that would stop most people in their tracks. Who can name this classic Asian street food?",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question:
						"Name the popular form of bread that is cooked in a tandoor and is yeast-leavened. ",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question: "What temperature is Udon usually served at?",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question: "What was the first grain farmed in China?",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question:
						"What did people in Northern China eat instead of rice?",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question: "What does dim sim mean?",
					createdAt: new Date(),
					updatedAt: new Date(),
					categoryId: 2,
				},
				{
					question: "What's the Capital of Japan?", //1
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of China?", //2
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of Korea?", //3
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of Philippines?", //4
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of North-Korea?", //5
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of Bhutan?", //6
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of Georgia?", //7
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of Palestine?", //8
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of Thailand?", //9
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					question: "What's the Capital of Sri Lanka?", //10
					categoryId: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("questions", null, {});
	},
};
