function callWithId(idname){
    return document.getElementById(idname)
}
function inputValue(inputId){
    const incomeInput = callWithId(inputId).value;
}
callWithId('calculate-btn').addEventListener('click',function(){
// get calculate button 
    const incomeInput = callWithId('income-input').value;
    const foodInput = callWithId('food-input').value;
    const rentInput = callWithId('rent-input').value;
    const clothesInput =callWithId('clothes-input').value;
    const totalExpences = callWithId('total-expences');
    const balanceInfo = callWithId('balance-info');

    if(incomeInput<0 || foodInput<0 || rentInput<0 || clothesInput<0){
        callWithId('modal-text').innerText = "Please Enter Positive Numbers"
        callWithId('first-modal').style.display = 'block';
    }
    else if(isNaN(incomeInput) == true|| isNaN(foodInput) == true || isNaN(rentInput) == true || isNaN(clothesInput) ==true){
        callWithId('modal-text').innerText = "Plese Fillup all with number"
        callWithId('first-modal').style.display = 'block';
    }
    // else if(incomeInput ||foodInput||rentInput||clothesInput){
    //     callWithId('modal-text').innerText = "Plese Fillup all inputs"
    //     callWithId('first-modal').style.display = 'block';
    // }
    const allExpence = (parseInt(foodInput)+parseInt(rentInput)+parseInt(clothesInput));
    totalExpences.innerText = allExpence;
    balanceInfo.innerText = parseInt(incomeInput) - allExpence
    
})

// savings calculation 
callWithId('save-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input').value;
    const saveInfo =callWithId('save-info').value;
    const savingAmmount = callWithId('saving-ammount');
    const remainBalance = callWithId('remain-balance');
    const balanceInfo = callWithId('balance-info');
    const finalSavingAmmount = (parseInt(incomeInput) * parseInt(saveInfo))/100
    savingAmmount.innerText = finalSavingAmmount;
    remainBalance.innerText = parseFloat(balanceInfo.innerText)-parseInt(finalSavingAmmount);

})
callWithId('first-modal').addEventListener('click', function () {
    callWithId('first-modal').style.display = 'none'
})