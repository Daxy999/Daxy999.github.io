function ValidateForm(event) {
  event.preventDefault();
  document.getElementById("ErrorMail").innerHTML = "";
  document.getElementById("ErrorMessage").innerHTML = "";
  document.getElementById("SuccessMail").innerHTML = "";
  document.getElementById("SuccessMessage").innerHTML = "";
  document.getElementById("SuccessSubmit").innerHTML = "";
  document.getElementById("ErrorSubmit").innerHTML = "";

  let Email = document.getElementById("Email").value;
  let Message = document.getElementById("Message").value;

  if (Email == "") {
    document.getElementById("ErrorMail").innerHTML = "Please enter your Email.";
  } else {
    document.getElementById("SuccessMail").innerHTML = "Email entered.";
  }

  if (Message == "") {
    document.getElementById("ErrorMessage").innerHTML =
      "Please enter your message.";
  } else {
    document.getElementById("SuccessMessage").innerHTML =
      "Thank you for recomendation.";
  }
  if (Email && Message !== "") {
    document.getElementById("SuccessSubmit").innerHTML = "Success submit";
  } else {
    document.getElementById("ErrorSubmit").innerHTML = "Error submit";
  }
}
function onNavChange(navId) {
  console.log(navId);

  if (navId === "top10") {
    document.getElementById("top10").style.display = "block";
    document.getElementById("filmovi").style.display = "none";
    document.getElementById("serije").style.display = "none";
    document.getElementById("najave").style.display = "none";
  } else if (navId === "filmovi") {
    document.getElementById("top10").style.display = "none";
    document.getElementById("filmovi").style.display = "block";
    document.getElementById("serije").style.display = "none";
    document.getElementById("najave").style.display = "none";
  } else if (navId === "serije") {
    document.getElementById("top10").style.display = "none";
    document.getElementById("filmovi").style.display = "none";
    document.getElementById("serije").style.display = "block";
    document.getElementById("najave").style.display = "none";
  } else if (navId === "najave") {
    document.getElementById("top10").style.display = "none";
    document.getElementById("filmovi").style.display = "none";
    document.getElementById("serije").style.display = "none";
    document.getElementById("najave").style.display = "block";
  }
}
