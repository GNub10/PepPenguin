document.addEventListener("DOMContentLoaded", function() {
    // Fetch penguin facts from the text file
    fetch('facts.txt')
        .then(response => response.text())
        .then(text => {
            const facts = text.split('\n');
            const randomFact = facts[Math.floor(Math.random() * facts.length)];
            document.getElementById('penguin-fact').textContent = randomFact;
        })
        .catch(error => {
            console.error('Error fetching penguin facts:', error);
            document.getElementById('penguin-fact').textContent = 'Failed to load penguin facts.';
        });
});