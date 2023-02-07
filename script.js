
(function () {

  // Get a reference to the display element
  let display = document.getElementById("display");

  // Get references to the operation buttons
  let btns = document.querySelectorAll("#ele");
  let clearBtn = document.getElementById("clear");
  let equalBtn = document.getElementById("equal");


  btns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        let value = e.target.dataset.num;
        display.value += value;
        console.log(value)
    })

  });

  equalBtn.addEventListener("click", function (e) {
      if (display.value === '') {
        display.value = "Enter number";
      } else {
        let answer = eval(display.value);
        display.value = answer;
      }
      console.log(display.value)
  })

  clearBtn.addEventListener("click", function(e) {
      display.value = "";
  })


})();


