document.getElementById('check').addEventListener('click', function() {
    const input = document.getElementById('palindrome').value.trim();
    const resultDiv = document.getElementById('Result');

    if (input === '') {
        resultDiv.textContent = 'Please enter a word or number.';
        resultDiv.classList.add('show');
        return;
    }

    const normalizedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = normalizedInput.split('').reverse().join('');

    if (normalizedInput === reversedInput) {
        resultDiv.textContent = `'${input}' is a Palindrome! ✅`;
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = `'${input}' is NOT a Palindrome! ❌`;
        resultDiv.style.color = 'red';
    }

    resultDiv.classList.add('show');
});