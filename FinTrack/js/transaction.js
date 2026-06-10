const transactions = new Map();
const displayTrans = document.querySelector(".display-transaction");
const displayBtn= document.querySelector(".display-btn");
function addTransaction(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const category = document.getElementById("category").value;
  const type = document.getElementById("type").value;
  const date = document.getElementById("date").value;
  if (validateTransaction(title, price, category, type)) {
    let obj = {
      title: title,
      price: price,
      category: category,
      type: type,
      date: date,
    };
    transactions.set(`id${Date.now()}`, JSON.stringify(obj));
    alert("Added Successfully");
  } else {
    alert("Please Enter Valid Data");
  }
  document.getElementById("add-transaction").reset();
  return;
}
function validateTransaction(title, price, category, type) {
  if (title.trim().length == 0 || price <= 0 || category.trim().length == 0) {
    return false;
  }
  return true;
}

function displayTransaction() {
  displayTrans.innerHTML = "";
  const node = document.createElement("ol");
  transactions.keys().forEach((elem) => {
    const data = document.createElement("ul");
    data.id = elem;
    let segment = JSON.parse(transactions.get(elem));
    for (let key in segment) {
      const li = document.createElement("li");
      li.innerHTML = `${key}: ${segment[key]}`;
      li.classList.add(`${key}`);
      data.appendChild(li);
    }
    const delBtn = document.createElement("button");
    delBtn.classList.add("btn");
    delBtn.addEventListener("click",()=> deleteTransaction(elem));
    delBtn.innerHTML = "Delete Transaction";
    const edtBtn = document.createElement("button");
    edtBtn.classList.add("btn");
    edtBtn.addEventListener("click",()=> editTransaction(elem));
    edtBtn.innerHTML = "Edit Transaction";
    data.appendChild(edtBtn);
    data.appendChild(delBtn);
    node.appendChild(data);
  });
  displayTrans.appendChild(node);
}

function editTransaction(id){
    let segment = JSON.parse(transactions.get(id));
    alert("Edit only where changes needed or can skip")
    const title = prompt("Enter Title",segment['title']);
    const price = prompt("Enter Price",segment['price']);
    const category = prompt("Enter Category",segment['category']);
    const type = prompt("Enter Type",segment['type']);
    const date= prompt("YYYY-MM-DD",segment['date']);
    let obj = {
      title: title,
      price: price,
      category: category,
      type: type,
      date: date,
    };
    transactions.set(id,JSON.stringify(obj));
    alert("Changes made successfully")
    displayTransaction();
}

function deleteTransaction(id) {
  event.preventDefault();
  transactions.delete(id);
  alert("Transaction Removed Successfully");
  displayTransaction();
}

displayBtn.addEventListener('click',()=>{
    displayTransaction();
})