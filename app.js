document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".lorem-form");
    const amountInput = document.getElementById("amount");
    const loremText = document.querySelector(".lorem-text");

    // Sample lorem ipsum text array
    const loremParagraphs = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the number of paragraphs, with a default of 1 if invalid
        const count = parseInt(amountInput.value) || 1;

        // Limit paragraphs to a max of 5 for this example
        const numParagraphs = Math.min(count, 5);

        // Generate and display the requested number of paragraphs
        const output = loremParagraphs.slice(0, numParagraphs).join("<p></p>");
        loremText.innerHTML = `<p>${output}</p>`;
    });
});
