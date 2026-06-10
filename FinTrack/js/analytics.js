const totalIncomeBtn=document.querySelector('.ttl-income-btn');
const totalExpenseBtn=document.querySelector('.ttl-expense-btn');
const balanceBtn=document.querySelector('.balance-btn');
const showBtn=document.querySelector('.display-analytics')
function calculateTotalIncome(){
    let totalIncome=0;
    transactions.keys().forEach(segment => {
        let elem=JSON.parse(transactions.get(segment));
        if (elem['type']=='Income'){
            totalIncome+=Number(elem['price']);
        }
    });
    showBtn.innerHTML=`The Total Income is ${totalIncome}`;
}
function calculateBalance(){
    let totalIncome=0;
    let totalExpense=0
    transactions.keys().forEach(segment => {
        let elem=JSON.parse(transactions.get(segment));
        if (elem['type']=='Income'){
            totalIncome+=Number(elem['price']);
        }
        else totalExpense+=Number(elem['price']);
    });
    showBtn.innerHTML=`The Balance is ${totalIncome-totalExpense}`;
}
function calculateTotalExpense(){
    let totalExpense=0;
    transactions.keys().forEach(segment => {
        let elem=JSON.parse(transactions.get(segment));
        if (elem['type']=='Expense'){
            totalExpense+=Number(elem['price']);
        }
    });
    showBtn.innerHTML=`The Total Expense is ${totalExpense}`;
}
totalExpenseBtn.addEventListener('click',()=>{
    calculateTotalExpense();
})

totalIncomeBtn.addEventListener('click',()=>{
    calculateTotalIncome();
})

balanceBtn.addEventListener('click',()=>{
    calculateBalance();
})