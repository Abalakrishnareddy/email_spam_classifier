// frontend/script.js

document.getElementById('spam-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission
    const emailText = document.querySelector('textarea[name="email"]').value;
    const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailText }),
    });
    const result = await response.json();
    document.getElementById('result').innerHTML = `The email is ${result.prediction}.`;
});
