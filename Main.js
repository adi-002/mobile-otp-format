//onClick Event

var popup = document.getElementById("popup");

var btn = document.getElementById("btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  popup.style.display = "block";
};

span.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

//Shifting to different Input on keypress

var allElements = document.querySelectorAll(".opt_input");
var i;
for (i = 0; i < allElements.length; i++) {
  var el = allElements[i];
  el.addEventListener("keypress", function () {
    this.nextSibling.nextSibling.focus();
  });
}

//Assigning the task to Backspace and arrow Button

var inputs = document.getElementsByClassName("opt_input");
for (var i = 0; i < inputs.length; i++)
  inputs[i].addEventListener(
    "keydown",

    function (event) {
      if (event.keyCode == 8) {
        if (this.previousElementSibling) {
          this.previousElementSibling.focus();
        }
      } else if (event.keyCode == 37) {
        if (this.previousElementSibling) {
          this.previousElementSibling.focus();
        }
      } else if (event.keyCode == 39) {
        if (this.nextElementSibling) {
          this.nextElementSibling.focus();
        } else return false;
      }
    },
    false
  );

//Paste multiple values in multiple inputs.

var $inputs = $(".opt_input");
var intRegex = /^\d+$/;

// Prevents pasting non-digits and if value is 6 characters long will parse each character into an individual box.
$inputs.on("paste", function () {
  var $this = $(this);
  var originalValue = $this.val();

  $this.val("");

  $this.one("input.fromPaste", function () {
    $currentInputBox = $(this);

    var pastedValue = $currentInputBox.val();

    if (pastedValue.length == 6 && intRegex.test(pastedValue)) {
      pasteValues(pastedValue);
    } else {
      $this.val(originalValue);
    }

    $inputs.attr("maxlength", 1);
  });

  $inputs.attr("maxlength", 6);
});

// Parses the individual digits into the individual boxes.
function pasteValues(element) {
  var values = element.split("");

  $(values).each(function (index) {
    var $inputBox = $('.opt_input[name="chars[' + (index + 1) + ']"]');
    $inputBox.val(values[index]);
  });
}

//Updating the mobile number in the Popup

const input = document.querySelector(".inputField");
const log = document.getElementById("mobileNumber");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}

//Alert on clicking the 'Verify Phone No.' button

function thanxFn() {
  alert("Thank you for the mobile verification");
}
