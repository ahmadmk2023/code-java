// Toggle search bar visibility
function toggleSearchBar() {
    let searchbar = document.getElementById('searchbar');
    let closeIcon = document.getElementById('close-icon');
    let isVisible = searchbar.classList.contains('show');

    if (isVisible) {
        searchbar.classList.remove('show');
        closeIcon.classList.remove('show');
    } else {
        searchbar.classList.add('show');
        closeIcon.classList.add('show');
        searchbar.focus();  // Set focus on the search bar when it is displayed
    }
}

// Filter buttons based on search input
function search_animal() {
    let input = document.getElementById('searchbar').value.trim().toLowerCase();
    let buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        let buttonText = button.textContent.toLowerCase();
        if (buttonText.includes(input)) {
            button.classList.remove('hidden');
        } else {
            button.classList.add('hidden');
        }
    });
}

// Add event listener to handle search icon click
document.getElementById('search-icon').addEventListener('click', toggleSearchBar);

// Optional: Add event listener for a specific keypress
document.addEventListener('keydown', function(event) {
    if (event.key === '8' && event.key === '58') {
        searchAnimals();
    }
});

function searchAnimals() {
    // Implement additional search functionality if needed
    console.log('Searching for animals...');
}

// Add event listener to close icon click
document.getElementById('close-icon').addEventListener('click', function() {
    document.getElementById('searchbar').classList.remove('show');
    document.getElementById('close-icon').classList.remove('show');
});
