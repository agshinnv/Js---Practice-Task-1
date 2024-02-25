"use strict";

const nameInput = document.querySelector(".new-order .fullname input");
const countInput = document.querySelector(".new-order .count input");
const priceInput = document.querySelector(".new-order .price input");
const selectInput = document.querySelector(".new-order .dish select");
const submitInput = document.querySelector(".new-order .button button");


const dishes = ["Ləvəngi","Mimoza","Perlova"];

for (const item of dishes) {
    let option =document.createElement("option");
    option.innerHTML = item;
    selectInput.append(option);
}

submitInput.addEventListener("click",function(){
    const name = document.querySelector(".current-order .fullname input");
    const count = document.querySelector(".current-order .count input");
    const price = document.querySelector(".current-order .price input");
    const select = document.querySelector(".current-order .dish input");
    const status = document.querySelector(".current-order .status input");
    const confirm = document.querySelector(".current-order .button .confirm");
    const refusal = document.querySelector(".current-order .button .refusal");
    const currentOrder = document.querySelector(".current-order");
    

    if(isNaN(priceInput.value) || isNaN(countInput.value)){
        alert("Count or Price format is wrong");
        return;
    }

    name.value = nameInput.value;
    count.value = countInput.value;
    price.value = parseInt(priceInput.value) * parseInt(countInput.value);
    const selected = document.querySelector(".new-order .dish select");
    select.value = selected.value;

    
    

    if(confirm.addEventListener("click",function(){
        status.value = "Confirmed"
        status.style.backgroundColor = "green";
    }));

    if(refusal.addEventListener("click",function(){
        status.value = "Refusal"
        status.style.backgroundColor = "red";
    }));

    currentOrder.classList.remove("d-none");


    
    

    

})