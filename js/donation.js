// card one
document.getElementById("noakhali-donate-button").addEventListener("click", function () {
    const noakhaliInput = getValueById("noakhali-donate-input");

    const noakhaliAmount = getInnerTextById("noakhali-amount");

    const myAmount = getInnerTextById("my-amount");

    if (noakhaliInput > 0 && noakhaliInput <= myAmount) {
      const noakhaliNewAmount = addDonate(noakhaliInput, noakhaliAmount);

      const myNewAmount = getMoneyFromAmount(myAmount, noakhaliInput);

      document.getElementById("noakhali-amount").innerText = noakhaliNewAmount;

      document.getElementById("my-amount").innerText = myNewAmount;
    } else {
      alert("You typed the wrong number. Please type the correct number.");
    }
  });

  // card two
document.getElementById("feni-donate-button").addEventListener("click", function () {
    const feniInput = getValueById("feni-donate-input");

    const feniAmount = getInnerTextById("feni-amount");

    const myAmount = getInnerTextById("my-amount");

    if (feniInput > 0 && feniInput <= myAmount) {
      const feniNewAmount = addDonate(feniInput, feniAmount);

      const myNewAmount = getMoneyFromAmount(myAmount, feniInput);

      document.getElementById("feni-amount").innerText = feniNewAmount;

      document.getElementById("my-amount").innerText = myNewAmount;
    } else {
      alert("You typed the wrong number. Please type the correct number.");
    }
  });

  // card three
document.getElementById("quota-donate-button").addEventListener("click", function () {
    const quotaInput = getValueById("quota-donate-input");

    const quotaAmount = getInnerTextById("quota-amount");

    const myAmount = getInnerTextById("my-amount");

    if (quotaInput > 0 && quotaInput <= myAmount) {
      const quotaNewAmount = addDonate(quotaInput, quotaAmount);

      const myNewAmount = getMoneyFromAmount(myAmount, quotaInput);

      document.getElementById("quota-amount").innerText = quotaNewAmount;

      document.getElementById("my-amount").innerText = myNewAmount;
    } else {
      alert("You typed the wrong number. Please type the correct number.");
    }
  });


  // history part
document.getElementById("history-button").addEventListener("click", function(){

  
})


