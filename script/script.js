"use strict";

const submitBtn = document.querySelector(".submit");
const inputText = document.querySelector("input");
const inputTextError = document.createElement("span");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!inputText.value || !inputText.value.includes("@")) {
    inputText.value = "";
    inputText.style.borderColor = "#ff5263";
    inputText.placeholder = "example@email/com";
    inputTextError.textContent = "Please provie a valid email address";
    inputTextError.style.color = "#ff5263";
    inputTextError.style.fontWeight = "600";
    inputTextError.style.fontStyle = "italic";
    inputText.after(inputTextError);
  }
});
