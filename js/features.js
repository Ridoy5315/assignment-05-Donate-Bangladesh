document.getElementById("donation-button").addEventListener("click", function(){
     changeSectionById("card-section", "donation-button", "history-button");
})
document.getElementById("history-button").addEventListener("click", function(){
     changeSectionById("history-section", "history-button", "donation-button");
})