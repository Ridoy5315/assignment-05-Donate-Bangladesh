function getValueById (Id){

     const getValue = document.getElementById(Id).value;
     const getValueNumber = parseFloat(getValue);

     return getValueNumber;
}


function getInnerTextById (Id){

     const getInnerText = document.getElementById(Id).innerText;
     const getInnerTextNumber = parseFloat(getInnerText);

     return getInnerTextNumber;
}

function addDonate (num1, num2) {

     const result = num1 + num2;

     return result;

}
function getMoneyFromAmount (num1, num2) {

     const result = num1 - num2;

     return result;

}


