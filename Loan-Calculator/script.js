document.getElementById('calculateBtn').addEventListener('click',calculateLoan);

function calculateLoan(){
    const loanAmount=parseFloat(document.getElementById("loan-amount-input").value);
    const intrestRate=parseFloat(document.getElementById("intrest-rate-input").value);
    const loanTenure=parseFloat(document.getElementById("loan-tenure-input").value);

    if(isNaN(loanAmount) || isNaN(intrestRate) || isNaN(loanTenure)){
        alert("Please Enter valid numbers for all the fields!!")

    }
    
    const monthlyIntrest=intrestRate/100/12;
    const totalPayments=loanTenure;
    const monthlyPayment=(loanAmount * monthlyIntrest)/(1-Math.pow(1+monthlyIntrest,-totalPayments));
    const totalIntrest=(monthlyPayment * totalPayments)- loanAmount;

    displayResult(monthlyPayment,totalIntrest);
}
function displayResult(monthlyPayment,totalIntrest){
    const resultDiv=document.getElementById('result');

    resultDiv.innerHTML=`
    <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)} </p></strong>
    <p><strong>Total Intrest: ${totalIntrest .toFixed(2)} </p></strong>
    `;
}