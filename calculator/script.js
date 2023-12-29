document.addEventListener('DOMContentLoaded', function () {
    // Get the calculator display element
    const display = document.querySelector('.display input');

    // Get all the calculator buttons
    const buttons = document.querySelectorAll('.calculator form input');

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(this.value);
        });
    });

    // Function to handle button clicks
    function handleButtonClick(value) {
        if (value === 'AC') {
            // Clear the display
            display.value = '';
        } else if (value === '=') {
            // Evaluate and display the result
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === 'DEL') {
            // Delete the last character from the display
            display.value = display.value.slice(0, -1);
        } else {
            // Append the clicked button value to the display
            display.value += value;
        }
    }
});
