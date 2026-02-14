document.addEventListener('DOMContentLoaded', function() {
    // Generate a random query string
    const randomQueryString = `?v=${Math.random().toString(36).substring(2, 11)}`;

    // Get the link element
    const cssLink = document.getElementById('dynamic-css');

    // Set the href attribute with the random query string (correct filename and guard)
    if (cssLink) {
        cssLink.href = 'style.css' + randomQueryString;
    }
});