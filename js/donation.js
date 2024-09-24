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


