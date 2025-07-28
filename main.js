fetch("words_dictionary.json")
    .then(response => response.json())
        .then(data => {
            const words = Object.keys(data); // grab all the words
            const randomWord = words[Math.floor(Math.random() * words.length)];
            document.getElementById("word1").textContent = randomWord;
        })
        .catch(error => {
        console.error('Error loading JSON:', error);
        });
