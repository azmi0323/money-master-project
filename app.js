function callWithId(idname) {
    return document.getElementById(idname)
}

function errorText(text){
    callWithId('modal-text').innerText = text
        callWithId('first-modal').style.display = 'block';
}

let balances = 0;
let incomeInput = 0;
callWithId('calculate-btn').addEventListener('click', function () {
    // get calculate button 
     incomeInput = parseInt(callWithId('income-input').value);
    const foodInput = parseInt(callWithId('food-input').value);
    const rentInput = parseInt(callWithId('rent-input').value);
    const clothesInput = parseInt(callWithId('clothes-input').value);
    const totalExpences = callWithId('total-expences');
    const balanceInfo = callWithId('balance-info');

    if (incomeInput < 0 || foodInput < 0 || rentInput < 0 || clothesInput < 0) {
        errorText("Please Enter Positive Numbers")
    }
    else if (isNaN(incomeInput) == true || isNaN(foodInput) == true || isNaN(rentInput) == true || isNaN(clothesInput) == true) {
        errorText("Plese Fillup with all valid number")
    }

    const allExpence = foodInput + rentInput + clothesInput;
    totalExpences.innerText = allExpence;
    balances = incomeInput - allExpence
    balanceInfo.innerText = balances;

})

// savings calculation 
callWithId('save-btn').addEventListener('click', function () {
    const saveInfo = parseInt(callWithId('save-info').value);
    const savingAmmount = callWithId('saving-ammount');
    const remainBalance = callWithId('remain-balance');
    let totalSavings = (incomeInput * saveInfo) / 100;
    
    if(saveInfo<0 || isNaN(saveInfo)){
        errorText( "Please Enter Positive Savings or valid number")
    }else if(balances<totalSavings){
        errorText( "you have not enough money to save")
    }else{
        savingAmmount.innerText = totalSavings
        remainBalance.innerText = balances - totalSavings
    }
})
//close first modal
callWithId('first-modal').addEventListener('click', function () {
    callWithId('first-modal').style.display = 'none'
})