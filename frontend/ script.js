document.addEventListener('DOMContentLoaded', () => {
    const predictButton = document.getElementById('predictButton');
    const emailInput = document.getElementById('emailInput');
    const resultElement = document.getElementById('result');

    predictButton.addEventListener('click', async () => {
        const emailText = emailInput.value.trim();
        if (emailText) {
            try {
                const response = await fetch('/predict', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailText }),
                });
                const data = await response.json();
                resultElement.textContent = `Prediction: ${data.prediction}`;
            } catch (error) {
                console.error(error);
                resultElement.textContent = 'Error occurred. Please try again.';
            }
        } else {
            resultElement.textContent = 'Please enter an email text.';
        }
    });
});