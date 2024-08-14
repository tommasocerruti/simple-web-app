function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter non null valid numbers');
        return;
    }

    fetch('http://127.0.0.1:5000/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num1: num1, num2: num2 }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            alert(data.error);
        } else {
            document.getElementById('result').innerText = 'Result: ' + data.result;
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
