// Joke API => https://sv443.net/jokeapi/v2/

axios.get("https://v2.jokeapi.dev/joke/Any?safe-mode")
	.then(function(response) {
		console.log(response.data);
	})
	.catch(function(error) {
		console.log(error);
	});
