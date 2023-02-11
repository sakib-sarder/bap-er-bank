/* 

1.add event handler with the withdraw button
2. get the withdraw ammount from the withdraw input field
2.5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total
4.calculate total withraw ammount
4.5. set total withdraw ammount 
5. get the previous blance total'
6. calculate new blance total
6.5. set the new blance total
7. clear the input field

*/
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withdrawField.value;
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);
    //step-7
    withdrawField.value = '';
    if (isNaN(newWithdrawAmmount)) {
        alert('please provide a valid number');
        return;
    }
    //step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //step-5:
    const blanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);
    if (newWithdrawAmmount > previousBlanceTotal) {
        alert('Baap er bank eto taka nai')
        return;
    }
    //step:4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    //step-6:
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmmount;
    blanceTotalElement.innerText = newBlanceTotal;

    
})