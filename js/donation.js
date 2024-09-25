// card one
document.getElementById("noakhali-donate-button").addEventListener("click", function () {
    const noakhaliInput = getValueById("noakhali-donate-input");

    if(isNaN(noakhaliInput)){
      alert("Invalid donation amount");
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
      div.classList.add("border", "lg:p-8", "p-4", "rounded-xl", "lg:mb-5", "mb-3");
      div.innerHTML = `
      <h5 class="font-bold lg:text-xl text-lg lg;mb-3 mb-2">${noakhaliInput} Take is Donated for the affected of Noakhali(Bangladesh) disaster area</h5>
      <p class="font-light lg:text-base text-sm bg-slate-100 p-2 rounded-lg">Date: <span>${realTime}</span></p>
      `
      document.getElementById("history-section").appendChild(div);

      document.getElementById("my_modal_1").showModal();

    } 
    else {
      alert("You typed the wrong number. Please type the correct number.");
    }
    document.getElementById("noakhali-donate-input").value = '';
  });

  // card two
document.getElementById("feni-donate-button").addEventListener("click", function () {
    const feniInput = getValueById("feni-donate-input");

    if(isNaN(feniInput)){
      alert("Invalid donation amount");
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
      div.classList.add("border", "lg:p-8", "p-4", "rounded-xl", "lg:mb-5", "mb-3");
      div.innerHTML = `
      <h5 class="font-bold lg:text-xl text-lg lg;mb-3 mb-2"">${feniInput} Take is Donated for Flood affected people of Feni, Bangladesh</h5>
      <p class="font-light lg:text-base text-sm bg-slate-100 p-2 rounded-lg">Date: <span>${realTime}</span></p>
      `
      document.getElementById("history-section").appendChild(div);

      document.getElementById("my_modal_1").showModal();

    } else {
      alert("You typed the wrong number. Please type the correct number.");
    }
    document.getElementById("feni-donate-input").value = '';
  });

  // card three
document.getElementById("quota-donate-button").addEventListener("click", function () {
    const quotaInput = getValueById("quota-donate-input");

    if(isNaN(quotaInput)){
      alert("Invalid donation amount");
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
      div.classList.add("border", "lg:p-8", "p-4", "rounded-xl", "lg:mb-5", "mb-3");
      div.innerHTML = `
      <h5 class="font-bold lg:text-xl text-lg lg;mb-3 mb-2"">${quotaInput} Take is Donated to injured students of Bangladesh quota reform movement</h5>
      <p class="font-light lg:text-base text-sm bg-slate-100 p-2 rounded-lg">Date: <span>${realTime}</span></p>
      `
      document.getElementById("history-section").appendChild(div);

      document.getElementById("my_modal_1").showModal();

    } else {
      alert("You typed the wrong number. Please type the correct number.");
    }
    document.getElementById("quota-donate-input").value = '';
  });



