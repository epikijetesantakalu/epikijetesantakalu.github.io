// Function to toggle the lang attribute between 'ja' and 'phn'
function toggleLanguage() {
    // Get all span elements with class 'phun'
    const spans = document.querySelectorAll('span.phun');

    // Loop through each span and toggle the lang attribute
    spans.forEach(span => {
        if (span.getAttribute('lang') === 'ja') {
            span.setAttribute('lang', 'phn'); // Change lang to 'phn'
        } else {
            span.setAttribute('lang', 'ja'); // Change lang back to 'ja'
        }
    });

    var audio = document.getElementById('audio');
    audio.play();
}

// Add event listener to the button to call the toggleLanguage function on click
document.getElementById('toggleBtn').addEventListener('click', toggleLanguage);