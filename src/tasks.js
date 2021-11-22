//Задача про Васю и билеты
function tickets(person) {
	// наша касса
	const cashbook = {
		25 : 0,
		50 : 0,
		100 : 0
	};

	for (let i =0; i <= person.length; i++){
		let bill = person[i];

		if(bill===25){
			cashbook[bill]++
		};
		if(bill===50) {
			if (cashbook[25] > 0) {
				cashbook[25]--;
				cashbook[bill]++;
			} else return 'no';
		};


		if(bill===100) {
			if (cashbook[50] > 0 && cashbook[25] > 0) {
				cashbook[50]--;
				cashbook[25]--;
				cashbook[bill]++;
			} else if (cashbook[25] > 2) {
				cashbook[bill]++;
				cashbook[25] -= 3;
			} else return 'no';
		};
	};
	return 'yes';
};
tickets([25, 50, 100]); // No
tickets([25, 25, 50, 100]); // Yes
tickets([25, 50, 100]); // No
//====================================================================

const listOfPosts2 = [
	{
		id: 1,
		post: 'some post1',
		title: 'title 1',
		author: 'Ivanov',
		comments: [
			{
				id: 1.1,
				comment: 'some comment1',
				title: 'title 1',
				author: 'Rimus'
			},
			{
				id: 1.2,
				comment: 'some comment2',
				title: 'title 2',
				author: 'Uncle'
			}
		]
	},
	{
		id: 2,
		post: 'some post2',
		title: 'title 2',
		author: 'Ivanov',
		comments: [
			{
				id: 1.1,
				comment: 'some comment1',
				title: 'title 1',
				author: 'Rimus'
			},
			{
				id: 1.2,
				comment: 'some comment2',
				title: 'title 2',
				author: 'Uncle'
			},
			{
				id: 1.3,
				comment: 'some comment3',
				title: 'title 3',
				author: 'Rimus'
			}
		]
	},
	{
		id: 3,
		post: 'some post3',
		title: 'title 3',
		author: 'Rimus'
	},
	{
		id: 4,
		post: 'some post4',
		title: 'title 4',
		author: 'Uncle'
	}
];

const getQuantityPostsByAuthor = (listOfPosts, author) => {
	const requiredItem = 'comments';
	let posts = 0;
	let comments = 0;
	for (let item of listOfPosts) {
		if (item.author === author) {
			posts++
		};
		if (Object.keys(item).includes(requiredItem)) {
			item.comments.forEach(elem => {
				if (elem.author === author) {
					comments++
				};
			});
		};
	};
	console.log(posts, comments);
}
getQuantityPostsByAuthor(listOfPosts2, 'Rimus');