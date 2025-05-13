document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const confirmation = document.getElementById('confirmation');
    const timer = document.getElementById('timer');

    let startTime = 0;

    form.addEventListener('focusin', () => {
        if (startTime === 0) {
            startTime = Date.now();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000;  // in seconds
        timer.textContent = `Time taken to fill form: ${timeTaken.toFixed(2)} seconds`;

        confirmation.textContent = 'Form submitted successfully!';
        form.reset();
        startTime = 0; // Reset for next submission
    });
});

