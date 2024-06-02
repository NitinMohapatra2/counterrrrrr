document.addEventListener('DOMContentLoaded', () => {
    let counterElement = document.getElementById('counter');
    let targetNumber = 50; // Set this to your desired number of outlets
    let currentNumber = 0;
    let speed = 50; // Adjust the speed of the counter

    function updateCounter() {
        if (currentNumber < targetNumber) {
            currentNumber++;
            counterElement.innerText = currentNumber;
            setTimeout(updateCounter, speed);
        } else {
            counterElement.innerText = targetNumber;
        }
    }

    updateCounter();
});
