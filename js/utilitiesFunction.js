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

function changeSectionById (Id1, Id2, Id3){
     document.getElementById("card-section").classList.add("hidden");

     document.getElementById("history-section").classList.add("hidden");
     

     document.getElementById(Id1).classList.remove("hidden");
     document.getElementById(Id2).classList.add("bg-buttonBg", "hover:bg-buttonBgHober");
     document.getElementById(Id2).classList.remove("border");
     document.getElementById(Id3).classList.remove("bg-buttonBg", "hover:bg-buttonBgHober");
     document.getElementById(Id3).classList.add("border", "hover:bg-bg", "border-[rgba(17,17,17,0.3)]");

}
