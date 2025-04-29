// Change text content dynamically
const changeTextButton = document.getElementById('change-text-btn');
const dynamicText = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = 'God is the only way!';
    dynamicText.classList.add('dynamic-style'); // Applies CSS styles dynamically
});

// Add or remove an element dynamically
const toggleElementButton = document.getElementById('toggle-element-btn');
const extraElement = document.getElementById('extra-element');

toggleElementButton.addEventListener('click', () => {
    if (extraElement.style.display === 'none') {
        extraElement.style.display = 'block';
    } else {
        extraElement.style.display = 'none';
    }
});

