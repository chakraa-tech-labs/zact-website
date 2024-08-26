// FirstInput
var firstInput = document.getElementById("firstInput");
var firstAlert = document.getElementById("alertText1");

// SecoundInput
var secoundtInput = document.getElementById("secoundInput");
var secoundAlert = document.getElementById("alertText2");

// ThirdInput
var thirdInput = document.getElementById("thirdInput");
var thirdInputAlert = document.getElementById("alertText3");

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 60;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// FirstInput Sumbit Function
function successMessage1(e) {
  e.preventDefault();

  var inputValue = firstInput.value;

  function validMail(inputValue) {
    return validator.isEmail(inputValue);
  }

  if (!validMail(inputValue)) {
    firstInput.style.border = "2px solid #ff6e57";
    firstAlert.style.visibility = "visible";
    // firstAlert.style.display = "block";
    return;
  }

  firstInput.value = "";
  openWish();
}

// FirstInput Style Reset
function resetStyle1() {
  firstInput.style.border = "1px solid #9b9eae";
  firstAlert.style.visibility = "hidden";
}

// SecoundInput Sumbit Function
function successMessage2(e) {
  e.preventDefault();

  var inputValue = secoundtInput.value;

  function validMail(inputValue) {
    return validator.isEmail(inputValue);
  }

  if (!validMail(inputValue)) {
    secoundtInput.style.border = "2px solid #ff6e57";
    secoundAlert.style.visibility = "visible";
    return;
  }

  secoundtInput.value = "";
  openWish2();
}

// SecoundInput Style Reset
function resetStyle2() {
  secoundtInput.style.border = "1px solid #FFFFFF";
  secoundAlert.style.visibility = "hidden";
}

// ThirdInput Sumbit Function
function successMessage3(e) {
  e.preventDefault();

  var inputValue = thirdInput.value;

  function validMail(inputValue) {
    return validator.isEmail(inputValue);
  }

  if (!validMail(inputValue)) {
    thirdInput.style.border = "2px solid #ff6e57";
    thirdInputAlert.style.visibility = "visible";

    return;
  }

  thirdInput.value = "";
  openWish2();
}

// ThirdInput Style Reset
function resetStyle3() {
  thirdInput.style.border = "1px solid #9095a1";
  thirdInputAlert.style.visibility = "hidden";
}

// Wish Open Common Function
function openWish() {
  var background = document.getElementById("background-div");
  var successMessage = document.getElementById("successMessage");
  var body = document.getElementById("body");

  successMessage.style.transform = "scale(1)";
  background.style.transform = "scalex(1)";
  body.style.overflow = "hidden";
  smoothScrollTo("background-div");

  setTimeout(function () {
    successMessage.style.transform = "scale(0)";

    setTimeout(function () {
      background.style.transform = "scaleX(0)";
      body.style.overflow = "auto";
    }, 500);
  }, 1500);
}

// Wish Open Common Function
function openWish2() {
  var background = document.getElementById("background-div-2");
  var successMessage = document.getElementById("successMessage2");
  var body = document.getElementById("body");

  successMessage.style.transform = "scale(1)";
  background.style.transform = "scalex(1)";
  body.style.overflow = "hidden";
  smoothScrollTo("background-div-2");

  setTimeout(function () {
    successMessage.style.transform = "scale(0)";

    setTimeout(function () {
      background.style.transform = "scaleX(0)";
      body.style.overflow = "auto";
    }, 500);
  }, 1500);
}

// Reach to Wish-Div
function smoothScrollTo(targetId) {
  document.getElementById(targetId).scrollIntoView({
    behavior: "auto",
  });
}
