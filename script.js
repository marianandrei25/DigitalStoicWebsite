// DOM Elements
const commentForm = document.getElementById('commentForm');
const commentsList = document.getElementById('commentsList');

// Event Listener for form submission
commentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get user input
    const userName = document.getElementById('userName').value.trim();
    const userEmail = document.getElementById('userEmail').value.trim();
    const userComment = document.getElementById('userComment').value.trim();

    if (userName && userEmail && userComment) {
        // Create comment item
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `
            <div class="comment-header">${userName} (${userEmail})</div>
            <div class="comment-body">${userComment}</div>
        `;

        // Append to comments list
        commentsList.appendChild(commentItem);

        // Clear the form
        commentForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
