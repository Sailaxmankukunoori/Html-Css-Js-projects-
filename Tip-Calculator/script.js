// function calculateTip() {
//     const billAmountInput = document.getElementById("billAmount");
//     const serviceRatingSelect = document.getElementById("service-rating");
//     const splitCountInput = document.getElementById("spilt-amount");
//     const mealTypeSelect = document.getElementById("meal-type");

//     const tipAmountOutput = document.getElementById("tipAmount");
//     const totalAmountOutput = document.getElementById("totalAmount");
//     const amountPerPersonOutput = document.getElementById("amountPerPerson");

//     const billAmount = parseFloat(billAmountInput.value);
//     const serviceRating = parseInt(serviceRatingSelect.value); // Convert to number
//     const splitCount = parseFloat(splitCountInput.value);
//     const mealType = mealTypeSelect.value;

//     if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount) || splitCount <= 0) {
//         tipAmountOutput.textContent = "Please enter valid numbers.";
//         totalAmountOutput.textContent = "";
//         amountPerPersonOutput.textContent = ""; // Fixed
//         return;
//     }

//     let tip = 0;
//     switch (serviceRating) {
//         case 1:
//             tip = billAmount * 0.05; // Fixed: 0.5 → 0.05 (assuming 5% for poor service)
//             break;
//         case 2:
//             tip = billAmount * 0.10;
//             break;
//         case 3:
//             tip = billAmount * 0.15;
//             break;
//         case 4:
//             tip = billAmount * 0.20;
//             break;
//         default:
//             tip = billAmount * 0.10; // Default 10% tip if no rating selected
//     }

//     if (mealType === "dinner") {
//         tip += 5; // Add $5 extra tip for dinner
//     }

//     let totalAmount = billAmount + tip;
//     let amountPerPerson = totalAmount / splitCount;

//     tipAmountOutput.textContent = `Tip: $${tip.toFixed(2)}`;
//     totalAmountOutput.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
//     amountPerPersonOutput.textContent = `Amount Per Person: $${amountPerPerson.toFixed(2)}`;
// }

// document.getElementById("calculateBtn").addEventListener('click', calculateTip);


function calculateTip() {
    const billAmountInput = document.getElementById("billAmount");
    const serviceRatingSelect = document.getElementById("service-rating");
    const splitCountInput = document.getElementById("split-amount"); // Fixed typo
    const mealTypeSelect = document.getElementById("meal-type");

    const tipAmountOutput = document.getElementById("tipAmount");
    const totalAmountOutput = document.getElementById("totalAmount");
    const amountPerPersonOutput = document.getElementById("amountPerPerson");

    const billAmount = parseFloat(billAmountInput.value);
    const serviceRating = parseInt(serviceRatingSelect.value);
    const splitCount = parseFloat(splitCountInput.value);
    const mealType = mealTypeSelect.value;

    // Input Validation
    if (isNaN(billAmount) || billAmount <= 0) {
        tipAmountOutput.textContent = "Please enter a valid bill amount.";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
        return;
    }

    if (isNaN(splitCount) || splitCount <= 0) {
        tipAmountOutput.textContent = "Please enter a valid number of people.";
        totalAmountOutput.textContent = "";
        amountPerPersonOutput.textContent = "";
        return;
    }

    let tip = 0;
    switch (serviceRating) {
        case 1:
            tip = billAmount * 0.05; // 5% for poor service
            break;
        case 2:
            tip = billAmount * 0.10; // 10% for average service
            break;
        case 3:
            tip = billAmount * 0.15; // 15% for good service
            break;
        case 4:
            tip = billAmount * 0.20; // 20% for excellent service
            break;
        default:
            tip = billAmount * 0.10; // Default 10% tip
    }

    if (mealType === "dinner") {
        tip += 5; // Add $5 extra tip for dinner
    }

    const totalAmount = billAmount + tip;
    const amountPerPerson = totalAmount / splitCount;

    // Display Results
    tipAmountOutput.textContent = `Tip: $${tip.toFixed(2)}`;
    totalAmountOutput.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    amountPerPersonOutput.textContent = `Amount Per Person: $${amountPerPerson.toFixed(2)}`;
}

document.getElementById("calculateBtn").addEventListener('click', calculateTip);
