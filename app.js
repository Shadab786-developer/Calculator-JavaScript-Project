//Wrap code in an IIFE
(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  const values = JSON.parse(localStorage.getItem("values")) || [];
  //retrieve data from numbers that are clicked
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;

      // if (e.target.dataset.ope) {
      //   screen.value = e.target.dataset.ope;
      // }
    });
    setLocal();
    pickFromLocal();
    renderAnswer();
  });
  values.forEach((valu) => pickFromLocal(valu));
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please Enter a Value";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
      values.push(answer);
      pickFromLocal(answer);
    }
    setLocal();
    pickFromLocal();
    renderAnswer();
  });
  function pickFromLocal(valu) {
    console.log(valu);
  }
  function renderAnswer() {
    screen.value = values;
  }
  clear.addEventListener("click", function (e) {
    screen.value = "";
    localStorage.clear(values.splice(0));
  });
  function setLocal() {
    localStorage.setItem("values", JSON.stringify(values));
  }
})(); //end IIFE
