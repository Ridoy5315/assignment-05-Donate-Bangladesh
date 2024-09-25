document.getElementById("blog-button").addEventListener("click", function(){

     document.getElementById("blog-button").classList.add("hidden");
     document.getElementById("home-button").classList.remove("hidden");
     document.getElementById("blog-section").classList.remove("hidden");
     document.getElementById("card-section").classList.add("hidden");
     document.getElementById("button-section").classList.add("hidden");
     document.getElementById("history-section").classList.add("hidden");
     document.getElementById("footer-section").classList.add("hidden");
     document.getElementById("header-section").classList.remove("sticky")
})

document.getElementById("home-button").addEventListener("click", function(){

     document.getElementById("home-button").classList.add("hidden");
     document.getElementById("blog-button").classList.remove("hidden");
     document.getElementById("blog-section").classList.add("hidden");
     document.getElementById("card-section").classList.remove("hidden");
     document.getElementById("button-section").classList.remove("hidden");
     document.getElementById("history-section").classList.add("hidden");
     document.getElementById("footer-section").classList.remove("hidden");
     document.getElementById("header-section").classList.add("sticky")
     document.getElementById("donation-button").classList.add("bg-buttonBg", "hover:bg-buttonBgHober");
     document.getElementById("donation-button").classList.remove("border");
     document.getElementById("history-button").classList.remove("bg-buttonBg", "hover:bg-buttonBgHober");
     document.getElementById("history-button").classList.add("border", "hover:bg-bg", "border-[rgba(17,17,17,0.3)]");
 
})