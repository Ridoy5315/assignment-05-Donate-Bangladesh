// card one
document.getElementById("noakhali-donate-button").addEventListener("click", function () {
    const noakhaliInput = getValueById("noakhali-donate-input");

    if(isNaN(noakhaliInput)){
      alert("Please type a correct amount");
      return;
    }

    const noakhaliAmount = getInnerTextById("noakhali-amount");

    const myAmount = getInnerTextById("my-amount");


    if (noakhaliInput > 0 && noakhaliInput <= myAmount) {
      const noakhaliNewAmount = addDonate(noakhaliInput, noakhaliAmount);

      const myNewAmount = getMoneyFromAmount(myAmount, noakhaliInput);

      document.getElementById("noakhali-amount").innerText = noakhaliNewAmount;

      document.getElementById("my-amount").innerText = myNewAmount;

      // adding the event to history
      const realTime = currentTime();
      const div = document.createElement("div");
      div.classList.add("border", "p-8", "rounded-xl", "mb-5");
      div.innerHTML = `
      <h5 class="font-bold text-xl mb-3">${noakhaliInput} Take is Donated for the affected of Noakhali(Bangladesh) disaster area</h5>
      <p class="font-light">Date: <span>${realTime}</span></p>
      `
      document.getElementById("history-section").appendChild(div);

      document.getElementById("my_modal_1").showModal();
    } 
    else {
      alert("You typed the wrong number. Please type the correct number.");
    }
  });

  // card two
document.getElementById("feni-donate-button").addEventListener("click", function () {
    const feniInput = getValueById("feni-donate-input");

    if(isNaN(feniInput)){
      alert("Please type a correct amount");
      return;
    }

    const feniAmount = getInnerTextById("feni-amount");

    const myAmount = getInnerTextById("my-amount");

    if (feniInput > 0 && feniInput <= myAmount) {
      const feniNewAmount = addDonate(feniInput, feniAmount);

      const myNewAmount = getMoneyFromAmount(myAmount, feniInput);

      document.getElementById("feni-amount").innerText = feniNewAmount;

      document.getElementById("my-amount").innerText = myNewAmount;

      // adding the event to history
      const realTime = currentTime();
      const div = document.createElement("div");
      div.classList.add("border", "p-8", "rounded-xl", "mb-5");
      div.innerHTML = `
      <h5 class="font-bold text-xl mb-3">${feniInput} Take is Donated for Flood affected people of Feni, Bangladesh</h5>
      <p class="font-light">Date: <span>${realTime}</span></p>
      `
      document.getElementById("history-section").appendChild(div);

      document.getElementById("my_modal_1").showModal();

    } else {
      alert("You typed the wrong number. Please type the correct number.");
    }
  });

  // card three
document.getElementById("quota-donate-button").addEventListener("click", function () {
    const quotaInput = getValueById("quota-donate-input");

    if(isNaN(quotaInput)){
      alert("Please type a correct amount");
      return;
    }

    const quotaAmount = getInnerTextById("quota-amount");

    const myAmount = getInnerTextById("my-amount");

    if (quotaInput > 0 && quotaInput <= myAmount) {
      const quotaNewAmount = addDonate(quotaInput, quotaAmount);

      const myNewAmount = getMoneyFromAmount(myAmount, quotaInput);

      document.getElementById("quota-amount").innerText = quotaNewAmount;

      document.getElementById("my-amount").innerText = myNewAmount;

      // adding the event to history
      const realTime = currentTime();
      const div = document.createElement("div");
      div.classList.add("border", "p-8", "rounded-xl", "mb-5");
      div.innerHTML = `
      <h5 class="font-bold text-xl mb-3">${quotaInput} Take is Donated to injured students of Bangladesh quota reform movement</h5>
      <p class="font-light">Date: <span>${realTime}</span></p>
      `
      document.getElementById("history-section").appendChild(div);

      document.getElementById("my_modal_1").showModal();
    } else {
      alert("You typed the wrong number. Please type the correct number.");
    }
  });



