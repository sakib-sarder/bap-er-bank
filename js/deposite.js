// step -1 : add event listener to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step -2: get the deposit ammount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);
    // step -3: get the current deposit total

    const depositTotalAmmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmmount;
    // set the deposite total
    depositTotalAmmount.innerText = currentDepositTotal;

    // step-5: get blance current total
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    
    // step-6: calculate current total blance
    const currentBlanceTotal = previousBlanceTotal + newDepositAmmount;
    //SET THE BLANCE TOTAL
    blanceTotalElement.innerText = currentBlanceTotal;
    //step-7: clear the deposit field
    depositField.value ='';
})