const inputFields = document.querySelectorAll(".input-field");
const nameLabel = document.querySelector(".name-label");
const numberLabel = document.querySelector(".number-label");
for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("focus", (event) => {
    if (event.currentTarget === inputFields[0]) {
      nameLabel.style.transform = "translateY(-20px)";
      nameLabel.style.fontSize = "14px";
    } else {
      numberLabel.style.transform = "translateY(-20px)";
      numberLabel.style.fontSize = "14px";
    }
  });
  inputFields[i].addEventListener("blur", (event) => {
    if(inputFields[i].value === '') { 
      if (event.currentTarget === inputFields[0]) {
        nameLabel.style.transform = "translateY(0px)";
        nameLabel.style.fontSize = "16px";
      } else {
        numberLabel.style.transform = "translateY(0px)";
        numberLabel.style.fontSize = "16px";
      }
    }
  });
}
