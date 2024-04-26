
function validateForm() {
    let name;
    if (document.getElementById("id1").validity.tooLong) {
      name = "Name must be between 2-8 characters in length!";
    } else if (document.getElementById("id1").validity.tooShort) {
      name = "Name must be between 2-8 characters in length!";
    } else {
      name = "Thank you for submitting your name!";
      console.log(document.getElementById("id1").value)
    };
    let mobile;
    if (document.getElementById("id2").validity.patternMismatch) {
      mobile = "Please enter a valid mobile number!";
    } else if (document.getElementById("id2").validity.valueMissing) {
      mobile = "Please enter your mobile number!";
    } else {
      mobile = "Thank you for submitting your mobile number!";
    } 
    let email;
    if (document.getElementById("id3").validity.typeMismatch) {
      email = "Please enter a valid email!";
    } else if (document.getElementById("id3").validity.valid) {
      email = "Thank you for submitting your email!";
    } else if (document.getElementById("id3").validity.patternMismatch) {
      email = "Please match the format requested";
    } else {
      email = "Please enter your email!";
    }
    document.write(name +"<br>"+ email +"<br>"+ mobile);
  };

  $("#submit1").click(validateForm);
  