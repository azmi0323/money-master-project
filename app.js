// get calculate button 
document.getElementById('calculate-btn').addEventListener('click',function(){
    
    const incomeInput = document.getElementById('income-input').value;
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothesInput = document.getElementById('clothes-input').value;
    const totalExpences = document.getElementById('total-expences');
    
    const balanceInfo = document.getElementById('balance-info');

    // if(incomeInput<0 || foodInput<0 || rentInput<0 || clothesInput){
    //     console.log('wrong')
    // }
    const allExpence = (parseInt(foodInput)+parseInt(rentInput)+parseInt(clothesInput));
    totalExpences.innerText = allExpence;
    balanceInfo.innerText = parseInt(incomeInput) - allExpence
    
})

// savings calculation 
document.getElementById('save-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input').value;
    
})