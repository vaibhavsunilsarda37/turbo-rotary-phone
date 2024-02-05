document.addEventListener("DOMContentLoaded", function() {
    const dialer = document.getElementById("dialer");

    // Add buttons to represent rotary dial
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => handleButtonClick(i));
        dialer.appendChild(button);
    }

    function handleButtonClick(number) {
        console.log(`Dialing number: ${number}`);
        // Add your logic for dialing the number here
    }
});